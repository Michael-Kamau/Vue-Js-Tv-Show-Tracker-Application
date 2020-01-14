webpackHotUpdate("main",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Store({\n  state: {\n    showsNew: [],\n    show: [],\n    showsAdd: [],\n    cart: [],\n    checkoutStatus: null\n  },\n  getters: {\n    getAllShows: function getAllShows(state) {\n      return state.show;\n    }\n  },\n  actions: {\n    getShowsData: function getShowsData(state) {\n      state.commit('getShowsData');\n    },\n    postShow: function postShow(_ref, payload) {\n      var commit = _ref.commit;\n      console.log(\"reached\");\n      commit('postShow', payload);\n    }\n  },\n  mutations: {\n    pushShowToCart: function pushShowToCart(state, productId) {\n      state.cart.push({\n        id: productId,\n        quantity: 1\n      });\n    },\n    getShowsData: function getShowsData(state) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:5000/shows').then(function (response) {\n        state.show = response.data.shows;\n      })[\"catch\"](function (e) {\n        console.log(e);\n      });\n    },\n    postShow: function postShow(_ref2, payload) {\n      var state = _ref2.state;\n      console.log(payload);\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://localhost:5000/addShow\", payload).then(function (response) {\n        console.log(response.data.shows[0]);\n        state.show = response.data.shows;\n      })[\"catch\"](function (e) {//this.errors.push(e)\n      });\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ })

})