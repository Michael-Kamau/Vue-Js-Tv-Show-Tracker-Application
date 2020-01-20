webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/admin/AddShow.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/admin/AddShow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _subscribers_Subscribers_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subscribers/Subscribers.vue */ \"./src/components/subscribers/Subscribers.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AddShow.vue\",\n  components: {\n    Subscribers: _subscribers_Subscribers_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      form: {},\n      error: false\n    };\n  },\n  methods: {\n    postShow: function postShow() {\n      this.error = false;\n\n      if (this.form.name && this.form.cast && this.form.genre && this.form.rating && this.form.year && this.form.image && this.form.video) {\n        this.$store.dispatch('postShow', this.form);\n        this.form = {};\n      } else {\n        this.error = true;\n      }\n    }\n  },\n  created: function created() {\n    this.$store.dispatch('getAllUsers');\n  }\n});\n\n//# sourceURL=webpack:///./src/components/admin/AddShow.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})