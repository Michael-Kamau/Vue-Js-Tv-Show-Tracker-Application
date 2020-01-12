webpackHotUpdate("main",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Store({\n  state: {\n    shows: [{\n      'name': \"welcome To Dalas\",\n      \"category\": \"Action\",\n      \"year\": 2019\n    }, {\n      'name': \"Texas Reladed\",\n      \"category\": \"Action\",\n      \"year\": 2019\n    }, {\n      'name': \"Nakuru Mashup\",\n      \"category\": \"Documentary\",\n      \"year\": 2019\n    }, {\n      'name': \"Kimberly Jones\",\n      \"category\": \"Romance\",\n      \"year\": 2019\n    }],\n    showsNew: [],\n    showsAdd: [],\n    cart: [],\n    checkoutStatus: null\n  },\n  getters: {\n    getAllShows: function getAllShows(state) {\n      return state.shows;\n    },\n    getShowsData: function getShowsData(state) {\n      axios.get('http://jsonplaceholder.typicode.com/posts').then(function (response) {\n        state.shows = response.data;\n      });\n    }\n  },\n  actions: {},\n  mutations: {\n    pushShowToCart: function pushShowToCart(state, productId) {\n      state.cart.push({\n        id: productId,\n        quantity: 1\n      });\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ })

})