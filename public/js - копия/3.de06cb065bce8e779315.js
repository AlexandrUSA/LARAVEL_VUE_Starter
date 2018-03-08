webpackJsonp([3],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(163)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(139)
/* template */
var __vue_template__ = __webpack_require__(165)
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(131)
/* template */
var __vue_template__ = __webpack_require__(132)
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
Component.options.__file = "resources\\assets\\js\\components\\LoginWithGithub.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a299752a", Component.options)
  } else {
    hotAPI.reload("data-v-a299752a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
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

/***/ 132:
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
    require("vue-hot-reload-api")      .rerender("data-v-a299752a", module.exports)
  }
}

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_LoginWithGithub__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_LoginWithGithub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_LoginWithGithub__);


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




/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: 'guest',

  components: {
    LoginWithGithub: __WEBPACK_IMPORTED_MODULE_2__components_LoginWithGithub___default.a
  },

  metaInfo: function metaInfo() {
    return { title: this.$t('login') };
  },


  data: function data() {
    return {
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
    title: function title() {
      return this.state === 'signingin' ? this.$t('register') : this.$t('login');
    },
    message: function message() {
      return this.state === 'signingin' ? this.$t('has_account') : this.$t('has_not_account');
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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("713e2b5e", content, false);
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n.auth-wrapper[data-v-6e6e3d68] {\n  width: 100%;\n  height: calc(100vh - 56px);\n  padding-top: 70px;\n  -webkit-transition: background-color 1s;\n  transition: background-color 1s;\n}\n.signingin.auth-wrapper[data-v-6e6e3d68],\n.registration .auth[data-v-6e6e3d68] {\n  background-color: #A7C1ED;\n}\n.registration.auth-wrapper[data-v-6e6e3d68],\n.signingin .auth[data-v-6e6e3d68] {\n  background-color: #FAC1EB;\n}\n.auth[data-v-6e6e3d68] {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 500px;\n  margin: 0 auto;\n  overflow: hidden;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: 0px solid transparent;\n  -webkit-transition: background-color 1s, height .5s;\n  transition: background-color 1s, height .5s;\n}\n.auth-switch[data-v-6e6e3d68],\n.auth-form[data-v-6e6e3d68] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  -webkit-transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n.signingin .auth-switch[data-v-6e6e3d68] {\n  left: 0%;\n}\n.signingin .auth-form[data-v-6e6e3d68] {\n  left: 50%;\n}\n.auth-switch[data-v-6e6e3d68] {\n  left: 50%;\n  padding-top: 120px;\n  color: #fff;\n  text-align: center;\n}\n.auth-switch__text[data-v-6e6e3d68] {\n  -webkit-transition: -webkit-transform .35s;\n  transition: -webkit-transform .35s;\n  transition: transform .35s;\n  transition: transform .35s, -webkit-transform .35s;\n}\n.auth-form[data-v-6e6e3d68] {\n  text-align: center;\n  padding: 15px;\n}\nh2[data-v-6e6e3d68] {\n  text-align: center;\n}\n.icon[data-v-6e6e3d68] {\n  font-size: 42px;\n  color: #8E8E8E;\n}\n.auth-form[data-v-6e6e3d68] {\n  background-color: #fff;\n  left: 0%;\n  z-index: 2;\n  -webkit-transition-property: left;\n  transition-property: left;\n  -webkit-box-shadow: 0 0 15px #8E8E8E;\n          box-shadow: 0 0 15px #8E8E8E;\n}\n.fadeOut[data-v-6e6e3d68] {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.fadeIn[data-v-6e6e3d68] {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n@-webkit-keyframes fadeIn-data-v-6e6e3d68 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes fadeIn-data-v-6e6e3d68 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@-webkit-keyframes fadeOut-data-v-6e6e3d68 {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n@keyframes fadeOut-data-v-6e6e3d68 {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/auth/login.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,wCAAgC;EAAhC,gCAAgC;CAAE;AAEpC;;EAEE,0BAA0B;CAAE;AAE9B;;EAEE,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,oDAA4C;UAA5C,4CAA4C;EAC5C,8BAA8B;EAC9B,oDAA4C;EAA5C,4CAA4C;CAAE;AAEhD;;EAEE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,6DAAqD;EAArD,qDAAqD;CAAE;AAEzD;EACE,SAAS;CAAE;AAEb;EACE,UAAU;CAAE;AAEd;EACE,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;CAAE;AAEvB;EACE,2CAA2B;EAA3B,mCAA2B;EAA3B,2BAA2B;EAA3B,mDAA2B;CAAE;AAE/B;EACE,mBAAmB;EACnB,cAAc;CAAE;AAElB;EACE,mBAAmB;CAAE;AAEvB;EACE,gBAAgB;EAChB,eAAe;CAAE;AAEnB;EACE,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,kCAA0B;EAA1B,0BAA0B;EAC1B,qCAA6B;UAA7B,6BAA6B;CAAE;AAEjC;EACE,4BAAoB;UAApB,oBAAoB;CAAE;AAExB;EACE,4BAAoB;UAApB,oBAAoB;CAAE;AAExB;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE;AAJ5B;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE;AAE5B;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE;AAJ5B;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE","file":"login.vue","sourcesContent":[".auth-wrapper {\n  width: 100%;\n  height: calc(100vh - 56px);\n  padding-top: 70px;\n  transition: background-color 1s; }\n\n.signingin.auth-wrapper,\n.registration .auth {\n  background-color: #A7C1ED; }\n\n.registration.auth-wrapper,\n.signingin .auth {\n  background-color: #FAC1EB; }\n\n.auth {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 500px;\n  margin: 0 auto;\n  overflow: hidden;\n  border-radius: 6px;\n  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: 0px solid transparent;\n  transition: background-color 1s, height .5s; }\n\n.auth-switch,\n.auth-form {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55); }\n\n.signingin .auth-switch {\n  left: 0%; }\n\n.signingin .auth-form {\n  left: 50%; }\n\n.auth-switch {\n  left: 50%;\n  padding-top: 120px;\n  color: #fff;\n  text-align: center; }\n\n.auth-switch__text {\n  transition: transform .35s; }\n\n.auth-form {\n  text-align: center;\n  padding: 15px; }\n\nh2 {\n  text-align: center; }\n\n.icon {\n  font-size: 42px;\n  color: #8E8E8E; }\n\n.auth-form {\n  background-color: #fff;\n  left: 0%;\n  z-index: 2;\n  transition-property: left;\n  box-shadow: 0 0 15px #8E8E8E; }\n\n.fadeOut {\n  transform: scale(0); }\n\n.fadeIn {\n  transform: scale(1); }\n\n@keyframes fadeIn {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes fadeOut {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 165:
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
            _c("h2", [_vm._v(_vm._s(_vm.title))]),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                attrs: { color: "success", large: "" },
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
      _c("div", { staticClass: "auth-form" }, [
        _c(
          "h2",
          [
            _c("v-icon", { staticClass: "title__icon" }, [_vm._v("person_add")])
          ],
          1
        )
      ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhHaXRodWIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZT8xNGZhIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NjBhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlPzk3MjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZT80MjY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFnTDtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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OlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dpbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dpbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTZlNmUzZDY4XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYXV0aFxcXFxsb2dpbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmU2ZTNkNjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZTZlM2Q2OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xvZ2luV2l0aEdpdGh1Yi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWEyOTk3NTJhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTG9naW5XaXRoR2l0aHViLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcTG9naW5XaXRoR2l0aHViLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hMjk5NzUyYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWEyOTk3NTJhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIiwiPHRlbXBsYXRlPlxuICA8YnV0dG9uIHYtaWY9XCJnaXRodWJBdXRoXCIgQGNsaWNrPVwibG9naW5cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgbWwtYXV0b1wiPlxuICAgIHt7ICR0KCdsb2dpbl93aXRoJykgfX1cbiAgICA8ZmEgOmljb249XCJbJ2ZhYicsICdnaXRodWInXVwiLz5cbiAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTG9naW5XaXRoR2l0aHViJyxcblxuICBjb21wdXRlZDoge1xuICAgIGdpdGh1YkF1dGg6ICgpID0+IHdpbmRvdy5jb25maWcuZ2l0aHViQXV0aCxcbiAgICB1cmw6ICgpID0+IGAvYXBpL29hdXRoL2dpdGh1YmBcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlLCBmYWxzZSlcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBsb2dpbiAoKSB7XG4gICAgICBjb25zdCB1cmwgPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9mZXRjaE9hdXRoVXJsJywge1xuICAgICAgICBwcm92aWRlcjogJ2dpdGh1YidcbiAgICAgIH0pXG5cbiAgICAgIG9wZW5XaW5kb3codXJsLCB0aGlzLiR0KCdsb2dpbicpKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01lc3NhZ2VFdmVudH0gZVxuICAgICAqL1xuICAgIG9uTWVzc2FnZSAoZSkge1xuICAgICAgaWYgKGUub3JpZ2luICE9PSB3aW5kb3cub3JpZ2luIHx8ICFlLmRhdGEudG9rZW4pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3NhdmVUb2tlbicsIHtcbiAgICAgICAgdG9rZW46IGUuZGF0YS50b2tlblxuICAgICAgfSlcblxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZScgfSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1dpbmRvd31cbiAqL1xuZnVuY3Rpb24gb3BlbldpbmRvdyAodXJsLCB0aXRsZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB1cmxcbiAgICB1cmwgPSAnJ1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgdXJsLCB0aXRsZSwgd2lkdGg6IDYwMCwgaGVpZ2h0OiA3MjAsIC4uLm9wdGlvbnMgfVxuXG4gIGNvbnN0IGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlbi5sZWZ0XG4gIGNvbnN0IGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogd2luZG93LnNjcmVlbi50b3BcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgd2luZG93LnNjcmVlbi53aWR0aFxuICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuc2NyZWVuLmhlaWdodFxuXG4gIG9wdGlvbnMubGVmdCA9ICgod2lkdGggLyAyKSAtIChvcHRpb25zLndpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnRcbiAgb3B0aW9ucy50b3AgPSAoKGhlaWdodCAvIDIpIC0gKG9wdGlvbnMuaGVpZ2h0IC8gMikpICsgZHVhbFNjcmVlblRvcFxuXG4gIGNvbnN0IG9wdGlvbnNTdHIgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjLnB1c2goYCR7a2V5fT0ke29wdGlvbnNba2V5XX1gKVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pLmpvaW4oJywnKVxuXG4gIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgdGl0bGUsIG9wdGlvbnNTdHIpXG5cbiAgaWYgKHdpbmRvdy5mb2N1cykge1xuICAgIG5ld1dpbmRvdy5mb2N1cygpXG4gIH1cblxuICByZXR1cm4gbmV3V2luZG93XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmdpdGh1YkF1dGhcbiAgICA/IF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYXJrIG1sLWF1dG9cIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dpbiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gIFwiICsgX3ZtLl9zKF92bS4kdChcImxvZ2luX3dpdGhcIikpICsgXCJcXG4gIFwiKSxcbiAgICAgICAgICBfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogW1wiZmFiXCIsIFwiZ2l0aHViXCJdIH0gfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtYTI5OTc1MmFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWEyOTk3NTJhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aEdpdGh1Yi52dWVcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImF1dGgtd3JhcHBlclwiIDpjbGFzcz1cInN0YXRlXCI+XG4gICAgPGRpdiBjbGFzcz1cImF1dGhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdXRoLXN3aXRjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aC1zd2l0Y2hfX3RleHRcIlxuICAgICAgICAgICAgIDpjbGFzcz1cInsnZmFkZUluJzogIXN3aXRjaFRleHQsICdmYWRlT3V0Jzogc3dpdGNoVGV4dH1cIj5cbiAgICAgICAgICA8aDI+e3t0aXRsZX19PC9oMj4gXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwic3VjY2Vzc1wiIGxhcmdlIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlQXV0aFwiPnt7bWVzc2FnZX19PC92LWJ0bj5cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXV0aC1mb3JtXCI+XG4gICAgICAgIDxoMj48di1pY29uIGNsYXNzPVwidGl0bGVfX2ljb25cIj5wZXJzb25fYWRkPC92LWljb24+PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcbmltcG9ydCBMb2dpbldpdGhHaXRodWIgZnJvbSAnfi9jb21wb25lbnRzL0xvZ2luV2l0aEdpdGh1YidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBMb2dpbldpdGhHaXRodWJcbiAgfSxcblxuICBtZXRhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ2xvZ2luJykgfVxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgc3RhdGU6ICdzaWduaW5naW4nLFxuICAgIHN3aXRjaFRleHQ6IGZhbHNlLFxuICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH0pLFxuICAgIHJlbWVtYmVyOiBmYWxzZVxuICB9KSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB0aXRsZSgpIHtcbiAgICAgIHJldHVybiAodGhpcy5zdGF0ZSA9PT0gJ3NpZ25pbmdpbicpID8gdGhpcy4kdCgncmVnaXN0ZXInKSA6IHRoaXMuJHQoJ2xvZ2luJyk7XG4gICAgfSxcbiAgICBtZXNzYWdlKCkge1xuICAgICAgcmV0dXJuICh0aGlzLnN0YXRlID09PSAnc2lnbmluZ2luJykgPyB0aGlzLiR0KCdoYXNfYWNjb3VudCcpIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHQoJ2hhc19ub3RfYWNjb3VudCcpO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZUF1dGgoKSB7XG4gICAgICB0aGlzLnN3aXRjaFRleHQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgICB0aGlzLnN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdzaWduaW5naW4nKSA/ICdyZWdpc3RyYXRpb24nIDogJ3NpZ25pbmdpbic7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zd2l0Y2hUZXh0ID0gZmFsc2UsIDEwMDApO1xuICAgICAgfSwgNTAwKTtcbiAgICB9LFxuICAgIGFzeW5jIGxvZ2luICgpIHtcbiAgICAgIC8vIFN1Ym1pdCB0aGUgZm9ybS5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvbG9naW4nKVxuXG4gICAgICAvLyBTYXZlIHRoZSB0b2tlbi5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3NhdmVUb2tlbicsIHtcbiAgICAgICAgdG9rZW46IGRhdGEudG9rZW4sXG4gICAgICAgIHJlbWVtYmVyOiB0aGlzLnJlbWVtYmVyXG4gICAgICB9KVxuXG4gICAgICAvLyBGZXRjaCB0aGUgdXNlci5cbiAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL2ZldGNoVXNlcicpXG5cbiAgICAgIC8vIFJlZGlyZWN0IGhvbWUuXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJyB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5hdXRoLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xufVxuXG4uc2lnbmluZ2luLmF1dGgtd3JhcHBlcixcbi5yZWdpc3RyYXRpb24gLmF1dGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTdDMUVEO1xufVxuLnJlZ2lzdHJhdGlvbi5hdXRoLXdyYXBwZXIsXG4uc2lnbmluZ2luIC5hdXRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQzFFQjtcbn1cblxuLmF1dGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgaGVpZ2h0IC41cztcbn1cblxuLmF1dGgtc3dpdGNoLFxuLmF1dGgtZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiAxcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjcsIDEuNTUpO1xufVxuXG4uc2lnbmluZ2luIC5hdXRoLXN3aXRjaCB7XG4gIGxlZnQ6IDAlO1xufVxuXG4uc2lnbmluZ2luIC5hdXRoLWZvcm0ge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5hdXRoLXN3aXRjaCB7XG4gIGxlZnQ6IDUwJTsgXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF1dGgtc3dpdGNoX190ZXh0IHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7XG59XG4uYXV0aC1mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA0MnB4OyAgXG4gIGNvbG9yOiAjOEU4RThFO1xufVxuXG5cbi8vIC5hdXRoLXRvZ2dsZSB7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgcGFkZGluZzogNXB4IDE1cHg7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyB9XG5cbi8vIC5hdXRoLXRvZ2dsZTpob3ZlciB7XG4vLyAgIGJvcmRlci1jb2xvcjogI2RkZDtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vIH1cblxuLmF1dGgtZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGxlZnQ6IDAlO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xuICBib3gtc2hhZG93OiAwIDAgMTVweCAjOEU4RThFO1xufVxuXG4uZmFkZU91dCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC8vYW5pbWF0aW9uOiBmYWRlT3V0LCAuNXMgZm9yd2FyZHM7XG59XG5cbi5mYWRlSW4ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAvL2FuaW1hdGlvbjogZmFkZUluLCAuNXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5cblxuLy8gJGJnX3VybDogJ2h0dHBzOi8vd2FsbHBhcGVyc2NyYWZ0LmNvbS9pbWFnZS9kYXduX21vcm5pbmdfc25vd19zdXJmYWNlX21vdW50YWluc18zODQyNF8xOTIweDEwODAuanBnJztcbi8vICNsb2dpbldyYXBwZXIge1xuLy8gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbi8vICAgYmFja2dyb3VuZDogdXJsKCRiZ191cmwpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBcbi8vICAgJi5fX3NpZ25pbmdpbiAjZm9ybS1zbGlkZXIsXG4vLyAgICYuX19yZWdpc3RyYXRpb24gI2Zvcm0taW5mbyxcbi8vICAge1xuLy8gICAgIGxlZnQ6IDUwJTtcbi8vICAgfVxuLy8gICAmLl9fcmVnaXN0cmF0aW9uICNmb3JtLXNsaWRlcixcbi8vICAgJi5fX3NpZ25pbmdpbiAjZm9ybS1pbmZve1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgIH1cbi8vIH1cbi8vICNmb3JtIHtcbi8vICAgdG9wOiAxMDBweDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIG1heC13aWR0aDogNzc1cHg7XG4vLyAgIG92ZXJmbG93OmhpZGRlbjtcbi8vICAgbWFyZ2luOiAwIGF1dG87IFxuLy8gICBwYWRkaW5nOjA7XG4vLyAgIGJvcmRlcjogcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbi8vICAgYmFja2dyb3VuZDogdXJsKCRiZ191cmwpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDJweCByZ2JhKDAsMCwwLC41KTtcbiAgXG4gIFxuLy8gICAjZm9ybS1zbGlkZXIge1xuLy8gICAgIGJhY2tncm91bmQ6ICNGRkY7XG4vLyAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4vLyAgICAgcGFkZGluZzogMjBweDtcbi8vICAgICB3aWR0aDogNTAlO1xuLy8gICAgIHRyYW5zaXRpb246IGxlZnQgMS4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjcsIDEuNTUpO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgYm94LXNoYWRvdzogMCAwIDQwcHggMnB4IHJnYmEoMCwwLDAsLjMpO1xuLy8gICB9XG4vLyAgICNmb3JtLWluZm8ge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIHNhbnMtc2VyaWY7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGNvbG9yOiAjRkZGO1xuLy8gICAgIHRvcDogMjAlO1xuLy8gICAgIHdpZHRoOiA1MCU7XG4gICAgXG4vLyAgICAgJiA+IGRpdiB7XG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGxlZnQ6IDIwJTtcbi8vICAgICAgIHBhZGRpbmc6IDMwcHg7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIC5idG4tbGluayB7XG4vLyAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4vLyAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgYm9yZGVyOiAycHggc29saWQ7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuYnRuLXNlcGFyYXRvciB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgbWFyZ2luOiAycHggMDtcbi8vICAgY29sb3I6ICM3Nzc7XG4vLyB9XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjcxM2UyYjVlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTZlNmUzZDY4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYXV0aC13cmFwcGVyW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcXG59XFxuLnNpZ25pbmdpbi5hdXRoLXdyYXBwZXJbZGF0YS12LTZlNmUzZDY4XSxcXG4ucmVnaXN0cmF0aW9uIC5hdXRoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E3QzFFRDtcXG59XFxuLnJlZ2lzdHJhdGlvbi5hdXRoLXdyYXBwZXJbZGF0YS12LTZlNmUzZDY4XSxcXG4uc2lnbmluZ2luIC5hdXRoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQzFFQjtcXG59XFxuLmF1dGhbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGhlaWdodCAuNXM7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBoZWlnaHQgLjVzO1xcbn1cXG4uYXV0aC1zd2l0Y2hbZGF0YS12LTZlNmUzZDY4XSxcXG4uYXV0aC1mb3JtW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcXG4gIHRyYW5zaXRpb246IDFzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7XFxufVxcbi5zaWduaW5naW4gLmF1dGgtc3dpdGNoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogMCU7XFxufVxcbi5zaWduaW5naW4gLmF1dGgtZm9ybVtkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuLmF1dGgtc3dpdGNoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hdXRoLXN3aXRjaF9fdGV4dFtkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjM1cztcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zNXM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAuMzVzO1xcbn1cXG4uYXV0aC1mb3JtW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuaDJbZGF0YS12LTZlNmUzZDY4XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pY29uW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgY29sb3I6ICM4RThFOEU7XFxufVxcbi5hdXRoLWZvcm1bZGF0YS12LTZlNmUzZDY4XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbGVmdDogMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggIzhFOEU4RTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzhFOEU4RTtcXG59XFxuLmZhZGVPdXRbZGF0YS12LTZlNmUzZDY4XSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbi5mYWRlSW5bZGF0YS12LTZlNmUzZDY4XSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4tZGF0YS12LTZlNmUzZDY4IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbi1kYXRhLXYtNmU2ZTNkNjgge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0LWRhdGEtdi02ZTZlM2Q2OCB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmYWRlT3V0LWRhdGEtdi02ZTZlM2Q2OCB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQix3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0NBQUU7QUFFcEM7O0VBRUUsMEJBQTBCO0NBQUU7QUFFOUI7O0VBRUUsMEJBQTBCO0NBQUU7QUFFOUI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0RBQTRDO1VBQTVDLDRDQUE0QztFQUM1Qyw4QkFBOEI7RUFDOUIsb0RBQTRDO0VBQTVDLDRDQUE0QztDQUFFO0FBRWhEOztFQUVFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDZEQUFxRDtFQUFyRCxxREFBcUQ7Q0FBRTtBQUV6RDtFQUNFLFNBQVM7Q0FBRTtBQUViO0VBQ0UsVUFBVTtDQUFFO0FBRWQ7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7Q0FBRTtBQUV2QjtFQUNFLDJDQUEyQjtFQUEzQixtQ0FBMkI7RUFBM0IsMkJBQTJCO0VBQTNCLG1EQUEyQjtDQUFFO0FBRS9CO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7Q0FBRTtBQUVsQjtFQUNFLG1CQUFtQjtDQUFFO0FBRXZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FBRTtBQUVuQjtFQUNFLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsV0FBVztFQUNYLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFDMUIscUNBQTZCO1VBQTdCLDZCQUE2QjtDQUFFO0FBRWpDO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtDQUFFO0FBRXhCO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtDQUFFO0FBRXhCO0FBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7QUFDeEI7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7Q0FBRTtBQUo1QjtBQUNFO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUFFO0FBQ3hCO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUFFO0NBQUU7QUFFNUI7QUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FBRTtBQUN4QjtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FBRTtDQUFFO0FBSjVCO0FBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7QUFDeEI7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7Q0FBRVwiLFwiZmlsZVwiOlwibG9naW4udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hdXRoLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxczsgfVxcblxcbi5zaWduaW5naW4uYXV0aC13cmFwcGVyLFxcbi5yZWdpc3RyYXRpb24gLmF1dGgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E3QzFFRDsgfVxcblxcbi5yZWdpc3RyYXRpb24uYXV0aC13cmFwcGVyLFxcbi5zaWduaW5naW4gLmF1dGgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQzFFQjsgfVxcblxcbi5hdXRoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBoZWlnaHQgLjVzOyB9XFxuXFxuLmF1dGgtc3dpdGNoLFxcbi5hdXRoLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IDFzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7IH1cXG5cXG4uc2lnbmluZ2luIC5hdXRoLXN3aXRjaCB7XFxuICBsZWZ0OiAwJTsgfVxcblxcbi5zaWduaW5naW4gLmF1dGgtZm9ybSB7XFxuICBsZWZ0OiA1MCU7IH1cXG5cXG4uYXV0aC1zd2l0Y2gge1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uYXV0aC1zd2l0Y2hfX3RleHQge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7IH1cXG5cXG4uYXV0aC1mb3JtIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7IH1cXG5cXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBjb2xvcjogIzhFOEU4RTsgfVxcblxcbi5hdXRoLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGxlZnQ6IDAlO1xcbiAgei1pbmRleDogMjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCAjOEU4RThFOyB9XFxuXFxuLmZhZGVPdXQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcblxcbi5mYWRlSW4ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNmU2ZTNkNjhcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF1dGgtd3JhcHBlclwiLCBjbGFzczogX3ZtLnN0YXRlIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF1dGhcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF1dGgtc3dpdGNoXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF1dGgtc3dpdGNoX190ZXh0XCIsXG4gICAgICAgICAgICBjbGFzczogeyBmYWRlSW46ICFfdm0uc3dpdGNoVGV4dCwgZmFkZU91dDogX3ZtLnN3aXRjaFRleHQgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJzdWNjZXNzXCIsIGxhcmdlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZUF1dGgoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm1lc3NhZ2UpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhdXRoLWZvcm1cIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiaDJcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlX19pY29uXCIgfSwgW192bS5fdihcInBlcnNvbl9hZGRcIildKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTZlNmUzZDY4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ZTZlM2Q2OFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=