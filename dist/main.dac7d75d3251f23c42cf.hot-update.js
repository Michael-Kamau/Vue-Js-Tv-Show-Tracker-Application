webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shows/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shows/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"shows.vue\",\n  props: ['show'],\n  created: function created() {\n    if (this.$route.params.video === undefined) {\n      this.$router.push({\n        name: 'show'\n      });\n    }\n\n    this.videoId = this.$route.params.id;\n    this.url = \"https:://www.youtube.com/embed/\".concat(this.videoId);\n    this.video = this.$route.params.video;\n  },\n  data: function data() {\n    return {\n      videoId: null,\n      video: null,\n      url: null\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/components/shows/Show.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})