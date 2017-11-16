import express from express;
import import compression from "compression";
import bodyParser from 'body-parser';
import path from 'path';
import csurf from 'csurf';

import app from './app';

const staticPath = path.resolve(__dirname, "../static");

export default function (callback) {
  const server = express();
  server.set("env", process.env.NODE_ENV || "development");
  server.set("host", process.env.HOST || "0.0.0.0");
  server.set("port", process.env.PORT || 3000);

  server.use(bodyParser.json());
  server.use(compression());
  server.use(csurf({ cookie: true }));

  const fetchr = app.getPlugin("FetchrPlugin");
  server.use(fetchr.getXhrPath(), fetchr.getMiddleware());

  // Use the `static` dir for serving static assets. On production, it contains the js
  // files built with webpack
  server.use(serveStatic(staticPath, {
    maxAge: 365 * 24 * 60 * 60
  }));
}
