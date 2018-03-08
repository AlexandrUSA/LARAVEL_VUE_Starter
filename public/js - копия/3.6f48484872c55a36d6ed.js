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
exports.push([module.i, "\n#loginWrapper[data-v-6e6e3d68] {\n  position: relative;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover;\n}\n#loginWrapper.__signingin #form-slider[data-v-6e6e3d68],\n  #loginWrapper.__registration #form-info[data-v-6e6e3d68] {\n    left: 50%;\n}\n#loginWrapper.__registration #form-slider[data-v-6e6e3d68],\n  #loginWrapper.__signingin #form-info[data-v-6e6e3d68] {\n    left: 0;\n}\n#form[data-v-6e6e3d68] {\n  overflow: hidden;\n  padding: 0;\n  top: 100px;\n  border-radius: 6px;\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover;\n  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: px solid transparent;\n}\n#form #form-slider[data-v-6e6e3d68] {\n    background: #FFF;\n    position: relative;\n    padding: 20px;\n    width: 50%;\n    -webkit-transition: left 1.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n    transition: left 1.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n    left: 0;\n    -webkit-box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.3);\n            box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.3);\n}\n#form #form-info[data-v-6e6e3d68] {\n    font-family: 'Lobster', sans-serif;\n    position: absolute;\n    color: #FFF;\n    top: 20%;\n    left: 0;\n    width: 50%;\n}\n#form #form-info > div[data-v-6e6e3d68] {\n      position: absolute;\n      width: 100%;\n      left: 0;\n      padding: 30px;\n}\n#form #form-info .btn-link[data-v-6e6e3d68] {\n      font-family: sans-serif;\n      color: #fff;\n      border: 2px solid;\n      border-radius: 3px;\n}\n.btn-separator[data-v-6e6e3d68] {\n  text-align: center;\n  margin: 2px 0;\n  color: #777;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/auth/login.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,8BAAiB;MAAjB,iBAAiB;EACjB,qIAAqI;EACrI,uBAAuB;CAAE;AACzB;;IAEE,UAAU;CAAE;AACd;;IAEE,QAAQ;CAAE;AAEd;EACE,iBAAiB;EACjB,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,qIAAqI;EACrI,uBAAuB;EACvB,oDAA4C;UAA5C,4CAA4C;EAC5C,6BAA6B;CAAE;AAC/B;IACE,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,oEAA4D;IAA5D,4DAA4D;IAC5D,QAAQ;IACR,oDAA4C;YAA5C,4CAA4C;CAAE;AAChD;IACE,mCAAmC;IACnC,mBAAmB;IACnB,YAAY;IACZ,SAAS;IACT,QAAQ;IACR,WAAW;CAAE;AACb;MACE,mBAAmB;MACnB,YAAY;MACZ,QAAQ;MACR,cAAc;CAAE;AAClB;MACE,wBAAwB;MACxB,YAAY;MACZ,kBAAkB;MAClB,mBAAmB;CAAE;AAE3B;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;CAAE","file":"login.vue","sourcesContent":["#loginWrapper {\n  position: relative;\n  flex-basis: 100%;\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover; }\n  #loginWrapper.__signingin #form-slider,\n  #loginWrapper.__registration #form-info {\n    left: 50%; }\n  #loginWrapper.__registration #form-slider,\n  #loginWrapper.__signingin #form-info {\n    left: 0; }\n\n#form {\n  overflow: hidden;\n  padding: 0;\n  top: 100px;\n  border-radius: 6px;\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover;\n  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: px solid transparent; }\n  #form #form-slider {\n    background: #FFF;\n    position: relative;\n    padding: 20px;\n    width: 50%;\n    transition: left 1.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n    left: 0;\n    box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.3); }\n  #form #form-info {\n    font-family: 'Lobster', sans-serif;\n    position: absolute;\n    color: #FFF;\n    top: 20%;\n    left: 0;\n    width: 50%; }\n    #form #form-info > div {\n      position: absolute;\n      width: 100%;\n      left: 0;\n      padding: 30px; }\n    #form #form-info .btn-link {\n      font-family: sans-serif;\n      color: #fff;\n      border: 2px solid;\n      border-radius: 3px; }\n\n.btn-separator {\n  text-align: center;\n  margin: 2px 0;\n  color: #777; }\n"],"sourceRoot":""}]);

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
      {
        staticClass:
          "col-xs-10 col-xs-offset-1 col-lg-6 col-lg-offset-3 animated fadeInDown",
        attrs: { id: "form" }
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhHaXRodWIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZT8xNGZhIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NjBhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlPzk3MjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZT80MjY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFnTDtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFrRDtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsK0JBQStCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQWtEO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQWlEO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMy42ZjQ4NDg0ODcyYzU1YTM2ZDZlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbG9naW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbG9naW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi02ZTZlM2Q2OFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGF1dGhcXFxcbG9naW4udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZlNmUzZDY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmU2ZTNkNjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Mb2dpbldpdGhHaXRodWIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1hMjk5NzUyYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xvZ2luV2l0aEdpdGh1Yi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXExvZ2luV2l0aEdpdGh1Yi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYTI5OTc1MmFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hMjk5NzUyYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aEdpdGh1Yi52dWVcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyIsIjx0ZW1wbGF0ZT5cbiAgPGJ1dHRvbiB2LWlmPVwiZ2l0aHViQXV0aFwiIEBjbGljaz1cImxvZ2luXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIG1sLWF1dG9cIj5cbiAgICB7eyAkdCgnbG9naW5fd2l0aCcpIH19XG4gICAgPGZhIDppY29uPVwiWydmYWInLCAnZ2l0aHViJ11cIi8+XG4gIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0xvZ2luV2l0aEdpdGh1YicsXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBnaXRodWJBdXRoOiAoKSA9PiB3aW5kb3cuY29uZmlnLmdpdGh1YkF1dGgsXG4gICAgdXJsOiAoKSA9PiBgL2FwaS9vYXV0aC9naXRodWJgXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSwgZmFsc2UpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgbG9naW4gKCkge1xuICAgICAgY29uc3QgdXJsID0gYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvZmV0Y2hPYXV0aFVybCcsIHtcbiAgICAgICAgcHJvdmlkZXI6ICdnaXRodWInXG4gICAgICB9KVxuXG4gICAgICBvcGVuV2luZG93KHVybCwgdGhpcy4kdCgnbG9naW4nKSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNZXNzYWdlRXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbk1lc3NhZ2UgKGUpIHtcbiAgICAgIGlmIChlLm9yaWdpbiAhPT0gd2luZG93Lm9yaWdpbiB8fCAhZS5kYXRhLnRva2VuKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9zYXZlVG9rZW4nLCB7XG4gICAgICAgIHRva2VuOiBlLmRhdGEudG9rZW5cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtXaW5kb3d9XG4gKi9cbmZ1bmN0aW9uIG9wZW5XaW5kb3cgKHVybCwgdGl0bGUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0gdXJsXG4gICAgdXJsID0gJydcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IHVybCwgdGl0bGUsIHdpZHRoOiA2MDAsIGhlaWdodDogNzIwLCAuLi5vcHRpb25zIH1cblxuICBjb25zdCBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHdpbmRvdy5zY3JlZW4ubGVmdFxuICBjb25zdCBkdWFsU2NyZWVuVG9wID0gd2luZG93LnNjcmVlblRvcCAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlblRvcCA6IHdpbmRvdy5zY3JlZW4udG9wXG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IHdpbmRvdy5zY3JlZW4ud2lkdGhcbiAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgd2luZG93LnNjcmVlbi5oZWlnaHRcblxuICBvcHRpb25zLmxlZnQgPSAoKHdpZHRoIC8gMikgLSAob3B0aW9ucy53aWR0aCAvIDIpKSArIGR1YWxTY3JlZW5MZWZ0XG4gIG9wdGlvbnMudG9wID0gKChoZWlnaHQgLyAyKSAtIChvcHRpb25zLmhlaWdodCAvIDIpKSArIGR1YWxTY3JlZW5Ub3BcblxuICBjb25zdCBvcHRpb25zU3RyID0gT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjYy5wdXNoKGAke2tleX09JHtvcHRpb25zW2tleV19YClcbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKS5qb2luKCcsJylcblxuICBjb25zdCBuZXdXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsIHRpdGxlLCBvcHRpb25zU3RyKVxuXG4gIGlmICh3aW5kb3cuZm9jdXMpIHtcbiAgICBuZXdXaW5kb3cuZm9jdXMoKVxuICB9XG5cbiAgcmV0dXJuIG5ld1dpbmRvd1xufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aEdpdGh1Yi52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5naXRodWJBdXRoXG4gICAgPyBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFyayBtbC1hdXRvXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubG9naW4gfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICBcIiArIF92bS5fcyhfdm0uJHQoXCJsb2dpbl93aXRoXCIpKSArIFwiXFxuICBcIiksXG4gICAgICAgICAgX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFtcImZhYlwiLCBcImdpdGh1YlwiXSB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWEyOTk3NTJhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hMjk5NzUyYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhHaXRodWIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMiLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJsb2dpbldyYXBwZXJcIiA6Y2xhc3M9XCJzdGF0ZVwiPlxuICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwIGNvbC14cy1vZmZzZXQtMSBjb2wtbGctNiBjb2wtbGctb2Zmc2V0LTMgYW5pbWF0ZWQgZmFkZUluRG93blwiIGlkPVwiZm9ybVwiPlxuICAgIDxkaXYgaWQ9XCJmb3JtLWluZm9cIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICA8dHJhbnNpdGlvblxuICAgICAgbW9kZT1cIm91dC1pblwiXG4gICAgICBlbnRlci1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCB6b29tSW5cIlxuICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgem9vbU91dFwiPlxuICAgICAgPGRpdiBrZXk9XCJsb2dpblwiIHYtaWY9XCJzdGF0ZSA9PSAnX19zaWduaW5naW4nXCI+XG4gICAgICAgIDxoMT5TaWduIEluPC9oMT5cbiAgICAgICAgPHA+QW5kIG1lZXQgdGhlIGF3ZXNvbWVuZXNzIGluc2lkZSE8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgQGNsaWNrLnByZXZlbnQ9XCJnb1RvUmVnaXN0cmF0aW9uXCIgaHJlZj1cIiNcIj5Eb250IGhhdmUgYW4gYWNjb3VudD88L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYga2V5PVwicmVnaXN0ZXJcIiB2LWlmPVwic3RhdGUgPT0gJ19fcmVnaXN0cmF0aW9uJ1wiPlxuICAgICAgICAgIDxoMT5TaWduIFVwPC9oMT5cbiAgICAgICAgICA8cD5BbmQgbWVldCB0aGUgYXdlc29tZW5lc3MgaW5zaWRlITwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWxpbmtcIiBAY2xpY2sucHJldmVudD1cImdvVG9Mb2dpblwiIGhyZWY9XCIjXCI+QWxyZWFkeSBnb3QgYW4gYWNjb3VudD88L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiZm9ybS1zbGlkZXJcIj5cbiAgICA8dHJhbnNpdGlvblxuICAgICAgbW9kZT1cIm91dC1pblwiXG4gICAgICBlbnRlci1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCBmYWRlSW5cIlxuICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZU91dFwiPlxuICAgIDxkaXYgdi1pZj1cInN0YXRlID09ICdfX3NpZ25pbmdpbidcIiBjbGFzcz1cImFuaW1hdGUgZmFkZUluXCIga2V5PVwibG9naW5cIiBpZD1cImxvZ2luLWZvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL29yaWcwNS5kZXZpYW50YXJ0Lm5ldC9hOGY5L2YvMjAxMS8yODQvNS82L2xpb25fYnlfc2tpbGxyLWQ0Y2kyMjIucG5nXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBjZW50ZXItYmxvY2tcIiB3aWR0aD1cIjgwXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1zdWNjZXNzXCI+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXNlcGFyYXRvclwiPm9yPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tcHJpbWFyeVwiPkZhY2Vib29rPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tZGFuZ2VyXCI+R29vZ2xlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJzdGF0ZSA9PSAnX19yZWdpc3RyYXRpb24nXCIgY2xhc3M9XCJhbmltYXRlIGZhZGVJblwiIGtleT1cInJlZ2lzdGVyXCIgaWQ9XCJyZWdpc3Rlci1mb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9vcmlnMDUuZGV2aWFudGFydC5uZXQvYThmOS9mLzIwMTEvMjg0LzUvNi9saW9uX2J5X3NraWxsci1kNGNpMjIyLnBuZ1wiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgY2VudGVyLWJsb2NrXCIgd2lkdGg9XCI2MFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFLW1haWxcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgY29uZmlybWF0aW9uXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc20gYnRuLXN1Y2Nlc3NcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tc2VwYXJhdG9yXCI+b3I8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1wcmltYXJ5XCI+RmFjZWJvb2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1kYW5nZXJcIj5Hb29nbGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcbmltcG9ydCBMb2dpbldpdGhHaXRodWIgZnJvbSAnfi9jb21wb25lbnRzL0xvZ2luV2l0aEdpdGh1YidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBMb2dpbldpdGhHaXRodWJcbiAgfSxcblxuICBtZXRhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ2xvZ2luJykgfVxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgc3RhdGU6ICdfX3NpZ25pbmdpbicsXG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfSksXG4gICAgcmVtZW1iZXI6IGZhbHNlXG4gIH0pLFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnb1RvUmVnaXN0cmF0aW9uICgpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnX19yZWdpc3RyYXRpb24nXG4gICAgfSxcbiAgICBnb1RvTG9naW4gKCkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdfX3NpZ25pbmdpbidcbiAgICB9LFxuICAgIGFzeW5jIGxvZ2luICgpIHtcbiAgICAgIC8vIFN1Ym1pdCB0aGUgZm9ybS5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvbG9naW4nKVxuXG4gICAgICAvLyBTYXZlIHRoZSB0b2tlbi5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3NhdmVUb2tlbicsIHtcbiAgICAgICAgdG9rZW46IGRhdGEudG9rZW4sXG4gICAgICAgIHJlbWVtYmVyOiB0aGlzLnJlbWVtYmVyXG4gICAgICB9KVxuXG4gICAgICAvLyBGZXRjaCB0aGUgdXNlci5cbiAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL2ZldGNoVXNlcicpXG5cbiAgICAgIC8vIFJlZGlyZWN0IGhvbWUuXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJyB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiRiZ191cmw6ICdodHRwczovL3dhbGxwYXBlcnNjcmFmdC5jb20vaW1hZ2UvZGF3bl9tb3JuaW5nX3Nub3dfc3VyZmFjZV9tb3VudGFpbnNfMzg0MjRfMTkyMHgxMDgwLmpwZyc7XG5cbiNsb2dpbldyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCgkYmdfdXJsKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgXG4gICYuX19zaWduaW5naW4gI2Zvcm0tc2xpZGVyLFxuICAmLl9fcmVnaXN0cmF0aW9uICNmb3JtLWluZm8sXG4gIHtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cbiAgJi5fX3JlZ2lzdHJhdGlvbiAjZm9ybS1zbGlkZXIsXG4gICYuX19zaWduaW5naW4gI2Zvcm0taW5mb3tcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4jZm9ybSB7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgcGFkZGluZzowO1xuICB0b3A6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6IHVybCgkYmdfdXJsKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMnB4IHJnYmEoMCwwLDAsLjUpO1xuICBib3JkZXI6IHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIFxuICAjZm9ybS1zbGlkZXIge1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRyYW5zaXRpb246IGxlZnQgMS4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjcsIDEuNTUpO1xuICAgIGxlZnQ6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggMnB4IHJnYmEoMCwwLDAsLjMpO1xuICB9XG4gICNmb3JtLWluZm8ge1xuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIHRvcDogMjAlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBcbiAgICAmID4gZGl2IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIC5idG4tbGluayB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgfVxufVxuXG4uYnRuLXNlcGFyYXRvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAycHggMDtcbiAgY29sb3I6ICM3Nzc7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjcxM2UyYjVlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTZlNmUzZDY4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jbG9naW5XcmFwcGVyW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL2Rhd25fbW9ybmluZ19zbm93X3N1cmZhY2VfbW91bnRhaW5zXzM4NDI0XzE5MjB4MTA4MC5qcGdcXFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbiNsb2dpbldyYXBwZXIuX19zaWduaW5naW4gI2Zvcm0tc2xpZGVyW2RhdGEtdi02ZTZlM2Q2OF0sXFxuICAjbG9naW5XcmFwcGVyLl9fcmVnaXN0cmF0aW9uICNmb3JtLWluZm9bZGF0YS12LTZlNmUzZDY4XSB7XFxuICAgIGxlZnQ6IDUwJTtcXG59XFxuI2xvZ2luV3JhcHBlci5fX3JlZ2lzdHJhdGlvbiAjZm9ybS1zbGlkZXJbZGF0YS12LTZlNmUzZDY4XSxcXG4gICNsb2dpbldyYXBwZXIuX19zaWduaW5naW4gI2Zvcm0taW5mb1tkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gICAgbGVmdDogMDtcXG59XFxuI2Zvcm1bZGF0YS12LTZlNmUzZDY4XSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIHRvcDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vd2FsbHBhcGVyc2NyYWZ0LmNvbS9pbWFnZS9kYXduX21vcm5pbmdfc25vd19zdXJmYWNlX21vdW50YWluc18zODQyNF8xOTIweDEwODAuanBnXFxcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyOiBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuI2Zvcm0gI2Zvcm0tc2xpZGVyW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAxLjNzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7XFxuICAgIHRyYW5zaXRpb246IGxlZnQgMS4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjcsIDEuNTUpO1xcbiAgICBsZWZ0OiAwO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0MHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDQwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuI2Zvcm0gI2Zvcm0taW5mb1tkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgc2Fucy1zZXJpZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcbiNmb3JtICNmb3JtLWluZm8gPiBkaXZbZGF0YS12LTZlNmUzZDY4XSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcGFkZGluZzogMzBweDtcXG59XFxuI2Zvcm0gI2Zvcm0taW5mbyAuYnRuLWxpbmtbZGF0YS12LTZlNmUzZDY4XSB7XFxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4uYnRuLXNlcGFyYXRvcltkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMnB4IDA7XFxuICBjb2xvcjogIzc3NztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQWlCO01BQWpCLGlCQUFpQjtFQUNqQixxSUFBcUk7RUFDckksdUJBQXVCO0NBQUU7QUFDekI7O0lBRUUsVUFBVTtDQUFFO0FBQ2Q7O0lBRUUsUUFBUTtDQUFFO0FBRWQ7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUlBQXFJO0VBQ3JJLHVCQUF1QjtFQUN2QixvREFBNEM7VUFBNUMsNENBQTRDO0VBQzVDLDZCQUE2QjtDQUFFO0FBQy9CO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLG9FQUE0RDtJQUE1RCw0REFBNEQ7SUFDNUQsUUFBUTtJQUNSLG9EQUE0QztZQUE1Qyw0Q0FBNEM7Q0FBRTtBQUNoRDtJQUNFLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztDQUFFO0FBQ2I7TUFDRSxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLFFBQVE7TUFDUixjQUFjO0NBQUU7QUFDbEI7TUFDRSx3QkFBd0I7TUFDeEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixtQkFBbUI7Q0FBRTtBQUUzQjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtDQUFFXCIsXCJmaWxlXCI6XCJsb2dpbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xvZ2luV3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3dhbGxwYXBlcnNjcmFmdC5jb20vaW1hZ2UvZGF3bl9tb3JuaW5nX3Nub3dfc3VyZmFjZV9tb3VudGFpbnNfMzg0MjRfMTkyMHgxMDgwLmpwZ1xcXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxcbiAgI2xvZ2luV3JhcHBlci5fX3NpZ25pbmdpbiAjZm9ybS1zbGlkZXIsXFxuICAjbG9naW5XcmFwcGVyLl9fcmVnaXN0cmF0aW9uICNmb3JtLWluZm8ge1xcbiAgICBsZWZ0OiA1MCU7IH1cXG4gICNsb2dpbldyYXBwZXIuX19yZWdpc3RyYXRpb24gI2Zvcm0tc2xpZGVyLFxcbiAgI2xvZ2luV3JhcHBlci5fX3NpZ25pbmdpbiAjZm9ybS1pbmZvIHtcXG4gICAgbGVmdDogMDsgfVxcblxcbiNmb3JtIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL2Rhd25fbW9ybmluZ19zbm93X3N1cmZhY2VfbW91bnRhaW5zXzM4NDI0XzE5MjB4MTA4MC5qcGdcXFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyOiBweCBzb2xpZCB0cmFuc3BhcmVudDsgfVxcbiAgI2Zvcm0gI2Zvcm0tc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDEuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxcbiAgI2Zvcm0gI2Zvcm0taW5mbyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIHNhbnMtc2VyaWY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogNTAlOyB9XFxuICAgICNmb3JtICNmb3JtLWluZm8gPiBkaXYge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHBhZGRpbmc6IDMwcHg7IH1cXG4gICAgI2Zvcm0gI2Zvcm0taW5mbyAuYnRuLWxpbmsge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcblxcbi5idG4tc2VwYXJhdG9yIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMnB4IDA7XFxuICBjb2xvcjogIzc3NzsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02ZTZlM2Q2OFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5zdGF0ZSwgYXR0cnM6IHsgaWQ6IFwibG9naW5XcmFwcGVyXCIgfSB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImNvbC14cy0xMCBjb2wteHMtb2Zmc2V0LTEgY29sLWxnLTYgY29sLWxnLW9mZnNldC0zIGFuaW1hdGVkIGZhZGVJbkRvd25cIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZm9ybVwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLCBhdHRyczogeyBpZDogXCJmb3JtLWluZm9cIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCIsXG4gICAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIHpvb21JblwiLFxuICAgICAgICAgICAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCB6b29tT3V0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uc3RhdGUgPT0gXCJfX3NpZ25pbmdpblwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBcImxvZ2luXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlNpZ24gSW5cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQW5kIG1lZXQgdGhlIGF3ZXNvbWVuZXNzIGluc2lkZSFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdvVG9SZWdpc3RyYXRpb24oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRvbnQgaGF2ZSBhbiBhY2NvdW50P1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5zdGF0ZSA9PSBcIl9fcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBrZXk6IFwicmVnaXN0ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiU2lnbiBVcFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJBbmQgbWVldCB0aGUgYXdlc29tZW5lc3MgaW5zaWRlIVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ29Ub0xvZ2luKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBbHJlYWR5IGdvdCBhbiBhY2NvdW50P1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBhdHRyczogeyBpZDogXCJmb3JtLXNsaWRlclwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIixcbiAgICAgICAgICAgICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwiYW5pbWF0ZWQgZmFkZUluXCIsXG4gICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIGZhZGVPdXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zdGF0ZSA9PSBcIl9fc2lnbmluZ2luXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW1hdGUgZmFkZUluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJsb2dpbi1mb3JtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLXJlc3BvbnNpdmUgY2VudGVyLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vb3JpZzA1LmRldmlhbnRhcnQubmV0L2E4ZjkvZi8yMDExLzI4NC81LzYvbGlvbl9ieV9za2lsbHItZDRjaTIyMi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjgwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFLW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tc3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNpZ24gSW5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuLXNlcGFyYXRvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJvclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRmFjZWJvb2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR29vZ2xlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5zdGF0ZSA9PSBcIl9fcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicmVnaXN0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW1hdGUgZmFkZUluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJyZWdpc3Rlci1mb3JtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLXJlc3BvbnNpdmUgY2VudGVyLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vb3JpZzA1LmRldmlhbnRhcnQubmV0L2E4ZjkvZi8yMDExLzI4NC81LzYvbGlvbl9ieV9za2lsbHItZDRjaTIyMi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRS1tYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmQgY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tc3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNpZ24gVXBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuLXNlcGFyYXRvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJvclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRmFjZWJvb2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR29vZ2xlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTZlNmUzZDY4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ZTZlM2Q2OFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=