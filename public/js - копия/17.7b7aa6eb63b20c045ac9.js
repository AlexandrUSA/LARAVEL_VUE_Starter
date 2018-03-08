webpackJsonp([17],{

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(199)
/* template */
var __vue_template__ = __webpack_require__(200)
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c5058984", content, false);
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

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: #FAFAFA;\n}\nh2 {\n  font-size: 22px;\n  font-weight: normal;\n  text-align: center;\n  color: #797979;\n}\n.application .application--wrap {\n  position: relative;\n  min-height: auto;\n}\n.card__title {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.title__icon {\n  font-size: 35px;\n  margin: 0 10px;\n}\n.input-group__details .input-group__error {\n  display: block;\n  -webkit-box-flex:0;\n      -ms-flex:none;\n          flex:none;\n}\n.buttons {\n  width: 100%;\n  height: 70px;\n  margin-top: 40px;\n  text-align: center;\n}\n.routerEnter {\n  -webkit-animation: routerEnter .6s;\n          animation: routerEnter .6s;\n}\n.routerLeave {\n  -webkit-animation: routerLeave .6s;\n          animation: routerLeave .6s;\n}\n.buttonEnter {\n  -webkit-animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n          animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n}\n.buttonLeave {\n  -webkit-animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n          animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n}\n@-webkit-keyframes routerEnter {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@keyframes routerEnter {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@keyframes routerLeave {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@keyframes buttonEnter {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n@keyframes buttonLeave {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/resources/assets/js/pages/admin/Dashboard.vue"],"names":[],"mappings":";AAgEA;EACA,+BAAA;UAAA,uBAAA;CACA;AACA;;EAEA,YAAA;EACA,aAAA;EACA,0BAAA;CACA;AAEA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,eAAA;CACA;AAEA;EACA,mBAAA;EACA,iBAAA;CACA;AAEA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA;AAEA;EACA,gBAAA;EACA,eAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;MAAA,cAAA;UAAA,UAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;CACA;AACA;EACA,mCAAA;UAAA,2BAAA;CACA;AAEA;EACA,mCAAA;UAAA,2BAAA;CACA;AAEA;EACA,iEAAA;UAAA,yDAAA;CACA;AAEA;EACA,qEAAA;UAAA,6DAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA","file":"Dashboard.vue","sourcesContent":["<template>\n  <v-app>\n    <!-- Боковая панель навгации -->\n    <v-navigation-drawer\n      persistent\n      :mini-variant=\"miniVariant\"\n      :clipped=\"clipped\"\n      v-model=\"drawer\"\n      enable-resize-watcher\n      fixed\n      app\n      dark\n    >\n    <v-list dense>\n        <v-list-tile to=\"/\">\n          <v-list-tile-action>\n            <v-icon>home</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>Главная</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n        <v-list-tile :to=\"{name: 'employees'}\">\n          <v-list-tile-action>\n            <v-icon>contact_mail</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>Сотрудники</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </v-list>\n    </v-navigation-drawer>\n    <!-- Основной контент -->\n    <v-content> \n      <transition  enter-active-class=\"routerEnter\" leave-active-class=\"routerLeave\" mode=\"out-in\">\n        <router-view/>\n      </transition>\n    </v-content>\n    <!-- Футер -->\n    <v-footer :fixed=\"fixed\" app>\n\n    </v-footer>\n  </v-app>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      clipped: true,\n      drawer: true,\n      fixed: true,\n      items: [{\n        icon: 'bubble_chart',\n        title: 'Главная'\n      }],\n      miniVariant: false\n    }\n  },\n  name: 'App'\n}\n</script>\n\n\n<style>\n  * {\n    box-sizing: border-box;\n  }\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    background-color: #FAFAFA;\n  }\n\n  h2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n    color: #797979;\n  }\n\n  .application .application--wrap {\n    position: relative;\n    min-height: auto;\n  }\n\n  .card__title {\n    justify-content: center;\n  }\n\n  .title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n  }\n\n  .input-group__details .input-group__error {\n    display: block;\n    flex:none;\n  }\n  \n  .buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n  }\n  .routerEnter {\n    animation: routerEnter .6s;\n  }\n\n  .routerLeave {\n    animation: routerLeave .6s;\n  }\n\n  .buttonEnter {\n    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n  }\n\n  .buttonLeave {\n    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n  }\n\n  @keyframes routerEnter {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n  }\n\n  @keyframes routerLeave {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n  }\n\n  @keyframes buttonEnter {\n    0% {transform: scale(0);}\n    100% {transform: scale(1);}\n  }\n\n  @keyframes buttonLeave {\n    0% {transform: scale(1);}\n    100% {transform: scale(0);}\n  }\n \n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 199:
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      clipped: true,
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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
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
            app: "",
            dark: ""
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
      _c("v-footer", { attrs: { fixed: _vm.fixed, app: "" } })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlPzVmMWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlPzU5ZWYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWU/NGUxOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzTTtBQUN0TTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHFDQUF5TztBQUN6TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtGQUFrRjtBQUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDhCQUErQixtQ0FBbUMsbUNBQW1DLEdBQUcsZUFBZSxnQkFBZ0IsaUJBQWlCLDhCQUE4QixHQUFHLE1BQU0sb0JB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc0NBO3dCQUVBOztlQUVBO2NBQ0E7YUFDQTs7Y0FFQTtlQUVBO0FBSEE7bUJBS0E7QUFUQTtBQVVBOztRQUNBO0FBYkEsRzs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsWUFBWSxFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLFVBQVUsRUFBRTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsTUFBTSxvQkFBb0IsRUFBRSxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTLDRCQUE0QixFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8xNy43YjdhYTZlYjYzYjIwYzA0NWFjOS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTZhNmI4YzBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NmE2YjhjMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcRGFzaGJvYXJkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NmE2YjhjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU2YTZiOGMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImM1MDU4OTg0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTZhNmI4YzBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01NmE2YjhjMFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4qIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXG59XFxuaDIge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjNzk3OTc5O1xcbn1cXG4uYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLS13cmFwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IGF1dG87XFxufVxcbi5jYXJkX190aXRsZSB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRpdGxlX19pY29uIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4uaW5wdXQtZ3JvdXBfX2RldGFpbHMgLmlucHV0LWdyb3VwX19lcnJvciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LWZsZXg6MDtcXG4gICAgICAtbXMtZmxleDpub25lO1xcbiAgICAgICAgICBmbGV4Om5vbmU7XFxufVxcbi5idXR0b25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJvdXRlckVudGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3V0ZXJFbnRlciAuNnM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcm91dGVyRW50ZXIgLjZzO1xcbn1cXG4ucm91dGVyTGVhdmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdXRlckxlYXZlIC42cztcXG4gICAgICAgICAgYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XFxufVxcbi5idXR0b25FbnRlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uRW50ZXIgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xcbiAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG59XFxuLmJ1dHRvbkxlYXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcbiAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJFbnRlciB7XFxuMCUge29wYWNpdHk6IDA7XFxufVxcbjEwMCUge29wYWNpdHk6IDE7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXG4wJSB7b3BhY2l0eTogMDtcXG59XFxuMTAwJSB7b3BhY2l0eTogMTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XFxuMCUge29wYWNpdHk6IDE7XFxufVxcbjEwMCUge29wYWNpdHk6IDA7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXG4wJSB7b3BhY2l0eTogMTtcXG59XFxuMTAwJSB7b3BhY2l0eTogMDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25FbnRlciB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdFQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7Q0FDQTtBQUNBOztFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7Q0FDQTtBQUVBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSx3QkFBQTtDQUNBO0FBRUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7Q0FDQTtBQUVBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO01BQUEsY0FBQTtVQUFBLFVBQUE7Q0FDQTtBQUVBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0NBQ0E7QUFDQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7Q0FDQTtBQUVBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtDQUNBO0FBRUE7RUFDQSxpRUFBQTtVQUFBLHlEQUFBO0NBQ0E7QUFFQTtFQUNBLHFFQUFBO1VBQUEsNkRBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiRGFzaGJvYXJkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8di1hcHA+XFxuICAgIDwhLS0g0JHQvtC60L7QstCw0Y8g0L/QsNC90LXQu9GMINC90LDQstCz0LDRhtC40LggLS0+XFxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyXFxuICAgICAgcGVyc2lzdGVudFxcbiAgICAgIDptaW5pLXZhcmlhbnQ9XFxcIm1pbmlWYXJpYW50XFxcIlxcbiAgICAgIDpjbGlwcGVkPVxcXCJjbGlwcGVkXFxcIlxcbiAgICAgIHYtbW9kZWw9XFxcImRyYXdlclxcXCJcXG4gICAgICBlbmFibGUtcmVzaXplLXdhdGNoZXJcXG4gICAgICBmaXhlZFxcbiAgICAgIGFwcFxcbiAgICAgIGRhcmtcXG4gICAgPlxcbiAgICA8di1saXN0IGRlbnNlPlxcbiAgICAgICAgPHYtbGlzdC10aWxlIHRvPVxcXCIvXFxcIj5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgICA8di1pY29uPmhvbWU8L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT7Qk9C70LDQstC90LDRjzwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgICAgICA8di1saXN0LXRpbGUgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlcyd9XFxcIj5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgICA8di1pY29uPmNvbnRhY3RfbWFpbDwvdi1pY29uPlxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPtCh0L7RgtGA0YPQtNC90LjQutC4PC92LWxpc3QtdGlsZS10aXRsZT5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgPC92LWxpc3QtdGlsZT5cXG4gICAgICA8L3YtbGlzdD5cXG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPlxcbiAgICA8IS0tINCe0YHQvdC+0LLQvdC+0Lkg0LrQvtC90YLQtdC90YIgLS0+XFxuICAgIDx2LWNvbnRlbnQ+IFxcbiAgICAgIDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XFxcInJvdXRlckVudGVyXFxcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XFxcInJvdXRlckxlYXZlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcbiAgICAgICAgPHJvdXRlci12aWV3Lz5cXG4gICAgICA8L3RyYW5zaXRpb24+XFxuICAgIDwvdi1jb250ZW50PlxcbiAgICA8IS0tINCk0YPRgtC10YAgLS0+XFxuICAgIDx2LWZvb3RlciA6Zml4ZWQ9XFxcImZpeGVkXFxcIiBhcHA+XFxuXFxuICAgIDwvdi1mb290ZXI+XFxuICA8L3YtYXBwPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBjbGlwcGVkOiB0cnVlLFxcbiAgICAgIGRyYXdlcjogdHJ1ZSxcXG4gICAgICBmaXhlZDogdHJ1ZSxcXG4gICAgICBpdGVtczogW3tcXG4gICAgICAgIGljb246ICdidWJibGVfY2hhcnQnLFxcbiAgICAgICAgdGl0bGU6ICfQk9C70LDQstC90LDRjydcXG4gICAgICB9XSxcXG4gICAgICBtaW5pVmFyaWFudDogZmFsc2VcXG4gICAgfVxcbiAgfSxcXG4gIG5hbWU6ICdBcHAnXFxufVxcbjwvc2NyaXB0PlxcblxcblxcbjxzdHlsZT5cXG4gICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgaHRtbCxcXG4gIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICM3OTc5Nzk7XFxuICB9XFxuXFxuICAuYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLS13cmFwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLmNhcmRfX3RpdGxlIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAudGl0bGVfX2ljb24ge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgfVxcblxcbiAgLmlucHV0LWdyb3VwX19kZXRhaWxzIC5pbnB1dC1ncm91cF9fZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxleDpub25lO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5yb3V0ZXJFbnRlciB7XFxuICAgIGFuaW1hdGlvbjogcm91dGVyRW50ZXIgLjZzO1xcbiAgfVxcblxcbiAgLnJvdXRlckxlYXZlIHtcXG4gICAgYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XFxuICB9XFxuXFxuICAuYnV0dG9uRW50ZXIge1xcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG4gIH1cXG5cXG4gIC5idXR0b25MZWF2ZSB7XFxuICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcbiAgfVxcbiBcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01NmE2YjhjMFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsIjx0ZW1wbGF0ZT5cbiAgPHYtYXBwPlxuICAgIDwhLS0g0JHQvtC60L7QstCw0Y8g0L/QsNC90LXQu9GMINC90LDQstCz0LDRhtC40LggLS0+XG4gICAgPHYtbmF2aWdhdGlvbi1kcmF3ZXJcbiAgICAgIHBlcnNpc3RlbnRcbiAgICAgIDptaW5pLXZhcmlhbnQ9XCJtaW5pVmFyaWFudFwiXG4gICAgICA6Y2xpcHBlZD1cImNsaXBwZWRcIlxuICAgICAgdi1tb2RlbD1cImRyYXdlclwiXG4gICAgICBlbmFibGUtcmVzaXplLXdhdGNoZXJcbiAgICAgIGZpeGVkXG4gICAgICBhcHBcbiAgICAgIGRhcmtcbiAgICA+XG4gICAgPHYtbGlzdCBkZW5zZT5cbiAgICAgICAgPHYtbGlzdC10aWxlIHRvPVwiL1wiPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgICA8di1pY29uPmhvbWU8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT7Qk9C70LDQstC90LDRjzwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgICA8di1saXN0LXRpbGUgOnRvPVwie25hbWU6ICdlbXBsb3llZXMnfVwiPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgICA8di1pY29uPmNvbnRhY3RfbWFpbDwvdi1pY29uPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPtCh0L7RgtGA0YPQtNC90LjQutC4PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgICA8L3YtbGlzdD5cbiAgICA8L3YtbmF2aWdhdGlvbi1kcmF3ZXI+XG4gICAgPCEtLSDQntGB0L3QvtCy0L3QvtC5INC60L7QvdGC0LXQvdGCIC0tPlxuICAgIDx2LWNvbnRlbnQ+IFxuICAgICAgPHRyYW5zaXRpb24gIGVudGVyLWFjdGl2ZS1jbGFzcz1cInJvdXRlckVudGVyXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVwicm91dGVyTGVhdmVcIiBtb2RlPVwib3V0LWluXCI+XG4gICAgICAgIDxyb3V0ZXItdmlldy8+XG4gICAgICA8L3RyYW5zaXRpb24+XG4gICAgPC92LWNvbnRlbnQ+XG4gICAgPCEtLSDQpNGD0YLQtdGAIC0tPlxuICAgIDx2LWZvb3RlciA6Zml4ZWQ9XCJmaXhlZFwiIGFwcD5cblxuICAgIDwvdi1mb290ZXI+XG4gIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xpcHBlZDogdHJ1ZSxcbiAgICAgIGRyYXdlcjogdHJ1ZSxcbiAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGljb246ICdidWJibGVfY2hhcnQnLFxuICAgICAgICB0aXRsZTogJ9CT0LvQsNCy0L3QsNGPJ1xuICAgICAgfV0sXG4gICAgICBtaW5pVmFyaWFudDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG5hbWU6ICdBcHAnXG59XG48L3NjcmlwdD5cblxuXG48c3R5bGU+XG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNzk3OTc5O1xuICB9XG5cbiAgLmFwcGxpY2F0aW9uIC5hcHBsaWNhdGlvbi0td3JhcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuY2FyZF9fdGl0bGUge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnRpdGxlX19pY29uIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cblxuICAuaW5wdXQtZ3JvdXBfX2RldGFpbHMgLmlucHV0LWdyb3VwX19lcnJvciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleDpub25lO1xuICB9XG4gIFxuICAuYnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5yb3V0ZXJFbnRlciB7XG4gICAgYW5pbWF0aW9uOiByb3V0ZXJFbnRlciAuNnM7XG4gIH1cblxuICAucm91dGVyTGVhdmUge1xuICAgIGFuaW1hdGlvbjogcm91dGVyTGVhdmUgLjZzO1xuICB9XG5cbiAgLmJ1dHRvbkVudGVyIHtcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcbiAgfVxuXG4gIC5idXR0b25MZWF2ZSB7XG4gICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xuICB9XG5cbiAgQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XG4gICAgMCUge29wYWNpdHk6IDA7fVxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxuICB9XG5cbiAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XG4gICAgMCUge29wYWNpdHk6IDE7fVxuICAgIDEwMCUge29wYWNpdHk6IDA7fVxuICB9XG5cbiAgQGtleWZyYW1lcyBidXR0b25FbnRlciB7XG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxuICB9XG5cbiAgQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxuICB9XG4gXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcGVyc2lzdGVudDogXCJcIixcbiAgICAgICAgICAgIFwibWluaS12YXJpYW50XCI6IF92bS5taW5pVmFyaWFudCxcbiAgICAgICAgICAgIGNsaXBwZWQ6IF92bS5jbGlwcGVkLFxuICAgICAgICAgICAgXCJlbmFibGUtcmVzaXplLXdhdGNoZXJcIjogXCJcIixcbiAgICAgICAgICAgIGZpeGVkOiBcIlwiLFxuICAgICAgICAgICAgYXBwOiBcIlwiLFxuICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZHJhd2VyLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZHJhd2VyID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkcmF3ZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgZGVuc2U6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtYWN0aW9uXCIsIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiaG9tZVwiKV0pXSwgMSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbX3ZtLl92KFwi0JPQu9Cw0LLQvdCw0Y9cIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJlbXBsb3llZXNcIiB9IH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJjb250YWN0X21haWxcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbX3ZtLl92KFwi0KHQvtGC0YDRg9C00L3QuNC60LhcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250ZW50XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwicm91dGVyRW50ZXJcIixcbiAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcInJvdXRlckxlYXZlXCIsXG4gICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwicm91dGVyLXZpZXdcIildLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtZm9vdGVyXCIsIHsgYXR0cnM6IHsgZml4ZWQ6IF92bS5maXhlZCwgYXBwOiBcIlwiIH0gfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01NmE2YjhjMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTZhNmI4YzBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDE3Il0sInNvdXJjZVJvb3QiOiIifQ==