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
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n}\np[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n.employee[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.employee[data-v-5eb87cd0]::before,\n.employee[data-v-5eb87cd0]::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.employee__avatar[data-v-5eb87cd0] {\t\n\twidth: 30%;\n}\n.employee__avatar-container[data-v-5eb87cd0] {\n\tposition: relative;\n\twidth: 100%;\n\theight: 316px;\n}\n.avatar__overlay[data-v-5eb87cd0] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-5eb87cd0]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-5eb87cd0] {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 316px;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-5eb87cd0] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAyFA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA;AAEA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA;AACA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CAGA,oBAAA;CACA,mBAAA;CACA,gBAAA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AACA;;CAEA,YAAA;CACA,eAAA;CACA,YAAA;CACA;AAEA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,YAAA;CACA,cAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,iBAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\r\n  \t\t\t<div class=\"employee\">\r\n  \t\t\t\t<h2>Сотрудник</h2>\r\n  \t\t\t\t<div class=\"employee__avatar\">\r\n  \t\t\t\t\t<div class=\"avatar__overlay\">\r\n  \t\t\t\t\t\t<v-btn depressed large color=\"primary\">{{avatarMsg}}</v-btn>\r\n  \t\t\t\t\t</div>\r\n  \t\t\t\t\t<img src=\"/static/images/no_image.svg\" alt=\"34\">\r\n  \t\t\t\t</div>\r\n\t  \t\t\t<div class=\"employee__descr\">\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Имя:</b> <i>{{item.first_name}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Фамилия:</b> <i>{{item.last_name}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Отчество:</b> <i>{{item.patronymic ? item.patronymic : 'Не указано'}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Должность:</b> <i>{{item.position}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Телефон:</b> <i>{{item.phone_number}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Заработная плата:</b> <i>{{item.salary}} руб.</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>Адресс:</b> <i>{{item.address}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>День рождения:</b> <i>{{item.birthday}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-btn\r\n\t\t\t\t      color=\"info\"\r\n\t\t\t\t      block\r\n\t\t\t\t      :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\r\n\t\t\t\t    >\r\n\t\t\t\t      Изменить данные\r\n\t\t\t\t    </v-btn>\r\n\t  \t\t\t</div>\r\n  \t\t\t</div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\texport default {\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\ttype: [Number, String],\r\n\t\t\t\trequired: true\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\titem: {}\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\tavatarMsg() {\r\n\t\t\t\treturn (this.item.avatar) ? 'Изменить изображение' : 'Добавить изображение';\r\n\t\t\t},\r\n\t\t\tavatar() {\r\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"static/images/no_image.svg\"\r\n\t\t\t}\r\n\t\t},\r\n\t\tcreated() {\r\n\t\t\tthis.load();\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tload() {\r\n\t\t\t\tfetch('/api/employees/' + this.id, {\r\n\t\t\t\tmethod: 'GET'\r\n\t\t\t})\r\n\t\t\t  .then(response => response.json())\r\n\t\t\t  .then(data => this.item = data)\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t* {\r\n\t\tbox-sizing: border-box;;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t}\r\n\r\n\th2 {\r\n\t\tflex-basis: 100%;\r\n\t}\r\n\r\n\tp {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 10px;\r\n\t\ttransition: background-color .3s;\r\n\t}\r\n\r\n\tp:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, .1);\r\n\t}\r\n\t.employee {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\t-webkit-flex-wrap: wrap;\r\n\t\t-moz-flex-wrap: wrap;\r\n\t\t-ms-flex-wrap: wrap;\r\n\t\t-o-flex-wrap: wrap;\r\n\t\tflex-wrap: wrap;\r\n\t\twidth: 90%;\r\n\t\tmargin: 30px auto;\r\n\t\tpadding: 15px;\r\n\t\tborder-radius: 5px;\r\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\r\n\t}\r\n\t.employee::before,\r\n\t.employee::after {\r\n\t\tcontent: \"\";\r\n\t\tdisplay: block;\r\n\t\tclear: both;\r\n\t}\r\n\r\n\t.employee__avatar {\t\r\n\t\twidth: 30%;\r\n\t}\r\n\r\n\t.employee__avatar-container {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\theight: 316px;\r\n\t}\r\n\r\n\t.avatar__overlay {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 1;\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tbackground-color: rgba(0, 0, 0, .3);\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\topacity: 0;\r\n\t\ttransition: opacity .3s;\r\n\t}\r\n\t.employee__avatar:hover .avatar__overlay  {\r\n\t\topacity: 1;\r\n\t}\r\n\t.employee__avatar img {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmax-width: 316px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.employee__descr {\r\n\t\twidth: 70%;\r\n\t\tpadding:  10px 45px;\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsbUNBQW1DLG9DQUFvQyxzQ0FBc0MsR0FBRyx1QkFBdUIsa0NBQWtDLHlCQUF5QixHQUFHLHNCQUFzQix1QkFBdUIsc0JBQXNCLHFCQUFxQix5QkFBeUIseUJBQXlCLGtCQUFrQiw4QkFBOEIsK0JBQStCLDJDQUEyQyxjQUFjLGtCQUFrQiw2Q0FBNkMscUNBQXFDLEdBQUcsNEJBQTRCLDhDQUE4QyxHQUFHLDhCQUE4Qix1QkFBdUIsc0JBQXNCLHFCQUFxQix5QkFBeUIseUJBQXlCLGtCQUFrQix3QkFBd0IsdUJBQXVCLG9CQUFvQixlQUFlLHNCQUFzQixrQkFBa0IsdUJBQXVCLG1EQUFtRCxtREFBbUQsR0FBRywwRUFBMEUsa0JBQWtCLG1CQUFtQixnQkFBZ0IsR0FBRyxzQ0FBc0MsaUJBQWlCLEdBQUcsZ0RBQWdELHVCQUF1QixnQkFBZ0Isa0JBQWtCLEdBQUcscUNBQXFDLHVCQUF1QixXQUFXLFlBQVksZUFBZSx1QkFBdUIsc0JBQXNCLHFCQUFxQix5QkFBeUIseUJBQXlCLGtCQUFrQiw2QkFBNkIsOEJBQThCLG9DQUFvQyw4QkFBOEIsK0JBQStCLGdDQUFnQyx3Q0FBd0MsZ0JBQWdCLGlCQUFpQixlQUFlLG9DQUFvQyw0QkFBNEIsR0FBRyw4REFBOEQsZUFBZSxHQUFHLDBDQUEwQyxtQkFBbUIsZ0JBQWdCLHFCQUFxQixtQkFBbUIsR0FBRyxxQ0FBcUMsZUFBZSx3QkFBd0Isb0JBQW9CLEdBQUcsY0FBYyxzS0FBc0ssTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxtUkFBbVIsV0FBVyxrUEFBa1AsaUJBQWlCLGtKQUFrSixnQkFBZ0IsbUpBQW1KLGtEQUFrRCxvSkFBb0osZUFBZSxrSkFBa0osbUJBQW1CLDJKQUEySixhQUFhLHNKQUFzSixjQUFjLHdKQUF3SixlQUFlLDhIQUE4SCwrQkFBK0IsNkJBQTZCLG1LQUFtSyx1QkFBdUIsYUFBYSxzQkFBc0IsZ0JBQWdCLGVBQWUsd0VBQXdFLFNBQVMsaUJBQWlCLGtCQUFrQixvQkFBb0IsV0FBVyxTQUFTLG9CQUFvQix1QkFBdUIsd0ZBQXdGLFdBQVcscUJBQXFCLG9HQUFvRyxTQUFTLG9CQUFvQixzQkFBc0IsU0FBUyxtQkFBbUIsa0JBQWtCLGdEQUFnRCxvQ0FBb0MscUdBQXFHLFNBQVMsT0FBTyw0Q0FBNEMsZ0NBQWdDLDBDQUEwQyxPQUFPLGNBQWMseUJBQXlCLE9BQU8sYUFBYSw4QkFBOEIsMkJBQTJCLDBCQUEwQix5QkFBeUIsc0JBQXNCLHVDQUF1QyxrQkFBa0Isc0JBQXNCLHlDQUF5QyxPQUFPLG1CQUFtQixrREFBa0QsT0FBTyxpQkFBaUIsOEJBQThCLDJCQUEyQiwwQkFBMEIseUJBQXlCLHNCQUFzQixnQ0FBZ0MsNkJBQTZCLDRCQUE0QiwyQkFBMkIsd0JBQXdCLG1CQUFtQiwwQkFBMEIsc0JBQXNCLDJCQUEyQiwrQ0FBK0MsT0FBTyxnREFBZ0Qsc0JBQXNCLHVCQUF1QixvQkFBb0IsT0FBTyw2QkFBNkIscUJBQXFCLE9BQU8sdUNBQXVDLDJCQUEyQixvQkFBb0Isc0JBQXNCLE9BQU8sNEJBQTRCLDJCQUEyQixlQUFlLGdCQUFnQixtQkFBbUIsOEJBQThCLDJCQUEyQiwwQkFBMEIseUJBQXlCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLDRDQUE0QyxvQkFBb0IscUJBQXFCLG1CQUFtQixnQ0FBZ0MsT0FBTyxpREFBaUQsbUJBQW1CLE9BQU8sNkJBQTZCLHVCQUF1QixvQkFBb0IseUJBQXlCLHVCQUF1QixPQUFPLDRCQUE0QixtQkFBbUIsNEJBQTRCLHdCQUF3QixPQUFPLDJDQUEyQzs7QUFFaGtROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNkNBO0FBQ0E7OztrQkFJQTthQUdBO0FBSkE7QUFEQTt1QkFNQTs7U0FHQTtBQUZBO0FBR0E7OztrQ0FFQTtzREFDQTtBQUNBOzRCQUNBO2dEQUNBO0FBRUE7QUFQQTs2QkFRQTtPQUNBO0FBQ0E7Ozs7QUFFQTs7O1lBR0E7QUFGQTtvQkFHQTs7d0JBQ0E7O0FBRUE7QUFSQTtBQXZCQSxHOzs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0EsZUFBZSxrQ0FBa0M7QUFDakQ7QUFDQTtBQUNBLFNBQVMsaUNBQWlDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyw2Q0FBNkMsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxnREFBZ0QsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUNBQWlDO0FBQ3hDO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy83Ljc5NTM4NzY4MWUxNWJjZWI3YWI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTVlYjg3Y2QwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQ4NmMwNjQwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4qW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuaDJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuXFx0ICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxufVxcbi5lbXBsb3llZVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0LW8tZmxleC13cmFwOiB3cmFwO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogMzBweCBhdXRvO1xcblxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF06OmJlZm9yZSxcXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNsZWFyOiBib3RoO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhcltkYXRhLXYtNWViODdjZDBdIHtcXHRcXG5cXHR3aWR0aDogMzAlO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMzE2cHg7XFxufVxcbi5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSAge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyIGltZ1tkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDMxNnB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZW1wbG95ZWVfX2Rlc2NyW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0cGFkZGluZzogIDEwcHggNDVweDtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxufVxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvc3BhL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5RkE7Q0FDQSwrQkFBQTtTQUFBLHVCQUFBO0NBQ0Esa0NBQUE7Q0FDQTtBQUVBO0NBQ0EsOEJBQUE7S0FBQSxpQkFBQTtDQUNBO0FBRUE7Q0FFQSxtQkFBQTtDQUNBLGtCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxxQkFBQTtDQUFBLHFCQUFBO0NBQUEsY0FBQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSwrQkFBQTtDQUNBLFVBQUE7Q0FDQSxjQUFBO0NBQ0EseUNBQUE7Q0FBQSxpQ0FBQTtDQUNBO0FBRUE7Q0FDQSwwQ0FBQTtDQUNBO0FBQ0E7Q0FFQSxtQkFBQTtDQUNBLGtCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxxQkFBQTtDQUFBLHFCQUFBO0NBQUEsY0FBQTtDQUdBLG9CQUFBO0NBQ0EsbUJBQUE7Q0FDQSxnQkFBQTtDQUNBLFdBQUE7Q0FDQSxrQkFBQTtDQUNBLGNBQUE7Q0FDQSxtQkFBQTtDQUNBLCtDQUFBO1NBQUEsdUNBQUE7Q0FDQTtBQUNBOztDQUVBLFlBQUE7Q0FDQSxlQUFBO0NBQ0EsWUFBQTtDQUNBO0FBRUE7Q0FDQSxXQUFBO0NBQ0E7QUFFQTtDQUNBLG1CQUFBO0NBQ0EsWUFBQTtDQUNBLGNBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxPQUFBO0NBQ0EsUUFBQTtDQUNBLFdBQUE7Q0FFQSxtQkFBQTtDQUNBLGtCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxxQkFBQTtDQUFBLHFCQUFBO0NBQUEsY0FBQTtDQUNBLHlCQUFBO0tBQUEsc0JBQUE7U0FBQSx3QkFBQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSxvQkFBQTtDQUNBLG9DQUFBO0NBQ0EsWUFBQTtDQUNBLGFBQUE7Q0FDQSxXQUFBO0NBQ0EsZ0NBQUE7Q0FBQSx3QkFBQTtDQUNBO0FBQ0E7Q0FDQSxXQUFBO0NBQ0E7QUFDQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0EsaUJBQUE7Q0FDQSxlQUFBO0NBQ0E7QUFFQTtDQUNBLFdBQUE7Q0FDQSxvQkFBQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNob3cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlXFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdDxoMj7QodC+0YLRgNGD0LTQvdC40Lo8L2gyPlxcclxcbiAgXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhclxcXCI+XFxyXFxuICBcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJhdmF0YXJfX292ZXJsYXlcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0XFx0XFx0PHYtYnRuIGRlcHJlc3NlZCBsYXJnZSBjb2xvcj1cXFwicHJpbWFyeVxcXCI+e3thdmF0YXJNc2d9fTwvdi1idG4+XFxyXFxuICBcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG4gIFxcdFxcdFxcdFxcdFxcdDxpbWcgc3JjPVxcXCIvc3RhdGljL2ltYWdlcy9ub19pbWFnZS5zdmdcXFwiIGFsdD1cXFwiMzRcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0ICBcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fZGVzY3JcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPtCY0LzRjzo8L2I+IDxpPnt7aXRlbS5maXJzdF9uYW1lfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPtCk0LDQvNC40LvQuNGPOjwvYj4gPGk+e3tpdGVtLmxhc3RfbmFtZX19PC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj7QntGC0YfQtdGB0YLQstC+OjwvYj4gPGk+e3tpdGVtLnBhdHJvbnltaWMgPyBpdGVtLnBhdHJvbnltaWMgOiAn0J3QtSDRg9C60LDQt9Cw0L3Qvid9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+0JTQvtC70LbQvdC+0YHRgtGMOjwvYj4gPGk+e3tpdGVtLnBvc2l0aW9ufX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPtCi0LXQu9C10YTQvtC9OjwvYj4gPGk+e3tpdGVtLnBob25lX251bWJlcn19PC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj7Ql9Cw0YDQsNCx0L7RgtC90LDRjyDQv9C70LDRgtCwOjwvYj4gPGk+e3tpdGVtLnNhbGFyeX19INGA0YPQsS48L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPtCQ0LTRgNC10YHRgTo8L2I+IDxpPnt7aXRlbS5hZGRyZXNzfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPtCU0LXQvdGMINGA0L7QttC00LXQvdC40Y86PC9iPiA8aT57e2l0ZW0uYmlydGhkYXl9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWJ0blxcclxcblxcdFxcdFxcdFxcdCAgICAgIGNvbG9yPVxcXCJpbmZvXFxcIlxcclxcblxcdFxcdFxcdFxcdCAgICAgIGJsb2NrXFxyXFxuXFx0XFx0XFx0XFx0ICAgICAgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XFxcIlxcclxcblxcdFxcdFxcdFxcdCAgICA+XFxyXFxuXFx0XFx0XFx0XFx0ICAgICAg0JjQt9C80LXQvdC40YLRjCDQtNCw0L3QvdGL0LVcXHJcXG5cXHRcXHRcXHRcXHQgICAgPC92LWJ0bj5cXHJcXG5cXHQgIFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgXFx0XFx0XFx0PC9kaXY+XFx0XFx0XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxyXFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdFxcdHByb3BzOiB7XFxyXFxuXFx0XFx0XFx0aWQ6IHtcXHJcXG5cXHRcXHRcXHRcXHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxcclxcblxcdFxcdFxcdFxcdHJlcXVpcmVkOiB0cnVlXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0ZGF0YSgpIHtcXHJcXG5cXHRcXHRcXHRyZXR1cm4ge1xcclxcblxcdFxcdFxcdFxcdGl0ZW06IHt9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0Y29tcHV0ZWQ6IHtcXHJcXG5cXHRcXHRcXHRhdmF0YXJNc2coKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/ICfQmNC30LzQtdC90LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LUnIDogJ9CU0L7QsdCw0LLQuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSc7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRhdmF0YXIoKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcXFwic3RhdGljL2ltYWdlcy9ub19pbWFnZS5zdmdcXFwiXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0Y3JlYXRlZCgpIHtcXHJcXG5cXHRcXHRcXHR0aGlzLmxvYWQoKTtcXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdG1ldGhvZHM6IHtcXHJcXG5cXHRcXHRcXHRsb2FkKCkge1xcclxcblxcdFxcdFxcdFxcdGZldGNoKCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCwge1xcclxcblxcdFxcdFxcdFxcdG1ldGhvZDogJ0dFVCdcXHJcXG5cXHRcXHRcXHR9KVxcclxcblxcdFxcdFxcdCAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxcclxcblxcdFxcdFxcdCAgLnRoZW4oZGF0YSA9PiB0aGlzLml0ZW0gPSBkYXRhKVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuXFx0KiB7XFxyXFxuXFx0XFx0Ym94LXNpemluZzogYm9yZGVyLWJveDs7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRoMiB7XFxyXFxuXFx0XFx0ZmxleC1iYXNpczogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdFxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRwOmhvdmVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXHJcXG5cXHR9XFxyXFxuXFx0LmVtcGxveWVlIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW1vei1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1vLWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHQtbW96LWZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHQtbXMtZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdC1vLWZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0d2lkdGg6IDkwJTtcXHJcXG5cXHRcXHRtYXJnaW46IDMwcHggYXV0bztcXHJcXG5cXHRcXHRwYWRkaW5nOiAxNXB4O1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG5cXHR9XFxyXFxuXFx0LmVtcGxveWVlOjpiZWZvcmUsXFxyXFxuXFx0LmVtcGxveWVlOjphZnRlciB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0Y2xlYXI6IGJvdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5lbXBsb3llZV9fYXZhdGFyIHtcXHRcXHJcXG5cXHRcXHR3aWR0aDogMzAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXIge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDMxNnB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuYXZhdGFyX19vdmVybGF5IHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW1vei1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1vLWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdFxcdHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcclxcblxcdH1cXHJcXG5cXHQuZW1wbG95ZWVfX2F2YXRhcjpob3ZlciAuYXZhdGFyX19vdmVybGF5ICB7XFxyXFxuXFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHR9XFxyXFxuXFx0LmVtcGxveWVlX19hdmF0YXIgaW1nIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IDMxNnB4O1xcclxcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZW1wbG95ZWVfX2Rlc2NyIHtcXHJcXG5cXHRcXHR3aWR0aDogNzAlO1xcclxcblxcdFxcdHBhZGRpbmc6ICAxMHB4IDQ1cHg7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIjx0ZW1wbGF0ZT5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVcIj5cclxuICBcdFx0XHRcdDxoMj7QodC+0YLRgNGD0LTQvdC40Lo8L2gyPlxyXG4gIFx0XHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cclxuICBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhcl9fb3ZlcmxheVwiPlxyXG4gIFx0XHRcdFx0XHRcdDx2LWJ0biBkZXByZXNzZWQgbGFyZ2UgY29sb3I9XCJwcmltYXJ5XCI+e3thdmF0YXJNc2d9fTwvdi1idG4+XHJcbiAgXHRcdFx0XHRcdDwvZGl2PlxyXG4gIFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL25vX2ltYWdlLnN2Z1wiIGFsdD1cIjM0XCI+XHJcbiAgXHRcdFx0XHQ8L2Rpdj5cclxuXHQgIFx0XHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fZGVzY3JcIj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPtCY0LzRjzo8L2I+IDxpPnt7aXRlbS5maXJzdF9uYW1lfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPtCk0LDQvNC40LvQuNGPOjwvYj4gPGk+e3tpdGVtLmxhc3RfbmFtZX19PC9pPlxyXG5cdCAgXHRcdFx0XHQ8L3A+XHJcblx0ICBcdFx0XHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XHJcblx0ICBcdFx0XHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdFx0XHQ8Yj7QntGC0YfQtdGB0YLQstC+OjwvYj4gPGk+e3tpdGVtLnBhdHJvbnltaWMgPyBpdGVtLnBhdHJvbnltaWMgOiAn0J3QtSDRg9C60LDQt9Cw0L3Qvid9fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+0JTQvtC70LbQvdC+0YHRgtGMOjwvYj4gPGk+e3tpdGVtLnBvc2l0aW9ufX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPtCi0LXQu9C10YTQvtC9OjwvYj4gPGk+e3tpdGVtLnBob25lX251bWJlcn19PC9pPlxyXG5cdCAgXHRcdFx0XHQ8L3A+XHJcblx0ICBcdFx0XHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XHJcblx0ICBcdFx0XHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdFx0XHQ8Yj7Ql9Cw0YDQsNCx0L7RgtC90LDRjyDQv9C70LDRgtCwOjwvYj4gPGk+e3tpdGVtLnNhbGFyeX19INGA0YPQsS48L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPtCQ0LTRgNC10YHRgTo8L2I+IDxpPnt7aXRlbS5hZGRyZXNzfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPtCU0LXQvdGMINGA0L7QttC00LXQvdC40Y86PC9iPiA8aT57e2l0ZW0uYmlydGhkYXl9fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1idG5cclxuXHRcdFx0XHQgICAgICBjb2xvcj1cImluZm9cIlxyXG5cdFx0XHRcdCAgICAgIGJsb2NrXHJcblx0XHRcdFx0ICAgICAgOnRvPVwie25hbWU6ICdlbXBsb3llZUVkaXQnLCBwYXJhbXM6IHtpZDogaXRlbS5pZCwgZW1wbG95ZWU6IGl0ZW19fVwiXHJcblx0XHRcdFx0ICAgID5cclxuXHRcdFx0XHQgICAgICDQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVxyXG5cdFx0XHRcdCAgICA8L3YtYnRuPlxyXG5cdCAgXHRcdFx0PC9kaXY+XHJcbiAgXHRcdFx0PC9kaXY+XHRcdFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGlkOiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpdGVtOiB7fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0YXZhdGFyTXNnKCkge1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyAn0JjQt9C80LXQvdC40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1JyA6ICfQlNC+0LHQsNCy0LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LUnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdmF0YXIoKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcInN0YXRpYy9pbWFnZXMvbm9faW1hZ2Uuc3ZnXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMubG9hZCgpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0bG9hZCgpIHtcclxuXHRcdFx0XHRmZXRjaCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQsIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdHRVQnXHJcblx0XHRcdH0pXHJcblx0XHRcdCAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQgIC50aGVuKGRhdGEgPT4gdGhpcy5pdGVtID0gZGF0YSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdCoge1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDs7XHJcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0fVxyXG5cclxuXHRoMiB7XHJcblx0XHRmbGV4LWJhc2lzOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0cCB7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtbXMtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1vLWZsZXg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG5cdH1cclxuXHJcblx0cDpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcclxuXHR9XHJcblx0LmVtcGxveWVlIHtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdC1tb3otZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdC1vLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0XHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHR9XHJcblx0LmVtcGxveWVlOjpiZWZvcmUsXHJcblx0LmVtcGxveWVlOjphZnRlciB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRjbGVhcjogYm90aDtcclxuXHR9XHJcblxyXG5cdC5lbXBsb3llZV9fYXZhdGFyIHtcdFxyXG5cdFx0d2lkdGg6IDMwJTtcclxuXHR9XHJcblxyXG5cdC5lbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMzE2cHg7XHJcblx0fVxyXG5cclxuXHQuYXZhdGFyX19vdmVybGF5IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1vei1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtby1mbGV4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcblx0fVxyXG5cdC5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXkgIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cdC5lbXBsb3llZV9fYXZhdGFyIGltZyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWF4LXdpZHRoOiAzMTZweDtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxuXHJcblx0LmVtcGxveWVlX19kZXNjciB7XHJcblx0XHR3aWR0aDogNzAlO1xyXG5cdFx0cGFkZGluZzogIDEwcHggNDVweDtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcblxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihcItCh0L7RgtGA0YPQtNC90LjQulwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyX19vdmVybGF5XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBkZXByZXNzZWQ6IFwiXCIsIGxhcmdlOiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmF2YXRhck1zZykpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9ub19pbWFnZS5zdmdcIiwgYWx0OiBcIjM0XCIgfSB9KVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fZGVzY3JcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcItCY0LzRjzpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5maXJzdF9uYW1lKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwi0KTQsNC80LjQu9C40Y86XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ubGFzdF9uYW1lKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwi0J7RgtGH0LXRgdGC0LLQvjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIF92bS5fcyhfdm0uaXRlbS5wYXRyb255bWljID8gX3ZtLml0ZW0ucGF0cm9ueW1pYyA6IFwi0J3QtSDRg9C60LDQt9Cw0L3QvlwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCLQlNC+0LvQttC90L7RgdGC0Yw6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ucG9zaXRpb24pKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCLQotC10LvQtdGE0L7QvTpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5waG9uZV9udW1iZXIpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCLQl9Cw0YDQsNCx0L7RgtC90LDRjyDQv9C70LDRgtCwOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnNhbGFyeSkgKyBcIiDRgNGD0LEuXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcItCQ0LTRgNC10YHRgTpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5hZGRyZXNzKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwi0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjzpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5iaXJ0aGRheSkpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVFZGl0XCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBfdm0uaXRlbS5pZCwgZW1wbG95ZWU6IF92bS5pdGVtIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdCAgICAgINCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XFxuXFx0XFx0XFx0XFx0ICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlYjg3Y2QwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9