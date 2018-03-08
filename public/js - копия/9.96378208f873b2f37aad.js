webpackJsonp([9],{

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(190)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(192)
/* template */
var __vue_template__ = __webpack_require__(193)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b868970"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\employees\\Editor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b868970", Component.options)
  } else {
    hotAPI.reload("data-v-2b868970", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("7e4bc2da", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b868970\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Editor.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b868970\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Editor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n.card__text[data-v-2b868970] {\n\tpadding: 0 30px;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/spa/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Editor.vue"],"names":[],"mappings":";AA6JA;CACA,gBAAA;CACA","file":"Editor.vue","sourcesContent":["<template>\r\n\t<div class=\"employee__create\">\r\n        <v-card>\r\n          <v-card-title>\r\n            <h2>{{title}} <v-icon class=\"title__icon\">{{titleIcon}}</v-icon></h2>\r\n          </v-card-title>\r\n          <v-card-text>\r\n            <v-form v-model=\"valid\" ref=\"form\" lazy-validation>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('name')\"\r\n\t\t\t\t\t      v-model=\"item.first_name\"\r\n\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t      :counter=\"30\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('last_name')\"\r\n\t\t\t\t\t      v-model=\"item.last_name\"\r\n\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t      :counter=\"30\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('patronymic')\"\r\n\t\t\t\t\t      v-model=\"item.patronymic\"\r\n\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t      :counter=\"30\"\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t\t  <v-select\r\n\t\t\t\t\t      :label=\"$t('position')\"\r\n\t\t\t\t\t      v-model=\"item.position\"\r\n\t\t\t\t\t      prepend-icon=\"card_travel\"\r\n\t\t\t\t\t      :items=\"positions\"\r\n\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-select>\r\n\t\t\t\t\t\t  <v-text-field\r\n\t\t\t\t\t      :label=\"$t('position')\"\r\n\t\t\t\t\t      v-model=\"item.salary\"\r\n\t\t\t\t\t      prepend-icon=\"attach_money\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('address')\"\r\n\t\t\t\t\t      v-model=\"item.address\"\r\n\t\t\t\t\t      prepend-icon=\"home\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t\t\t<v-layout row wrap>\r\n\t\t\t\t\t\t    <v-flex xs12>\r\n\t\t\t\t\t\t      <v-menu\r\n\t\t\t\t\t\t        ref=\"menu\"\r\n\t\t\t\t\t\t        lazy\r\n\t\t\t\t\t\t        :close-on-content-click=\"false\"\r\n\t\t\t\t\t\t        v-model=\"menu\"\r\n\t\t\t\t\t\t        transition=\"scale-transition\"\r\n\t\t\t\t\t\t        offset-y\r\n\t\t\t\t\t\t        full-width\r\n\t\t\t\t\t\t        :nudge-right=\"40\"\r\n\t\t\t\t\t\t        min-width=\"290px\"\r\n\t\t\t\t\t\t        :return-value.sync=\"date\"\r\n\t\t\t\t\t\t      >\r\n\t\t\t\t\t\t        <v-text-field\r\n\t\t\t\t\t\t          slot=\"activator\"\r\n\t\t\t\t\t\t          :label=\"$t('birthday')\"\r\n\t\t\t\t\t\t          v-model=\"item.birthday\"\r\n\t\t\t\t\t\t          prepend-icon=\"event\"\r\n\t\t\t\t\t\t          readonly\r\n\t\t\t\t\t\t        ></v-text-field>\r\n\t\t\t\t\t\t        <v-date-picker v-model=\"item.birthday\" no-title scrollable>\r\n\t\t\t\t\t\t          <v-spacer></v-spacer>\r\n\t\t\t\t\t\t          <v-btn flat color=\"primary\" @click=\"menu = false\">{{ $t('cancel') }}</v-btn>\r\n\t\t\t\t\t\t          <v-btn flat color=\"primary\" @click=\"$refs.menu.save(date)\">{{ $t('ok') }}</v-btn>\r\n\t\t\t\t\t\t        </v-date-picker>\r\n\t\t\t\t\t\t      </v-menu>\r\n\t\t\t\t\t\t    </v-flex>\r\n\t\t\t\t\t\t  </v-layout>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('phone_number')\"\r\n\t\t\t\t\t      v-model=\"item.phone_number\"\r\n\t\t\t\t\t      prepend-icon=\"phone_iphone\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-btn outline color=\"info\" @click.native=\"save\" :disabled=\"!valid\">{{ $t('ok') }}</v-btn>\r\n            \t<v-btn outline color=\"error\" @click.native=\"close\">{{ $t('cancel') }}</v-btn> \r\n\t\t\t\t\t  </v-form>\r\n          </v-card-text>\r\n        </v-card>\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions} from 'vuex';\r\n\texport default {\r\n\t\tprops: {\r\n\t\t\temployee: {\r\n\t\t\t\ttype: Object\r\n\t\t\t},\r\n\t\t\tid: {\r\n\t\t\t\tdefault: null\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\tdate: null,\r\n\t      menu: false,\r\n\t      modal: false,\r\n\t      name: '',\r\n\t      item: {},\r\n\t      valid: false,\r\n\t      nameRules: [\r\n\t        v => !!v || 'Введите значение',\r\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\r\n\t      ],\r\n\t      emailRules: [\r\n\t        v => !!v || 'Введите E-mail',\r\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\r\n\t      ],\r\n\t      positions: [\r\n\t        'Старший сотрудник',\r\n\t        'Бухгалтер',\r\n\t        'Директор',\r\n\t        'Сотрудник'\r\n\t      ],\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\ttitle() {\r\n\t\t\t\treturn (this.id) ? 'Hовый сотрудник' : 'Изменить сотрудника';\r\n\t\t\t},\r\n\t\t\ttitleIcon() {\r\n\t\t\t\treturn (this.id) ? 'person_add' : 'person';\r\n\t\t\t}\r\n\t\t},\r\n\t\tcreated() {\r\n\t\t\tif(this.employee) this.item = this.employee;\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\t...mapActions({\r\n\t\t\t\tchangeItem: 'AdminEmployees/edit',\r\n\t\t\t\taddItem: 'AdminEmployees/add'\r\n\t\t\t}),\r\n\t\t\tsave() {\r\n\t\t\t\tif(this.employee) {\r\n\t\t\t\t\tthis.changeItem(this.item);\t\t\t\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthis.addItem(this.item);\r\n\t\t\t\t}\t\r\n\t\t\t\tthis.$router.go(-1);\r\n\t\t\t},\r\n\t\t\tclose() {\r\n\t\t\t\tthis.$router.go(-1);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t.card__text {\r\n\t\tpadding: 0 30px;\r\n\t}\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 192:
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		employee: {
			type: Object
		},
		id: {
			default: null
		}
	},
	data: function data() {
		return {
			date: null,
			menu: false,
			modal: false,
			name: '',
			item: {},
			valid: false,
			nameRules: [function (v) {
				return !!v || 'Введите значение';
			}, function (v) {
				return v && v.length > 1 || 'Имя должно содержать минимум 2 буквы';
			}],
			emailRules: [function (v) {
				return !!v || 'Введите E-mail';
			}, function (v) {
				return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Не валидный E-mail'
				);
			}],
			positions: ['Старший сотрудник', 'Бухгалтер', 'Директор', 'Сотрудник']
		};
	},

	computed: {
		title: function title() {
			return this.id ? 'Hовый сотрудник' : 'Изменить сотрудника';
		},
		titleIcon: function titleIcon() {
			return this.id ? 'person_add' : 'person';
		}
	},
	created: function created() {
		if (this.employee) this.item = this.employee;
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
		changeItem: 'AdminEmployees/edit',
		addItem: 'AdminEmployees/add'
	}), {
		save: function save() {
			if (this.employee) {
				this.changeItem(this.item);
			} else {
				this.addItem(this.item);
			}
			this.$router.go(-1);
		},
		close: function close() {
			this.$router.go(-1);
		}
	})
});

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "employee__create" },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c(
              "h2",
              [
                _vm._v(_vm._s(_vm.title) + " "),
                _c("v-icon", { staticClass: "title__icon" }, [
                  _vm._v(_vm._s(_vm.titleIcon))
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": "" },
                  model: {
                    value: _vm.valid,
                    callback: function($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid"
                  }
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("name"),
                      rules: _vm.nameRules,
                      counter: 30,
                      required: ""
                    },
                    model: {
                      value: _vm.item.first_name,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "first_name", $$v)
                      },
                      expression: "item.first_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("last_name"),
                      rules: _vm.nameRules,
                      counter: 30,
                      required: ""
                    },
                    model: {
                      value: _vm.item.last_name,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "last_name", $$v)
                      },
                      expression: "item.last_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("patronymic"),
                      rules: _vm.nameRules,
                      counter: 30
                    },
                    model: {
                      value: _vm.item.patronymic,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "patronymic", $$v)
                      },
                      expression: "item.patronymic"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: _vm.$t("position"),
                      "prepend-icon": "card_travel",
                      items: _vm.positions,
                      rules: [
                        function(v) {
                          return !!v || "Выберите должность"
                        }
                      ],
                      required: ""
                    },
                    model: {
                      value: _vm.item.position,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "position", $$v)
                      },
                      expression: "item.position"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("position"),
                      "prepend-icon": "attach_money",
                      required: ""
                    },
                    model: {
                      value: _vm.item.salary,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "salary", $$v)
                      },
                      expression: "item.salary"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("address"),
                      "prepend-icon": "home",
                      required: ""
                    },
                    model: {
                      value: _vm.item.address,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "address", $$v)
                      },
                      expression: "item.address"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "" } },
                        [
                          _c(
                            "v-menu",
                            {
                              ref: "menu",
                              attrs: {
                                lazy: "",
                                "close-on-content-click": false,
                                transition: "scale-transition",
                                "offset-y": "",
                                "full-width": "",
                                "nudge-right": 40,
                                "min-width": "290px",
                                "return-value": _vm.date
                              },
                              on: {
                                "update:returnValue": function($event) {
                                  _vm.date = $event
                                }
                              },
                              model: {
                                value: _vm.menu,
                                callback: function($$v) {
                                  _vm.menu = $$v
                                },
                                expression: "menu"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  slot: "activator",
                                  label: _vm.$t("birthday"),
                                  "prepend-icon": "event",
                                  readonly: ""
                                },
                                slot: "activator",
                                model: {
                                  value: _vm.item.birthday,
                                  callback: function($$v) {
                                    _vm.$set(_vm.item, "birthday", $$v)
                                  },
                                  expression: "item.birthday"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-date-picker",
                                {
                                  attrs: { "no-title": "", scrollable: "" },
                                  model: {
                                    value: _vm.item.birthday,
                                    callback: function($$v) {
                                      _vm.$set(_vm.item, "birthday", $$v)
                                    },
                                    expression: "item.birthday"
                                  }
                                },
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { flat: "", color: "primary" },
                                      on: {
                                        click: function($event) {
                                          _vm.menu = false
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.$t("cancel")))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { flat: "", color: "primary" },
                                      on: {
                                        click: function($event) {
                                          _vm.$refs.menu.save(_vm.date)
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("phone_number"),
                      "prepend-icon": "phone_iphone",
                      required: ""
                    },
                    model: {
                      value: _vm.item.phone_number,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "phone_number", $$v)
                      },
                      expression: "item.phone_number"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        outline: "",
                        color: "info",
                        disabled: !_vm.valid
                      },
                      nativeOn: {
                        click: function($event) {
                          _vm.save($event)
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
                          _vm.close($event)
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
    require("vue-hot-reload-api")      .rerender("data-v-2b868970", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9FZGl0b3IudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWU/OTI1MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9FZGl0b3IudnVlPzBlMTUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZT8xN2YyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdNO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQThPO0FBQzlPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SkFBNEosaUZBQWlGO0FBQzdPLHFLQUFxSyxpRkFBaUY7QUFDdFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EseURBQTBELG9CQUFvQixHQUFHLFVBQVUsd0tBQXdL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cUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy85Ljk2Mzc4MjA4Zjg3M2IyZjM3YWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYjg2ODk3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0VkaXRvci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmI4Njg5NzBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0VkaXRvci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTJiODY4OTcwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXEVkaXRvci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmI4Njg5NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYjg2ODk3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYjg2ODk3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0VkaXRvci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjdlNGJjMmRhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJiODY4OTcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYjg2ODk3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0VkaXRvci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmI4Njg5NzBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2FyZF9fdGV4dFtkYXRhLXYtMmI4Njg5NzBdIHtcXG5cXHRwYWRkaW5nOiAwIDMwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvc3BhL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZKQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkVkaXRvci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19jcmVhdGVcXFwiPlxcclxcbiAgICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8aDI+e3t0aXRsZX19IDx2LWljb24gY2xhc3M9XFxcInRpdGxlX19pY29uXFxcIj57e3RpdGxlSWNvbn19PC92LWljb24+PC9oMj5cXHJcXG4gICAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICA8di1mb3JtIHYtbW9kZWw9XFxcInZhbGlkXFxcIiByZWY9XFxcImZvcm1cXFwiIGxhenktdmFsaWRhdGlvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ25hbWUnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJuYW1lUnVsZXNcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjMwXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2xhc3RfbmFtZScpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ubGFzdF9uYW1lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCIzMFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwYXRyb255bWljJylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5wYXRyb255bWljXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCIzMFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPHYtc2VsZWN0XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncG9zaXRpb24nKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBvc2l0aW9uXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiY2FyZF90cmF2ZWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOml0ZW1zPVxcXCJwb3NpdGlvbnNcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi1zZWxlY3Q+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncG9zaXRpb24nKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnNhbGFyeVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcImF0dGFjaF9tb25leVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdhZGRyZXNzJylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5hZGRyZXNzXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiaG9tZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICA8di1mbGV4IHhzMTI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgPHYtbWVudVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgcmVmPVxcXCJtZW51XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgbGF6eVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XFxcImZhbHNlXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgdi1tb2RlbD1cXFwibWVudVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIHRyYW5zaXRpb249XFxcInNjYWxlLXRyYW5zaXRpb25cXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICBvZmZzZXQteVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgZnVsbC13aWR0aFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgOm51ZGdlLXJpZ2h0PVxcXCI0MFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIG1pbi13aWR0aD1cXFwiMjkwcHhcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XFxcImRhdGVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICBzbG90PVxcXCJhY3RpdmF0b3JcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICAgIDpsYWJlbD1cXFwiJHQoJ2JpcnRoZGF5JylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICAgIHYtbW9kZWw9XFxcIml0ZW0uYmlydGhkYXlcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICAgIHByZXBlbmQtaWNvbj1cXFwiZXZlbnRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICAgIHJlYWRvbmx5XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICA8di1kYXRlLXBpY2tlciB2LW1vZGVsPVxcXCJpdGVtLmJpcnRoZGF5XFxcIiBuby10aXRsZSBzY3JvbGxhYmxlPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwibWVudSA9IGZhbHNlXFxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCIkcmVmcy5tZW51LnNhdmUoZGF0ZSlcXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIDwvdi1kYXRlLXBpY2tlcj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA8L3YtbWVudT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgPC92LWZsZXg+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8L3YtbGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICA8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncGhvbmVfbnVtYmVyJylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5waG9uZV9udW1iZXJcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJwaG9uZV9pcGhvbmVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiaW5mb1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwic2F2ZVxcXCIgOmRpc2FibGVkPVxcXCIhdmFsaWRcXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICBcXHQ8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiZXJyb3JcXFwiIEBjbGljay5uYXRpdmU9XFxcImNsb3NlXFxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPiBcXHJcXG5cXHRcXHRcXHRcXHRcXHQgIDwvdi1mb3JtPlxcclxcbiAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgPC92LWNhcmQ+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcblxcdGltcG9ydCB7bWFwQWN0aW9uc30gZnJvbSAndnVleCc7XFxyXFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdFxcdHByb3BzOiB7XFxyXFxuXFx0XFx0XFx0ZW1wbG95ZWU6IHtcXHJcXG5cXHRcXHRcXHRcXHR0eXBlOiBPYmplY3RcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGlkOiB7XFxyXFxuXFx0XFx0XFx0XFx0ZGVmYXVsdDogbnVsbFxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGRhdGEoKSB7XFxyXFxuXFx0XFx0XFx0cmV0dXJuIHtcXHJcXG5cXHRcXHRcXHRcXHRkYXRlOiBudWxsLFxcclxcblxcdCAgICAgIG1lbnU6IGZhbHNlLFxcclxcblxcdCAgICAgIG1vZGFsOiBmYWxzZSxcXHJcXG5cXHQgICAgICBuYW1lOiAnJyxcXHJcXG5cXHQgICAgICBpdGVtOiB7fSxcXHJcXG5cXHQgICAgICB2YWxpZDogZmFsc2UsXFxyXFxuXFx0ICAgICAgbmFtZVJ1bGVzOiBbXFxyXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXFxyXFxuXFx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXFxyXFxuXFx0ICAgICAgXSxcXHJcXG5cXHQgICAgICBlbWFpbFJ1bGVzOiBbXFxyXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcXHJcXG5cXHQgICAgICAgIHYgPT4gL15cXFxcdysoWy4tXT9cXFxcdyspKkBcXFxcdysoWy4tXT9cXFxcdyspKihcXFxcLlxcXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXFxyXFxuXFx0ICAgICAgXSxcXHJcXG5cXHQgICAgICBwb3NpdGlvbnM6IFtcXHJcXG5cXHQgICAgICAgICfQodGC0LDRgNGI0LjQuSDRgdC+0YLRgNGD0LTQvdC40LonLFxcclxcblxcdCAgICAgICAgJ9CR0YPRhdCz0LDQu9GC0LXRgCcsXFxyXFxuXFx0ICAgICAgICAn0JTQuNGA0LXQutGC0L7RgCcsXFxyXFxuXFx0ICAgICAgICAn0KHQvtGC0YDRg9C00L3QuNC6J1xcclxcblxcdCAgICAgIF0sXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0Y29tcHV0ZWQ6IHtcXHJcXG5cXHRcXHRcXHR0aXRsZSgpIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaWQpID8gJ0jQvtCy0YvQuSDRgdC+0YLRgNGD0LTQvdC40LonIDogJ9CY0LfQvNC10L3QuNGC0Ywg0YHQvtGC0YDRg9C00L3QuNC60LAnO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0dGl0bGVJY29uKCkge1xcclxcblxcdFxcdFxcdFxcdHJldHVybiAodGhpcy5pZCkgPyAncGVyc29uX2FkZCcgOiAncGVyc29uJztcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRjcmVhdGVkKCkge1xcclxcblxcdFxcdFxcdGlmKHRoaXMuZW1wbG95ZWUpIHRoaXMuaXRlbSA9IHRoaXMuZW1wbG95ZWU7XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0XFx0Li4ubWFwQWN0aW9ucyh7XFxyXFxuXFx0XFx0XFx0XFx0Y2hhbmdlSXRlbTogJ0FkbWluRW1wbG95ZWVzL2VkaXQnLFxcclxcblxcdFxcdFxcdFxcdGFkZEl0ZW06ICdBZG1pbkVtcGxveWVlcy9hZGQnXFxyXFxuXFx0XFx0XFx0fSksXFxyXFxuXFx0XFx0XFx0c2F2ZSgpIHtcXHJcXG5cXHRcXHRcXHRcXHRpZih0aGlzLmVtcGxveWVlKSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5jaGFuZ2VJdGVtKHRoaXMuaXRlbSk7XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0fSBlbHNlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLmFkZEl0ZW0odGhpcy5pdGVtKTtcXHJcXG5cXHRcXHRcXHRcXHR9XFx0XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy4kcm91dGVyLmdvKC0xKTtcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGNsb3NlKCkge1xcclxcblxcdFxcdFxcdFxcdHRoaXMuJHJvdXRlci5nbygtMSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG5cXHQuY2FyZF9fdGV4dCB7XFxyXFxuXFx0XFx0cGFkZGluZzogMCAzMHB4O1xcclxcblxcdH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYjg2ODk3MFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9FZGl0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fY3JlYXRlXCI+XHJcbiAgICAgICAgPHYtY2FyZD5cclxuICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgIDxoMj57e3RpdGxlfX0gPHYtaWNvbiBjbGFzcz1cInRpdGxlX19pY29uXCI+e3t0aXRsZUljb259fTwvdi1pY29uPjwvaDI+XHJcbiAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cclxuICAgICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgPHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiByZWY9XCJmb3JtXCIgbGF6eS12YWxpZGF0aW9uPlxyXG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCduYW1lJylcIlxyXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uZmlyc3RfbmFtZVwiXHJcblx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJuYW1lUnVsZXNcIlxyXG5cdFx0XHRcdFx0ICAgICAgOmNvdW50ZXI9XCIzMFwiXHJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0ICAgID48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdCAgICA8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnbGFzdF9uYW1lJylcIlxyXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ubGFzdF9uYW1lXCJcclxuXHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXHJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjMwXCJcclxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHQgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwYXRyb255bWljJylcIlxyXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGF0cm9ueW1pY1wiXHJcblx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJuYW1lUnVsZXNcIlxyXG5cdFx0XHRcdFx0ICAgICAgOmNvdW50ZXI9XCIzMFwiXHJcblx0XHRcdFx0XHQgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0XHQgIDx2LXNlbGVjdFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3Bvc2l0aW9uJylcIlxyXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucG9zaXRpb25cIlxyXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiY2FyZF90cmF2ZWxcIlxyXG5cdFx0XHRcdFx0ICAgICAgOml0ZW1zPVwicG9zaXRpb25zXCJcclxuXHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIlt2ID0+ICEhdiB8fCAn0JLRi9Cx0LXRgNC40YLQtSDQtNC+0LvQttC90L7RgdGC0YwnXVwiXHJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0ICAgID48L3Ytc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHQgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwb3NpdGlvbicpXCJcclxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnNhbGFyeVwiXHJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJhdHRhY2hfbW9uZXlcIlxyXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ2FkZHJlc3MnKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5hZGRyZXNzXCJcclxuXHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImhvbWVcIlxyXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHRcdFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxyXG5cdFx0XHRcdFx0XHQgICAgPHYtZmxleCB4czEyPlxyXG5cdFx0XHRcdFx0XHQgICAgICA8di1tZW51XHJcblx0XHRcdFx0XHRcdCAgICAgICAgcmVmPVwibWVudVwiXHJcblx0XHRcdFx0XHRcdCAgICAgICAgbGF6eVxyXG5cdFx0XHRcdFx0XHQgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIHYtbW9kZWw9XCJtZW51XCJcclxuXHRcdFx0XHRcdFx0ICAgICAgICB0cmFuc2l0aW9uPVwic2NhbGUtdHJhbnNpdGlvblwiXHJcblx0XHRcdFx0XHRcdCAgICAgICAgb2Zmc2V0LXlcclxuXHRcdFx0XHRcdFx0ICAgICAgICBmdWxsLXdpZHRoXHJcblx0XHRcdFx0XHRcdCAgICAgICAgOm51ZGdlLXJpZ2h0PVwiNDBcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIG1pbi13aWR0aD1cIjI5MHB4XCJcclxuXHRcdFx0XHRcdFx0ICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJkYXRlXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0ICAgICAgICAgIHNsb3Q9XCJhY3RpdmF0b3JcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgOmxhYmVsPVwiJHQoJ2JpcnRoZGF5JylcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgdi1tb2RlbD1cIml0ZW0uYmlydGhkYXlcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZXZlbnRcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgcmVhZG9ubHlcclxuXHRcdFx0XHRcdFx0ICAgICAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgPHYtZGF0ZS1waWNrZXIgdi1tb2RlbD1cIml0ZW0uYmlydGhkYXlcIiBuby10aXRsZSBzY3JvbGxhYmxlPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJtZW51ID0gZmFsc2VcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwiJHJlZnMubWVudS5zYXZlKGRhdGUpXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIDwvdi1kYXRlLXBpY2tlcj5cclxuXHRcdFx0XHRcdFx0ICAgICAgPC92LW1lbnU+XHJcblx0XHRcdFx0XHRcdCAgICA8L3YtZmxleD5cclxuXHRcdFx0XHRcdFx0ICA8L3YtbGF5b3V0PlxyXG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwaG9uZV9udW1iZXInKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5waG9uZV9udW1iZXJcIlxyXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwicGhvbmVfaXBob25lXCJcclxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHQgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0ICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJzYXZlXCIgOmRpc2FibGVkPVwiIXZhbGlkXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgICBcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiZXJyb3JcIiBAY2xpY2submF0aXZlPVwiY2xvc2VcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPiBcclxuXHRcdFx0XHRcdCAgPC92LWZvcm0+XHJcbiAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgIDwvdi1jYXJkPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge21hcEFjdGlvbnN9IGZyb20gJ3Z1ZXgnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGVtcGxveWVlOiB7XHJcblx0XHRcdFx0dHlwZTogT2JqZWN0XHJcblx0XHRcdH0sXHJcblx0XHRcdGlkOiB7XHJcblx0XHRcdFx0ZGVmYXVsdDogbnVsbFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRlOiBudWxsLFxyXG5cdCAgICAgIG1lbnU6IGZhbHNlLFxyXG5cdCAgICAgIG1vZGFsOiBmYWxzZSxcclxuXHQgICAgICBuYW1lOiAnJyxcclxuXHQgICAgICBpdGVtOiB7fSxcclxuXHQgICAgICB2YWxpZDogZmFsc2UsXHJcblx0ICAgICAgbmFtZVJ1bGVzOiBbXHJcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXHJcblx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXHJcblx0ICAgICAgXSxcclxuXHQgICAgICBlbWFpbFJ1bGVzOiBbXHJcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcclxuXHQgICAgICAgIHYgPT4gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXHJcblx0ICAgICAgXSxcclxuXHQgICAgICBwb3NpdGlvbnM6IFtcclxuXHQgICAgICAgICfQodGC0LDRgNGI0LjQuSDRgdC+0YLRgNGD0LTQvdC40LonLFxyXG5cdCAgICAgICAgJ9CR0YPRhdCz0LDQu9GC0LXRgCcsXHJcblx0ICAgICAgICAn0JTQuNGA0LXQutGC0L7RgCcsXHJcblx0ICAgICAgICAn0KHQvtGC0YDRg9C00L3QuNC6J1xyXG5cdCAgICAgIF0sXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHR0aXRsZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaWQpID8gJ0jQvtCy0YvQuSDRgdC+0YLRgNGD0LTQvdC40LonIDogJ9CY0LfQvNC10L3QuNGC0Ywg0YHQvtGC0YDRg9C00L3QuNC60LAnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aXRsZUljb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0aGlzLmlkKSA/ICdwZXJzb25fYWRkJyA6ICdwZXJzb24nO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0aWYodGhpcy5lbXBsb3llZSkgdGhpcy5pdGVtID0gdGhpcy5lbXBsb3llZTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xyXG5cdFx0XHRcdGNoYW5nZUl0ZW06ICdBZG1pbkVtcGxveWVlcy9lZGl0JyxcclxuXHRcdFx0XHRhZGRJdGVtOiAnQWRtaW5FbXBsb3llZXMvYWRkJ1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0c2F2ZSgpIHtcclxuXHRcdFx0XHRpZih0aGlzLmVtcGxveWVlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNoYW5nZUl0ZW0odGhpcy5pdGVtKTtcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5hZGRJdGVtKHRoaXMuaXRlbSk7XHJcblx0XHRcdFx0fVx0XHJcblx0XHRcdFx0dGhpcy4kcm91dGVyLmdvKC0xKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UoKSB7XHJcblx0XHRcdFx0dGhpcy4kcm91dGVyLmdvKC0xKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5jYXJkX190ZXh0IHtcclxuXHRcdHBhZGRpbmc6IDAgMzBweDtcclxuXHR9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fY3JlYXRlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZV9faWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlSWNvbikpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibGF6eS12YWxpZGF0aW9uXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJmaXJzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5maXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJsYXN0X25hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImxhc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwYXRyb255bWljXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBfdm0ubmFtZVJ1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IDMwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBhdHJvbnltaWMsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGF0cm9ueW1pY1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGF0cm9ueW1pY1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwb3NpdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImNhcmRfdHJhdmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wb3NpdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdiB8fCBcItCS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBvc2l0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5wb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicG9zaXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJhdHRhY2hfbW9uZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5zYWxhcnksXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwic2FsYXJ5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5zYWxhcnlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImFkZHJlc3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJob21lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwibWVudVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZS1vbi1jb250ZW50LWNsaWNrXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXQteVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJudWRnZS1yaWdodFwiOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW4td2lkdGhcIjogXCIyOTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJldHVybi12YWx1ZVwiOiBfdm0uZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnJldHVyblZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1lbnUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImJpcnRoZGF5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5iaXJ0aGRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJiaXJ0aGRheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYmlydGhkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRhdGUtcGlja2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLXRpdGxlXCI6IFwiXCIsIHNjcm9sbGFibGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmJpcnRoZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJiaXJ0aGRheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmJpcnRoZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZW51ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy5tZW51LnNhdmUoX3ZtLmRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwaG9uZV9udW1iZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwaG9uZV9pcGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGhvbmVfbnVtYmVyXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5waG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS52YWxpZFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNhdmUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2FuY2VsXCIpKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMmI4Njg5NzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTJiODY4OTcwXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9FZGl0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTNcbi8vIG1vZHVsZSBjaHVua3MgPSA5Il0sInNvdXJjZVJvb3QiOiIifQ==