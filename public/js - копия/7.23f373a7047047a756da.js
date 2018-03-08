webpackJsonp([7],{

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(202)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(204)
/* template */
var __vue_template__ = __webpack_require__(205)
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

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("94547ba8", content, false);
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

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.table__buttons[data-v-350adeb9] {\n\tposition: absolute;\n\tbottom: -50px;\n}\n.dialog__activator[data-v-350adeb9] {\n\tposition: absolute;\n\tbottom: -30px;\n\tleft: 40px;\n\tz-index: 1;\n}\n.card__title[data-v-350adeb9] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n.card__actions[data-v-350adeb9] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/List.vue"],"names":[],"mappings":";AAyJA;CACA,mBAAA;CACA,cAAA;CACA;AAEA;CACA,mBAAA;CACA,cAAA;CACA,WAAA;CACA,WAAA;CACA;AACA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA;AACA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <v-app id=\"inspire\">\r\n      <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n\t\t\t\t\t<v-card-title>\r\n\t\t\t\t\t\t<span class=\"headline\">Внимание!</span>\r\n\t\t\t\t\t</v-card-title>\r\n\t\t\t\t\t<v-card-text>\r\n\t\t\t\t\t\t<v-flex xs12>{{deleteMsg}}</v-flex>\r\n\t\t\t\t\t</v-card-text>\r\n\t\t\t\t\t<v-card-actions>\r\n\t\t\t\t\t\t<v-btn outline color=\"info\" @click.native=\"deleteConfirm\">Удалить</v-btn>\r\n\t\t\t\t\t\t<v-btn outline color=\"error\" @click.native=\"deleteCancel\">Отмена</v-btn>\r\n\t\t\t\t\t</v-card-actions>\r\n        </v-card>\r\n      </v-dialog>  \r\n      <v-card>\r\n      \t<v-card-title>\r\n\t      \t<h2>Сотрудники</h2>\r\n\t      \t<v-spacer></v-spacer>\r\n\t      \t<v-text-field\r\n\t\t\t\t\t\tappend-icon=\"search\"\r\n\t\t\t\t\t\tlabel=\"Введите название\"\r\n\t\t\t\t\t\tsingle-line\t\t\t\r\n\t\t\t\t\t\tv-model=\"search\"\r\n\t      \t></v-text-field>\r\n      \t</v-card-title>\r\n      <v-data-table\r\n        :headers=\"headers\"\r\n        :items=\"items\"\r\n        :search=\"search\"\r\n        v-model=\"selected\"\r\n        select-all\r\n        item-key=\"id\"\r\n\t\t\t\tno-results-text=\"Совпадений не найдено!\"\r\n       \trows-per-page-text=\"Строк: \"\r\n        class=\"elevation-1\"\r\n      >\r\n        <template slot=\"items\" slot-scope=\"props\">\r\n        \t<td>\r\n\t\t        <v-checkbox\r\n\t\t          primary\r\n\t\t          hide-details\r\n\t\t          v-model=\"props.selected\"\r\n\t\t        ></v-checkbox>\r\n\t\t      </td>\r\n          <td>{{ props.item.id }}</td>\r\n          <td>{{ props.item.first_name }}</td>\r\n          <td>{{ props.item.last_name }}</td>\r\n          <td>{{ props.item.position }}</td>\r\n          <td>\r\n          \t<v-btn outline color=\"primary\" round :to=\"{name: 'employee', params: {id: props.item.id}}\">Подробнее</v-btn>   \r\n          </td>\r\n        </template>\r\n\t\t\t\t<template slot=\"no-data\">\r\n          <v-alert :value=\"true\" color=\"error\" icon=\"warning\">\r\n        \t\tНет данных :(\r\n      \t\t</v-alert>\r\n        </template>\r\n\t\t\t</v-data-table>\r\n\t\t\t<div class=\"table__buttons\">\r\n\t\t\t\t<v-btn fab dark large color=\"cyan\"\r\n\t\t\t\t\t\t\t:to=\"{name: 'employees'}\">\r\n      \t\t<v-icon dark>add</v-icon>\r\n    \t\t</v-btn>\r\n    \t\t<transition  enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n\t\t\t \t<v-btn v-show=\"selected.length > 0\" \r\n\t\t\t\t\t\tclass=\"delete-btn\" color=\"error\" \r\n\t\t\t\t\t\tfab large dark\r\n\t\t\t\t\t\t@click=\"deleteDialog(selected)\"\r\n\t\t\t\t\t\t>\r\n      \t\t<v-icon>delete</v-icon>\r\n    \t\t</v-btn>\r\n\t\t\t</transition>\r\n\t\t\t</div>\t\t\r\n\t\t</v-card>\t\t\r\n\t</v-app>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\texport default {\r\n\t\tdata: () => ({\r\n      // Поиск / Выборка\r\n\t\t\tsearch: '',\r\n\t\t\tselected: [],\r\n\t\t\tdialog: false,\r\n\t\t\t// Удаление\r\n\t\t\tdeleteWindow: false,\r\n\t\t\tdeleteCategory: null,\r\n\t\t\tdelMode: 'single',\r\n\t\t\t// Заголовки таблицы\r\n\t\t\theaders: [{\r\n\t\t\t\t\ttext: 'ID',\r\n\t\t\t\t\talign: 'left',\r\n\t\t\t\t\tsortable: false,\r\n\t\t\t\t\tvalue: 'id'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Имя',\r\n\t\t\t\t\tvalue: 'first_name'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Фамилия',\r\n\t\t\t\t\tvalue: 'last_name'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: 'Должность',\r\n\t\t\t\t\tvalue: 'position'\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\ttext: '',\r\n\t\t\t\t\tsortable: false\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}),\r\n\t\tcomputed: {\r\n\t\t\tdeleteMsg() {\r\n\t\t\t\treturn (this.selected.length == 1) ? 'Вы действительно хотите удалить данный элемент?' :\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t 'Вы действительно хотите удалить выбранные элементы?';\r\n\t\t\t},\r\n\t\t\t...mapGetters({\r\n      items: 'AdminEmployees/employees'\r\n    \t})\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tdeleteDialog(item) {\r\n\t\t\t\tthis.deleteWindow = true;\r\n\t\t\t\tthis.deleteCategory = item;\r\n\t\t\t},\r\n\t\t\tdeleteConfirm() {\r\n\t\t\t\tthis.selected.forEach(el => this.deleteItem(el.id));\r\n\t\t\t\tthis.selected = [];\r\n\t\t\t\tthis.deleteWindow = false;\r\n\t\t\t  this.editedID = null;\t\t\t\r\n\t\t\t},\r\n\t\t\tdeleteCancel() {\r\n\t\t\t\tthis.deleteCategory = null;\r\n\t\t\t\tthis.deleteWindow   = false;\r\n\t\t\t},\r\n\t\t\tclose() {\r\n\t\t\t\tthis.dialog = false;\r\n\t\t\t\tthis.editedItem = Object.assign({}, this.defaultItem);\r\n\t\t\t\tthis.editedIndex = -1;\r\n\t\t\t},\r\n\t\t\t...mapActions({\r\n\t\t\t\tloadItems: 'AdminEmployees/load',\r\n\t\t\t\tdeleteItem: 'AdminEmployees/remove'\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t.table__buttons {\r\n\t\tposition: absolute;\r\n\t\tbottom: -50px;\r\n\t}\r\n\t\r\n\t.dialog__activator {\r\n\t\tposition: absolute;\r\n\t\tbottom: -30px;\r\n\t\tleft: 40px;\r\n\t\tz-index: 1;\r\n\t}\r\n\t.card__title {\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.card__actions {\r\n\t\tjustify-content: center;\r\n\t}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 204:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 205:
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
                                color: "primary",
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
                    { attrs: { value: true, color: "error", icon: "warning" } },
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
                    to: { name: "employees" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZT9jMzk4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlPzY1NDciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlP2FkMjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSw2REFBOEQsdUJBQXVCLGtCQUFrQixHQUFHLHVDQUF1Qyx1QkFBdUIs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvNy4yM2YzNzNhNzA0NzA0N2E3NTZkYS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0zNTBhZGViOVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXGVtcGxveWVlc1xcXFxMaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNTBhZGViOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM1MGFkZWI5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAxXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI5NDU0N2JhOFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM1MGFkZWI5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzUwYWRlYjlcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYmxlX19idXR0b25zW2RhdGEtdi0zNTBhZGViOV0ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IC01MHB4O1xcbn1cXG4uZGlhbG9nX19hY3RpdmF0b3JbZGF0YS12LTM1MGFkZWI5XSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogLTMwcHg7XFxuXFx0bGVmdDogNDBweDtcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG4uY2FyZF9fdGl0bGVbZGF0YS12LTM1MGFkZWI5XSB7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNhcmRfX2FjdGlvbnNbZGF0YS12LTM1MGFkZWI5XSB7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9zcGEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlKQTtDQUNBLG1CQUFBO0NBQ0EsY0FBQTtDQUNBO0FBRUE7Q0FDQSxtQkFBQTtDQUNBLGNBQUE7Q0FDQSxXQUFBO0NBQ0EsV0FBQTtDQUNBO0FBQ0E7Q0FDQSx5QkFBQTtLQUFBLHNCQUFBO1NBQUEsd0JBQUE7Q0FDQTtBQUNBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkxpc3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDx2LWFwcCBpZD1cXFwiaW5zcGlyZVxcXCI+XFxyXFxuICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcImRlbGV0ZVdpbmRvd1xcXCIgbWF4LXdpZHRoPVxcXCI1MDBweFxcXCI+XFxyXFxuICAgICAgICA8di1jYXJkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx2LWNhcmQtdGl0bGU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImhlYWRsaW5lXFxcIj7QktC90LjQvNCw0L3QuNC1ITwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3YtY2FyZC10aXRsZT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di1jYXJkLXRleHQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3YtY2FyZC10ZXh0PlxcclxcblxcdFxcdFxcdFxcdFxcdDx2LWNhcmQtYWN0aW9ucz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiaW5mb1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ29uZmlybVxcXCI+0KPQtNCw0LvQuNGC0Yw8L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJlcnJvclxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ2FuY2VsXFxcIj7QntGC0LzQtdC90LA8L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdi1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICA8L3YtY2FyZD5cXHJcXG4gICAgICA8L3YtZGlhbG9nPiAgXFxyXFxuICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICBcXHQ8di1jYXJkLXRpdGxlPlxcclxcblxcdCAgICAgIFxcdDxoMj7QodC+0YLRgNGD0LTQvdC40LrQuDwvaDI+XFxyXFxuXFx0ICAgICAgXFx0PHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuXFx0ICAgICAgXFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGFwcGVuZC1pY29uPVxcXCJzZWFyY2hcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGFiZWw9XFxcItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0c2luZ2xlLWxpbmVcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR2LW1vZGVsPVxcXCJzZWFyY2hcXFwiXFxyXFxuXFx0ICAgICAgXFx0Pjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgIFxcdDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgIDx2LWRhdGEtdGFibGVcXHJcXG4gICAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcclxcbiAgICAgICAgOml0ZW1zPVxcXCJpdGVtc1xcXCJcXHJcXG4gICAgICAgIDpzZWFyY2g9XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgIHYtbW9kZWw9XFxcInNlbGVjdGVkXFxcIlxcclxcbiAgICAgICAgc2VsZWN0LWFsbFxcclxcbiAgICAgICAgaXRlbS1rZXk9XFxcImlkXFxcIlxcclxcblxcdFxcdFxcdFxcdG5vLXJlc3VsdHMtdGV4dD1cXFwi0KHQvtCy0L/QsNC00LXQvdC40Lkg0L3QtSDQvdCw0LnQtNC10L3QviFcXFwiXFxyXFxuICAgICAgIFxcdHJvd3MtcGVyLXBhZ2UtdGV4dD1cXFwi0KHRgtGA0L7QujogXFxcIlxcclxcbiAgICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIlxcclxcbiAgICAgID5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJpdGVtc1xcXCIgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiPlxcclxcbiAgICAgICAgXFx0PHRkPlxcclxcblxcdFxcdCAgICAgICAgPHYtY2hlY2tib3hcXHJcXG5cXHRcXHQgICAgICAgICAgcHJpbWFyeVxcclxcblxcdFxcdCAgICAgICAgICBoaWRlLWRldGFpbHNcXHJcXG5cXHRcXHQgICAgICAgICAgdi1tb2RlbD1cXFwicHJvcHMuc2VsZWN0ZWRcXFwiXFxyXFxuXFx0XFx0ICAgICAgICA+PC92LWNoZWNrYm94PlxcclxcblxcdFxcdCAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cXHJcXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uZmlyc3RfbmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmxhc3RfbmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLnBvc2l0aW9uIH19PC90ZD5cXHJcXG4gICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICBcXHQ8di1idG4gb3V0bGluZSBjb2xvcj1cXFwicHJpbWFyeVxcXCIgcm91bmQgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlJywgcGFyYW1zOiB7aWQ6IHByb3BzLml0ZW0uaWR9fVxcXCI+0J/QvtC00YDQvtCx0L3QtdC1PC92LWJ0bj4gICBcXHJcXG4gICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0XFx0PHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcclxcbiAgICAgICAgICA8di1hbGVydCA6dmFsdWU9XFxcInRydWVcXFwiIGNvbG9yPVxcXCJlcnJvclxcXCIgaWNvbj1cXFwid2FybmluZ1xcXCI+XFxyXFxuICAgICAgICBcXHRcXHTQndC10YIg0LTQsNC90L3Ri9GFIDooXFxyXFxuICAgICAgXFx0XFx0PC92LWFsZXJ0PlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG5cXHRcXHRcXHQ8L3YtZGF0YS10YWJsZT5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ0YWJsZV9fYnV0dG9uc1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVxcXCJjeWFuXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDp0bz1cXFwie25hbWU6ICdlbXBsb3llZXMnfVxcXCI+XFxyXFxuICAgICAgXFx0XFx0PHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxcclxcbiAgICBcXHRcXHQ8L3YtYnRuPlxcclxcbiAgICBcXHRcXHQ8dHJhbnNpdGlvbiAgZW50ZXItYWN0aXZlLWNsYXNzPVxcXCJidXR0b25FbnRlclxcXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVxcXCJidXR0b25MZWF2ZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXHJcXG5cXHRcXHRcXHQgXFx0PHYtYnRuIHYtc2hvdz1cXFwic2VsZWN0ZWQubGVuZ3RoID4gMFxcXCIgXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y2xhc3M9XFxcImRlbGV0ZS1idG5cXFwiIGNvbG9yPVxcXCJlcnJvclxcXCIgXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZmFiIGxhcmdlIGRhcmtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRAY2xpY2s9XFxcImRlbGV0ZURpYWxvZyhzZWxlY3RlZClcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PlxcclxcbiAgICAgIFxcdFxcdDx2LWljb24+ZGVsZXRlPC92LWljb24+XFxyXFxuICAgIFxcdFxcdDwvdi1idG4+XFxyXFxuXFx0XFx0XFx0PC90cmFuc2l0aW9uPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcdFxcdFxcclxcblxcdFxcdDwvdi1jYXJkPlxcdFxcdFxcclxcblxcdDwvdi1hcHA+XFx0XFx0XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxyXFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdFxcdGRhdGE6ICgpID0+ICh7XFxyXFxuICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXFxyXFxuXFx0XFx0XFx0c2VhcmNoOiAnJyxcXHJcXG5cXHRcXHRcXHRzZWxlY3RlZDogW10sXFxyXFxuXFx0XFx0XFx0ZGlhbG9nOiBmYWxzZSxcXHJcXG5cXHRcXHRcXHQvLyDQo9C00LDQu9C10L3QuNC1XFxyXFxuXFx0XFx0XFx0ZGVsZXRlV2luZG93OiBmYWxzZSxcXHJcXG5cXHRcXHRcXHRkZWxldGVDYXRlZ29yeTogbnVsbCxcXHJcXG5cXHRcXHRcXHRkZWxNb2RlOiAnc2luZ2xlJyxcXHJcXG5cXHRcXHRcXHQvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcXHJcXG5cXHRcXHRcXHRoZWFkZXJzOiBbe1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQ6ICdJRCcsXFxyXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ246ICdsZWZ0JyxcXHJcXG5cXHRcXHRcXHRcXHRcXHRzb3J0YWJsZTogZmFsc2UsXFxyXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6ICdpZCdcXHJcXG5cXHRcXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdFxcdHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0OiAn0JjQvNGPJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ2ZpcnN0X25hbWUnXFxyXFxuXFx0XFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRcXHR7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGV4dDogJ9Ck0LDQvNC40LvQuNGPJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ2xhc3RfbmFtZSdcXHJcXG5cXHRcXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdFxcdHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtGMJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ3Bvc2l0aW9uJ1xcclxcblxcdFxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0XFx0e1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQ6ICcnLFxcclxcblxcdFxcdFxcdFxcdFxcdHNvcnRhYmxlOiBmYWxzZVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRdXFxyXFxuXFx0XFx0fSksXFxyXFxuXFx0XFx0Y29tcHV0ZWQ6IHtcXHJcXG5cXHRcXHRcXHRkZWxldGVNc2coKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PSAxKSA/ICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDQtNCw0L3QvdGL0Lkg0Y3Qu9C10LzQtdC90YI/JyA6XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDQstGL0LHRgNCw0L3QvdGL0LUg0Y3Qu9C10LzQtdC90YLRiz8nO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0Li4ubWFwR2V0dGVycyh7XFxyXFxuICAgICAgaXRlbXM6ICdBZG1pbkVtcGxveWVlcy9lbXBsb3llZXMnXFxyXFxuICAgIFxcdH0pXFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0XFx0ZGVsZXRlRGlhbG9nKGl0ZW0pIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kZWxldGVDYXRlZ29yeSA9IGl0ZW07XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRkZWxldGVDb25maXJtKCkge1xcclxcblxcdFxcdFxcdFxcdHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLnNlbGVjdGVkID0gW107XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcXHJcXG5cXHRcXHRcXHQgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xcdFxcdFxcdFxcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0ZGVsZXRlQ2FuY2VsKCkge1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZGVsZXRlV2luZG93ICAgPSBmYWxzZTtcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGNsb3NlKCkge1xcclxcblxcdFxcdFxcdFxcdHRoaXMuZGlhbG9nID0gZmFsc2U7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0Li4ubWFwQWN0aW9ucyh7XFxyXFxuXFx0XFx0XFx0XFx0bG9hZEl0ZW1zOiAnQWRtaW5FbXBsb3llZXMvbG9hZCcsXFxyXFxuXFx0XFx0XFx0XFx0ZGVsZXRlSXRlbTogJ0FkbWluRW1wbG95ZWVzL3JlbW92ZSdcXHJcXG5cXHRcXHRcXHR9KVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG5cXHQudGFibGVfX2J1dHRvbnMge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRib3R0b206IC01MHB4O1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQuZGlhbG9nX19hY3RpdmF0b3Ige1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRib3R0b206IC0zMHB4O1xcclxcblxcdFxcdGxlZnQ6IDQwcHg7XFxyXFxuXFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHR9XFxyXFxuXFx0LmNhcmRfX3RpdGxlIHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFx0LmNhcmRfX2FjdGlvbnMge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zNTBhZGViOVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIjx0ZW1wbGF0ZT5cclxuICA8di1hcHAgaWQ9XCJpbnNwaXJlXCI+XHJcbiAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGVsZXRlV2luZG93XCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cclxuICAgICAgICA8di1jYXJkPlxyXG5cdFx0XHRcdFx0PHYtY2FyZC10aXRsZT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPtCS0L3QuNC80LDQvdC40LUhPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC92LWNhcmQtdGl0bGU+XHJcblx0XHRcdFx0XHQ8di1jYXJkLXRleHQ+XHJcblx0XHRcdFx0XHRcdDx2LWZsZXggeHMxMj57e2RlbGV0ZU1zZ319PC92LWZsZXg+XHJcblx0XHRcdFx0XHQ8L3YtY2FyZC10ZXh0PlxyXG5cdFx0XHRcdFx0PHYtY2FyZC1hY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8di1idG4gb3V0bGluZSBjb2xvcj1cImluZm9cIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ29uZmlybVwiPtCj0LTQsNC70LjRgtGMPC92LWJ0bj5cclxuXHRcdFx0XHRcdFx0PHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDYW5jZWxcIj7QntGC0LzQtdC90LA8L3YtYnRuPlxyXG5cdFx0XHRcdFx0PC92LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICA8L3YtY2FyZD5cclxuICAgICAgPC92LWRpYWxvZz4gIFxyXG4gICAgICA8di1jYXJkPlxyXG4gICAgICBcdDx2LWNhcmQtdGl0bGU+XHJcblx0ICAgICAgXHQ8aDI+0KHQvtGC0YDRg9C00L3QuNC60Lg8L2gyPlxyXG5cdCAgICAgIFx0PHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcblx0ICAgICAgXHQ8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHRcdGFwcGVuZC1pY29uPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCLQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1XCJcclxuXHRcdFx0XHRcdFx0c2luZ2xlLWxpbmVcdFx0XHRcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cInNlYXJjaFwiXHJcblx0ICAgICAgXHQ+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgIFx0PC92LWNhcmQtdGl0bGU+XHJcbiAgICAgIDx2LWRhdGEtdGFibGVcclxuICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxyXG4gICAgICAgIDppdGVtcz1cIml0ZW1zXCJcclxuICAgICAgICA6c2VhcmNoPVwic2VhcmNoXCJcclxuICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRcIlxyXG4gICAgICAgIHNlbGVjdC1hbGxcclxuICAgICAgICBpdGVtLWtleT1cImlkXCJcclxuXHRcdFx0XHRuby1yZXN1bHRzLXRleHQ9XCLQodC+0LLQv9Cw0LTQtdC90LjQuSDQvdC1INC90LDQudC00LXQvdC+IVwiXHJcbiAgICAgICBcdHJvd3MtcGVyLXBhZ2UtdGV4dD1cItCh0YLRgNC+0Lo6IFwiXHJcbiAgICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXHJcbiAgICAgID5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgXHQ8dGQ+XHJcblx0XHQgICAgICAgIDx2LWNoZWNrYm94XHJcblx0XHQgICAgICAgICAgcHJpbWFyeVxyXG5cdFx0ICAgICAgICAgIGhpZGUtZGV0YWlsc1xyXG5cdFx0ICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5zZWxlY3RlZFwiXHJcblx0XHQgICAgICAgID48L3YtY2hlY2tib3g+XHJcblx0XHQgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uZmlyc3RfbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5sYXN0X25hbWUgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ucG9zaXRpb24gfX08L3RkPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgXHQ8di1idG4gb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIiByb3VuZCA6dG89XCJ7bmFtZTogJ2VtcGxveWVlJywgcGFyYW1zOiB7aWQ6IHByb3BzLml0ZW0uaWR9fVwiPtCf0L7QtNGA0L7QsdC90LXQtTwvdi1idG4+ICAgXHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0PHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XHJcbiAgICAgICAgICA8di1hbGVydCA6dmFsdWU9XCJ0cnVlXCIgY29sb3I9XCJlcnJvclwiIGljb249XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgXHRcdNCd0LXRgiDQtNCw0L3QvdGL0YUgOihcclxuICAgICAgXHRcdDwvdi1hbGVydD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8L3YtZGF0YS10YWJsZT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlX19idXR0b25zXCI+XHJcblx0XHRcdFx0PHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVwiY3lhblwiXHJcblx0XHRcdFx0XHRcdFx0OnRvPVwie25hbWU6ICdlbXBsb3llZXMnfVwiPlxyXG4gICAgICBcdFx0PHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxyXG4gICAgXHRcdDwvdi1idG4+XHJcbiAgICBcdFx0PHRyYW5zaXRpb24gIGVudGVyLWFjdGl2ZS1jbGFzcz1cImJ1dHRvbkVudGVyXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYnV0dG9uTGVhdmVcIiBtb2RlPVwib3V0LWluXCI+XHJcblx0XHRcdCBcdDx2LWJ0biB2LXNob3c9XCJzZWxlY3RlZC5sZW5ndGggPiAwXCIgXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZGVsZXRlLWJ0blwiIGNvbG9yPVwiZXJyb3JcIiBcclxuXHRcdFx0XHRcdFx0ZmFiIGxhcmdlIGRhcmtcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiZGVsZXRlRGlhbG9nKHNlbGVjdGVkKVwiXHJcblx0XHRcdFx0XHRcdD5cclxuICAgICAgXHRcdDx2LWljb24+ZGVsZXRlPC92LWljb24+XHJcbiAgICBcdFx0PC92LWJ0bj5cclxuXHRcdFx0PC90cmFuc2l0aW9uPlxyXG5cdFx0XHQ8L2Rpdj5cdFx0XHJcblx0XHQ8L3YtY2FyZD5cdFx0XHJcblx0PC92LWFwcD5cdFx0XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YTogKCkgPT4gKHtcclxuICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXHJcblx0XHRcdHNlYXJjaDogJycsXHJcblx0XHRcdHNlbGVjdGVkOiBbXSxcclxuXHRcdFx0ZGlhbG9nOiBmYWxzZSxcclxuXHRcdFx0Ly8g0KPQtNCw0LvQtdC90LjQtVxyXG5cdFx0XHRkZWxldGVXaW5kb3c6IGZhbHNlLFxyXG5cdFx0XHRkZWxldGVDYXRlZ29yeTogbnVsbCxcclxuXHRcdFx0ZGVsTW9kZTogJ3NpbmdsZScsXHJcblx0XHRcdC8vINCX0LDQs9C+0LvQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xyXG5cdFx0XHRoZWFkZXJzOiBbe1xyXG5cdFx0XHRcdFx0dGV4dDogJ0lEJyxcclxuXHRcdFx0XHRcdGFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRzb3J0YWJsZTogZmFsc2UsXHJcblx0XHRcdFx0XHR2YWx1ZTogJ2lkJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ9CY0LzRjycsXHJcblx0XHRcdFx0XHR2YWx1ZTogJ2ZpcnN0X25hbWUnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAn0KTQsNC80LjQu9C40Y8nLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICdsYXN0X25hbWUnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtGMJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAncG9zaXRpb24nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnJyxcclxuXHRcdFx0XHRcdHNvcnRhYmxlOiBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSksXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRkZWxldGVNc2coKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PSAxKSA/ICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDQtNCw0L3QvdGL0Lkg0Y3Qu9C10LzQtdC90YI/JyA6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDQstGL0LHRgNCw0L3QvdGL0LUg0Y3Qu9C10LzQtdC90YLRiz8nO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgaXRlbXM6ICdBZG1pbkVtcGxveWVlcy9lbXBsb3llZXMnXHJcbiAgICBcdH0pXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRkZWxldGVEaWFsb2coaXRlbSkge1xyXG5cdFx0XHRcdHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gaXRlbTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVsZXRlQ29uZmlybSgpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkLmZvckVhY2goZWwgPT4gdGhpcy5kZWxldGVJdGVtKGVsLmlkKSk7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZCA9IFtdO1xyXG5cdFx0XHRcdHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcblx0XHRcdCAgdGhpcy5lZGl0ZWRJRCA9IG51bGw7XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGRlbGV0ZUNhbmNlbCgpIHtcclxuXHRcdFx0XHR0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLmRlbGV0ZVdpbmRvdyAgID0gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlKCkge1xyXG5cdFx0XHRcdHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XHJcblx0XHRcdFx0dGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcclxuXHRcdFx0XHRsb2FkSXRlbXM6ICdBZG1pbkVtcGxveWVlcy9sb2FkJyxcclxuXHRcdFx0XHRkZWxldGVJdGVtOiAnQWRtaW5FbXBsb3llZXMvcmVtb3ZlJ1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC50YWJsZV9fYnV0dG9ucyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IC01MHB4O1xyXG5cdH1cclxuXHRcclxuXHQuZGlhbG9nX19hY3RpdmF0b3Ige1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAtMzBweDtcclxuXHRcdGxlZnQ6IDQwcHg7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdH1cclxuXHQuY2FyZF9fdGl0bGUge1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cdC5jYXJkX19hY3Rpb25zIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJpbnNwaXJlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZWxldGVXaW5kb3csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVXaW5kb3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlbGV0ZVdpbmRvd1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbX3ZtLl92KFwi0JLQvdC40LzQsNC90LjQtSFcIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVsZXRlTXNnKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCj0LTQsNC70LjRgtGMXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDYW5jZWwoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCe0YLQvNC10L3QsFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcItCh0L7RgtGA0YPQtNC90LjQutC4XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtVwiLFxuICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0LWFsbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IFwi0KHQvtCy0L/QsNC00LXQvdC40Lkg0L3QtSDQvdCw0LnQtNC10L3QviFcIixcbiAgICAgICAgICAgICAgICBcInJvd3MtcGVyLXBhZ2UtdGV4dFwiOiBcItCh0YLRgNC+0Lo6IFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcHJpbWFyeTogXCJcIiwgXCJoaWRlLWRldGFpbHNcIjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KHByb3BzLCBcInNlbGVjdGVkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb3BzLnNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaWQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmZpcnN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmxhc3RfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ucG9zaXRpb24pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IHByb3BzLml0ZW0uaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0J/QvtC00YDQvtCx0L3QtdC1XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcIm5vLWRhdGFcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogdHJ1ZSwgY29sb3I6IFwiZXJyb3JcIiwgaWNvbjogXCJ3YXJuaW5nXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcXHRcXHTQndC10YIg0LTQsNC90L3Ri9GFIDooXFxuICAgICAgXFx0XFx0XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJlbXBsb3llZXNcIiB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBkYXJrOiBcIlwiIH0gfSwgW192bS5fdihcImFkZFwiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uRW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25MZWF2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZC5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVsZXRlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImVycm9yXCIsIGZhYjogXCJcIiwgbGFyZ2U6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlRGlhbG9nKF92bS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzUwYWRlYjlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gNyJdLCJzb3VyY2VSb290IjoiIn0=