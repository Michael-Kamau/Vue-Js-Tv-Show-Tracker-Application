webpackHotUpdate("main",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=template&id=160ae547&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Index.vue?vue&type=template&id=160ae547&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"index grid-x\" },\n    [\n      _c(\"div\", { staticClass: \"header grid-x\" }, [\n        _c(\"h1\", { staticClass: \"medium-12  cell \" }, [\n          _vm._v(\"Welcome to   index page\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"medium-8 cell search\" }, [\n          _c(\"label\", [\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.search,\n                  expression: \"search\"\n                }\n              ],\n              attrs: { type: \"text\", placeholder: \"Search Movie\" },\n              domProps: { value: _vm.search },\n              on: {\n                keyup: function($event) {},\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.search = $event.target.value\n                }\n              }\n            })\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _vm._l(this.$store.getters.getAllShows, function(show) {\n        return show.name.toUpperCase().includes(_vm.search.toUpperCase()) ||\n          show.year\n            .toString()\n            .includes(\n              _vm.search.toUpperCase() ||\n                show.cast.toUpperCase().includes(_vm.search.toUpperCase())\n            )\n          ? _c(\"div\", { staticClass: \"medium-4 small-6 cell\" }, [\n              _c(\n                \"div\",\n                [_c(\"shows\", { attrs: { show: show } }, [_vm._v(\"Show\")])],\n                1\n              )\n            ])\n          : _vm._e()\n      })\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/pages/Index.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})