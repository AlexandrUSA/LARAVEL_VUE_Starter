webpackJsonp([7],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(185)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(187)
/* template */
var __vue_template__ = __webpack_require__(188)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5eb87cd0"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\employees\\Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5eb87cd0", Component.options)
  } else {
    hotAPI.reload("data-v-5eb87cd0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("486c0640", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5eb87cd0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5eb87cd0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\np[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: #eee;\n}\n.employee[data-v-5eb87cd0] {\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px #ddd;\n\t        box-shadow: 0 0 13px #ddd;\n}\n.employee__avatar[data-v-5eb87cd0],\n.employee__descr[data-v-5eb87cd0] {\nfloat: left;\n}\n.employee__avatar[data-v-5eb87cd0] {\n\tposition: relative;\n\twidth: 30%;\n}\n.avatar__overlay[data-v-5eb87cd0] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-5eb87cd0]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-5eb87cd0] {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 316px;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-5eb87cd0] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AA2FA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,uBAAA;CACA;AACA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,kCAAA;SAAA,0BAAA;CACA;AACA;;AAEA,YAAA;CACA;AAEA;CACA,mBAAA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,iBAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\r\n  \t<v-app>\t\r\n  \t\t\t<div class=\"employee\">\r\n  \t\t\t\t<h2>Сотрудник</h2>\r\n  \t\t\t\t<div class=\"employee__avatar\">\r\n  \t\t\t\t\t<div class=\"avatar__overlay\">\r\n  \t\t\t\t\t\t<v-btn depressed large color=\"primary\">{{avatarMsg}}</v-btn>\r\n  \t\t\t\t\t</div>\r\n  \t\t\t\t\t<img src=\"/static/images/no_image.svg\" alt=\"34\">\r\n  \t\t\t\t</div>\r\n\t  \t\t\t<div class=\"employee__descr\">\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Имя:</b> <i>{{item.first_name}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<hr>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Фамилия:</b> <i>{{item.last_name}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<hr>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Отчество:</b> <i>{{item.patronymic ? item.patronymic : 'Не указано'}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<hr>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Должность:</b> <i>{{item.position}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<hr>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Телефон:</b> <i>{{item.phone_number}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<hr>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Заработная плата:</b> <i>{{item.salary}} руб.</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<hr>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Адресс:</b> <i>{{item.address}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<hr>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>День рождения:</b> <i>{{item.birthday}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-btn\r\n\t\t\t\t      color=\"info\"\r\n\t\t\t\t      block\r\n\t\t\t\t      :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\r\n\t\t\t\t    >\r\n\t\t\t\t      Изменить данные\r\n\t\t\t\t    </v-btn>\r\n\t  \t\t\t</div>\r\n  \t\t\t</div>\t\t\r\n\t\t</v-app>\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\texport default {\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\ttype: [Number, String],\r\n\t\t\t\trequired: true\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\titem: {}\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\tavatarMsg() {\r\n\t\t\t\treturn (this.item.avatar) ? 'Изменить изображение' : 'Добавить изображение';\r\n\t\t\t},\r\n\t\t\tavatar() {\r\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"static/images/no_image.svg\"\r\n\t\t\t}\r\n\t\t},\r\n\t\tcreated() {\r\n\t\t\tthis.load();\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tload() {\r\n\t\t\t\tfetch('/api/employees/' + this.id, {\r\n\t\t\t\tmethod: 'GET'\r\n\t\t\t})\r\n\t\t\t  .then(response => response.json())\r\n\t\t\t  .then(data => this.item = data)\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t* {\r\n\t\tbox-sizing: border-box;;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t}\r\n\r\n\tp {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 10px;\r\n\t\ttransition: background-color .3s;\r\n\t}\r\n\r\n\tp:hover {\r\n\t\tbackground-color: #eee;\r\n\t}\r\n\t.employee {\r\n\t\twidth: 90%;\r\n\t\tmargin: 30px auto;\r\n\t\tpadding: 15px;\r\n\t\tborder-radius: 5px;\r\n\t\tbox-shadow: 0 0 13px #ddd;\r\n\t}\r\n\t.employee__avatar,\r\n\t.employee__descr {\r\n\tfloat: left;\r\n\t}\r\n\r\n\t.employee__avatar {\r\n\t\tposition: relative;\r\n\t\twidth: 30%;\r\n\t}\r\n\r\n\t.avatar__overlay {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 1;\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tbackground-color: rgba(0, 0, 0, .3);\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\topacity: 0;\r\n\t\ttransition: opacity .3s;\r\n\t}\r\n\t.employee__avatar:hover .avatar__overlay  {\r\n\t\topacity: 1;\r\n\t}\r\n\t.employee__avatar img {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmax-width: 316px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.employee__descr {\r\n\t\twidth: 70%;\r\n\t\tpadding:  10px 45px;\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: {
		id: {
			type: [Number, String],
			required: true
		}
	},
	data: function data() {
		return {
			item: {}
		};
	},

	computed: {
		avatarMsg: function avatarMsg() {
			return this.item.avatar ? 'Изменить изображение' : 'Добавить изображение';
		},
		avatar: function avatar() {
			return this.item.avatar ? this.item.avatar : "static/images/no_image.svg";
		}
	},
	created: function created() {
		this.load();
	},

	methods: {
		load: function load() {
			var _this = this;

			fetch('/api/employees/' + this.id, {
				method: 'GET'
			}).then(function (response) {
				return response.json();
			}).then(function (data) {
				return _this.item = data;
			});
		}
	}
});

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-app", [
    _c("div", { staticClass: "employee" }, [
      _c("h2", [_vm._v("Сотрудник")]),
      _vm._v(" "),
      _c("div", { staticClass: "employee__avatar" }, [
        _c(
          "div",
          { staticClass: "avatar__overlay" },
          [
            _c(
              "v-btn",
              { attrs: { depressed: "", large: "", color: "primary" } },
              [_vm._v(_vm._s(_vm.avatarMsg))]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("img", { attrs: { src: "/static/images/no_image.svg", alt: "34" } })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "employee__descr" },
        [
          _c("p", { staticClass: "employee__text" }, [
            _c("b", [_vm._v("Имя:")]),
            _vm._v(" "),
            _c("i", [_vm._v(_vm._s(_vm.item.first_name))])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("p", { staticClass: "employee__text" }, [
            _c("b", [_vm._v("Фамилия:")]),
            _vm._v(" "),
            _c("i", [_vm._v(_vm._s(_vm.item.last_name))])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("p", { staticClass: "employee__text" }, [
            _c("b", [_vm._v("Отчество:")]),
            _vm._v(" "),
            _c("i", [
              _vm._v(
                _vm._s(_vm.item.patronymic ? _vm.item.patronymic : "Не указано")
              )
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("p", { staticClass: "employee__text" }, [
            _c("b", [_vm._v("Должность:")]),
            _vm._v(" "),
            _c("i", [_vm._v(_vm._s(_vm.item.position))])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("p", { staticClass: "employee__text" }, [
            _c("b", [_vm._v("Телефон:")]),
            _vm._v(" "),
            _c("i", [_vm._v(_vm._s(_vm.item.phone_number))])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("p", { staticClass: "employee__text" }, [
            _c("b", [_vm._v("Заработная плата:")]),
            _vm._v(" "),
            _c("i", [_vm._v(_vm._s(_vm.item.salary) + " руб.")])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("p", { staticClass: "employee__text" }, [
            _c("b", [_vm._v("Адресс:")]),
            _vm._v(" "),
            _c("i", [_vm._v(_vm._s(_vm.item.address))])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("p", { staticClass: "employee__text" }, [
            _c("b", [_vm._v("День рождения:")]),
            _vm._v(" "),
            _c("i", [_vm._v(_vm._s(_vm.item.birthday))])
          ]),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                color: "info",
                block: "",
                to: {
                  name: "employeeEdit",
                  params: { id: _vm.item.id, employee: _vm.item }
                }
              }
            },
            [_vm._v("\n\t\t\t\t      Изменить данные\n\t\t\t\t    ")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5eb87cd0", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsbUNBQW1DLG9DQUFvQyxzQ0FBc0MsR0FBRyxzQkFBc0Is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QUFDQSxDIiwiZmlsZSI6ImpzLzcuNTJhODc1OTUyNjYzNjk0YTk3OWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNWViODdjZDBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxlbXBsb3llZXNcXFxcU2hvdy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZWI4N2NkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDg2YzA2NDBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbipbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDs7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcbi5lbXBsb3llZVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogMzBweCBhdXRvO1xcblxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggI2RkZDtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxM3B4ICNkZGQ7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyW2RhdGEtdi01ZWI4N2NkMF0sXFxuLmVtcGxveWVlX19kZXNjcltkYXRhLXYtNWViODdjZDBdIHtcXG5mbG9hdDogbGVmdDtcXG59XFxuLmVtcGxveWVlX19hdmF0YXJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAzMCU7XFxufVxcbi5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSAge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyIGltZ1tkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDMxNnB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZW1wbG95ZWVfX2Rlc2NyW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0cGFkZGluZzogIDEwcHggNDVweDtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxufVxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvc3BhL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyRkE7Q0FDQSwrQkFBQTtTQUFBLHVCQUFBO0NBQ0Esa0NBQUE7Q0FDQTtBQUVBO0NBRUEsbUJBQUE7Q0FDQSxrQkFBQTtDQUNBLGlCQUFBO0NBQ0EscUJBQUE7Q0FBQSxxQkFBQTtDQUFBLGNBQUE7Q0FDQSwwQkFBQTtLQUFBLHVCQUFBO1NBQUEsK0JBQUE7Q0FDQSxVQUFBO0NBQ0EsY0FBQTtDQUNBLHlDQUFBO0NBQUEsaUNBQUE7Q0FDQTtBQUVBO0NBQ0EsdUJBQUE7Q0FDQTtBQUNBO0NBQ0EsV0FBQTtDQUNBLGtCQUFBO0NBQ0EsY0FBQTtDQUNBLG1CQUFBO0NBQ0Esa0NBQUE7U0FBQSwwQkFBQTtDQUNBO0FBQ0E7O0FBRUEsWUFBQTtDQUNBO0FBRUE7Q0FDQSxtQkFBQTtDQUNBLFdBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxPQUFBO0NBQ0EsUUFBQTtDQUNBLFdBQUE7Q0FFQSxtQkFBQTtDQUNBLGtCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxxQkFBQTtDQUFBLHFCQUFBO0NBQUEsY0FBQTtDQUNBLHlCQUFBO0tBQUEsc0JBQUE7U0FBQSx3QkFBQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSxvQkFBQTtDQUNBLG9DQUFBO0NBQ0EsWUFBQTtDQUNBLGFBQUE7Q0FDQSxXQUFBO0NBQ0EsZ0NBQUE7Q0FBQSx3QkFBQTtDQUNBO0FBQ0E7Q0FDQSxXQUFBO0NBQ0E7QUFDQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0EsaUJBQUE7Q0FDQSxlQUFBO0NBQ0E7QUFFQTtDQUNBLFdBQUE7Q0FDQSxvQkFBQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNob3cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIFxcdDx2LWFwcD5cXHRcXHJcXG4gIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlXFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdDxoMj7QodC+0YLRgNGD0LTQvdC40Lo8L2gyPlxcclxcbiAgXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhclxcXCI+XFxyXFxuICBcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJhdmF0YXJfX292ZXJsYXlcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0XFx0XFx0PHYtYnRuIGRlcHJlc3NlZCBsYXJnZSBjb2xvcj1cXFwicHJpbWFyeVxcXCI+e3thdmF0YXJNc2d9fTwvdi1idG4+XFxyXFxuICBcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG4gIFxcdFxcdFxcdFxcdFxcdDxpbWcgc3JjPVxcXCIvc3RhdGljL2ltYWdlcy9ub19pbWFnZS5zdmdcXFwiIGFsdD1cXFwiMzRcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0ICBcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fZGVzY3JcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPtCY0LzRjzo8L2I+IDxpPnt7aXRlbS5maXJzdF9uYW1lfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8aHI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0KTQsNC80LjQu9C40Y86PC9iPiA8aT57e2l0ZW0ubGFzdF9uYW1lfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8aHI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0J7RgtGH0LXRgdGC0LLQvjo8L2I+IDxpPnt7aXRlbS5wYXRyb255bWljID8gaXRlbS5wYXRyb255bWljIDogJ9Cd0LUg0YPQutCw0LfQsNC90L4nfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8aHI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0JTQvtC70LbQvdC+0YHRgtGMOjwvYj4gPGk+e3tpdGVtLnBvc2l0aW9ufX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8aHI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0KLQtdC70LXRhNC+0L06PC9iPiA8aT57e2l0ZW0ucGhvbmVfbnVtYmVyfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8aHI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0JfQsNGA0LDQsdC+0YLQvdCw0Y8g0L/Qu9Cw0YLQsDo8L2I+IDxpPnt7aXRlbS5zYWxhcnl9fSDRgNGD0LEuPC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PGhyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPtCQ0LTRgNC10YHRgTo8L2I+IDxpPnt7aXRlbS5hZGRyZXNzfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8aHI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjzo8L2I+IDxpPnt7aXRlbS5iaXJ0aGRheX19PC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtYnRuXFxyXFxuXFx0XFx0XFx0XFx0ICAgICAgY29sb3I9XFxcImluZm9cXFwiXFxyXFxuXFx0XFx0XFx0XFx0ICAgICAgYmxvY2tcXHJcXG5cXHRcXHRcXHRcXHQgICAgICA6dG89XFxcIntuYW1lOiAnZW1wbG95ZWVFZGl0JywgcGFyYW1zOiB7aWQ6IGl0ZW0uaWQsIGVtcGxveWVlOiBpdGVtfX1cXFwiXFxyXFxuXFx0XFx0XFx0XFx0ICAgID5cXHJcXG5cXHRcXHRcXHRcXHQgICAgICDQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVxcclxcblxcdFxcdFxcdFxcdCAgICA8L3YtYnRuPlxcclxcblxcdCAgXFx0XFx0XFx0PC9kaXY+XFxyXFxuICBcXHRcXHRcXHQ8L2Rpdj5cXHRcXHRcXHJcXG5cXHRcXHQ8L3YtYXBwPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5cXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xcclxcblxcdGV4cG9ydCBkZWZhdWx0IHtcXHJcXG5cXHRcXHRwcm9wczoge1xcclxcblxcdFxcdFxcdGlkOiB7XFxyXFxuXFx0XFx0XFx0XFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcXHJcXG5cXHRcXHRcXHRcXHRyZXF1aXJlZDogdHJ1ZVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGRhdGEoKSB7XFxyXFxuXFx0XFx0XFx0cmV0dXJuIHtcXHJcXG5cXHRcXHRcXHRcXHRpdGVtOiB7fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGNvbXB1dGVkOiB7XFxyXFxuXFx0XFx0XFx0YXZhdGFyTXNnKCkge1xcclxcblxcdFxcdFxcdFxcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyAn0JjQt9C80LXQvdC40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1JyA6ICfQlNC+0LHQsNCy0LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LUnO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0YXZhdGFyKCkge1xcclxcblxcdFxcdFxcdFxcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyB0aGlzLml0ZW0uYXZhdGFyIDogXFxcInN0YXRpYy9pbWFnZXMvbm9faW1hZ2Uuc3ZnXFxcIlxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGNyZWF0ZWQoKSB7XFxyXFxuXFx0XFx0XFx0dGhpcy5sb2FkKCk7XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0XFx0bG9hZCgpIHtcXHJcXG5cXHRcXHRcXHRcXHRmZXRjaCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQsIHtcXHJcXG5cXHRcXHRcXHRcXHRtZXRob2Q6ICdHRVQnXFxyXFxuXFx0XFx0XFx0fSlcXHJcXG5cXHRcXHRcXHQgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcXHJcXG5cXHRcXHRcXHQgIC50aGVuKGRhdGEgPT4gdGhpcy5pdGVtID0gZGF0YSlcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcblxcdCoge1xcclxcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdFxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRwOmhvdmVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcblxcdH1cXHJcXG5cXHQuZW1wbG95ZWUge1xcclxcblxcdFxcdHdpZHRoOiA5MCU7XFxyXFxuXFx0XFx0bWFyZ2luOiAzMHB4IGF1dG87XFxyXFxuXFx0XFx0cGFkZGluZzogMTVweDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDEzcHggI2RkZDtcXHJcXG5cXHR9XFxyXFxuXFx0LmVtcGxveWVlX19hdmF0YXIsXFxyXFxuXFx0LmVtcGxveWVlX19kZXNjciB7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5lbXBsb3llZV9fYXZhdGFyIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IDMwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmF2YXRhcl9fb3ZlcmxheSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXHJcXG5cXHR9XFxyXFxuXFx0LmVtcGxveWVlX19hdmF0YXI6aG92ZXIgLmF2YXRhcl9fb3ZlcmxheSAge1xcclxcblxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0fVxcclxcblxcdC5lbXBsb3llZV9fYXZhdGFyIGltZyB7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAzMTZweDtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmVtcGxveWVlX19kZXNjciB7XFxyXFxuXFx0XFx0d2lkdGg6IDcwJTtcXHJcXG5cXHRcXHRwYWRkaW5nOiAgMTBweCA0NXB4O1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCI8dGVtcGxhdGU+XHJcbiAgXHQ8di1hcHA+XHRcclxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVcIj5cclxuICBcdFx0XHRcdDxoMj7QodC+0YLRgNGD0LTQvdC40Lo8L2gyPlxyXG4gIFx0XHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cclxuICBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhcl9fb3ZlcmxheVwiPlxyXG4gIFx0XHRcdFx0XHRcdDx2LWJ0biBkZXByZXNzZWQgbGFyZ2UgY29sb3I9XCJwcmltYXJ5XCI+e3thdmF0YXJNc2d9fTwvdi1idG4+XHJcbiAgXHRcdFx0XHRcdDwvZGl2PlxyXG4gIFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL25vX2ltYWdlLnN2Z1wiIGFsdD1cIjM0XCI+XHJcbiAgXHRcdFx0XHQ8L2Rpdj5cclxuXHQgIFx0XHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fZGVzY3JcIj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPtCY0LzRjzo8L2I+IDxpPnt7aXRlbS5maXJzdF9uYW1lfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PGhyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0KTQsNC80LjQu9C40Y86PC9iPiA8aT57e2l0ZW0ubGFzdF9uYW1lfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PGhyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0J7RgtGH0LXRgdGC0LLQvjo8L2I+IDxpPnt7aXRlbS5wYXRyb255bWljID8gaXRlbS5wYXRyb255bWljIDogJ9Cd0LUg0YPQutCw0LfQsNC90L4nfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PGhyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0JTQvtC70LbQvdC+0YHRgtGMOjwvYj4gPGk+e3tpdGVtLnBvc2l0aW9ufX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PGhyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0KLQtdC70LXRhNC+0L06PC9iPiA8aT57e2l0ZW0ucGhvbmVfbnVtYmVyfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PGhyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0JfQsNGA0LDQsdC+0YLQvdCw0Y8g0L/Qu9Cw0YLQsDo8L2I+IDxpPnt7aXRlbS5zYWxhcnl9fSDRgNGD0LEuPC9pPlxyXG5cdCAgXHRcdFx0XHQ8L3A+XHJcblx0ICBcdFx0XHRcdDxocj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPtCQ0LTRgNC10YHRgTo8L2I+IDxpPnt7aXRlbS5hZGRyZXNzfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PGhyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjzo8L2I+IDxpPnt7aXRlbS5iaXJ0aGRheX19PC9pPlxyXG5cdCAgXHRcdFx0XHQ8L3A+XHJcblx0ICBcdFx0XHRcdDx2LWJ0blxyXG5cdFx0XHRcdCAgICAgIGNvbG9yPVwiaW5mb1wiXHJcblx0XHRcdFx0ICAgICAgYmxvY2tcclxuXHRcdFx0XHQgICAgICA6dG89XCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XCJcclxuXHRcdFx0XHQgICAgPlxyXG5cdFx0XHRcdCAgICAgINCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XHJcblx0XHRcdFx0ICAgIDwvdi1idG4+XHJcblx0ICBcdFx0XHQ8L2Rpdj5cclxuICBcdFx0XHQ8L2Rpdj5cdFx0XHJcblx0XHQ8L3YtYXBwPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGlkOiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpdGVtOiB7fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0YXZhdGFyTXNnKCkge1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyAn0JjQt9C80LXQvdC40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1JyA6ICfQlNC+0LHQsNCy0LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LUnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdmF0YXIoKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcInN0YXRpYy9pbWFnZXMvbm9faW1hZ2Uuc3ZnXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMubG9hZCgpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0bG9hZCgpIHtcclxuXHRcdFx0XHRmZXRjaCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQsIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdHRVQnXHJcblx0XHRcdH0pXHJcblx0XHRcdCAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQgIC50aGVuKGRhdGEgPT4gdGhpcy5pdGVtID0gZGF0YSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdCoge1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDs7XHJcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0fVxyXG5cclxuXHRwIHtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XHJcblx0fVxyXG5cclxuXHRwOmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblx0fVxyXG5cdC5lbXBsb3llZSB7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdFx0bWFyZ2luOiAzMHB4IGF1dG87XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMCAwIDEzcHggI2RkZDtcclxuXHR9XHJcblx0LmVtcGxveWVlX19hdmF0YXIsXHJcblx0LmVtcGxveWVlX19kZXNjciB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0fVxyXG5cclxuXHQuZW1wbG95ZWVfX2F2YXRhciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMzAlO1xyXG5cdH1cclxuXHJcblx0LmF2YXRhcl9fb3ZlcmxheSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG5cdH1cclxuXHQuZW1wbG95ZWVfX2F2YXRhcjpob3ZlciAuYXZhdGFyX19vdmVybGF5ICB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHQuZW1wbG95ZWVfX2F2YXRhciBpbWcge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1heC13aWR0aDogMzE2cHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcblxyXG5cdC5lbXBsb3llZV9fZGVzY3Ige1xyXG5cdFx0d2lkdGg6IDcwJTtcclxuXHRcdHBhZGRpbmc6ICAxMHB4IDQ1cHg7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0fVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2LWFwcFwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZVwiIH0sIFtcbiAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcItCh0L7RgtGA0YPQtNC90LjQulwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF2YXRhcl9fb3ZlcmxheVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBkZXByZXNzZWQ6IFwiXCIsIGxhcmdlOiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uYXZhdGFyTXNnKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvaW1hZ2VzL25vX2ltYWdlLnN2Z1wiLCBhbHQ6IFwiMzRcIiB9IH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fZGVzY3JcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcItCY0LzRjzpcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uZmlyc3RfbmFtZSkpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwi0KTQsNC80LjQu9C40Y86XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmxhc3RfbmFtZSkpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwi0J7RgtGH0LXRgdGC0LLQvjpcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pdGVtLnBhdHJvbnltaWMgPyBfdm0uaXRlbS5wYXRyb255bWljIDogXCLQndC1INGD0LrQsNC30LDQvdC+XCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcItCU0L7Qu9C20L3QvtGB0YLRjDpcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ucG9zaXRpb24pKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcItCi0LXQu9C10YTQvtC9OlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5waG9uZV9udW1iZXIpKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcItCX0LDRgNCw0LHQvtGC0L3QsNGPINC/0LvQsNGC0LA6XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnNhbGFyeSkgKyBcIiDRgNGD0LEuXCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwi0JDQtNGA0LXRgdGBOlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5hZGRyZXNzKSldKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCLQlNC10L3RjCDRgNC+0LbQtNC10L3QuNGPOlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5iaXJ0aGRheSkpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZUVkaXRcIixcbiAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogX3ZtLml0ZW0uaWQsIGVtcGxveWVlOiBfdm0uaXRlbSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdCAgICAgINCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XFxuXFx0XFx0XFx0XFx0ICAgIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZWI4N2NkMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==