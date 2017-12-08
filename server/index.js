import express from 'express';
import webpack from 'webpack';
import React from 'react';
import ReactDOM from 'react-dom/server';

import { navigateAction } from 'fluxible-router';
import { createElementWithContext } from 'fluxible-addons-react';
import serialize from 'serialize-javascript';

import initExpress from './init/express';
import { ENV } from '../config/env';

import app from '../app/app';
import registerServices from '../app/config/services';

import HtmlComponent from '../app/containers/Html.js';

export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';

const server = express();

if (isDebug) {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack/webpack.config');
  const devBrowserConfig = webpackConfig({ browser: true });
  const compiler = webpack(devBrowserConfig);
  server.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: devBrowserConfig.output.publicPath }));
  server.use(webpackHotMiddleware(compiler));
}

/*
 * Bootstrap application settings
 */
initExpress(server);
// registerServices(server);
//

const FetchrPlugin = app.getPlugin('FetchrPlugin');

server.use(FetchrPlugin.getXhrPath(), FetchrPlugin.getMiddleware({
  responseFormatter(req, res, data) { // eslint-disable-line
    // send Cache-Control when service is called from the client
    //res.set('Cache-Control', req.wolExpires.generateCacheControl());
    return data;
  }
}));

server.use((req, res, next) => {
  const context = app.createContext({ req, res });
  context.executeAction(navigateAction, {
    url: req.url
  }, (err) => {
    if (err) {
      if (err.statusCode && err.statusCode === 404) {
      // Pass through to next middleware
      res.status(err.statusCode);
      next();
      }
    } else {
      next(err);

      const exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';
      const markup = ReactDOM.renderToString(createElementWithContext(context));

      const htmlElement = React.createElement(HtmlComponent, {
        clientFile: ENV === 'production' ? 'bundle.min.js' : 'bundle.js',
        clientVendorFile: ENV === 'production' ? 'vendor.min.js' : 'vendor.js',
        context: context.getComponentContext(),
        state: exposed,
        markup: markup
      });

      const html = ReactDOM.renderToStaticMarkup(htmlElement);
      res.type('html');
      res.write('<!DOCTYPE html>' + html);
      res.end();
      return;
    }
  });
});


server.listen(server.get('port'));
