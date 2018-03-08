webpackJsonp([5],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(186)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(170)
/* template */
var __vue_template__ = __webpack_require__(188)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74dfe770"
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
Component.options.__file = "resources\\assets\\js\\pages\\settings\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74dfe770", Component.options)
  } else {
    hotAPI.reload("data-v-74dfe770", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  middleware: 'auth',
  data: function data() {
    return {
      dark: true,
      right: null
    };
  },

  computed: {
    // ...mapGetters({
    //   user: 'auth/user',
    //   theme: 'theme/dark'
    // }),
    tabs: function tabs() {
      return [{
        id: 0,
        icon: 'person',
        name: this.$t('profile'),
        route: 'settings.profile'
      }, {
        id: 1,
        icon: 'lock',
        name: this.$t('password'),
        route: 'settings.password'
      }];
    }
  },
  watch: {
    dark: function dark() {
      alert(this.theme);
    }
  },
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    switchTheme: 'theme/switchTheme'
  }))
});

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("aeb956b0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74dfe770\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74dfe770\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.settings-card .card-body[data-v-74dfe770] {\n  padding: 0;\n}\n.settings__content[data-v-74dfe770] {\n  display: inline-block;\n  width: 70%;\n  max-width: 890px;\n  margin: 20px 0 0 40px;\n}\n.navigation-drawer[data-v-74dfe770] {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 20px !important;\n  padding-bottom: 0;\n}\n.input-group--selection-controls[data-v-74dfe770] {\n  padding: 0 16px;\n}\n.card[data-v-74dfe770] {\n  padding: 30px;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/settings/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AAwFA;EACA,WAAA;CACA;AAEA;EACA,sBAAA;EACA,WAAA;EACA,iBAAA;EACA,sBAAA;CACA;AAEA;EACA,sBAAA;EACA,oBAAA;EACA,4BAAA;EACA,kBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,cAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div>\n    <v-navigation-drawer stateless permanent floating value=\"true\">\n      <v-toolbar flat class=\"transparent\">\n        <v-list class=\"pa-0\">\n          <v-list-tile avatar>\n            <v-list-tile-avatar>\n              <img :src=\"user.photo_url\">\n            </v-list-tile-avatar>\n            <v-list-tile-content>\n              <v-list-tile-title>{{ user.name }}</v-list-tile-title>\n            </v-list-tile-content>\n          </v-list-tile>\n        </v-list>\n      </v-toolbar>\n      <v-list dense class=\"pt-0\">\n        <v-divider></v-divider>\n        <v-list-tile v-for=\"tab in tabs\" :key=\"tab.id\" :to=\"{ name: tab.route }\">\n          <v-list-tile-action>\n            <v-icon>{{ tab.icon }}</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>{{ tab.name }}</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </v-list>\n    <div id=\"theme-switcher\">\n      <v-switch\n        :label=\"'Темная тема'\"\n        v-model=\"dark\"\n      ></v-switch>\n    </div> \n    </v-navigation-drawer>\n    <div class=\"settings__content card\">\n      <transition name=\"fade\" mode=\"out-in\">\n        <router-view/>\n      </transition>\n    </div>\n  </div>    \n\n</template>\n\n<script>\nimport { mapGetters, mapActions } from 'vuex';\n\nexport default {\n  middleware: 'auth',\n  data () {\n    return {\n      dark: true,\n      right: null\n    }\n  },\n  computed: {\n    // ...mapGetters({\n    //   user: 'auth/user',\n    //   theme: 'theme/dark'\n    // }),\n    tabs () {\n      return [\n        {\n          id: 0,\n          icon: 'person',\n          name: this.$t('profile'),\n          route: 'settings.profile'\n        },\n        {\n          id: 1,\n          icon: 'lock',\n          name: this.$t('password'),\n          route: 'settings.password'\n        }\n      ]\n    }\n  },\n  watch: {\n    dark() {\n      alert(this.theme)\n    }\n  },\n  methods: {\n    ...mapActions({\n      switchTheme: 'theme/switchTheme'\n    })\n  }\n}\n</script>\n\n<style scoped>\n.settings-card .card-body {\n  padding: 0;\n}\n\n.settings__content {\n  display: inline-block;\n  width: 70%;\n  max-width: 890px;\n  margin: 20px 0 0 40px;\n}\n\n.navigation-drawer {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 20px !important;\n  padding-bottom: 0;\n}\n\n.input-group--selection-controls {\n  padding: 0 16px;\n}\n\n.card {\n  padding: 30px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 188:
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
          attrs: { stateless: "", permanent: "", floating: "", value: "true" }
        },
        [
          _c(
            "v-toolbar",
            { staticClass: "transparent", attrs: { flat: "" } },
            [
              _c(
                "v-list",
                { staticClass: "pa-0" },
                [
                  _c(
                    "v-list-tile",
                    { attrs: { avatar: "" } },
                    [
                      _c("v-list-tile-avatar", [
                        _c("img", { attrs: { src: _vm.user.photo_url } })
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _vm._v(_vm._s(_vm.user.name))
                          ])
                        ],
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
            "v-list",
            { staticClass: "pt-0", attrs: { dense: "" } },
            [
              _c("v-divider"),
              _vm._v(" "),
              _vm._l(_vm.tabs, function(tab) {
                return _c(
                  "v-list-tile",
                  { key: tab.id, attrs: { to: { name: tab.route } } },
                  [
                    _c(
                      "v-list-tile-action",
                      [_c("v-icon", [_vm._v(_vm._s(tab.icon))])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-tile-content",
                      [_c("v-list-tile-title", [_vm._v(_vm._s(tab.name))])],
                      1
                    )
                  ],
                  1
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { id: "theme-switcher" } },
            [
              _c("v-switch", {
                attrs: { label: "Темная тема" },
                model: {
                  value: _vm.dark,
                  callback: function($$v) {
                    _vm.dark = $$v
                  },
                  expression: "dark"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "settings__content card" },
        [
          _c(
            "transition",
            { attrs: { name: "fade", mode: "out-in" } },
            [_c("router-view")],
            1
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-74dfe770", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWU/YTJmMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT85N2JlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlP2M1NDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBcU07QUFDck07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQWtMO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQTtjQUVBO3dCQUNBOztZQUVBO2FBRUE7QUFIQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTswQkFDQTs7WUFHQTtjQUNBO3NCQUNBO2VBRUE7QUFMQSxPQURBO1lBUUE7Y0FDQTtzQkFDQTtlQUdBO0FBTkE7QUFRQTtBQXJCQTs7MEJBdUJBO2lCQUNBO0FBRUE7QUFKQTtBQUtBO2lCQUlBO0FBSEE7QUFwQ0EsRzs7Ozs7OztBQzdDQTs7QUFFQTtBQUNBLHFDQUF3TztBQUN4TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGlGQUFpRjtBQUN2TywrSkFBK0osaUZBQWlGO0FBQ2hQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHVFQUF3RSxlQUFlLEdBQUcsdUNBQXVDLDBCQUEwQixlQUFlLHFCQUFxQiwwQkFBMEIsR0FBRyx1Q0FBdUMsMEJBQTBCLHdCQUF3QixnQ0FBZ0Msc0JBQXNCLEdBQUcscURBQXFELG9CQUFvQixHQUFHLDBCQUEwQixrQkFBa0IsR0FBRyxVQUFVLHlKQUF5SixNQUFNLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsK2FBQSthLGFBQWEsbVFBQW1RLGtCQUFrQiwyREFBMkQsWUFBWSw4R0FBOEcsWUFBWSxvZEFBb2QseUJBQXlCLGFBQWEsb0JBQW9CLG9DQUFvQyxjQUFjLDZDQUE2QyxLQUFLLGdCQUFnQix3QkFBd0IscUVBQXFFLGlCQUFpQiwyQkFBMkIsa0lBQWtJLFlBQVksa0lBQWtJLGdCQUFnQixLQUFLLGFBQWEsY0FBYyxnQ0FBZ0MsS0FBSyxlQUFlLHFCQUFxQiwrQ0FBK0MsTUFBTSxHQUFHLDBEQUEwRCxlQUFlLEdBQUcsd0JBQXdCLDBCQUEwQixlQUFlLHFCQUFxQiwwQkFBMEIsR0FBRyx3QkFBd0IsMEJBQTBCLHdCQUF3QixnQ0FBZ0Msc0JBQXNCLEdBQUcsc0NBQXNDLG9CQUFvQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsK0JBQStCOztBQUU1MEc7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDLFdBQVcsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLGFBQWEsRUFBRTtBQUM3QztBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsMEJBQTBCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOEJBQThCLFlBQVksRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCLE1BQU0sa0JBQWtCLEVBQUUsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLHVCQUF1QixFQUFFO0FBQy9DO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3Q0FBd0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLCtCQUErQixFQUFFO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy81LjQ2YTkxYzBlNjVlNTYwOTRkMWYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTc0ZGZlNzcwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcc2V0dGluZ3NcXFxcaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc0ZGZlNzcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzRkZmU3NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyIHN0YXRlbGVzcyBwZXJtYW5lbnQgZmxvYXRpbmcgdmFsdWU9XCJ0cnVlXCI+XG4gICAgICA8di10b29sYmFyIGZsYXQgY2xhc3M9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgICA8di1saXN0IGNsYXNzPVwicGEtMFwiPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZSBhdmF0YXI+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtYXZhdGFyPlxuICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJ1c2VyLnBob3RvX3VybFwiPlxuICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1hdmF0YXI+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHVzZXIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgICAgPC92LWxpc3Q+XG4gICAgICA8L3YtdG9vbGJhcj5cbiAgICAgIDx2LWxpc3QgZGVuc2UgY2xhc3M9XCJwdC0wXCI+XG4gICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgIDx2LWxpc3QtdGlsZSB2LWZvcj1cInRhYiBpbiB0YWJzXCIgOmtleT1cInRhYi5pZFwiIDp0bz1cInsgbmFtZTogdGFiLnJvdXRlIH1cIj5cbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgICAgPHYtaWNvbj57eyB0YWIuaWNvbiB9fTwvdi1pY29uPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHRhYi5uYW1lIH19PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgICA8L3YtbGlzdD5cbiAgICA8ZGl2IGlkPVwidGhlbWUtc3dpdGNoZXJcIj5cbiAgICAgIDx2LXN3aXRjaFxuICAgICAgICA6bGFiZWw9XCIn0KLQtdC80L3QsNGPINGC0LXQvNCwJ1wiXG4gICAgICAgIHYtbW9kZWw9XCJkYXJrXCJcbiAgICAgID48L3Ytc3dpdGNoPlxuICAgIDwvZGl2PiBcbiAgICA8L3YtbmF2aWdhdGlvbi1kcmF3ZXI+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzX19jb250ZW50IGNhcmRcIj5cbiAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCIgbW9kZT1cIm91dC1pblwiPlxuICAgICAgICA8cm91dGVyLXZpZXcvPlxuICAgICAgPC90cmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4gICAgXG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlkZGxld2FyZTogJ2F1dGgnLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGFyazogdHJ1ZSxcbiAgICAgIHJpZ2h0OiBudWxsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC8vIC4uLm1hcEdldHRlcnMoe1xuICAgIC8vICAgdXNlcjogJ2F1dGgvdXNlcicsXG4gICAgLy8gICB0aGVtZTogJ3RoZW1lL2RhcmsnXG4gICAgLy8gfSksXG4gICAgdGFicyAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgaWNvbjogJ3BlcnNvbicsXG4gICAgICAgICAgbmFtZTogdGhpcy4kdCgncHJvZmlsZScpLFxuICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucHJvZmlsZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIGljb246ICdsb2NrJyxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwYXNzd29yZCcpLFxuICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucGFzc3dvcmQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgZGFyaygpIHtcbiAgICAgIGFsZXJ0KHRoaXMudGhlbWUpXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyh7XG4gICAgICBzd2l0Y2hUaGVtZTogJ3RoZW1lL3N3aXRjaFRoZW1lJ1xuICAgIH0pXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnNldHRpbmdzLWNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zZXR0aW5nc19fY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiA4OTBweDtcbiAgbWFyZ2luOiAyMHB4IDAgMCA0MHB4O1xufVxuXG4ubmF2aWdhdGlvbi1kcmF3ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pbnB1dC1ncm91cC0tc2VsZWN0aW9uLWNvbnRyb2xzIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhZWI5NTZiMFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03NGRmZTc3MFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2V0dGluZ3MtY2FyZCAuY2FyZC1ib2R5W2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuLnNldHRpbmdzX19jb250ZW50W2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1heC13aWR0aDogODkwcHg7XFxuICBtYXJnaW46IDIwcHggMCAwIDQwcHg7XFxufVxcbi5uYXZpZ2F0aW9uLWRyYXdlcltkYXRhLXYtNzRkZmU3NzBdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmlucHV0LWdyb3VwLS1zZWxlY3Rpb24tY29udHJvbHNbZGF0YS12LTc0ZGZlNzcwXSB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcbi5jYXJkW2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBd0ZBO0VBQ0EsV0FBQTtDQUNBO0FBRUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0NBQ0E7QUFFQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLGdCQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiaW5kZXgudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXY+XFxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyIHN0YXRlbGVzcyBwZXJtYW5lbnQgZmxvYXRpbmcgdmFsdWU9XFxcInRydWVcXFwiPlxcbiAgICAgIDx2LXRvb2xiYXIgZmxhdCBjbGFzcz1cXFwidHJhbnNwYXJlbnRcXFwiPlxcbiAgICAgICAgPHYtbGlzdCBjbGFzcz1cXFwicGEtMFxcXCI+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZSBhdmF0YXI+XFxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLWF2YXRhcj5cXG4gICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwidXNlci5waG90b191cmxcXFwiPlxcbiAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHVzZXIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICAgICAgPC92LWxpc3Q+XFxuICAgICAgPC92LXRvb2xiYXI+XFxuICAgICAgPHYtbGlzdCBkZW5zZSBjbGFzcz1cXFwicHQtMFxcXCI+XFxuICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcbiAgICAgICAgPHYtbGlzdC10aWxlIHYtZm9yPVxcXCJ0YWIgaW4gdGFic1xcXCIgOmtleT1cXFwidGFiLmlkXFxcIiA6dG89XFxcInsgbmFtZTogdGFiLnJvdXRlIH1cXFwiPlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICAgIDx2LWljb24+e3sgdGFiLmljb24gfX08L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyB0YWIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgICAgPC92LWxpc3Q+XFxuICAgIDxkaXYgaWQ9XFxcInRoZW1lLXN3aXRjaGVyXFxcIj5cXG4gICAgICA8di1zd2l0Y2hcXG4gICAgICAgIDpsYWJlbD1cXFwiJ9Ci0LXQvNC90LDRjyDRgtC10LzQsCdcXFwiXFxuICAgICAgICB2LW1vZGVsPVxcXCJkYXJrXFxcIlxcbiAgICAgID48L3Ytc3dpdGNoPlxcbiAgICA8L2Rpdj4gXFxuICAgIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NvbnRlbnQgY2FyZFxcXCI+XFxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cXFwiZmFkZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXG4gICAgICAgIDxyb3V0ZXItdmlldy8+XFxuICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PiAgICBcXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG1pZGRsZXdhcmU6ICdhdXRoJyxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGRhcms6IHRydWUsXFxuICAgICAgcmlnaHQ6IG51bGxcXG4gICAgfVxcbiAgfSxcXG4gIGNvbXB1dGVkOiB7XFxuICAgIC8vIC4uLm1hcEdldHRlcnMoe1xcbiAgICAvLyAgIHVzZXI6ICdhdXRoL3VzZXInLFxcbiAgICAvLyAgIHRoZW1lOiAndGhlbWUvZGFyaydcXG4gICAgLy8gfSksXFxuICAgIHRhYnMgKCkge1xcbiAgICAgIHJldHVybiBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGlkOiAwLFxcbiAgICAgICAgICBpY29uOiAncGVyc29uJyxcXG4gICAgICAgICAgbmFtZTogdGhpcy4kdCgncHJvZmlsZScpLFxcbiAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnByb2ZpbGUnXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBpZDogMSxcXG4gICAgICAgICAgaWNvbjogJ2xvY2snLFxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwYXNzd29yZCcpLFxcbiAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnBhc3N3b3JkJ1xcbiAgICAgICAgfVxcbiAgICAgIF1cXG4gICAgfVxcbiAgfSxcXG4gIHdhdGNoOiB7XFxuICAgIGRhcmsoKSB7XFxuICAgICAgYWxlcnQodGhpcy50aGVtZSlcXG4gICAgfVxcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgLi4ubWFwQWN0aW9ucyh7XFxuICAgICAgc3dpdGNoVGhlbWU6ICd0aGVtZS9zd2l0Y2hUaGVtZSdcXG4gICAgfSlcXG4gIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4uc2V0dGluZ3MtY2FyZCAuY2FyZC1ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zZXR0aW5nc19fY29udGVudCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgbWF4LXdpZHRoOiA4OTBweDtcXG4gIG1hcmdpbjogMjBweCAwIDAgNDBweDtcXG59XFxuXFxuLm5hdmlnYXRpb24tZHJhd2VyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLmlucHV0LWdyb3VwLS1zZWxlY3Rpb24tY29udHJvbHMge1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03NGRmZTc3MFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBzdGF0ZWxlc3M6IFwiXCIsIHBlcm1hbmVudDogXCJcIiwgZmxvYXRpbmc6IFwiXCIsIHZhbHVlOiBcInRydWVcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRyYW5zcGFyZW50XCIsIGF0dHJzOiB7IGZsYXQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGEtMFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhdmF0YXI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS1hdmF0YXJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS51c2VyLnBob3RvX3VybCB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwdC0wXCIsIGF0dHJzOiB7IGRlbnNlOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGFicywgZnVuY3Rpb24odGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHRhYi5pZCwgYXR0cnM6IHsgdG86IHsgbmFtZTogdGFiLnJvdXRlIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KF92bS5fcyh0YWIuaWNvbikpXSldLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW192bS5fdihfdm0uX3ModGFiLm5hbWUpKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBpZDogXCJ0aGVtZS1zd2l0Y2hlclwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXN3aXRjaFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0KLQtdC80L3QsNGPINGC0LXQvNCwXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXJrLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uZGFyayA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGFya1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3NfX2NvbnRlbnQgY2FyZFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiwgbW9kZTogXCJvdXQtaW5cIiB9IH0sXG4gICAgICAgICAgICBbX2MoXCJyb3V0ZXItdmlld1wiKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzRkZmU3NzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTc0ZGZlNzcwXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=