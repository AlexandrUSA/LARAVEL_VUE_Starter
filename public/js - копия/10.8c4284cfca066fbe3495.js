webpackJsonp([10],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(175)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(177)
/* template */
var __vue_template__ = __webpack_require__(178)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56a6b8c0", Component.options)
  } else {
    hotAPI.reload("data-v-56a6b8c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("c5058984", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56a6b8c0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56a6b8c0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n#admin .application--wrap {\n  min-height: auto !important;\n}\nh2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n    color: #797979;\n}\n.application .application--wrap {\n    position: relative;\n    min-height: auto;\n}\n.card__title {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n}\n.input-group__details .input-group__error {\n    display: block;\n    -webkit-box-flex:0;\n        -ms-flex:none;\n            flex:none;\n}\n.buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n}\n.routerEnter {\n    -webkit-animation: routerEnter .6s;\n            animation: routerEnter .6s;\n}\n.routerLeave {\n    -webkit-animation: routerLeave .6s;\n            animation: routerLeave .6s;\n}\n.buttonEnter {\n    -webkit-animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n            animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n}\n.buttonLeave {\n    -webkit-animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n            animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n}\n@-webkit-keyframes routerEnter {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@keyframes routerEnter {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@keyframes routerLeave {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@keyframes buttonEnter {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n@keyframes buttonLeave {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n/*  * {\n    box-sizing: border-box;\n  }\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    background-color: #FAFAFA;\n  }\n\n  h2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n    color: #797979;\n  }\n\n  main.content {\n    padding: 0px 0px 32px 300px !important;\n  }\n  \n\n  .application .application--wrap {\n    position: relative;\n    min-height: auto;\n  }\n\n  .card__title {\n    justify-content: center;\n  }\n\n  .title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n  }\n\n  .input-group__details .input-group__error {\n    display: block;\n    flex:none;\n  }\n  \n  .buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n  }\n  .routerEnter {\n    animation: routerEnter .6s;\n  }\n\n  .routerLeave {\n    animation: routerLeave .6s;\n  }\n\n  .buttonEnter {\n    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n  }\n\n  .buttonLeave {\n    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n  }\n\n  @keyframes routerEnter {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n  }\n\n  @keyframes routerLeave {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n  }\n\n  @keyframes buttonEnter {\n    0% {transform: scale(0);}\n    100% {transform: scale(1);}\n  }\n\n  @keyframes buttonLeave {\n    0% {transform: scale(1);}\n    100% {transform: scale(0);}\n  }*/\n \n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/resources/assets/js/pages/admin/Dashboard.vue"],"names":[],"mappings":";AAgEA;EACA,4BAAA;CACA;AAEA;IACA,gBAAA;IACA,oBAAA;IACA,mBAAA;IACA,eAAA;CACA;AAEA;IACA,mBAAA;IACA,iBAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,gBAAA;IACA,eAAA;CACA;AAEA;IACA,eAAA;IACA,mBAAA;QAAA,cAAA;YAAA,UAAA;CACA;AAEA;IACA,YAAA;IACA,aAAA;IACA,iBAAA;IACA,mBAAA;CACA;AACA;IACA,mCAAA;YAAA,2BAAA;CACA;AAEA;IACA,mCAAA;YAAA,2BAAA;CACA;AAEA;IACA,iEAAA;YAAA,yDAAA;CACA;AAEA;IACA,qEAAA;YAAA,6DAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAiFA","file":"Dashboard.vue","sourcesContent":["<template>\n  <div id=\"admin\">\n    <!-- Боковая панель навгации -->\n    <v-navigation-drawer\n      persistent\n      :mini-variant=\"miniVariant\"\n      :clipped=\"clipped\"\n      v-model=\"drawer\"\n      enable-resize-watcher\n      fixed\n      app\n    >\n    <v-list dense>\n        <v-list-tile to=\"/\">\n          <v-list-tile-action>\n            <v-icon>home</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>Главная</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n        <v-list-tile :to=\"{name: 'employees'}\">\n          <v-list-tile-action>\n            <v-icon>contact_mail</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>Сотрудники</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </v-list>\n    </v-navigation-drawer>\n    <!-- Основной контент -->\n    <v-content> \n      <transition  enter-active-class=\"routerEnter\" leave-active-class=\"routerLeave\" mode=\"out-in\">\n        <router-view/>\n      </transition>\n    </v-content> \n    <!-- Футер -->\n    <v-footer :fixed=\"fixed\" app>\n      <v-toolbar-side-icon @click.stop=\"drawer = !drawer\"></v-toolbar-side-icon>\n    </v-footer>\n    </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      clipped: false,\n      drawer: true,\n      fixed: true,\n      items: [{\n        icon: 'bubble_chart',\n        title: 'Главная'\n      }],\n      miniVariant: false\n    }\n  },\n  name: 'App'\n}\n</script>\n\n\n<style>\n\n#admin .application--wrap {\n  min-height: auto !important;\n}\n\n  h2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n    color: #797979;\n  }\n\n  .application .application--wrap {\n    position: relative;\n    min-height: auto;\n  }\n\n  .card__title {\n    justify-content: center;\n  }\n\n  .title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n  }\n\n  .input-group__details .input-group__error {\n    display: block;\n    flex:none;\n  }\n  \n  .buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n  }\n  .routerEnter {\n    animation: routerEnter .6s;\n  }\n\n  .routerLeave {\n    animation: routerLeave .6s;\n  }\n\n  .buttonEnter {\n    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n  }\n\n  .buttonLeave {\n    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n  }\n\n  @keyframes routerEnter {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n  }\n\n  @keyframes routerLeave {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n  }\n\n  @keyframes buttonEnter {\n    0% {transform: scale(0);}\n    100% {transform: scale(1);}\n  }\n\n  @keyframes buttonLeave {\n    0% {transform: scale(1);}\n    100% {transform: scale(0);}\n  }\n/*  * {\n    box-sizing: border-box;\n  }\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    background-color: #FAFAFA;\n  }\n\n  h2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n    color: #797979;\n  }\n\n  main.content {\n    padding: 0px 0px 32px 300px !important;\n  }\n  \n\n  .application .application--wrap {\n    position: relative;\n    min-height: auto;\n  }\n\n  .card__title {\n    justify-content: center;\n  }\n\n  .title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n  }\n\n  .input-group__details .input-group__error {\n    display: block;\n    flex:none;\n  }\n  \n  .buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n  }\n  .routerEnter {\n    animation: routerEnter .6s;\n  }\n\n  .routerLeave {\n    animation: routerLeave .6s;\n  }\n\n  .buttonEnter {\n    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n  }\n\n  .buttonLeave {\n    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n  }\n\n  @keyframes routerEnter {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n  }\n\n  @keyframes routerLeave {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n  }\n\n  @keyframes buttonEnter {\n    0% {transform: scale(0);}\n    100% {transform: scale(1);}\n  }\n\n  @keyframes buttonLeave {\n    0% {transform: scale(1);}\n    100% {transform: scale(0);}\n  }*/\n \n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Главная'
      }],
      miniVariant: false
    };
  },

  name: 'App'
});

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "admin" } },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            persistent: "",
            "mini-variant": _vm.miniVariant,
            clipped: _vm.clipped,
            "enable-resize-watcher": "",
            fixed: "",
            app: ""
          },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-tile",
                { attrs: { to: "/" } },
                [
                  _c("v-list-tile-action", [_c("v-icon", [_vm._v("home")])], 1),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Главная")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                { attrs: { to: { name: "employees" } } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("contact_mail")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Сотрудники")])],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "transition",
            {
              attrs: {
                "enter-active-class": "routerEnter",
                "leave-active-class": "routerLeave",
                mode: "out-in"
              }
            },
            [_c("router-view")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { attrs: { fixed: _vm.fixed, app: "" } },
        [
          _c("v-toolbar-side-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          })
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-56a6b8c0", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlPzVmMWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlPzU5ZWYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWU/NGUxOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzTTtBQUN0TTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHFDQUF5TztBQUN6TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtGQUFrRjtBQUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHNEQUF1RCxnQ0FBZ0MsR0FBRyxNQUFNLHNCQUFzQiwwQkFBMEIseUJBQXlCLHFCQUFxQixHQUFHLG1DQUFtQyx5QkFBeUIsdUJBQXVCLEdBQUcsZ0JBQWdCLCtCQUErQixnQ0FBZ0Msc0NBQXNDLEdBQUcsZ0JBQWdCLHNCQUFzQixxQkFBcUIsR0FBRyw2Q0FBNkMscUJBQXFCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLEdBQUcsWUFBWSxrQkFBa0IsbUJBQW1CLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0IseUNBQXlDLHlDQUF5QyxHQUFHLGdCQUFnQix5Q0FBeUMseUNBQXlDLEdBQUcsZ0JBQWdCLHVFQUF1RSx1RUFBdUUsR0FBRyxnQkFBZ0IsMkVBQTJFLDJFQUEyRSxHQUFHLGtDQUFrQyxNQUFNLFdBQVcsR0FBRyxRQUFRLFdBQVcsR0FBRyxHQUFHLDBCQUEwQixNQUFNLFdBQVcsR0FBRyxRQUFRLFdBQVcsR0FBRyxHQUFHLGtDQUFrQyxNQUFNLFdBQVcsR0FBRyxRQUFRLFdBQVcsR0FBRyxHQUFHLDBCQUEwQixNQUFNLFdBQVcsR0FBRyxRQUFRLFdBQVcsR0FBRyxHQUFHLGtDQUFrQyxNQUFNLDRCQUE0QixvQkFBb0IsR0FBRyxRQUFRLDRCQUE0QixvQkFBb0IsR0FBRyxHQUFHLDBCQUEwQixNQUFNLDRCQUE0QixvQkFBb0IsR0FBRyxRQUFRLDRCQUE0QixvQkFBb0IsR0FBRyxHQUFHLGtDQUFrQyxNQUFNLDRCQUE0QixvQkFBb0IsR0FBRyxRQUFRLDRCQUE0QixvQkFBb0IsR0FBRyxHQUFHLDBCQUEwQixNQUFNLDRCQUE0QixvQkFBb0IsR0FBRyxRQUFRLDRCQUE0QixvQkFBb0IsR0FBRyxHQUFHLFNBQVMsNkJBQTZCLEtBQUssbUJBQW1CLGtCQUFrQixtQkFBbUIsZ0NBQWdDLEtBQUssVUFBVSxzQkFBc0IsMEJBQTBCLHlCQUF5QixxQkFBcUIsS0FBSyxvQkFBb0IsNkNBQTZDLEtBQUssMkNBQTJDLHlCQUF5Qix1QkFBdUIsS0FBSyxvQkFBb0IsOEJBQThCLEtBQUssb0JBQW9CLHNCQUFzQixxQkFBcUIsS0FBSyxpREFBaUQscUJBQXFCLGdCQUFnQixLQUFLLGtCQUFrQixrQkFBa0IsbUJBQW1CLHVCQUF1Qix5QkFBeUIsS0FBSyxrQkFBa0IsaUNBQWlDLEtBQUssb0JBQW9CLGlDQUFpQyxLQUFLLG9CQUFvQiwrREFBK0QsS0FBSyxvQkFBb0IsbUVBQW1FLEtBQUssOEJBQThCLFVBQVUsWUFBWSxZQUFZLFlBQVksS0FBSyw4QkFBOEIsVUFBVSxZQUFZLFlBQVksWUFBWSxLQUFLLDhCQUE4QixVQUFVLHFCQUFxQixZQUFZLHFCQUFxQixLQUFLLDhCQUE4QixVQUFVLHFCQUFxQixZQUFZLHFCQUFxQixLQUFLLGVBQWUsdUpBQXVKLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLGVBQWUsS0FBSyxlQUFlLEtBQUssS0FBSyxLQUFLLGVBQWUsS0FBSyxlQUFlLEtBQUssS0FBSyxLQUFLLGVBQWUsS0FBSyxlQUFlLEtBQUssS0FBSyxLQUFLLGVBQWUsS0FBSyxlQUFlLEtBQUssS0FBSyxLQUFLLHNCQUFzQixLQUFLLHNCQUFzQixLQUFLLEtBQUssS0FBSyxzQkFBc0IsS0FBSyxzQkFBc0IsS0FBSyxLQUFLLEtBQUssc0JBQXNCLEtBQUssc0JBQXNCLEtBQUssS0FBSyxLQUFLLHNCQUFzQixLQUFLLHNCQUFzQixLQUFLLEtBQUsscUZBQXFGLHVvQkFBdW9CLGtCQUFrQix1dUJBQXV1QixhQUFhLGNBQWMsaUZBQWlGLGtFQUFrRSxtQ0FBbUMsS0FBSyxtQkFBbUIsdURBQXVELGdDQUFnQyxHQUFHLFVBQVUsc0JBQXNCLDBCQUEwQix5QkFBeUIscUJBQXFCLEtBQUssdUNBQXVDLHlCQUF5Qix1QkFBdUIsS0FBSyxvQkFBb0IsOEJBQThCLEtBQUssb0JBQW9CLHNCQUFzQixxQkFBcUIsS0FBSyxpREFBaUQscUJBQXFCLGdCQUFnQixLQUFLLGtCQUFrQixrQkFBa0IsbUJBQW1CLHVCQUF1Qix5QkFBeUIsS0FBSyxrQkFBa0IsaUNBQWlDLEtBQUssb0JBQW9CLGlDQUFpQyxLQUFLLG9CQUFvQiwrREFBK0QsS0FBSyxvQkFBb0IsbUVBQW1FLEtBQUssOEJBQThCLFVBQVUsWUFBWSxZQUFZLFlBQVksS0FBSyw4QkFBOEIsVUFBVSxZQUFZLFlBQVksWUFBWSxLQUFLLDhCQUE4QixVQUFVLHFCQUFxQixZQUFZLHFCQUFxQixLQUFLLDhCQUE4QixVQUFVLHFCQUFxQixZQUFZLHFCQUFxQixLQUFLLFNBQVMsNkJBQTZCLEtBQUssbUJBQW1CLGtCQUFrQixtQkFBbUIsZ0NBQWdDLEtBQUssVUFBVSxzQkFBc0IsMEJBQTBCLHlCQUF5QixxQkFBcUIsS0FBSyxvQkFBb0IsNkNBQTZDLEtBQUssMkNBQTJDLHlCQUF5Qix1QkFBdUIsS0FBSyxvQkFBb0IsOEJBQThCLEtBQUssb0JBQW9CLHNCQUFzQixxQkFBcUIsS0FBSyxpREFBaUQscUJBQXFCLGdCQUFnQixLQUFLLGtCQUFrQixrQkFBa0IsbUJBQW1CLHVCQUF1Qix5QkFBeUIsS0FBSyxrQkFBa0IsaUNBQWlDLEtBQUssb0JBQW9CLGlDQUFpQyxLQUFLLG9CQUFvQiwrREFBK0QsS0FBSyxvQkFBb0IsbUVBQW1FLEtBQUssOEJBQThCLFVBQVUsWUFBWSxZQUFZLFlBQVksS0FBSyw4QkFBOEIsVUFBVSxZQUFZLFlBQVksWUFBWSxLQUFLLDhCQUE4QixVQUFVLHFCQUFxQixZQUFZLHFCQUFxQixLQUFLLDhCQUE4QixVQUFVLHFCQUFxQixZQUFZLHFCQUFxQixLQUFLLGtDQUFrQzs7QUFFdHdSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUNBO3dCQUVBOztlQUVBO2NBQ0E7YUFDQTs7Y0FFQTtlQUVBO0FBSEE7bUJBS0E7QUFUQTtBQVVBOztRQUNBO0FBYkEsRzs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsY0FBYyxFQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsWUFBWSxFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLFVBQVUsRUFBRTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsTUFBTSxvQkFBb0IsRUFBRSxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsNEJBQTRCLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTAuOGM0Mjg0Y2ZjYTA2NmZiZTM0OTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTZhNmI4YzBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXERhc2hib2FyZC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTZhNmI4YzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01NmE2YjhjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01NmE2YjhjMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJjNTA1ODk4NFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01NmE2YjhjMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNTZhNmI4YzBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI2FkbWluIC5hcHBsaWNhdGlvbi0td3JhcCB7XFxuICBtaW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcbn1cXG4uYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLS13cmFwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbn1cXG4uY2FyZF9fdGl0bGUge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50aXRsZV9faWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcbi5pbnB1dC1ncm91cF9fZGV0YWlscyAuaW5wdXQtZ3JvdXBfX2Vycm9yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6MDtcXG4gICAgICAgIC1tcy1mbGV4Om5vbmU7XFxuICAgICAgICAgICAgZmxleDpub25lO1xcbn1cXG4uYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJvdXRlckVudGVyIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdXRlckVudGVyIC42cztcXG4gICAgICAgICAgICBhbmltYXRpb246IHJvdXRlckVudGVyIC42cztcXG59XFxuLnJvdXRlckxlYXZlIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdXRlckxlYXZlIC42cztcXG4gICAgICAgICAgICBhbmltYXRpb246IHJvdXRlckxlYXZlIC42cztcXG59XFxuLmJ1dHRvbkVudGVyIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG4gICAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG59XFxuLmJ1dHRvbkxlYXZlIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcbjAlIHtvcGFjaXR5OiAwO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAxO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XFxuMCUge29wYWNpdHk6IDA7XFxufVxcbjEwMCUge29wYWNpdHk6IDE7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyTGVhdmUge1xcbjAlIHtvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XFxuMCUge29wYWNpdHk6IDE7XFxufVxcbjEwMCUge29wYWNpdHk6IDA7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcbi8qICAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gIGh0bWwsXFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXG4gIH1cXG5cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcbiAgfVxcblxcbiAgbWFpbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMHB4IDBweCAzMnB4IDMwMHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICBcXG5cXG4gIC5hcHBsaWNhdGlvbiAuYXBwbGljYXRpb24tLXdyYXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAuY2FyZF9fdGl0bGUge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC50aXRsZV9faWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxuICB9XFxuXFxuICAuaW5wdXQtZ3JvdXBfX2RldGFpbHMgLmlucHV0LWdyb3VwX19lcnJvciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbGV4Om5vbmU7XFxuICB9XFxuICBcXG4gIC5idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLnJvdXRlckVudGVyIHtcXG4gICAgYW5pbWF0aW9uOiByb3V0ZXJFbnRlciAuNnM7XFxuICB9XFxuXFxuICAucm91dGVyTGVhdmUge1xcbiAgICBhbmltYXRpb246IHJvdXRlckxlYXZlIC42cztcXG4gIH1cXG5cXG4gIC5idXR0b25FbnRlciB7XFxuICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXIgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xcbiAgfVxcblxcbiAgLmJ1dHRvbkxlYXZlIHtcXG4gICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XFxuICAgIDAlIHtvcGFjaXR5OiAwO31cXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXG4gICAgMCUge29wYWNpdHk6IDE7fVxcbiAgICAxMDAlIHtvcGFjaXR5OiAwO31cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XFxuICB9Ki9cXG4gXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdFQTtFQUNBLDRCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtDQUNBO0FBRUE7SUFDQSx5QkFBQTtRQUFBLHNCQUFBO1lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0NBQ0E7QUFFQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtRQUFBLGNBQUE7WUFBQSxVQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtDQUNBO0FBQ0E7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0NBQ0E7QUFFQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7Q0FDQTtBQUVBO0lBQ0EsaUVBQUE7WUFBQSx5REFBQTtDQUNBO0FBRUE7SUFDQSxxRUFBQTtZQUFBLDZEQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUZBXCIsXCJmaWxlXCI6XCJEYXNoYm9hcmQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgaWQ9XFxcImFkbWluXFxcIj5cXG4gICAgPCEtLSDQkdC+0LrQvtCy0LDRjyDQv9Cw0L3QtdC70Ywg0L3QsNCy0LPQsNGG0LjQuCAtLT5cXG4gICAgPHYtbmF2aWdhdGlvbi1kcmF3ZXJcXG4gICAgICBwZXJzaXN0ZW50XFxuICAgICAgOm1pbmktdmFyaWFudD1cXFwibWluaVZhcmlhbnRcXFwiXFxuICAgICAgOmNsaXBwZWQ9XFxcImNsaXBwZWRcXFwiXFxuICAgICAgdi1tb2RlbD1cXFwiZHJhd2VyXFxcIlxcbiAgICAgIGVuYWJsZS1yZXNpemUtd2F0Y2hlclxcbiAgICAgIGZpeGVkXFxuICAgICAgYXBwXFxuICAgID5cXG4gICAgPHYtbGlzdCBkZW5zZT5cXG4gICAgICAgIDx2LWxpc3QtdGlsZSB0bz1cXFwiL1xcXCI+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgICAgPHYtaWNvbj5ob21lPC92LWljb24+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+0JPQu9Cw0LLQvdCw0Y88L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICAgICAgPHYtbGlzdC10aWxlIDp0bz1cXFwie25hbWU6ICdlbXBsb3llZXMnfVxcXCI+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgICAgPHYtaWNvbj5jb250YWN0X21haWw8L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT7QodC+0YLRgNGD0LTQvdC40LrQuDwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgICAgPC92LWxpc3Q+XFxuICAgIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj5cXG4gICAgPCEtLSDQntGB0L3QvtCy0L3QvtC5INC60L7QvdGC0LXQvdGCIC0tPlxcbiAgICA8di1jb250ZW50PiBcXG4gICAgICA8dHJhbnNpdGlvbiAgZW50ZXItYWN0aXZlLWNsYXNzPVxcXCJyb3V0ZXJFbnRlclxcXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVxcXCJyb3V0ZXJMZWF2ZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXG4gICAgICAgIDxyb3V0ZXItdmlldy8+XFxuICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICA8L3YtY29udGVudD4gXFxuICAgIDwhLS0g0KTRg9GC0LXRgCAtLT5cXG4gICAgPHYtZm9vdGVyIDpmaXhlZD1cXFwiZml4ZWRcXFwiIGFwcD5cXG4gICAgICA8di10b29sYmFyLXNpZGUtaWNvbiBAY2xpY2suc3RvcD1cXFwiZHJhd2VyID0gIWRyYXdlclxcXCI+PC92LXRvb2xiYXItc2lkZS1pY29uPlxcbiAgICA8L3YtZm9vdGVyPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgY2xpcHBlZDogZmFsc2UsXFxuICAgICAgZHJhd2VyOiB0cnVlLFxcbiAgICAgIGZpeGVkOiB0cnVlLFxcbiAgICAgIGl0ZW1zOiBbe1xcbiAgICAgICAgaWNvbjogJ2J1YmJsZV9jaGFydCcsXFxuICAgICAgICB0aXRsZTogJ9CT0LvQsNCy0L3QsNGPJ1xcbiAgICAgIH1dLFxcbiAgICAgIG1pbmlWYXJpYW50OiBmYWxzZVxcbiAgICB9XFxuICB9LFxcbiAgbmFtZTogJ0FwcCdcXG59XFxuPC9zY3JpcHQ+XFxuXFxuXFxuPHN0eWxlPlxcblxcbiNhZG1pbiAuYXBwbGljYXRpb24tLXdyYXAge1xcbiAgbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcbiAgfVxcblxcbiAgLmFwcGxpY2F0aW9uIC5hcHBsaWNhdGlvbi0td3JhcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5jYXJkX190aXRsZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRpdGxlX19pY29uIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5pbnB1dC1ncm91cF9fZGV0YWlscyAuaW5wdXQtZ3JvdXBfX2Vycm9yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsZXg6bm9uZTtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAucm91dGVyRW50ZXIge1xcbiAgICBhbmltYXRpb246IHJvdXRlckVudGVyIC42cztcXG4gIH1cXG5cXG4gIC5yb3V0ZXJMZWF2ZSB7XFxuICAgIGFuaW1hdGlvbjogcm91dGVyTGVhdmUgLjZzO1xcbiAgfVxcblxcbiAgLmJ1dHRvbkVudGVyIHtcXG4gICAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxuICB9XFxuXFxuICAuYnV0dG9uTGVhdmUge1xcbiAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xcbiAgICAwJSB7b3BhY2l0eTogMTt9XFxuICAgIDEwMCUge29wYWNpdHk6IDA7fVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBidXR0b25FbnRlciB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cXG4gIH1cXG4vKiAgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzc5Nzk3OTtcXG4gIH1cXG5cXG4gIG1haW4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggMzJweCAzMDBweCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgXFxuXFxuICAuYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLS13cmFwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLmNhcmRfX3RpdGxlIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAudGl0bGVfX2ljb24ge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgfVxcblxcbiAgLmlucHV0LWdyb3VwX19kZXRhaWxzIC5pbnB1dC1ncm91cF9fZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxleDpub25lO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5yb3V0ZXJFbnRlciB7XFxuICAgIGFuaW1hdGlvbjogcm91dGVyRW50ZXIgLjZzO1xcbiAgfVxcblxcbiAgLnJvdXRlckxlYXZlIHtcXG4gICAgYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XFxuICB9XFxuXFxuICAuYnV0dG9uRW50ZXIge1xcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG4gIH1cXG5cXG4gIC5idXR0b25MZWF2ZSB7XFxuICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcbiAgfSovXFxuIFxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTU2YTZiOGMwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYWRtaW5cIj5cbiAgICA8IS0tINCR0L7QutC+0LLQsNGPINC/0LDQvdC10LvRjCDQvdCw0LLQs9Cw0YbQuNC4IC0tPlxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyXG4gICAgICBwZXJzaXN0ZW50XG4gICAgICA6bWluaS12YXJpYW50PVwibWluaVZhcmlhbnRcIlxuICAgICAgOmNsaXBwZWQ9XCJjbGlwcGVkXCJcbiAgICAgIHYtbW9kZWw9XCJkcmF3ZXJcIlxuICAgICAgZW5hYmxlLXJlc2l6ZS13YXRjaGVyXG4gICAgICBmaXhlZFxuICAgICAgYXBwXG4gICAgPlxuICAgIDx2LWxpc3QgZGVuc2U+XG4gICAgICAgIDx2LWxpc3QtdGlsZSB0bz1cIi9cIj5cbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgICAgPHYtaWNvbj5ob21lPC92LWljb24+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+0JPQu9Cw0LLQvdCw0Y88L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgICAgPHYtbGlzdC10aWxlIDp0bz1cIntuYW1lOiAnZW1wbG95ZWVzJ31cIj5cbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgICAgPHYtaWNvbj5jb250YWN0X21haWw8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT7QodC+0YLRgNGD0LTQvdC40LrQuDwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgPC92LWxpc3Q+XG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPlxuICAgIDwhLS0g0J7RgdC90L7QstC90L7QuSDQutC+0L3RgtC10L3RgiAtLT5cbiAgICA8di1jb250ZW50PiBcbiAgICAgIDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XCJyb3V0ZXJFbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cInJvdXRlckxlYXZlXCIgbW9kZT1cIm91dC1pblwiPlxuICAgICAgICA8cm91dGVyLXZpZXcvPlxuICAgICAgPC90cmFuc2l0aW9uPlxuICAgIDwvdi1jb250ZW50PiBcbiAgICA8IS0tINCk0YPRgtC10YAgLS0+XG4gICAgPHYtZm9vdGVyIDpmaXhlZD1cImZpeGVkXCIgYXBwPlxuICAgICAgPHYtdG9vbGJhci1zaWRlLWljb24gQGNsaWNrLnN0b3A9XCJkcmF3ZXIgPSAhZHJhd2VyXCI+PC92LXRvb2xiYXItc2lkZS1pY29uPlxuICAgIDwvdi1mb290ZXI+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xpcHBlZDogZmFsc2UsXG4gICAgICBkcmF3ZXI6IHRydWUsXG4gICAgICBmaXhlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBpY29uOiAnYnViYmxlX2NoYXJ0JyxcbiAgICAgICAgdGl0bGU6ICfQk9C70LDQstC90LDRjydcbiAgICAgIH1dLFxuICAgICAgbWluaVZhcmlhbnQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBuYW1lOiAnQXBwJ1xufVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlPlxuXG4jYWRtaW4gLmFwcGxpY2F0aW9uLS13cmFwIHtcbiAgbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3OTc5Nzk7XG4gIH1cblxuICAuYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLS13cmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5jYXJkX190aXRsZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAudGl0bGVfX2ljb24ge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuXG4gIC5pbnB1dC1ncm91cF9fZGV0YWlscyAuaW5wdXQtZ3JvdXBfX2Vycm9yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbGV4Om5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnJvdXRlckVudGVyIHtcbiAgICBhbmltYXRpb246IHJvdXRlckVudGVyIC42cztcbiAgfVxuXG4gIC5yb3V0ZXJMZWF2ZSB7XG4gICAgYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XG4gIH1cblxuICAuYnV0dG9uRW50ZXIge1xuICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXIgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xuICB9XG5cbiAgLmJ1dHRvbkxlYXZlIHtcbiAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcbiAgICAwJSB7b3BhY2l0eTogMDt9XG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcbiAgICAwJSB7b3BhY2l0eTogMTt9XG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XG4gIH1cbi8qICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzc5Nzk3OTtcbiAgfVxuXG4gIG1haW4uY29udGVudCB7XG4gICAgcGFkZGluZzogMHB4IDBweCAzMnB4IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG5cbiAgLmFwcGxpY2F0aW9uIC5hcHBsaWNhdGlvbi0td3JhcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuY2FyZF9fdGl0bGUge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnRpdGxlX19pY29uIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cblxuICAuaW5wdXQtZ3JvdXBfX2RldGFpbHMgLmlucHV0LWdyb3VwX19lcnJvciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleDpub25lO1xuICB9XG4gIFxuICAuYnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5yb3V0ZXJFbnRlciB7XG4gICAgYW5pbWF0aW9uOiByb3V0ZXJFbnRlciAuNnM7XG4gIH1cblxuICAucm91dGVyTGVhdmUge1xuICAgIGFuaW1hdGlvbjogcm91dGVyTGVhdmUgLjZzO1xuICB9XG5cbiAgLmJ1dHRvbkVudGVyIHtcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcbiAgfVxuXG4gIC5idXR0b25MZWF2ZSB7XG4gICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xuICB9XG5cbiAgQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XG4gICAgMCUge29wYWNpdHk6IDA7fVxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxuICB9XG5cbiAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XG4gICAgMCUge29wYWNpdHk6IDE7fVxuICAgIDEwMCUge29wYWNpdHk6IDA7fVxuICB9XG5cbiAgQGtleWZyYW1lcyBidXR0b25FbnRlciB7XG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxuICB9XG5cbiAgQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxuICB9Ki9cbiBcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImFkbWluXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBwZXJzaXN0ZW50OiBcIlwiLFxuICAgICAgICAgICAgXCJtaW5pLXZhcmlhbnRcIjogX3ZtLm1pbmlWYXJpYW50LFxuICAgICAgICAgICAgY2xpcHBlZDogX3ZtLmNsaXBwZWQsXG4gICAgICAgICAgICBcImVuYWJsZS1yZXNpemUtd2F0Y2hlclwiOiBcIlwiLFxuICAgICAgICAgICAgZml4ZWQ6IFwiXCIsXG4gICAgICAgICAgICBhcHA6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRyYXdlcixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRyYXdlciA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZHJhd2VyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGRlbnNlOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiL1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLWFjdGlvblwiLCBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImhvbWVcIildKV0sIDEpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW192bS5fdihcItCT0LvQsNCy0L3QsNGPXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiZW1wbG95ZWVzXCIgfSB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiY29udGFjdF9tYWlsXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW192bS5fdihcItCh0L7RgtGA0YPQtNC90LjQutC4XCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGVudFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcInJvdXRlckVudGVyXCIsXG4gICAgICAgICAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJyb3V0ZXJMZWF2ZVwiLFxuICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInJvdXRlci12aWV3XCIpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1mb290ZXJcIixcbiAgICAgICAgeyBhdHRyczogeyBmaXhlZDogX3ZtLmZpeGVkLCBhcHA6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LXRvb2xiYXItc2lkZS1pY29uXCIsIHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICBfdm0uZHJhd2VyID0gIV92bS5kcmF3ZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01NmE2YjhjMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTZhNmI4YzBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIl0sInNvdXJjZVJvb3QiOiIifQ==