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
exports.push([module.i, "\n#admin .application--wrap {\n  min-height: auto !important;\n}\nh2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n}\n.application .application--wrap {\n    position: relative;\n    min-height: auto;\n}\n.card__title {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n}\n.input-group__details .input-group__error {\n    display: block;\n    -webkit-box-flex:0;\n        -ms-flex:none;\n            flex:none;\n}\n.buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n}\n.routerEnter {\n    -webkit-animation: routerEnter .6s;\n            animation: routerEnter .6s;\n}\n.routerLeave {\n    -webkit-animation: routerLeave .6s;\n            animation: routerLeave .6s;\n}\n.buttonEnter {\n    -webkit-animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n            animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n}\n.buttonLeave {\n    -webkit-animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n            animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n}\n@-webkit-keyframes routerEnter {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@keyframes routerEnter {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@keyframes routerLeave {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@keyframes buttonEnter {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n@keyframes buttonLeave {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n/*  * {\n    box-sizing: border-box;\n  }\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    background-color: #FAFAFA;\n  }\n\n  h2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n    color: #797979;\n  }\n\n  main.content {\n    padding: 0px 0px 32px 300px !important;\n  }\n  \n\n  .application .application--wrap {\n    position: relative;\n    min-height: auto;\n  }\n\n  .card__title {\n    justify-content: center;\n  }\n\n  .title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n  }\n\n  .input-group__details .input-group__error {\n    display: block;\n    flex:none;\n  }\n  \n  .buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n  }\n  .routerEnter {\n    animation: routerEnter .6s;\n  }\n\n  .routerLeave {\n    animation: routerLeave .6s;\n  }\n\n  .buttonEnter {\n    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n  }\n\n  .buttonLeave {\n    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n  }\n\n  @keyframes routerEnter {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n  }\n\n  @keyframes routerLeave {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n  }\n\n  @keyframes buttonEnter {\n    0% {transform: scale(0);}\n    100% {transform: scale(1);}\n  }\n\n  @keyframes buttonLeave {\n    0% {transform: scale(1);}\n    100% {transform: scale(0);}\n  }*/\n \n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/resources/assets/js/pages/admin/Dashboard.vue"],"names":[],"mappings":";AAgEA;EACA,4BAAA;CACA;AAEA;IACA,gBAAA;IACA,oBAAA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,iBAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,gBAAA;IACA,eAAA;CACA;AAEA;IACA,eAAA;IACA,mBAAA;QAAA,cAAA;YAAA,UAAA;CACA;AAEA;IACA,YAAA;IACA,aAAA;IACA,iBAAA;IACA,mBAAA;CACA;AACA;IACA,mCAAA;YAAA,2BAAA;CACA;AAEA;IACA,mCAAA;YAAA,2BAAA;CACA;AAEA;IACA,iEAAA;YAAA,yDAAA;CACA;AAEA;IACA,qEAAA;YAAA,6DAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAiFA","file":"Dashboard.vue","sourcesContent":["<template>\n  <div id=\"admin\">\n    <!-- Боковая панель навгации -->\n    <v-navigation-drawer\n      persistent\n      :mini-variant=\"miniVariant\"\n      :clipped=\"clipped\"\n      v-model=\"drawer\"\n      enable-resize-watcher\n      fixed\n      app\n    >\n    <v-list dense>\n        <v-list-tile to=\"/\">\n          <v-list-tile-action>\n            <v-icon>home</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>Главная</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n        <v-list-tile :to=\"{name: 'employees'}\">\n          <v-list-tile-action>\n            <v-icon>contact_mail</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>Сотрудники</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </v-list>\n    </v-navigation-drawer>\n    <!-- Основной контент -->\n    <v-content> \n      <transition  enter-active-class=\"routerEnter\" leave-active-class=\"routerLeave\" mode=\"out-in\">\n        <router-view></router-view>\n      </transition>\n    </v-content> \n    <!-- Футер -->\n    <v-footer :fixed=\"fixed\" app>\n      <v-toolbar-side-icon @click.stop=\"drawer = !drawer\"></v-toolbar-side-icon>\n    </v-footer>\n    </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      clipped: false,\n      drawer: true,\n      fixed: true,\n      items: [{\n        icon: 'bubble_chart',\n        title: 'Главная'\n      }],\n      miniVariant: false\n    }\n  },\n  name: 'App'\n}\n</script>\n\n\n<style>\n\n#admin .application--wrap {\n  min-height: auto !important;\n}\n\n  h2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n  }\n\n  .application .application--wrap {\n    position: relative;\n    min-height: auto;\n  }\n\n  .card__title {\n    justify-content: center;\n  }\n\n  .title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n  }\n\n  .input-group__details .input-group__error {\n    display: block;\n    flex:none;\n  }\n  \n  .buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n  }\n  .routerEnter {\n    animation: routerEnter .6s;\n  }\n\n  .routerLeave {\n    animation: routerLeave .6s;\n  }\n\n  .buttonEnter {\n    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n  }\n\n  .buttonLeave {\n    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n  }\n\n  @keyframes routerEnter {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n  }\n\n  @keyframes routerLeave {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n  }\n\n  @keyframes buttonEnter {\n    0% {transform: scale(0);}\n    100% {transform: scale(1);}\n  }\n\n  @keyframes buttonLeave {\n    0% {transform: scale(1);}\n    100% {transform: scale(0);}\n  }\n/*  * {\n    box-sizing: border-box;\n  }\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    background-color: #FAFAFA;\n  }\n\n  h2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n    color: #797979;\n  }\n\n  main.content {\n    padding: 0px 0px 32px 300px !important;\n  }\n  \n\n  .application .application--wrap {\n    position: relative;\n    min-height: auto;\n  }\n\n  .card__title {\n    justify-content: center;\n  }\n\n  .title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n  }\n\n  .input-group__details .input-group__error {\n    display: block;\n    flex:none;\n  }\n  \n  .buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n  }\n  .routerEnter {\n    animation: routerEnter .6s;\n  }\n\n  .routerLeave {\n    animation: routerLeave .6s;\n  }\n\n  .buttonEnter {\n    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n  }\n\n  .buttonLeave {\n    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n  }\n\n  @keyframes routerEnter {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n  }\n\n  @keyframes routerLeave {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n  }\n\n  @keyframes buttonEnter {\n    0% {transform: scale(0);}\n    100% {transform: scale(1);}\n  }\n\n  @keyframes buttonLeave {\n    0% {transform: scale(1);}\n    100% {transform: scale(0);}\n  }*/\n \n</style>"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlPzVmMWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlPzU5ZWYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWU/NGUxOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzTTtBQUN0TTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHFDQUF5TztBQUN6TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtGQUFrRjtBQUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHNEQUF1RCxnQ0FBZ0MsR0FBRyxNQUFNLHNCQUFzQiwwQkFBMEIseUJBQXlCLEdBQUcsbUNBQW1DLHlCQUF5Qix1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Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxjQUFjLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyxZQUFZLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsVUFBVSxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxNQUFNLG9CQUFvQixFQUFFLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyw0QkFBNEIsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8xMC41MTg3ZDgyYWFiYjRkMzk3NWM5Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTZhNmI4YzBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NmE2YjhjMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcRGFzaGJvYXJkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NmE2YjhjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU2YTZiOGMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImM1MDU4OTg0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTZhNmI4YzBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01NmE2YjhjMFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jYWRtaW4gLmFwcGxpY2F0aW9uLS13cmFwIHtcXG4gIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuaDIge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFwcGxpY2F0aW9uIC5hcHBsaWNhdGlvbi0td3JhcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG59XFxuLmNhcmRfX3RpdGxlIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGl0bGVfX2ljb24ge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4uaW5wdXQtZ3JvdXBfX2RldGFpbHMgLmlucHV0LWdyb3VwX19lcnJvciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1mbGV4OjA7XFxuICAgICAgICAtbXMtZmxleDpub25lO1xcbiAgICAgICAgICAgIGZsZXg6bm9uZTtcXG59XFxuLmJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5yb3V0ZXJFbnRlciB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3V0ZXJFbnRlciAuNnM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3V0ZXJFbnRlciAuNnM7XFxufVxcbi5yb3V0ZXJMZWF2ZSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XFxufVxcbi5idXR0b25FbnRlciB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxufVxcbi5idXR0b25MZWF2ZSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXG4wJSB7b3BhY2l0eTogMDtcXG59XFxuMTAwJSB7b3BhY2l0eTogMTtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcbjAlIHtvcGFjaXR5OiAwO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAxO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXG4wJSB7b3BhY2l0eTogMTtcXG59XFxuMTAwJSB7b3BhY2l0eTogMDtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xcbjAlIHtvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAwO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBidXR0b25FbnRlciB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25MZWF2ZSB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbn1cXG4vKiAgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzc5Nzk3OTtcXG4gIH1cXG5cXG4gIG1haW4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggMzJweCAzMDBweCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgXFxuXFxuICAuYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLS13cmFwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLmNhcmRfX3RpdGxlIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAudGl0bGVfX2ljb24ge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgfVxcblxcbiAgLmlucHV0LWdyb3VwX19kZXRhaWxzIC5pbnB1dC1ncm91cF9fZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxleDpub25lO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5yb3V0ZXJFbnRlciB7XFxuICAgIGFuaW1hdGlvbjogcm91dGVyRW50ZXIgLjZzO1xcbiAgfVxcblxcbiAgLnJvdXRlckxlYXZlIHtcXG4gICAgYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XFxuICB9XFxuXFxuICAuYnV0dG9uRW50ZXIge1xcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG4gIH1cXG5cXG4gIC5idXR0b25MZWF2ZSB7XFxuICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcbiAgfSovXFxuIFxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvc3BhL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnRUE7RUFDQSw0QkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtDQUNBO0FBRUE7SUFDQSx5QkFBQTtRQUFBLHNCQUFBO1lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0NBQ0E7QUFFQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtRQUFBLGNBQUE7WUFBQSxVQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtDQUNBO0FBQ0E7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0NBQ0E7QUFFQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7Q0FDQTtBQUVBO0lBQ0EsaUVBQUE7WUFBQSx5REFBQTtDQUNBO0FBRUE7SUFDQSxxRUFBQTtZQUFBLDZEQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUZBXCIsXCJmaWxlXCI6XCJEYXNoYm9hcmQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgaWQ9XFxcImFkbWluXFxcIj5cXG4gICAgPCEtLSDQkdC+0LrQvtCy0LDRjyDQv9Cw0L3QtdC70Ywg0L3QsNCy0LPQsNGG0LjQuCAtLT5cXG4gICAgPHYtbmF2aWdhdGlvbi1kcmF3ZXJcXG4gICAgICBwZXJzaXN0ZW50XFxuICAgICAgOm1pbmktdmFyaWFudD1cXFwibWluaVZhcmlhbnRcXFwiXFxuICAgICAgOmNsaXBwZWQ9XFxcImNsaXBwZWRcXFwiXFxuICAgICAgdi1tb2RlbD1cXFwiZHJhd2VyXFxcIlxcbiAgICAgIGVuYWJsZS1yZXNpemUtd2F0Y2hlclxcbiAgICAgIGZpeGVkXFxuICAgICAgYXBwXFxuICAgID5cXG4gICAgPHYtbGlzdCBkZW5zZT5cXG4gICAgICAgIDx2LWxpc3QtdGlsZSB0bz1cXFwiL1xcXCI+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgICAgPHYtaWNvbj5ob21lPC92LWljb24+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+0JPQu9Cw0LLQvdCw0Y88L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICAgICAgPHYtbGlzdC10aWxlIDp0bz1cXFwie25hbWU6ICdlbXBsb3llZXMnfVxcXCI+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgICAgPHYtaWNvbj5jb250YWN0X21haWw8L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT7QodC+0YLRgNGD0LTQvdC40LrQuDwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgICAgPC92LWxpc3Q+XFxuICAgIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj5cXG4gICAgPCEtLSDQntGB0L3QvtCy0L3QvtC5INC60L7QvdGC0LXQvdGCIC0tPlxcbiAgICA8di1jb250ZW50PiBcXG4gICAgICA8dHJhbnNpdGlvbiAgZW50ZXItYWN0aXZlLWNsYXNzPVxcXCJyb3V0ZXJFbnRlclxcXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVxcXCJyb3V0ZXJMZWF2ZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXG4gICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcbiAgICAgIDwvdHJhbnNpdGlvbj5cXG4gICAgPC92LWNvbnRlbnQ+IFxcbiAgICA8IS0tINCk0YPRgtC10YAgLS0+XFxuICAgIDx2LWZvb3RlciA6Zml4ZWQ9XFxcImZpeGVkXFxcIiBhcHA+XFxuICAgICAgPHYtdG9vbGJhci1zaWRlLWljb24gQGNsaWNrLnN0b3A9XFxcImRyYXdlciA9ICFkcmF3ZXJcXFwiPjwvdi10b29sYmFyLXNpZGUtaWNvbj5cXG4gICAgPC92LWZvb3Rlcj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGNsaXBwZWQ6IGZhbHNlLFxcbiAgICAgIGRyYXdlcjogdHJ1ZSxcXG4gICAgICBmaXhlZDogdHJ1ZSxcXG4gICAgICBpdGVtczogW3tcXG4gICAgICAgIGljb246ICdidWJibGVfY2hhcnQnLFxcbiAgICAgICAgdGl0bGU6ICfQk9C70LDQstC90LDRjydcXG4gICAgICB9XSxcXG4gICAgICBtaW5pVmFyaWFudDogZmFsc2VcXG4gICAgfVxcbiAgfSxcXG4gIG5hbWU6ICdBcHAnXFxufVxcbjwvc2NyaXB0PlxcblxcblxcbjxzdHlsZT5cXG5cXG4jYWRtaW4gLmFwcGxpY2F0aW9uLS13cmFwIHtcXG4gIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFwcGxpY2F0aW9uIC5hcHBsaWNhdGlvbi0td3JhcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5jYXJkX190aXRsZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRpdGxlX19pY29uIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5pbnB1dC1ncm91cF9fZGV0YWlscyAuaW5wdXQtZ3JvdXBfX2Vycm9yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsZXg6bm9uZTtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAucm91dGVyRW50ZXIge1xcbiAgICBhbmltYXRpb246IHJvdXRlckVudGVyIC42cztcXG4gIH1cXG5cXG4gIC5yb3V0ZXJMZWF2ZSB7XFxuICAgIGFuaW1hdGlvbjogcm91dGVyTGVhdmUgLjZzO1xcbiAgfVxcblxcbiAgLmJ1dHRvbkVudGVyIHtcXG4gICAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxuICB9XFxuXFxuICAuYnV0dG9uTGVhdmUge1xcbiAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xcbiAgICAwJSB7b3BhY2l0eTogMTt9XFxuICAgIDEwMCUge29wYWNpdHk6IDA7fVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBidXR0b25FbnRlciB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cXG4gIH1cXG4vKiAgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzc5Nzk3OTtcXG4gIH1cXG5cXG4gIG1haW4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggMzJweCAzMDBweCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgXFxuXFxuICAuYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLS13cmFwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLmNhcmRfX3RpdGxlIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAudGl0bGVfX2ljb24ge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgfVxcblxcbiAgLmlucHV0LWdyb3VwX19kZXRhaWxzIC5pbnB1dC1ncm91cF9fZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxleDpub25lO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5yb3V0ZXJFbnRlciB7XFxuICAgIGFuaW1hdGlvbjogcm91dGVyRW50ZXIgLjZzO1xcbiAgfVxcblxcbiAgLnJvdXRlckxlYXZlIHtcXG4gICAgYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XFxuICB9XFxuXFxuICAuYnV0dG9uRW50ZXIge1xcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG4gIH1cXG5cXG4gIC5idXR0b25MZWF2ZSB7XFxuICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcbiAgfSovXFxuIFxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTU2YTZiOGMwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYWRtaW5cIj5cbiAgICA8IS0tINCR0L7QutC+0LLQsNGPINC/0LDQvdC10LvRjCDQvdCw0LLQs9Cw0YbQuNC4IC0tPlxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyXG4gICAgICBwZXJzaXN0ZW50XG4gICAgICA6bWluaS12YXJpYW50PVwibWluaVZhcmlhbnRcIlxuICAgICAgOmNsaXBwZWQ9XCJjbGlwcGVkXCJcbiAgICAgIHYtbW9kZWw9XCJkcmF3ZXJcIlxuICAgICAgZW5hYmxlLXJlc2l6ZS13YXRjaGVyXG4gICAgICBmaXhlZFxuICAgICAgYXBwXG4gICAgPlxuICAgIDx2LWxpc3QgZGVuc2U+XG4gICAgICAgIDx2LWxpc3QtdGlsZSB0bz1cIi9cIj5cbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgICAgPHYtaWNvbj5ob21lPC92LWljb24+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+0JPQu9Cw0LLQvdCw0Y88L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgICAgPHYtbGlzdC10aWxlIDp0bz1cIntuYW1lOiAnZW1wbG95ZWVzJ31cIj5cbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgICAgPHYtaWNvbj5jb250YWN0X21haWw8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT7QodC+0YLRgNGD0LTQvdC40LrQuDwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgPC92LWxpc3Q+XG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPlxuICAgIDwhLS0g0J7RgdC90L7QstC90L7QuSDQutC+0L3RgtC10L3RgiAtLT5cbiAgICA8di1jb250ZW50PiBcbiAgICAgIDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XCJyb3V0ZXJFbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cInJvdXRlckxlYXZlXCIgbW9kZT1cIm91dC1pblwiPlxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cbiAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICA8L3YtY29udGVudD4gXG4gICAgPCEtLSDQpNGD0YLQtdGAIC0tPlxuICAgIDx2LWZvb3RlciA6Zml4ZWQ9XCJmaXhlZFwiIGFwcD5cbiAgICAgIDx2LXRvb2xiYXItc2lkZS1pY29uIEBjbGljay5zdG9wPVwiZHJhd2VyID0gIWRyYXdlclwiPjwvdi10b29sYmFyLXNpZGUtaWNvbj5cbiAgICA8L3YtZm9vdGVyPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsaXBwZWQ6IGZhbHNlLFxuICAgICAgZHJhd2VyOiB0cnVlLFxuICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICBpdGVtczogW3tcbiAgICAgICAgaWNvbjogJ2J1YmJsZV9jaGFydCcsXG4gICAgICAgIHRpdGxlOiAn0JPQu9Cw0LLQvdCw0Y8nXG4gICAgICB9XSxcbiAgICAgIG1pbmlWYXJpYW50OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbmFtZTogJ0FwcCdcbn1cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZT5cblxuI2FkbWluIC5hcHBsaWNhdGlvbi0td3JhcCB7XG4gIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmFwcGxpY2F0aW9uIC5hcHBsaWNhdGlvbi0td3JhcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuY2FyZF9fdGl0bGUge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnRpdGxlX19pY29uIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cblxuICAuaW5wdXQtZ3JvdXBfX2RldGFpbHMgLmlucHV0LWdyb3VwX19lcnJvciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleDpub25lO1xuICB9XG4gIFxuICAuYnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5yb3V0ZXJFbnRlciB7XG4gICAgYW5pbWF0aW9uOiByb3V0ZXJFbnRlciAuNnM7XG4gIH1cblxuICAucm91dGVyTGVhdmUge1xuICAgIGFuaW1hdGlvbjogcm91dGVyTGVhdmUgLjZzO1xuICB9XG5cbiAgLmJ1dHRvbkVudGVyIHtcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcbiAgfVxuXG4gIC5idXR0b25MZWF2ZSB7XG4gICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xuICB9XG5cbiAgQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XG4gICAgMCUge29wYWNpdHk6IDA7fVxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxuICB9XG5cbiAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XG4gICAgMCUge29wYWNpdHk6IDE7fVxuICAgIDEwMCUge29wYWNpdHk6IDA7fVxuICB9XG5cbiAgQGtleWZyYW1lcyBidXR0b25FbnRlciB7XG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxuICB9XG5cbiAgQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxuICB9XG4vKiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBodG1sLFxuICBib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3OTc5Nzk7XG4gIH1cblxuICBtYWluLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweCAwcHggMzJweCAzMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuXG4gIC5hcHBsaWNhdGlvbiAuYXBwbGljYXRpb24tLXdyYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmNhcmRfX3RpdGxlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZV9faWNvbiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG5cbiAgLmlucHV0LWdyb3VwX19kZXRhaWxzIC5pbnB1dC1ncm91cF9fZXJyb3Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXg6bm9uZTtcbiAgfVxuICBcbiAgLmJ1dHRvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucm91dGVyRW50ZXIge1xuICAgIGFuaW1hdGlvbjogcm91dGVyRW50ZXIgLjZzO1xuICB9XG5cbiAgLnJvdXRlckxlYXZlIHtcbiAgICBhbmltYXRpb246IHJvdXRlckxlYXZlIC42cztcbiAgfVxuXG4gIC5idXR0b25FbnRlciB7XG4gICAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XG4gIH1cblxuICAuYnV0dG9uTGVhdmUge1xuICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xuICAgIDAlIHtvcGFjaXR5OiAwO31cbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xuICAgIDAlIHtvcGFjaXR5OiAxO31cbiAgICAxMDAlIHtvcGFjaXR5OiAwO31cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cbiAgfSovXG4gXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJhZG1pblwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcGVyc2lzdGVudDogXCJcIixcbiAgICAgICAgICAgIFwibWluaS12YXJpYW50XCI6IF92bS5taW5pVmFyaWFudCxcbiAgICAgICAgICAgIGNsaXBwZWQ6IF92bS5jbGlwcGVkLFxuICAgICAgICAgICAgXCJlbmFibGUtcmVzaXplLXdhdGNoZXJcIjogXCJcIixcbiAgICAgICAgICAgIGZpeGVkOiBcIlwiLFxuICAgICAgICAgICAgYXBwOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kcmF3ZXIsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kcmF3ZXIgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRyYXdlclwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBkZW5zZTogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi9cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIiwgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJob21lXCIpXSldLCAxKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtfdm0uX3YoXCLQk9C70LDQstC90LDRj1wiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImVtcGxveWVlc1wiIH0gfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImNvbnRhY3RfbWFpbFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtfdm0uX3YoXCLQodC+0YLRgNGD0LTQvdC40LrQuFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRlbnRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJyb3V0ZXJFbnRlclwiLFxuICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwicm91dGVyTGVhdmVcIixcbiAgICAgICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJyb3V0ZXItdmlld1wiKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZm9vdGVyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZml4ZWQ6IF92bS5maXhlZCwgYXBwOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi10b29sYmFyLXNpZGUtaWNvblwiLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgX3ZtLmRyYXdlciA9ICFfdm0uZHJhd2VyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTZhNmI4YzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU2YTZiOGMwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCJdLCJzb3VyY2VSb290IjoiIn0=