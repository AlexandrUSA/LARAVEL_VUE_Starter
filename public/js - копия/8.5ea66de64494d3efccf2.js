webpackJsonp([8],{

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(206)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(199)
/* template */
var __vue_template__ = __webpack_require__(208)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-56a6b8c0"
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

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(207);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("047897f5", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56a6b8c0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56a6b8c0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-56a6b8c0] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml[data-v-56a6b8c0],\nbody[data-v-56a6b8c0] {\n  width: 100%;\n  height: 100%;\n  background-color: #FAFAFA;\n}\nmain[data-v-56a6b8c0] {\n  padding-top: 65px !important;\n}\nh2[data-v-56a6b8c0] {\n  font-size: 22px;\n  font-weight: normal;\n  text-align: center;\n  color: #797979;\n}\nmain.content[data-v-56a6b8c0] {\n  padding: 0px 0px 32px 300px !important;\n}\n.application .application--wrap[data-v-56a6b8c0] {\n  position: relative;\n  min-height: auto;\n}\n.card__title[data-v-56a6b8c0] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.title__icon[data-v-56a6b8c0] {\n  font-size: 35px;\n  margin: 0 10px;\n}\n.input-group__details .input-group__error[data-v-56a6b8c0] {\n  display: block;\n  -webkit-box-flex:0;\n      -ms-flex:none;\n          flex:none;\n}\n.buttons[data-v-56a6b8c0] {\n  width: 100%;\n  height: 70px;\n  margin-top: 40px;\n  text-align: center;\n}\n.routerEnter[data-v-56a6b8c0] {\n  -webkit-animation: routerEnter-data-v-56a6b8c0 .6s;\n          animation: routerEnter-data-v-56a6b8c0 .6s;\n}\n.routerLeave[data-v-56a6b8c0] {\n  -webkit-animation: routerLeave-data-v-56a6b8c0 .6s;\n          animation: routerLeave-data-v-56a6b8c0 .6s;\n}\n.buttonEnter[data-v-56a6b8c0] {\n  -webkit-animation: buttonEnter-data-v-56a6b8c0 .3s cubic-bezier(.09,.9,.48,1.64);\n          animation: buttonEnter-data-v-56a6b8c0 .3s cubic-bezier(.09,.9,.48,1.64);\n}\n.buttonLeave[data-v-56a6b8c0] {\n  -webkit-animation: buttonLeave-data-v-56a6b8c0 .3s cubic-bezier(.52,-0.44,.88,-0.45);\n          animation: buttonLeave-data-v-56a6b8c0 .3s cubic-bezier(.52,-0.44,.88,-0.45);\n}\n@-webkit-keyframes routerEnter-data-v-56a6b8c0 {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@keyframes routerEnter-data-v-56a6b8c0 {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave-data-v-56a6b8c0 {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@keyframes routerLeave-data-v-56a6b8c0 {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter-data-v-56a6b8c0 {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@keyframes buttonEnter-data-v-56a6b8c0 {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave-data-v-56a6b8c0 {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n@keyframes buttonLeave-data-v-56a6b8c0 {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/resources/assets/js/pages/admin/Dashboard.vue"],"names":[],"mappings":";AA+DA;EACA,+BAAA;UAAA,uBAAA;CACA;AACA;;EAEA,YAAA;EACA,aAAA;EACA,0BAAA;CACA;AAEA;EACA,6BAAA;CACA;AAEA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,eAAA;CACA;AAEA;EACA,uCAAA;CACA;AAGA;EACA,mBAAA;EACA,iBAAA;CACA;AAEA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA;AAEA;EACA,gBAAA;EACA,eAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;MAAA,cAAA;UAAA,UAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;CACA;AACA;EACA,mDAAA;UAAA,2CAAA;CACA;AAEA;EACA,mDAAA;UAAA,2CAAA;CACA;AAEA;EACA,iFAAA;UAAA,yEAAA;CACA;AAEA;EACA,qFAAA;UAAA,6EAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA","file":"Dashboard.vue","sourcesContent":["<template>\n  <div>\n    <!-- Боковая панель навгации -->\n    <v-navigation-drawer\n      persistent\n      :mini-variant=\"miniVariant\"\n      :clipped=\"clipped\"\n      v-model=\"drawer\"\n      enable-resize-watcher\n      fixed\n      app\n    >\n    <v-list dense>\n        <v-list-tile to=\"/\">\n          <v-list-tile-action>\n            <v-icon>home</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>Главная</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n        <v-list-tile :to=\"{name: 'employees'}\">\n          <v-list-tile-action>\n            <v-icon>contact_mail</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>Сотрудники</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </v-list>\n    </v-navigation-drawer>\n    <!-- Основной контент -->\n    <v-content> \n      <transition  enter-active-class=\"routerEnter\" leave-active-class=\"routerLeave\" mode=\"out-in\">\n        <router-view/>\n      </transition>\n    </v-content> \n    <!-- Футер -->\n    <v-footer :fixed=\"fixed\" app>\n\n    </v-footer>\n    </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      clipped: true,\n      drawer: true,\n      fixed: true,\n      items: [{\n        icon: 'bubble_chart',\n        title: 'Главная'\n      }],\n      miniVariant: false\n    }\n  },\n  name: 'App'\n}\n</script>\n\n\n<style scoped>\n  * {\n    box-sizing: border-box;\n  }\n  html,\n  body {\n    width: 100%;\n    height: 100%;\n    background-color: #FAFAFA;\n  }\n\n  main {\n    padding-top: 65px !important;\n  }\n\n  h2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n    color: #797979;\n  }\n\n  main.content {\n    padding: 0px 0px 32px 300px !important;\n  }\n  \n\n  .application .application--wrap {\n    position: relative;\n    min-height: auto;\n  }\n\n  .card__title {\n    justify-content: center;\n  }\n\n  .title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n  }\n\n  .input-group__details .input-group__error {\n    display: block;\n    flex:none;\n  }\n  \n  .buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n  }\n  .routerEnter {\n    animation: routerEnter .6s;\n  }\n\n  .routerLeave {\n    animation: routerLeave .6s;\n  }\n\n  .buttonEnter {\n    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n  }\n\n  .buttonLeave {\n    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n  }\n\n  @keyframes routerEnter {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n  }\n\n  @keyframes routerLeave {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n  }\n\n  @keyframes buttonEnter {\n    0% {transform: scale(0);}\n    100% {transform: scale(1);}\n  }\n\n  @keyframes buttonLeave {\n    0% {transform: scale(1);}\n    100% {transform: scale(0);}\n  }\n \n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWU/YWY2MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWU/OTYyYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWU/ZmRhYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFxTTtBQUNyTTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBa0w7QUFDbEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7d0JBRUE7O2VBRUE7Y0FDQTthQUNBOztjQUVBO2VBRUE7QUFIQTttQkFLQTtBQVRBO0FBVUE7O1FBQ0E7QUFiQSxHOzs7Ozs7O0FDN0NBOztBQUVBO0FBQ0EscUNBQXdPO0FBQ3hPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSkFBc0osaUZBQWlGO0FBQ3ZPLCtKQUErSixpRkFBaUY7QUFDaFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01NmE2YjhjMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTZhNmI4YzBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTU2YTZiOGMwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcRGFzaGJvYXJkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NmE2YjhjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU2YTZiOGMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPCEtLSDQkdC+0LrQvtCy0LDRjyDQv9Cw0L3QtdC70Ywg0L3QsNCy0LPQsNGG0LjQuCAtLT5cbiAgICA8di1uYXZpZ2F0aW9uLWRyYXdlclxuICAgICAgcGVyc2lzdGVudFxuICAgICAgOm1pbmktdmFyaWFudD1cIm1pbmlWYXJpYW50XCJcbiAgICAgIDpjbGlwcGVkPVwiY2xpcHBlZFwiXG4gICAgICB2LW1vZGVsPVwiZHJhd2VyXCJcbiAgICAgIGVuYWJsZS1yZXNpemUtd2F0Y2hlclxuICAgICAgZml4ZWRcbiAgICAgIGFwcFxuICAgID5cbiAgICA8di1saXN0IGRlbnNlPlxuICAgICAgICA8di1saXN0LXRpbGUgdG89XCIvXCI+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgIDx2LWljb24+aG9tZTwvdi1pY29uPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPtCT0LvQsNCy0L3QsNGPPC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgICAgIDx2LWxpc3QtdGlsZSA6dG89XCJ7bmFtZTogJ2VtcGxveWVlcyd9XCI+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgIDx2LWljb24+Y29udGFjdF9tYWlsPC92LWljb24+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+0KHQvtGC0YDRg9C00L3QuNC60Lg8L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgIDwvdi1saXN0PlxuICAgIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj5cbiAgICA8IS0tINCe0YHQvdC+0LLQvdC+0Lkg0LrQvtC90YLQtdC90YIgLS0+XG4gICAgPHYtY29udGVudD4gXG4gICAgICA8dHJhbnNpdGlvbiAgZW50ZXItYWN0aXZlLWNsYXNzPVwicm91dGVyRW50ZXJcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJyb3V0ZXJMZWF2ZVwiIG1vZGU9XCJvdXQtaW5cIj5cbiAgICAgICAgPHJvdXRlci12aWV3Lz5cbiAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICA8L3YtY29udGVudD4gXG4gICAgPCEtLSDQpNGD0YLQtdGAIC0tPlxuICAgIDx2LWZvb3RlciA6Zml4ZWQ9XCJmaXhlZFwiIGFwcD5cblxuICAgIDwvdi1mb290ZXI+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xpcHBlZDogdHJ1ZSxcbiAgICAgIGRyYXdlcjogdHJ1ZSxcbiAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGljb246ICdidWJibGVfY2hhcnQnLFxuICAgICAgICB0aXRsZTogJ9CT0LvQsNCy0L3QsNGPJ1xuICAgICAgfV0sXG4gICAgICBtaW5pVmFyaWFudDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG5hbWU6ICdBcHAnXG59XG48L3NjcmlwdD5cblxuXG48c3R5bGUgc2NvcGVkPlxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICB9XG5cbiAgbWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDY1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3OTc5Nzk7XG4gIH1cblxuICBtYWluLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweCAwcHggMzJweCAzMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuXG4gIC5hcHBsaWNhdGlvbiAuYXBwbGljYXRpb24tLXdyYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmNhcmRfX3RpdGxlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZV9faWNvbiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG5cbiAgLmlucHV0LWdyb3VwX19kZXRhaWxzIC5pbnB1dC1ncm91cF9fZXJyb3Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXg6bm9uZTtcbiAgfVxuICBcbiAgLmJ1dHRvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucm91dGVyRW50ZXIge1xuICAgIGFuaW1hdGlvbjogcm91dGVyRW50ZXIgLjZzO1xuICB9XG5cbiAgLnJvdXRlckxlYXZlIHtcbiAgICBhbmltYXRpb246IHJvdXRlckxlYXZlIC42cztcbiAgfVxuXG4gIC5idXR0b25FbnRlciB7XG4gICAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XG4gIH1cblxuICAuYnV0dG9uTGVhdmUge1xuICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xuICAgIDAlIHtvcGFjaXR5OiAwO31cbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xuICAgIDAlIHtvcGFjaXR5OiAxO31cbiAgICAxMDAlIHtvcGFjaXR5OiAwO31cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cbiAgfVxuIFxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMDQ3ODk3ZjVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTZhNmI4YzBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01NmE2YjhjMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuKltkYXRhLXYtNTZhNmI4YzBdIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaHRtbFtkYXRhLXYtNTZhNmI4YzBdLFxcbmJvZHlbZGF0YS12LTU2YTZiOGMwXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxufVxcbm1haW5bZGF0YS12LTU2YTZiOGMwXSB7XFxuICBwYWRkaW5nLXRvcDogNjVweCAhaW1wb3J0YW50O1xcbn1cXG5oMltkYXRhLXYtNTZhNmI4YzBdIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzc5Nzk3OTtcXG59XFxubWFpbi5jb250ZW50W2RhdGEtdi01NmE2YjhjMF0ge1xcbiAgcGFkZGluZzogMHB4IDBweCAzMnB4IDMwMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5hcHBsaWNhdGlvbiAuYXBwbGljYXRpb24tLXdyYXBbZGF0YS12LTU2YTZiOGMwXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiBhdXRvO1xcbn1cXG4uY2FyZF9fdGl0bGVbZGF0YS12LTU2YTZiOGMwXSB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRpdGxlX19pY29uW2RhdGEtdi01NmE2YjhjMF0ge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcbi5pbnB1dC1ncm91cF9fZGV0YWlscyAuaW5wdXQtZ3JvdXBfX2Vycm9yW2RhdGEtdi01NmE2YjhjMF0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1mbGV4OjA7XFxuICAgICAgLW1zLWZsZXg6bm9uZTtcXG4gICAgICAgICAgZmxleDpub25lO1xcbn1cXG4uYnV0dG9uc1tkYXRhLXYtNTZhNmI4YzBdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJvdXRlckVudGVyW2RhdGEtdi01NmE2YjhjMF0ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdXRlckVudGVyLWRhdGEtdi01NmE2YjhjMCAuNnM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcm91dGVyRW50ZXItZGF0YS12LTU2YTZiOGMwIC42cztcXG59XFxuLnJvdXRlckxlYXZlW2RhdGEtdi01NmE2YjhjMF0ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdXRlckxlYXZlLWRhdGEtdi01NmE2YjhjMCAuNnM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcm91dGVyTGVhdmUtZGF0YS12LTU2YTZiOGMwIC42cztcXG59XFxuLmJ1dHRvbkVudGVyW2RhdGEtdi01NmE2YjhjMF0ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkVudGVyLWRhdGEtdi01NmE2YjhjMCAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXItZGF0YS12LTU2YTZiOGMwIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG59XFxuLmJ1dHRvbkxlYXZlW2RhdGEtdi01NmE2YjhjMF0ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkxlYXZlLWRhdGEtdi01NmE2YjhjMCAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcbiAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlLWRhdGEtdi01NmE2YjhjMCAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyRW50ZXItZGF0YS12LTU2YTZiOGMwIHtcXG4wJSB7b3BhY2l0eTogMDtcXG59XFxuMTAwJSB7b3BhY2l0eTogMTtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm91dGVyRW50ZXItZGF0YS12LTU2YTZiOGMwIHtcXG4wJSB7b3BhY2l0eTogMDtcXG59XFxuMTAwJSB7b3BhY2l0eTogMTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJMZWF2ZS1kYXRhLXYtNTZhNmI4YzAge1xcbjAlIHtvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJMZWF2ZS1kYXRhLXYtNTZhNmI4YzAge1xcbjAlIHtvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAwO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkVudGVyLWRhdGEtdi01NmE2YjhjMCB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uRW50ZXItZGF0YS12LTU2YTZiOGMwIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkxlYXZlLWRhdGEtdi01NmE2YjhjMCB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uTGVhdmUtZGF0YS12LTU2YTZiOGMwIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStEQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7Q0FDQTtBQUNBOztFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7Q0FDQTtBQUVBO0VBQ0EsNkJBQUE7Q0FDQTtBQUVBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtDQUNBO0FBRUE7RUFDQSx1Q0FBQTtDQUNBO0FBR0E7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSx3QkFBQTtDQUNBO0FBRUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7Q0FDQTtBQUVBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO01BQUEsY0FBQTtVQUFBLFVBQUE7Q0FDQTtBQUVBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0NBQ0E7QUFDQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7Q0FDQTtBQUVBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtDQUNBO0FBRUE7RUFDQSxpRkFBQTtVQUFBLHlFQUFBO0NBQ0E7QUFFQTtFQUNBLHFGQUFBO1VBQUEsNkVBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiRGFzaGJvYXJkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2PlxcbiAgICA8IS0tINCR0L7QutC+0LLQsNGPINC/0LDQvdC10LvRjCDQvdCw0LLQs9Cw0YbQuNC4IC0tPlxcbiAgICA8di1uYXZpZ2F0aW9uLWRyYXdlclxcbiAgICAgIHBlcnNpc3RlbnRcXG4gICAgICA6bWluaS12YXJpYW50PVxcXCJtaW5pVmFyaWFudFxcXCJcXG4gICAgICA6Y2xpcHBlZD1cXFwiY2xpcHBlZFxcXCJcXG4gICAgICB2LW1vZGVsPVxcXCJkcmF3ZXJcXFwiXFxuICAgICAgZW5hYmxlLXJlc2l6ZS13YXRjaGVyXFxuICAgICAgZml4ZWRcXG4gICAgICBhcHBcXG4gICAgPlxcbiAgICA8di1saXN0IGRlbnNlPlxcbiAgICAgICAgPHYtbGlzdC10aWxlIHRvPVxcXCIvXFxcIj5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgICA8di1pY29uPmhvbWU8L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT7Qk9C70LDQstC90LDRjzwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgICAgICA8di1saXN0LXRpbGUgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlcyd9XFxcIj5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgICA8di1pY29uPmNvbnRhY3RfbWFpbDwvdi1pY29uPlxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPtCh0L7RgtGA0YPQtNC90LjQutC4PC92LWxpc3QtdGlsZS10aXRsZT5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgPC92LWxpc3QtdGlsZT5cXG4gICAgICA8L3YtbGlzdD5cXG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPlxcbiAgICA8IS0tINCe0YHQvdC+0LLQvdC+0Lkg0LrQvtC90YLQtdC90YIgLS0+XFxuICAgIDx2LWNvbnRlbnQ+IFxcbiAgICAgIDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XFxcInJvdXRlckVudGVyXFxcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XFxcInJvdXRlckxlYXZlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcbiAgICAgICAgPHJvdXRlci12aWV3Lz5cXG4gICAgICA8L3RyYW5zaXRpb24+XFxuICAgIDwvdi1jb250ZW50PiBcXG4gICAgPCEtLSDQpNGD0YLQtdGAIC0tPlxcbiAgICA8di1mb290ZXIgOmZpeGVkPVxcXCJmaXhlZFxcXCIgYXBwPlxcblxcbiAgICA8L3YtZm9vdGVyPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgY2xpcHBlZDogdHJ1ZSxcXG4gICAgICBkcmF3ZXI6IHRydWUsXFxuICAgICAgZml4ZWQ6IHRydWUsXFxuICAgICAgaXRlbXM6IFt7XFxuICAgICAgICBpY29uOiAnYnViYmxlX2NoYXJ0JyxcXG4gICAgICAgIHRpdGxlOiAn0JPQu9Cw0LLQvdCw0Y8nXFxuICAgICAgfV0sXFxuICAgICAgbWluaVZhcmlhbnQ6IGZhbHNlXFxuICAgIH1cXG4gIH0sXFxuICBuYW1lOiAnQXBwJ1xcbn1cXG48L3NjcmlwdD5cXG5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiAgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgcGFkZGluZy10b3A6IDY1cHggIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcbiAgfVxcblxcbiAgbWFpbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMHB4IDBweCAzMnB4IDMwMHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICBcXG5cXG4gIC5hcHBsaWNhdGlvbiAuYXBwbGljYXRpb24tLXdyYXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAuY2FyZF9fdGl0bGUge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC50aXRsZV9faWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxuICB9XFxuXFxuICAuaW5wdXQtZ3JvdXBfX2RldGFpbHMgLmlucHV0LWdyb3VwX19lcnJvciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbGV4Om5vbmU7XFxuICB9XFxuICBcXG4gIC5idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLnJvdXRlckVudGVyIHtcXG4gICAgYW5pbWF0aW9uOiByb3V0ZXJFbnRlciAuNnM7XFxuICB9XFxuXFxuICAucm91dGVyTGVhdmUge1xcbiAgICBhbmltYXRpb246IHJvdXRlckxlYXZlIC42cztcXG4gIH1cXG5cXG4gIC5idXR0b25FbnRlciB7XFxuICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXIgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xcbiAgfVxcblxcbiAgLmJ1dHRvbkxlYXZlIHtcXG4gICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XFxuICAgIDAlIHtvcGFjaXR5OiAwO31cXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXG4gICAgMCUge29wYWNpdHk6IDE7fVxcbiAgICAxMDAlIHtvcGFjaXR5OiAwO31cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XFxuICB9XFxuIFxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTU2YTZiOGMwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcGVyc2lzdGVudDogXCJcIixcbiAgICAgICAgICAgIFwibWluaS12YXJpYW50XCI6IF92bS5taW5pVmFyaWFudCxcbiAgICAgICAgICAgIGNsaXBwZWQ6IF92bS5jbGlwcGVkLFxuICAgICAgICAgICAgXCJlbmFibGUtcmVzaXplLXdhdGNoZXJcIjogXCJcIixcbiAgICAgICAgICAgIGZpeGVkOiBcIlwiLFxuICAgICAgICAgICAgYXBwOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kcmF3ZXIsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kcmF3ZXIgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRyYXdlclwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBkZW5zZTogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi9cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIiwgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJob21lXCIpXSldLCAxKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtfdm0uX3YoXCLQk9C70LDQstC90LDRj1wiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImVtcGxveWVlc1wiIH0gfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImNvbnRhY3RfbWFpbFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtfdm0uX3YoXCLQodC+0YLRgNGD0LTQvdC40LrQuFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRlbnRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJyb3V0ZXJFbnRlclwiLFxuICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwicm91dGVyTGVhdmVcIixcbiAgICAgICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJyb3V0ZXItdmlld1wiKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1mb290ZXJcIiwgeyBhdHRyczogeyBmaXhlZDogX3ZtLmZpeGVkLCBhcHA6IFwiXCIgfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTU2YTZiOGMwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01NmE2YjhjMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDhcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sInNvdXJjZVJvb3QiOiIifQ==