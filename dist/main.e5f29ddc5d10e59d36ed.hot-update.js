webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Subscribe.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Subscribe.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Subscribe.vue\",\n  data: function data() {\n    return {\n      form: {}\n    };\n  },\n  methods: {\n    subscribe: function subscribe() {\n      this.$store.dispatch('subscribe', this.email);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/pages/Subscribe.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Subscribe.vue?vue&type=template&id=114c3182&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Subscribe.vue?vue&type=template&id=114c3182&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"subscribe medium-12 small-12 text-center\" },\n    [\n      _c(\"h5\", [\n        _vm._v(\n          \"Ready to stay updated on new movies as they are uploaded to the site?\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"h6\", [\n        _vm._v(\n          \" Enter Your email address below and click the subscribe button.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"form\", { staticClass: \" grid-x\" }, [\n        _c(\"label\", { staticClass: \"medium-10 small-10\" }, [\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.form.email,\n                expression: \"form.email\"\n              }\n            ],\n            attrs: { type: \"text\", placeholder: \"Enter Your Email Address\" },\n            domProps: { value: _vm.form.email },\n            on: {\n              keyup: function($event) {},\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.$set(_vm.form, \"email\", $event.target.value)\n              }\n            }\n          })\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          {\n            staticClass: \"primary button medium-2 small-2\",\n            attrs: { type: \"button\" },\n            on: { click: _vm.subscribe }\n          },\n          [_vm._v(\"Subscribe \"), _c(\"i\", { staticClass: \"fas fa-envelope\" })]\n        )\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/pages/Subscribe.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})