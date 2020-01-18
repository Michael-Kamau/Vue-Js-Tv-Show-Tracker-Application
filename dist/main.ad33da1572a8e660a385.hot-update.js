webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_pages_Index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/Index.vue */ \"./src/components/pages/Index.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  components: {\n    Index: _components_pages_Index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  computed: {\n    loggedIn: function loggedIn() {\n      return this.$store.getters.loggedIn;\n    }\n  },\n  mounted: function mounted() {\n    this.$store.dispatch('getShowsData');\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"app\" },\n    [\n      _c(\"div\", { staticClass: \"navbar\" }, [\n        _c(\"ul\", { staticClass: \"menu\" }, [\n          _c(\"li\", {}, [\n            _c(\n              \"a\",\n              [_c(\"router-link\", { attrs: { to: \"/\" } }, [_vm._v(\"Home\")])],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"li\", [\n            _c(\n              \"a\",\n              [\n                _c(\"router-link\", { attrs: { to: \"/about\" } }, [\n                  _vm._v(\"About\")\n                ])\n              ],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _vm.loggedIn\n            ? _c(\"li\", [\n                _c(\n                  \"a\",\n                  [\n                    _c(\"router-link\", { attrs: { to: \"/addShow\" } }, [\n                      _vm._v(\"Add Show\")\n                    ])\n                  ],\n                  1\n                )\n              ])\n            : _vm._e(),\n          _vm._v(\" \"),\n          _vm.loggedIn\n            ? _c(\"li\", [\n                _c(\n                  \"a\",\n                  [\n                    _c(\"router-link\", { attrs: { to: \"/admin\" } }, [\n                      _vm._v(\"Login\")\n                    ])\n                  ],\n                  1\n                )\n              ])\n            : _vm._e(),\n          _vm._v(\" \"),\n          !_vm.loggedIn\n            ? _c(\"li\", [\n                _c(\n                  \"a\",\n                  [\n                    _c(\"router-link\", { attrs: { to: \"/logout\" } }, [\n                      _vm._v(\"Logout\")\n                    ])\n                  ],\n                  1\n                )\n              ])\n            : _vm._e()\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"router-view\")\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})