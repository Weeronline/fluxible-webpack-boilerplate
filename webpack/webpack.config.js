const nodeExternals = require('webpack-node-externals');
const PATHS = require('./paths');
const rules = require('./rules');
const plugins = require('./plugins');
const externals = require('./externals');
const resolve = require('./resolve');
const stats = require('./stats');

module.exports = (env = {}) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isBrowser = env.browser;

  console.log(`Running webpack in ${process.env.NODE_ENV} mode on ${isBrowser ? 'browser': 'server'}`);

  const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
  const node = { __dirname: true, __filename: true };

  const prodBrowserRender = {
    devtool: 'cheap-module-source-map',
    context: PATHS.app,
    entry: {
      bundle: ['./client'],
    },
    node,
    output: {
      path: PATHS.assets,
      filename: '[name].js',
      publicPath: PATHS.public,
      chunkFilename: '[id].chunk.js',
    },
    module: { rules: rules({ production: false, browser: true }) },
    resolve,
    stats,
    plugins: plugins({ production: false, browser: true })
  };

  const devBrowserRender = {
    devtool: 'eval-source-map',
    context: PATHS.app,
    entry: {
      bundle: ['./client', hotMiddlewareScript]
    },
    node,
    output: {
      path: PATHS.assets,
      filename: '[name].js',
      publicPath: PATHS.public
    },
    module: { rules: rules({ production: false, browser: true }) },
    resolve,
    stats,
    plugins: plugins({ production: false, browser: true })
  };

  const prodServerRender = {
    devtool: 'source-map',
    context: PATHS.app,
    entry: {
      server: '../server/index'
    },
    target: 'node',
    externals: [nodeExternals()],
    node,
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    module: { rules: rules({ production: true, browser: false }) },
    resolve,
    plugins: plugins({ production: true, browser: false }),
    stats,
  };

  const devServerRender = {
    devtool: 'sourcemap',
    context: PATHS.app,
    entry: { server: '../server/index' },
    target: 'node',
    node,
    externals,
    output: {
      path: PATHS.build,
      filename: '[name].dev.js',
      publicPath: PATHS.public,
    },
    module: { rules: rules({ production: false, browser: false }) },
    resolve,
    stats,
    plugins: plugins({ production: false, browser: false })
  };

  const prodConfig = isBrowser ? prodBrowserRender : prodServerRender;
  const devConfig = isBrowser ? devBrowserRender : devServerRender;
  const configuration = isProduction ? prodConfig : devConfig;

  return configuration;
};
