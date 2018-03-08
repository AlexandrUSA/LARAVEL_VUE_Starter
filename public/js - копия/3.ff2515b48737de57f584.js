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
      state: '__signingin',
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        email: '',
        password: ''
      }),
      remember: false
    };
  },

  methods: {
    goToRegistration: function goToRegistration() {
      this.state = '__registration';
    },
    goToLogin: function goToLogin() {
      this.state = '__signingin';
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
exports.push([module.i, "\n#loginWrapper[data-v-6e6e3d68] {\n  height: calc(100vh - 56px);\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover;\n}\n#loginWrapper.__signingin #form-slider[data-v-6e6e3d68],\n  #loginWrapper.__registration #form-info[data-v-6e6e3d68] {\n    left: 50%;\n}\n#loginWrapper.__registration #form-slider[data-v-6e6e3d68],\n  #loginWrapper.__signingin #form-info[data-v-6e6e3d68] {\n    left: 0;\n}\n#form[data-v-6e6e3d68] {\n  top: 100px;\n  width: 100%;\n  max-width: 775px;\n  overflow: hidden;\n  margin: 0 auto;\n  padding: 0;\n  border: px solid transparent;\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n}\n#form #form-slider[data-v-6e6e3d68] {\n    background: #FFF;\n    position: relative;\n    padding: 20px;\n    width: 50%;\n    -webkit-transition: left 1.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n    transition: left 1.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n    left: 0;\n    -webkit-box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.3);\n            box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.3);\n}\n#form #form-info[data-v-6e6e3d68] {\n    font-family: 'Lobster', sans-serif;\n    color: #FFF;\n    width: 50%;\n}\n#form #form-info > div[data-v-6e6e3d68] {\n      position: absolute;\n      width: 100%;\n      left: 0;\n      padding: 30px;\n}\n#form #form-info .btn-link[data-v-6e6e3d68] {\n      font-family: sans-serif;\n      color: #fff;\n      border: 2px solid;\n      border-radius: 3px;\n}\n.btn-separator[data-v-6e6e3d68] {\n  text-align: center;\n  margin: 2px 0;\n  color: #777;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/auth/login.vue"],"names":[],"mappings":";AAAA;EACE,2BAA2B;EAC3B,qIAAqI;EACrI,uBAAuB;CAAE;AACzB;;IAEE,UAAU;CAAE;AACd;;IAEE,QAAQ;CAAE;AAEd;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,6BAA6B;EAC7B,qIAAqI;EACrI,uBAAuB;EACvB,mBAAmB;EACnB,oDAA4C;UAA5C,4CAA4C;CAAE;AAC9C;IACE,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,oEAA4D;IAA5D,4DAA4D;IAC5D,QAAQ;IACR,oDAA4C;YAA5C,4CAA4C;CAAE;AAChD;IACE,mCAAmC;IACnC,YAAY;IACZ,WAAW;CAAE;AACb;MACE,mBAAmB;MACnB,YAAY;MACZ,QAAQ;MACR,cAAc;CAAE;AAClB;MACE,wBAAwB;MACxB,YAAY;MACZ,kBAAkB;MAClB,mBAAmB;CAAE;AAE3B;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;CAAE","file":"login.vue","sourcesContent":["#loginWrapper {\n  height: calc(100vh - 56px);\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover; }\n  #loginWrapper.__signingin #form-slider,\n  #loginWrapper.__registration #form-info {\n    left: 50%; }\n  #loginWrapper.__registration #form-slider,\n  #loginWrapper.__signingin #form-info {\n    left: 0; }\n\n#form {\n  top: 100px;\n  width: 100%;\n  max-width: 775px;\n  overflow: hidden;\n  margin: 0 auto;\n  padding: 0;\n  border: px solid transparent;\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover;\n  border-radius: 6px;\n  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5); }\n  #form #form-slider {\n    background: #FFF;\n    position: relative;\n    padding: 20px;\n    width: 50%;\n    transition: left 1.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n    left: 0;\n    box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.3); }\n  #form #form-info {\n    font-family: 'Lobster', sans-serif;\n    color: #FFF;\n    width: 50%; }\n    #form #form-info > div {\n      position: absolute;\n      width: 100%;\n      left: 0;\n      padding: 30px; }\n    #form #form-info .btn-link {\n      font-family: sans-serif;\n      color: #fff;\n      border: 2px solid;\n      border-radius: 3px; }\n\n.btn-separator {\n  text-align: center;\n  margin: 2px 0;\n  color: #777; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.state, attrs: { id: "loginWrapper" } }, [
    _c(
      "div",
      { staticClass: "auth-input animated fadeInDown", attrs: { id: "form" } },
      [
        _c(
          "div",
          { staticClass: "text-center", attrs: { id: "form-info" } },
          [
            _c(
              "transition",
              {
                attrs: {
                  mode: "out-in",
                  "enter-active-class": "animated zoomIn",
                  "leave-active-class": "animated zoomOut"
                }
              },
              [
                _vm.state == "__signingin"
                  ? _c("div", { key: "login" }, [
                      _c("h1", [_vm._v("Sign In")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("And meet the awesomeness inside!")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-link",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.goToRegistration($event)
                              }
                            }
                          },
                          [_vm._v("Dont have an account?")]
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.state == "__registration"
                  ? _c("div", { key: "register" }, [
                      _c("h1", [_vm._v("Sign Up")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("And meet the awesomeness inside!")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-link",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.goToLogin($event)
                              }
                            }
                          },
                          [_vm._v("Already got an account?")]
                        )
                      ])
                    ])
                  : _vm._e()
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { attrs: { id: "form-slider" } },
          [
            _c(
              "transition",
              {
                attrs: {
                  mode: "out-in",
                  "enter-active-class": "animated fadeIn",
                  "leave-active-class": "animated fadeOut"
                }
              },
              [
                _vm.state == "__signingin"
                  ? _c(
                      "div",
                      {
                        key: "login",
                        staticClass: "animate fadeIn",
                        attrs: { id: "login-form" }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("img", {
                            staticClass: "img-responsive center-block",
                            attrs: {
                              src:
                                "http://orig05.deviantart.net/a8f9/f/2011/284/5/6/lion_by_skillr-d4ci222.png",
                              alt: "",
                              width: "80"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              name: "email",
                              placeholder: "E-mail"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              name: "password",
                              placeholder: "Password"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "button",
                            { staticClass: "btn btn-block btn-sm btn-success" },
                            [_vm._v("Sign In")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "btn-separator" }, [
                            _vm._v("or")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-block btn-sm btn-primary" },
                            [_vm._v("Facebook")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-block btn-sm btn-danger" },
                            [_vm._v("Google")]
                          )
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.state == "__registration"
                  ? _c(
                      "div",
                      {
                        key: "register",
                        staticClass: "animate fadeIn",
                        attrs: { id: "register-form" }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("img", {
                            staticClass: "img-responsive center-block",
                            attrs: {
                              src:
                                "http://orig05.deviantart.net/a8f9/f/2011/284/5/6/lion_by_skillr-d4ci222.png",
                              alt: "",
                              width: "60"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "name",
                              placeholder: "Name"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              name: "email",
                              placeholder: "E-mail"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              name: "password",
                              placeholder: "Password"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              name: "password",
                              placeholder: "Password confirmation"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "button",
                            { staticClass: "btn btn-block btn-sm btn-success" },
                            [_vm._v("Sign Up")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "btn-separator" }, [
                            _vm._v("or")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-block btn-sm btn-primary" },
                            [_vm._v("Facebook")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-block btn-sm btn-danger" },
                            [_vm._v("Google")]
                          )
                        ])
                      ]
                    )
                  : _vm._e()
              ]
            )
          ],
          1
        )
      ]
    )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhHaXRodWIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZT8xNGZhIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NjBhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlPzk3MjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZT80MjY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFnTDtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFrRDtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsK0JBQStCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQWtEO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQWlEO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMy5mZjI1MTViNDg3MzdkZTU3ZjU4NC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbG9naW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbG9naW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi02ZTZlM2Q2OFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGF1dGhcXFxcbG9naW4udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZlNmUzZDY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmU2ZTNkNjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Mb2dpbldpdGhHaXRodWIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1hMjk5NzUyYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xvZ2luV2l0aEdpdGh1Yi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXExvZ2luV2l0aEdpdGh1Yi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYTI5OTc1MmFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hMjk5NzUyYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aEdpdGh1Yi52dWVcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyIsIjx0ZW1wbGF0ZT5cbiAgPGJ1dHRvbiB2LWlmPVwiZ2l0aHViQXV0aFwiIEBjbGljaz1cImxvZ2luXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIG1sLWF1dG9cIj5cbiAgICB7eyAkdCgnbG9naW5fd2l0aCcpIH19XG4gICAgPGZhIDppY29uPVwiWydmYWInLCAnZ2l0aHViJ11cIi8+XG4gIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0xvZ2luV2l0aEdpdGh1YicsXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBnaXRodWJBdXRoOiAoKSA9PiB3aW5kb3cuY29uZmlnLmdpdGh1YkF1dGgsXG4gICAgdXJsOiAoKSA9PiBgL2FwaS9vYXV0aC9naXRodWJgXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSwgZmFsc2UpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgbG9naW4gKCkge1xuICAgICAgY29uc3QgdXJsID0gYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvZmV0Y2hPYXV0aFVybCcsIHtcbiAgICAgICAgcHJvdmlkZXI6ICdnaXRodWInXG4gICAgICB9KVxuXG4gICAgICBvcGVuV2luZG93KHVybCwgdGhpcy4kdCgnbG9naW4nKSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNZXNzYWdlRXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbk1lc3NhZ2UgKGUpIHtcbiAgICAgIGlmIChlLm9yaWdpbiAhPT0gd2luZG93Lm9yaWdpbiB8fCAhZS5kYXRhLnRva2VuKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9zYXZlVG9rZW4nLCB7XG4gICAgICAgIHRva2VuOiBlLmRhdGEudG9rZW5cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtXaW5kb3d9XG4gKi9cbmZ1bmN0aW9uIG9wZW5XaW5kb3cgKHVybCwgdGl0bGUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0gdXJsXG4gICAgdXJsID0gJydcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IHVybCwgdGl0bGUsIHdpZHRoOiA2MDAsIGhlaWdodDogNzIwLCAuLi5vcHRpb25zIH1cblxuICBjb25zdCBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHdpbmRvdy5zY3JlZW4ubGVmdFxuICBjb25zdCBkdWFsU2NyZWVuVG9wID0gd2luZG93LnNjcmVlblRvcCAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlblRvcCA6IHdpbmRvdy5zY3JlZW4udG9wXG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IHdpbmRvdy5zY3JlZW4ud2lkdGhcbiAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgd2luZG93LnNjcmVlbi5oZWlnaHRcblxuICBvcHRpb25zLmxlZnQgPSAoKHdpZHRoIC8gMikgLSAob3B0aW9ucy53aWR0aCAvIDIpKSArIGR1YWxTY3JlZW5MZWZ0XG4gIG9wdGlvbnMudG9wID0gKChoZWlnaHQgLyAyKSAtIChvcHRpb25zLmhlaWdodCAvIDIpKSArIGR1YWxTY3JlZW5Ub3BcblxuICBjb25zdCBvcHRpb25zU3RyID0gT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjYy5wdXNoKGAke2tleX09JHtvcHRpb25zW2tleV19YClcbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKS5qb2luKCcsJylcblxuICBjb25zdCBuZXdXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsIHRpdGxlLCBvcHRpb25zU3RyKVxuXG4gIGlmICh3aW5kb3cuZm9jdXMpIHtcbiAgICBuZXdXaW5kb3cuZm9jdXMoKVxuICB9XG5cbiAgcmV0dXJuIG5ld1dpbmRvd1xufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aEdpdGh1Yi52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5naXRodWJBdXRoXG4gICAgPyBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFyayBtbC1hdXRvXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubG9naW4gfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICBcIiArIF92bS5fcyhfdm0uJHQoXCJsb2dpbl93aXRoXCIpKSArIFwiXFxuICBcIiksXG4gICAgICAgICAgX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFtcImZhYlwiLCBcImdpdGh1YlwiXSB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWEyOTk3NTJhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hMjk5NzUyYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhHaXRodWIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMiLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJsb2dpbldyYXBwZXJcIiA6Y2xhc3M9XCJzdGF0ZVwiPlxuICA8ZGl2IGNsYXNzPVwiYXV0aC1pbnB1dCBhbmltYXRlZCBmYWRlSW5Eb3duXCIgaWQ9XCJmb3JtXCI+XG4gICAgPGRpdiBpZD1cImZvcm0taW5mb1wiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgIDx0cmFuc2l0aW9uXG4gICAgICBtb2RlPVwib3V0LWluXCJcbiAgICAgIGVudGVyLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIHpvb21JblwiXG4gICAgICBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCB6b29tT3V0XCI+XG4gICAgICA8ZGl2IGtleT1cImxvZ2luXCIgdi1pZj1cInN0YXRlID09ICdfX3NpZ25pbmdpbidcIj5cbiAgICAgICAgPGgxPlNpZ24gSW48L2gxPlxuICAgICAgICA8cD5BbmQgbWVldCB0aGUgYXdlc29tZW5lc3MgaW5zaWRlITwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWxpbmtcIiBAY2xpY2sucHJldmVudD1cImdvVG9SZWdpc3RyYXRpb25cIiBocmVmPVwiI1wiPkRvbnQgaGF2ZSBhbiBhY2NvdW50PzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBrZXk9XCJyZWdpc3RlclwiIHYtaWY9XCJzdGF0ZSA9PSAnX19yZWdpc3RyYXRpb24nXCI+XG4gICAgICAgICAgPGgxPlNpZ24gVXA8L2gxPlxuICAgICAgICAgIDxwPkFuZCBtZWV0IHRoZSBhd2Vzb21lbmVzcyBpbnNpZGUhPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tbGlua1wiIEBjbGljay5wcmV2ZW50PVwiZ29Ub0xvZ2luXCIgaHJlZj1cIiNcIj5BbHJlYWR5IGdvdCBhbiBhY2NvdW50PzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90cmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJmb3JtLXNsaWRlclwiPlxuICAgIDx0cmFuc2l0aW9uXG4gICAgICBtb2RlPVwib3V0LWluXCJcbiAgICAgIGVudGVyLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVJblwiXG4gICAgICBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCBmYWRlT3V0XCI+XG4gICAgPGRpdiB2LWlmPVwic3RhdGUgPT0gJ19fc2lnbmluZ2luJ1wiIGNsYXNzPVwiYW5pbWF0ZSBmYWRlSW5cIiBrZXk9XCJsb2dpblwiIGlkPVwibG9naW4tZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vb3JpZzA1LmRldmlhbnRhcnQubmV0L2E4ZjkvZi8yMDExLzI4NC81LzYvbGlvbl9ieV9za2lsbHItZDRjaTIyMi5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGNlbnRlci1ibG9ja1wiIHdpZHRoPVwiODBcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc20gYnRuLXN1Y2Nlc3NcIj5TaWduIEluPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tc2VwYXJhdG9yXCI+b3I8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1wcmltYXJ5XCI+RmFjZWJvb2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1kYW5nZXJcIj5Hb29nbGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cInN0YXRlID09ICdfX3JlZ2lzdHJhdGlvbidcIiBjbGFzcz1cImFuaW1hdGUgZmFkZUluXCIga2V5PVwicmVnaXN0ZXJcIiBpZD1cInJlZ2lzdGVyLWZvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL29yaWcwNS5kZXZpYW50YXJ0Lm5ldC9hOGY5L2YvMjAxMS8yODQvNS82L2xpb25fYnlfc2tpbGxyLWQ0Y2kyMjIucG5nXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBjZW50ZXItYmxvY2tcIiB3aWR0aD1cIjYwXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCBjb25maXJtYXRpb25cIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tc3VjY2Vzc1wiPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1zZXBhcmF0b3JcIj5vcjwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc20gYnRuLXByaW1hcnlcIj5GYWNlYm9vazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc20gYnRuLWRhbmdlclwiPkdvb2dsZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IExvZ2luV2l0aEdpdGh1YiBmcm9tICd+L2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZGRsZXdhcmU6ICdndWVzdCcsXG5cbiAgY29tcG9uZW50czoge1xuICAgIExvZ2luV2l0aEdpdGh1YlxuICB9LFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnbG9naW4nKSB9XG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBzdGF0ZTogJ19fc2lnbmluZ2luJyxcbiAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9KSxcbiAgICByZW1lbWJlcjogZmFsc2VcbiAgfSksXG5cbiAgbWV0aG9kczoge1xuICAgIGdvVG9SZWdpc3RyYXRpb24gKCkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdfX3JlZ2lzdHJhdGlvbidcbiAgICB9LFxuICAgIGdvVG9Mb2dpbiAoKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ19fc2lnbmluZ2luJ1xuICAgIH0sXG4gICAgYXN5bmMgbG9naW4gKCkge1xuICAgICAgLy8gU3VibWl0IHRoZSBmb3JtLlxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9sb2dpbicpXG5cbiAgICAgIC8vIFNhdmUgdGhlIHRva2VuLlxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvc2F2ZVRva2VuJywge1xuICAgICAgICB0b2tlbjogZGF0YS50b2tlbixcbiAgICAgICAgcmVtZW1iZXI6IHRoaXMucmVtZW1iZXJcbiAgICAgIH0pXG5cbiAgICAgIC8vIEZldGNoIHRoZSB1c2VyLlxuICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvZmV0Y2hVc2VyJylcblxuICAgICAgLy8gUmVkaXJlY3QgaG9tZS5cbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuJGJnX3VybDogJ2h0dHBzOi8vd2FsbHBhcGVyc2NyYWZ0LmNvbS9pbWFnZS9kYXduX21vcm5pbmdfc25vd19zdXJmYWNlX21vdW50YWluc18zODQyNF8xOTIweDEwODAuanBnJztcblxuI2xvZ2luV3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICBiYWNrZ3JvdW5kOiB1cmwoJGJnX3VybCkgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIFxuICAmLl9fc2lnbmluZ2luICNmb3JtLXNsaWRlcixcbiAgJi5fX3JlZ2lzdHJhdGlvbiAjZm9ybS1pbmZvLFxuICB7XG4gICAgbGVmdDogNTAlO1xuICB9XG4gICYuX19yZWdpc3RyYXRpb24gI2Zvcm0tc2xpZGVyLFxuICAmLl9fc2lnbmluZ2luICNmb3JtLWluZm97XG4gICAgbGVmdDogMDtcbiAgfVxufVxuI2Zvcm0ge1xuICB0b3A6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NzVweDtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBtYXJnaW46IDAgYXV0bzsgXG4gIHBhZGRpbmc6MDtcbiAgYm9yZGVyOiBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kOiB1cmwoJGJnX3VybCkgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMnB4IHJnYmEoMCwwLDAsLjUpO1xuICBcbiAgXG4gICNmb3JtLXNsaWRlciB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAxLjNzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7XG4gICAgbGVmdDogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCAycHggcmdiYSgwLDAsMCwuMyk7XG4gIH1cbiAgI2Zvcm0taW5mbyB7XG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgc2Fucy1zZXJpZjtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgLy8gdG9wOiAyMCU7XG4gICAgLy8gbGVmdDogMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIFxuICAgICYgPiBkaXYge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICB9XG4gICAgXG4gICAgLmJ0bi1saW5rIHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICB9XG59XG5cbi5idG4tc2VwYXJhdG9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJweCAwO1xuICBjb2xvcjogIzc3Nztcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzEzZTJiNWVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNmU2ZTNkNjhcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNsb2dpbldyYXBwZXJbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL2Rhd25fbW9ybmluZ19zbm93X3N1cmZhY2VfbW91bnRhaW5zXzM4NDI0XzE5MjB4MTA4MC5qcGdcXFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbiNsb2dpbldyYXBwZXIuX19zaWduaW5naW4gI2Zvcm0tc2xpZGVyW2RhdGEtdi02ZTZlM2Q2OF0sXFxuICAjbG9naW5XcmFwcGVyLl9fcmVnaXN0cmF0aW9uICNmb3JtLWluZm9bZGF0YS12LTZlNmUzZDY4XSB7XFxuICAgIGxlZnQ6IDUwJTtcXG59XFxuI2xvZ2luV3JhcHBlci5fX3JlZ2lzdHJhdGlvbiAjZm9ybS1zbGlkZXJbZGF0YS12LTZlNmUzZDY4XSxcXG4gICNsb2dpbldyYXBwZXIuX19zaWduaW5naW4gI2Zvcm0taW5mb1tkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gICAgbGVmdDogMDtcXG59XFxuI2Zvcm1bZGF0YS12LTZlNmUzZDY4XSB7XFxuICB0b3A6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDc3NXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vd2FsbHBhcGVyc2NyYWZ0LmNvbS9pbWFnZS9kYXduX21vcm5pbmdfc25vd19zdXJmYWNlX21vdW50YWluc18zODQyNF8xOTIweDEwODAuanBnXFxcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4jZm9ybSAjZm9ybS1zbGlkZXJbZGF0YS12LTZlNmUzZDY4XSB7XFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDEuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAxLjNzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDQwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4jZm9ybSAjZm9ybS1pbmZvW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuI2Zvcm0gI2Zvcm0taW5mbyA+IGRpdltkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4jZm9ybSAjZm9ybS1pbmZvIC5idG4tbGlua1tkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5idG4tc2VwYXJhdG9yW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAycHggMDtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3NwYS9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLDJCQUEyQjtFQUMzQixxSUFBcUk7RUFDckksdUJBQXVCO0NBQUU7QUFDekI7O0lBRUUsVUFBVTtDQUFFO0FBQ2Q7O0lBRUUsUUFBUTtDQUFFO0FBRWQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IscUlBQXFJO0VBQ3JJLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0RBQTRDO1VBQTVDLDRDQUE0QztDQUFFO0FBQzlDO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLG9FQUE0RDtJQUE1RCw0REFBNEQ7SUFDNUQsUUFBUTtJQUNSLG9EQUE0QztZQUE1Qyw0Q0FBNEM7Q0FBRTtBQUNoRDtJQUNFLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osV0FBVztDQUFFO0FBQ2I7TUFDRSxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLFFBQVE7TUFDUixjQUFjO0NBQUU7QUFDbEI7TUFDRSx3QkFBd0I7TUFDeEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixtQkFBbUI7Q0FBRTtBQUUzQjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtDQUFFXCIsXCJmaWxlXCI6XCJsb2dpbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xvZ2luV3JhcHBlciB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL2Rhd25fbW9ybmluZ19zbm93X3N1cmZhY2VfbW91bnRhaW5zXzM4NDI0XzE5MjB4MTA4MC5qcGdcXFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG4gICNsb2dpbldyYXBwZXIuX19zaWduaW5naW4gI2Zvcm0tc2xpZGVyLFxcbiAgI2xvZ2luV3JhcHBlci5fX3JlZ2lzdHJhdGlvbiAjZm9ybS1pbmZvIHtcXG4gICAgbGVmdDogNTAlOyB9XFxuICAjbG9naW5XcmFwcGVyLl9fcmVnaXN0cmF0aW9uICNmb3JtLXNsaWRlcixcXG4gICNsb2dpbldyYXBwZXIuX19zaWduaW5naW4gI2Zvcm0taW5mbyB7XFxuICAgIGxlZnQ6IDA7IH1cXG5cXG4jZm9ybSB7XFxuICB0b3A6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDc3NXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vd2FsbHBhcGVyc2NyYWZ0LmNvbS9pbWFnZS9kYXduX21vcm5pbmdfc25vd19zdXJmYWNlX21vdW50YWluc18zODQyNF8xOTIweDEwODAuanBnXFxcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcbiAgI2Zvcm0gI2Zvcm0tc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDEuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxcbiAgI2Zvcm0gI2Zvcm0taW5mbyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICB3aWR0aDogNTAlOyB9XFxuICAgICNmb3JtICNmb3JtLWluZm8gPiBkaXYge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHBhZGRpbmc6IDMwcHg7IH1cXG4gICAgI2Zvcm0gI2Zvcm0taW5mbyAuYnRuLWxpbmsge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcblxcbi5idG4tc2VwYXJhdG9yIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMnB4IDA7XFxuICBjb2xvcjogIzc3NzsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02ZTZlM2Q2OFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5zdGF0ZSwgYXR0cnM6IHsgaWQ6IFwibG9naW5XcmFwcGVyXCIgfSB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJhdXRoLWlucHV0IGFuaW1hdGVkIGZhZGVJbkRvd25cIiwgYXR0cnM6IHsgaWQ6IFwiZm9ybVwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsIGF0dHJzOiB7IGlkOiBcImZvcm0taW5mb1wiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIixcbiAgICAgICAgICAgICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwiYW5pbWF0ZWQgem9vbUluXCIsXG4gICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIHpvb21PdXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zdGF0ZSA9PSBcIl9fc2lnbmluZ2luXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBrZXk6IFwibG9naW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiU2lnbiBJblwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJBbmQgbWVldCB0aGUgYXdlc29tZW5lc3MgaW5zaWRlIVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ29Ub1JlZ2lzdHJhdGlvbigkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRG9udCBoYXZlIGFuIGFjY291bnQ/XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnN0YXRlID09IFwiX19yZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IGtleTogXCJyZWdpc3RlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJTaWduIFVwXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkFuZCBtZWV0IHRoZSBhd2Vzb21lbmVzcyBpbnNpZGUhXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nb1RvTG9naW4oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFscmVhZHkgZ290IGFuIGFjY291bnQ/XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IGF0dHJzOiB7IGlkOiBcImZvcm0tc2xpZGVyXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiLFxuICAgICAgICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlSW5cIixcbiAgICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwiYW5pbWF0ZWQgZmFkZU91dFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLnN0YXRlID09IFwiX19zaWduaW5naW5cIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsb2dpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbWF0ZSBmYWRlSW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImxvZ2luLWZvcm1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctcmVzcG9uc2l2ZSBjZW50ZXItYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly9vcmlnMDUuZGV2aWFudGFydC5uZXQvYThmOS9mLzIwMTEvMjg0LzUvNi9saW9uX2J5X3NraWxsci1kNGNpMjIyLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiODBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkUtbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1zdWNjZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2lnbiBJblwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG4tc2VwYXJhdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm9yXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1ibG9jayBidG4tc20gYnRuLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJGYWNlYm9va1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHb29nbGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnN0YXRlID09IFwiX19yZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJyZWdpc3RlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbWF0ZSBmYWRlSW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInJlZ2lzdGVyLWZvcm1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctcmVzcG9uc2l2ZSBjZW50ZXItYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly9vcmlnMDUuZGV2aWFudGFydC5uZXQvYThmOS9mLzIwMTEvMjg0LzUvNi9saW9uX2J5X3NraWxsci1kNGNpMjIyLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFLW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZCBjb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1zdWNjZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2lnbiBVcFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG4tc2VwYXJhdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm9yXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1ibG9jayBidG4tc20gYnRuLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJGYWNlYm9va1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHb29nbGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNmU2ZTNkNjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZlNmUzZDY4XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==