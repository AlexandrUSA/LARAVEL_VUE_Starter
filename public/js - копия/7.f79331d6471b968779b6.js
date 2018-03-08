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
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\np[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n.employee[data-v-5eb87cd0] {\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.employee[data-v-5eb87cd0]::before,\n.employee[data-v-5eb87cd0]::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.employee__avatar[data-v-5eb87cd0],\n.employee__descr[data-v-5eb87cd0] {\nfloat: left;\n}\n.employee__avatar[data-v-5eb87cd0] {\n\tposition: relative;\n\twidth: 30%;\n}\n.avatar__overlay[data-v-5eb87cd0] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-5eb87cd0]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-5eb87cd0] {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 316px;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-5eb87cd0] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAyFA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA;AACA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AACA;;CAEA,YAAA;CACA,eAAA;CACA,YAAA;CACA;AAEA;;AAEA,YAAA;CACA;AAEA;CACA,mBAAA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,iBAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\r\n  \t\t\t<div class=\"employee\">\r\n  \t\t\t\t<h2>Сотрудник</h2>\r\n  \t\t\t\t<div class=\"employee__avatar\">\r\n  \t\t\t\t\t<div class=\"avatar__overlay\">\r\n  \t\t\t\t\t\t<v-btn depressed large color=\"primary\">{{avatarMsg}}</v-btn>\r\n  \t\t\t\t\t</div>\r\n  \t\t\t\t\t<img src=\"/static/images/no_image.svg\" alt=\"34\">\r\n  \t\t\t\t</div>\r\n\t  \t\t\t<div class=\"employee__descr\">\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Имя:</b> <i>{{item.first_name}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Фамилия:</b> <i>{{item.last_name}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Отчество:</b> <i>{{item.patronymic ? item.patronymic : 'Не указано'}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Должность:</b> <i>{{item.position}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Телефон:</b> <i>{{item.phone_number}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Заработная плата:</b> <i>{{item.salary}} руб.</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Адресс:</b> <i>{{item.address}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>День рождения:</b> <i>{{item.birthday}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-btn\r\n\t\t\t\t      color=\"info\"\r\n\t\t\t\t      block\r\n\t\t\t\t      :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\r\n\t\t\t\t    >\r\n\t\t\t\t      Изменить данные\r\n\t\t\t\t    </v-btn>\r\n\t  \t\t\t</div>\r\n  \t\t\t</div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\texport default {\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\ttype: [Number, String],\r\n\t\t\t\trequired: true\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\titem: {}\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\tavatarMsg() {\r\n\t\t\t\treturn (this.item.avatar) ? 'Изменить изображение' : 'Добавить изображение';\r\n\t\t\t},\r\n\t\t\tavatar() {\r\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"static/images/no_image.svg\"\r\n\t\t\t}\r\n\t\t},\r\n\t\tcreated() {\r\n\t\t\tthis.load();\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tload() {\r\n\t\t\t\tfetch('/api/employees/' + this.id, {\r\n\t\t\t\tmethod: 'GET'\r\n\t\t\t})\r\n\t\t\t  .then(response => response.json())\r\n\t\t\t  .then(data => this.item = data)\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t* {\r\n\t\tbox-sizing: border-box;;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t}\r\n\r\n\tp {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 10px;\r\n\t\ttransition: background-color .3s;\r\n\t}\r\n\r\n\tp:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, .1);\r\n\t}\r\n\t.employee {\r\n\t\twidth: 90%;\r\n\t\tmargin: 30px auto;\r\n\t\tpadding: 15px;\r\n\t\tborder-radius: 5px;\r\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\r\n\t}\r\n\t.employee::before,\r\n\t.employee::after {\r\n\t\tcontent: \"\";\r\n\t\tdisplay: block;\r\n\t\tclear: both;\r\n\t}\r\n\r\n\t.employee__avatar,\r\n\t.employee__descr {\r\n\tfloat: left;\r\n\t}\r\n\r\n\t.employee__avatar {\r\n\t\tposition: relative;\r\n\t\twidth: 30%;\r\n\t}\r\n\r\n\t.avatar__overlay {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 1;\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tbackground-color: rgba(0, 0, 0, .3);\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\topacity: 0;\r\n\t\ttransition: opacity .3s;\r\n\t}\r\n\t.employee__avatar:hover .avatar__overlay  {\r\n\t\topacity: 1;\r\n\t}\r\n\t.employee__avatar img {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmax-width: 316px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.employee__descr {\r\n\t\twidth: 70%;\r\n\t\tpadding:  10px 45px;\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
  return _c("div", { staticClass: "employee" }, [
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
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v("Фамилия:")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.last_name))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
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
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v("Должность:")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.position))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v("Телефон:")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.phone_number))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v("Заработная плата:")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.salary) + " руб.")])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v("Адресс:")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.address))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsbUNBQW1DLG9DQUFvQyxzQ0FBc0MsR0FBRyxzQkFBc0Is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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy83LmY3OTMzMWQ2NDcxYjk2ODc3OWI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTVlYjg3Y2QwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQ4NmMwNjQwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4qW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxucFtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG59XFxucFtkYXRhLXYtNWViODdjZDBdOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXG59XFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0bWFyZ2luOiAzMHB4IGF1dG87XFxuXFx0cGFkZGluZzogMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbn1cXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXTo6YmVmb3JlLFxcbi5lbXBsb3llZVtkYXRhLXYtNWViODdjZDBdOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y2xlYXI6IGJvdGg7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyW2RhdGEtdi01ZWI4N2NkMF0sXFxuLmVtcGxveWVlX19kZXNjcltkYXRhLXYtNWViODdjZDBdIHtcXG5mbG9hdDogbGVmdDtcXG59XFxuLmVtcGxveWVlX19hdmF0YXJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAzMCU7XFxufVxcbi5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSAge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyIGltZ1tkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDMxNnB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZW1wbG95ZWVfX2Rlc2NyW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0cGFkZGluZzogIDEwcHggNDVweDtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxufVxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvc3BhL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5RkE7Q0FDQSwrQkFBQTtTQUFBLHVCQUFBO0NBQ0Esa0NBQUE7Q0FDQTtBQUVBO0NBRUEsbUJBQUE7Q0FDQSxrQkFBQTtDQUNBLGlCQUFBO0NBQ0EscUJBQUE7Q0FBQSxxQkFBQTtDQUFBLGNBQUE7Q0FDQSwwQkFBQTtLQUFBLHVCQUFBO1NBQUEsK0JBQUE7Q0FDQSxVQUFBO0NBQ0EsY0FBQTtDQUNBLHlDQUFBO0NBQUEsaUNBQUE7Q0FDQTtBQUVBO0NBQ0EsMENBQUE7Q0FDQTtBQUNBO0NBQ0EsV0FBQTtDQUNBLGtCQUFBO0NBQ0EsY0FBQTtDQUNBLG1CQUFBO0NBQ0EsK0NBQUE7U0FBQSx1Q0FBQTtDQUNBO0FBQ0E7O0NBRUEsWUFBQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0E7QUFFQTs7QUFFQSxZQUFBO0NBQ0E7QUFFQTtDQUNBLG1CQUFBO0NBQ0EsV0FBQTtDQUNBO0FBRUE7Q0FDQSxtQkFBQTtDQUNBLE9BQUE7Q0FDQSxRQUFBO0NBQ0EsV0FBQTtDQUVBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLG9CQUFBO0NBQ0Esb0NBQUE7Q0FDQSxZQUFBO0NBQ0EsYUFBQTtDQUNBLFdBQUE7Q0FDQSxnQ0FBQTtDQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLFdBQUE7Q0FDQTtBQUNBO0NBQ0EsZUFBQTtDQUNBLFlBQUE7Q0FDQSxpQkFBQTtDQUNBLGVBQUE7Q0FDQTtBQUVBO0NBQ0EsV0FBQTtDQUNBLG9CQUFBO0NBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU2hvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0PGgyPtCh0L7RgtGA0YPQtNC90LjQujwvaDI+XFxyXFxuICBcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImF2YXRhcl9fb3ZlcmxheVxcXCI+XFxyXFxuICBcXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gZGVwcmVzc2VkIGxhcmdlIGNvbG9yPVxcXCJwcmltYXJ5XFxcIj57e2F2YXRhck1zZ319PC92LWJ0bj5cXHJcXG4gIFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgXFx0XFx0XFx0XFx0XFx0PGltZyBzcmM9XFxcIi9zdGF0aWMvaW1hZ2VzL25vX2ltYWdlLnN2Z1xcXCIgYWx0PVxcXCIzNFxcXCI+XFxyXFxuICBcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHQgIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19kZXNjclxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0JjQvNGPOjwvYj4gPGk+e3tpdGVtLmZpcnN0X25hbWV9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0KTQsNC80LjQu9C40Y86PC9iPiA8aT57e2l0ZW0ubGFzdF9uYW1lfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPtCe0YLRh9C10YHRgtCy0L46PC9iPiA8aT57e2l0ZW0ucGF0cm9ueW1pYyA/IGl0ZW0ucGF0cm9ueW1pYyA6ICfQndC1INGD0LrQsNC30LDQvdC+J319PC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj7QlNC+0LvQttC90L7RgdGC0Yw6PC9iPiA8aT57e2l0ZW0ucG9zaXRpb259fTwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0KLQtdC70LXRhNC+0L06PC9iPiA8aT57e2l0ZW0ucGhvbmVfbnVtYmVyfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPtCX0LDRgNCw0LHQvtGC0L3QsNGPINC/0LvQsNGC0LA6PC9iPiA8aT57e2l0ZW0uc2FsYXJ5fX0g0YDRg9CxLjwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0JDQtNGA0LXRgdGBOjwvYj4gPGk+e3tpdGVtLmFkZHJlc3N9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjzo8L2I+IDxpPnt7aXRlbS5iaXJ0aGRheX19PC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtYnRuXFxyXFxuXFx0XFx0XFx0XFx0ICAgICAgY29sb3I9XFxcImluZm9cXFwiXFxyXFxuXFx0XFx0XFx0XFx0ICAgICAgYmxvY2tcXHJcXG5cXHRcXHRcXHRcXHQgICAgICA6dG89XFxcIntuYW1lOiAnZW1wbG95ZWVFZGl0JywgcGFyYW1zOiB7aWQ6IGl0ZW0uaWQsIGVtcGxveWVlOiBpdGVtfX1cXFwiXFxyXFxuXFx0XFx0XFx0XFx0ICAgID5cXHJcXG5cXHRcXHRcXHRcXHQgICAgICDQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVxcclxcblxcdFxcdFxcdFxcdCAgICA8L3YtYnRuPlxcclxcblxcdCAgXFx0XFx0XFx0PC9kaXY+XFxyXFxuICBcXHRcXHRcXHQ8L2Rpdj5cXHRcXHRcXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuXFx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcXHJcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxyXFxuXFx0XFx0cHJvcHM6IHtcXHJcXG5cXHRcXHRcXHRpZDoge1xcclxcblxcdFxcdFxcdFxcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXFxyXFxuXFx0XFx0XFx0XFx0cmVxdWlyZWQ6IHRydWVcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRkYXRhKCkge1xcclxcblxcdFxcdFxcdHJldHVybiB7XFxyXFxuXFx0XFx0XFx0XFx0aXRlbToge31cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRjb21wdXRlZDoge1xcclxcblxcdFxcdFxcdGF2YXRhck1zZygpIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gJ9CY0LfQvNC10L3QuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtScgOiAn0JTQvtCx0LDQstC40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1JztcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGF2YXRhcigpIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFxcXCJzdGF0aWMvaW1hZ2VzL25vX2ltYWdlLnN2Z1xcXCJcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRjcmVhdGVkKCkge1xcclxcblxcdFxcdFxcdHRoaXMubG9hZCgpO1xcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0bWV0aG9kczoge1xcclxcblxcdFxcdFxcdGxvYWQoKSB7XFxyXFxuXFx0XFx0XFx0XFx0ZmV0Y2goJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkLCB7XFxyXFxuXFx0XFx0XFx0XFx0bWV0aG9kOiAnR0VUJ1xcclxcblxcdFxcdFxcdH0pXFxyXFxuXFx0XFx0XFx0ICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXFxyXFxuXFx0XFx0XFx0ICAudGhlbihkYXRhID0+IHRoaXMuaXRlbSA9IGRhdGEpXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG5cXHQqIHtcXHJcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94OztcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHAge1xcclxcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW1zLWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW8tZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cDpob3ZlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxyXFxuXFx0fVxcclxcblxcdC5lbXBsb3llZSB7XFxyXFxuXFx0XFx0d2lkdGg6IDkwJTtcXHJcXG5cXHRcXHRtYXJnaW46IDMwcHggYXV0bztcXHJcXG5cXHRcXHRwYWRkaW5nOiAxNXB4O1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG5cXHR9XFxyXFxuXFx0LmVtcGxveWVlOjpiZWZvcmUsXFxyXFxuXFx0LmVtcGxveWVlOjphZnRlciB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0Y2xlYXI6IGJvdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5lbXBsb3llZV9fYXZhdGFyLFxcclxcblxcdC5lbXBsb3llZV9fZGVzY3Ige1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZW1wbG95ZWVfX2F2YXRhciB7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdHdpZHRoOiAzMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5hdmF0YXJfX292ZXJsYXkge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW1zLWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW8tZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxyXFxuXFx0fVxcclxcblxcdC5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXkgIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdH1cXHJcXG5cXHQuZW1wbG95ZWVfX2F2YXRhciBpbWcge1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1heC13aWR0aDogMzE2cHg7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5lbXBsb3llZV9fZGVzY3Ige1xcclxcblxcdFxcdHdpZHRoOiA3MCU7XFxyXFxuXFx0XFx0cGFkZGluZzogIDEwcHggNDVweDtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODZcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiPHRlbXBsYXRlPlxyXG4gIFx0XHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZVwiPlxyXG4gIFx0XHRcdFx0PGgyPtCh0L7RgtGA0YPQtNC90LjQujwvaDI+XHJcbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhclwiPlxyXG4gIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYXZhdGFyX19vdmVybGF5XCI+XHJcbiAgXHRcdFx0XHRcdFx0PHYtYnRuIGRlcHJlc3NlZCBsYXJnZSBjb2xvcj1cInByaW1hcnlcIj57e2F2YXRhck1zZ319PC92LWJ0bj5cclxuICBcdFx0XHRcdFx0PC9kaXY+XHJcbiAgXHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbm9faW1hZ2Uuc3ZnXCIgYWx0PVwiMzRcIj5cclxuICBcdFx0XHRcdDwvZGl2PlxyXG5cdCAgXHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19kZXNjclwiPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0JjQvNGPOjwvYj4gPGk+e3tpdGVtLmZpcnN0X25hbWV9fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0KTQsNC80LjQu9C40Y86PC9iPiA8aT57e2l0ZW0ubGFzdF9uYW1lfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPtCe0YLRh9C10YHRgtCy0L46PC9iPiA8aT57e2l0ZW0ucGF0cm9ueW1pYyA/IGl0ZW0ucGF0cm9ueW1pYyA6ICfQndC1INGD0LrQsNC30LDQvdC+J319PC9pPlxyXG5cdCAgXHRcdFx0XHQ8L3A+XHJcblx0ICBcdFx0XHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XHJcblx0ICBcdFx0XHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdFx0XHQ8Yj7QlNC+0LvQttC90L7RgdGC0Yw6PC9iPiA8aT57e2l0ZW0ucG9zaXRpb259fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0KLQtdC70LXRhNC+0L06PC9iPiA8aT57e2l0ZW0ucGhvbmVfbnVtYmVyfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPtCX0LDRgNCw0LHQvtGC0L3QsNGPINC/0LvQsNGC0LA6PC9iPiA8aT57e2l0ZW0uc2FsYXJ5fX0g0YDRg9CxLjwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0JDQtNGA0LXRgdGBOjwvYj4gPGk+e3tpdGVtLmFkZHJlc3N9fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjzo8L2I+IDxpPnt7aXRlbS5iaXJ0aGRheX19PC9pPlxyXG5cdCAgXHRcdFx0XHQ8L3A+XHJcblx0ICBcdFx0XHRcdDx2LWJ0blxyXG5cdFx0XHRcdCAgICAgIGNvbG9yPVwiaW5mb1wiXHJcblx0XHRcdFx0ICAgICAgYmxvY2tcclxuXHRcdFx0XHQgICAgICA6dG89XCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XCJcclxuXHRcdFx0XHQgICAgPlxyXG5cdFx0XHRcdCAgICAgINCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XHJcblx0XHRcdFx0ICAgIDwvdi1idG4+XHJcblx0ICBcdFx0XHQ8L2Rpdj5cclxuICBcdFx0XHQ8L2Rpdj5cdFx0XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aWQ6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGl0ZW06IHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRhdmF0YXJNc2coKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/ICfQmNC30LzQtdC90LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LUnIDogJ9CU0L7QsdCw0LLQuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSc7XHJcblx0XHRcdH0sXHJcblx0XHRcdGF2YXRhcigpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFwic3RhdGljL2ltYWdlcy9ub19pbWFnZS5zdmdcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy5sb2FkKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRsb2FkKCkge1xyXG5cdFx0XHRcdGZldGNoKCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCdcclxuXHRcdFx0fSlcclxuXHRcdFx0ICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdCAgLnRoZW4oZGF0YSA9PiB0aGlzLml0ZW0gPSBkYXRhKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0KiB7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94OztcclxuXHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHR9XHJcblxyXG5cdHAge1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1vei1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtby1mbGV4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcclxuXHR9XHJcblxyXG5cdHA6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcblx0fVxyXG5cdC5lbXBsb3llZSB7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdFx0bWFyZ2luOiAzMHB4IGF1dG87XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XHJcblx0fVxyXG5cdC5lbXBsb3llZTo6YmVmb3JlLFxyXG5cdC5lbXBsb3llZTo6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG5cclxuXHQuZW1wbG95ZWVfX2F2YXRhcixcclxuXHQuZW1wbG95ZWVfX2Rlc2NyIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR9XHJcblxyXG5cdC5lbXBsb3llZV9fYXZhdGFyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAzMCU7XHJcblx0fVxyXG5cclxuXHQuYXZhdGFyX19vdmVybGF5IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1vei1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtby1mbGV4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcblx0fVxyXG5cdC5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXkgIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cdC5lbXBsb3llZV9fYXZhdGFyIGltZyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWF4LXdpZHRoOiAzMTZweDtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxuXHJcblx0LmVtcGxveWVlX19kZXNjciB7XHJcblx0XHR3aWR0aDogNzAlO1xyXG5cdFx0cGFkZGluZzogIDEwcHggNDVweDtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcblxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihcItCh0L7RgtGA0YPQtNC90LjQulwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyX19vdmVybGF5XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBkZXByZXNzZWQ6IFwiXCIsIGxhcmdlOiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmF2YXRhck1zZykpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9ub19pbWFnZS5zdmdcIiwgYWx0OiBcIjM0XCIgfSB9KVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fZGVzY3JcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcItCY0LzRjzpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5maXJzdF9uYW1lKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwi0KTQsNC80LjQu9C40Y86XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ubGFzdF9uYW1lKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwi0J7RgtGH0LXRgdGC0LLQvjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIF92bS5fcyhfdm0uaXRlbS5wYXRyb255bWljID8gX3ZtLml0ZW0ucGF0cm9ueW1pYyA6IFwi0J3QtSDRg9C60LDQt9Cw0L3QvlwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCLQlNC+0LvQttC90L7RgdGC0Yw6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ucG9zaXRpb24pKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCLQotC10LvQtdGE0L7QvTpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5waG9uZV9udW1iZXIpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCLQl9Cw0YDQsNCx0L7RgtC90LDRjyDQv9C70LDRgtCwOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnNhbGFyeSkgKyBcIiDRgNGD0LEuXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcItCQ0LTRgNC10YHRgTpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5hZGRyZXNzKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwi0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjzpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5iaXJ0aGRheSkpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVFZGl0XCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBfdm0uaXRlbS5pZCwgZW1wbG95ZWU6IF92bS5pdGVtIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdCAgICAgINCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XFxuXFx0XFx0XFx0XFx0ICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlYjg3Y2QwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9