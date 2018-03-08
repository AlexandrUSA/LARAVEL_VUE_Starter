webpackJsonp([8],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(179)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(181)
/* template */
var __vue_template__ = __webpack_require__(182)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-350adeb9"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\employees\\List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-350adeb9", Component.options)
  } else {
    hotAPI.reload("data-v-350adeb9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("94547ba8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-350adeb9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-350adeb9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n.table__buttons[data-v-350adeb9] {\n\tposition: absolute;\n\tbottom: -50px;\n}\n.dialog__activator[data-v-350adeb9] {\n\tposition: absolute;\n\tbottom: -30px;\n\tleft: 40px;\n\tz-index: 1;\n}\n.card__title[data-v-350adeb9] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n.card__actions[data-v-350adeb9] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/List.vue"],"names":[],"mappings":";AAsKA;CACA,mBAAA;CACA,cAAA;CACA;AAEA;CACA,mBAAA;CACA,cAAA;CACA,WAAA;CACA,WAAA;CACA;AACA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA;AACA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div id=\"inspire\">\r\n      <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n\t\t\t\t\t<v-card-title>\r\n\t\t\t\t\t\t<span class=\"headline\">{{ $t('attention') }}</span>\r\n\t\t\t\t\t</v-card-title>\r\n\t\t\t\t\t<v-card-text>\r\n\t\t\t\t\t\t<v-flex xs12>{{deleteMsg}}</v-flex>\r\n\t\t\t\t\t</v-card-text>\r\n\t\t\t\t\t<v-card-actions>\r\n\t\t\t\t\t\t<v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n\t\t\t\t\t\t<v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n\t\t\t\t\t</v-card-actions>\r\n        </v-card>\r\n      </v-dialog>  \r\n      <v-card>\r\n      \t<v-card-title>\r\n\t      \t<h2 @click=\"showsnackbar()\">{{ $t('employees') }}</h2>\r\n\t      \t<v-spacer></v-spacer>\r\n\t      \t<v-text-field\r\n\t\t\t\t\t\tappend-icon=\"search\"\r\n\t\t\t\t\t\t:label=\"$t('search_input')\"\r\n\t\t\t\t\t\tsingle-line\t\t\t\r\n\t\t\t\t\t\tv-model=\"search\"\r\n\t      \t></v-text-field>\r\n      \t</v-card-title>\r\n      <v-data-table\r\n        :headers=\"headers\"\r\n        :items=\"items\"\r\n        :search=\"search\"\r\n        v-model=\"selected\"\r\n        select-all\r\n        item-key=\"id\"\r\n\t\t\t\t:no-results-text=\"$t('no_match_found')\"\r\n       \t:rows-per-page-text=\"$t('strings')\"\r\n        class=\"elevation-1\"\r\n      >\r\n        <template slot=\"items\" slot-scope=\"props\">\r\n        \t<td>\r\n\t\t        <v-checkbox\r\n\t\t          primary\r\n\t\t          hide-details\r\n\t\t          v-model=\"props.selected\"\r\n\t\t        ></v-checkbox>\r\n\t\t      </td>\r\n          <td>{{ props.item.id }}</td>\r\n          <td>{{ props.item.first_name }}</td>\r\n          <td>{{ props.item.last_name }}</td>\r\n          <td>{{ props.item.position }}</td>\r\n          <td>\r\n          \t<v-btn outline round :to=\"{name: 'employee', params: {id: props.item.id}}\">{{ $t('details') }}</v-btn>   \r\n          </td>\r\n        </template>\r\n\t\t\t\t<template slot=\"no-data\">\r\n          <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n        \t\tНет данных :(\r\n      \t\t</v-alert>\r\n        </template>\r\n\t\t\t</v-data-table>\r\n\t\t\t<div class=\"table__buttons\">\r\n\t\t\t\t<v-btn fab dark large color=\"cyan\"\r\n\t\t\t\t\t\t\t:to=\"{name: 'employeeCreate'}\">\r\n      \t\t<v-icon dark>add</v-icon>\r\n    \t\t</v-btn>\r\n    \t\t<transition  enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n\t\t\t \t<v-btn v-show=\"selected.length > 0\" \r\n\t\t\t\t\t\tclass=\"delete-btn\" color=\"error\" \r\n\t\t\t\t\t\tfab large dark\r\n\t\t\t\t\t\t@click=\"deleteDialog(selected)\"\r\n\t\t\t\t\t\t>\r\n      \t\t<v-icon>delete</v-icon>\r\n    \t\t</v-btn>\r\n\t\t\t</transition>\r\n\t\t\t</div>\r\n\t\t\t<v-snackbar\r\n      \t:timeout=\"snackbarTimeout\"\r\n      \ttop\r\n      \tv-model=\"snackbarShow\"\r\n      \tmulti-line\r\n      \tcolor=\"info\"\r\n    \t>\r\n      {{ $t('delete_done') }}\r\n      <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n    </v-snackbar>\t\t\r\n\t\t</v-card>\t\t\r\n\t</div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\texport default {\r\n\t\tdata: () => ({\r\n\t\t\tsnackbarShow: false,\r\n\t\t\tsnackbarTimeout: 10000,\r\n      // Поиск / Выборка\r\n\t\t\tsearch: '',\r\n\t\t\tselected: [],\r\n\t\t\tdialog: false,\r\n\t\t\t// Удаление\r\n\t\t\tdeleteWindow: false,\r\n\t\t\tdeleteCategory: null,\r\n\t\t\tdelMode: 'single',\r\n\t\t\t// Заголовки таблицы\r\n\t\t\theaders: [{\r\n\t\t\t\t\ttext: 'ID',\r\n\t\t\t\t\talign: 'left',\r\n\t\t\t\t\tsortable: false,\r\n\t\t\t\t\tvalue: 'id'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Имя',\r\n\t\t\t\t\tvalue: 'first_name'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Фамилия',\r\n\t\t\t\t\tvalue: 'last_name'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Должность',\r\n\t\t\t\t\tvalue: 'position'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: '',\r\n\t\t\t\t\tsortable: false\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}),\r\n\t\tcomputed: {\r\n\t\t\tdeleteMsg() {\r\n\t\t\t\treturn (this.selected.length == 1) ? $t('delete_item_confirm') :\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t $t('delete_items_confirm');\r\n\t\t\t},\r\n\t\t\t...mapGetters({\r\n      items: 'AdminEmployees/employees'\r\n    \t})\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tdeleteDialog(item) {\r\n\t\t\t\tthis.deleteWindow = true;\r\n\t\t\t\tthis.deleteCategory = item;\r\n\t\t\t},\r\n\t\t\tdeleteConfirm() {\r\n\t\t\t\tthis.selected.forEach(el => this.deleteItem(el.id));\r\n\t\t\t\tthis.selected = [];\r\n\t\t\t\tthis.deleteWindow = false;\r\n\t\t\t  this.editedID = null;\t\r\n\t\t\t  this.snackbarShow = true;\t\t\t\r\n\t\t\t},\r\n\t\t\tdeleteCancel() {\r\n\t\t\t\tthis.deleteCategory = null;\r\n\t\t\t\tthis.deleteWindow   = false;\r\n\t\t\t},\r\n\t\t\tclose() {\r\n\t\t\t\tthis.dialog = false;\r\n\t\t\t\tthis.editedItem = Object.assign({}, this.defaultItem);\r\n\t\t\t\tthis.editedIndex = -1;\r\n\t\t\t},\r\n\t\t\t...mapActions({\r\n\t\t\t\tloadItems: 'AdminEmployees/load',\r\n\t\t\t\tdeleteItem: 'AdminEmployees/remove'\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t.table__buttons {\r\n\t\tposition: absolute;\r\n\t\tbottom: -50px;\r\n\t}\r\n\t\r\n\t.dialog__activator {\r\n\t\tposition: absolute;\r\n\t\tbottom: -30px;\r\n\t\tleft: 40px;\r\n\t\tz-index: 1;\r\n\t}\r\n\t.card__title {\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.card__actions {\r\n\t\tjustify-content: center;\r\n\t}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(7);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			snackbarShow: false,
			snackbarTimeout: 10000,
			// Поиск / Выборка
			search: '',
			selected: [],
			dialog: false,
			// Удаление
			deleteWindow: false,
			deleteCategory: null,
			delMode: 'single',
			// Заголовки таблицы
			headers: [{
				text: 'ID',
				align: 'left',
				sortable: false,
				value: 'id'
			}, {
				text: 'Имя',
				value: 'first_name'
			}, {
				text: 'Фамилия',
				value: 'last_name'
			}, {
				text: 'Должность',
				value: 'position'
			}, {
				text: '',
				sortable: false
			}]
		};
	},
	computed: _extends({
		deleteMsg: function deleteMsg() {
			return this.selected.length == 1 ? $t('delete_item_confirm') : $t('delete_items_confirm');
		}
	}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
		items: 'AdminEmployees/employees'
	})),
	methods: _extends({
		deleteDialog: function deleteDialog(item) {
			this.deleteWindow = true;
			this.deleteCategory = item;
		},
		deleteConfirm: function deleteConfirm() {
			var _this = this;

			this.selected.forEach(function (el) {
				return _this.deleteItem(el.id);
			});
			this.selected = [];
			this.deleteWindow = false;
			this.editedID = null;
			this.snackbarShow = true;
		},
		deleteCancel: function deleteCancel() {
			this.deleteCategory = null;
			this.deleteWindow = false;
		},
		close: function close() {
			this.dialog = false;
			this.editedItem = Object.assign({}, this.defaultItem);
			this.editedIndex = -1;
		}
	}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
		loadItems: 'AdminEmployees/load',
		deleteItem: 'AdminEmployees/remove'
	}))
});

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.deleteWindow,
            callback: function($$v) {
              _vm.deleteWindow = $$v
            },
            expression: "deleteWindow"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.$t("attention")))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-flex", { attrs: { xs12: "" } }, [
                    _vm._v(_vm._s(_vm.deleteMsg))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { outline: "", color: "info" },
                      nativeOn: {
                        click: function($event) {
                          _vm.deleteConfirm($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("ok")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { outline: "", color: "error" },
                      nativeOn: {
                        click: function($event) {
                          _vm.deleteCancel($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("cancel")))]
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
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _c(
                "h2",
                {
                  on: {
                    click: function($event) {
                      _vm.showsnackbar()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("employees")))]
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "search",
                  label: _vm.$t("search_input"),
                  "single-line": ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-data-table",
            {
              staticClass: "elevation-1",
              attrs: {
                headers: _vm.headers,
                items: _vm.items,
                search: _vm.search,
                "select-all": "",
                "item-key": "id",
                "no-results-text": _vm.$t("no_match_found"),
                "rows-per-page-text": _vm.$t("strings")
              },
              scopedSlots: _vm._u([
                {
                  key: "items",
                  fn: function(props) {
                    return [
                      _c(
                        "td",
                        [
                          _c("v-checkbox", {
                            attrs: { primary: "", "hide-details": "" },
                            model: {
                              value: props.selected,
                              callback: function($$v) {
                                _vm.$set(props, "selected", $$v)
                              },
                              expression: "props.selected"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.first_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.last_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.position))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                outline: "",
                                round: "",
                                to: {
                                  name: "employee",
                                  params: { id: props.item.id }
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("details")))]
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "template",
                { slot: "no-data" },
                [
                  _c(
                    "v-alert",
                    { attrs: { value: true, color: "red", icon: "warning" } },
                    [_vm._v("\n        \t\tНет данных :(\n      \t\t")]
                  )
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "table__buttons" },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    fab: "",
                    dark: "",
                    large: "",
                    color: "cyan",
                    to: { name: "employeeCreate" }
                  }
                },
                [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("add")])],
                1
              ),
              _vm._v(" "),
              _c(
                "transition",
                {
                  attrs: {
                    "enter-active-class": "buttonEnter",
                    "leave-active-class": "buttonLeave",
                    mode: "out-in"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.selected.length > 0,
                          expression: "selected.length > 0"
                        }
                      ],
                      staticClass: "delete-btn",
                      attrs: { color: "error", fab: "", large: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.deleteDialog(_vm.selected)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("delete")])],
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
            "v-snackbar",
            {
              attrs: {
                timeout: _vm.snackbarTimeout,
                top: "",
                "multi-line": "",
                color: "info"
              },
              model: {
                value: _vm.snackbarShow,
                callback: function($$v) {
                  _vm.snackbarShow = $$v
                },
                expression: "snackbarShow"
              }
            },
            [
              _vm._v("\n      " + _vm._s(_vm.$t("delete_done")) + "\n      "),
              _c(
                "v-btn",
                {
                  attrs: { flat: "", color: "pink" },
                  nativeOn: {
                    click: function($event) {
                      _vm.snackbarShow = false
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("ok")))]
              )
            ],
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
    require("vue-hot-reload-api")      .rerender("data-v-350adeb9", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZT9jMzk4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlPzY1NDciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlP2FkMjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSw2REFBOEQsdUJBQXVCLGtCQUFrQixHQUFHLHVDQUF1Qyx1QkFBdUIs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aUI7QUFDakIsK0JBQStCLFNBQVMsV0FBVyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0NBQStDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzguNWQzYTMzNWY0NTRhMDVkMWQyMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM1MGFkZWI5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM1MGFkZWI5XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMzUwYWRlYjlcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxlbXBsb3llZXNcXFxcTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzUwYWRlYjlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNTBhZGViOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOTQ1NDdiYThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzlcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJsZV9fYnV0dG9uc1tkYXRhLXYtMzUwYWRlYjldIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAtNTBweDtcXG59XFxuLmRpYWxvZ19fYWN0aXZhdG9yW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IC0zMHB4O1xcblxcdGxlZnQ6IDQwcHg7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuLmNhcmRfX3RpdGxlW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jYXJkX19hY3Rpb25zW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvc3BhL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFzS0E7Q0FDQSxtQkFBQTtDQUNBLGNBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxjQUFBO0NBQ0EsV0FBQTtDQUNBLFdBQUE7Q0FDQTtBQUNBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLHlCQUFBO0tBQUEsc0JBQUE7U0FBQSx3QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGlkPVxcXCJpbnNwaXJlXFxcIj5cXHJcXG4gICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVsZXRlV2luZG93XFxcIiBtYXgtd2lkdGg9XFxcIjUwMHB4XFxcIj5cXHJcXG4gICAgICAgIDx2LWNhcmQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtY2FyZC10aXRsZT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPnt7ICR0KCdhdHRlbnRpb24nKSB9fTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3YtY2FyZC10aXRsZT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di1jYXJkLXRleHQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3YtY2FyZC10ZXh0PlxcclxcblxcdFxcdFxcdFxcdFxcdDx2LWNhcmQtYWN0aW9ucz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiaW5mb1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ29uZmlybVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJlcnJvclxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ2FuY2VsXFxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdi1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICA8L3YtY2FyZD5cXHJcXG4gICAgICA8L3YtZGlhbG9nPiAgXFxyXFxuICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICBcXHQ8di1jYXJkLXRpdGxlPlxcclxcblxcdCAgICAgIFxcdDxoMiBAY2xpY2s9XFxcInNob3dzbmFja2JhcigpXFxcIj57eyAkdCgnZW1wbG95ZWVzJykgfX08L2gyPlxcclxcblxcdCAgICAgIFxcdDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcclxcblxcdCAgICAgIFxcdDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRhcHBlbmQtaWNvbj1cXFwic2VhcmNoXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDpsYWJlbD1cXFwiJHQoJ3NlYXJjaF9pbnB1dCcpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdHNpbmdsZS1saW5lXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0di1tb2RlbD1cXFwic2VhcmNoXFxcIlxcclxcblxcdCAgICAgIFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgICBcXHQ8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICA8di1kYXRhLXRhYmxlXFxyXFxuICAgICAgICA6aGVhZGVycz1cXFwiaGVhZGVyc1xcXCJcXHJcXG4gICAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxyXFxuICAgICAgICA6c2VhcmNoPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICB2LW1vZGVsPVxcXCJzZWxlY3RlZFxcXCJcXHJcXG4gICAgICAgIHNlbGVjdC1hbGxcXHJcXG4gICAgICAgIGl0ZW0ta2V5PVxcXCJpZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHQ6bm8tcmVzdWx0cy10ZXh0PVxcXCIkdCgnbm9fbWF0Y2hfZm91bmQnKVxcXCJcXHJcXG4gICAgICAgXFx0OnJvd3MtcGVyLXBhZ2UtdGV4dD1cXFwiJHQoJ3N0cmluZ3MnKVxcXCJcXHJcXG4gICAgICAgIGNsYXNzPVxcXCJlbGV2YXRpb24tMVxcXCJcXHJcXG4gICAgICA+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiaXRlbXNcXFwiIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXHJcXG4gICAgICAgIFxcdDx0ZD5cXHJcXG5cXHRcXHQgICAgICAgIDx2LWNoZWNrYm94XFxyXFxuXFx0XFx0ICAgICAgICAgIHByaW1hcnlcXHJcXG5cXHRcXHQgICAgICAgICAgaGlkZS1kZXRhaWxzXFxyXFxuXFx0XFx0ICAgICAgICAgIHYtbW9kZWw9XFxcInByb3BzLnNlbGVjdGVkXFxcIlxcclxcblxcdFxcdCAgICAgICAgPjwvdi1jaGVja2JveD5cXHJcXG5cXHRcXHQgICAgICA8L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmZpcnN0X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5sYXN0X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5wb3NpdGlvbiB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgXFx0PHYtYnRuIG91dGxpbmUgcm91bmQgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlJywgcGFyYW1zOiB7aWQ6IHByb3BzLml0ZW0uaWR9fVxcXCI+e3sgJHQoJ2RldGFpbHMnKSB9fTwvdi1idG4+ICAgXFxyXFxuICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcblxcdFxcdFxcdFxcdDx0ZW1wbGF0ZSBzbG90PVxcXCJuby1kYXRhXFxcIj5cXHJcXG4gICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVxcXCJ0cnVlXFxcIiBjb2xvcj1cXFwicmVkXFxcIiBpY29uPVxcXCJ3YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgIFxcdFxcdNCd0LXRgiDQtNCw0L3QvdGL0YUgOihcXHJcXG4gICAgICBcXHRcXHQ8L3YtYWxlcnQ+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcblxcdFxcdFxcdDwvdi1kYXRhLXRhYmxlPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInRhYmxlX19idXR0b25zXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8di1idG4gZmFiIGRhcmsgbGFyZ2UgY29sb3I9XFxcImN5YW5cXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0OnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlQ3JlYXRlJ31cXFwiPlxcclxcbiAgICAgIFxcdFxcdDx2LWljb24gZGFyaz5hZGQ8L3YtaWNvbj5cXHJcXG4gICAgXFx0XFx0PC92LWJ0bj5cXHJcXG4gICAgXFx0XFx0PHRyYW5zaXRpb24gIGVudGVyLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uRW50ZXJcXFwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uTGVhdmVcXFwiIG1vZGU9XFxcIm91dC1pblxcXCI+XFxyXFxuXFx0XFx0XFx0IFxcdDx2LWJ0biB2LXNob3c9XFxcInNlbGVjdGVkLmxlbmd0aCA+IDBcXFwiIFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNsYXNzPVxcXCJkZWxldGUtYnRuXFxcIiBjb2xvcj1cXFwiZXJyb3JcXFwiIFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZhYiBsYXJnZSBkYXJrXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0QGNsaWNrPVxcXCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdD5cXHJcXG4gICAgICBcXHRcXHQ8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxcclxcbiAgICBcXHRcXHQ8L3YtYnRuPlxcclxcblxcdFxcdFxcdDwvdHJhbnNpdGlvbj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8di1zbmFja2JhclxcclxcbiAgICAgIFxcdDp0aW1lb3V0PVxcXCJzbmFja2JhclRpbWVvdXRcXFwiXFxyXFxuICAgICAgXFx0dG9wXFxyXFxuICAgICAgXFx0di1tb2RlbD1cXFwic25hY2tiYXJTaG93XFxcIlxcclxcbiAgICAgIFxcdG11bHRpLWxpbmVcXHJcXG4gICAgICBcXHRjb2xvcj1cXFwiaW5mb1xcXCJcXHJcXG4gICAgXFx0PlxcclxcbiAgICAgIHt7ICR0KCdkZWxldGVfZG9uZScpIH19XFxyXFxuICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XFxcInBpbmtcXFwiIEBjbGljay5uYXRpdmU9XFxcInNuYWNrYmFyU2hvdyA9IGZhbHNlXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuICAgIDwvdi1zbmFja2Jhcj5cXHRcXHRcXHJcXG5cXHRcXHQ8L3YtY2FyZD5cXHRcXHRcXHJcXG5cXHQ8L2Rpdj5cXHRcXHRcXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuXFx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcXHJcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxyXFxuXFx0XFx0ZGF0YTogKCkgPT4gKHtcXHJcXG5cXHRcXHRcXHRzbmFja2JhclNob3c6IGZhbHNlLFxcclxcblxcdFxcdFxcdHNuYWNrYmFyVGltZW91dDogMTAwMDAsXFxyXFxuICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXFxyXFxuXFx0XFx0XFx0c2VhcmNoOiAnJyxcXHJcXG5cXHRcXHRcXHRzZWxlY3RlZDogW10sXFxyXFxuXFx0XFx0XFx0ZGlhbG9nOiBmYWxzZSxcXHJcXG5cXHRcXHRcXHQvLyDQo9C00LDQu9C10L3QuNC1XFxyXFxuXFx0XFx0XFx0ZGVsZXRlV2luZG93OiBmYWxzZSxcXHJcXG5cXHRcXHRcXHRkZWxldGVDYXRlZ29yeTogbnVsbCxcXHJcXG5cXHRcXHRcXHRkZWxNb2RlOiAnc2luZ2xlJyxcXHJcXG5cXHRcXHRcXHQvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcXHJcXG5cXHRcXHRcXHRoZWFkZXJzOiBbe1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQ6ICdJRCcsXFxyXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ246ICdsZWZ0JyxcXHJcXG5cXHRcXHRcXHRcXHRcXHRzb3J0YWJsZTogZmFsc2UsXFxyXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6ICdpZCdcXHJcXG5cXHRcXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdFxcdHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0OiAn0JjQvNGPJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ2ZpcnN0X25hbWUnXFxyXFxuXFx0XFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRcXHR7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGV4dDogJ9Ck0LDQvNC40LvQuNGPJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ2xhc3RfbmFtZSdcXHJcXG5cXHRcXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdFxcdHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtGMJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ3Bvc2l0aW9uJ1xcclxcblxcdFxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0XFx0e1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQ6ICcnLFxcclxcblxcdFxcdFxcdFxcdFxcdHNvcnRhYmxlOiBmYWxzZVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRdXFxyXFxuXFx0XFx0fSksXFxyXFxuXFx0XFx0Y29tcHV0ZWQ6IHtcXHJcXG5cXHRcXHRcXHRkZWxldGVNc2coKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PSAxKSA/ICR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCAkdCgnZGVsZXRlX2l0ZW1zX2NvbmZpcm0nKTtcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdC4uLm1hcEdldHRlcnMoe1xcclxcbiAgICAgIGl0ZW1zOiAnQWRtaW5FbXBsb3llZXMvZW1wbG95ZWVzJ1xcclxcbiAgICBcXHR9KVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0bWV0aG9kczoge1xcclxcblxcdFxcdFxcdGRlbGV0ZURpYWxvZyhpdGVtKSB7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0ZGVsZXRlQ29uZmlybSgpIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLnNlbGVjdGVkLmZvckVhY2goZWwgPT4gdGhpcy5kZWxldGVJdGVtKGVsLmlkKSk7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5zZWxlY3RlZCA9IFtdO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuXFx0XFx0XFx0ICB0aGlzLmVkaXRlZElEID0gbnVsbDtcXHRcXHJcXG5cXHRcXHRcXHQgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGRlbGV0ZUNhbmNlbCgpIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gbnVsbDtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlbGV0ZVdpbmRvdyAgID0gZmFsc2U7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRjbG9zZSgpIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRpYWxvZyA9IGZhbHNlO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdC4uLm1hcEFjdGlvbnMoe1xcclxcblxcdFxcdFxcdFxcdGxvYWRJdGVtczogJ0FkbWluRW1wbG95ZWVzL2xvYWQnLFxcclxcblxcdFxcdFxcdFxcdGRlbGV0ZUl0ZW06ICdBZG1pbkVtcGxveWVlcy9yZW1vdmUnXFxyXFxuXFx0XFx0XFx0fSlcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuXFx0LnRhYmxlX19idXR0b25zIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0Ym90dG9tOiAtNTBweDtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LmRpYWxvZ19fYWN0aXZhdG9yIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0Ym90dG9tOiAtMzBweDtcXHJcXG5cXHRcXHRsZWZ0OiA0MHB4O1xcclxcblxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0fVxcclxcblxcdC5jYXJkX190aXRsZSB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcdC5jYXJkX19hY3Rpb25zIHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzUwYWRlYjlcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImluc3BpcmVcIj5cclxuICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZWxldGVXaW5kb3dcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICAgIDx2LWNhcmQ+XHJcblx0XHRcdFx0XHQ8di1jYXJkLXRpdGxlPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+e3sgJHQoJ2F0dGVudGlvbicpIH19PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC92LWNhcmQtdGl0bGU+XHJcblx0XHRcdFx0XHQ8di1jYXJkLXRleHQ+XHJcblx0XHRcdFx0XHRcdDx2LWZsZXggeHMxMj57e2RlbGV0ZU1zZ319PC92LWZsZXg+XHJcblx0XHRcdFx0XHQ8L3YtY2FyZC10ZXh0PlxyXG5cdFx0XHRcdFx0PHYtY2FyZC1hY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8di1idG4gb3V0bGluZSBjb2xvcj1cImluZm9cIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ29uZmlybVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuXHRcdFx0XHRcdFx0PHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDYW5jZWxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG5cdFx0XHRcdFx0PC92LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICA8L3YtY2FyZD5cclxuICAgICAgPC92LWRpYWxvZz4gIFxyXG4gICAgICA8di1jYXJkPlxyXG4gICAgICBcdDx2LWNhcmQtdGl0bGU+XHJcblx0ICAgICAgXHQ8aDIgQGNsaWNrPVwic2hvd3NuYWNrYmFyKClcIj57eyAkdCgnZW1wbG95ZWVzJykgfX08L2gyPlxyXG5cdCAgICAgIFx0PHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcblx0ICAgICAgXHQ8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHRcdGFwcGVuZC1pY29uPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0OmxhYmVsPVwiJHQoJ3NlYXJjaF9pbnB1dCcpXCJcclxuXHRcdFx0XHRcdFx0c2luZ2xlLWxpbmVcdFx0XHRcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cInNlYXJjaFwiXHJcblx0ICAgICAgXHQ+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgIFx0PC92LWNhcmQtdGl0bGU+XHJcbiAgICAgIDx2LWRhdGEtdGFibGVcclxuICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxyXG4gICAgICAgIDppdGVtcz1cIml0ZW1zXCJcclxuICAgICAgICA6c2VhcmNoPVwic2VhcmNoXCJcclxuICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRcIlxyXG4gICAgICAgIHNlbGVjdC1hbGxcclxuICAgICAgICBpdGVtLWtleT1cImlkXCJcclxuXHRcdFx0XHQ6bm8tcmVzdWx0cy10ZXh0PVwiJHQoJ25vX21hdGNoX2ZvdW5kJylcIlxyXG4gICAgICAgXHQ6cm93cy1wZXItcGFnZS10ZXh0PVwiJHQoJ3N0cmluZ3MnKVwiXHJcbiAgICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXHJcbiAgICAgID5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgXHQ8dGQ+XHJcblx0XHQgICAgICAgIDx2LWNoZWNrYm94XHJcblx0XHQgICAgICAgICAgcHJpbWFyeVxyXG5cdFx0ICAgICAgICAgIGhpZGUtZGV0YWlsc1xyXG5cdFx0ICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5zZWxlY3RlZFwiXHJcblx0XHQgICAgICAgID48L3YtY2hlY2tib3g+XHJcblx0XHQgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uZmlyc3RfbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5sYXN0X25hbWUgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ucG9zaXRpb24gfX08L3RkPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgXHQ8di1idG4gb3V0bGluZSByb3VuZCA6dG89XCJ7bmFtZTogJ2VtcGxveWVlJywgcGFyYW1zOiB7aWQ6IHByb3BzLml0ZW0uaWR9fVwiPnt7ICR0KCdkZXRhaWxzJykgfX08L3YtYnRuPiAgIFxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSBzbG90PVwibm8tZGF0YVwiPlxyXG4gICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVwidHJ1ZVwiIGNvbG9yPVwicmVkXCIgaWNvbj1cIndhcm5pbmdcIj5cclxuICAgICAgICBcdFx00J3QtdGCINC00LDQvdC90YvRhSA6KFxyXG4gICAgICBcdFx0PC92LWFsZXJ0PlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcblx0XHRcdDwvdi1kYXRhLXRhYmxlPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFibGVfX2J1dHRvbnNcIj5cclxuXHRcdFx0XHQ8di1idG4gZmFiIGRhcmsgbGFyZ2UgY29sb3I9XCJjeWFuXCJcclxuXHRcdFx0XHRcdFx0XHQ6dG89XCJ7bmFtZTogJ2VtcGxveWVlQ3JlYXRlJ31cIj5cclxuICAgICAgXHRcdDx2LWljb24gZGFyaz5hZGQ8L3YtaWNvbj5cclxuICAgIFx0XHQ8L3YtYnRuPlxyXG4gICAgXHRcdDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XCJidXR0b25FbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImJ1dHRvbkxlYXZlXCIgbW9kZT1cIm91dC1pblwiPlxyXG5cdFx0XHQgXHQ8di1idG4gdi1zaG93PVwic2VsZWN0ZWQubGVuZ3RoID4gMFwiIFxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImRlbGV0ZS1idG5cIiBjb2xvcj1cImVycm9yXCIgXHJcblx0XHRcdFx0XHRcdGZhYiBsYXJnZSBkYXJrXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImRlbGV0ZURpYWxvZyhzZWxlY3RlZClcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcbiAgICAgIFx0XHQ8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxyXG4gICAgXHRcdDwvdi1idG4+XHJcblx0XHRcdDwvdHJhbnNpdGlvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx2LXNuYWNrYmFyXHJcbiAgICAgIFx0OnRpbWVvdXQ9XCJzbmFja2JhclRpbWVvdXRcIlxyXG4gICAgICBcdHRvcFxyXG4gICAgICBcdHYtbW9kZWw9XCJzbmFja2JhclNob3dcIlxyXG4gICAgICBcdG11bHRpLWxpbmVcclxuICAgICAgXHRjb2xvcj1cImluZm9cIlxyXG4gICAgXHQ+XHJcbiAgICAgIHt7ICR0KCdkZWxldGVfZG9uZScpIH19XHJcbiAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicGlua1wiIEBjbGljay5uYXRpdmU9XCJzbmFja2JhclNob3cgPSBmYWxzZVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgIDwvdi1zbmFja2Jhcj5cdFx0XHJcblx0XHQ8L3YtY2FyZD5cdFx0XHJcblx0PC9kaXY+XHRcdFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGE6ICgpID0+ICh7XHJcblx0XHRcdHNuYWNrYmFyU2hvdzogZmFsc2UsXHJcblx0XHRcdHNuYWNrYmFyVGltZW91dDogMTAwMDAsXHJcbiAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxyXG5cdFx0XHRzZWFyY2g6ICcnLFxyXG5cdFx0XHRzZWxlY3RlZDogW10sXHJcblx0XHRcdGRpYWxvZzogZmFsc2UsXHJcblx0XHRcdC8vINCj0LTQsNC70LXQvdC40LVcclxuXHRcdFx0ZGVsZXRlV2luZG93OiBmYWxzZSxcclxuXHRcdFx0ZGVsZXRlQ2F0ZWdvcnk6IG51bGwsXHJcblx0XHRcdGRlbE1vZGU6ICdzaW5nbGUnLFxyXG5cdFx0XHQvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcclxuXHRcdFx0aGVhZGVyczogW3tcclxuXHRcdFx0XHRcdHRleHQ6ICdJRCcsXHJcblx0XHRcdFx0XHRhbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0c29ydGFibGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICdpZCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICfQmNC80Y8nLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICdmaXJzdF9uYW1lJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ9Ck0LDQvNC40LvQuNGPJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAnbGFzdF9uYW1lJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ9CU0L7Qu9C20L3QvtGB0YLRjCcsXHJcblx0XHRcdFx0XHR2YWx1ZTogJ3Bvc2l0aW9uJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJycsXHJcblx0XHRcdFx0XHRzb3J0YWJsZTogZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0pLFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0ZGVsZXRlTXNnKCkge1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5zZWxlY3RlZC5sZW5ndGggPT0gMSkgPyAkdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgJHQoJ2RlbGV0ZV9pdGVtc19jb25maXJtJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICBpdGVtczogJ0FkbWluRW1wbG95ZWVzL2VtcGxveWVlcydcclxuICAgIFx0fSlcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGRlbGV0ZURpYWxvZyhpdGVtKSB7XHJcblx0XHRcdFx0dGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWxldGVDb25maXJtKCkge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkID0gW107XHJcblx0XHRcdFx0dGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcclxuXHRcdFx0ICB0aGlzLmVkaXRlZElEID0gbnVsbDtcdFxyXG5cdFx0XHQgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVsZXRlQ2FuY2VsKCkge1xyXG5cdFx0XHRcdHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMuZGVsZXRlV2luZG93ICAgPSBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UoKSB7XHJcblx0XHRcdFx0dGhpcy5kaWFsb2cgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcclxuXHRcdFx0XHR0aGlzLmVkaXRlZEluZGV4ID0gLTE7XHJcblx0XHRcdH0sXHJcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xyXG5cdFx0XHRcdGxvYWRJdGVtczogJ0FkbWluRW1wbG95ZWVzL2xvYWQnLFxyXG5cdFx0XHRcdGRlbGV0ZUl0ZW06ICdBZG1pbkVtcGxveWVlcy9yZW1vdmUnXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnRhYmxlX19idXR0b25zIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogLTUwcHg7XHJcblx0fVxyXG5cdFxyXG5cdC5kaWFsb2dfX2FjdGl2YXRvciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IC0zMHB4O1xyXG5cdFx0bGVmdDogNDBweDtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0fVxyXG5cdC5jYXJkX190aXRsZSB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblx0LmNhcmRfX2FjdGlvbnMge1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJpbnNwaXJlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZWxldGVXaW5kb3csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVXaW5kb3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlbGV0ZVdpbmRvd1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImF0dGVudGlvblwiKSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlbGV0ZU1zZykpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNhbmNlbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiaDJcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dzbmFja2JhcigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtcGxveWVlc1wiKSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJzZWFyY2hfaW5wdXRcIiksXG4gICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3QtYWxsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgXCJuby1yZXN1bHRzLXRleHRcIjogX3ZtLiR0KFwibm9fbWF0Y2hfZm91bmRcIiksXG4gICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLXRleHRcIjogX3ZtLiR0KFwic3RyaW5nc1wiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHByaW1hcnk6IFwiXCIsIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcywgXCJzZWxlY3RlZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9wcy5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmlkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5maXJzdF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5sYXN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnBvc2l0aW9uKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogcHJvcHMuaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImRldGFpbHNcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFxcdFxcdNCd0LXRgiDQtNCw0L3QvdGL0YUgOihcXG4gICAgICBcXHRcXHRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVfX2J1dHRvbnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcImVtcGxveWVlQ3JlYXRlXCIgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgZGFyazogXCJcIiB9IH0sIFtfdm0uX3YoXCJhZGRcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uTGVhdmVcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZC5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlbGV0ZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJlcnJvclwiLCBmYWI6IFwiXCIsIGxhcmdlOiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZURpYWxvZyhfdm0uc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1zbmFja2JhclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IF92bS5zbmFja2JhclRpbWVvdXQsXG4gICAgICAgICAgICAgICAgdG9wOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibXVsdGktbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc25hY2tiYXJTaG93LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zbmFja2JhclNob3cgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic25hY2tiYXJTaG93XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KFwiZGVsZXRlX2RvbmVcIikpICsgXCJcXG4gICAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwaW5rXCIgfSxcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zNTBhZGViOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzUwYWRlYjlcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sInNvdXJjZVJvb3QiOiIifQ==