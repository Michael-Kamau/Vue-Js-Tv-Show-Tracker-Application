webpackHotUpdate("main",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/pages/Index.vue?vue&type=template&id=160ae547&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pages/Index.vue?vue&type=template&id=160ae547&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"index grid-x\" }, [\n    _c(\"div\", { staticClass: \"header grid-x text-center\" }, [\n      _c(\"h2\", { staticClass: \"medium-12  cell \" }, [\n        _vm._v(\"Welcome to index page\")\n      ]),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"medium-8 cell search\" }, [\n        _c(\"label\", [\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.search,\n                expression: \"search\"\n              }\n            ],\n            attrs: {\n              type: \"text\",\n              placeholder: \"Search Movie by Name, Genre, Cast or Year\"\n            },\n            domProps: { value: _vm.search },\n            on: {\n              keyup: function($event) {},\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.search = $event.target.value\n              }\n            }\n          })\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"movies medium-12 small-12 large-12 grid-x\" },\n      _vm._l(this.$store.getters.getAllShows, function(show) {\n        return show.name.toUpperCase().includes(_vm.search.toUpperCase()) ||\n          show.year.toString().includes(_vm.search.toUpperCase()) ||\n          show.genre.toUpperCase().includes(_vm.search.toUpperCase())\n          ? _c(\"div\", { staticClass: \"medium-4 small-12 cell\" }, [\n              _c(\n                \"div\",\n                [_c(\"shows\", { attrs: { show: show } }, [_vm._v(\"Show\")])],\n                1\n              )\n            ])\n          : _vm._e()\n      }),\n      0\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"subscribe medium-12 small-12 large-12 grid-x text-center\"\n      },\n      [\n        _c(\"div\", { staticClass: \"medium-8 cell search\" }, [\n          _c(\"label\", [\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.email,\n                  expression: \"email\"\n                }\n              ],\n              attrs: {\n                type: \"text\",\n                placeholder: \"Search Movie by Name, Genre, Cast or Year\"\n              },\n              domProps: { value: _vm.email },\n              on: {\n                keyup: function($event) {},\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.email = $event.target.value\n                }\n              }\n            })\n          ])\n        ])\n      ]\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"h5\", { staticClass: \"medium-12 \" }, [\n      _vm._v(\n        \"Subscribe to get update on new movies as they are uploaded by clicking \"\n      ),\n      _c(\"a\", { attrs: { href: \"/subscribe\" } }, [_vm._v(\"Here\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/pages/Index.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})