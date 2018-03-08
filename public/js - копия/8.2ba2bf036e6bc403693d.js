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
exports.push([module.i, "\n.table__buttons[data-v-350adeb9] {\n\tposition: absolute;\n\tbottom: -50px;\n}\n.dialog__activator[data-v-350adeb9] {\n\tposition: absolute;\n\tbottom: -30px;\n\tleft: 40px;\n\tz-index: 1;\n}\n.card__title[data-v-350adeb9] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n.card__actions[data-v-350adeb9] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/List.vue"],"names":[],"mappings":";AAyJA;CACA,mBAAA;CACA,cAAA;CACA;AAEA;CACA,mBAAA;CACA,cAAA;CACA,WAAA;CACA,WAAA;CACA;AACA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA;AACA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <v-app id=\"inspire\">\r\n      <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n\t\t\t\t\t<v-card-title>\r\n\t\t\t\t\t\t<span class=\"headline\">Внимание!</span>\r\n\t\t\t\t\t</v-card-title>\r\n\t\t\t\t\t<v-card-text>\r\n\t\t\t\t\t\t<v-flex xs12>{{deleteMsg}}</v-flex>\r\n\t\t\t\t\t</v-card-text>\r\n\t\t\t\t\t<v-card-actions>\r\n\t\t\t\t\t\t<v-btn outline color=\"info\" @click.native=\"deleteConfirm\">Удалить</v-btn>\r\n\t\t\t\t\t\t<v-btn outline color=\"error\" @click.native=\"deleteCancel\">Отмена</v-btn>\r\n\t\t\t\t\t</v-card-actions>\r\n        </v-card>\r\n      </v-dialog>  \r\n      <v-card>\r\n      \t<v-card-title>\r\n\t      \t<h2>Сотрудники</h2>\r\n\t      \t<v-spacer></v-spacer>\r\n\t      \t<v-text-field\r\n\t\t\t\t\t\tappend-icon=\"search\"\r\n\t\t\t\t\t\tlabel=\"Введите название\"\r\n\t\t\t\t\t\tsingle-line\t\t\t\r\n\t\t\t\t\t\tv-model=\"search\"\r\n\t      \t></v-text-field>\r\n      \t</v-card-title>\r\n      <v-data-table\r\n        :headers=\"headers\"\r\n        :items=\"items\"\r\n        :search=\"search\"\r\n        v-model=\"selected\"\r\n        select-all\r\n        item-key=\"id\"\r\n\t\t\t\tno-results-text=\"Совпадений не найдено!\"\r\n       \trows-per-page-text=\"Строк: \"\r\n        class=\"elevation-1\"\r\n      >\r\n        <template slot=\"items\" slot-scope=\"props\">\r\n        \t<td>\r\n\t\t        <v-checkbox\r\n\t\t          primary\r\n\t\t          hide-details\r\n\t\t          v-model=\"props.selected\"\r\n\t\t        ></v-checkbox>\r\n\t\t      </td>\r\n          <td>{{ props.item.id }}</td>\r\n          <td>{{ props.item.first_name }}</td>\r\n          <td>{{ props.item.last_name }}</td>\r\n          <td>{{ props.item.position }}</td>\r\n          <td>\r\n          \t<v-btn outline round :to=\"{name: 'employee', params: {id: props.item.id}}\">Подробнее</v-btn>   \r\n          </td>\r\n        </template>\r\n\t\t\t\t<template slot=\"no-data\">\r\n          <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n        \t\tНет данных :(\r\n      \t\t</v-alert>\r\n        </template>\r\n\t\t\t</v-data-table>\r\n\t\t\t<div class=\"table__buttons\">\r\n\t\t\t\t<v-btn fab dark large color=\"cyan\"\r\n\t\t\t\t\t\t\t:to=\"{name: 'AdminEmployeeCreate'}\">\r\n      \t\t<v-icon dark>add</v-icon>\r\n    \t\t</v-btn>\r\n    \t\t<transition  enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n\t\t\t \t<v-btn v-show=\"selected.length > 0\" \r\n\t\t\t\t\t\tclass=\"delete-btn\" color=\"error\" \r\n\t\t\t\t\t\tfab large dark\r\n\t\t\t\t\t\t@click=\"deleteDialog(selected)\"\r\n\t\t\t\t\t\t>\r\n      \t\t<v-icon>delete</v-icon>\r\n    \t\t</v-btn>\r\n\t\t\t</transition>\r\n\t\t\t</div>\t\t\r\n\t\t</v-card>\t\t\r\n\t</v-app>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\texport default {\r\n\t\tdata: () => ({\r\n      // Поиск / Выборка\r\n\t\t\tsearch: '',\r\n\t\t\tselected: [],\r\n\t\t\tdialog: false,\r\n\t\t\t// Удаление\r\n\t\t\tdeleteWindow: false,\r\n\t\t\tdeleteCategory: null,\r\n\t\t\tdelMode: 'single',\r\n\t\t\t// Заголовки таблицы\r\n\t\t\theaders: [{\r\n\t\t\t\t\ttext: 'ID',\r\n\t\t\t\t\talign: 'left',\r\n\t\t\t\t\tsortable: false,\r\n\t\t\t\t\tvalue: 'id'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Имя',\r\n\t\t\t\t\tvalue: 'first_name'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Фамилия',\r\n\t\t\t\t\tvalue: 'last_name'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Должность',\r\n\t\t\t\t\tvalue: 'position'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: '',\r\n\t\t\t\t\tsortable: false\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}),\r\n\t\tcomputed: {\r\n\t\t\tdeleteMsg() {\r\n\t\t\t\treturn (this.selected.length == 1) ? 'Вы действительно хотите удалить данный элемент?' :\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t 'Вы действительно хотите удалить выбранные элементы?';\r\n\t\t\t},\r\n\t\t\t...mapGetters({\r\n      items: 'AdminEmployees/employees'\r\n    \t})\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tdeleteDialog(item) {\r\n\t\t\t\tthis.deleteWindow = true;\r\n\t\t\t\tthis.deleteCategory = item;\r\n\t\t\t},\r\n\t\t\tdeleteConfirm() {\r\n\t\t\t\tthis.selected.forEach(el => this.deleteItem(el.id));\r\n\t\t\t\tthis.selected = [];\r\n\t\t\t\tthis.deleteWindow = false;\r\n\t\t\t  this.editedID = null;\t\t\t\r\n\t\t\t},\r\n\t\t\tdeleteCancel() {\r\n\t\t\t\tthis.deleteCategory = null;\r\n\t\t\t\tthis.deleteWindow   = false;\r\n\t\t\t},\r\n\t\t\tclose() {\r\n\t\t\t\tthis.dialog = false;\r\n\t\t\t\tthis.editedItem = Object.assign({}, this.defaultItem);\r\n\t\t\t\tthis.editedIndex = -1;\r\n\t\t\t},\r\n\t\t\t...mapActions({\r\n\t\t\t\tloadItems: 'AdminEmployees/load',\r\n\t\t\t\tdeleteItem: 'AdminEmployees/remove'\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t.table__buttons {\r\n\t\tposition: absolute;\r\n\t\tbottom: -50px;\r\n\t}\r\n\t\r\n\t.dialog__activator {\r\n\t\tposition: absolute;\r\n\t\tbottom: -30px;\r\n\t\tleft: 40px;\r\n\t\tz-index: 1;\r\n\t}\r\n\t.card__title {\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.card__actions {\r\n\t\tjustify-content: center;\r\n\t}\r\n</style>\r\n"],"sourceRoot":""}]);

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


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
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
    "v-app",
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
                _c("span", { staticClass: "headline" }, [_vm._v("Внимание!")])
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
                    [_vm._v("Удалить")]
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
                    [_vm._v("Отмена")]
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
              _c("h2", [_vm._v("Сотрудники")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "search",
                  label: "Введите название",
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
                "no-results-text": "Совпадений не найдено!",
                "rows-per-page-text": "Строк: "
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
                            [_vm._v("Подробнее")]
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
                    to: { name: "AdminEmployeeCreate" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZT9jMzk4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlPzY1NDciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlP2FkMjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSw2REFBOEQsdUJBQXVCLGtCQUFrQixHQUFHLHVDQUF1Qyx1QkFBdUIs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QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzguMmJhMmJmMDM2ZTZiYzQwMzY5M2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM1MGFkZWI5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM1MGFkZWI5XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMzUwYWRlYjlcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxlbXBsb3llZXNcXFxcTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzUwYWRlYjlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNTBhZGViOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOTQ1NDdiYThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzlcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJsZV9fYnV0dG9uc1tkYXRhLXYtMzUwYWRlYjldIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAtNTBweDtcXG59XFxuLmRpYWxvZ19fYWN0aXZhdG9yW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IC0zMHB4O1xcblxcdGxlZnQ6IDQwcHg7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuLmNhcmRfX3RpdGxlW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jYXJkX19hY3Rpb25zW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvc3BhL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5SkE7Q0FDQSxtQkFBQTtDQUNBLGNBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxjQUFBO0NBQ0EsV0FBQTtDQUNBLFdBQUE7Q0FDQTtBQUNBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLHlCQUFBO0tBQUEsc0JBQUE7U0FBQSx3QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8di1hcHAgaWQ9XFxcImluc3BpcmVcXFwiPlxcclxcbiAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkZWxldGVXaW5kb3dcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgICAgPHYtY2FyZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di1jYXJkLXRpdGxlPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+0JLQvdC40LzQsNC90LjQtSE8L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC92LWNhcmQtdGl0bGU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtY2FyZC10ZXh0PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWZsZXggeHMxMj57e2RlbGV0ZU1zZ319PC92LWZsZXg+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC92LWNhcmQtdGV4dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di1jYXJkLWFjdGlvbnM+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNvbmZpcm1cXFwiPtCj0LTQsNC70LjRgtGMPC92LWJ0bj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiZXJyb3JcXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNhbmNlbFxcXCI+0J7RgtC80LXQvdCwPC92LWJ0bj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3YtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgICAgPC92LWNhcmQ+XFxyXFxuICAgICAgPC92LWRpYWxvZz4gIFxcclxcbiAgICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgXFx0PHYtY2FyZC10aXRsZT5cXHJcXG5cXHQgICAgICBcXHQ8aDI+0KHQvtGC0YDRg9C00L3QuNC60Lg8L2gyPlxcclxcblxcdCAgICAgIFxcdDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcclxcblxcdCAgICAgIFxcdDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRhcHBlbmQtaWNvbj1cXFwic2VhcmNoXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsPVxcXCLQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdHNpbmdsZS1saW5lXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0di1tb2RlbD1cXFwic2VhcmNoXFxcIlxcclxcblxcdCAgICAgIFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgICBcXHQ8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICA8di1kYXRhLXRhYmxlXFxyXFxuICAgICAgICA6aGVhZGVycz1cXFwiaGVhZGVyc1xcXCJcXHJcXG4gICAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxyXFxuICAgICAgICA6c2VhcmNoPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICB2LW1vZGVsPVxcXCJzZWxlY3RlZFxcXCJcXHJcXG4gICAgICAgIHNlbGVjdC1hbGxcXHJcXG4gICAgICAgIGl0ZW0ta2V5PVxcXCJpZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRuby1yZXN1bHRzLXRleHQ9XFxcItCh0L7QstC/0LDQtNC10L3QuNC5INC90LUg0L3QsNC50LTQtdC90L4hXFxcIlxcclxcbiAgICAgICBcXHRyb3dzLXBlci1wYWdlLXRleHQ9XFxcItCh0YLRgNC+0Lo6IFxcXCJcXHJcXG4gICAgICAgIGNsYXNzPVxcXCJlbGV2YXRpb24tMVxcXCJcXHJcXG4gICAgICA+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiaXRlbXNcXFwiIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXHJcXG4gICAgICAgIFxcdDx0ZD5cXHJcXG5cXHRcXHQgICAgICAgIDx2LWNoZWNrYm94XFxyXFxuXFx0XFx0ICAgICAgICAgIHByaW1hcnlcXHJcXG5cXHRcXHQgICAgICAgICAgaGlkZS1kZXRhaWxzXFxyXFxuXFx0XFx0ICAgICAgICAgIHYtbW9kZWw9XFxcInByb3BzLnNlbGVjdGVkXFxcIlxcclxcblxcdFxcdCAgICAgICAgPjwvdi1jaGVja2JveD5cXHJcXG5cXHRcXHQgICAgICA8L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmZpcnN0X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5sYXN0X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5wb3NpdGlvbiB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgXFx0PHYtYnRuIG91dGxpbmUgcm91bmQgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlJywgcGFyYW1zOiB7aWQ6IHByb3BzLml0ZW0uaWR9fVxcXCI+0J/QvtC00YDQvtCx0L3QtdC1PC92LWJ0bj4gICBcXHJcXG4gICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0XFx0PHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcclxcbiAgICAgICAgICA8di1hbGVydCA6dmFsdWU9XFxcInRydWVcXFwiIGNvbG9yPVxcXCJyZWRcXFwiIGljb249XFxcIndhcm5pbmdcXFwiPlxcclxcbiAgICAgICAgXFx0XFx00J3QtdGCINC00LDQvdC90YvRhSA6KFxcclxcbiAgICAgIFxcdFxcdDwvdi1hbGVydD5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0PC92LWRhdGEtdGFibGU+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwidGFibGVfX2J1dHRvbnNcXFwiPlxcclxcblxcdFxcdFxcdFxcdDx2LWJ0biBmYWIgZGFyayBsYXJnZSBjb2xvcj1cXFwiY3lhblxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ6dG89XFxcIntuYW1lOiAnQWRtaW5FbXBsb3llZUNyZWF0ZSd9XFxcIj5cXHJcXG4gICAgICBcXHRcXHQ8di1pY29uIGRhcms+YWRkPC92LWljb24+XFxyXFxuICAgIFxcdFxcdDwvdi1idG4+XFxyXFxuICAgIFxcdFxcdDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XFxcImJ1dHRvbkVudGVyXFxcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XFxcImJ1dHRvbkxlYXZlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcclxcblxcdFxcdFxcdCBcXHQ8di1idG4gdi1zaG93PVxcXCJzZWxlY3RlZC5sZW5ndGggPiAwXFxcIiBcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjbGFzcz1cXFwiZGVsZXRlLWJ0blxcXCIgY29sb3I9XFxcImVycm9yXFxcIiBcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmYWIgbGFyZ2UgZGFya1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdEBjbGljaz1cXFwiZGVsZXRlRGlhbG9nKHNlbGVjdGVkKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ+XFxyXFxuICAgICAgXFx0XFx0PHYtaWNvbj5kZWxldGU8L3YtaWNvbj5cXHJcXG4gICAgXFx0XFx0PC92LWJ0bj5cXHJcXG5cXHRcXHRcXHQ8L3RyYW5zaXRpb24+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFx0XFx0XFxyXFxuXFx0XFx0PC92LWNhcmQ+XFx0XFx0XFxyXFxuXFx0PC92LWFwcD5cXHRcXHRcXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuXFx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcXHJcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxyXFxuXFx0XFx0ZGF0YTogKCkgPT4gKHtcXHJcXG4gICAgICAvLyDQn9C+0LjRgdC6IC8g0JLRi9Cx0L7RgNC60LBcXHJcXG5cXHRcXHRcXHRzZWFyY2g6ICcnLFxcclxcblxcdFxcdFxcdHNlbGVjdGVkOiBbXSxcXHJcXG5cXHRcXHRcXHRkaWFsb2c6IGZhbHNlLFxcclxcblxcdFxcdFxcdC8vINCj0LTQsNC70LXQvdC40LVcXHJcXG5cXHRcXHRcXHRkZWxldGVXaW5kb3c6IGZhbHNlLFxcclxcblxcdFxcdFxcdGRlbGV0ZUNhdGVnb3J5OiBudWxsLFxcclxcblxcdFxcdFxcdGRlbE1vZGU6ICdzaW5nbGUnLFxcclxcblxcdFxcdFxcdC8vINCX0LDQs9C+0LvQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xcclxcblxcdFxcdFxcdGhlYWRlcnM6IFt7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGV4dDogJ0lEJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHRhbGlnbjogJ2xlZnQnLFxcclxcblxcdFxcdFxcdFxcdFxcdHNvcnRhYmxlOiBmYWxzZSxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ2lkJ1xcclxcblxcdFxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0XFx0e1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQ6ICfQmNC80Y8nLFxcclxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAnZmlyc3RfbmFtZSdcXHJcXG5cXHRcXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdFxcdHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0OiAn0KTQsNC80LjQu9C40Y8nLFxcclxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAnbGFzdF9uYW1lJ1xcclxcblxcdFxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0XFx0e1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0YwnLFxcclxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAncG9zaXRpb24nXFxyXFxuXFx0XFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRcXHR7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGV4dDogJycsXFxyXFxuXFx0XFx0XFx0XFx0XFx0c29ydGFibGU6IGZhbHNlXFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdF1cXHJcXG5cXHRcXHR9KSxcXHJcXG5cXHRcXHRjb21wdXRlZDoge1xcclxcblxcdFxcdFxcdGRlbGV0ZU1zZygpIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gJ9CS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINC00LDQvdC90YvQuSDRjdC70LXQvNC10L3Rgj8nIDpcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQgJ9CS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINCy0YvQsdGA0LDQvdC90YvQtSDRjdC70LXQvNC10L3RgtGLPyc7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHQuLi5tYXBHZXR0ZXJzKHtcXHJcXG4gICAgICBpdGVtczogJ0FkbWluRW1wbG95ZWVzL2VtcGxveWVlcydcXHJcXG4gICAgXFx0fSlcXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdG1ldGhvZHM6IHtcXHJcXG5cXHRcXHRcXHRkZWxldGVEaWFsb2coaXRlbSkge1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gaXRlbTtcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGRlbGV0ZUNvbmZpcm0oKSB7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuc2VsZWN0ZWQgPSBbXTtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xcclxcblxcdFxcdFxcdCAgdGhpcy5lZGl0ZWRJRCA9IG51bGw7XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRkZWxldGVDYW5jZWwoKSB7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kZWxldGVXaW5kb3cgICA9IGZhbHNlO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0Y2xvc2UoKSB7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kaWFsb2cgPSBmYWxzZTtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmVkaXRlZEluZGV4ID0gLTE7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHQuLi5tYXBBY3Rpb25zKHtcXHJcXG5cXHRcXHRcXHRcXHRsb2FkSXRlbXM6ICdBZG1pbkVtcGxveWVlcy9sb2FkJyxcXHJcXG5cXHRcXHRcXHRcXHRkZWxldGVJdGVtOiAnQWRtaW5FbXBsb3llZXMvcmVtb3ZlJ1xcclxcblxcdFxcdFxcdH0pXFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcblxcdC50YWJsZV9fYnV0dG9ucyB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdGJvdHRvbTogLTUwcHg7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC5kaWFsb2dfX2FjdGl2YXRvciB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdGJvdHRvbTogLTMwcHg7XFxyXFxuXFx0XFx0bGVmdDogNDBweDtcXHJcXG5cXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdH1cXHJcXG5cXHQuY2FyZF9fdGl0bGUge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHQuY2FyZF9fYWN0aW9ucyB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxODBcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiPHRlbXBsYXRlPlxyXG4gIDx2LWFwcCBpZD1cImluc3BpcmVcIj5cclxuICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZWxldGVXaW5kb3dcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICAgIDx2LWNhcmQ+XHJcblx0XHRcdFx0XHQ8di1jYXJkLXRpdGxlPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+0JLQvdC40LzQsNC90LjQtSE8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3YtY2FyZC10aXRsZT5cclxuXHRcdFx0XHRcdDx2LWNhcmQtdGV4dD5cclxuXHRcdFx0XHRcdFx0PHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cclxuXHRcdFx0XHRcdDwvdi1jYXJkLXRleHQ+XHJcblx0XHRcdFx0XHQ8di1jYXJkLWFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDb25maXJtXCI+0KPQtNCw0LvQuNGC0Yw8L3YtYnRuPlxyXG5cdFx0XHRcdFx0XHQ8di1idG4gb3V0bGluZSBjb2xvcj1cImVycm9yXCIgQGNsaWNrLm5hdGl2ZT1cImRlbGV0ZUNhbmNlbFwiPtCe0YLQvNC10L3QsDwvdi1idG4+XHJcblx0XHRcdFx0XHQ8L3YtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICA8L3YtZGlhbG9nPiAgXHJcbiAgICAgIDx2LWNhcmQ+XHJcbiAgICAgIFx0PHYtY2FyZC10aXRsZT5cclxuXHQgICAgICBcdDxoMj7QodC+0YLRgNGD0LTQvdC40LrQuDwvaDI+XHJcblx0ICAgICAgXHQ8di1zcGFjZXI+PC92LXNwYWNlcj5cclxuXHQgICAgICBcdDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0YXBwZW5kLWljb249XCJzZWFyY2hcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LVcIlxyXG5cdFx0XHRcdFx0XHRzaW5nbGUtbGluZVx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwic2VhcmNoXCJcclxuXHQgICAgICBcdD48L3YtdGV4dC1maWVsZD5cclxuICAgICAgXHQ8L3YtY2FyZC10aXRsZT5cclxuICAgICAgPHYtZGF0YS10YWJsZVxyXG4gICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXHJcbiAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxyXG4gICAgICAgIDpzZWFyY2g9XCJzZWFyY2hcIlxyXG4gICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFwiXHJcbiAgICAgICAgc2VsZWN0LWFsbFxyXG4gICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxyXG5cdFx0XHRcdG5vLXJlc3VsdHMtdGV4dD1cItCh0L7QstC/0LDQtNC10L3QuNC5INC90LUg0L3QsNC50LTQtdC90L4hXCJcclxuICAgICAgIFx0cm93cy1wZXItcGFnZS10ZXh0PVwi0KHRgtGA0L7QujogXCJcclxuICAgICAgICBjbGFzcz1cImVsZXZhdGlvbi0xXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbXNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cclxuICAgICAgICBcdDx0ZD5cclxuXHRcdCAgICAgICAgPHYtY2hlY2tib3hcclxuXHRcdCAgICAgICAgICBwcmltYXJ5XHJcblx0XHQgICAgICAgICAgaGlkZS1kZXRhaWxzXHJcblx0XHQgICAgICAgICAgdi1tb2RlbD1cInByb3BzLnNlbGVjdGVkXCJcclxuXHRcdCAgICAgICAgPjwvdi1jaGVja2JveD5cclxuXHRcdCAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5maXJzdF9uYW1lIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmxhc3RfbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5wb3NpdGlvbiB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICBcdDx2LWJ0biBvdXRsaW5lIHJvdW5kIDp0bz1cIntuYW1lOiAnZW1wbG95ZWUnLCBwYXJhbXM6IHtpZDogcHJvcHMuaXRlbS5pZH19XCI+0J/QvtC00YDQvtCx0L3QtdC1PC92LWJ0bj4gICBcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHRcdFx0XHQ8dGVtcGxhdGUgc2xvdD1cIm5vLWRhdGFcIj5cclxuICAgICAgICAgIDx2LWFsZXJ0IDp2YWx1ZT1cInRydWVcIiBjb2xvcj1cInJlZFwiIGljb249XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgXHRcdNCd0LXRgiDQtNCw0L3QvdGL0YUgOihcclxuICAgICAgXHRcdDwvdi1hbGVydD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8L3YtZGF0YS10YWJsZT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlX19idXR0b25zXCI+XHJcblx0XHRcdFx0PHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVwiY3lhblwiXHJcblx0XHRcdFx0XHRcdFx0OnRvPVwie25hbWU6ICdBZG1pbkVtcGxveWVlQ3JlYXRlJ31cIj5cclxuICAgICAgXHRcdDx2LWljb24gZGFyaz5hZGQ8L3YtaWNvbj5cclxuICAgIFx0XHQ8L3YtYnRuPlxyXG4gICAgXHRcdDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XCJidXR0b25FbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImJ1dHRvbkxlYXZlXCIgbW9kZT1cIm91dC1pblwiPlxyXG5cdFx0XHQgXHQ8di1idG4gdi1zaG93PVwic2VsZWN0ZWQubGVuZ3RoID4gMFwiIFxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImRlbGV0ZS1idG5cIiBjb2xvcj1cImVycm9yXCIgXHJcblx0XHRcdFx0XHRcdGZhYiBsYXJnZSBkYXJrXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImRlbGV0ZURpYWxvZyhzZWxlY3RlZClcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcbiAgICAgIFx0XHQ8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxyXG4gICAgXHRcdDwvdi1idG4+XHJcblx0XHRcdDwvdHJhbnNpdGlvbj5cclxuXHRcdFx0PC9kaXY+XHRcdFxyXG5cdFx0PC92LWNhcmQ+XHRcdFxyXG5cdDwvdi1hcHA+XHRcdFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGE6ICgpID0+ICh7XHJcbiAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxyXG5cdFx0XHRzZWFyY2g6ICcnLFxyXG5cdFx0XHRzZWxlY3RlZDogW10sXHJcblx0XHRcdGRpYWxvZzogZmFsc2UsXHJcblx0XHRcdC8vINCj0LTQsNC70LXQvdC40LVcclxuXHRcdFx0ZGVsZXRlV2luZG93OiBmYWxzZSxcclxuXHRcdFx0ZGVsZXRlQ2F0ZWdvcnk6IG51bGwsXHJcblx0XHRcdGRlbE1vZGU6ICdzaW5nbGUnLFxyXG5cdFx0XHQvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcclxuXHRcdFx0aGVhZGVyczogW3tcclxuXHRcdFx0XHRcdHRleHQ6ICdJRCcsXHJcblx0XHRcdFx0XHRhbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0c29ydGFibGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICdpZCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICfQmNC80Y8nLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICdmaXJzdF9uYW1lJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ9Ck0LDQvNC40LvQuNGPJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAnbGFzdF9uYW1lJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ9CU0L7Qu9C20L3QvtGB0YLRjCcsXHJcblx0XHRcdFx0XHR2YWx1ZTogJ3Bvc2l0aW9uJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJycsXHJcblx0XHRcdFx0XHRzb3J0YWJsZTogZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0pLFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0ZGVsZXRlTXNnKCkge1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5zZWxlY3RlZC5sZW5ndGggPT0gMSkgPyAn0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0LTQsNC90L3Ri9C5INGN0LvQtdC80LXQvdGCPycgOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAn0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0LLRi9Cx0YDQsNC90L3Ri9C1INGN0LvQtdC80LXQvdGC0Ys/JztcclxuXHRcdFx0fSxcclxuXHRcdFx0Li4ubWFwR2V0dGVycyh7XHJcbiAgICAgIGl0ZW1zOiAnQWRtaW5FbXBsb3llZXMvZW1wbG95ZWVzJ1xyXG4gICAgXHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZGVsZXRlRGlhbG9nKGl0ZW0pIHtcclxuXHRcdFx0XHR0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5kZWxldGVDYXRlZ29yeSA9IGl0ZW07XHJcblx0XHRcdH0sXHJcblx0XHRcdGRlbGV0ZUNvbmZpcm0oKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG5cdFx0XHQgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1x0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWxldGVDYW5jZWwoKSB7XHJcblx0XHRcdFx0dGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5kZWxldGVXaW5kb3cgICA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xyXG5cdFx0XHRcdHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XHJcblx0XHRcdFx0bG9hZEl0ZW1zOiAnQWRtaW5FbXBsb3llZXMvbG9hZCcsXHJcblx0XHRcdFx0ZGVsZXRlSXRlbTogJ0FkbWluRW1wbG95ZWVzL3JlbW92ZSdcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudGFibGVfX2J1dHRvbnMge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAtNTBweDtcclxuXHR9XHJcblx0XHJcblx0LmRpYWxvZ19fYWN0aXZhdG9yIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogLTMwcHg7XHJcblx0XHRsZWZ0OiA0MHB4O1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHR9XHJcblx0LmNhcmRfX3RpdGxlIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQuY2FyZF9fYWN0aW9ucyB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiaW5zcGlyZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVsZXRlV2luZG93LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGVsZXRlV2luZG93ID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZWxldGVXaW5kb3dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW192bS5fdihcItCS0L3QuNC80LDQvdC40LUhXCIpXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlbGV0ZU1zZykpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C00LDQu9C40YLRjFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQntGC0LzQtdC90LBcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCLQodC+0YLRgNGD0LTQvdC40LrQuFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LVcIixcbiAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWxpbmVcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWRhdGEtdGFibGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxldmF0aW9uLTFcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycyxcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgIHNlYXJjaDogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICBcInNlbGVjdC1hbGxcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW0ta2V5XCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICBcIm5vLXJlc3VsdHMtdGV4dFwiOiBcItCh0L7QstC/0LDQtNC10L3QuNC5INC90LUg0L3QsNC50LTQtdC90L4hXCIsXG4gICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLXRleHRcIjogXCLQodGC0YDQvtC6OiBcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHByaW1hcnk6IFwiXCIsIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcywgXCJzZWxlY3RlZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9wcy5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmlkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5maXJzdF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5sYXN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnBvc2l0aW9uKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogcHJvcHMuaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQn9C+0LTRgNC+0LHQvdC10LVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICB7IHNsb3Q6IFwibm8tZGF0YVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiB0cnVlLCBjb2xvcjogXCJyZWRcIiwgaWNvbjogXCJ3YXJuaW5nXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcXHRcXHTQndC10YIg0LTQsNC90L3Ri9GFIDooXFxuICAgICAgXFx0XFx0XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJBZG1pbkVtcGxveWVlQ3JlYXRlXCIgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgZGFyazogXCJcIiB9IH0sIFtfdm0uX3YoXCJhZGRcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uTGVhdmVcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZC5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlbGV0ZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJlcnJvclwiLCBmYWI6IFwiXCIsIGxhcmdlOiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZURpYWxvZyhfdm0uc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTM1MGFkZWI5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zNTBhZGViOVwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9