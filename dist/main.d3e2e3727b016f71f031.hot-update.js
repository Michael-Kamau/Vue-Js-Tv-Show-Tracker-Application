webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shows/Shows.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shows/Shows.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Shows\",\n  props: ['show'],\n  methods: {\n    deleteShow: function deleteShow() {\n      this.$store.dispatch('deleteShow', this.show);\n    }\n  },\n  computed: {\n    cssVars: function cssVars() {\n      return {\n        'background-image': this.show.image\n      };\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/shows/Shows.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})