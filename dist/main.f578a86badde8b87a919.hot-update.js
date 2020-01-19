webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AllShows_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllShows.vue */ \"./src/components/pages/AllShows.vue\");\n/* harmony import */ var _shows_Shows_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shows/Shows.vue */ \"./src/components/shows/Shows.vue\");\n/* harmony import */ var _Subscribe_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscribe.vue */ \"./src/components/pages/Subscribe.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"index.vue\",\n  components: {\n    AllShows: _AllShows_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Shows: _shows_Shows_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Subscribe: _Subscribe_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data: function data() {\n    return {\n      myShows: this.$store.getters.getAllShows,\n      search: '',\n      email: ''\n    };\n  },\n  computed: {\n    searchString: function searchString(str) {\n      str.toUpperCase();\n    }\n  },\n  methods: {}\n});\n\n//# sourceURL=webpack:///./src/components/pages/Index.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})