webpackJsonp([2],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(150)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(152)
/* template */
var __vue_template__ = __webpack_require__(161)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e6e3d68"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\auth\\login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e6e3d68", Component.options)
  } else {
    hotAPI.reload("data-v-6e6e3d68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(142)
/* template */
var __vue_template__ = __webpack_require__(143)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\auth\\LoginWithGithub.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cda71d6", Component.options)
  } else {
    hotAPI.reload("data-v-4cda71d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LoginWithGithub',

  computed: {
    githubAuth: function githubAuth() {
      return window.config.githubAuth;
    },
    url: function url() {
      return '/api/oauth/github';
    }
  },

  mounted: function mounted() {
    window.addEventListener('message', this.onMessage, false);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('message', this.onMessage);
  },


  methods: {
    login: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var url;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('auth/fetchOauthUrl', {
                  provider: 'github'
                });

              case 2:
                url = _context.sent;


                openWindow(url, this.$t('login'));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _ref.apply(this, arguments);
      }

      return login;
    }(),


    /**
     * @param {MessageEvent} e
     */
    onMessage: function onMessage(e) {
      if (e.origin !== window.origin || !e.data.token) {
        return;
      }

      this.$store.dispatch('auth/saveToken', {
        token: e.data.token
      });

      this.$router.push({ name: 'home' });
    }
  }

  /**
   * @param  {Object} options
   * @return {Window}
   */
});function openWindow(url, title) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
    options = url;
    url = '';
  }

  options = _extends({ url: url, title: title, width: 600, height: 720 }, options);

  var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left;
  var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top;
  var width = window.innerWidth || document.documentElement.clientWidth || window.screen.width;
  var height = window.innerHeight || document.documentElement.clientHeight || window.screen.height;

  options.left = width / 2 - options.width / 2 + dualScreenLeft;
  options.top = height / 2 - options.height / 2 + dualScreenTop;

  var optionsStr = Object.keys(options).reduce(function (acc, key) {
    acc.push(key + '=' + options[key]);
    return acc;
  }, []).join(',');

  var newWindow = window.open(url, title, optionsStr);

  if (window.focus) {
    newWindow.focus();
  }

  return newWindow;
}

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.githubAuth
    ? _c(
        "button",
        {
          staticClass: "btn btn-dark ml-auto",
          attrs: { type: "button" },
          on: { click: _vm.login }
        },
        [
          _vm._v("\n  " + _vm._s(_vm.$t("login_with")) + "\n  "),
          _c("fa", { attrs: { icon: ["fab", "github"] } })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4cda71d6", module.exports)
  }
}

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(151);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("713e2b5e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e6e3d68\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e6e3d68\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.auth-wrapper[data-v-6e6e3d68] {\n  width: 100%;\n  height: calc(100vh - 56px);\n  padding-top: 70px;\n  background: #50a3a2;\n  background: -webkit-gradient(linear, left top, right bottom, from(#50a3a2), to(#53e3a6));\n  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);\n  -webkit-transition: background-color 1s;\n  transition: background-color 1s;\n}\n.auth[data-v-6e6e3d68] {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 500px;\n  margin: 0 auto;\n  overflow: hidden;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: 0px solid transparent;\n  -webkit-transition: background-color 1s, height .5s;\n  transition: background-color 1s, height .5s;\n}\n.auth-switch[data-v-6e6e3d68],\n.auth-form[data-v-6e6e3d68] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  -webkit-transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n.signingin .auth-switch[data-v-6e6e3d68] {\n  left: 0%;\n}\n.signingin .auth-form[data-v-6e6e3d68] {\n  background-color: #A7C1ED;\n  left: 50%;\n}\n.auth-switch[data-v-6e6e3d68] {\n  left: 50%;\n  padding-top: 120px;\n  color: #fff;\n  text-align: center;\n}\n.auth-switch__text[data-v-6e6e3d68] {\n  -webkit-transition: -webkit-transform .35s;\n  transition: -webkit-transform .35s;\n  transition: transform .35s;\n  transition: transform .35s, -webkit-transform .35s;\n}\nh2[data-v-6e6e3d68] {\n  text-align: center;\n}\n.icon[data-v-6e6e3d68] {\n  font-size: 42px;\n  color: #8E8E8E;\n}\nform[data-v-6e6e3d68] {\n  -webkit-transition: opacity .35s;\n  transition: opacity .35s;\n}\n.AuthEnter[data-v-6e6e3d68] {\n  opacity: 1;\n}\n.AuthLeave[data-v-6e6e3d68] {\n  opacity: 0;\n}\n.auth-form[data-v-6e6e3d68] {\n  background-color: #FAC1EB;\n  left: 0%;\n  z-index: 2;\n  text-align: center;\n  padding: 30px;\n  -webkit-transition-property: left, background-color;\n  transition-property: left, background-color;\n  -webkit-box-shadow: 0 0 15px #8E8E8E;\n          box-shadow: 0 0 15px #8E8E8E;\n}\n.form-control[data-v-6e6e3d68] {\n  padding: 15px 10px;\n}\n.fadeOut[data-v-6e6e3d68] {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.fadeIn[data-v-6e6e3d68] {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/auth/login.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,oBAAoB;EAIpB,yFAAuE;EAAvE,uEAAuE;EACvE,wCAAgC;EAAhC,gCAAgC;CAAE;AAEpC;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,oDAA4C;UAA5C,4CAA4C;EAC5C,8BAA8B;EAC9B,oDAA4C;EAA5C,4CAA4C;CAAE;AAEhD;;EAEE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,6DAAqD;EAArD,qDAAqD;CAAE;AAEzD;EACE,SAAS;CAAE;AAEb;EACE,0BAA0B;EAC1B,UAAU;CAAE;AAEd;EACE,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;CAAE;AAEvB;EACE,2CAA2B;EAA3B,mCAA2B;EAA3B,2BAA2B;EAA3B,mDAA2B;CAAE;AAE/B;EACE,mBAAmB;CAAE;AAEvB;EACE,gBAAgB;EAChB,eAAe;CAAE;AAEnB;EACE,iCAAyB;EAAzB,yBAAyB;CAAE;AAE7B;EACE,WAAW;CAAE;AAEf;EACE,WAAW;CAAE;AAEf;EACE,0BAA0B;EAC1B,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,cAAc;EACd,oDAA4C;EAA5C,4CAA4C;EAC5C,qCAA6B;UAA7B,6BAA6B;CAAE;AAEjC;EACE,mBAAmB;CAAE;AAEvB;EACE,4BAAoB;UAApB,oBAAoB;CAAE;AAExB;EACE,4BAAoB;UAApB,oBAAoB;CAAE","file":"login.vue","sourcesContent":[".auth-wrapper {\n  width: 100%;\n  height: calc(100vh - 56px);\n  padding-top: 70px;\n  background: #50a3a2;\n  background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);\n  background: -moz-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);\n  background: -o-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);\n  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);\n  transition: background-color 1s; }\n\n.auth {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 500px;\n  margin: 0 auto;\n  overflow: hidden;\n  border-radius: 6px;\n  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: 0px solid transparent;\n  transition: background-color 1s, height .5s; }\n\n.auth-switch,\n.auth-form {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55); }\n\n.signingin .auth-switch {\n  left: 0%; }\n\n.signingin .auth-form {\n  background-color: #A7C1ED;\n  left: 50%; }\n\n.auth-switch {\n  left: 50%;\n  padding-top: 120px;\n  color: #fff;\n  text-align: center; }\n\n.auth-switch__text {\n  transition: transform .35s; }\n\nh2 {\n  text-align: center; }\n\n.icon {\n  font-size: 42px;\n  color: #8E8E8E; }\n\nform {\n  transition: opacity .35s; }\n\n.AuthEnter {\n  opacity: 1; }\n\n.AuthLeave {\n  opacity: 0; }\n\n.auth-form {\n  background-color: #FAC1EB;\n  left: 0%;\n  z-index: 2;\n  text-align: center;\n  padding: 30px;\n  transition-property: left, background-color;\n  box-shadow: 0 0 15px #8E8E8E; }\n\n.form-control {\n  padding: 15px 10px; }\n\n.fadeOut {\n  transform: scale(0); }\n\n.fadeIn {\n  transform: scale(1); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auth_LoginInput__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auth_LoginInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_auth_LoginInput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_auth_RegisterInput__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_auth_RegisterInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_auth_RegisterInput__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: 'guest',

  components: {
    'login-input': __WEBPACK_IMPORTED_MODULE_3__components_auth_LoginInput___default.a,
    'register-input': __WEBPACK_IMPORTED_MODULE_4__components_auth_RegisterInput___default.a,
    LoginWithGithub: __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub___default.a
  },

  metaInfo: function metaInfo() {
    return { title: this.$t('login') };
  },


  data: function data() {
    return {
      register: false,
      signingin: true,
      state: 'signingin',
      switchText: false,
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        email: '',
        password: ''
      }),
      remember: false
    };
  },
  computed: {
    // Вычисляем тип компонента, заголовок и текст авторизации
    authComponent: function authComponent() {
      return this.state === 'signingin' ? 'login-input' : 'register-input';
    },
    title: function title() {
      return this.state === 'signingin' ? this.$t('login') : this.$t('register');
    },
    message: function message() {
      return this.state === 'signingin' ? this.$t('has_not_account') : this.$t('has_account');
    }
  },
  methods: {
    toggleAuth: function toggleAuth() {
      var _this = this;

      this.switchText = true;
      setTimeout(function () {
        _this.state = _this.state === 'signingin' ? 'registration' : 'signingin';
        setTimeout(function () {
          return _this.switchText = false;
        }, 1000);
      }, 500);
    },
    login: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.form.post('/api/login');

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;

                // Сохранить токен.
                this.$store.dispatch('auth/saveToken', {
                  token: data.token,
                  remember: this.remember
                });
                // Получаем юзера.
                _context.next = 7;
                return this.$store.dispatch('auth/fetchUser');

              case 7:
                // Перенаправление на главную.
                this.$router.push({ name: 'home' });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
  }
});

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(154)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(156)
/* template */
var __vue_template__ = __webpack_require__(157)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-09ae202e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\auth\\LoginInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09ae202e", Component.options)
  } else {
    hotAPI.reload("data-v-09ae202e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("f718b276", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09ae202e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginInput.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09ae202e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.btn--block[data-v-09ae202e] {\n  color: #fff !important;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/components/auth/resources/assets/js/components/auth/LoginInput.vue"],"names":[],"mappings":";AAgFA;EACA,uBAAA;CACA","file":"LoginInput.vue","sourcesContent":["<template>\n  <v-form @submit.prevent=\"login\" @keydown=\"form.onKeydown($event)\">\n\n    <label for=\"Email\">{{ $t('email') }}</label>\n      <input v-model=\"form.email\" type=\"email\" name=\"email\" \n            :placeholder=\"$t('email')\"\n            :class=\"{ 'is-invalid': form.errors.has('email') }\">\n      <has-error :form=\"form\" field=\"email\"/>\n    <!-- <div class=\"form-group\">\n      <label for=\"Email\">{{ $t('email') }}</label>\n      <input v-model=\"form.email\" type=\"email\" name=\"email\" class=\"form-control\"  aria-describedby=\"emailHelp\" \n            :placeholder=\"$t('email')\"\n            :class=\"{ 'is-invalid': form.errors.has('email') }\">\n      <has-error :form=\"form\" field=\"email\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"Password\">{{ $t('password') }}</label>\n      <input type=\"password\" id=\"Password\" class=\"form-control\" \n             v-model=\"form.password\" \n             :class=\"{ 'is-invalid': form.errors.has('password') }\">\n      <has-error :form=\"form\" field=\"password\"/>\n    </div>\n    <v-checkbox\n      :label=\"$t('remember_me')\"\n      v-model=\"remember\"\n      name=\"remember\"\n      color=\"blue darken-3\"\n    ></v-checkbox>\n    <v-btn color=\"blue darken-3\" block type=\"submit\" :loading=\"form.busy\">{{ $t('login') }}</v-btn>\n    <v-btn flat small\n           :to=\"{ name: 'password.request' }\">\n      {{ $t('forgot_password') }}\n    </v-btn> -->\n  </v-form>         \n</template>\n\n<script>\nimport Form from 'vform'\nimport LoginWithGithub from '~/components/auth/LoginWithGithub'\n\nexport default {\n  middleware: 'guest',\n\n  components: {\n    LoginWithGithub\n  },\n\n  metaInfo () {\n    return { title: this.$t('login') }\n  },\n\n  data: () => ({\n    form: new Form({\n      email: '',\n      password: '',\n    }),\n    remember: false\n  }),\n\n  methods: {\n    async login () {\n      // Submit the form.\n      const { data } = await this.form.post('/api/login')\n\n      // Save the token.\n      this.$store.dispatch('auth/saveToken', {\n        token: data.token,\n        remember: this.remember\n      })\n\n      // Fetch the user.\n      await this.$store.dispatch('auth/fetchUser')\n\n      // Redirect home.\n      this.$router.push({ name: 'home' })\n    }\n  }\n}\n</script>\n\n<style scoped>\n  .btn--block {\n    color: #fff !important;\n  }\n\n\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: 'guest',

  components: {
    LoginWithGithub: __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub___default.a
  },

  metaInfo: function metaInfo() {
    return { title: this.$t('login') };
  },


  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        email: '',
        password: ''
      }),
      remember: false
    };
  },

  methods: {
    login: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.form.post('/api/login');

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;


                // Save the token.
                this.$store.dispatch('auth/saveToken', {
                  token: data.token,
                  remember: this.remember
                });

                // Fetch the user.
                _context.next = 7;
                return this.$store.dispatch('auth/fetchUser');

              case 7:

                // Redirect home.
                this.$router.push({ name: 'home' });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
  }
});

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.login($event)
        },
        keydown: function($event) {
          _vm.form.onKeydown($event)
        }
      }
    },
    [
      _c("label", { attrs: { for: "Email" } }, [
        _vm._v(_vm._s(_vm.$t("email")))
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.form.email,
            expression: "form.email"
          }
        ],
        class: { "is-invalid": _vm.form.errors.has("email") },
        attrs: { type: "email", name: "email", placeholder: _vm.$t("email") },
        domProps: { value: _vm.form.email },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.form, "email", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("has-error", { attrs: { form: _vm.form, field: "email" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-09ae202e", module.exports)
  }
}

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(159)
/* template */
var __vue_template__ = __webpack_require__(160)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\auth\\RegisterInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e3e5cac", Component.options)
  } else {
    hotAPI.reload("data-v-2e3e5cac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: 'guest',

  components: {
    LoginWithGithub: __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub___default.a
  },

  metaInfo: function metaInfo() {
    return { title: this.$t('register') };
  },


  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    };
  },

  methods: {
    register: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, data, _ref3, token;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.form.post('/api/register');

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                _context.next = 6;
                return this.form.post('/api/login');

              case 6:
                _ref3 = _context.sent;
                token = _ref3.data.token;


                // Save the token.
                this.$store.dispatch('auth/saveToken', { token: token });

                // Update the user.
                _context.next = 11;
                return this.$store.dispatch('auth/updateUser', { user: data });

              case 11:

                // Redirect home.
                this.$router.push({ name: 'home' });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function register() {
        return _ref.apply(this, arguments);
      }

      return register;
    }()
  }
});

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.register($event)
        },
        keydown: function($event) {
          _vm.form.onKeydown($event)
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "form-group row" },
        [
          _c("label", { staticClass: "col-form-label text-md-right" }, [
            _vm._v(_vm._s(_vm.$t("name")))
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.name,
                expression: "form.name"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.form.errors.has("name") },
            attrs: { type: "text", name: "name" },
            domProps: { value: _vm.form.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("has-error", { attrs: { form: _vm.form, field: "name" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group row" },
        [
          _c("label", { staticClass: "col-form-label text-md-right" }, [
            _vm._v(_vm._s(_vm.$t("email")))
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.email,
                expression: "form.email"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.form.errors.has("email") },
            attrs: { type: "email", name: "email" },
            domProps: { value: _vm.form.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "email", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("has-error", { attrs: { form: _vm.form, field: "email" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group row" },
        [
          _c("label", { staticClass: "col-form-label text-md-right" }, [
            _vm._v(_vm._s(_vm.$t("password")))
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.password,
                expression: "form.password"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.form.errors.has("password") },
            attrs: { type: "password", name: "password" },
            domProps: { value: _vm.form.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "password", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("has-error", { attrs: { form: _vm.form, field: "password" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group row" },
        [
          _c("label", { staticClass: "col-form-label text-md-right" }, [
            _vm._v(_vm._s(_vm.$t("confirm_password")))
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.password_confirmation,
                expression: "form.password_confirmation"
              }
            ],
            staticClass: "form-control",
            class: {
              "is-invalid": _vm.form.errors.has("password_confirmation")
            },
            attrs: { type: "password", name: "password_confirmation" },
            domProps: { value: _vm.form.password_confirmation },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "password_confirmation", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("has-error", {
            attrs: { form: _vm.form, field: "password_confirmation" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            loading: _vm.form.busy,
            color: "blue darken-3",
            block: "",
            type: "submit"
          }
        },
        [
          _vm._v(
            "\n                " + _vm._s(_vm.$t("register")) + "\n          "
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2e3e5cac", module.exports)
  }
}

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "auth-wrapper", class: _vm.state }, [
    _c("div", { staticClass: "auth" }, [
      _c("div", { staticClass: "auth-switch" }, [
        _c(
          "div",
          {
            staticClass: "auth-switch__text",
            class: { fadeIn: !_vm.switchText, fadeOut: _vm.switchText }
          },
          [
            _c("h2", [_vm._v(" " + _vm._s(_vm.title) + " ")]),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                attrs: { large: "" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.toggleAuth($event)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.message))]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "auth-form" },
        [
          _c(
            "transition",
            {
              attrs: {
                "enter-active-class": "AuthEnter",
                "leave-active-class": "AuthLeave",
                mode: "out-in"
              }
            },
            [_c(_vm.authComponent, { tag: "component" })],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6e6e3d68", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luV2l0aEdpdGh1Yi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luV2l0aEdpdGh1Yi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5XaXRoR2l0aHViLnZ1ZT83YWNjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NjBhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlPzk3MjkiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWU/MzRmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZT8zMTRjIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZT8xNjQwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVySW5wdXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZT80ODUxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NDI2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFxTTtBQUNyTTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBa0w7QUFDbEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO1FBR0E7Ozs7MkJBRUE7OztBQUdBOztBQUpBOzs4QkFLQTt1REFDQTtBQUVBOzBDQUNBOytDQUNBO0FBRUE7Ozs7QUFFQTtBQURBOzs7Ozs7Ozs0QkFLQTtBQUhBOzs7Ozs7d0NBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7cUNBQ0E7dURBQ0E7QUFDQTtBQUVBOzs7c0JBSUE7QUFIQTs7Z0NBSUE7QUFFQTs7O0FBS0E7Ozs7QUE1Q0EsR0E2Q0E7QUFDQTs7OEVBQ0E7Y0FDQTtVQUNBO0FBRUE7OzBFQUVBOzsyRkFDQTt3RkFDQTt5RkFDQTs0RkFFQTs7aURBQ0E7a0RBRUE7O21FQUNBO2lDQUNBO1dBQ0E7Y0FFQTs7MENBRUE7O29CQUNBO2NBQ0E7QUFFQTs7U0FDQTs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQyxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUywwQkFBMEIsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzVCQTs7QUFFQTtBQUNBLHFDQUF3TztBQUN4TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGlGQUFpRjtBQUN2TywrSkFBK0osaUZBQWlGO0FBQ2hQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDJEQUE0RCxnQkFBZ0IsK0JBQStCLHNCQUFzQix3QkFBd0IsNkZBQTZGLDJFQUEyRSw0Q0FBNEMsb0NBQW9DLEdBQUcsMEJBQTBCLHVCQUF1QixnQkFBZ0IscUJBQXFCLGtCQUFrQixtQkFBbUIscUJBQXFCLHVCQUF1Qix3REFBd0Qsd0RBQXdELGtDQUFrQyx3REFBd0QsZ0RBQWdELEdBQUcsK0RBQStELHVCQUF1QixlQUFlLGlCQUFpQixpRUFBaUUseURBQXlELEdBQUcsNENBQTRDLGFBQWEsR0FBRywwQ0FBMEMsOEJBQThCLGNBQWMsR0FBRyxpQ0FBaUMsY0FBYyx1QkFBdUIsZ0JBQWdCLHVCQUF1QixHQUFHLHVDQUF1QywrQ0FBK0MsdUNBQXVDLCtCQUErQix1REFBdUQsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcsMEJBQTBCLG9CQUFvQixtQkFBbUIsR0FBRyx5QkFBeUIscUNBQXFDLDZCQUE2QixHQUFHLCtCQUErQixlQUFlLEdBQUcsK0JBQStCLGVBQWUsR0FBRywrQkFBK0IsOEJBQThCLGFBQWEsZUFBZSx1QkFBdUIsa0JBQWtCLHdEQUF3RCxnREFBZ0QseUNBQXlDLHlDQUF5QyxHQUFHLGtDQUFrQyx1QkFBdUIsR0FBRyw2QkFBNkIsZ0NBQWdDLGdDQUFnQyxHQUFHLDRCQUE0QixnQ0FBZ0MsZ0NBQWdDLEdBQUcsVUFBVSxrSEFBa0gsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsS0FBSyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLEtBQUssT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSwyREFBMkQsZ0JBQWdCLCtCQUErQixzQkFBc0Isd0JBQXdCLDRFQUE0RSx5RUFBeUUsdUVBQXVFLDJFQUEyRSxvQ0FBb0MsRUFBRSxXQUFXLHVCQUF1QixnQkFBZ0IscUJBQXFCLGtCQUFrQixtQkFBbUIscUJBQXFCLHVCQUF1QixnREFBZ0Qsa0NBQWtDLGdEQUFnRCxFQUFFLCtCQUErQix1QkFBdUIsZUFBZSxpQkFBaUIseURBQXlELEVBQUUsNkJBQTZCLGFBQWEsRUFBRSwyQkFBMkIsOEJBQThCLGNBQWMsRUFBRSxrQkFBa0IsY0FBYyx1QkFBdUIsZ0JBQWdCLHVCQUF1QixFQUFFLHdCQUF3QiwrQkFBK0IsRUFBRSxRQUFRLHVCQUF1QixFQUFFLFdBQVcsb0JBQW9CLG1CQUFtQixFQUFFLFVBQVUsNkJBQTZCLEVBQUUsZ0JBQWdCLGVBQWUsRUFBRSxnQkFBZ0IsZUFBZSxFQUFFLGdCQUFnQiw4QkFBOEIsYUFBYSxlQUFlLHVCQUF1QixrQkFBa0IsZ0RBQWdELGlDQUFpQyxFQUFFLG1CQUFtQix1QkFBdUIsRUFBRSxjQUFjLHdCQUF3QixFQUFFLGFBQWEsd0JBQXdCLEVBQUUscUJBQXFCOztBQUV4L0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Y0FHQTs7O21CQUVBO3NCQUNBO0FBR0E7QUFMQTs7Z0NBTUE7NEJBQ0E7QUFFQTs7Ozs7Z0JBRUE7aUJBQ0E7YUFDQTtrQkFDQTs7ZUFFQTtrQkFFQTtBQUhBO2dCQUtBO0FBVkE7OztBQVlBOzRDQUNBOzBEQUNBO0FBQ0E7NEJBQ0E7cUVBQ0E7QUFDQTtnQ0FDQTtrREFDQSw2QkFDQTtBQUVBO0FBWkE7OztBQWNBOzt3QkFDQTs2QkFDQTtxRUFDQTs7O1dBQ0E7U0FDQTtBQUNBO0FBRUE7QUFUQTs7Ozs7Ozs7c0NBVUE7Ozs7OztBQUNBOzs4QkFFQTtpQ0FFQTtBQUhBO0FBSUE7OzRDQUNBOzs7QUFDQTswQ0FHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUExREEsRzs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQSx5QkFBcU07QUFDck07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQWtMO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBd087QUFDeE87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixpRkFBaUY7QUFDdk8sK0pBQStKLGlGQUFpRjtBQUNoUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx5REFBMEQsMkJBQTJCLEdBQUcsY0FBYyxnS0FBZ0ssTUFBTSxXQUFXLG9LQUFvSyxlQUFlLDhJQUE4SSx5Q0FBeUMsMEhBQTBILGVBQWUscU1BQXFNLHlDQUF5QyxvSUFBb0ksa0JBQWtCLGtKQUFrSiw0Q0FBNEMsc1RBQXNULGVBQWUsbURBQW1ELDJCQUEyQixhQUFhLHlCQUF5QixnTEFBZ0wsMkNBQTJDLDBCQUEwQixvQkFBb0IsY0FBYywwQkFBMEIsS0FBSyxxQkFBcUIsc0JBQXNCLDhDQUE4Qyw0QkFBNEIsa0JBQWtCLHNCQUFzQiwwQ0FBMEMsT0FBTyxpSEFBaUgsc0VBQXNFLHVJQUF1SSxlQUFlLFFBQVEsS0FBSyxHQUFHLDhDQUE4Qyw2QkFBNkIsS0FBSyxpQ0FBaUM7O0FBRXZ0Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNkJBO0FBQ0E7O0FBRUE7Y0FHQTs7O0FBSUE7QUFIQTs7Z0NBSUE7NEJBQ0E7QUFFQTs7Ozs7O2VBR0E7a0JBRUE7QUFIQTtnQkFNQTtBQVBBOzs7O0FBVUE7QUFGQTs7Ozs7Ozs7c0NBSUE7Ozs7Ozs7QUFDQTs7OEJBRUE7aUNBR0E7QUFKQTs7QUFLQTs7NENBRUE7Ozs7QUFDQTswQ0FHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQ0EsRzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQVMsZUFBZSxFQUFFO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBNkM7QUFDN0QsZ0JBQWdCLDZEQUE2RDtBQUM3RSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx1QkFBdUIsU0FBUyxpQ0FBaUMsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dBO0FBQ0E7O0FBRUE7Y0FHQTs7O0FBSUE7QUFIQTs7Z0NBSUE7NEJBQ0E7QUFFQTs7Ozs7O2NBR0E7ZUFDQTtrQkFDQTsrQkFJQTtBQVBBO0FBREE7Ozs7QUFXQTtBQUZBOzs7Ozs7OztzQ0FLQTs7Ozs7O3NDQUVBOzs7Ozs7O0FBQ0E7eURBRUE7O0FBQ0E7O3VFQUVBOzs7O0FBQ0E7MENBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBckNBLEc7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdDQUFnQztBQUN6QztBQUNBLHVCQUF1Qiw4Q0FBOEM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQTRDO0FBQ2hFLG9CQUFvQiw2QkFBNkI7QUFDakQsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsMkJBQTJCLFNBQVMsZ0NBQWdDLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnQ0FBZ0M7QUFDekM7QUFDQSx1QkFBdUIsOENBQThDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZDQUE2QztBQUNqRSxvQkFBb0IsK0JBQStCO0FBQ25ELHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLDJCQUEyQixTQUFTLGlDQUFpQyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0NBQWdDO0FBQ3pDO0FBQ0EsdUJBQXVCLDhDQUE4QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnREFBZ0Q7QUFDcEUsb0JBQW9CLHFDQUFxQztBQUN6RCx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSwyQkFBMkIsU0FBUyxvQ0FBb0MsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdDQUFnQztBQUN6QztBQUNBLHVCQUF1Qiw4Q0FBOEM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLG9CQUFvQixrREFBa0Q7QUFDdEUsdUJBQXVCLHdDQUF3QztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2xNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnREFBZ0Q7QUFDcEUsZUFBZSxzQkFBc0I7QUFDckMsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkJBQTJCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixvQ0FBb0MsbUJBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzIuMjJmOTNhOTY2OTI2MTdmZTFhNzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNmU2ZTNkNjhcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhdXRoXFxcXGxvZ2luLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZTZlM2Q2OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZlNmUzZDY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTG9naW5XaXRoR2l0aHViLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGNkYTcxZDZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Mb2dpbldpdGhHaXRodWIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxhdXRoXFxcXExvZ2luV2l0aEdpdGh1Yi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGNkYTcxZDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00Y2RhNzFkNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5XaXRoR2l0aHViLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIiwiPHRlbXBsYXRlPlxuICA8YnV0dG9uIHYtaWY9XCJnaXRodWJBdXRoXCIgQGNsaWNrPVwibG9naW5cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgbWwtYXV0b1wiPlxuICAgIHt7ICR0KCdsb2dpbl93aXRoJykgfX1cbiAgICA8ZmEgOmljb249XCJbJ2ZhYicsICdnaXRodWInXVwiLz5cbiAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTG9naW5XaXRoR2l0aHViJyxcblxuICBjb21wdXRlZDoge1xuICAgIGdpdGh1YkF1dGg6ICgpID0+IHdpbmRvdy5jb25maWcuZ2l0aHViQXV0aCxcbiAgICB1cmw6ICgpID0+IGAvYXBpL29hdXRoL2dpdGh1YmBcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlLCBmYWxzZSlcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBsb2dpbiAoKSB7XG4gICAgICBjb25zdCB1cmwgPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9mZXRjaE9hdXRoVXJsJywge1xuICAgICAgICBwcm92aWRlcjogJ2dpdGh1YidcbiAgICAgIH0pXG5cbiAgICAgIG9wZW5XaW5kb3codXJsLCB0aGlzLiR0KCdsb2dpbicpKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01lc3NhZ2VFdmVudH0gZVxuICAgICAqL1xuICAgIG9uTWVzc2FnZSAoZSkge1xuICAgICAgaWYgKGUub3JpZ2luICE9PSB3aW5kb3cub3JpZ2luIHx8ICFlLmRhdGEudG9rZW4pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3NhdmVUb2tlbicsIHtcbiAgICAgICAgdG9rZW46IGUuZGF0YS50b2tlblxuICAgICAgfSlcblxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZScgfSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1dpbmRvd31cbiAqL1xuZnVuY3Rpb24gb3BlbldpbmRvdyAodXJsLCB0aXRsZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB1cmxcbiAgICB1cmwgPSAnJ1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgdXJsLCB0aXRsZSwgd2lkdGg6IDYwMCwgaGVpZ2h0OiA3MjAsIC4uLm9wdGlvbnMgfVxuXG4gIGNvbnN0IGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlbi5sZWZ0XG4gIGNvbnN0IGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogd2luZG93LnNjcmVlbi50b3BcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgd2luZG93LnNjcmVlbi53aWR0aFxuICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuc2NyZWVuLmhlaWdodFxuXG4gIG9wdGlvbnMubGVmdCA9ICgod2lkdGggLyAyKSAtIChvcHRpb25zLndpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnRcbiAgb3B0aW9ucy50b3AgPSAoKGhlaWdodCAvIDIpIC0gKG9wdGlvbnMuaGVpZ2h0IC8gMikpICsgZHVhbFNjcmVlblRvcFxuXG4gIGNvbnN0IG9wdGlvbnNTdHIgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjLnB1c2goYCR7a2V5fT0ke29wdGlvbnNba2V5XX1gKVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pLmpvaW4oJywnKVxuXG4gIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgdGl0bGUsIG9wdGlvbnNTdHIpXG5cbiAgaWYgKHdpbmRvdy5mb2N1cykge1xuICAgIG5ld1dpbmRvdy5mb2N1cygpXG4gIH1cblxuICByZXR1cm4gbmV3V2luZG93XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbldpdGhHaXRodWIudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uZ2l0aHViQXV0aFxuICAgID8gX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhcmsgbWwtYXV0b1wiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmxvZ2luIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgXCIgKyBfdm0uX3MoX3ZtLiR0KFwibG9naW5fd2l0aFwiKSkgKyBcIlxcbiAgXCIpLFxuICAgICAgICAgIF9jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBbXCJmYWJcIiwgXCJnaXRodWJcIl0gfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00Y2RhNzFkNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGNkYTcxZDZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbldpdGhHaXRodWIudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjcxM2UyYjVlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTZlNmUzZDY4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYXV0aC13cmFwcGVyW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xcbiAgYmFja2dyb3VuZDogIzUwYTNhMjtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKCM1MGEzYTIpLCB0bygjNTNlM2E2KSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNTBhM2EyIDAlLCAjNTNlM2E2IDEwMCUpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcXG59XFxuLmF1dGhbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGhlaWdodCAuNXM7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBoZWlnaHQgLjVzO1xcbn1cXG4uYXV0aC1zd2l0Y2hbZGF0YS12LTZlNmUzZDY4XSxcXG4uYXV0aC1mb3JtW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcXG4gIHRyYW5zaXRpb246IDFzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7XFxufVxcbi5zaWduaW5naW4gLmF1dGgtc3dpdGNoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogMCU7XFxufVxcbi5zaWduaW5naW4gLmF1dGgtZm9ybVtkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBN0MxRUQ7XFxuICBsZWZ0OiA1MCU7XFxufVxcbi5hdXRoLXN3aXRjaFtkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYXV0aC1zd2l0Y2hfX3RleHRbZGF0YS12LTZlNmUzZDY4XSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zNXM7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzVzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gLjM1cztcXG59XFxuaDJbZGF0YS12LTZlNmUzZDY4XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pY29uW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgY29sb3I6ICM4RThFOEU7XFxufVxcbmZvcm1bZGF0YS12LTZlNmUzZDY4XSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjM1cztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cztcXG59XFxuLkF1dGhFbnRlcltkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5BdXRoTGVhdmVbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uYXV0aC1mb3JtW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQzFFQjtcXG4gIGxlZnQ6IDAlO1xcbiAgei1pbmRleDogMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIGJhY2tncm91bmQtY29sb3I7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTVweCAjOEU4RThFO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjOEU4RThFO1xcbn1cXG4uZm9ybS1jb250cm9sW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgcGFkZGluZzogMTVweCAxMHB4O1xcbn1cXG4uZmFkZU91dFtkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuLmZhZGVJbltkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFJcEIseUZBQXVFO0VBQXZFLHVFQUF1RTtFQUN2RSx3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0NBQUU7QUFFcEM7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0RBQTRDO1VBQTVDLDRDQUE0QztFQUM1Qyw4QkFBOEI7RUFDOUIsb0RBQTRDO0VBQTVDLDRDQUE0QztDQUFFO0FBRWhEOztFQUVFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDZEQUFxRDtFQUFyRCxxREFBcUQ7Q0FBRTtBQUV6RDtFQUNFLFNBQVM7Q0FBRTtBQUViO0VBQ0UsMEJBQTBCO0VBQzFCLFVBQVU7Q0FBRTtBQUVkO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0NBQUU7QUFFdkI7RUFDRSwyQ0FBMkI7RUFBM0IsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUEzQixtREFBMkI7Q0FBRTtBQUUvQjtFQUNFLG1CQUFtQjtDQUFFO0FBRXZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FBRTtBQUVuQjtFQUNFLGlDQUF5QjtFQUF6Qix5QkFBeUI7Q0FBRTtBQUU3QjtFQUNFLFdBQVc7Q0FBRTtBQUVmO0VBQ0UsV0FBVztDQUFFO0FBRWY7RUFDRSwwQkFBMEI7RUFDMUIsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9EQUE0QztFQUE1Qyw0Q0FBNEM7RUFDNUMscUNBQTZCO1VBQTdCLDZCQUE2QjtDQUFFO0FBRWpDO0VBQ0UsbUJBQW1CO0NBQUU7QUFFdkI7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0NBQUU7QUFFeEI7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0NBQUVcIixcImZpbGVcIjpcImxvZ2luLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXV0aC13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XFxuICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIGJhY2tncm91bmQ6ICM1MGEzYTI7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgIzUwYTNhMiAwJSwgIzUzZTNhNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjNTBhM2EyIDAlLCAjNTNlM2E2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjNTBhM2EyIDAlLCAjNTNlM2E2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzUwYTNhMiAwJSwgIzUzZTNhNiAxMDAlKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7IH1cXG5cXG4uYXV0aCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgaGVpZ2h0IC41czsgfVxcblxcbi5hdXRoLXN3aXRjaCxcXG4uYXV0aC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAxcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjcsIDEuNTUpOyB9XFxuXFxuLnNpZ25pbmdpbiAuYXV0aC1zd2l0Y2gge1xcbiAgbGVmdDogMCU7IH1cXG5cXG4uc2lnbmluZ2luIC5hdXRoLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E3QzFFRDtcXG4gIGxlZnQ6IDUwJTsgfVxcblxcbi5hdXRoLXN3aXRjaCB7XFxuICBsZWZ0OiA1MCU7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5hdXRoLXN3aXRjaF9fdGV4dCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1czsgfVxcblxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5pY29uIHtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIGNvbG9yOiAjOEU4RThFOyB9XFxuXFxuZm9ybSB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zNXM7IH1cXG5cXG4uQXV0aEVudGVyIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uQXV0aExlYXZlIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4uYXV0aC1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUMxRUI7XFxuICBsZWZ0OiAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgYmFja2dyb3VuZC1jb2xvcjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICM4RThFOEU7IH1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG4gIHBhZGRpbmc6IDE1cHggMTBweDsgfVxcblxcbi5mYWRlT3V0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG5cXG4uZmFkZUluIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNmU2ZTNkNjhcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYXV0aC13cmFwcGVyXCIgOmNsYXNzPVwic3RhdGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYXV0aFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImF1dGgtc3dpdGNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdXRoLXN3aXRjaF9fdGV4dFwiXG4gICAgICAgICAgICAgOmNsYXNzPVwieydmYWRlSW4nOiAhc3dpdGNoVGV4dCwgJ2ZhZGVPdXQnOiBzd2l0Y2hUZXh0fVwiPlxuICAgICAgICAgIDxoMj4ge3sgdGl0bGUgfX0gPC9oMj4gXG4gICAgICAgICAgPHYtYnRuIGxhcmdlIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlQXV0aFwiPnt7bWVzc2FnZX19PC92LWJ0bj5cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXV0aC1mb3JtXCI+XG4gICAgICAgIDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XCJBdXRoRW50ZXJcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJBdXRoTGVhdmVcIiBtb2RlPVwib3V0LWluXCI+XG4gICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJhdXRoQ29tcG9uZW50XCI+PC9jb21wb25lbnQ+XG4gICAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcbmltcG9ydCBMb2dpbldpdGhHaXRodWIgZnJvbSAnfi9jb21wb25lbnRzL2F1dGgvTG9naW5XaXRoR2l0aHViJztcbmltcG9ydCBMb2dpbklucHV0IGZyb20gJ34vY29tcG9uZW50cy9hdXRoL0xvZ2luSW5wdXQnO1xuaW1wb3J0IFJlZ2lzdGVySW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXJJbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlkZGxld2FyZTogJ2d1ZXN0JyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgJ2xvZ2luLWlucHV0JzogTG9naW5JbnB1dCxcbiAgICAncmVnaXN0ZXItaW5wdXQnOiBSZWdpc3RlcklucHV0LFxuICAgIExvZ2luV2l0aEdpdGh1YlxuICB9LFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnbG9naW4nKSB9XG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICByZWdpc3RlcjogZmFsc2UsXG4gICAgc2lnbmluZ2luOiB0cnVlLFxuICAgIHN0YXRlOiAnc2lnbmluZ2luJyxcbiAgICBzd2l0Y2hUZXh0OiBmYWxzZSxcbiAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9KSxcbiAgICByZW1lbWJlcjogZmFsc2VcbiAgfSksXG4gIGNvbXB1dGVkOiB7XG4gICAgLy8g0JLRi9GH0LjRgdC70Y/QtdC8INGC0LjQvyDQutC+0LzQv9C+0L3QtdC90YLQsCwg0LfQsNCz0L7Qu9C+0LLQvtC6INC4INGC0LXQutGB0YIg0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICAgIGF1dGhDb21wb25lbnQoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuc3RhdGUgPT09ICdzaWduaW5naW4nKSA/ICdsb2dpbi1pbnB1dCcgOiAncmVnaXN0ZXItaW5wdXQnO1xuICAgIH0sXG4gICAgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuc3RhdGUgPT09ICdzaWduaW5naW4nKSA/IHRoaXMuJHQoJ2xvZ2luJykgOiB0aGlzLiR0KCdyZWdpc3RlcicpO1xuICAgIH0sXG4gICAgbWVzc2FnZSgpIHtcbiAgICAgIHJldHVybiAodGhpcy5zdGF0ZSA9PT0gJ3NpZ25pbmdpbicpID8gdGhpcy4kdCgnaGFzX25vdF9hY2NvdW50JykgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdCgnaGFzX2FjY291bnQnKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVBdXRoKCkge1xuICAgICAgdGhpcy5zd2l0Y2hUZXh0ID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAnc2lnbmluZ2luJykgPyAncmVnaXN0cmF0aW9uJyA6ICdzaWduaW5naW4nO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3dpdGNoVGV4dCA9IGZhbHNlLCAxMDAwKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSxcbiAgICBhc3luYyBsb2dpbiAoKSB7XG4gICAgICAvLyDQntGC0YDQv9Cw0LLQutCwINGE0L7RgNC80YsuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL2xvZ2luJylcbiAgICAgIC8vINCh0L7RhdGA0LDQvdC40YLRjCDRgtC+0LrQtdC9LlxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvc2F2ZVRva2VuJywge1xuICAgICAgICB0b2tlbjogZGF0YS50b2tlbixcbiAgICAgICAgcmVtZW1iZXI6IHRoaXMucmVtZW1iZXJcbiAgICAgIH0pXG4gICAgICAvLyDQn9C+0LvRg9GH0LDQtdC8INGO0LfQtdGA0LAuXG4gICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9mZXRjaFVzZXInKVxuICAgICAgLy8g0J/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC90LAg0LPQu9Cw0LLQvdGD0Y4uXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJyB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5hdXRoLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiAjNTBhM2EyO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgIzUwYTNhMiAwJSwgIzUzZTNhNiAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICM1MGEzYTIgMCUsICM1M2UzYTYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgIzUwYTNhMiAwJSwgIzUzZTNhNiAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzUwYTNhMiAwJSwgIzUzZTNhNiAxMDAlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcbn1cblxuLmF1dGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgaGVpZ2h0IC41cztcbn1cblxuLmF1dGgtc3dpdGNoLFxuLmF1dGgtZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiAxcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjcsIDEuNTUpO1xufVxuXG4uc2lnbmluZ2luIC5hdXRoLXN3aXRjaCB7XG4gIGxlZnQ6IDAlO1xufVxuXG4uc2lnbmluZ2luIC5hdXRoLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTdDMUVEO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5hdXRoLXN3aXRjaCB7XG4gIGxlZnQ6IDUwJTsgXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF1dGgtc3dpdGNoX190ZXh0IHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDJweDsgIFxuICBjb2xvcjogIzhFOEU4RTtcbn1cblxuZm9ybSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cztcbn1cblxuLkF1dGhFbnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5BdXRoTGVhdmUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYXV0aC1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQzFFQjtcbiAgbGVmdDogMCU7XG4gIHotaW5kZXg6IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgYmFja2dyb3VuZC1jb2xvcjtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzhFOEU4RTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbn1cblxuXG4uZmFkZU91dCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5mYWRlSW4ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wOWFlMjAyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xvZ2luSW5wdXQudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xvZ2luSW5wdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wOWFlMjAyZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTA5YWUyMDJlXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxhdXRoXFxcXExvZ2luSW5wdXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA5YWUyMDJlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDlhZTIwMmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImY3MThiMjc2XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDlhZTIwMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Mb2dpbklucHV0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wOWFlMjAyZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuLS1ibG9ja1tkYXRhLXYtMDlhZTIwMmVdIHtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxufVxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvc3BhL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luSW5wdXQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnRkE7RUFDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJMb2dpbklucHV0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8di1mb3JtIEBzdWJtaXQucHJldmVudD1cXFwibG9naW5cXFwiIEBrZXlkb3duPVxcXCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXFxcIj5cXG5cXG4gICAgPGxhYmVsIGZvcj1cXFwiRW1haWxcXFwiPnt7ICR0KCdlbWFpbCcpIH19PC9sYWJlbD5cXG4gICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybS5lbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBcXG4gICAgICAgICAgICA6cGxhY2Vob2xkZXI9XFxcIiR0KCdlbWFpbCcpXFxcIlxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSB9XFxcIj5cXG4gICAgICA8aGFzLWVycm9yIDpmb3JtPVxcXCJmb3JtXFxcIiBmaWVsZD1cXFwiZW1haWxcXFwiLz5cXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJFbWFpbFxcXCI+e3sgJHQoJ2VtYWlsJykgfX08L2xhYmVsPlxcbiAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJmb3JtLmVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiICBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJlbWFpbEhlbHBcXFwiIFxcbiAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cXFwiJHQoJ2VtYWlsJylcXFwiXFxuICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpIH1cXFwiPlxcbiAgICAgIDxoYXMtZXJyb3IgOmZvcm09XFxcImZvcm1cXFwiIGZpZWxkPVxcXCJlbWFpbFxcXCIvPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiUGFzc3dvcmRcXFwiPnt7ICR0KCdwYXNzd29yZCcpIH19PC9sYWJlbD5cXG4gICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgXFxuICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0ucGFzc3dvcmRcXFwiIFxcbiAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJykgfVxcXCI+XFxuICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cXFwiZm9ybVxcXCIgZmllbGQ9XFxcInBhc3N3b3JkXFxcIi8+XFxuICAgIDwvZGl2PlxcbiAgICA8di1jaGVja2JveFxcbiAgICAgIDpsYWJlbD1cXFwiJHQoJ3JlbWVtYmVyX21lJylcXFwiXFxuICAgICAgdi1tb2RlbD1cXFwicmVtZW1iZXJcXFwiXFxuICAgICAgbmFtZT1cXFwicmVtZW1iZXJcXFwiXFxuICAgICAgY29sb3I9XFxcImJsdWUgZGFya2VuLTNcXFwiXFxuICAgID48L3YtY2hlY2tib3g+XFxuICAgIDx2LWJ0biBjb2xvcj1cXFwiYmx1ZSBkYXJrZW4tM1xcXCIgYmxvY2sgdHlwZT1cXFwic3VibWl0XFxcIiA6bG9hZGluZz1cXFwiZm9ybS5idXN5XFxcIj57eyAkdCgnbG9naW4nKSB9fTwvdi1idG4+XFxuICAgIDx2LWJ0biBmbGF0IHNtYWxsXFxuICAgICAgICAgICA6dG89XFxcInsgbmFtZTogJ3Bhc3N3b3JkLnJlcXVlc3QnIH1cXFwiPlxcbiAgICAgIHt7ICR0KCdmb3Jnb3RfcGFzc3dvcmQnKSB9fVxcbiAgICA8L3YtYnRuPiAtLT5cXG4gIDwvdi1mb3JtPiAgICAgICAgIFxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcXG5pbXBvcnQgTG9naW5XaXRoR2l0aHViIGZyb20gJ34vY29tcG9uZW50cy9hdXRoL0xvZ2luV2l0aEdpdGh1YidcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxcblxcbiAgY29tcG9uZW50czoge1xcbiAgICBMb2dpbldpdGhHaXRodWJcXG4gIH0sXFxuXFxuICBtZXRhSW5mbyAoKSB7XFxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdsb2dpbicpIH1cXG4gIH0sXFxuXFxuICBkYXRhOiAoKSA9PiAoe1xcbiAgICBmb3JtOiBuZXcgRm9ybSh7XFxuICAgICAgZW1haWw6ICcnLFxcbiAgICAgIHBhc3N3b3JkOiAnJyxcXG4gICAgfSksXFxuICAgIHJlbWVtYmVyOiBmYWxzZVxcbiAgfSksXFxuXFxuICBtZXRob2RzOiB7XFxuICAgIGFzeW5jIGxvZ2luICgpIHtcXG4gICAgICAvLyBTdWJtaXQgdGhlIGZvcm0uXFxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9sb2dpbicpXFxuXFxuICAgICAgLy8gU2F2ZSB0aGUgdG9rZW4uXFxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvc2F2ZVRva2VuJywge1xcbiAgICAgICAgdG9rZW46IGRhdGEudG9rZW4sXFxuICAgICAgICByZW1lbWJlcjogdGhpcy5yZW1lbWJlclxcbiAgICAgIH0pXFxuXFxuICAgICAgLy8gRmV0Y2ggdGhlIHVzZXIuXFxuICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvZmV0Y2hVc2VyJylcXG5cXG4gICAgICAvLyBSZWRpcmVjdCBob21lLlxcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXFxuICAgIH1cXG4gIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4gIC5idG4tLWJsb2NrIHtcXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIH1cXG5cXG5cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wOWFlMjAyZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cbiAgPHYtZm9ybSBAc3VibWl0LnByZXZlbnQ9XCJsb2dpblwiIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxuXG4gICAgPGxhYmVsIGZvcj1cIkVtYWlsXCI+e3sgJHQoJ2VtYWlsJykgfX08L2xhYmVsPlxuICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgXG4gICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnZW1haWwnKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpIH1cIj5cbiAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJlbWFpbFwiLz5cbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPVwiRW1haWxcIj57eyAkdCgnZW1haWwnKSB9fTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgXG4gICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnZW1haWwnKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpIH1cIj5cbiAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJlbWFpbFwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGZvcj1cIlBhc3N3b3JkXCI+e3sgJHQoJ3Bhc3N3b3JkJykgfX08L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwiUGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmQnKSB9XCI+XG4gICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRcIi8+XG4gICAgPC9kaXY+XG4gICAgPHYtY2hlY2tib3hcbiAgICAgIDpsYWJlbD1cIiR0KCdyZW1lbWJlcl9tZScpXCJcbiAgICAgIHYtbW9kZWw9XCJyZW1lbWJlclwiXG4gICAgICBuYW1lPVwicmVtZW1iZXJcIlxuICAgICAgY29sb3I9XCJibHVlIGRhcmtlbi0zXCJcbiAgICA+PC92LWNoZWNrYm94PlxuICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTNcIiBibG9jayB0eXBlPVwic3VibWl0XCIgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIj57eyAkdCgnbG9naW4nKSB9fTwvdi1idG4+XG4gICAgPHYtYnRuIGZsYXQgc21hbGxcbiAgICAgICAgICAgOnRvPVwieyBuYW1lOiAncGFzc3dvcmQucmVxdWVzdCcgfVwiPlxuICAgICAge3sgJHQoJ2ZvcmdvdF9wYXNzd29yZCcpIH19XG4gICAgPC92LWJ0bj4gLS0+XG4gIDwvdi1mb3JtPiAgICAgICAgIFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IExvZ2luV2l0aEdpdGh1YiBmcm9tICd+L2NvbXBvbmVudHMvYXV0aC9Mb2dpbldpdGhHaXRodWInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlkZGxld2FyZTogJ2d1ZXN0JyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgTG9naW5XaXRoR2l0aHViXG4gIH0sXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdsb2dpbicpIH1cbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9KSxcbiAgICByZW1lbWJlcjogZmFsc2VcbiAgfSksXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGxvZ2luICgpIHtcbiAgICAgIC8vIFN1Ym1pdCB0aGUgZm9ybS5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvbG9naW4nKVxuXG4gICAgICAvLyBTYXZlIHRoZSB0b2tlbi5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3NhdmVUb2tlbicsIHtcbiAgICAgICAgdG9rZW46IGRhdGEudG9rZW4sXG4gICAgICAgIHJlbWVtYmVyOiB0aGlzLnJlbWVtYmVyXG4gICAgICB9KVxuXG4gICAgICAvLyBGZXRjaCB0aGUgdXNlci5cbiAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL2ZldGNoVXNlcicpXG5cbiAgICAgIC8vIFJlZGlyZWN0IGhvbWUuXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJyB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5idG4tLWJsb2NrIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG5cblxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1mb3JtXCIsXG4gICAge1xuICAgICAgb246IHtcbiAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIF92bS5sb2dpbigkZXZlbnQpXG4gICAgICAgIH0sXG4gICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiRW1haWxcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbWFpbFwiKSkpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVtYWlsXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZW1haWxcIikgfSxcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBfdm0uJHQoXCJlbWFpbFwiKSB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZW1haWwgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiZW1haWxcIiB9IH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDlhZTIwMmVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTA5YWUyMDJlXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JlZ2lzdGVySW5wdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yZTNlNWNhY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JlZ2lzdGVySW5wdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxhdXRoXFxcXFJlZ2lzdGVySW5wdXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJlM2U1Y2FjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmUzZTVjYWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVySW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHRlbXBsYXRlPlxuPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwicmVnaXN0ZXJcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cbiAgICAgICAgICA8IS0tIE5hbWUgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ25hbWUnKSB9fTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0ubmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ25hbWUnKSB9XCI+XG4gICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibmFtZVwiLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gRW1haWwgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2VtYWlsJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpIH1cIj5cbiAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJlbWFpbFwiLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gUGFzc3dvcmQgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ3Bhc3N3b3JkJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpIH1cIj5cbiAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJwYXNzd29yZFwiLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gUGFzc3dvcmQgQ29uZmlybWF0aW9uIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdjb25maXJtX3Bhc3N3b3JkJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpIH1cIj5cbiAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIi8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8di1idG4gOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIiBcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZSBkYXJrZW4tM1wiIFxuICAgICAgICAgICAgICAgICAgYmxvY2sgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAge3sgJHQoJ3JlZ2lzdGVyJykgfX1cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5pbXBvcnQgTG9naW5XaXRoR2l0aHViIGZyb20gJ34vY29tcG9uZW50cy9hdXRoL0xvZ2luV2l0aEdpdGh1YidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBMb2dpbldpdGhHaXRodWJcbiAgfSxcblxuICBtZXRhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3JlZ2lzdGVyJykgfVxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnXG4gICAgfSlcbiAgfSksXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIHJlZ2lzdGVyICgpIHtcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSB1c2VyLlxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9yZWdpc3RlcicpXG5cbiAgICAgIC8vIExvZyBpbiB0aGUgdXNlci5cbiAgICAgIGNvbnN0IHsgZGF0YTogeyB0b2tlbiB9fSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL2xvZ2luJylcblxuICAgICAgLy8gU2F2ZSB0aGUgdG9rZW4uXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9zYXZlVG9rZW4nLCB7IHRva2VuIH0pXG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgdXNlci5cbiAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3VwZGF0ZVVzZXInLCB7IHVzZXI6IGRhdGEgfSlcblxuICAgICAgLy8gUmVkaXJlY3QgaG9tZS5cbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJmb3JtXCIsXG4gICAge1xuICAgICAgb246IHtcbiAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIF92bS5yZWdpc3RlcigkZXZlbnQpXG4gICAgICAgIH0sXG4gICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJuYW1lXCIpKSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJuYW1lXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5uYW1lIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJuYW1lXCIgfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbWFpbFwiKSkpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVtYWlsXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJlbWFpbFwiKSB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5lbWFpbCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImVtYWlsXCIgfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwYXNzd29yZFwiKSkpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwYXNzd29yZFwiKSB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiLCBuYW1lOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBhc3N3b3JkXCIgfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb25maXJtX3Bhc3N3b3JkXCIpKSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiLCBuYW1lOiBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IF92bS5mb3JtLmJ1c3ksXG4gICAgICAgICAgICBjb2xvcjogXCJibHVlIGRhcmtlbi0zXCIsXG4gICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoXCJyZWdpc3RlclwiKSkgKyBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJlM2U1Y2FjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yZTNlNWNhY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVySW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF1dGgtd3JhcHBlclwiLCBjbGFzczogX3ZtLnN0YXRlIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF1dGhcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF1dGgtc3dpdGNoXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF1dGgtc3dpdGNoX190ZXh0XCIsXG4gICAgICAgICAgICBjbGFzczogeyBmYWRlSW46ICFfdm0uc3dpdGNoVGV4dCwgZmFkZU91dDogX3ZtLnN3aXRjaFRleHQgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIiBcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFyZ2U6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlQXV0aCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubWVzc2FnZSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdXRoLWZvcm1cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcIkF1dGhFbnRlclwiLFxuICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwiQXV0aExlYXZlXCIsXG4gICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKF92bS5hdXRoQ29tcG9uZW50LCB7IHRhZzogXCJjb21wb25lbnRcIiB9KV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNmU2ZTNkNjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZlNmUzZDY4XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==