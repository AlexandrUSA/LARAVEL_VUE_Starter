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
exports.push([module.i, "\nbody[data-v-6e6e3d68], html[data-v-6e6e3d68] {\n  height: 100%;\n}\n#container[data-v-6e6e3d68] {\n  height: 100%;\n  width: 100%;\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover;\n}\n#container[data-v-6e6e3d68]:after {\n    content: '';\n    height: 100%;\n    width: 100%;\n    display: block;\n    background: rgba(25, 25, 25, 0.5);\n}\n#container.__signingin #form-slider[data-v-6e6e3d68],\n  #container.__registration #form-info[data-v-6e6e3d68] {\n    left: 50%;\n}\n#container.__registration #form-slider[data-v-6e6e3d68],\n  #container.__signingin #form-info[data-v-6e6e3d68] {\n    left: 0;\n}\n#form[data-v-6e6e3d68] {\n  overflow: hidden;\n  padding: 0;\n  top: 100px;\n  border-radius: 6px;\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover;\n  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: px solid transparent;\n}\n#form #form-slider[data-v-6e6e3d68] {\n    background: #FFF;\n    position: relative;\n    padding: 20px;\n    width: 50%;\n    -webkit-transition: left 1.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n    transition: left 1.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n    left: 0;\n    -webkit-box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.3);\n            box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.3);\n}\n#form #form-info[data-v-6e6e3d68] {\n    font-family: 'Lobster', sans-serif;\n    position: absolute;\n    color: #FFF;\n    top: 20%;\n    left: 0;\n    width: 50%;\n}\n#form #form-info > div[data-v-6e6e3d68] {\n      position: absolute;\n      width: 100%;\n      left: 0;\n      padding: 30px;\n}\n#form #form-info .btn-link[data-v-6e6e3d68] {\n      font-family: sans-serif;\n      color: #fff;\n      border: 2px solid;\n      border-radius: 3px;\n}\n.btn-separator[data-v-6e6e3d68] {\n  text-align: center;\n  margin: 2px 0;\n  color: #777;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/auth/login.vue"],"names":[],"mappings":";AAAA;EACE,aAAa;CAAE;AAEjB;EACE,aAAa;EACb,YAAY;EACZ,qIAAqI;EACrI,uBAAuB;CAAE;AACzB;IACE,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,eAAe;IACf,kCAAkC;CAAE;AACtC;;IAEE,UAAU;CAAE;AACd;;IAEE,QAAQ;CAAE;AAEd;EACE,iBAAiB;EACjB,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,qIAAqI;EACrI,uBAAuB;EACvB,oDAA4C;UAA5C,4CAA4C;EAC5C,6BAA6B;CAAE;AAC/B;IACE,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,oEAA4D;IAA5D,4DAA4D;IAC5D,QAAQ;IACR,oDAA4C;YAA5C,4CAA4C;CAAE;AAChD;IACE,mCAAmC;IACnC,mBAAmB;IACnB,YAAY;IACZ,SAAS;IACT,QAAQ;IACR,WAAW;CAAE;AACb;MACE,mBAAmB;MACnB,YAAY;MACZ,QAAQ;MACR,cAAc;CAAE;AAClB;MACE,wBAAwB;MACxB,YAAY;MACZ,kBAAkB;MAClB,mBAAmB;CAAE;AAE3B;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;CAAE","file":"login.vue","sourcesContent":["body, html {\n  height: 100%; }\n\n#container {\n  height: 100%;\n  width: 100%;\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover; }\n  #container:after {\n    content: '';\n    height: 100%;\n    width: 100%;\n    display: block;\n    background: rgba(25, 25, 25, 0.5); }\n  #container.__signingin #form-slider,\n  #container.__registration #form-info {\n    left: 50%; }\n  #container.__registration #form-slider,\n  #container.__signingin #form-info {\n    left: 0; }\n\n#form {\n  overflow: hidden;\n  padding: 0;\n  top: 100px;\n  border-radius: 6px;\n  background: url(\"https://wallpaperscraft.com/image/dawn_morning_snow_surface_mountains_38424_1920x1080.jpg\") center center no-repeat;\n  background-size: cover;\n  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: px solid transparent; }\n  #form #form-slider {\n    background: #FFF;\n    position: relative;\n    padding: 20px;\n    width: 50%;\n    transition: left 1.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n    left: 0;\n    box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.3); }\n  #form #form-info {\n    font-family: 'Lobster', sans-serif;\n    position: absolute;\n    color: #FFF;\n    top: 20%;\n    left: 0;\n    width: 50%; }\n    #form #form-info > div {\n      position: absolute;\n      width: 100%;\n      left: 0;\n      padding: 30px; }\n    #form #form-info .btn-link {\n      font-family: sans-serif;\n      color: #fff;\n      border: 2px solid;\n      border-radius: 3px; }\n\n.btn-separator {\n  text-align: center;\n  margin: 2px 0;\n  color: #777; }\n"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhHaXRodWIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZT8xNGZhIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NjBhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlPzk3MjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZT80MjY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFnTDtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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dmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dpbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dpbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTZlNmUzZDY4XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYXV0aFxcXFxsb2dpbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmU2ZTNkNjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZTZlM2Q2OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xvZ2luV2l0aEdpdGh1Yi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWEyOTk3NTJhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTG9naW5XaXRoR2l0aHViLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcTG9naW5XaXRoR2l0aHViLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hMjk5NzUyYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWEyOTk3NTJhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIiwiPHRlbXBsYXRlPlxuICA8YnV0dG9uIHYtaWY9XCJnaXRodWJBdXRoXCIgQGNsaWNrPVwibG9naW5cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhcmsgbWwtYXV0b1wiPlxuICAgIHt7ICR0KCdsb2dpbl93aXRoJykgfX1cbiAgICA8ZmEgOmljb249XCJbJ2ZhYicsICdnaXRodWInXVwiLz5cbiAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTG9naW5XaXRoR2l0aHViJyxcblxuICBjb21wdXRlZDoge1xuICAgIGdpdGh1YkF1dGg6ICgpID0+IHdpbmRvdy5jb25maWcuZ2l0aHViQXV0aCxcbiAgICB1cmw6ICgpID0+IGAvYXBpL29hdXRoL2dpdGh1YmBcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlLCBmYWxzZSlcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBsb2dpbiAoKSB7XG4gICAgICBjb25zdCB1cmwgPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9mZXRjaE9hdXRoVXJsJywge1xuICAgICAgICBwcm92aWRlcjogJ2dpdGh1YidcbiAgICAgIH0pXG5cbiAgICAgIG9wZW5XaW5kb3codXJsLCB0aGlzLiR0KCdsb2dpbicpKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01lc3NhZ2VFdmVudH0gZVxuICAgICAqL1xuICAgIG9uTWVzc2FnZSAoZSkge1xuICAgICAgaWYgKGUub3JpZ2luICE9PSB3aW5kb3cub3JpZ2luIHx8ICFlLmRhdGEudG9rZW4pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3NhdmVUb2tlbicsIHtcbiAgICAgICAgdG9rZW46IGUuZGF0YS50b2tlblxuICAgICAgfSlcblxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZScgfSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1dpbmRvd31cbiAqL1xuZnVuY3Rpb24gb3BlbldpbmRvdyAodXJsLCB0aXRsZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB1cmxcbiAgICB1cmwgPSAnJ1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgdXJsLCB0aXRsZSwgd2lkdGg6IDYwMCwgaGVpZ2h0OiA3MjAsIC4uLm9wdGlvbnMgfVxuXG4gIGNvbnN0IGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlbi5sZWZ0XG4gIGNvbnN0IGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogd2luZG93LnNjcmVlbi50b3BcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgd2luZG93LnNjcmVlbi53aWR0aFxuICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuc2NyZWVuLmhlaWdodFxuXG4gIG9wdGlvbnMubGVmdCA9ICgod2lkdGggLyAyKSAtIChvcHRpb25zLndpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnRcbiAgb3B0aW9ucy50b3AgPSAoKGhlaWdodCAvIDIpIC0gKG9wdGlvbnMuaGVpZ2h0IC8gMikpICsgZHVhbFNjcmVlblRvcFxuXG4gIGNvbnN0IG9wdGlvbnNTdHIgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjLnB1c2goYCR7a2V5fT0ke29wdGlvbnNba2V5XX1gKVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pLmpvaW4oJywnKVxuXG4gIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgdGl0bGUsIG9wdGlvbnNTdHIpXG5cbiAgaWYgKHdpbmRvdy5mb2N1cykge1xuICAgIG5ld1dpbmRvdy5mb2N1cygpXG4gIH1cblxuICByZXR1cm4gbmV3V2luZG93XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmdpdGh1YkF1dGhcbiAgICA/IF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYXJrIG1sLWF1dG9cIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dpbiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gIFwiICsgX3ZtLl9zKF92bS4kdChcImxvZ2luX3dpdGhcIikpICsgXCJcXG4gIFwiKSxcbiAgICAgICAgICBfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogW1wiZmFiXCIsIFwiZ2l0aHViXCJdIH0gfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtYTI5OTc1MmFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWEyOTk3NTJhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aEdpdGh1Yi52dWVcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImxvZ2luV3JhcHBlclwiIDpjbGFzcz1cInN0YXRlXCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wteHMtMTAgY29sLXhzLW9mZnNldC0xIGNvbC1sZy02IGNvbC1sZy1vZmZzZXQtMyBhbmltYXRlZCBmYWRlSW5Eb3duXCIgaWQ9XCJmb3JtXCI+XG4gICAgPGRpdiBpZD1cImZvcm0taW5mb1wiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgIDx0cmFuc2l0aW9uXG4gICAgICBtb2RlPVwib3V0LWluXCJcbiAgICAgIGVudGVyLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIHpvb21JblwiXG4gICAgICBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCB6b29tT3V0XCI+XG4gICAgICA8ZGl2IGtleT1cImxvZ2luXCIgdi1pZj1cInN0YXRlID09ICdfX3NpZ25pbmdpbidcIj5cbiAgICAgICAgPGgxPlNpZ24gSW48L2gxPlxuICAgICAgICA8cD5BbmQgbWVldCB0aGUgYXdlc29tZW5lc3MgaW5zaWRlITwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWxpbmtcIiBAY2xpY2sucHJldmVudD1cImdvVG9SZWdpc3RyYXRpb25cIiBocmVmPVwiI1wiPkRvbnQgaGF2ZSBhbiBhY2NvdW50PzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBrZXk9XCJyZWdpc3RlclwiIHYtaWY9XCJzdGF0ZSA9PSAnX19yZWdpc3RyYXRpb24nXCI+XG4gICAgICAgICAgPGgxPlNpZ24gVXA8L2gxPlxuICAgICAgICAgIDxwPkFuZCBtZWV0IHRoZSBhd2Vzb21lbmVzcyBpbnNpZGUhPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tbGlua1wiIEBjbGljay5wcmV2ZW50PVwiZ29Ub0xvZ2luXCIgaHJlZj1cIiNcIj5BbHJlYWR5IGdvdCBhbiBhY2NvdW50PzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90cmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJmb3JtLXNsaWRlclwiPlxuICAgIDx0cmFuc2l0aW9uXG4gICAgICBtb2RlPVwib3V0LWluXCJcbiAgICAgIGVudGVyLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVJblwiXG4gICAgICBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCBmYWRlT3V0XCI+XG4gICAgPGRpdiB2LWlmPVwic3RhdGUgPT0gJ19fc2lnbmluZ2luJ1wiIGNsYXNzPVwiYW5pbWF0ZSBmYWRlSW5cIiBrZXk9XCJsb2dpblwiIGlkPVwibG9naW4tZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vb3JpZzA1LmRldmlhbnRhcnQubmV0L2E4ZjkvZi8yMDExLzI4NC81LzYvbGlvbl9ieV9za2lsbHItZDRjaTIyMi5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGNlbnRlci1ibG9ja1wiIHdpZHRoPVwiODBcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc20gYnRuLXN1Y2Nlc3NcIj5TaWduIEluPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tc2VwYXJhdG9yXCI+b3I8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1wcmltYXJ5XCI+RmFjZWJvb2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1kYW5nZXJcIj5Hb29nbGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cInN0YXRlID09ICdfX3JlZ2lzdHJhdGlvbidcIiBjbGFzcz1cImFuaW1hdGUgZmFkZUluXCIga2V5PVwicmVnaXN0ZXJcIiBpZD1cInJlZ2lzdGVyLWZvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL29yaWcwNS5kZXZpYW50YXJ0Lm5ldC9hOGY5L2YvMjAxMS8yODQvNS82L2xpb25fYnlfc2tpbGxyLWQ0Y2kyMjIucG5nXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBjZW50ZXItYmxvY2tcIiB3aWR0aD1cIjYwXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCBjb25maXJtYXRpb25cIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tc3VjY2Vzc1wiPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1zZXBhcmF0b3JcIj5vcjwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc20gYnRuLXByaW1hcnlcIj5GYWNlYm9vazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc20gYnRuLWRhbmdlclwiPkdvb2dsZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IExvZ2luV2l0aEdpdGh1YiBmcm9tICd+L2NvbXBvbmVudHMvTG9naW5XaXRoR2l0aHViJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZGRsZXdhcmU6ICdndWVzdCcsXG5cbiAgY29tcG9uZW50czoge1xuICAgIExvZ2luV2l0aEdpdGh1YlxuICB9LFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnbG9naW4nKSB9XG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBzdGF0ZTogJ19fc2lnbmluZ2luJyxcbiAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9KSxcbiAgICByZW1lbWJlcjogZmFsc2VcbiAgfSksXG5cbiAgbWV0aG9kczoge1xuICAgIGdvVG9SZWdpc3RyYXRpb24gKCkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdfX3JlZ2lzdHJhdGlvbidcbiAgICB9LFxuICAgIGdvVG9Mb2dpbiAoKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ19fc2lnbmluZ2luJ1xuICAgIH0sXG4gICAgYXN5bmMgbG9naW4gKCkge1xuICAgICAgLy8gU3VibWl0IHRoZSBmb3JtLlxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9sb2dpbicpXG5cbiAgICAgIC8vIFNhdmUgdGhlIHRva2VuLlxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvc2F2ZVRva2VuJywge1xuICAgICAgICB0b2tlbjogZGF0YS50b2tlbixcbiAgICAgICAgcmVtZW1iZXI6IHRoaXMucmVtZW1iZXJcbiAgICAgIH0pXG5cbiAgICAgIC8vIEZldGNoIHRoZSB1c2VyLlxuICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvZmV0Y2hVc2VyJylcblxuICAgICAgLy8gUmVkaXJlY3QgaG9tZS5cbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAkYmdfdXJsOiAnaHR0cHM6Ly93YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL2Rhd25fbW9ybmluZ19zbm93X3N1cmZhY2VfbW91bnRhaW5zXzM4NDI0XzE5MjB4MTA4MC5qcGcnO1xuYm9keSwgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNjb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCgkYmdfdXJsKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsMjUsMjUsLjUpO1xuICB9XG4gIFxuICAmLl9fc2lnbmluZ2luICNmb3JtLXNsaWRlcixcbiAgJi5fX3JlZ2lzdHJhdGlvbiAjZm9ybS1pbmZvLFxuICB7XG4gICAgbGVmdDogNTAlO1xuICB9XG4gICYuX19yZWdpc3RyYXRpb24gI2Zvcm0tc2xpZGVyLFxuICAmLl9fc2lnbmluZ2luICNmb3JtLWluZm97XG4gICAgbGVmdDogMDtcbiAgfVxufVxuI2Zvcm0ge1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIHBhZGRpbmc6MDtcbiAgdG9wOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJGJnX3VybCkgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDJweCByZ2JhKDAsMCwwLC41KTtcbiAgYm9yZGVyOiBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICBcbiAgI2Zvcm0tc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDEuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcbiAgICBsZWZ0OiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDJweCByZ2JhKDAsMCwwLC4zKTtcbiAgfVxuICAjZm9ybS1pbmZvIHtcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBzYW5zLXNlcmlmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgXG4gICAgJiA+IGRpdiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cbiAgICBcbiAgICAuYnRuLWxpbmsge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gIH1cbn1cblxuLmJ0bi1zZXBhcmF0b3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGNvbG9yOiAjNzc3O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3MTNlMmI1ZVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02ZTZlM2Q2OFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keVtkYXRhLXYtNmU2ZTNkNjhdLCBodG1sW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jY29udGFpbmVyW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vd2FsbHBhcGVyc2NyYWZ0LmNvbS9pbWFnZS9kYXduX21vcm5pbmdfc25vd19zdXJmYWNlX21vdW50YWluc18zODQyNF8xOTIweDEwODAuanBnXFxcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4jY29udGFpbmVyW2RhdGEtdi02ZTZlM2Q2OF06YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC41KTtcXG59XFxuI2NvbnRhaW5lci5fX3NpZ25pbmdpbiAjZm9ybS1zbGlkZXJbZGF0YS12LTZlNmUzZDY4XSxcXG4gICNjb250YWluZXIuX19yZWdpc3RyYXRpb24gI2Zvcm0taW5mb1tkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gICAgbGVmdDogNTAlO1xcbn1cXG4jY29udGFpbmVyLl9fcmVnaXN0cmF0aW9uICNmb3JtLXNsaWRlcltkYXRhLXYtNmU2ZTNkNjhdLFxcbiAgI2NvbnRhaW5lci5fX3NpZ25pbmdpbiAjZm9ybS1pbmZvW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4jZm9ybVtkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL2Rhd25fbW9ybmluZ19zbm93X3N1cmZhY2VfbW91bnRhaW5zXzM4NDI0XzE5MjB4MTA4MC5qcGdcXFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBib3JkZXI6IHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4jZm9ybSAjZm9ybS1zbGlkZXJbZGF0YS12LTZlNmUzZDY4XSB7XFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDEuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAxLjNzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDQwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4jZm9ybSAjZm9ybS1pbmZvW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuI2Zvcm0gI2Zvcm0taW5mbyA+IGRpdltkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4jZm9ybSAjZm9ybS1pbmZvIC5idG4tbGlua1tkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5idG4tc2VwYXJhdG9yW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAycHggMDtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3NwYS9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGFBQWE7Q0FBRTtBQUVqQjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUlBQXFJO0VBQ3JJLHVCQUF1QjtDQUFFO0FBQ3pCO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLGtDQUFrQztDQUFFO0FBQ3RDOztJQUVFLFVBQVU7Q0FBRTtBQUNkOztJQUVFLFFBQVE7Q0FBRTtBQUVkO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFJQUFxSTtFQUNySSx1QkFBdUI7RUFDdkIsb0RBQTRDO1VBQTVDLDRDQUE0QztFQUM1Qyw2QkFBNkI7Q0FBRTtBQUMvQjtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7SUFDWCxvRUFBNEQ7SUFBNUQsNERBQTREO0lBQzVELFFBQVE7SUFDUixvREFBNEM7WUFBNUMsNENBQTRDO0NBQUU7QUFDaEQ7SUFDRSxtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7Q0FBRTtBQUNiO01BQ0UsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixRQUFRO01BQ1IsY0FBYztDQUFFO0FBQ2xCO01BQ0Usd0JBQXdCO01BQ3hCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsbUJBQW1CO0NBQUU7QUFFM0I7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7Q0FBRVwiLFwiZmlsZVwiOlwibG9naW4udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksIGh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL2Rhd25fbW9ybmluZ19zbm93X3N1cmZhY2VfbW91bnRhaW5zXzM4NDI0XzE5MjB4MTA4MC5qcGdcXFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG4gICNjb250YWluZXI6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDI1LCAyNSwgMC41KTsgfVxcbiAgI2NvbnRhaW5lci5fX3NpZ25pbmdpbiAjZm9ybS1zbGlkZXIsXFxuICAjY29udGFpbmVyLl9fcmVnaXN0cmF0aW9uICNmb3JtLWluZm8ge1xcbiAgICBsZWZ0OiA1MCU7IH1cXG4gICNjb250YWluZXIuX19yZWdpc3RyYXRpb24gI2Zvcm0tc2xpZGVyLFxcbiAgI2NvbnRhaW5lci5fX3NpZ25pbmdpbiAjZm9ybS1pbmZvIHtcXG4gICAgbGVmdDogMDsgfVxcblxcbiNmb3JtIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL2Rhd25fbW9ybmluZ19zbm93X3N1cmZhY2VfbW91bnRhaW5zXzM4NDI0XzE5MjB4MTA4MC5qcGdcXFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyOiBweCBzb2xpZCB0cmFuc3BhcmVudDsgfVxcbiAgI2Zvcm0gI2Zvcm0tc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDEuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxcbiAgI2Zvcm0gI2Zvcm0taW5mbyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIHNhbnMtc2VyaWY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogNTAlOyB9XFxuICAgICNmb3JtICNmb3JtLWluZm8gPiBkaXYge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHBhZGRpbmc6IDMwcHg7IH1cXG4gICAgI2Zvcm0gI2Zvcm0taW5mbyAuYnRuLWxpbmsge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcblxcbi5idG4tc2VwYXJhdG9yIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMnB4IDA7XFxuICBjb2xvcjogIzc3NzsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02ZTZlM2Q2OFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5zdGF0ZSwgYXR0cnM6IHsgaWQ6IFwibG9naW5XcmFwcGVyXCIgfSB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImNvbC14cy0xMCBjb2wteHMtb2Zmc2V0LTEgY29sLWxnLTYgY29sLWxnLW9mZnNldC0zIGFuaW1hdGVkIGZhZGVJbkRvd25cIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZm9ybVwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLCBhdHRyczogeyBpZDogXCJmb3JtLWluZm9cIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCIsXG4gICAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIHpvb21JblwiLFxuICAgICAgICAgICAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCB6b29tT3V0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uc3RhdGUgPT0gXCJfX3NpZ25pbmdpblwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBcImxvZ2luXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlNpZ24gSW5cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQW5kIG1lZXQgdGhlIGF3ZXNvbWVuZXNzIGluc2lkZSFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdvVG9SZWdpc3RyYXRpb24oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRvbnQgaGF2ZSBhbiBhY2NvdW50P1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5zdGF0ZSA9PSBcIl9fcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBrZXk6IFwicmVnaXN0ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiU2lnbiBVcFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJBbmQgbWVldCB0aGUgYXdlc29tZW5lc3MgaW5zaWRlIVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ29Ub0xvZ2luKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBbHJlYWR5IGdvdCBhbiBhY2NvdW50P1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBhdHRyczogeyBpZDogXCJmb3JtLXNsaWRlclwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIixcbiAgICAgICAgICAgICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwiYW5pbWF0ZWQgZmFkZUluXCIsXG4gICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIGZhZGVPdXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zdGF0ZSA9PSBcIl9fc2lnbmluZ2luXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW1hdGUgZmFkZUluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJsb2dpbi1mb3JtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLXJlc3BvbnNpdmUgY2VudGVyLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vb3JpZzA1LmRldmlhbnRhcnQubmV0L2E4ZjkvZi8yMDExLzI4NC81LzYvbGlvbl9ieV9za2lsbHItZDRjaTIyMi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjgwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFLW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tc3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNpZ24gSW5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuLXNlcGFyYXRvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJvclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRmFjZWJvb2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR29vZ2xlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5zdGF0ZSA9PSBcIl9fcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicmVnaXN0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW1hdGUgZmFkZUluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJyZWdpc3Rlci1mb3JtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLXJlc3BvbnNpdmUgY2VudGVyLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vb3JpZzA1LmRldmlhbnRhcnQubmV0L2E4ZjkvZi8yMDExLzI4NC81LzYvbGlvbl9ieV9za2lsbHItZDRjaTIyMi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRS1tYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmQgY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tc3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNpZ24gVXBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuLXNlcGFyYXRvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJvclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRmFjZWJvb2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4tZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR29vZ2xlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTZlNmUzZDY4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ZTZlM2Q2OFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=