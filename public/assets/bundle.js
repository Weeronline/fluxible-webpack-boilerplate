webpackJsonp([0],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fluxibleRouter = __webpack_require__(91);

var _routes = __webpack_require__(401);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _fluxibleRouter.RouteStore.withStaticRoutes(_routes2.default);

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(166);


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(256);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.debug = __webpack_require__(9);

var debug = window.debug("boilerplate");

var mountNode = document.getElementById("content");
var dehydratedState = window.App;

debug("Rehydrating state...", dehydratedState);

_app2.default.rehydrate(dehydratedState, function (err, context) {
  if (err) {
    throw err;
  }

  debug("State has been rehydrated");
  var Main = _app2.default.getComponent();

  _reactDom2.default.render(_react2.default.createElement(Main, { context: context.getComponentContext() }), mountNode, function () {
    debug("Root component has been mounted");
  });
});

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fluxible = __webpack_require__(257);

var _fluxible2 = _interopRequireDefault(_fluxible);

var _fluxiblePluginFetchr = __webpack_require__(267);

var _fluxiblePluginFetchr2 = _interopRequireDefault(_fluxiblePluginFetchr);

var _stores = __webpack_require__(388);

var _stores2 = _interopRequireDefault(_stores);

var _Main = __webpack_require__(406);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _fluxible2.default({
  component: _Main2.default
});

app.plug((0, _fluxiblePluginFetchr2.default)({
  xhrPath: '/services',
  xhrTimeout: 6000
}));

(0, _stores2.default)(app);

exports.default = app;

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerStores;

var _routeStore = __webpack_require__(156);

var _routeStore2 = _interopRequireDefault(_routeStore);

var _applicationStore = __webpack_require__(404);

var _applicationStore2 = _interopRequireDefault(_applicationStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerStores(app) {
  app.registerStore(_routeStore2.default);
  app.registerStore(_applicationStore2.default);
}

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadHome = __webpack_require__(402);

var _loadHome2 = _interopRequireDefault(_loadHome);

var _homeContainer = __webpack_require__(403);

var _homeContainer2 = _interopRequireDefault(_homeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  index: {
    method: 'GET',
    path: '/',
    handler: _homeContainer2.default,
    page: 'home',
    title: 'Home'
    //    action: loadHome,
  }
};

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadHome;
function loadHome() {}

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeContainer = function (_Component) {
  _inherits(HomeContainer, _Component);

  function HomeContainer() {
    _classCallCheck(this, HomeContainer);

    return _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).apply(this, arguments));
  }

  _createClass(HomeContainer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "home-container" },
        _react2.default.createElement(
          "h2",
          null,
          "Home"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Welcome to the site!"
        ),
        _react2.default.createElement(
          "p",
          null,
          " Hey awesome site"
        ),
        _react2.default.createElement(
          "p",
          null,
          " Hey awesomer site"
        ),
        _react2.default.createElement(
          "p",
          null,
          " uber awesome"
        ),
        _react2.default.createElement(
          "p",
          null,
          " Extra awesome"
        )
      );
    }
  }]);

  return HomeContainer;
}(_react.Component);

exports.default = HomeContainer;

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseStore2 = __webpack_require__(405);

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

var _routeStore = __webpack_require__(156);

var _routeStore2 = _interopRequireDefault(_routeStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLOBAL_ERROR = 'applicationStore/globalError';

var ApplicationStore = function (_BaseStore) {
  _inherits(ApplicationStore, _BaseStore);

  _createClass(ApplicationStore, null, [{
    key: 'storeName',
    get: function get() {
      return 'ApplicationStore';
    }
  }, {
    key: 'handlers',
    get: function get() {
      return _defineProperty({
        NAVIGATE_SUCCESS: 'handleNavigateSuccess',
        NAVIGATE_FAILURE: 'handleNavigateFailure'
      }, GLOBAL_ERROR, 'setGlobalError');
    }
  }]);

  function ApplicationStore(dispatcher) {
    _classCallCheck(this, ApplicationStore);

    var _this = _possibleConstructorReturn(this, (ApplicationStore.__proto__ || Object.getPrototypeOf(ApplicationStore)).call(this, dispatcher));

    _this.pageTitle = '';
    _this.error = null;
    return _this;
  }

  _createClass(ApplicationStore, [{
    key: 'handleNavigateSuccess',
    value: function handleNavigateSuccess(currentRoute) {
      var _this2 = this;

      this.error = null;
      this.dispatcher.waitFor(_routeStore2.default, function () {
        if (currentRoute && currentRoute.title) {
          _this2.pageTitle = currentRoute.title;
          _this2.emitChange();
        }
      });
      this.emitChange();
    }
  }, {
    key: 'handleNavigateFailure',
    value: function handleNavigateFailure(err) {
      this.error = err;
      this.emitChange();
    }
  }, {
    key: 'getGlobalError',
    value: function getGlobalError() {
      return this.error;
    }
  }, {
    key: 'getPageTitle',
    value: function getPageTitle() {
      return this.pageTitle;
    }
  }, {
    key: 'dehydrate',
    value: function dehydrate() {
      return {
        errorMessage: this.error && this.error.message,
        errorCode: this.error && this.error.statusCode,
        errorStack: this.error && this.error.stack,
        pageTitle: this.pageTitle
      };
    }
  }, {
    key: 'rehydrate',
    value: function rehydrate(state) {
      var message = state.errorMessage;
      if (message) {
        this.error = new Error(message);
        this.error.statusCode = state.errorCode;
        this.error.stack = state.errorStack;
      } else {
        this.error = null;
      }
      this.pageTitle = state.pageTitle;
    }
  }]);

  return ApplicationStore;
}(_BaseStore3.default);

exports.default = ApplicationStore;

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(407);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _fluxibleRouter = __webpack_require__(91);

var _fluxibleAddonsReact = __webpack_require__(415);

var _Nav = __webpack_require__(420);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Wrap Root with the fluxible context.
var Main = (_dec = (0, _fluxibleAddonsReact.connectToStores)(['ApplicationStore'], function (context) {
  return {
    error: context.getStore('ApplicationStore').getGlobalError(),
    pageTitle: context.getStore('ApplicationStore').getPageTitle()
  };
}), (0, _fluxibleAddonsReact.provideContext)(_class = (0, _fluxibleRouter.handleHistory)(_class = _dec(_class = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentRoute = _props.currentRoute,
          currentNavigateError = _props.currentNavigateError,
          isNavigateComplete = _props.isNavigateComplete;

      var Handler = currentRoute && currentRoute.handler;
      var content = void 0;

      if (currentNavigateError && currentNavigateError.statusCode === 404) {
        // This "not found" error comes from a page init actions
        // content = <NotFoundPage />;
        content = null;
      } else if (currentNavigateError) {
        // Generic error, usually always with statusCode 500
        // content = <ErrorPage err={ currentNavigateError } />;
        content = null;
      } else if (!Handler) {
        // No handler: this is another case where a route is not found (e.g.
        // is not defined in the routes.js config)
        // content = <NotFoundPage />;
        content = null;
      } else if (!isNavigateComplete) {
        // Render a loading page while waiting the route's action to finish
        // content = <LoadingPage />;
        content = null;
      } else {
        // Render the Handler (aka the page) for the current route. The route params
        // (e.g. values from the URLs) are props being sent to the page component,
        // for example the `id` of a photo for the `PhotoPage` component.
        var params = currentRoute.params;
        content = _react2.default.createElement(Handler, params);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, { title: this.props.pageTitle }),
        _react2.default.createElement(_Nav2.default, { currentRoute: currentRoute }),
        content
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        isNavigateComplete: _propTypes2.default.bool,
        currentRoute: _propTypes2.default.object,
        currentNavigateError: _propTypes2.default.shape({
          statusCode: _propTypes2.default.number.isRequired,
          message: _propTypes2.default.string.isRequired
        }),
        error: _propTypes2.default.object,
        pageTitle: _propTypes2.default.string
      };
    }
  }]);

  return Main;
}(_react.Component)) || _class) || _class) || _class);
exports.default = Main;

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _fluxibleRouter = __webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      var selected = this.props.currentRoute;
      var links = this.props.links;

      var linkHTML = Object.keys(links).map(function (name) {
        var className = '';
        var link = links[name];

        if (selected && selected.name === name) {
          className = 'pure-menu-selected';
        }

        return _react2.default.createElement(
          'li',
          { className: className, key: link.path },
          _react2.default.createElement(
            _fluxibleRouter.NavLink,
            { routeName: link.page, activeStyle: { backgroundColor: '#eee' } },
            link.title
          )
        );
      });

      return _react2.default.createElement(
        'ul',
        { className: 'pure-menu pure-menu-open pure-menu-horizontal' },
        linkHTML
      );
    }
  }]);

  return Nav;
}(_react2.default.Component);

Nav.defaultProps = {
  selected: null,
  links: {}
};

exports.default = Nav;

/***/ })

},[165]);
//# sourceMappingURL=bundle.js.map