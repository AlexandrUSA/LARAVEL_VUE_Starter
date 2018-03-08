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
exports.push([module.i, "\n.table__buttons[data-v-350adeb9] {\n\tposition: absolute;\n\tbottom: -50px;\n}\n.dialog__activator[data-v-350adeb9] {\n\tposition: absolute;\n\tbottom: -30px;\n\tleft: 40px;\n\tz-index: 1;\n}\n.card__title[data-v-350adeb9] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n.card__actions[data-v-350adeb9] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/List.vue"],"names":[],"mappings":";AAsKA;CACA,mBAAA;CACA,cAAA;CACA;AAEA;CACA,mBAAA;CACA,cAAA;CACA,WAAA;CACA,WAAA;CACA;AACA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA;AACA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div id=\"inspire\">\r\n      <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n\t\t\t\t\t<v-card-title @click=\"snackbar.show = true\">\r\n\t\t\t\t\t\t<span class=\"headline\">{{ $t('attention') }}</span>\r\n\t\t\t\t\t</v-card-title>\r\n\t\t\t\t\t<v-card-text>\r\n\t\t\t\t\t\t<v-flex xs12>{{deleteMsg}}</v-flex>\r\n\t\t\t\t\t</v-card-text>\r\n\t\t\t\t\t<v-card-actions>\r\n\t\t\t\t\t\t<v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n\t\t\t\t\t\t<v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n\t\t\t\t\t</v-card-actions>\r\n        </v-card>\r\n      </v-dialog>  \r\n      <v-card>\r\n      \t<v-card-title>\r\n\t      \t<h2>{{ $t('employees') }}</h2>\r\n\t      \t<v-spacer></v-spacer>\r\n\t      \t<v-text-field\r\n\t\t\t\t\t\tappend-icon=\"search\"\r\n\t\t\t\t\t\t:label=\"$t('search_input')\"\r\n\t\t\t\t\t\tsingle-line\t\t\t\r\n\t\t\t\t\t\tv-model=\"search\"\r\n\t      \t></v-text-field>\r\n      \t</v-card-title>\r\n      <v-data-table\r\n        :headers=\"headers\"\r\n        :items=\"items\"\r\n        :search=\"search\"\r\n        v-model=\"selected\"\r\n        select-all\r\n        item-key=\"id\"\r\n\t\t\t\t:no-results-text=\"$t('no_match_found')\"\r\n       \t:rows-per-page-text=\"$t('strings')\"\r\n        class=\"elevation-1\"\r\n      >\r\n        <template slot=\"items\" slot-scope=\"props\">\r\n        \t<td>\r\n\t\t        <v-checkbox\r\n\t\t          primary\r\n\t\t          hide-details\r\n\t\t          v-model=\"props.selected\"\r\n\t\t        ></v-checkbox>\r\n\t\t      </td>\r\n          <td>{{ props.item.id }}</td>\r\n          <td>{{ props.item.first_name }}</td>\r\n          <td>{{ props.item.last_name }}</td>\r\n          <td>{{ props.item.position }}</td>\r\n          <td>\r\n          \t<v-btn outline round :to=\"{name: 'employee', params: {id: props.item.id}}\">{{ $t('details') }}</v-btn>   \r\n          </td>\r\n        </template>\r\n\t\t\t\t<template slot=\"no-data\">\r\n          <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n        \t\tНет данных :(\r\n      \t\t</v-alert>\r\n        </template>\r\n\t\t\t</v-data-table>\r\n\t\t\t<div class=\"table__buttons\">\r\n\t\t\t\t<v-btn fab dark large color=\"cyan\"\r\n\t\t\t\t\t\t\t:to=\"{name: 'employeeCreate'}\">\r\n      \t\t<v-icon dark>add</v-icon>\r\n    \t\t</v-btn>\r\n    \t\t<transition  enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n\t\t\t \t<v-btn v-show=\"selected.length > 0\" \r\n\t\t\t\t\t\tclass=\"delete-btn\" color=\"error\" \r\n\t\t\t\t\t\tfab large dark\r\n\t\t\t\t\t\t@click=\"deleteDialog(selected)\"\r\n\t\t\t\t\t\t>\r\n      \t\t<v-icon>delete</v-icon>\r\n    \t\t</v-btn>\r\n\t\t\t</transition>\r\n\t\t\t</div>\r\n\t\t\t<v-snackbar\r\n      \t:timeout=\"snackbar.timeout\"\r\n      \ttop\r\n      \tv-model=\"snackbar.show\"\r\n    \t>\r\n      Запись быфла удалена!\r\n      <v-btn flat color=\"pink\" @click.native=\"snackbar = false\">{{ $t('ok') }}</v-btn>\r\n    </v-snackbar>\t\t\r\n\t\t</v-card>\t\t\r\n\t</div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\texport default {\r\n\t\tdata: () => ({\r\n\t\t\tsnackbar: {\r\n\t\t\t\ttimeout: 10,\r\n\t\t\t\tshow: false\r\n\t\t\t},\r\n      // Поиск / Выборка\r\n\t\t\tsearch: '',\r\n\t\t\tselected: [],\r\n\t\t\tdialog: false,\r\n\t\t\t// Удаление\r\n\t\t\tdeleteWindow: false,\r\n\t\t\tdeleteCategory: null,\r\n\t\t\tdelMode: 'single',\r\n\t\t\t// Заголовки таблицы\r\n\t\t\theaders: [{\r\n\t\t\t\t\ttext: 'ID',\r\n\t\t\t\t\talign: 'left',\r\n\t\t\t\t\tsortable: false,\r\n\t\t\t\t\tvalue: 'id'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Имя',\r\n\t\t\t\t\tvalue: 'first_name'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Фамилия',\r\n\t\t\t\t\tvalue: 'last_name'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Должность',\r\n\t\t\t\t\tvalue: 'position'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: '',\r\n\t\t\t\t\tsortable: false\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}),\r\n\t\tcomputed: {\r\n\t\t\tdeleteMsg() {\r\n\t\t\t\treturn (this.selected.length == 1) ? 'Вы действительно хотите удалить данный элемент?' :\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t 'Вы действительно хотите удалить выбранные элементы?';\r\n\t\t\t},\r\n\t\t\t...mapGetters({\r\n      items: 'AdminEmployees/employees'\r\n    \t})\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tdeleteDialog(item) {\r\n\t\t\t\tthis.deleteWindow = true;\r\n\t\t\t\tthis.deleteCategory = item;\r\n\t\t\t},\r\n\t\t\tdeleteConfirm() {\r\n\t\t\t\tthis.selected.forEach(el => this.deleteItem(el.id));\r\n\t\t\t\tthis.selected = [];\r\n\t\t\t\tthis.deleteWindow = false;\r\n\t\t\t  this.editedID = null;\t\r\n\t\t\t  this.snackbar.show = true;\t\t\r\n\t\t\t},\r\n\t\t\tdeleteCancel() {\r\n\t\t\t\tthis.deleteCategory = null;\r\n\t\t\t\tthis.deleteWindow   = false;\r\n\t\t\t},\r\n\t\t\tclose() {\r\n\t\t\t\tthis.dialog = false;\r\n\t\t\t\tthis.editedItem = Object.assign({}, this.defaultItem);\r\n\t\t\t\tthis.editedIndex = -1;\r\n\t\t\t},\r\n\t\t\t...mapActions({\r\n\t\t\t\tloadItems: 'AdminEmployees/load',\r\n\t\t\t\tdeleteItem: 'AdminEmployees/remove'\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t.table__buttons {\r\n\t\tposition: absolute;\r\n\t\tbottom: -50px;\r\n\t}\r\n\t\r\n\t.dialog__activator {\r\n\t\tposition: absolute;\r\n\t\tbottom: -30px;\r\n\t\tleft: 40px;\r\n\t\tz-index: 1;\r\n\t}\r\n\t.card__title {\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.card__actions {\r\n\t\tjustify-content: center;\r\n\t}\r\n</style>\r\n"],"sourceRoot":""}]);

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


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			snackbar: {
				timeout: 10,
				show: false
			},
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
			return this.selected.length == 1 ? 'Вы действительно хотите удалить данный элемент?' : 'Вы действительно хотите удалить выбранные элементы?';
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
			this.snackbar.show = true;
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
              _c(
                "v-card-title",
                {
                  on: {
                    click: function($event) {
                      _vm.snackbar.show = true
                    }
                  }
                },
                [
                  _c("span", { staticClass: "headline" }, [
                    _vm._v(_vm._s(_vm.$t("attention")))
                  ])
                ]
              ),
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
              attrs: { timeout: _vm.snackbar.timeout, top: "" },
              model: {
                value: _vm.snackbar.show,
                callback: function($$v) {
                  _vm.$set(_vm.snackbar, "show", $$v)
                },
                expression: "snackbar.show"
              }
            },
            [
              _vm._v("\n      Запись быфла удалена!\n      "),
              _c(
                "v-btn",
                {
                  attrs: { flat: "", color: "pink" },
                  nativeOn: {
                    click: function($event) {
                      _vm.snackbar = false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZT9jMzk4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlPzY1NDciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlP2FkMjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSw2REFBOEQsdUJBQXVCLGtCQUFrQixHQUFHLHVDQUF1Qyx1QkFBdUIsa0JBQWtCLGVBQWUsZUFBZSxHQUFHLGlDQUFpQyw2QkFBNkIsOEJBQThCLG9DQUFvQyxHQUFHLG1DQUFtQyw2QkFBNkIsOEJBQThCLG9DQUFvQyxHQUFHLFVBQVUsc0tBQXNLLE1BQU0sV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsMlFBQTJRLG1CQUFtQiw4RkFBOEYsV0FBVyxtSkFBbUosWUFBWSx3RkFBd0YsZ0JBQWdCLG1KQUFtSixtQkFBbUIsczNCQUFzM0IsaUJBQWlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLG1FQUFtRSwyQkFBMkIsbUJBQW1CLEtBQUssaUJBQWlCLHdYQUF3WCx1QkFBdUIsMnJCQUEyckIsWUFBWSxtSEFBbUgsdUJBQXVCLGFBQWEsc0JBQXNCLHNCQUFzQixxQkFBcUIsMERBQTBELGtRQUFrUSx5SEFBeUgsY0FBYyx3RUFBd0UsY0FBYywyRUFBMkUsY0FBYyw0RUFBNEUsY0FBYyxpRUFBaUUsb0JBQW9CLHFCQUFxQix1QkFBdUIsMk1BQTJNLFdBQVcsMEJBQTBCLHNEQUFzRCxVQUFVLG1CQUFtQiw4QkFBOEIscUNBQXFDLHVDQUF1QyxXQUFXLDRCQUE0QixnRUFBZ0UsK0JBQStCLHNDQUFzQyxpQ0FBaUMsd0NBQXdDLGVBQWUsMkJBQTJCLHVDQUF1Qyx3Q0FBd0MsV0FBVyxvQkFBb0IsZ0NBQWdDLDhDQUE4QyxvQkFBb0Isa0NBQWtDLFdBQVcsMEJBQTBCLHVHQUF1RyxVQUFVLE9BQU8sMERBQTBELDJCQUEyQixzQkFBc0IsT0FBTyxnQ0FBZ0MsMkJBQTJCLHNCQUFzQixtQkFBbUIsbUJBQW1CLE9BQU8sb0JBQW9CLGdDQUFnQyxPQUFPLHNCQUFzQixnQ0FBZ0MsT0FBTyxtQ0FBbUM7O0FBRTcyTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0ZBOztBQUNBOzs7OzthQUlBO1VBRUE7QUFIQTtBQUlBO1dBQ0E7YUFDQTtXQUNBO0FBQ0E7aUJBQ0E7bUJBQ0E7WUFDQTtBQUNBOztVQUVBO1dBQ0E7Y0FDQTtXQUVBO0FBTEE7VUFPQTtXQUVBO0FBSEE7VUFLQTtXQUVBO0FBSEE7VUFLQTtXQUVBO0FBSEE7VUFLQTtjQUlBO0FBTEE7QUFoQ0E7O0FBc0NBO2tDQUNBO3NDQUNBLG9EQUNBO0FBQ0E7O1NBSUE7QUFIQTtBQUlBOzRDQUNBO3VCQUNBO3lCQUNBO0FBQ0E7O0FBQ0E7OzsrQkFDQTs7bUJBQ0E7dUJBQ0E7bUJBQ0E7d0JBQ0E7QUFDQTt3Q0FDQTt5QkFDQTt1QkFDQTtBQUNBOzBCQUNBO2lCQUNBOzRDQUNBO3VCQUNBO0FBQ0E7O2FBRUE7Y0FHQTtBQUpBO0FBckVBLEc7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLGdCQUFnQixFQUFFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxTQUFTLFdBQVcsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQ0FBa0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLDZDQUE2QyxFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdDQUFnQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakIsK0JBQStCLFNBQVMsV0FBVyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0NBQStDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUNBQXlDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzguNjE1MzdiY2EzZWU1YTdhNjkwZjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM1MGFkZWI5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM1MGFkZWI5XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMzUwYWRlYjlcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxlbXBsb3llZXNcXFxcTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzUwYWRlYjlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNTBhZGViOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOTQ1NDdiYThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzlcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJsZV9fYnV0dG9uc1tkYXRhLXYtMzUwYWRlYjldIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAtNTBweDtcXG59XFxuLmRpYWxvZ19fYWN0aXZhdG9yW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IC0zMHB4O1xcblxcdGxlZnQ6IDQwcHg7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuLmNhcmRfX3RpdGxlW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jYXJkX19hY3Rpb25zW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvc3BhL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFzS0E7Q0FDQSxtQkFBQTtDQUNBLGNBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxjQUFBO0NBQ0EsV0FBQTtDQUNBLFdBQUE7Q0FDQTtBQUNBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLHlCQUFBO0tBQUEsc0JBQUE7U0FBQSx3QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGlkPVxcXCJpbnNwaXJlXFxcIj5cXHJcXG4gICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVsZXRlV2luZG93XFxcIiBtYXgtd2lkdGg9XFxcIjUwMHB4XFxcIj5cXHJcXG4gICAgICAgIDx2LWNhcmQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtY2FyZC10aXRsZSBAY2xpY2s9XFxcInNuYWNrYmFyLnNob3cgPSB0cnVlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPnt7ICR0KCdhdHRlbnRpb24nKSB9fTwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3YtY2FyZC10aXRsZT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di1jYXJkLXRleHQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3YtY2FyZC10ZXh0PlxcclxcblxcdFxcdFxcdFxcdFxcdDx2LWNhcmQtYWN0aW9ucz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiaW5mb1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ29uZmlybVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJlcnJvclxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ2FuY2VsXFxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdi1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICA8L3YtY2FyZD5cXHJcXG4gICAgICA8L3YtZGlhbG9nPiAgXFxyXFxuICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICBcXHQ8di1jYXJkLXRpdGxlPlxcclxcblxcdCAgICAgIFxcdDxoMj57eyAkdCgnZW1wbG95ZWVzJykgfX08L2gyPlxcclxcblxcdCAgICAgIFxcdDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcclxcblxcdCAgICAgIFxcdDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRhcHBlbmQtaWNvbj1cXFwic2VhcmNoXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDpsYWJlbD1cXFwiJHQoJ3NlYXJjaF9pbnB1dCcpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdHNpbmdsZS1saW5lXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0di1tb2RlbD1cXFwic2VhcmNoXFxcIlxcclxcblxcdCAgICAgIFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgICBcXHQ8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICA8di1kYXRhLXRhYmxlXFxyXFxuICAgICAgICA6aGVhZGVycz1cXFwiaGVhZGVyc1xcXCJcXHJcXG4gICAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxyXFxuICAgICAgICA6c2VhcmNoPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICB2LW1vZGVsPVxcXCJzZWxlY3RlZFxcXCJcXHJcXG4gICAgICAgIHNlbGVjdC1hbGxcXHJcXG4gICAgICAgIGl0ZW0ta2V5PVxcXCJpZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHQ6bm8tcmVzdWx0cy10ZXh0PVxcXCIkdCgnbm9fbWF0Y2hfZm91bmQnKVxcXCJcXHJcXG4gICAgICAgXFx0OnJvd3MtcGVyLXBhZ2UtdGV4dD1cXFwiJHQoJ3N0cmluZ3MnKVxcXCJcXHJcXG4gICAgICAgIGNsYXNzPVxcXCJlbGV2YXRpb24tMVxcXCJcXHJcXG4gICAgICA+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiaXRlbXNcXFwiIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXHJcXG4gICAgICAgIFxcdDx0ZD5cXHJcXG5cXHRcXHQgICAgICAgIDx2LWNoZWNrYm94XFxyXFxuXFx0XFx0ICAgICAgICAgIHByaW1hcnlcXHJcXG5cXHRcXHQgICAgICAgICAgaGlkZS1kZXRhaWxzXFxyXFxuXFx0XFx0ICAgICAgICAgIHYtbW9kZWw9XFxcInByb3BzLnNlbGVjdGVkXFxcIlxcclxcblxcdFxcdCAgICAgICAgPjwvdi1jaGVja2JveD5cXHJcXG5cXHRcXHQgICAgICA8L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmZpcnN0X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5sYXN0X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5wb3NpdGlvbiB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgXFx0PHYtYnRuIG91dGxpbmUgcm91bmQgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlJywgcGFyYW1zOiB7aWQ6IHByb3BzLml0ZW0uaWR9fVxcXCI+e3sgJHQoJ2RldGFpbHMnKSB9fTwvdi1idG4+ICAgXFxyXFxuICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcblxcdFxcdFxcdFxcdDx0ZW1wbGF0ZSBzbG90PVxcXCJuby1kYXRhXFxcIj5cXHJcXG4gICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVxcXCJ0cnVlXFxcIiBjb2xvcj1cXFwicmVkXFxcIiBpY29uPVxcXCJ3YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgIFxcdFxcdNCd0LXRgiDQtNCw0L3QvdGL0YUgOihcXHJcXG4gICAgICBcXHRcXHQ8L3YtYWxlcnQ+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcblxcdFxcdFxcdDwvdi1kYXRhLXRhYmxlPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInRhYmxlX19idXR0b25zXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8di1idG4gZmFiIGRhcmsgbGFyZ2UgY29sb3I9XFxcImN5YW5cXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0OnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlQ3JlYXRlJ31cXFwiPlxcclxcbiAgICAgIFxcdFxcdDx2LWljb24gZGFyaz5hZGQ8L3YtaWNvbj5cXHJcXG4gICAgXFx0XFx0PC92LWJ0bj5cXHJcXG4gICAgXFx0XFx0PHRyYW5zaXRpb24gIGVudGVyLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uRW50ZXJcXFwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uTGVhdmVcXFwiIG1vZGU9XFxcIm91dC1pblxcXCI+XFxyXFxuXFx0XFx0XFx0IFxcdDx2LWJ0biB2LXNob3c9XFxcInNlbGVjdGVkLmxlbmd0aCA+IDBcXFwiIFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNsYXNzPVxcXCJkZWxldGUtYnRuXFxcIiBjb2xvcj1cXFwiZXJyb3JcXFwiIFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZhYiBsYXJnZSBkYXJrXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0QGNsaWNrPVxcXCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdD5cXHJcXG4gICAgICBcXHRcXHQ8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxcclxcbiAgICBcXHRcXHQ8L3YtYnRuPlxcclxcblxcdFxcdFxcdDwvdHJhbnNpdGlvbj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8di1zbmFja2JhclxcclxcbiAgICAgIFxcdDp0aW1lb3V0PVxcXCJzbmFja2Jhci50aW1lb3V0XFxcIlxcclxcbiAgICAgIFxcdHRvcFxcclxcbiAgICAgIFxcdHYtbW9kZWw9XFxcInNuYWNrYmFyLnNob3dcXFwiXFxyXFxuICAgIFxcdD5cXHJcXG4gICAgICDQl9Cw0L/QuNGB0Ywg0LHRi9GE0LvQsCDRg9C00LDQu9C10L3QsCFcXHJcXG4gICAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicGlua1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwic25hY2tiYXIgPSBmYWxzZVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcbiAgICA8L3Ytc25hY2tiYXI+XFx0XFx0XFxyXFxuXFx0XFx0PC92LWNhcmQ+XFx0XFx0XFxyXFxuXFx0PC9kaXY+XFx0XFx0XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxyXFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdFxcdGRhdGE6ICgpID0+ICh7XFxyXFxuXFx0XFx0XFx0c25hY2tiYXI6IHtcXHJcXG5cXHRcXHRcXHRcXHR0aW1lb3V0OiAxMCxcXHJcXG5cXHRcXHRcXHRcXHRzaG93OiBmYWxzZVxcclxcblxcdFxcdFxcdH0sXFxyXFxuICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXFxyXFxuXFx0XFx0XFx0c2VhcmNoOiAnJyxcXHJcXG5cXHRcXHRcXHRzZWxlY3RlZDogW10sXFxyXFxuXFx0XFx0XFx0ZGlhbG9nOiBmYWxzZSxcXHJcXG5cXHRcXHRcXHQvLyDQo9C00LDQu9C10L3QuNC1XFxyXFxuXFx0XFx0XFx0ZGVsZXRlV2luZG93OiBmYWxzZSxcXHJcXG5cXHRcXHRcXHRkZWxldGVDYXRlZ29yeTogbnVsbCxcXHJcXG5cXHRcXHRcXHRkZWxNb2RlOiAnc2luZ2xlJyxcXHJcXG5cXHRcXHRcXHQvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcXHJcXG5cXHRcXHRcXHRoZWFkZXJzOiBbe1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQ6ICdJRCcsXFxyXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ246ICdsZWZ0JyxcXHJcXG5cXHRcXHRcXHRcXHRcXHRzb3J0YWJsZTogZmFsc2UsXFxyXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6ICdpZCdcXHJcXG5cXHRcXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdFxcdHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0OiAn0JjQvNGPJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ2ZpcnN0X25hbWUnXFxyXFxuXFx0XFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRcXHR7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGV4dDogJ9Ck0LDQvNC40LvQuNGPJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ2xhc3RfbmFtZSdcXHJcXG5cXHRcXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdFxcdHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtGMJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ3Bvc2l0aW9uJ1xcclxcblxcdFxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0XFx0e1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQ6ICcnLFxcclxcblxcdFxcdFxcdFxcdFxcdHNvcnRhYmxlOiBmYWxzZVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRdXFxyXFxuXFx0XFx0fSksXFxyXFxuXFx0XFx0Y29tcHV0ZWQ6IHtcXHJcXG5cXHRcXHRcXHRkZWxldGVNc2coKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PSAxKSA/ICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDQtNCw0L3QvdGL0Lkg0Y3Qu9C10LzQtdC90YI/JyA6XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDQstGL0LHRgNCw0L3QvdGL0LUg0Y3Qu9C10LzQtdC90YLRiz8nO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0Li4ubWFwR2V0dGVycyh7XFxyXFxuICAgICAgaXRlbXM6ICdBZG1pbkVtcGxveWVlcy9lbXBsb3llZXMnXFxyXFxuICAgIFxcdH0pXFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0XFx0ZGVsZXRlRGlhbG9nKGl0ZW0pIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kZWxldGVDYXRlZ29yeSA9IGl0ZW07XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRkZWxldGVDb25maXJtKCkge1xcclxcblxcdFxcdFxcdFxcdHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLnNlbGVjdGVkID0gW107XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcXHJcXG5cXHRcXHRcXHQgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xcdFxcclxcblxcdFxcdFxcdCAgdGhpcy5zbmFja2Jhci5zaG93ID0gdHJ1ZTtcXHRcXHRcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGRlbGV0ZUNhbmNlbCgpIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gbnVsbDtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlbGV0ZVdpbmRvdyAgID0gZmFsc2U7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRjbG9zZSgpIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRpYWxvZyA9IGZhbHNlO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdC4uLm1hcEFjdGlvbnMoe1xcclxcblxcdFxcdFxcdFxcdGxvYWRJdGVtczogJ0FkbWluRW1wbG95ZWVzL2xvYWQnLFxcclxcblxcdFxcdFxcdFxcdGRlbGV0ZUl0ZW06ICdBZG1pbkVtcGxveWVlcy9yZW1vdmUnXFxyXFxuXFx0XFx0XFx0fSlcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuXFx0LnRhYmxlX19idXR0b25zIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0Ym90dG9tOiAtNTBweDtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LmRpYWxvZ19fYWN0aXZhdG9yIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0Ym90dG9tOiAtMzBweDtcXHJcXG5cXHRcXHRsZWZ0OiA0MHB4O1xcclxcblxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0fVxcclxcblxcdC5jYXJkX190aXRsZSB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcdC5jYXJkX19hY3Rpb25zIHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzUwYWRlYjlcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImluc3BpcmVcIj5cclxuICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZWxldGVXaW5kb3dcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICAgIDx2LWNhcmQ+XHJcblx0XHRcdFx0XHQ8di1jYXJkLXRpdGxlIEBjbGljaz1cInNuYWNrYmFyLnNob3cgPSB0cnVlXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyAkdCgnYXR0ZW50aW9uJykgfX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3YtY2FyZC10aXRsZT5cclxuXHRcdFx0XHRcdDx2LWNhcmQtdGV4dD5cclxuXHRcdFx0XHRcdFx0PHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cclxuXHRcdFx0XHRcdDwvdi1jYXJkLXRleHQ+XHJcblx0XHRcdFx0XHQ8di1jYXJkLWFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDb25maXJtXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG5cdFx0XHRcdFx0XHQ8di1idG4gb3V0bGluZSBjb2xvcj1cImVycm9yXCIgQGNsaWNrLm5hdGl2ZT1cImRlbGV0ZUNhbmNlbFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XHJcblx0XHRcdFx0XHQ8L3YtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICA8L3YtZGlhbG9nPiAgXHJcbiAgICAgIDx2LWNhcmQ+XHJcbiAgICAgIFx0PHYtY2FyZC10aXRsZT5cclxuXHQgICAgICBcdDxoMj57eyAkdCgnZW1wbG95ZWVzJykgfX08L2gyPlxyXG5cdCAgICAgIFx0PHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcblx0ICAgICAgXHQ8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHRcdGFwcGVuZC1pY29uPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0OmxhYmVsPVwiJHQoJ3NlYXJjaF9pbnB1dCcpXCJcclxuXHRcdFx0XHRcdFx0c2luZ2xlLWxpbmVcdFx0XHRcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cInNlYXJjaFwiXHJcblx0ICAgICAgXHQ+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgIFx0PC92LWNhcmQtdGl0bGU+XHJcbiAgICAgIDx2LWRhdGEtdGFibGVcclxuICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxyXG4gICAgICAgIDppdGVtcz1cIml0ZW1zXCJcclxuICAgICAgICA6c2VhcmNoPVwic2VhcmNoXCJcclxuICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRcIlxyXG4gICAgICAgIHNlbGVjdC1hbGxcclxuICAgICAgICBpdGVtLWtleT1cImlkXCJcclxuXHRcdFx0XHQ6bm8tcmVzdWx0cy10ZXh0PVwiJHQoJ25vX21hdGNoX2ZvdW5kJylcIlxyXG4gICAgICAgXHQ6cm93cy1wZXItcGFnZS10ZXh0PVwiJHQoJ3N0cmluZ3MnKVwiXHJcbiAgICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXHJcbiAgICAgID5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgXHQ8dGQ+XHJcblx0XHQgICAgICAgIDx2LWNoZWNrYm94XHJcblx0XHQgICAgICAgICAgcHJpbWFyeVxyXG5cdFx0ICAgICAgICAgIGhpZGUtZGV0YWlsc1xyXG5cdFx0ICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5zZWxlY3RlZFwiXHJcblx0XHQgICAgICAgID48L3YtY2hlY2tib3g+XHJcblx0XHQgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uZmlyc3RfbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5sYXN0X25hbWUgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ucG9zaXRpb24gfX08L3RkPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgXHQ8di1idG4gb3V0bGluZSByb3VuZCA6dG89XCJ7bmFtZTogJ2VtcGxveWVlJywgcGFyYW1zOiB7aWQ6IHByb3BzLml0ZW0uaWR9fVwiPnt7ICR0KCdkZXRhaWxzJykgfX08L3YtYnRuPiAgIFxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSBzbG90PVwibm8tZGF0YVwiPlxyXG4gICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVwidHJ1ZVwiIGNvbG9yPVwicmVkXCIgaWNvbj1cIndhcm5pbmdcIj5cclxuICAgICAgICBcdFx00J3QtdGCINC00LDQvdC90YvRhSA6KFxyXG4gICAgICBcdFx0PC92LWFsZXJ0PlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcblx0XHRcdDwvdi1kYXRhLXRhYmxlPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFibGVfX2J1dHRvbnNcIj5cclxuXHRcdFx0XHQ8di1idG4gZmFiIGRhcmsgbGFyZ2UgY29sb3I9XCJjeWFuXCJcclxuXHRcdFx0XHRcdFx0XHQ6dG89XCJ7bmFtZTogJ2VtcGxveWVlQ3JlYXRlJ31cIj5cclxuICAgICAgXHRcdDx2LWljb24gZGFyaz5hZGQ8L3YtaWNvbj5cclxuICAgIFx0XHQ8L3YtYnRuPlxyXG4gICAgXHRcdDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XCJidXR0b25FbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImJ1dHRvbkxlYXZlXCIgbW9kZT1cIm91dC1pblwiPlxyXG5cdFx0XHQgXHQ8di1idG4gdi1zaG93PVwic2VsZWN0ZWQubGVuZ3RoID4gMFwiIFxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImRlbGV0ZS1idG5cIiBjb2xvcj1cImVycm9yXCIgXHJcblx0XHRcdFx0XHRcdGZhYiBsYXJnZSBkYXJrXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImRlbGV0ZURpYWxvZyhzZWxlY3RlZClcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcbiAgICAgIFx0XHQ8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxyXG4gICAgXHRcdDwvdi1idG4+XHJcblx0XHRcdDwvdHJhbnNpdGlvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx2LXNuYWNrYmFyXHJcbiAgICAgIFx0OnRpbWVvdXQ9XCJzbmFja2Jhci50aW1lb3V0XCJcclxuICAgICAgXHR0b3BcclxuICAgICAgXHR2LW1vZGVsPVwic25hY2tiYXIuc2hvd1wiXHJcbiAgICBcdD5cclxuICAgICAg0JfQsNC/0LjRgdGMINCx0YvRhNC70LAg0YPQtNCw0LvQtdC90LAhXHJcbiAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicGlua1wiIEBjbGljay5uYXRpdmU9XCJzbmFja2JhciA9IGZhbHNlXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgPC92LXNuYWNrYmFyPlx0XHRcclxuXHRcdDwvdi1jYXJkPlx0XHRcclxuXHQ8L2Rpdj5cdFx0XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YTogKCkgPT4gKHtcclxuXHRcdFx0c25hY2tiYXI6IHtcclxuXHRcdFx0XHR0aW1lb3V0OiAxMCxcclxuXHRcdFx0XHRzaG93OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG4gICAgICAvLyDQn9C+0LjRgdC6IC8g0JLRi9Cx0L7RgNC60LBcclxuXHRcdFx0c2VhcmNoOiAnJyxcclxuXHRcdFx0c2VsZWN0ZWQ6IFtdLFxyXG5cdFx0XHRkaWFsb2c6IGZhbHNlLFxyXG5cdFx0XHQvLyDQo9C00LDQu9C10L3QuNC1XHJcblx0XHRcdGRlbGV0ZVdpbmRvdzogZmFsc2UsXHJcblx0XHRcdGRlbGV0ZUNhdGVnb3J5OiBudWxsLFxyXG5cdFx0XHRkZWxNb2RlOiAnc2luZ2xlJyxcclxuXHRcdFx0Ly8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXHJcblx0XHRcdGhlYWRlcnM6IFt7XHJcblx0XHRcdFx0XHR0ZXh0OiAnSUQnLFxyXG5cdFx0XHRcdFx0YWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdHNvcnRhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRcdHZhbHVlOiAnaWQnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAn0JjQvNGPJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAnZmlyc3RfbmFtZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICfQpNCw0LzQuNC70LjRjycsXHJcblx0XHRcdFx0XHR2YWx1ZTogJ2xhc3RfbmFtZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0YwnLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICdwb3NpdGlvbidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICcnLFxyXG5cdFx0XHRcdFx0c29ydGFibGU6IGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9KSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGRlbGV0ZU1zZygpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gJ9CS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINC00LDQvdC90YvQuSDRjdC70LXQvNC10L3Rgj8nIDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgJ9CS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINCy0YvQsdGA0LDQvdC90YvQtSDRjdC70LXQvNC10L3RgtGLPyc7XHJcblx0XHRcdH0sXHJcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICBpdGVtczogJ0FkbWluRW1wbG95ZWVzL2VtcGxveWVlcydcclxuICAgIFx0fSlcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGRlbGV0ZURpYWxvZyhpdGVtKSB7XHJcblx0XHRcdFx0dGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWxldGVDb25maXJtKCkge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkID0gW107XHJcblx0XHRcdFx0dGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcclxuXHRcdFx0ICB0aGlzLmVkaXRlZElEID0gbnVsbDtcdFxyXG5cdFx0XHQgIHRoaXMuc25hY2tiYXIuc2hvdyA9IHRydWU7XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWxldGVDYW5jZWwoKSB7XHJcblx0XHRcdFx0dGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5kZWxldGVXaW5kb3cgICA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xyXG5cdFx0XHRcdHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XHJcblx0XHRcdFx0bG9hZEl0ZW1zOiAnQWRtaW5FbXBsb3llZXMvbG9hZCcsXHJcblx0XHRcdFx0ZGVsZXRlSXRlbTogJ0FkbWluRW1wbG95ZWVzL3JlbW92ZSdcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudGFibGVfX2J1dHRvbnMge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAtNTBweDtcclxuXHR9XHJcblx0XHJcblx0LmRpYWxvZ19fYWN0aXZhdG9yIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogLTMwcHg7XHJcblx0XHRsZWZ0OiA0MHB4O1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHR9XHJcblx0LmNhcmRfX3RpdGxlIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQuY2FyZF9fYWN0aW9ucyB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImluc3BpcmVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGV0ZVdpbmRvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVdpbmRvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlV2luZG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zbmFja2Jhci5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJhdHRlbnRpb25cIikpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlbGV0ZU1zZykpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNhbmNlbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1wbG95ZWVzXCIpKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2VhcmNoX2lucHV0XCIpLFxuICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0LWFsbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IF92bS4kdChcIm5vX21hdGNoX2ZvdW5kXCIpLFxuICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS10ZXh0XCI6IF92bS4kdChcInN0cmluZ3NcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwcmltYXJ5OiBcIlwiLCBcImhpZGUtZGV0YWlsc1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocHJvcHMsIFwic2VsZWN0ZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pZCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uZmlyc3RfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ubGFzdF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5wb3NpdGlvbikpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IHByb3BzLml0ZW0uaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJkZXRhaWxzXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICB7IHNsb3Q6IFwibm8tZGF0YVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiB0cnVlLCBjb2xvcjogXCJyZWRcIiwgaWNvbjogXCJ3YXJuaW5nXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcXHRcXHTQndC10YIg0LTQsNC90L3Ri9GFIDooXFxuICAgICAgXFx0XFx0XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJlbXBsb3llZUNyZWF0ZVwiIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LCBbX3ZtLl92KFwiYWRkXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25FbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkxlYXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWQubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZWxldGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZXJyb3JcIiwgZmFiOiBcIlwiLCBsYXJnZTogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVEaWFsb2coX3ZtLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJkZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtc25hY2tiYXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdGltZW91dDogX3ZtLnNuYWNrYmFyLnRpbWVvdXQsIHRvcDogXCJcIiB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc25hY2tiYXIuc2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc25hY2tiYXIsIFwic2hvd1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNuYWNrYmFyLnNob3dcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICDQl9Cw0L/QuNGB0Ywg0LHRi9GE0LvQsCDRg9C00LDQu9C10L3QsCFcXG4gICAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwaW5rXCIgfSxcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTM1MGFkZWI5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zNTBhZGViOVwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9