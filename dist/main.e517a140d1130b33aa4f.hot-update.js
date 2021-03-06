webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/AllShows.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/AllShows.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shows_Shows_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shows/Shows.vue */ \"./src/components/shows/Shows.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AllShows.vue\",\n  components: [_shows_Shows_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\n  mounted: function mounted() {\n    this.$store.dispatch();\n  }\n});\n\n//# sourceURL=webpack:///./src/components/pages/AllShows.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Store({\n  state: {\n    showsNew: [],\n    show: [],\n    showsAdd: [],\n    cart: [],\n    checkoutStatus: null\n  },\n  getters: {\n    getAllShows: function getAllShows(state) {\n      return state.show;\n    }\n  },\n  actions: {\n    getShowsData: function getShowsData(state) {\n      console.log(\"reached\");\n      state.commit('getShowsData');\n    }\n  },\n  mutations: {\n    pushShowToCart: function pushShowToCart(state, productId) {\n      state.cart.push({\n        id: productId,\n        quantity: 1\n      });\n    },\n    getShowsData: function getShowsData(state) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:5000/shows').then(function (response) {\n        state.show = response.data;\n      })[\"catch\"](function (e) {\n        console.log(e);\n      });\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ })

})