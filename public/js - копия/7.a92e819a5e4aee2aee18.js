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
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n}\np[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n.employee[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.employee[data-v-5eb87cd0]::before,\n.employee[data-v-5eb87cd0]::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.employee__avatar[data-v-5eb87cd0] {\t\n\twidth: 30%;\n}\n.employee__avatar-container[data-v-5eb87cd0] {\n\tposition: relative;\n\twidth: 316px;\n\theight: 316px;\n\tmargin: 0 auto;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n.avatar__overlay[data-v-5eb87cd0] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-5eb87cd0]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-5eb87cd0] {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 316px;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-5eb87cd0] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AA2FA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA;AAEA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA;AACA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CAGA,oBAAA;CACA,mBAAA;CACA,gBAAA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AACA;;CAEA,YAAA;CACA,eAAA;CACA,YAAA;CACA;AAEA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,aAAA;CACA,cAAA;CACA,eAAA;CACA,+CAAA;SAAA,uCAAA;CACA,mBAAA;CACA,iBAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,iBAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\r\n  \t\t\t<div class=\"employee\">\r\n  \t\t\t\t<h2>{{ $t('employee') }}</h2>\r\n  \t\t\t\t<div class=\"employee__avatar\">\r\n  \t\t\t\t\t<div class=\"employee__avatar-container\">\r\n  \t\t\t\t\t\t<div class=\"avatar__overlay\">\r\n  \t\t\t\t\t\t\t<v-btn depressed large color=\"primary\">{{avatarMsg}}</v-btn>\r\n  \t\t\t\t\t\t</div>\r\n  \t\t\t\t\t\t<img :src=\"avatar\" alt=\"avatar\">\r\n  \t\t\t\t\t</div>\t\t\t\r\n  \t\t\t\t\t\r\n  \t\t\t\t</div>\r\n\t  \t\t\t<div class=\"employee__descr\">\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('name') }}:</b> <i>{{item.first_name}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('last_name') }}:</b> <i>{{item.last_name}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('patronymic') }}:</b> <i>{{item.patronymic ? item.patronymic : ''}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('position') }}:</b> <i>{{item.position}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('phone_number') }}:</b> <i>{{item.phone_number}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('salary') }}:</b> <i>{{item.salary}} руб.</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('address') }}:</b> <i>{{item.address}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-divider></v-divider>\r\n\t  \t\t\t\t<p class=\"employee__text\">\r\n\t  \t\t\t\t\t<b>{{ $t('birthday') }}:</b> <i>{{item.birthday}}</i>\r\n\t  \t\t\t\t</p>\r\n\t  \t\t\t\t<v-btn\r\n\t\t\t\t      block\r\n\t\t\t\t      :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\r\n\t\t\t\t    >\r\n\t\t\t\t      {{ $t('change_data') }}\r\n\t\t\t\t    </v-btn>\r\n\t  \t\t\t</div>\r\n  \t\t\t</div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\texport default {\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\ttype: [Number, String],\r\n\t\t\t\trequired: true\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\titem: {}\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\tavatarMsg() {\r\n\t\t\t\treturn (this.item.avatar) ? 'Изменить изображение' : 'Добавить изображение';\r\n\t\t\t},\r\n\t\t\tavatar() {\r\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"http://dragene.no/wp-content/uploads/2016/06/default1.jpg\"\r\n\t\t\t}\r\n\t\t},\r\n\t\tcreated() {\r\n\t\t\tthis.load();\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tload() {\r\n\t\t\t\tfetch('/api/employees/' + this.id, {\r\n\t\t\t\tmethod: 'GET'\r\n\t\t\t})\r\n\t\t\t  .then(response => response.json())\r\n\t\t\t  .then(data => this.item = data)\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t* {\r\n\t\tbox-sizing: border-box;;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t}\r\n\r\n\th2 {\r\n\t\tflex-basis: 100%;\r\n\t}\r\n\r\n\tp {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 10px;\r\n\t\ttransition: background-color .3s;\r\n\t}\r\n\r\n\tp:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, .1);\r\n\t}\r\n\t.employee {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\t-webkit-flex-wrap: wrap;\r\n\t\t-moz-flex-wrap: wrap;\r\n\t\t-ms-flex-wrap: wrap;\r\n\t\t-o-flex-wrap: wrap;\r\n\t\tflex-wrap: wrap;\r\n\t\twidth: 90%;\r\n\t\tmargin: 30px auto;\r\n\t\tpadding: 15px;\r\n\t\tborder-radius: 5px;\r\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\r\n\t}\r\n\t.employee::before,\r\n\t.employee::after {\r\n\t\tcontent: \"\";\r\n\t\tdisplay: block;\r\n\t\tclear: both;\r\n\t}\r\n\r\n\t.employee__avatar {\t\r\n\t\twidth: 30%;\r\n\t}\r\n\r\n\t.employee__avatar-container {\r\n\t\tposition: relative;\r\n\t\twidth: 316px;\r\n\t\theight: 316px;\r\n\t\tmargin: 0 auto;\r\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\r\n\t\tborder-radius: 3px;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t.avatar__overlay {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 1;\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tbackground-color: rgba(0, 0, 0, .3);\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\topacity: 0;\r\n\t\ttransition: opacity .3s;\r\n\t}\r\n\t.employee__avatar:hover .avatar__overlay  {\r\n\t\topacity: 1;\r\n\t}\r\n\t.employee__avatar img {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmax-width: 316px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.employee__descr {\r\n\t\twidth: 70%;\r\n\t\tpadding:  10px 45px;\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
            _vm._v(_vm._s(_vm.item.patronymic ? _vm.item.patronymic : ""))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsbUNBQW1DLG9DQUFvQyxzQ0FBc0MsR0FBRyx1QkFBdUIs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy83LmE5MmU4MTlhNWU0YWVlMmFlZTE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTVlYjg3Y2QwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQ4NmMwNjQwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4qW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuaDJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuXFx0ICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxufVxcbi5lbXBsb3llZVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0LW8tZmxleC13cmFwOiB3cmFwO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogMzBweCBhdXRvO1xcblxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF06OmJlZm9yZSxcXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNsZWFyOiBib3RoO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhcltkYXRhLXYtNWViODdjZDBdIHtcXHRcXG5cXHR3aWR0aDogMzAlO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAzMTZweDtcXG5cXHRoZWlnaHQ6IDMxNnB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG59XFxuLmVtcGxveWVlX19hdmF0YXI6aG92ZXIgLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdICB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLmVtcGxveWVlX19hdmF0YXIgaW1nW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMzE2cHg7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcbi5lbXBsb3llZV9fZGVzY3JbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0d2lkdGg6IDcwJTtcXG5cXHRwYWRkaW5nOiAgMTBweCA0NXB4O1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJGQTtDQUNBLCtCQUFBO1NBQUEsdUJBQUE7Q0FDQSxrQ0FBQTtDQUNBO0FBRUE7Q0FDQSw4QkFBQTtLQUFBLGlCQUFBO0NBQ0E7QUFFQTtDQUVBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLCtCQUFBO0NBQ0EsVUFBQTtDQUNBLGNBQUE7Q0FDQSx5Q0FBQTtDQUFBLGlDQUFBO0NBQ0E7QUFFQTtDQUNBLDBDQUFBO0NBQ0E7QUFDQTtDQUVBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBR0Esb0JBQUE7Q0FDQSxtQkFBQTtDQUNBLGdCQUFBO0NBQ0EsV0FBQTtDQUNBLGtCQUFBO0NBQ0EsY0FBQTtDQUNBLG1CQUFBO0NBQ0EsK0NBQUE7U0FBQSx1Q0FBQTtDQUNBO0FBQ0E7O0NBRUEsWUFBQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0E7QUFFQTtDQUNBLFdBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxhQUFBO0NBQ0EsY0FBQTtDQUNBLGVBQUE7Q0FDQSwrQ0FBQTtTQUFBLHVDQUFBO0NBQ0EsbUJBQUE7Q0FDQSxpQkFBQTtDQUNBO0FBRUE7Q0FDQSxtQkFBQTtDQUNBLE9BQUE7Q0FDQSxRQUFBO0NBQ0EsV0FBQTtDQUVBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLG9CQUFBO0NBQ0Esb0NBQUE7Q0FDQSxZQUFBO0NBQ0EsYUFBQTtDQUNBLFdBQUE7Q0FDQSxnQ0FBQTtDQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLFdBQUE7Q0FDQTtBQUNBO0NBQ0EsZUFBQTtDQUNBLFlBQUE7Q0FDQSxpQkFBQTtDQUNBLGVBQUE7Q0FDQTtBQUVBO0NBQ0EsV0FBQTtDQUNBLG9CQUFBO0NBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU2hvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cXHJcXG4gIFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXJcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiYXZhdGFyX19vdmVybGF5XFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBkZXByZXNzZWQgbGFyZ2UgY29sb3I9XFxcInByaW1hcnlcXFwiPnt7YXZhdGFyTXNnfX08L3YtYnRuPlxcclxcbiAgXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICBcXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIDpzcmM9XFxcImF2YXRhclxcXCIgYWx0PVxcXCJhdmF0YXJcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFx0XFx0XFx0XFxyXFxuICBcXHRcXHRcXHRcXHRcXHRcXHJcXG4gIFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdCAgXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2Rlc2NyXFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj57eyAkdCgnbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmZpcnN0X25hbWV9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ2xhc3RfbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmxhc3RfbmFtZX19PC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj57eyAkdCgncGF0cm9ueW1pYycpIH19OjwvYj4gPGk+e3tpdGVtLnBhdHJvbnltaWMgPyBpdGVtLnBhdHJvbnltaWMgOiAnJ319PC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj57eyAkdCgncG9zaXRpb24nKSB9fTo8L2I+IDxpPnt7aXRlbS5wb3NpdGlvbn19PC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj57eyAkdCgncGhvbmVfbnVtYmVyJykgfX06PC9iPiA8aT57e2l0ZW0ucGhvbmVfbnVtYmVyfX08L2k+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdzYWxhcnknKSB9fTo8L2I+IDxpPnt7aXRlbS5zYWxhcnl9fSDRgNGD0LEuPC9pPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj57eyAkdCgnYWRkcmVzcycpIH19OjwvYj4gPGk+e3tpdGVtLmFkZHJlc3N9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ2JpcnRoZGF5JykgfX06PC9iPiA8aT57e2l0ZW0uYmlydGhkYXl9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWJ0blxcclxcblxcdFxcdFxcdFxcdCAgICAgIGJsb2NrXFxyXFxuXFx0XFx0XFx0XFx0ICAgICAgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XFxcIlxcclxcblxcdFxcdFxcdFxcdCAgICA+XFxyXFxuXFx0XFx0XFx0XFx0ICAgICAge3sgJHQoJ2NoYW5nZV9kYXRhJykgfX1cXHJcXG5cXHRcXHRcXHRcXHQgICAgPC92LWJ0bj5cXHJcXG5cXHQgIFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgXFx0XFx0XFx0PC9kaXY+XFx0XFx0XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxyXFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdFxcdHByb3BzOiB7XFxyXFxuXFx0XFx0XFx0aWQ6IHtcXHJcXG5cXHRcXHRcXHRcXHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxcclxcblxcdFxcdFxcdFxcdHJlcXVpcmVkOiB0cnVlXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0ZGF0YSgpIHtcXHJcXG5cXHRcXHRcXHRyZXR1cm4ge1xcclxcblxcdFxcdFxcdFxcdGl0ZW06IHt9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0Y29tcHV0ZWQ6IHtcXHJcXG5cXHRcXHRcXHRhdmF0YXJNc2coKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/ICfQmNC30LzQtdC90LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LUnIDogJ9CU0L7QsdCw0LLQuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSc7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRhdmF0YXIoKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcXFwiaHR0cDovL2RyYWdlbmUubm8vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDYvZGVmYXVsdDEuanBnXFxcIlxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGNyZWF0ZWQoKSB7XFxyXFxuXFx0XFx0XFx0dGhpcy5sb2FkKCk7XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0XFx0bG9hZCgpIHtcXHJcXG5cXHRcXHRcXHRcXHRmZXRjaCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQsIHtcXHJcXG5cXHRcXHRcXHRcXHRtZXRob2Q6ICdHRVQnXFxyXFxuXFx0XFx0XFx0fSlcXHJcXG5cXHRcXHRcXHQgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcXHJcXG5cXHRcXHRcXHQgIC50aGVuKGRhdGEgPT4gdGhpcy5pdGVtID0gZGF0YSlcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcblxcdCoge1xcclxcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0aDIge1xcclxcblxcdFxcdGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHAge1xcclxcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW1zLWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW8tZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cDpob3ZlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxyXFxuXFx0fVxcclxcblxcdC5lbXBsb3llZSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0LW1vei1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHQtby1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdHdpZHRoOiA5MCU7XFxyXFxuXFx0XFx0bWFyZ2luOiAzMHB4IGF1dG87XFxyXFxuXFx0XFx0cGFkZGluZzogMTVweDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxyXFxuXFx0fVxcclxcblxcdC5lbXBsb3llZTo6YmVmb3JlLFxcclxcblxcdC5lbXBsb3llZTo6YWZ0ZXIge1xcclxcblxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdGNsZWFyOiBib3RoO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZW1wbG95ZWVfX2F2YXRhciB7XFx0XFxyXFxuXFx0XFx0d2lkdGg6IDMwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmVtcGxveWVlX19hdmF0YXItY29udGFpbmVyIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IDMxNnB4O1xcclxcblxcdFxcdGhlaWdodDogMzE2cHg7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5hdmF0YXJfX292ZXJsYXkge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW1zLWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW8tZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxyXFxuXFx0fVxcclxcblxcdC5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXkgIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdH1cXHJcXG5cXHQuZW1wbG95ZWVfX2F2YXRhciBpbWcge1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1heC13aWR0aDogMzE2cHg7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5lbXBsb3llZV9fZGVzY3Ige1xcclxcblxcdFxcdHdpZHRoOiA3MCU7XFxyXFxuXFx0XFx0cGFkZGluZzogIDEwcHggNDVweDtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODZcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiPHRlbXBsYXRlPlxyXG4gIFx0XHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZVwiPlxyXG4gIFx0XHRcdFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cclxuICBcdFx0XHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fYXZhdGFyXCI+XHJcbiAgXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclwiPlxyXG4gIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhdmF0YXJfX292ZXJsYXlcIj5cclxuICBcdFx0XHRcdFx0XHRcdDx2LWJ0biBkZXByZXNzZWQgbGFyZ2UgY29sb3I9XCJwcmltYXJ5XCI+e3thdmF0YXJNc2d9fTwvdi1idG4+XHJcbiAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgXHRcdFx0XHRcdFx0PGltZyA6c3JjPVwiYXZhdGFyXCIgYWx0PVwiYXZhdGFyXCI+XHJcbiAgXHRcdFx0XHRcdDwvZGl2Plx0XHRcdFxyXG4gIFx0XHRcdFx0XHRcclxuICBcdFx0XHRcdDwvZGl2PlxyXG5cdCAgXHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19kZXNjclwiPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5maXJzdF9uYW1lfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPnt7ICR0KCdsYXN0X25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5sYXN0X25hbWV9fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ3BhdHJvbnltaWMnKSB9fTo8L2I+IDxpPnt7aXRlbS5wYXRyb255bWljID8gaXRlbS5wYXRyb255bWljIDogJyd9fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ3Bvc2l0aW9uJykgfX06PC9iPiA8aT57e2l0ZW0ucG9zaXRpb259fTwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ3Bob25lX251bWJlcicpIH19OjwvYj4gPGk+e3tpdGVtLnBob25lX251bWJlcn19PC9pPlxyXG5cdCAgXHRcdFx0XHQ8L3A+XHJcblx0ICBcdFx0XHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XHJcblx0ICBcdFx0XHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdFx0XHQ8Yj57eyAkdCgnc2FsYXJ5JykgfX06PC9iPiA8aT57e2l0ZW0uc2FsYXJ5fX0g0YDRg9CxLjwvaT5cclxuXHQgIFx0XHRcdFx0PC9wPlxyXG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ2FkZHJlc3MnKSB9fTo8L2I+IDxpPnt7aXRlbS5hZGRyZXNzfX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0XHRcdDxiPnt7ICR0KCdiaXJ0aGRheScpIH19OjwvYj4gPGk+e3tpdGVtLmJpcnRoZGF5fX08L2k+XHJcblx0ICBcdFx0XHRcdDwvcD5cclxuXHQgIFx0XHRcdFx0PHYtYnRuXHJcblx0XHRcdFx0ICAgICAgYmxvY2tcclxuXHRcdFx0XHQgICAgICA6dG89XCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XCJcclxuXHRcdFx0XHQgICAgPlxyXG5cdFx0XHRcdCAgICAgIHt7ICR0KCdjaGFuZ2VfZGF0YScpIH19XHJcblx0XHRcdFx0ICAgIDwvdi1idG4+XHJcblx0ICBcdFx0XHQ8L2Rpdj5cclxuICBcdFx0XHQ8L2Rpdj5cdFx0XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aWQ6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGl0ZW06IHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRhdmF0YXJNc2coKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/ICfQmNC30LzQtdC90LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LUnIDogJ9CU0L7QsdCw0LLQuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSc7XHJcblx0XHRcdH0sXHJcblx0XHRcdGF2YXRhcigpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFwiaHR0cDovL2RyYWdlbmUubm8vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDYvZGVmYXVsdDEuanBnXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMubG9hZCgpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0bG9hZCgpIHtcclxuXHRcdFx0XHRmZXRjaCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQsIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdHRVQnXHJcblx0XHRcdH0pXHJcblx0XHRcdCAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQgIC50aGVuKGRhdGEgPT4gdGhpcy5pdGVtID0gZGF0YSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdCoge1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDs7XHJcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0fVxyXG5cclxuXHRoMiB7XHJcblx0XHRmbGV4LWJhc2lzOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0cCB7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtbXMtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1vLWZsZXg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG5cdH1cclxuXHJcblx0cDpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcclxuXHR9XHJcblx0LmVtcGxveWVlIHtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdC1tb3otZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdC1vLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0XHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHR9XHJcblx0LmVtcGxveWVlOjpiZWZvcmUsXHJcblx0LmVtcGxveWVlOjphZnRlciB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRjbGVhcjogYm90aDtcclxuXHR9XHJcblxyXG5cdC5lbXBsb3llZV9fYXZhdGFyIHtcdFxyXG5cdFx0d2lkdGg6IDMwJTtcclxuXHR9XHJcblxyXG5cdC5lbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMzE2cHg7XHJcblx0XHRoZWlnaHQ6IDMxNnB4O1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQuYXZhdGFyX19vdmVybGF5IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1vei1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtby1mbGV4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcblx0fVxyXG5cdC5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXkgIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cdC5lbXBsb3llZV9fYXZhdGFyIGltZyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWF4LXdpZHRoOiAzMTZweDtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxuXHJcblx0LmVtcGxveWVlX19kZXNjciB7XHJcblx0XHR3aWR0aDogNzAlO1xyXG5cdFx0cGFkZGluZzogIDEwcHggNDVweDtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcblxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1wbG95ZWVcIikpKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF2YXRhcl9fb3ZlcmxheVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBkZXByZXNzZWQ6IFwiXCIsIGxhcmdlOiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uYXZhdGFyTXNnKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYXZhdGFyLCBhbHQ6IFwiYXZhdGFyXCIgfSB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2Rlc2NyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm5hbWVcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uZmlyc3RfbmFtZSkpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibGFzdF9uYW1lXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmxhc3RfbmFtZSkpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicGF0cm9ueW1pY1wiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnBhdHJvbnltaWMgPyBfdm0uaXRlbS5wYXRyb255bWljIDogXCJcIikpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicG9zaXRpb25cIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ucG9zaXRpb24pKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBob25lX251bWJlclwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5waG9uZV9udW1iZXIpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInNhbGFyeVwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5zYWxhcnkpICsgXCIg0YDRg9CxLlwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImFkZHJlc3NcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uYWRkcmVzcykpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiYmlydGhkYXlcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uYmlydGhkYXkpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZUVkaXRcIixcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IF92bS5pdGVtLmlkLCBlbXBsb3llZTogX3ZtLml0ZW0gfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0ICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJjaGFuZ2VfZGF0YVwiKSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0ICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNWViODdjZDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNyJdLCJzb3VyY2VSb290IjoiIn0=