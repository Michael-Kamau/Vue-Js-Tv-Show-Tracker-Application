webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shows/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shows/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"shows.vue\",\n  props: ['show'],\n  created: function created() {\n    if (this.$route.params.video === undefined) {\n      this.$router.push({\n        name: 'youtube-dash'\n      });\n    }\n\n    this.videoId = this.$route.params.id;\n    this.url = \"https:://www.youtube.com/embed/\".concat(this.videoId);\n    this.video = this.$route.params.video;\n  },\n  data: function data() {\n    return {\n      videoId: null,\n      video: null,\n      url: null\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/components/shows/Show.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"app\" },\n    [\n      _c(\"div\", { staticClass: \"navbar\" }, [\n        _c(\"ul\", { staticClass: \"menu\" }, [\n          _c(\"li\", {}, [\n            _c(\n              \"a\",\n              [\n                _c(\"router-link\", { attrs: { to: \"/\" } }, [_vm._v(\"StarShows\")])\n              ],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"li\", [\n            _c(\n              \"a\",\n              [_c(\"router-link\", { attrs: { to: \"/show\" } }, [_vm._v(\"Show\")])],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _vm.loggedIn\n            ? _c(\"li\", [\n                _c(\n                  \"a\",\n                  [\n                    _c(\"router-link\", { attrs: { to: \"/addShow\" } }, [\n                      _vm._v(\"Add Show\")\n                    ])\n                  ],\n                  1\n                )\n              ])\n            : _vm._e(),\n          _vm._v(\" \"),\n          !_vm.loggedIn\n            ? _c(\"li\", [\n                _c(\n                  \"a\",\n                  [\n                    _c(\"router-link\", { attrs: { to: \"/admin\" } }, [\n                      _vm._v(\"Login\")\n                    ])\n                  ],\n                  1\n                )\n              ])\n            : _vm._e(),\n          _vm._v(\" \"),\n          _vm.loggedIn\n            ? _c(\"li\", [\n                _c(\n                  \"a\",\n                  [\n                    _c(\"router-link\", { attrs: { to: \"/logout\" } }, [\n                      _vm._v(\"Logout\")\n                    ])\n                  ],\n                  1\n                )\n              ])\n            : _vm._e()\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"router-view\")\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shows/Show.vue?vue&type=template&id=836608f4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shows/Show.vue?vue&type=template&id=836608f4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"show\" })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/shows/Show.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/shows/Show.vue":
/*!***************************************!*\
  !*** ./src/components/shows/Show.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Show_vue_vue_type_template_id_836608f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=836608f4&scoped=true& */ \"./src/components/shows/Show.vue?vue&type=template&id=836608f4&scoped=true&\");\n/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ \"./src/components/shows/Show.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Show_vue_vue_type_template_id_836608f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Show_vue_vue_type_template_id_836608f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"836608f4\",\n  null\n  \n)\n\n/* hot reload */\nif (true) {\n  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ \"./node_modules/vue-hot-reload-api/dist/index.js\")\n  api.install(__webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\"))\n  if (api.compatible) {\n    module.hot.accept()\n    if (!api.isRecorded('836608f4')) {\n      api.createRecord('836608f4', component.options)\n    } else {\n      api.reload('836608f4', component.options)\n    }\n    module.hot.accept(/*! ./Show.vue?vue&type=template&id=836608f4&scoped=true& */ \"./src/components/shows/Show.vue?vue&type=template&id=836608f4&scoped=true&\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Show_vue_vue_type_template_id_836608f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=836608f4&scoped=true& */ \"./src/components/shows/Show.vue?vue&type=template&id=836608f4&scoped=true&\");\n(function () {\n      api.rerender('836608f4', {\n        render: _Show_vue_vue_type_template_id_836608f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n        staticRenderFns: _Show_vue_vue_type_template_id_836608f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]\n      })\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))\n  }\n}\ncomponent.options.__file = \"src/components/shows/Show.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/shows/Show.vue?");

/***/ }),

/***/ "./src/components/shows/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/shows/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shows/Show.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/shows/Show.vue?");

/***/ }),

/***/ "./src/components/shows/Show.vue?vue&type=template&id=836608f4&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/shows/Show.vue?vue&type=template&id=836608f4&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_836608f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=836608f4&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shows/Show.vue?vue&type=template&id=836608f4&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_836608f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_836608f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/shows/Show.vue?");

/***/ }),

/***/ "./src/routers/index.js":
/*!******************************!*\
  !*** ./src/routers/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _components_pages_Index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pages/Index.vue */ \"./src/components/pages/Index.vue\");\n/* harmony import */ var _components_pages_ErrorPage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pages/ErrorPage.vue */ \"./src/components/pages/ErrorPage.vue\");\n/* harmony import */ var _components_pages_About_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pages/About.vue */ \"./src/components/pages/About.vue\");\n/* harmony import */ var _components_admin_AddShow_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/admin/AddShow.vue */ \"./src/components/admin/AddShow.vue\");\n/* harmony import */ var _components_admin_AdminLogin_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/admin/AdminLogin.vue */ \"./src/components/admin/AdminLogin.vue\");\n/* harmony import */ var _components_admin_Logout_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/admin/Logout.vue */ \"./src/components/admin/Logout.vue\");\n/* harmony import */ var _components_shows_Show_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shows/Show.vue */ \"./src/components/shows/Show.vue\");\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vue_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  mode: 'hash',\n  routes: [{\n    path: '/',\n    name: 'app',\n    component: _components_pages_Index_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: '/about',\n    name: 'about',\n    component: _components_pages_About_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }, {\n    path: '/show',\n    name: 'show',\n    component: _components_shows_Show_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  }, {\n    path: '/addShow',\n    name: 'addShow',\n    component: _components_admin_AddShow_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }, {\n    path: '/admin',\n    name: 'admin',\n    component: _components_admin_AdminLogin_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }, {\n    path: '/logout',\n    name: 'logout',\n    component: _components_admin_Logout_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }, {\n    path: '*',\n    name: 'error',\n    component: _components_pages_ErrorPage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }]\n}));\n\n//# sourceURL=webpack:///./src/routers/index.js?");

/***/ })

})