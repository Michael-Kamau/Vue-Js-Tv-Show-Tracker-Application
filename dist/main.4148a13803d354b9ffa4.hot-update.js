webpackHotUpdate("main",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shows/Shows.vue?vue&type=template&id=0efe165d&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shows/Shows.vue?vue&type=template&id=0efe165d&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"shows grid-y\", style: _vm.cssVars }, [\n    _c(\"h4\", [_vm._v(\"Movie: \" + _vm._s(_vm.show.name) + \" \")]),\n    _vm._v(\" \"),\n    _c(\"h6\", [\n      _vm._v(\"Cast by: \"),\n      _c(\"small\", [_vm._v(_vm._s(_vm.show.cast))])\n    ]),\n    _vm._v(\" \"),\n    _c(\"h6\", [_vm._v(\"Genre:  \" + _vm._s(_vm.show.genre))]),\n    _vm._v(\" \"),\n    _c(\"h6\", [_vm._v(\"Year: \" + _vm._s(_vm.show.year))]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\n      \"button\",\n      {\n        staticClass: \" button\",\n        class: { success: _vm.watch },\n        attrs: { type: \"button\" },\n        on: { click: _vm.toggleWatch }\n      },\n      [_vm._v(\"Watch Movie  \"), _c(\"i\", { staticClass: \"fas fa-film\" })]\n    ),\n    _vm._v(\" \"),\n    this.$store.getters.loggedIn\n      ? _c(\n          \"button\",\n          {\n            staticClass: \"alert button\",\n            attrs: { type: \"button\" },\n            on: { click: _vm.deleteShow }\n          },\n          [_vm._v(\"Delete \"), _c(\"i\", { staticClass: \"fas fa-trash-alt\" })]\n        )\n      : _vm._e(),\n    _vm._v(\" \"),\n    _vm.watch\n      ? _c(\"div\", [_c(\"Show\", { attrs: { url: _vm.videoUrl } })], 1)\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"h6\", [\n      _vm._v(\"Rating: \"),\n      _c(\"i\", { staticClass: \"fas fa-star\" })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/shows/Shows.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})