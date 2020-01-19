webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/admin/AddShow.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/admin/AddShow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AddShow.vue\",\n  data: function data() {\n    return {\n      form: {}\n    };\n  },\n  methods: {\n    postShow: function postShow() {\n      this.$store.dispatch('postShow', this.form);\n      this.form = {};\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/admin/AddShow.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/admin/AddShow.vue?vue&type=template&id=44510d7e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/admin/AddShow.vue?vue&type=template&id=44510d7e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"addShow grid-x\" }, [\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"myForm small-12 medium-6\" }, [\n      _c(\"h1\", [_vm._v(\"Add New Show\")]),\n      _vm._v(\" \"),\n      _c(\"form\", { attrs: { enctype: \"multipart/form-data\" } }, [\n        _c(\"div\", { staticClass: \"row\" }, [\n          _vm._m(1),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"col-75\" }, [\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.form.name,\n                  expression: \"form.name\"\n                }\n              ],\n              attrs: { type: \"text\", id: \"show_name\", name: \"show_name\" },\n              domProps: { value: _vm.form.name },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.form, \"name\", $event.target.value)\n                }\n              }\n            })\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row\" }, [\n          _vm._m(2),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"col-75\" }, [\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.form.cast,\n                  expression: \"form.cast\"\n                }\n              ],\n              attrs: { type: \"text\", id: \"show_cast\", name: \"show_cast\" },\n              domProps: { value: _vm.form.cast },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.form, \"cast\", $event.target.value)\n                }\n              }\n            })\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row\" }, [\n          _vm._m(3),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"col-75\" }, [\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.form.genre,\n                  expression: \"form.genre\"\n                }\n              ],\n              attrs: { type: \"text\", id: \"show_genre\", name: \"show_genre\" },\n              domProps: { value: _vm.form.genre },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.form, \"genre\", $event.target.value)\n                }\n              }\n            })\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row\" }, [\n          _vm._m(4),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"col-75\" }, [\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.form.rating,\n                  expression: \"form.rating\"\n                }\n              ],\n              attrs: { type: \"number\", id: \"show_rating\", name: \"show_rating\" },\n              domProps: { value: _vm.form.rating },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.form, \"rating\", $event.target.value)\n                }\n              }\n            })\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row\" }, [\n          _vm._m(5),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"col-75\" }, [\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.form.year,\n                  expression: \"form.year\"\n                }\n              ],\n              attrs: { type: \"number\", id: \"show_year\", name: \"show_year\" },\n              domProps: { value: _vm.form.year },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.form, \"year\", $event.target.value)\n                }\n              }\n            })\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row\" }, [\n          _vm._m(6),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"col-75\" }, [\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.form.image,\n                  expression: \"form.image\"\n                }\n              ],\n              attrs: { type: \"text\", id: \"show_image\", name: \"show_image\" },\n              domProps: { value: _vm.form.image },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.form, \"image\", $event.target.value)\n                }\n              }\n            })\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row\" }, [\n          _vm._m(7),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"col-75\" }, [\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.form.video,\n                  expression: \"form.video\"\n                }\n              ],\n              attrs: { type: \"text\", id: \"show_link\", name: \"show_link\" },\n              domProps: { value: _vm.form.video },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.form, \"video\", $event.target.value)\n                }\n              }\n            })\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row\" }, [\n          _c(\"input\", {\n            attrs: { type: \"button\", value: \"Add Show\" },\n            on: { click: _vm.postShow }\n          })\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(8)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"header\" }, [\n      _c(\"p\", { staticClass: \"header grid-x\" }, [_vm._v(\"Admin Panel Page\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-25\" }, [\n      _c(\"label\", { attrs: { for: \"show_name\" } }, [_vm._v(\"Show Name\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-25\" }, [\n      _c(\"label\", { attrs: { for: \"show_cast\" } }, [_vm._v(\"Show Casts\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-25\" }, [\n      _c(\"label\", { attrs: { for: \"show_genre\" } }, [_vm._v(\"Show Genre\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-25\" }, [\n      _c(\"label\", { attrs: { for: \"show_rating\" } }, [_vm._v(\"Show Rating\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-25\" }, [\n      _c(\"label\", { attrs: { for: \"show_year\" } }, [_vm._v(\"Show Year\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-25\" }, [\n      _c(\"label\", { attrs: { for: \"show_image\" } }, [\n        _vm._v(\"Cover Image Link\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-25\" }, [\n      _c(\"label\", { attrs: { for: \"show_link\" } }, [_vm._v(\"Videos Link\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"myForm small-12 medium-6\" }, [\n      _c(\"h1\", [_vm._v(\"Users\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/admin/AddShow.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})