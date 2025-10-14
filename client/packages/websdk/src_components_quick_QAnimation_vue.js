"use strict";
(this["webpackChunk_stechquick_websdk"] = this["webpackChunk_stechquick_websdk"] || []).push([["src_components_quick_QAnimation_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QAnimation.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QAnimation.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lottie-web */ "../../node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_shrimp_helpers_windowHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/shrimp/helpers/windowHelper */ "../../common/shrimp/helpers/windowHelper.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
    name: "QAnimation",
    data: function () {
        return {
            lottieInstance: (lottie_web__WEBPACK_IMPORTED_MODULE_0___default()),
            lottieComp: null,
        };
    },
    props: {
        _renderingProps: {
            type: Object,
        },
        src: {
            type: [String, Object],
        },
        loop: {
            type: Boolean,
            default: true
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        speed: {
            type: Number,
            default: 1
        },
        direction: {
            type: String,
            default: "right"
        },
        position: {
            type: String,
        },
        zIndex: {
            type: String,
        },
        top: {
            type: String,
        },
        bottom: {
            type: String
        },
        left: {
            type: String,
        },
        right: {
            type: String,
        }
    },
    computed: {
        showTemplate: function () {
            return this.src ? false : !!this._renderingProps.isEditMode;
        },
        lottieStyle: function () {
            return {
                position: this.position,
                top: this.top,
                bottom: this.bottom,
                left: this.left,
                right: this.right,
                zIndex: this.zIndex
            };
        },
    },
    watch: {
        src: function (newValue) {
            var _a;
            console.log(newValue);
            (_a = this.lottieComp) === null || _a === void 0 ? void 0 : _a.destroy();
            this.loadAnimation(newValue);
        },
        speed: function (newSpeedValue) {
            this.setSpeedMethod(newSpeedValue);
        },
        direction: function (newDirectionValue) {
            this.setDirectionMethod(newDirectionValue);
        },
        loop: function (newLoopValue) {
            this.setloopMethod(newLoopValue);
        },
    },
    mounted: function () {
        this.loadAnimation(this.src);
        this.setSpeedMethod(this.speed);
        this.setDirectionMethod(this.direction);
    },
    methods: {
        loadAnimation: function (src) {
            var _a;
            if (typeof src === "string") {
                var url = src.startsWith("http") ? new URL(src).href : (new URL(src, (_a = _common_shrimp_helpers_windowHelper__WEBPACK_IMPORTED_MODULE_1__.WindowHelper.Instance.Window.location) === null || _a === void 0 ? void 0 : _a.href)).href;
                this.lottieComp = this.lottieInstance.loadAnimation({
                    container: this.$refs.animationContainer,
                    renderer: "svg",
                    loop: this.loop,
                    autoplay: this.autoplay,
                    path: url,
                });
                return;
            }
            this.lottieComp = this.lottieInstance.loadAnimation({
                container: this.$refs.animationContainer,
                renderer: "svg",
                loop: this.loop,
                autoplay: this.autoplay,
                animationData: src,
            });
        },
        play: function () {
            this.lottieComp.play();
        },
        stop: function () {
            this.lottieComp.stop();
        },
        pause: function () {
            this.lottieComp.pause();
        },
        setSpeedMethod: function (setSpeedData) {
            if (typeof (setSpeedData) === "number" && setSpeedData !== undefined && setSpeedData !== null) {
                this.lottieComp.setSpeed(setSpeedData);
            }
        },
        setDirectionMethod: function (direction) {
            direction === "left" ? this.lottieComp.setDirection(-1) : this.lottieComp.setDirection(1);
        },
        setloopMethod: function (loopData) {
            if (typeof (loopData) === "boolean" && loopData !== undefined && loopData !== null) {
                this.lottieComp.setLoop(loopData);
            }
        },
        hibernate: function () {
            this.lottieComp.pause();
        },
        resurrect: function () {
            this.lottieComp.play();
        },
    },
    destroyed: function () {
        var _a;
        (_a = this.lottieComp) === null || _a === void 0 ? void 0 : _a.destroy();
    },
}));


/***/ }),

/***/ "./src/components/quick/QAnimation.vue":
/*!*********************************************!*\
  !*** ./src/components/quick/QAnimation.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QAnimation_vue_vue_type_template_id_663aa5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QAnimation.vue?vue&type=template&id=663aa5b6&scoped=true& */ "./src/components/quick/QAnimation.vue?vue&type=template&id=663aa5b6&scoped=true&");
/* harmony import */ var _QAnimation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QAnimation.vue?vue&type=script&lang=ts& */ "./src/components/quick/QAnimation.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QAnimation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QAnimation_vue_vue_type_template_id_663aa5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QAnimation_vue_vue_type_template_id_663aa5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "663aa5b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QAnimation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QAnimation.vue?vue&type=script&lang=ts&":
/*!**********************************************************************!*\
  !*** ./src/components/quick/QAnimation.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QAnimation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QAnimation.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QAnimation.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QAnimation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QAnimation.vue?vue&type=template&id=663aa5b6&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/components/quick/QAnimation.vue?vue&type=template&id=663aa5b6&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QAnimation_vue_vue_type_template_id_663aa5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QAnimation_vue_vue_type_template_id_663aa5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QAnimation_vue_vue_type_template_id_663aa5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QAnimation.vue?vue&type=template&id=663aa5b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QAnimation.vue?vue&type=template&id=663aa5b6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QAnimation.vue?vue&type=template&id=663aa5b6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QAnimation.vue?vue&type=template&id=663aa5b6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "animationContainer", style: _vm.lottieStyle }, [
    _vm.showTemplate
      ? _c("div", { staticStyle: { height: "100%", width: "100%" } }, [
          _vm._m(0),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          height: "100%",
          width: "100%",
          "align-items": "center",
        },
      },
      [
        _c("div", { staticStyle: { "margin-right": "10px" } }, [
          _c("i", {
            staticClass: "mdi mdi-window-maximize",
            staticStyle: { "font-size": "48px", color: "#D5D5D5" },
          }),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              color: "#BCBCBC",
              "font-size": "16px",
              "text-align": "center",
              padding: "8px",
            },
          },
          [_vm._v("Configure the src property to display an animation.")]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QAnimation_vue.js.map?ver=3.1.2-4