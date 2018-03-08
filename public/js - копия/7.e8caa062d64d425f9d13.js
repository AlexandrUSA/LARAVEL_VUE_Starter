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
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n}\np[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n.employee[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.employee[data-v-5eb87cd0]::before,\n.employee[data-v-5eb87cd0]::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.employee__avatar[data-v-5eb87cd0] {\t\n\twidth: 30%;\n}\n.employee__avatar-container[data-v-5eb87cd0] {\n\tposition: relative;\n\twidth: 316px;\n\theight: 316px;\n\tmargin: 0 auto;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.avatar__overlay[data-v-5eb87cd0] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-5eb87cd0]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-5eb87cd0] {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 316px;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-5eb87cd0] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AA4FA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA;AAEA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA;AACA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CAGA,oBAAA;CACA,mBAAA;CACA,gBAAA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AACA;;CAEA,YAAA;CACA,eAAA;CACA,YAAA;CACA;AAEA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,aAAA;CACA,cAAA;CACA,eAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,iBAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\r\n  \t\t\t<div class=\"employee\">\r\n  \t\t\t\t<h2>{{ $t('employee') }}</h2>\r\n  \t\t\t\t<div class=\"employee__avatar\">\r\n  \t\t\t\t\t<div class=\"employee__avatar-container\">\r\n  \t\t\t\t\t\t<div class=\"avatar__overlay\">\r\n  \t\t\t\t\t\t\t<v-btn depressed large color=\"primary\">{{avatarMsg}}</v-btn>\r\n  \t\t\t\t\t\t</div>\r\n  \t\t\t\t\t\t<img :src=\"avatar\" alt=\"avatar\">\r\n  \t\t\t\t\t</div>\t\t\t\r\n  \t\t\t\t\t\r\n  \t\t\t\t</div>\r\n\t  \t\t\t<div class=\"employee__descr\">\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('name') }}:</b> <i>{{item.first_name}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('last_name') }}:</b> <i>{{item.last_name}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('patronymic') }}:</b> <i>{{item.patronymic ? item.patronymic : 'Не указано'}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('position') }}:</b> <i>{{item.position}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('phone_number') }}:</b> <i>{{item.phone_number}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('salary') }}:</b> <i>{{item.salary}} руб.</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('address') }}:</b> <i>{{item.address}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('birthday') }}:</b> <i>{{item.birthday}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-btn\r\n\t\t\t\t      color=\"info\"\r\n\t\t\t\t      block\r\n\t\t\t\t      :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\r\n\t\t\t\t    >\r\n\t\t\t\t      {{ $t('change_data') }}\r\n\t\t\t\t    </v-btn>\r\n\t  \t\t\t</div>\r\n  \t\t\t</div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\texport default {\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\ttype: [Number, String],\r\n\t\t\t\trequired: true\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\titem: {}\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\tavatarMsg() {\r\n\t\t\t\treturn (this.item.avatar) ? 'Изменить изображение' : 'Добавить изображение';\r\n\t\t\t},\r\n\t\t\tavatar() {\r\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"http://dragene.no/wp-content/uploads/2016/06/default1.jpg\"\r\n\t\t\t}\r\n\t\t},\r\n\t\tcreated() {\r\n\t\t\tthis.load();\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tload() {\r\n\t\t\t\tfetch('/api/employees/' + this.id, {\r\n\t\t\t\tmethod: 'GET'\r\n\t\t\t})\r\n\t\t\t  .then(response => response.json())\r\n\t\t\t  .then(data => this.item = data)\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t* {\r\n\t\tbox-sizing: border-box;;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t}\r\n\r\n\th2 {\r\n\t\tflex-basis: 100%;\r\n\t}\r\n\r\n\tp {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 10px;\r\n\t\ttransition: background-color .3s;\r\n\t}\r\n\r\n\tp:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, .1);\r\n\t}\r\n\t.employee {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\t-webkit-flex-wrap: wrap;\r\n\t\t-moz-flex-wrap: wrap;\r\n\t\t-ms-flex-wrap: wrap;\r\n\t\t-o-flex-wrap: wrap;\r\n\t\tflex-wrap: wrap;\r\n\t\twidth: 90%;\r\n\t\tmargin: 30px auto;\r\n\t\tpadding: 15px;\r\n\t\tborder-radius: 5px;\r\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\r\n\t}\r\n\t.employee::before,\r\n\t.employee::after {\r\n\t\tcontent: \"\";\r\n\t\tdisplay: block;\r\n\t\tclear: both;\r\n\t}\r\n\r\n\t.employee__avatar {\t\r\n\t\twidth: 30%;\r\n\t}\r\n\r\n\t.employee__avatar-container {\r\n\t\tposition: relative;\r\n\t\twidth: 316px;\r\n\t\theight: 316px;\r\n\t\tmargin: 0 auto;\r\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\r\n\t}\r\n\r\n\t.avatar__overlay {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 1;\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tbackground-color: rgba(0, 0, 0, .3);\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\topacity: 0;\r\n\t\ttransition: opacity .3s;\r\n\t}\r\n\t.employee__avatar:hover .avatar__overlay  {\r\n\t\topacity: 1;\r\n\t}\r\n\t.employee__avatar img {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmax-width: 316px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.employee__descr {\r\n\t\twidth: 70%;\r\n\t\tpadding:  10px 45px;\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
			return this.item.avatar ? this.item.avatar : "http://dragene.no/wp-content/uploads/2016/06/default1.jpg";
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
    _c("h2", [_vm._v(_vm._s(_vm.$t("employee")))]),
    _vm._v(" "),
    _c("div", { staticClass: "employee__avatar" }, [
      _c("div", { staticClass: "employee__avatar-container" }, [
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
        _c("img", { attrs: { src: _vm.avatar, alt: "avatar" } })
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "employee__descr" },
      [
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("name")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.first_name))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("last_name")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.last_name))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("patronymic")) + ":")]),
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
          _c("b", [_vm._v(_vm._s(_vm.$t("position")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.position))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("phone_number")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.phone_number))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("salary")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.salary) + " руб.")])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("address")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.address))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("birthday")) + ":")]),
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
          [
            _vm._v(
              "\n\t\t\t\t      " +
                _vm._s(_vm.$t("change_data")) +
                "\n\t\t\t\t    "
            )
          ]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsbUNBQW1DLG9DQUFvQyxzQ0FBc0MsR0FBRyx1QkFBdUIs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QWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzcuZThjYWEwNjJkNjRkNDI1ZjlkMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNWViODdjZDBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxlbXBsb3llZXNcXFxcU2hvdy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZWI4N2NkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDg2YzA2NDBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbipbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDs7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5oMltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG5cXHQgICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxucFtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG59XFxucFtkYXRhLXYtNWViODdjZDBdOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXG59XFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcXG5cXHQtby1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0bWFyZ2luOiAzMHB4IGF1dG87XFxuXFx0cGFkZGluZzogMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbn1cXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXTo6YmVmb3JlLFxcbi5lbXBsb3llZVtkYXRhLXYtNWViODdjZDBdOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y2xlYXI6IGJvdGg7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyW2RhdGEtdi01ZWI4N2NkMF0ge1xcdFxcblxcdHdpZHRoOiAzMCU7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lcltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDMxNnB4O1xcblxcdGhlaWdodDogMzE2cHg7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbn1cXG4uYXZhdGFyX19vdmVybGF5W2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhcjpob3ZlciAuYXZhdGFyX19vdmVybGF5W2RhdGEtdi01ZWI4N2NkMF0gIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhciBpbWdbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAzMTZweDtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG59XFxuLmVtcGxveWVlX19kZXNjcltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHR3aWR0aDogNzAlO1xcblxcdHBhZGRpbmc6ICAxMHB4IDQ1cHg7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3NwYS9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNEZBO0NBQ0EsK0JBQUE7U0FBQSx1QkFBQTtDQUNBLGtDQUFBO0NBQ0E7QUFFQTtDQUNBLDhCQUFBO0tBQUEsaUJBQUE7Q0FDQTtBQUVBO0NBRUEsbUJBQUE7Q0FDQSxrQkFBQTtDQUNBLGlCQUFBO0NBQ0EscUJBQUE7Q0FBQSxxQkFBQTtDQUFBLGNBQUE7Q0FDQSwwQkFBQTtLQUFBLHVCQUFBO1NBQUEsK0JBQUE7Q0FDQSxVQUFBO0NBQ0EsY0FBQTtDQUNBLHlDQUFBO0NBQUEsaUNBQUE7Q0FDQTtBQUVBO0NBQ0EsMENBQUE7Q0FDQTtBQUNBO0NBRUEsbUJBQUE7Q0FDQSxrQkFBQTtDQUNBLGlCQUFBO0NBQ0EscUJBQUE7Q0FBQSxxQkFBQTtDQUFBLGNBQUE7Q0FHQSxvQkFBQTtDQUNBLG1CQUFBO0NBQ0EsZ0JBQUE7Q0FDQSxXQUFBO0NBQ0Esa0JBQUE7Q0FDQSxjQUFBO0NBQ0EsbUJBQUE7Q0FDQSwrQ0FBQTtTQUFBLHVDQUFBO0NBQ0E7QUFDQTs7Q0FFQSxZQUFBO0NBQ0EsZUFBQTtDQUNBLFlBQUE7Q0FDQTtBQUVBO0NBQ0EsV0FBQTtDQUNBO0FBRUE7Q0FDQSxtQkFBQTtDQUNBLGFBQUE7Q0FDQSxjQUFBO0NBQ0EsZUFBQTtDQUNBLCtDQUFBO1NBQUEsdUNBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxPQUFBO0NBQ0EsUUFBQTtDQUNBLFdBQUE7Q0FFQSxtQkFBQTtDQUNBLGtCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxxQkFBQTtDQUFBLHFCQUFBO0NBQUEsY0FBQTtDQUNBLHlCQUFBO0tBQUEsc0JBQUE7U0FBQSx3QkFBQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSxvQkFBQTtDQUNBLG9DQUFBO0NBQ0EsWUFBQTtDQUNBLGFBQUE7Q0FDQSxXQUFBO0NBQ0EsZ0NBQUE7Q0FBQSx3QkFBQTtDQUNBO0FBQ0E7Q0FDQSxXQUFBO0NBQ0E7QUFDQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0EsaUJBQUE7Q0FDQSxlQUFBO0NBQ0E7QUFFQTtDQUNBLFdBQUE7Q0FDQSxvQkFBQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNob3cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlXFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdDxoMj57eyAkdCgnZW1wbG95ZWUnKSB9fTwvaDI+XFxyXFxuICBcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImF2YXRhcl9fb3ZlcmxheVxcXCI+XFxyXFxuICBcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gZGVwcmVzc2VkIGxhcmdlIGNvbG9yPVxcXCJwcmltYXJ5XFxcIj57e2F2YXRhck1zZ319PC92LWJ0bj5cXHJcXG4gIFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgXFx0XFx0XFx0XFx0XFx0XFx0PGltZyA6c3JjPVxcXCJhdmF0YXJcXFwiIGFsdD1cXFwiYXZhdGFyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcdFxcdFxcdFxcclxcbiAgXFx0XFx0XFx0XFx0XFx0XFxyXFxuICBcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHQgIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19kZXNjclxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5maXJzdF9uYW1lfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdsYXN0X25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5sYXN0X25hbWV9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ3BhdHJvbnltaWMnKSB9fTo8L2I+IDxpPnt7aXRlbS5wYXRyb255bWljID8gaXRlbS5wYXRyb255bWljIDogJ9Cd0LUg0YPQutCw0LfQsNC90L4nfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdwb3NpdGlvbicpIH19OjwvYj4gPGk+e3tpdGVtLnBvc2l0aW9ufX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdwaG9uZV9udW1iZXInKSB9fTo8L2I+IDxpPnt7aXRlbS5waG9uZV9udW1iZXJ9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ3NhbGFyeScpIH19OjwvYj4gPGk+e3tpdGVtLnNhbGFyeX19INGA0YPQsS48L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdhZGRyZXNzJykgfX06PC9iPiA8aT57e2l0ZW0uYWRkcmVzc319PC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj57eyAkdCgnYmlydGhkYXknKSB9fTo8L2I+IDxpPnt7aXRlbS5iaXJ0aGRheX19PC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtYnRuXFxyXFxuXFx0XFx0XFx0XFx0ICAgICAgY29sb3I9XFxcImluZm9cXFwiXFxyXFxuXFx0XFx0XFx0XFx0ICAgICAgYmxvY2tcXHJcXG5cXHRcXHRcXHRcXHQgICAgICA6dG89XFxcIntuYW1lOiAnZW1wbG95ZWVFZGl0JywgcGFyYW1zOiB7aWQ6IGl0ZW0uaWQsIGVtcGxveWVlOiBpdGVtfX1cXFwiXFxyXFxuXFx0XFx0XFx0XFx0ICAgID5cXHJcXG5cXHRcXHRcXHRcXHQgICAgICB7eyAkdCgnY2hhbmdlX2RhdGEnKSB9fVxcclxcblxcdFxcdFxcdFxcdCAgICA8L3YtYnRuPlxcclxcblxcdCAgXFx0XFx0XFx0PC9kaXY+XFxyXFxuICBcXHRcXHRcXHQ8L2Rpdj5cXHRcXHRcXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuXFx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcXHJcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxyXFxuXFx0XFx0cHJvcHM6IHtcXHJcXG5cXHRcXHRcXHRpZDoge1xcclxcblxcdFxcdFxcdFxcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXFxyXFxuXFx0XFx0XFx0XFx0cmVxdWlyZWQ6IHRydWVcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRkYXRhKCkge1xcclxcblxcdFxcdFxcdHJldHVybiB7XFxyXFxuXFx0XFx0XFx0XFx0aXRlbToge31cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRjb21wdXRlZDoge1xcclxcblxcdFxcdFxcdGF2YXRhck1zZygpIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gJ9CY0LfQvNC10L3QuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtScgOiAn0JTQvtCx0LDQstC40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1JztcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGF2YXRhcigpIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFxcXCJodHRwOi8vZHJhZ2VuZS5uby93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNi9kZWZhdWx0MS5qcGdcXFwiXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0Y3JlYXRlZCgpIHtcXHJcXG5cXHRcXHRcXHR0aGlzLmxvYWQoKTtcXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdG1ldGhvZHM6IHtcXHJcXG5cXHRcXHRcXHRsb2FkKCkge1xcclxcblxcdFxcdFxcdFxcdGZldGNoKCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCwge1xcclxcblxcdFxcdFxcdFxcdG1ldGhvZDogJ0dFVCdcXHJcXG5cXHRcXHRcXHR9KVxcclxcblxcdFxcdFxcdCAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxcclxcblxcdFxcdFxcdCAgLnRoZW4oZGF0YSA9PiB0aGlzLml0ZW0gPSBkYXRhKVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuXFx0KiB7XFxyXFxuXFx0XFx0Ym94LXNpemluZzogYm9yZGVyLWJveDs7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRoMiB7XFxyXFxuXFx0XFx0ZmxleC1iYXNpczogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdFxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRwOmhvdmVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXHJcXG5cXHR9XFxyXFxuXFx0LmVtcGxveWVlIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW1vei1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1vLWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHQtbW96LWZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHQtbXMtZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdC1vLWZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0d2lkdGg6IDkwJTtcXHJcXG5cXHRcXHRtYXJnaW46IDMwcHggYXV0bztcXHJcXG5cXHRcXHRwYWRkaW5nOiAxNXB4O1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG5cXHR9XFxyXFxuXFx0LmVtcGxveWVlOjpiZWZvcmUsXFxyXFxuXFx0LmVtcGxveWVlOjphZnRlciB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0Y2xlYXI6IGJvdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5lbXBsb3llZV9fYXZhdGFyIHtcXHRcXHJcXG5cXHRcXHR3aWR0aDogMzAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXIge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR3aWR0aDogMzE2cHg7XFxyXFxuXFx0XFx0aGVpZ2h0OiAzMTZweDtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmF2YXRhcl9fb3ZlcmxheSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXHJcXG5cXHR9XFxyXFxuXFx0LmVtcGxveWVlX19hdmF0YXI6aG92ZXIgLmF2YXRhcl9fb3ZlcmxheSAge1xcclxcblxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0fVxcclxcblxcdC5lbXBsb3llZV9fYXZhdGFyIGltZyB7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAzMTZweDtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmVtcGxveWVlX19kZXNjciB7XFxyXFxuXFx0XFx0d2lkdGg6IDcwJTtcXHJcXG5cXHRcXHRwYWRkaW5nOiAgMTBweCA0NXB4O1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCI8dGVtcGxhdGU+XHJcbiAgXHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlXCI+XHJcbiAgXHRcdFx0XHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxyXG4gIFx0XHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cclxuICBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCI+XHJcbiAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhcl9fb3ZlcmxheVwiPlxyXG4gIFx0XHRcdFx0XHRcdFx0PHYtYnRuIGRlcHJlc3NlZCBsYXJnZSBjb2xvcj1cInByaW1hcnlcIj57e2F2YXRhck1zZ319PC92LWJ0bj5cclxuICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICBcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJhdmF0YXJcIiBhbHQ9XCJhdmF0YXJcIj5cclxuICBcdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHJcbiAgXHRcdFx0XHRcdFxyXG4gIFx0XHRcdFx0PC9kaXY+XHJcblx0ICBcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2Rlc2NyXCI+XHJcblx0ICBcdFx0XHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdFx0XHQ8Yj57eyAkdCgnbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmZpcnN0X25hbWV9fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ2xhc3RfbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmxhc3RfbmFtZX19PC9pPlxyXG5cdCAgXHRcdFx0XHQ8L3A+XHJcblx0ICBcdFx0XHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XHJcblx0ICBcdFx0XHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdFx0XHQ8Yj57eyAkdCgncGF0cm9ueW1pYycpIH19OjwvYj4gPGk+e3tpdGVtLnBhdHJvbnltaWMgPyBpdGVtLnBhdHJvbnltaWMgOiAn0J3QtSDRg9C60LDQt9Cw0L3Qvid9fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ3Bvc2l0aW9uJykgfX06PC9iPiA8aT57e2l0ZW0ucG9zaXRpb259fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ3Bob25lX251bWJlcicpIH19OjwvYj4gPGk+e3tpdGVtLnBob25lX251bWJlcn19PC9pPlxyXG5cdCAgXHRcdFx0XHQ8L3A+XHJcblx0ICBcdFx0XHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XHJcblx0ICBcdFx0XHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdFx0XHQ8Yj57eyAkdCgnc2FsYXJ5JykgfX06PC9iPiA8aT57e2l0ZW0uc2FsYXJ5fX0g0YDRg9CxLjwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ2FkZHJlc3MnKSB9fTo8L2I+IDxpPnt7aXRlbS5hZGRyZXNzfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPnt7ICR0KCdiaXJ0aGRheScpIH19OjwvYj4gPGk+e3tpdGVtLmJpcnRoZGF5fX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtYnRuXHJcblx0XHRcdFx0ICAgICAgY29sb3I9XCJpbmZvXCJcclxuXHRcdFx0XHQgICAgICBibG9ja1xyXG5cdFx0XHRcdCAgICAgIDp0bz1cIntuYW1lOiAnZW1wbG95ZWVFZGl0JywgcGFyYW1zOiB7aWQ6IGl0ZW0uaWQsIGVtcGxveWVlOiBpdGVtfX1cIlxyXG5cdFx0XHRcdCAgICA+XHJcblx0XHRcdFx0ICAgICAge3sgJHQoJ2NoYW5nZV9kYXRhJykgfX1cclxuXHRcdFx0XHQgICAgPC92LWJ0bj5cclxuXHQgIFx0XHRcdDwvZGl2PlxyXG4gIFx0XHRcdDwvZGl2Plx0XHRcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRpZDoge1xyXG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXRlbToge31cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGF2YXRhck1zZygpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gJ9CY0LfQvNC10L3QuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtScgOiAn0JTQvtCx0LDQstC40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1JztcclxuXHRcdFx0fSxcclxuXHRcdFx0YXZhdGFyKCkge1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyB0aGlzLml0ZW0uYXZhdGFyIDogXCJodHRwOi8vZHJhZ2VuZS5uby93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNi9kZWZhdWx0MS5qcGdcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy5sb2FkKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRsb2FkKCkge1xyXG5cdFx0XHRcdGZldGNoKCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCdcclxuXHRcdFx0fSlcclxuXHRcdFx0ICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdCAgLnRoZW4oZGF0YSA9PiB0aGlzLml0ZW0gPSBkYXRhKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0KiB7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94OztcclxuXHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHR9XHJcblxyXG5cdGgyIHtcclxuXHRcdGZsZXgtYmFzaXM6IDEwMCU7XHJcblx0fVxyXG5cclxuXHRwIHtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XHJcblx0fVxyXG5cclxuXHRwOmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xyXG5cdH1cclxuXHQuZW1wbG95ZWUge1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1vei1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtby1mbGV4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0LW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcblx0XHQtbXMtZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0LW8tZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHRcdG1hcmdpbjogMzBweCBhdXRvO1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG5cdH1cclxuXHQuZW1wbG95ZWU6OmJlZm9yZSxcclxuXHQuZW1wbG95ZWU6OmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdH1cclxuXHJcblx0LmVtcGxveWVlX19hdmF0YXIge1x0XHJcblx0XHR3aWR0aDogMzAlO1xyXG5cdH1cclxuXHJcblx0LmVtcGxveWVlX19hdmF0YXItY29udGFpbmVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAzMTZweDtcclxuXHRcdGhlaWdodDogMzE2cHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG5cdH1cclxuXHJcblx0LmF2YXRhcl9fb3ZlcmxheSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG5cdH1cclxuXHQuZW1wbG95ZWVfX2F2YXRhcjpob3ZlciAuYXZhdGFyX19vdmVybGF5ICB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHQuZW1wbG95ZWVfX2F2YXRhciBpbWcge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1heC13aWR0aDogMzE2cHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcblxyXG5cdC5lbXBsb3llZV9fZGVzY3Ige1xyXG5cdFx0d2lkdGg6IDcwJTtcclxuXHRcdHBhZGRpbmc6ICAxMHB4IDQ1cHg7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0fVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZVwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtcGxveWVlXCIpKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJfX292ZXJsYXlcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgZGVwcmVzc2VkOiBcIlwiLCBsYXJnZTogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmF2YXRhck1zZykpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmF2YXRhciwgYWx0OiBcImF2YXRhclwiIH0gfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19kZXNjclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJuYW1lXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmZpcnN0X25hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImxhc3RfbmFtZVwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5sYXN0X25hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBhdHJvbnltaWNcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLml0ZW0ucGF0cm9ueW1pYyA/IF92bS5pdGVtLnBhdHJvbnltaWMgOiBcItCd0LUg0YPQutCw0LfQsNC90L5cIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwb3NpdGlvblwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5wb3NpdGlvbikpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicGhvbmVfbnVtYmVyXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnBob25lX251bWJlcikpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwic2FsYXJ5XCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnNhbGFyeSkgKyBcIiDRgNGD0LEuXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiYWRkcmVzc1wiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5hZGRyZXNzKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJiaXJ0aGRheVwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5iaXJ0aGRheSkpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVFZGl0XCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBfdm0uaXRlbS5pZCwgZW1wbG95ZWU6IF92bS5pdGVtIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdCAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiY2hhbmdlX2RhdGFcIikpICtcbiAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdCAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlYjg3Y2QwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9