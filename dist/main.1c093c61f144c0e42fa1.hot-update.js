webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_pages_Index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/Index.vue */ \"./src/components/pages/Index.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  components: {\n    Index: _components_pages_Index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  mounted: function mounted() {\n    this.$store.dispatch('getShowsData');\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var _routers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routers */ \"./src/routers/index.js\");\n/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_esm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.esm */ \"./node_modules/bootstrap-vue/dist/bootstrap-vue.esm.js\");\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: '#app',\n  store: _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  router: _routers__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

})