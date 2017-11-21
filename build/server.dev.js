require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(1);

/*
 * __dirname is changed after webpack-ed to another directory
 * so process.cwd() is used instead to determine the correct base directory
 * Read more: https://nodejs.org/api/process.html#process_process_cwd
 */
var CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  app: path.resolve(CURRENT_WORKING_DIR, 'app'),
  assets: path.resolve(CURRENT_WORKING_DIR, 'public', 'assets'),
  build: path.resolve(CURRENT_WORKING_DIR, 'build'),
  public: '/assets/', // use absolute path for css-loader?
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules')
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ENV = exports.ENV = "development" || 'development';
var GOOGLE_ANALYTICS_ID = exports.GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID || null;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isClient = exports.isDebug = exports.isProduction = undefined;

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(3);

var _webpack2 = _interopRequireDefault(_webpack);

var _express3 = __webpack_require__(7);

var _express4 = _interopRequireDefault(_express3);

var _env = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isProduction = exports.isProduction = _env.ENV === 'production';
var isDebug = exports.isDebug = _env.ENV === 'development';
var isClient = exports.isClient = typeof window !== 'undefined';

var app = (0, _express2.default)();

if (isDebug) {
  var webpackDevMiddleware = __webpack_require__(11);
  var webpackHotMiddleware = __webpack_require__(12);
  var webpackConfig = __webpack_require__(13);
  var devBrowserConfig = webpackConfig({ browser: true });
  var compiler = (0, _webpack2.default)(devBrowserConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: devBrowserConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

/*
 * Bootstrap application settings
 */
(0, _express4.default)(app);

//app.get('*', renderMiddleware);

app.listen(app.get('port'));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(8);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _helmet = __webpack_require__(9);

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = __webpack_require__(10);

var _compression2 = _interopRequireDefault(_compression);

var _env = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.set('port', process.env.PORT || 3000);

  if (_env.ENV === 'production') {
    app.use((0, _compression2.default)());
    // Secure your Express apps by setting various HTTP headers. Documentation: https://github.com/helmetjs/helmet
    app.use((0, _helmet2.default)());
  }

  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(_express2.default.static(_path2.default.join(process.cwd(), 'public')));

  console.log('--------------------------');
  console.log('===> 😊  Starting Server . . .');
  console.log('===>  Environment: ' + _env.ENV);
  console.log('===>  Listening on port: ' + app.get('port'));
  if (_env.ENV === 'production') {
    console.log('===> 🚦  Note: In order for authentication to work in production');
    console.log('===>           you will need a secure HTTPS connection');
  }
  console.log('--------------------------');
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(0);
var rules = __webpack_require__(14);
var plugins = __webpack_require__(18);
var externals = __webpack_require__(19);
var resolve = __webpack_require__(21);

module.exports = function () {
  var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isProduction = "development" === 'production';
  var isBrowser = env.browser;

  console.log('Running webpack in ' + "development" + ' mode on ' + (isBrowser ? 'browser' : 'server'));

  var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
  var node = { __dirname: true, __filename: true };

  var prodServerRender = {
    devtool: 'source-map',
    context: PATHS.app,
    entry: { server: '../server/index' },
    target: 'node',
    node: node,
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    module: { rules: rules({ production: true, browser: false }) },
    resolve: resolve,
    plugins: plugins({ production: true, browser: false })
  };

  var prodBrowserRender = {
    devtool: 'cheap-module-source-map',
    context: PATHS.app,
    entry: { app: ['./client'] },
    node: node,
    output: {
      path: PATHS.assets,
      filename: '[name].js',
      publicPath: PATHS.public,
      chunkFilename: '[id].chunk.js'
    },
    module: { rules: rules({ production: false, browser: true }) },
    resolve: resolve,
    plugins: plugins({ production: false, browser: true })
  };

  var devBrowserRender = {
    devtool: 'eval',
    context: PATHS.app,
    entry: { app: ['./client', hotMiddlewareScript] },
    node: node,
    output: {
      path: PATHS.assets,
      filename: '[name].js',
      publicPath: PATHS.public
    },
    module: { rules: rules({ production: false, browser: true }) },
    resolve: resolve,
    plugins: plugins({ production: false, browser: true })
  };

  var devServerRender = {
    devtool: 'sourcemap',
    context: PATHS.app,
    entry: { server: '../server/index' },
    target: 'node',
    node: node,
    externals: externals,
    output: {
      path: PATHS.build,
      filename: '[name].dev.js',
      publicPath: PATHS.public
    },
    module: { rules: rules({ production: false, browser: false }) },
    resolve: resolve,
    plugins: plugins({ production: false, browser: false })
  };

  var prodConfig = isBrowser ? prodBrowserRender : prodServerRender;
  var devConfig = isBrowser ? devBrowserRender : devServerRender;
  var configuration = isProduction ? prodConfig : devConfig;

  return configuration;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var image = __webpack_require__(15);
var javascript = __webpack_require__(16);
var css = __webpack_require__(17);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  return [javascript({ production: production, browser: browser }), css({ production: production, browser: browser }), image()];
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(0);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 10000 : _ref$limit;

  return {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
    loader: 'url-loader',
    options: { name: '[hash].[ext]', limit: limit },
    include: PATHS.app
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(0);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var enableHotModuleReplacement = !production && browser;
  var createPresets = function createPresets(enableHotModuleReplacement) {
    var presets = ['es2015', 'react', 'stage-0'];
    return enableHotModuleReplacement ? ['react-hmre'].concat(presets) : presets;
  };
  var presets = createPresets(enableHotModuleReplacement);

  var plugins = production ? ['transform-react-remove-prop-types', 'transform-react-constant-elements', 'transform-react-inline-elements', 'transform-decorators-legacy'] : ['transform-decorators-legacy'];

  return {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    options: {
      presets: presets,
      plugins: plugins
    },
    exclude: PATHS.modules
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var path = __webpack_require__(1);
var ExtractTextPlugin = __webpack_require__(5);
var PATHS = __webpack_require__(0);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  /*
   * modules: boolean - Enable/Disable CSS Modules
   * importLoaders: number - Number of loaders applied before CSS loader
   *
   * Read more about css-loader options
   * https://webpack.js.org/loaders/css-loader/#options
   *
   * For server-side rendering we use css-loader/locals as we do not want to
   * embed CSS. However, we still require the mappings to insert as className in
   * our views.
   *
   * Referenced from: https://github.com/webpack-contrib/css-loader#css-scope
   *
   * For prerendering with extract-text-webpack-plugin you should use
   * css-loader/locals instead of style-loader!css-loader in the prerendering bundle.
   * It doesn't embed CSS but only exports the identifier mappings.
   */
  var localIdentName = 'localIdentName=[name]__[local]___[hash:base64:5]';

  var createCssLoaders = function createCssLoaders(embedCssInBundle) {
    return [{
      loader: embedCssInBundle ? 'css-loader' : 'css-loader/locals',
      options: {
        localIdentName: localIdentName,
        sourceMap: true,
        modules: true,
        importLoaders: 1
      }
    }];
  };

  var createBrowserLoaders = function createBrowserLoaders(extractCssToFile) {
    return function (loaders) {
      if (extractCssToFile) {
        return ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: loaders
        });
      }
      return [{ loader: 'style-loader' }].concat(_toConsumableArray(loaders));
    };
  };

  var serverLoaders = createCssLoaders(false);
  var browserLoaders = createBrowserLoaders(production)(createCssLoaders(true));

  return {
    test: /\.css$/,
    use: browser ? browserLoaders : serverLoaders,
    include: PATHS.app
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var webpack = __webpack_require__(3);
var ExtractTextPlugin = __webpack_require__(5);
// const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var bannerOptions = { raw: true, banner: 'require("source-map-support").install();' };
  var compress = { warnings: false };
  var compileTimeConstantForMinification = { __PRODUCTION__: JSON.stringify(production) };

  if (!production && !browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new webpack.BannerPlugin(bannerOptions)];
  }
  if (!production && browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()];
  }
  if (production && !browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new webpack.BannerPlugin(bannerOptions), new webpack.optimize.UglifyJsPlugin({ compress: compress })];
  }
  if (production && browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new ExtractTextPlugin({
      filename: '[contenthash].css',
      allChunks: true
    }), new webpack.optimize.UglifyJsPlugin({ compress: compress })];
  }
  return [];
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fs = __webpack_require__(20);

var externalModules = fs.readdirSync('node_modules').filter(function (x) {
  return ['.bin'].indexOf(x) === -1;
}).reduce(function (acc, cur) {
  return Object.assign(acc, _defineProperty({}, cur, 'commonjs ' + cur));
}, {});

module.exports = externalModules;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(0);

module.exports = {
  modules: [PATHS.app, PATHS.modules],
  extensions: ['.js', '.jsx']
};

/***/ })
/******/ ]);
//# sourceMappingURL=server.dev.js.map