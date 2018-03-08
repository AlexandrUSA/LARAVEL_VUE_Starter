webpackJsonp([15],{

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
      dark: null,
      right: null
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/user',
    theme: 'theme/dark'
  }), {
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
    },
    image: function image() {
      return this.user ? this.user.photo_url : false;
    }
  }),
  created: function created() {
    this.dark = this.theme;
  },

  watch: {
    dark: function dark() {
      this.switchTheme(this.dark);
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
exports.push([module.i, "\n.settings-card .card-body[data-v-74dfe770] {\n  padding: 0;\n}\n.settings__content[data-v-74dfe770] {\n  display: inline-block;\n  width: 70%;\n  max-width: 890px;\n  margin: 20px 0 0 40px;\n}\n.navigation-drawer[data-v-74dfe770] {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 20px !important;\n  padding-bottom: 0;\n}\n.input-group--selection-controls[data-v-74dfe770] {\n  padding: 0 16px;\n}\n.card[data-v-74dfe770] {\n  padding: 30px;\n}\n.user-settings[data-v-74dfe770] {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/settings/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AA8FA;EACA,WAAA;CACA;AAEA;EACA,sBAAA;EACA,WAAA;EACA,iBAAA;EACA,sBAAA;CACA;AAEA;EACA,sBAAA;EACA,oBAAA;EACA,4BAAA;EACA,kBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EAEA,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class = \"user-settings\">\n    <v-navigation-drawer stateless permanent floating value=\"true\">\n      <v-toolbar flat class=\"transparent\">\n        <v-list class=\"pa-0\">\n          <v-list-tile avatar>\n            <v-list-tile-avatar>\n              <img :src=\"user.photo_url\">\n            </v-list-tile-avatar>\n            <v-list-tile-content>\n              <v-list-tile-title>{{ user.name }}</v-list-tile-title>\n            </v-list-tile-content>\n          </v-list-tile>\n        </v-list>\n      </v-toolbar>\n      <v-list dense class=\"pt-0\">\n        <v-divider></v-divider>\n        <v-list-tile v-for=\"tab in tabs\" :key=\"tab.id\" :to=\"{ name: tab.route }\">\n          <v-list-tile-action>\n            <v-icon>{{ tab.icon }}</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>{{ tab.name }}</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </v-list>\n    <div id=\"theme-switcher\">\n      <v-switch\n        :label=\"'Темная тема'\"\n        v-model=\"dark\"\n      ></v-switch>\n    </div> \n    </v-navigation-drawer>\n    <div class=\"settings__content card\">\n      <transition name=\"fade\" mode=\"out-in\">\n        <router-view/>\n      </transition>\n    </div>\n  </div>    \n\n</template>\n\n<script>\nimport { mapGetters, mapActions } from 'vuex';\n\nexport default {\n  middleware: 'auth',\n  data () {\n    return {\n      dark: null,\n      right: null\n    }\n  },\n  computed: {\n    ...mapGetters({\n      user: 'auth/user',\n      theme: 'theme/dark'\n    }),\n    tabs () {\n      return [\n        {\n          id: 0,\n          icon: 'person',\n          name: this.$t('profile'),\n          route: 'settings.profile'\n        },\n        {\n          id: 1,\n          icon: 'lock',\n          name: this.$t('password'),\n          route: 'settings.password'\n        }\n      ]\n    },\n    image() {\n      return (this.user) ? this.user.photo_url : false;\n    }\n  },\n  created() {\n    this.dark = this.theme;\n  },\n  watch: {\n    dark() {\n      this.switchTheme(this.dark)\n    }\n  },\n  methods: {\n    ...mapActions({\n      switchTheme: 'theme/switchTheme'\n    })\n  }\n}\n</script>\n\n<style scoped>\n.settings-card .card-body {\n  padding: 0;\n}\n\n.settings__content {\n  display: inline-block;\n  width: 70%;\n  max-width: 890px;\n  margin: 20px 0 0 40px;\n}\n\n.navigation-drawer {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 20px !important;\n  padding-bottom: 0;\n}\n\n.input-group--selection-controls {\n  padding: 0 16px;\n}\n\n.card {\n  padding: 30px;\n}\n\n.user-settings {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  justify-content: center;\n}\n</style>\n"],"sourceRoot":""}]);

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
    { staticClass: "user-settings" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWU/YTJmMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT85N2JlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlP2M1NDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBcU07QUFDck07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQWtMO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQTtjQUVBO3dCQUNBOztZQUVBO2FBRUE7QUFIQTtBQUlBOztBQUNBO1VBRUE7V0FFQTtBQUhBOzBCQUlBOztZQUdBO2NBQ0E7c0JBQ0E7ZUFFQTtBQUxBLE9BREE7WUFRQTtjQUNBO3NCQUNBO2VBR0E7QUFOQTtBQU9BOzRCQUNBOytDQUNBO0FBRUE7OzhCQUNBO3FCQUNBO0FBQ0E7OzswQkFFQTs0QkFDQTtBQUVBO0FBSkE7QUFLQTtpQkFJQTtBQUhBO0FBMUNBLEc7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Q0E7QUFDQTtBQUNBLGFBQWEsU0FBUywrQkFBK0IsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTUuYzVlYjFhOTg4NjBkYTIxNzZjNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzRkZmU3NzBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNzRkZmU3NzBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxzZXR0aW5nc1xcXFxpbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzRkZmU3NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NGRmZTc3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDE1IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzID0gXCJ1c2VyLXNldHRpbmdzXCI+XG4gICAgPHYtbmF2aWdhdGlvbi1kcmF3ZXIgc3RhdGVsZXNzIHBlcm1hbmVudCBmbG9hdGluZyB2YWx1ZT1cInRydWVcIj5cbiAgICAgIDx2LXRvb2xiYXIgZmxhdCBjbGFzcz1cInRyYW5zcGFyZW50XCI+XG4gICAgICAgIDx2LWxpc3QgY2xhc3M9XCJwYS0wXCI+XG4gICAgICAgICAgPHYtbGlzdC10aWxlIGF2YXRhcj5cbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1hdmF0YXI+XG4gICAgICAgICAgICAgIDxpbWcgOnNyYz1cInVzZXIucGhvdG9fdXJsXCI+XG4gICAgICAgICAgICA8L3YtbGlzdC10aWxlLWF2YXRhcj5cbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdXNlci5uYW1lIH19PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgICA8L3YtbGlzdD5cbiAgICAgIDwvdi10b29sYmFyPlxuICAgICAgPHYtbGlzdCBkZW5zZSBjbGFzcz1cInB0LTBcIj5cbiAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cbiAgICAgICAgPHYtbGlzdC10aWxlIHYtZm9yPVwidGFiIGluIHRhYnNcIiA6a2V5PVwidGFiLmlkXCIgOnRvPVwieyBuYW1lOiB0YWIucm91dGUgfVwiPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgICA8di1pY29uPnt7IHRhYi5pY29uIH19PC92LWljb24+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdGFiLm5hbWUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgIDwvdi1saXN0PlxuICAgIDxkaXYgaWQ9XCJ0aGVtZS1zd2l0Y2hlclwiPlxuICAgICAgPHYtc3dpdGNoXG4gICAgICAgIDpsYWJlbD1cIifQotC10LzQvdCw0Y8g0YLQtdC80LAnXCJcbiAgICAgICAgdi1tb2RlbD1cImRhcmtcIlxuICAgICAgPjwvdi1zd2l0Y2g+XG4gICAgPC9kaXY+IFxuICAgIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3NfX2NvbnRlbnQgY2FyZFwiPlxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIiBtb2RlPVwib3V0LWluXCI+XG4gICAgICAgIDxyb3V0ZXItdmlldy8+XG4gICAgICA8L3RyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PiAgICBcblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWRkbGV3YXJlOiAnYXV0aCcsXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXJrOiBudWxsLFxuICAgICAgcmlnaHQ6IG51bGxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICB1c2VyOiAnYXV0aC91c2VyJyxcbiAgICAgIHRoZW1lOiAndGhlbWUvZGFyaydcbiAgICB9KSxcbiAgICB0YWJzICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMCxcbiAgICAgICAgICBpY29uOiAncGVyc29uJyxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwcm9maWxlJyksXG4gICAgICAgICAgcm91dGU6ICdzZXR0aW5ncy5wcm9maWxlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgaWNvbjogJ2xvY2snLFxuICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Bhc3N3b3JkJyksXG4gICAgICAgICAgcm91dGU6ICdzZXR0aW5ncy5wYXNzd29yZCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgaW1hZ2UoKSB7XG4gICAgICByZXR1cm4gKHRoaXMudXNlcikgPyB0aGlzLnVzZXIucGhvdG9fdXJsIDogZmFsc2U7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZGFyayA9IHRoaXMudGhlbWU7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgZGFyaygpIHtcbiAgICAgIHRoaXMuc3dpdGNoVGhlbWUodGhpcy5kYXJrKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoe1xuICAgICAgc3dpdGNoVGhlbWU6ICd0aGVtZS9zd2l0Y2hUaGVtZSdcbiAgICB9KVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5zZXR0aW5ncy1jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2V0dGluZ3NfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA3MCU7XG4gIG1heC13aWR0aDogODkwcHg7XG4gIG1hcmdpbjogMjBweCAwIDAgNDBweDtcbn1cblxuLm5hdmlnYXRpb24tZHJhd2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAtLXNlbGVjdGlvbi1jb250cm9scyB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4udXNlci1zZXR0aW5ncyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgZGlzcGxheTogLW8tZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhZWI5NTZiMFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03NGRmZTc3MFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNldHRpbmdzLWNhcmQgLmNhcmQtYm9keVtkYXRhLXYtNzRkZmU3NzBdIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5zZXR0aW5nc19fY29udGVudFtkYXRhLXYtNzRkZmU3NzBdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXgtd2lkdGg6IDg5MHB4O1xcbiAgbWFyZ2luOiAyMHB4IDAgMCA0MHB4O1xcbn1cXG4ubmF2aWdhdGlvbi1kcmF3ZXJbZGF0YS12LTc0ZGZlNzcwXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5pbnB1dC1ncm91cC0tc2VsZWN0aW9uLWNvbnRyb2xzW2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG4uY2FyZFtkYXRhLXYtNzRkZmU3NzBdIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi51c2VyLXNldHRpbmdzW2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgZGlzcGxheTogLW1vei1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXg7XFxuICBkaXNwbGF5OiAtby1mbGV4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOEZBO0VBQ0EsV0FBQTtDQUNBO0FBRUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0NBQ0E7QUFFQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLGdCQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7Q0FDQTtBQUVBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGNBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsd0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiaW5kZXgudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3MgPSBcXFwidXNlci1zZXR0aW5nc1xcXCI+XFxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyIHN0YXRlbGVzcyBwZXJtYW5lbnQgZmxvYXRpbmcgdmFsdWU9XFxcInRydWVcXFwiPlxcbiAgICAgIDx2LXRvb2xiYXIgZmxhdCBjbGFzcz1cXFwidHJhbnNwYXJlbnRcXFwiPlxcbiAgICAgICAgPHYtbGlzdCBjbGFzcz1cXFwicGEtMFxcXCI+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZSBhdmF0YXI+XFxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLWF2YXRhcj5cXG4gICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwidXNlci5waG90b191cmxcXFwiPlxcbiAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHVzZXIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICAgICAgPC92LWxpc3Q+XFxuICAgICAgPC92LXRvb2xiYXI+XFxuICAgICAgPHYtbGlzdCBkZW5zZSBjbGFzcz1cXFwicHQtMFxcXCI+XFxuICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcbiAgICAgICAgPHYtbGlzdC10aWxlIHYtZm9yPVxcXCJ0YWIgaW4gdGFic1xcXCIgOmtleT1cXFwidGFiLmlkXFxcIiA6dG89XFxcInsgbmFtZTogdGFiLnJvdXRlIH1cXFwiPlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICAgIDx2LWljb24+e3sgdGFiLmljb24gfX08L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyB0YWIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgICAgPC92LWxpc3Q+XFxuICAgIDxkaXYgaWQ9XFxcInRoZW1lLXN3aXRjaGVyXFxcIj5cXG4gICAgICA8di1zd2l0Y2hcXG4gICAgICAgIDpsYWJlbD1cXFwiJ9Ci0LXQvNC90LDRjyDRgtC10LzQsCdcXFwiXFxuICAgICAgICB2LW1vZGVsPVxcXCJkYXJrXFxcIlxcbiAgICAgID48L3Ytc3dpdGNoPlxcbiAgICA8L2Rpdj4gXFxuICAgIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NvbnRlbnQgY2FyZFxcXCI+XFxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cXFwiZmFkZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXG4gICAgICAgIDxyb3V0ZXItdmlldy8+XFxuICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PiAgICBcXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG1pZGRsZXdhcmU6ICdhdXRoJyxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGRhcms6IG51bGwsXFxuICAgICAgcmlnaHQ6IG51bGxcXG4gICAgfVxcbiAgfSxcXG4gIGNvbXB1dGVkOiB7XFxuICAgIC4uLm1hcEdldHRlcnMoe1xcbiAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxcbiAgICAgIHRoZW1lOiAndGhlbWUvZGFyaydcXG4gICAgfSksXFxuICAgIHRhYnMgKCkge1xcbiAgICAgIHJldHVybiBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGlkOiAwLFxcbiAgICAgICAgICBpY29uOiAncGVyc29uJyxcXG4gICAgICAgICAgbmFtZTogdGhpcy4kdCgncHJvZmlsZScpLFxcbiAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnByb2ZpbGUnXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBpZDogMSxcXG4gICAgICAgICAgaWNvbjogJ2xvY2snLFxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwYXNzd29yZCcpLFxcbiAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnBhc3N3b3JkJ1xcbiAgICAgICAgfVxcbiAgICAgIF1cXG4gICAgfSxcXG4gICAgaW1hZ2UoKSB7XFxuICAgICAgcmV0dXJuICh0aGlzLnVzZXIpID8gdGhpcy51c2VyLnBob3RvX3VybCA6IGZhbHNlO1xcbiAgICB9XFxuICB9LFxcbiAgY3JlYXRlZCgpIHtcXG4gICAgdGhpcy5kYXJrID0gdGhpcy50aGVtZTtcXG4gIH0sXFxuICB3YXRjaDoge1xcbiAgICBkYXJrKCkge1xcbiAgICAgIHRoaXMuc3dpdGNoVGhlbWUodGhpcy5kYXJrKVxcbiAgICB9XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICAuLi5tYXBBY3Rpb25zKHtcXG4gICAgICBzd2l0Y2hUaGVtZTogJ3RoZW1lL3N3aXRjaFRoZW1lJ1xcbiAgICB9KVxcbiAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi5zZXR0aW5ncy1jYXJkIC5jYXJkLWJvZHkge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNldHRpbmdzX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXgtd2lkdGg6IDg5MHB4O1xcbiAgbWFyZ2luOiAyMHB4IDAgMCA0MHB4O1xcbn1cXG5cXG4ubmF2aWdhdGlvbi1kcmF3ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtLXNlbGVjdGlvbi1jb250cm9scyB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi51c2VyLXNldHRpbmdzIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzRkZmU3NzBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE1IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1zZXR0aW5nc1wiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1uYXZpZ2F0aW9uLWRyYXdlclwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgc3RhdGVsZXNzOiBcIlwiLCBwZXJtYW5lbnQ6IFwiXCIsIGZsb2F0aW5nOiBcIlwiLCB2YWx1ZTogXCJ0cnVlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0cmFuc3BhcmVudFwiLCBhdHRyczogeyBmbGF0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhLTBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYXZhdGFyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtYXZhdGFyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0udXNlci5waG90b191cmwgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHQtMFwiLCBhdHRyczogeyBkZW5zZTogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYnMsIGZ1bmN0aW9uKHRhYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICAgIHsga2V5OiB0YWIuaWQsIGF0dHJzOiB7IHRvOiB7IG5hbWU6IHRhYi5yb3V0ZSB9IH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihfdm0uX3ModGFiLmljb24pKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtfdm0uX3YoX3ZtLl9zKHRhYi5uYW1lKSldKV0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaWQ6IFwidGhlbWUtc3dpdGNoZXJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcItCi0LXQvNC90LDRjyDRgtC10LzQsFwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGFyayxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRhcmsgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhcmtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzX19jb250ZW50IGNhcmRcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIsIG1vZGU6IFwib3V0LWluXCIgfSB9LFxuICAgICAgICAgICAgW19jKFwicm91dGVyLXZpZXdcIildLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTc0ZGZlNzcwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NGRmZTc3MFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE1Il0sInNvdXJjZVJvb3QiOiIifQ==