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
exports.push([module.i, "\n.table__buttons[data-v-350adeb9] {\n\tposition: absolute;\n\tbottom: -50px;\n}\n.dialog__activator[data-v-350adeb9] {\n\tposition: absolute;\n\tbottom: -30px;\n\tleft: 40px;\n\tz-index: 1;\n}\n.card__title[data-v-350adeb9] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n.card__actions[data-v-350adeb9] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/List.vue"],"names":[],"mappings":";AAsKA;CACA,mBAAA;CACA,cAAA;CACA;AAEA;CACA,mBAAA;CACA,cAAA;CACA,WAAA;CACA,WAAA;CACA;AACA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA;AACA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div id=\"inspire\">\r\n      <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n\t\t\t\t\t<v-card-title>\r\n\t\t\t\t\t\t<span class=\"headline\">{{ $t('attention') }}</span>\r\n\t\t\t\t\t</v-card-title>\r\n\t\t\t\t\t<v-card-text>\r\n\t\t\t\t\t\t<v-flex xs12>{{deleteMsg}}</v-flex>\r\n\t\t\t\t\t</v-card-text>\r\n\t\t\t\t\t<v-card-actions>\r\n\t\t\t\t\t\t<v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n\t\t\t\t\t\t<v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n\t\t\t\t\t</v-card-actions>\r\n        </v-card>\r\n      </v-dialog>  \r\n      <v-card>\r\n      \t<v-card-title>\r\n\t      \t<h2>{{ $t('employees') }}</h2>\r\n\t      \t<v-spacer></v-spacer>\r\n\t      \t<v-text-field\r\n\t\t\t\t\t\tappend-icon=\"search\"\r\n\t\t\t\t\t\t:label=\"$t('search_input')\"\r\n\t\t\t\t\t\tsingle-line\t\t\t\r\n\t\t\t\t\t\tv-model=\"search\"\r\n\t      \t></v-text-field>\r\n      \t</v-card-title>\r\n      <v-data-table\r\n        :headers=\"headers\"\r\n        :items=\"items\"\r\n        :search=\"search\"\r\n        v-model=\"selected\"\r\n        select-all\r\n        item-key=\"id\"\r\n\t\t\t\t:no-results-text=\"$t('no_match_found')\"\r\n       \t:rows-per-page-text=\"$t('strings')\"\r\n        class=\"elevation-1\"\r\n      >\r\n        <template slot=\"items\" slot-scope=\"props\">\r\n        \t<td>\r\n\t\t        <v-checkbox\r\n\t\t          primary\r\n\t\t          hide-details\r\n\t\t          v-model=\"props.selected\"\r\n\t\t        ></v-checkbox>\r\n\t\t      </td>\r\n          <td>{{ props.item.id }}</td>\r\n          <td>{{ props.item.first_name }}</td>\r\n          <td>{{ props.item.last_name }}</td>\r\n          <td>{{ props.item.position }}</td>\r\n          <td>\r\n          \t<v-btn outline round :to=\"{name: 'employee', params: {id: props.item.id}}\">{{ $t('details') }}</v-btn>   \r\n          </td>\r\n        </template>\r\n\t\t\t\t<template slot=\"no-data\">\r\n          <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n        \t\tНет данных :(\r\n      \t\t</v-alert>\r\n        </template>\r\n\t\t\t</v-data-table>\r\n\t\t\t<div class=\"table__buttons\">\r\n\t\t\t\t<v-btn fab dark large color=\"cyan\"\r\n\t\t\t\t\t\t\t:to=\"{name: 'employeeCreate'}\">\r\n      \t\t<v-icon dark>add</v-icon>\r\n    \t\t</v-btn>\r\n    \t\t<transition  enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n\t\t\t \t<v-btn v-show=\"selected.length > 0\" \r\n\t\t\t\t\t\tclass=\"delete-btn\" color=\"error\" \r\n\t\t\t\t\t\tfab large dark\r\n\t\t\t\t\t\t@click=\"deleteDialog(selected)\"\r\n\t\t\t\t\t\t>\r\n      \t\t<v-icon>delete</v-icon>\r\n    \t\t</v-btn>\r\n\t\t\t</transition>\r\n\t\t\t</div>\r\n\t\t\t<v-snackbar\r\n      \t:timeout=\"snackbarTimeout\"\r\n      \ttop\r\n      \tv-model=\"snackbarShow\"\r\n      \tmulti-line\r\n      \tcolor=\"info\"\r\n    \t>\r\n      {{ $t('delete_done') }}\r\n      <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n    </v-snackbar>\t\t\r\n\t\t</v-card>\t\t\r\n\t</div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\texport default {\r\n\t\tdata: () => ({\r\n\t\t\tsnackbarShow: false,\r\n\t\t\tsnackbarTimeout: 10000,\r\n      // Поиск / Выборка\r\n\t\t\tsearch: '',\r\n\t\t\tselected: [],\r\n\t\t\tdialog: false,\r\n\t\t\t// Удаление\r\n\t\t\tdeleteWindow: false,\r\n\t\t\tdeleteCategory: null,\r\n\t\t\tdelMode: 'single',\r\n\t\t\t// Заголовки таблицы\r\n\t\t\theaders: [{\r\n\t\t\t\t\ttext: 'ID',\r\n\t\t\t\t\talign: 'left',\r\n\t\t\t\t\tsortable: false,\r\n\t\t\t\t\tvalue: 'id'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Имя',\r\n\t\t\t\t\tvalue: 'first_name'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Фамилия',\r\n\t\t\t\t\tvalue: 'last_name'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Должность',\r\n\t\t\t\t\tvalue: 'position'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: '',\r\n\t\t\t\t\tsortable: false\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}),\r\n\t\tcomputed: {\r\n\t\t\tdeleteMsg() {\r\n\t\t\t\treturn (this.selected.length == 1) ? this.$t('delete_item_confirm') :\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t this.$t('delete_items_confirm');\r\n\t\t\t},\r\n\t\t\t...mapGetters({\r\n      items: 'AdminEmployees/employees'\r\n    \t})\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tdeleteDialog(item) {\r\n\t\t\t\tthis.deleteWindow = true;\r\n\t\t\t\tthis.deleteCategory = item;\r\n\t\t\t},\r\n\t\t\tdeleteConfirm() {\r\n\t\t\t\tthis.selected.forEach(el => this.deleteItem(el.id));\r\n\t\t\t\tthis.selected = [];\r\n\t\t\t\tthis.deleteWindow = false;\r\n\t\t\t  this.editedID = null;\t\r\n\t\t\t  this.snackbarShow = true;\t\t\t\r\n\t\t\t},\r\n\t\t\tdeleteCancel() {\r\n\t\t\t\tthis.deleteCategory = null;\r\n\t\t\t\tthis.deleteWindow   = false;\r\n\t\t\t},\r\n\t\t\tclose() {\r\n\t\t\t\tthis.dialog = false;\r\n\t\t\t\tthis.editedItem = Object.assign({}, this.defaultItem);\r\n\t\t\t\tthis.editedIndex = -1;\r\n\t\t\t},\r\n\t\t\t...mapActions({\r\n\t\t\t\tloadItems: 'AdminEmployees/load',\r\n\t\t\t\tdeleteItem: 'AdminEmployees/remove'\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t.table__buttons {\r\n\t\tposition: absolute;\r\n\t\tbottom: -50px;\r\n\t}\r\n\t\r\n\t.dialog__activator {\r\n\t\tposition: absolute;\r\n\t\tbottom: -30px;\r\n\t\tleft: 40px;\r\n\t\tz-index: 1;\r\n\t}\r\n\t.card__title {\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.card__actions {\r\n\t\tjustify-content: center;\r\n\t}\r\n</style>\r\n"],"sourceRoot":""}]);

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
			return this.selected.length == 1 ? this.$t('delete_item_confirm') : this.$t('delete_items_confirm');
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
              _c("h2", [_vm._v(_vm._s(_vm.$t("employees")))]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZT9jMzk4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlPzY1NDciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlP2FkMjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSw2REFBOEQsdUJBQXVCLGtCQUFrQixHQUFHLHVDQUF1Qyx1QkFBdUIs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrQ0FBK0M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvOC4zN2EzN2VlMzViNzAzMDU4MDk1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0zNTBhZGViOVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXGVtcGxveWVlc1xcXFxMaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNTBhZGViOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM1MGFkZWI5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI5NDU0N2JhOFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM1MGFkZWI5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzUwYWRlYjlcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYmxlX19idXR0b25zW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IC01MHB4O1xcbn1cXG4uZGlhbG9nX19hY3RpdmF0b3JbZGF0YS12LTM1MGFkZWI5XSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogLTMwcHg7XFxuXFx0bGVmdDogNDBweDtcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG4uY2FyZF9fdGl0bGVbZGF0YS12LTM1MGFkZWI5XSB7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNhcmRfX2FjdGlvbnNbZGF0YS12LTM1MGFkZWI5XSB7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNLQTtDQUNBLG1CQUFBO0NBQ0EsY0FBQTtDQUNBO0FBRUE7Q0FDQSxtQkFBQTtDQUNBLGNBQUE7Q0FDQSxXQUFBO0NBQ0EsV0FBQTtDQUNBO0FBQ0E7Q0FDQSx5QkFBQTtLQUFBLHNCQUFBO1NBQUEsd0JBQUE7Q0FDQTtBQUNBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkxpc3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgaWQ9XFxcImluc3BpcmVcXFwiPlxcclxcbiAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkZWxldGVXaW5kb3dcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgICAgPHYtY2FyZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di1jYXJkLXRpdGxlPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+e3sgJHQoJ2F0dGVudGlvbicpIH19PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdi1jYXJkLXRpdGxlPlxcclxcblxcdFxcdFxcdFxcdFxcdDx2LWNhcmQtdGV4dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1mbGV4IHhzMTI+e3tkZWxldGVNc2d9fTwvdi1mbGV4PlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdi1jYXJkLXRleHQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtY2FyZC1hY3Rpb25zPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJpbmZvXFxcIiBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDb25maXJtXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICAgIDwvdi1kaWFsb2c+ICBcXHJcXG4gICAgICA8di1jYXJkPlxcclxcbiAgICAgIFxcdDx2LWNhcmQtdGl0bGU+XFxyXFxuXFx0ICAgICAgXFx0PGgyPnt7ICR0KCdlbXBsb3llZXMnKSB9fTwvaDI+XFxyXFxuXFx0ICAgICAgXFx0PHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuXFx0ICAgICAgXFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGFwcGVuZC1pY29uPVxcXCJzZWFyY2hcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0OmxhYmVsPVxcXCIkdCgnc2VhcmNoX2lucHV0JylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0c2luZ2xlLWxpbmVcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR2LW1vZGVsPVxcXCJzZWFyY2hcXFwiXFxyXFxuXFx0ICAgICAgXFx0Pjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgIFxcdDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgIDx2LWRhdGEtdGFibGVcXHJcXG4gICAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcclxcbiAgICAgICAgOml0ZW1zPVxcXCJpdGVtc1xcXCJcXHJcXG4gICAgICAgIDpzZWFyY2g9XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgIHYtbW9kZWw9XFxcInNlbGVjdGVkXFxcIlxcclxcbiAgICAgICAgc2VsZWN0LWFsbFxcclxcbiAgICAgICAgaXRlbS1rZXk9XFxcImlkXFxcIlxcclxcblxcdFxcdFxcdFxcdDpuby1yZXN1bHRzLXRleHQ9XFxcIiR0KCdub19tYXRjaF9mb3VuZCcpXFxcIlxcclxcbiAgICAgICBcXHQ6cm93cy1wZXItcGFnZS10ZXh0PVxcXCIkdCgnc3RyaW5ncycpXFxcIlxcclxcbiAgICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIlxcclxcbiAgICAgID5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJpdGVtc1xcXCIgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiPlxcclxcbiAgICAgICAgXFx0PHRkPlxcclxcblxcdFxcdCAgICAgICAgPHYtY2hlY2tib3hcXHJcXG5cXHRcXHQgICAgICAgICAgcHJpbWFyeVxcclxcblxcdFxcdCAgICAgICAgICBoaWRlLWRldGFpbHNcXHJcXG5cXHRcXHQgICAgICAgICAgdi1tb2RlbD1cXFwicHJvcHMuc2VsZWN0ZWRcXFwiXFxyXFxuXFx0XFx0ICAgICAgICA+PC92LWNoZWNrYm94PlxcclxcblxcdFxcdCAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cXHJcXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uZmlyc3RfbmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmxhc3RfbmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLnBvc2l0aW9uIH19PC90ZD5cXHJcXG4gICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICBcXHQ8di1idG4gb3V0bGluZSByb3VuZCA6dG89XFxcIntuYW1lOiAnZW1wbG95ZWUnLCBwYXJhbXM6IHtpZDogcHJvcHMuaXRlbS5pZH19XFxcIj57eyAkdCgnZGV0YWlscycpIH19PC92LWJ0bj4gICBcXHJcXG4gICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0XFx0PHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcclxcbiAgICAgICAgICA8di1hbGVydCA6dmFsdWU9XFxcInRydWVcXFwiIGNvbG9yPVxcXCJyZWRcXFwiIGljb249XFxcIndhcm5pbmdcXFwiPlxcclxcbiAgICAgICAgXFx0XFx00J3QtdGCINC00LDQvdC90YvRhSA6KFxcclxcbiAgICAgIFxcdFxcdDwvdi1hbGVydD5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0PC92LWRhdGEtdGFibGU+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwidGFibGVfX2J1dHRvbnNcXFwiPlxcclxcblxcdFxcdFxcdFxcdDx2LWJ0biBmYWIgZGFyayBsYXJnZSBjb2xvcj1cXFwiY3lhblxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ6dG89XFxcIntuYW1lOiAnZW1wbG95ZWVDcmVhdGUnfVxcXCI+XFxyXFxuICAgICAgXFx0XFx0PHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxcclxcbiAgICBcXHRcXHQ8L3YtYnRuPlxcclxcbiAgICBcXHRcXHQ8dHJhbnNpdGlvbiAgZW50ZXItYWN0aXZlLWNsYXNzPVxcXCJidXR0b25FbnRlclxcXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVxcXCJidXR0b25MZWF2ZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXHJcXG5cXHRcXHRcXHQgXFx0PHYtYnRuIHYtc2hvdz1cXFwic2VsZWN0ZWQubGVuZ3RoID4gMFxcXCIgXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y2xhc3M9XFxcImRlbGV0ZS1idG5cXFwiIGNvbG9yPVxcXCJlcnJvclxcXCIgXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZmFiIGxhcmdlIGRhcmtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRAY2xpY2s9XFxcImRlbGV0ZURpYWxvZyhzZWxlY3RlZClcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PlxcclxcbiAgICAgIFxcdFxcdDx2LWljb24+ZGVsZXRlPC92LWljb24+XFxyXFxuICAgIFxcdFxcdDwvdi1idG4+XFxyXFxuXFx0XFx0XFx0PC90cmFuc2l0aW9uPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDx2LXNuYWNrYmFyXFxyXFxuICAgICAgXFx0OnRpbWVvdXQ9XFxcInNuYWNrYmFyVGltZW91dFxcXCJcXHJcXG4gICAgICBcXHR0b3BcXHJcXG4gICAgICBcXHR2LW1vZGVsPVxcXCJzbmFja2JhclNob3dcXFwiXFxyXFxuICAgICAgXFx0bXVsdGktbGluZVxcclxcbiAgICAgIFxcdGNvbG9yPVxcXCJpbmZvXFxcIlxcclxcbiAgICBcXHQ+XFxyXFxuICAgICAge3sgJHQoJ2RlbGV0ZV9kb25lJykgfX1cXHJcXG4gICAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicGlua1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwic25hY2tiYXJTaG93ID0gZmFsc2VcXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgPC92LXNuYWNrYmFyPlxcdFxcdFxcclxcblxcdFxcdDwvdi1jYXJkPlxcdFxcdFxcclxcblxcdDwvZGl2PlxcdFxcdFxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5cXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xcclxcblxcdGV4cG9ydCBkZWZhdWx0IHtcXHJcXG5cXHRcXHRkYXRhOiAoKSA9PiAoe1xcclxcblxcdFxcdFxcdHNuYWNrYmFyU2hvdzogZmFsc2UsXFxyXFxuXFx0XFx0XFx0c25hY2tiYXJUaW1lb3V0OiAxMDAwMCxcXHJcXG4gICAgICAvLyDQn9C+0LjRgdC6IC8g0JLRi9Cx0L7RgNC60LBcXHJcXG5cXHRcXHRcXHRzZWFyY2g6ICcnLFxcclxcblxcdFxcdFxcdHNlbGVjdGVkOiBbXSxcXHJcXG5cXHRcXHRcXHRkaWFsb2c6IGZhbHNlLFxcclxcblxcdFxcdFxcdC8vINCj0LTQsNC70LXQvdC40LVcXHJcXG5cXHRcXHRcXHRkZWxldGVXaW5kb3c6IGZhbHNlLFxcclxcblxcdFxcdFxcdGRlbGV0ZUNhdGVnb3J5OiBudWxsLFxcclxcblxcdFxcdFxcdGRlbE1vZGU6ICdzaW5nbGUnLFxcclxcblxcdFxcdFxcdC8vINCX0LDQs9C+0LvQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xcclxcblxcdFxcdFxcdGhlYWRlcnM6IFt7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGV4dDogJ0lEJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHRhbGlnbjogJ2xlZnQnLFxcclxcblxcdFxcdFxcdFxcdFxcdHNvcnRhYmxlOiBmYWxzZSxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ2lkJ1xcclxcblxcdFxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0XFx0e1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQ6ICfQmNC80Y8nLFxcclxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAnZmlyc3RfbmFtZSdcXHJcXG5cXHRcXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdFxcdHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0OiAn0KTQsNC80LjQu9C40Y8nLFxcclxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAnbGFzdF9uYW1lJ1xcclxcblxcdFxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0XFx0e1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0YwnLFxcclxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAncG9zaXRpb24nXFxyXFxuXFx0XFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRcXHR7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGV4dDogJycsXFxyXFxuXFx0XFx0XFx0XFx0XFx0c29ydGFibGU6IGZhbHNlXFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdF1cXHJcXG5cXHRcXHR9KSxcXHJcXG5cXHRcXHRjb21wdXRlZDoge1xcclxcblxcdFxcdFxcdGRlbGV0ZU1zZygpIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gdGhpcy4kdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQgdGhpcy4kdCgnZGVsZXRlX2l0ZW1zX2NvbmZpcm0nKTtcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdC4uLm1hcEdldHRlcnMoe1xcclxcbiAgICAgIGl0ZW1zOiAnQWRtaW5FbXBsb3llZXMvZW1wbG95ZWVzJ1xcclxcbiAgICBcXHR9KVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0bWV0aG9kczoge1xcclxcblxcdFxcdFxcdGRlbGV0ZURpYWxvZyhpdGVtKSB7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0ZGVsZXRlQ29uZmlybSgpIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLnNlbGVjdGVkLmZvckVhY2goZWwgPT4gdGhpcy5kZWxldGVJdGVtKGVsLmlkKSk7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5zZWxlY3RlZCA9IFtdO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuXFx0XFx0XFx0ICB0aGlzLmVkaXRlZElEID0gbnVsbDtcXHRcXHJcXG5cXHRcXHRcXHQgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGRlbGV0ZUNhbmNlbCgpIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gbnVsbDtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlbGV0ZVdpbmRvdyAgID0gZmFsc2U7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRjbG9zZSgpIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRpYWxvZyA9IGZhbHNlO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdC4uLm1hcEFjdGlvbnMoe1xcclxcblxcdFxcdFxcdFxcdGxvYWRJdGVtczogJ0FkbWluRW1wbG95ZWVzL2xvYWQnLFxcclxcblxcdFxcdFxcdFxcdGRlbGV0ZUl0ZW06ICdBZG1pbkVtcGxveWVlcy9yZW1vdmUnXFxyXFxuXFx0XFx0XFx0fSlcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuXFx0LnRhYmxlX19idXR0b25zIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0Ym90dG9tOiAtNTBweDtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LmRpYWxvZ19fYWN0aXZhdG9yIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0Ym90dG9tOiAtMzBweDtcXHJcXG5cXHRcXHRsZWZ0OiA0MHB4O1xcclxcblxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0fVxcclxcblxcdC5jYXJkX190aXRsZSB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcdC5jYXJkX19hY3Rpb25zIHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzUwYWRlYjlcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImluc3BpcmVcIj5cclxuICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZWxldGVXaW5kb3dcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICAgIDx2LWNhcmQ+XHJcblx0XHRcdFx0XHQ8di1jYXJkLXRpdGxlPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+e3sgJHQoJ2F0dGVudGlvbicpIH19PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC92LWNhcmQtdGl0bGU+XHJcblx0XHRcdFx0XHQ8di1jYXJkLXRleHQ+XHJcblx0XHRcdFx0XHRcdDx2LWZsZXggeHMxMj57e2RlbGV0ZU1zZ319PC92LWZsZXg+XHJcblx0XHRcdFx0XHQ8L3YtY2FyZC10ZXh0PlxyXG5cdFx0XHRcdFx0PHYtY2FyZC1hY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8di1idG4gb3V0bGluZSBjb2xvcj1cImluZm9cIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ29uZmlybVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuXHRcdFx0XHRcdFx0PHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDYW5jZWxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG5cdFx0XHRcdFx0PC92LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICA8L3YtY2FyZD5cclxuICAgICAgPC92LWRpYWxvZz4gIFxyXG4gICAgICA8di1jYXJkPlxyXG4gICAgICBcdDx2LWNhcmQtdGl0bGU+XHJcblx0ICAgICAgXHQ8aDI+e3sgJHQoJ2VtcGxveWVlcycpIH19PC9oMj5cclxuXHQgICAgICBcdDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG5cdCAgICAgIFx0PHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0XHRhcHBlbmQtaWNvbj1cInNlYXJjaFwiXHJcblx0XHRcdFx0XHRcdDpsYWJlbD1cIiR0KCdzZWFyY2hfaW5wdXQnKVwiXHJcblx0XHRcdFx0XHRcdHNpbmdsZS1saW5lXHRcdFx0XHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzZWFyY2hcIlxyXG5cdCAgICAgIFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICBcdDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICA8di1kYXRhLXRhYmxlXHJcbiAgICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcclxuICAgICAgICA6aXRlbXM9XCJpdGVtc1wiXHJcbiAgICAgICAgOnNlYXJjaD1cInNlYXJjaFwiXHJcbiAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkXCJcclxuICAgICAgICBzZWxlY3QtYWxsXHJcbiAgICAgICAgaXRlbS1rZXk9XCJpZFwiXHJcblx0XHRcdFx0Om5vLXJlc3VsdHMtdGV4dD1cIiR0KCdub19tYXRjaF9mb3VuZCcpXCJcclxuICAgICAgIFx0OnJvd3MtcGVyLXBhZ2UtdGV4dD1cIiR0KCdzdHJpbmdzJylcIlxyXG4gICAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpdGVtc1wiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxyXG4gICAgICAgIFx0PHRkPlxyXG5cdFx0ICAgICAgICA8di1jaGVja2JveFxyXG5cdFx0ICAgICAgICAgIHByaW1hcnlcclxuXHRcdCAgICAgICAgICBoaWRlLWRldGFpbHNcclxuXHRcdCAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuc2VsZWN0ZWRcIlxyXG5cdFx0ICAgICAgICA+PC92LWNoZWNrYm94PlxyXG5cdFx0ICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmZpcnN0X25hbWUgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ubGFzdF9uYW1lIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLnBvc2l0aW9uIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgIFx0PHYtYnRuIG91dGxpbmUgcm91bmQgOnRvPVwie25hbWU6ICdlbXBsb3llZScsIHBhcmFtczoge2lkOiBwcm9wcy5pdGVtLmlkfX1cIj57eyAkdCgnZGV0YWlscycpIH19PC92LWJ0bj4gICBcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHRcdFx0XHQ8dGVtcGxhdGUgc2xvdD1cIm5vLWRhdGFcIj5cclxuICAgICAgICAgIDx2LWFsZXJ0IDp2YWx1ZT1cInRydWVcIiBjb2xvcj1cInJlZFwiIGljb249XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgXHRcdNCd0LXRgiDQtNCw0L3QvdGL0YUgOihcclxuICAgICAgXHRcdDwvdi1hbGVydD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8L3YtZGF0YS10YWJsZT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlX19idXR0b25zXCI+XHJcblx0XHRcdFx0PHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVwiY3lhblwiXHJcblx0XHRcdFx0XHRcdFx0OnRvPVwie25hbWU6ICdlbXBsb3llZUNyZWF0ZSd9XCI+XHJcbiAgICAgIFx0XHQ8di1pY29uIGRhcms+YWRkPC92LWljb24+XHJcbiAgICBcdFx0PC92LWJ0bj5cclxuICAgIFx0XHQ8dHJhbnNpdGlvbiAgZW50ZXItYWN0aXZlLWNsYXNzPVwiYnV0dG9uRW50ZXJcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJidXR0b25MZWF2ZVwiIG1vZGU9XCJvdXQtaW5cIj5cclxuXHRcdFx0IFx0PHYtYnRuIHYtc2hvdz1cInNlbGVjdGVkLmxlbmd0aCA+IDBcIiBcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJkZWxldGUtYnRuXCIgY29sb3I9XCJlcnJvclwiIFxyXG5cdFx0XHRcdFx0XHRmYWIgbGFyZ2UgZGFya1xyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXCJcclxuXHRcdFx0XHRcdFx0PlxyXG4gICAgICBcdFx0PHYtaWNvbj5kZWxldGU8L3YtaWNvbj5cclxuICAgIFx0XHQ8L3YtYnRuPlxyXG5cdFx0XHQ8L3RyYW5zaXRpb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8di1zbmFja2JhclxyXG4gICAgICBcdDp0aW1lb3V0PVwic25hY2tiYXJUaW1lb3V0XCJcclxuICAgICAgXHR0b3BcclxuICAgICAgXHR2LW1vZGVsPVwic25hY2tiYXJTaG93XCJcclxuICAgICAgXHRtdWx0aS1saW5lXHJcbiAgICAgIFx0Y29sb3I9XCJpbmZvXCJcclxuICAgIFx0PlxyXG4gICAgICB7eyAkdCgnZGVsZXRlX2RvbmUnKSB9fVxyXG4gICAgICA8di1idG4gZmxhdCBjb2xvcj1cInBpbmtcIiBAY2xpY2submF0aXZlPVwic25hY2tiYXJTaG93ID0gZmFsc2VcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XHJcbiAgICA8L3Ytc25hY2tiYXI+XHRcdFxyXG5cdFx0PC92LWNhcmQ+XHRcdFxyXG5cdDwvZGl2Plx0XHRcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhOiAoKSA9PiAoe1xyXG5cdFx0XHRzbmFja2JhclNob3c6IGZhbHNlLFxyXG5cdFx0XHRzbmFja2JhclRpbWVvdXQ6IDEwMDAwLFxyXG4gICAgICAvLyDQn9C+0LjRgdC6IC8g0JLRi9Cx0L7RgNC60LBcclxuXHRcdFx0c2VhcmNoOiAnJyxcclxuXHRcdFx0c2VsZWN0ZWQ6IFtdLFxyXG5cdFx0XHRkaWFsb2c6IGZhbHNlLFxyXG5cdFx0XHQvLyDQo9C00LDQu9C10L3QuNC1XHJcblx0XHRcdGRlbGV0ZVdpbmRvdzogZmFsc2UsXHJcblx0XHRcdGRlbGV0ZUNhdGVnb3J5OiBudWxsLFxyXG5cdFx0XHRkZWxNb2RlOiAnc2luZ2xlJyxcclxuXHRcdFx0Ly8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXHJcblx0XHRcdGhlYWRlcnM6IFt7XHJcblx0XHRcdFx0XHR0ZXh0OiAnSUQnLFxyXG5cdFx0XHRcdFx0YWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdHNvcnRhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRcdHZhbHVlOiAnaWQnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAn0JjQvNGPJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAnZmlyc3RfbmFtZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICfQpNCw0LzQuNC70LjRjycsXHJcblx0XHRcdFx0XHR2YWx1ZTogJ2xhc3RfbmFtZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0YwnLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICdwb3NpdGlvbidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICcnLFxyXG5cdFx0XHRcdFx0c29ydGFibGU6IGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9KSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGRlbGV0ZU1zZygpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gdGhpcy4kdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdGhpcy4kdCgnZGVsZXRlX2l0ZW1zX2NvbmZpcm0nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Li4ubWFwR2V0dGVycyh7XHJcbiAgICAgIGl0ZW1zOiAnQWRtaW5FbXBsb3llZXMvZW1wbG95ZWVzJ1xyXG4gICAgXHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZGVsZXRlRGlhbG9nKGl0ZW0pIHtcclxuXHRcdFx0XHR0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5kZWxldGVDYXRlZ29yeSA9IGl0ZW07XHJcblx0XHRcdH0sXHJcblx0XHRcdGRlbGV0ZUNvbmZpcm0oKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG5cdFx0XHQgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1x0XHJcblx0XHRcdCAgdGhpcy5zbmFja2JhclNob3cgPSB0cnVlO1x0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWxldGVDYW5jZWwoKSB7XHJcblx0XHRcdFx0dGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5kZWxldGVXaW5kb3cgICA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xyXG5cdFx0XHRcdHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XHJcblx0XHRcdFx0bG9hZEl0ZW1zOiAnQWRtaW5FbXBsb3llZXMvbG9hZCcsXHJcblx0XHRcdFx0ZGVsZXRlSXRlbTogJ0FkbWluRW1wbG95ZWVzL3JlbW92ZSdcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudGFibGVfX2J1dHRvbnMge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAtNTBweDtcclxuXHR9XHJcblx0XHJcblx0LmRpYWxvZ19fYWN0aXZhdG9yIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogLTMwcHg7XHJcblx0XHRsZWZ0OiA0MHB4O1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHR9XHJcblx0LmNhcmRfX3RpdGxlIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQuY2FyZF9fYWN0aW9ucyB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImluc3BpcmVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGV0ZVdpbmRvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVdpbmRvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlV2luZG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiYXR0ZW50aW9uXCIpKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVsZXRlTXNnKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbXBsb3llZXNcIikpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJzZWFyY2hfaW5wdXRcIiksXG4gICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3QtYWxsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgXCJuby1yZXN1bHRzLXRleHRcIjogX3ZtLiR0KFwibm9fbWF0Y2hfZm91bmRcIiksXG4gICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLXRleHRcIjogX3ZtLiR0KFwic3RyaW5nc1wiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHByaW1hcnk6IFwiXCIsIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcywgXCJzZWxlY3RlZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9wcy5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmlkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5maXJzdF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5sYXN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnBvc2l0aW9uKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogcHJvcHMuaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImRldGFpbHNcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFxcdFxcdNCd0LXRgiDQtNCw0L3QvdGL0YUgOihcXG4gICAgICBcXHRcXHRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVfX2J1dHRvbnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcImVtcGxveWVlQ3JlYXRlXCIgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgZGFyazogXCJcIiB9IH0sIFtfdm0uX3YoXCJhZGRcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uTGVhdmVcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZC5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlbGV0ZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJlcnJvclwiLCBmYWI6IFwiXCIsIGxhcmdlOiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZURpYWxvZyhfdm0uc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1zbmFja2JhclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IF92bS5zbmFja2JhclRpbWVvdXQsXG4gICAgICAgICAgICAgICAgdG9wOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibXVsdGktbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc25hY2tiYXJTaG93LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zbmFja2JhclNob3cgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic25hY2tiYXJTaG93XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KFwiZGVsZXRlX2RvbmVcIikpICsgXCJcXG4gICAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwaW5rXCIgfSxcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zNTBhZGViOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzUwYWRlYjlcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sInNvdXJjZVJvb3QiOiIifQ==