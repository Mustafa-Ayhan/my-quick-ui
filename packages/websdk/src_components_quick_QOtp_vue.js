"use strict";
(this["webpackChunk_stechquick_websdk"] = this["webpackChunk_stechquick_websdk"] || []).push([["src_components_quick_QOtp_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: "QOtp",
    props: {
        length: {
            type: Number,
            default: 4
        },
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "text"
        },
        value: {
            type: Array
        },
        preventPaste: {
            type: Boolean,
            default: true
        },
        width: {
            type: String,
        },
        height: {
            type: String,
        },
        readonly: {
            type: Boolean
        },
        error: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String
        },
        customClass: {
            type: String,
            default: ""
        },
        inputMode: {
            type: String
        }
    },
    data: function () {
        return {
            numInputs: this.length,
            otp: Array(this.length).fill(""),
            valid: true,
            firstClick: false,
        };
    },
    created: function () {
        if (this.value) {
            this.otp = this.value;
        }
        var self = this;
        window.addEventListener("click", function (e) {
            var refOtp = self.$refs["otpContainerRef"];
            if (e.target && !(refOtp === null || refOtp === void 0 ? void 0 : refOtp.contains(e.target))) {
                if (self.firstClick) {
                    self.$emit("blur", self.otp.join(''));
                    self.validateInput();
                }
                self.firstClick = false;
            }
        });
    },
    mounted: function () {
        var _this = this;
        Object.defineProperty(this, "value", {
            get: function () { return _this.otp; },
            set: function (value) { return (_this.otp = value); },
        });
    },
    methods: {
        handleInput: function (index, event) {
            var _this = this;
            if (index < this.numInputs) {
                var currentValue_1 = this.otp[index];
                var focus_1 = function () {
                    var _a;
                    if (currentValue_1.length === 1) {
                        (_a = _this.$refs["input-" + (index + 1)]) === null || _a === void 0 ? void 0 : _a.focus();
                    }
                };
                if (this.type === "number") {
                    if (/^[0-9]$/.test(currentValue_1)) {
                        focus_1();
                    }
                    else {
                        this.otp[index] = "";
                    }
                }
                else {
                    focus_1();
                }
                this.firstClick = true;
                this.$emit("input", this.otp.join(''));
                this.onFinish();
            }
        },
        handleDelete: function (index) {
            if (index > 0 && !this.otp[index]) {
                this.$refs["input-" + (index - 1)].focus();
            }
        },
        handlePaste: function (event) {
            if (this.preventPaste === true) {
                var paste = (event.clipboardData || window.Clipboard).getData("text");
                var pasteLength = paste.length;
                if (pasteLength > this.length) {
                    this.otp = paste.substr(0, this.length).split("");
                }
                else {
                    this.otp = paste.split("");
                }
                this.$refs["input-" + (this.otp.length - 1)].focus();
            }
            else {
                event.preventDefault();
            }
        },
        onFinish: function () {
            if (this.numInputs === this.otp.length && this.otp.every(function (val) { return val !== ""; })) {
                this.$emit("finish", this.otp.join(''));
                this.validateInput();
            }
        },
        handleRightArrowKey: function (index) {
            var _a;
            if (index < this.numInputs - 1) {
                (_a = this.$refs["input-" + (index + 1)]) === null || _a === void 0 ? void 0 : _a.focus();
            }
        },
        handleLeftArrowKey: function (index) {
            var _a;
            if (index > 0) {
                (_a = this.$refs["input-" + (index - 1)]) === null || _a === void 0 ? void 0 : _a.focus();
            }
        },
        validateInput: function () {
            this.valid = this.otp.length === this.numInputs && this.otp.every(function (val) { return val !== ""; });
            var element = document.getElementsByClassName('otp-input');
            if (this.valid === true) {
                Array.from(element).forEach(function (element) {
                    element.classList.remove('error-input');
                });
            }
            else {
                if (this.error === true) {
                    Array.from(element).forEach(function (element) {
                        element.classList.add('error-input');
                    });
                }
            }
        }
    },
}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.otp-wrapper[data-v-9a665fe8] {\n  display: grid;\n  justify-items: start;\n}\n.otp-container[data-v-9a665fe8] {\n  display: flex;\n  gap: 1rem;\n}\n.otp-wrapper .error-label[data-v-9a665fe8] {\n  color: red;\n  font-size: 12px;\n  grid-column: 1;\n  justify-self: start;\n}\n.otp-container .error-input[data-v-9a665fe8] {\n  border-color: red !important;\n}\n.otp-container input[data-v-9a665fe8] {\n  border: 1px solid #0000006b;\n  border-radius: 4px;\n  padding: 0 12px;\n  text-align: center;\n}\n.otp-container input[type=\"number\"][data-v-9a665fe8]::-webkit-inner-spin-button {\n  display: none;\n}\n.otp-container input[data-v-9a665fe8]:disabled {\n  border-color: #00000029;\n  background-color: #00000005;\n}\n", "",{"version":3,"sources":["webpack://./src/components/quick/QOtp.vue"],"names":[],"mappings":";AA0LA;EACA,aAAA;EACA,oBAAA;AACA;AAEA;EACA,aAAA;EACA,SAAA;AACA;AAEA;EACA,UAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;AACA;AAEA;EACA,4BAAA;AACA;AAEA;EACA,2BAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,uBAAA;EACA,2BAAA;AACA","sourcesContent":["<template>\n  <div :class=\"['otp-wrapper ' + customClass]\">\n    <div class=\"otp-container\" ref=\"otpContainerRef\">\n      <input\n        v-for=\"i in numInputs\"\n        :key=\"i\"\n        :type=\"type === 'number' ? 'text' : type\"\n        :maxlength=\"1\"\n        v-model=\"otp[i - 1]\"\n        @input=\"handleInput(i - 1, $event)\"\n        :ref=\"`input-${i - 1}`\"\n        @keydown.delete=\"handleDelete(i - 1)\"\n        :disabled=\"disabled\"\n        @paste=\"handlePaste($event)\"\n        :style=\"{ height: height, width: width }\"\n        :readonly=\"readonly\"\n        @keydown.right=\"handleRightArrowKey(i - 1)\"\n        @keydown.left=\"handleLeftArrowKey(i - 1)\"\n        class=\"otp-input\"\n        autocomplete=\"off\"\n        :inputmode=\"inputMode\"\n      />\n    </div>\n      <label v-if=\"!valid && error\" class=\"error-label\">{{ errorMessage }}</label>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nexport default Vue.extend({\n  name: \"QOtp\",\n  props: {\n    length: {\n      type: Number,\n      default: 4\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    type: {\n      type: String,\n      default: \"text\"\n    },\n    value: {\n      type: Array\n    },\n    preventPaste: {\n      type: Boolean,\n      default: true\n    },\n    width: {\n      type: String,\n    },\n    height: {\n      type: String,\n    },\n    readonly: {\n      type: Boolean\n    },\n    error: {\n      type: Boolean,\n      default: false\n    },\n    errorMessage: {\n      type: String\n    },\n    customClass: {\n      type: String,\n      default: \"\"\n    },\n    inputMode: {\n    type: String\n  }\n  },\n  data() {\n    return {\n      numInputs: this.length,\n      otp: Array(this.length).fill(\"\"),\n      valid: true,\n      firstClick: false,\n    };\n  },\n  created() {\n    if (this.value) {\n      this.otp = this.value;\n    }\n\n    const self = this;\n        window.addEventListener(\"click\", function (e) {\n            let refOtp = <HTMLElement>self.$refs[\"otpContainerRef\"];\n            if (e.target && !refOtp?.contains(e.target as HTMLInputElement)) {\n              if(self.firstClick) {\n                self.$emit(\"blur\", self.otp.join(''));\n                self.validateInput();\n              }\n                self.firstClick = false;\n            }\n    });\n  },\n  mounted() {\n    Object.defineProperty(this, \"value\", {\n      get: () => this.otp,\n      set: (value) => (this.otp = value),\n    });\n  },\n  methods: {\n    handleInput(index, event) {\n      if (index < this.numInputs) {\n        const currentValue = this.otp[index];\n        const focus = () => {\n          if (currentValue.length === 1) {\n            (this.$refs[`input-${index + 1}`] as HTMLElement)?.focus();\n          }\n        };\n\n        if (this.type === \"number\") {\n          if (/^[0-9]$/.test(currentValue)) {\n            focus();\n          } else {\n            this.otp[index] = \"\";\n          }\n        } else {\n          focus();\n        }\n        this.firstClick = true;\n        this.$emit(\"input\", this.otp.join(''))\n        this.onFinish();\n      }\n    },\n    handleDelete(index) {\n      if (index > 0 && !this.otp[index]) {\n        (this.$refs[`input-${index - 1}`] as HTMLElement).focus();\n      }\n    },\n    handlePaste(event) {\n      if (this.preventPaste === true) {\n        const paste = (event.clipboardData || window.Clipboard).getData(\"text\");\n        const pasteLength = paste.length;\n\n        if (pasteLength > this.length) {\n          this.otp = paste.substr(0, this.length).split(\"\");\n        } else {\n          this.otp = paste.split(\"\");\n        }\n        (this.$refs[`input-${this.otp.length - 1}`] as HTMLElement).focus();\n      } else {\n        event.preventDefault();\n      }\n    },\n    onFinish() {\n      if (this.numInputs === this.otp.length && this.otp.every(val => val !== \"\")) {\n        this.$emit(\"finish\", this.otp.join(''));\n        this.validateInput();\n      }\n    }, \n    handleRightArrowKey(index) {\n      if (index < this.numInputs - 1) {\n        (this.$refs[`input-${index + 1}`] as HTMLElement)?.focus();\n      }\n    },\n    handleLeftArrowKey(index) {\n      if (index > 0) {\n        (this.$refs[`input-${index - 1}`] as HTMLElement)?.focus();\n      }\n    },\n    validateInput() {\n      this.valid = this.otp.length === this.numInputs  && this.otp.every(val => val !== \"\");\n      let element = document.getElementsByClassName('otp-input');\n      if(this.valid === true) {\n        Array.from(element).forEach((element) => {\n            element.classList.remove('error-input');\n        });\n      }else {\n        if(this.error === true) {\n          Array.from(element).forEach((element) => {\n            element.classList.add('error-input');\n          });\n        }\n      }\n    }\n  },\n});\n</script>\n\n<style scoped>\n.otp-wrapper {\n  display: grid;\n  justify-items: start;\n}\n\n.otp-container {\n  display: flex;\n  gap: 1rem;\n}\n\n.otp-wrapper .error-label {\n  color: red;\n  font-size: 12px;\n  grid-column: 1;\n  justify-self: start;\n}\n\n.otp-container .error-input {\n  border-color: red !important;\n}\n\n.otp-container input {\n  border: 1px solid #0000006b;\n  border-radius: 4px;\n  padding: 0 12px;\n  text-align: center;\n}\n\n.otp-container input[type=\"number\"]::-webkit-inner-spin-button {\n  display: none;\n}\n\n.otp-container input:disabled {\n  border-color: #00000029;\n  background-color: #00000005;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_style_index_0_id_9a665fe8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"class":"plateauStudioClass"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_style_index_0_id_9a665fe8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_style_index_0_id_9a665fe8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_style_index_0_id_9a665fe8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_style_index_0_id_9a665fe8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/quick/QOtp.vue":
/*!***************************************!*\
  !*** ./src/components/quick/QOtp.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QOtp_vue_vue_type_template_id_9a665fe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QOtp.vue?vue&type=template&id=9a665fe8&scoped=true& */ "./src/components/quick/QOtp.vue?vue&type=template&id=9a665fe8&scoped=true&");
/* harmony import */ var _QOtp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QOtp.vue?vue&type=script&lang=ts& */ "./src/components/quick/QOtp.vue?vue&type=script&lang=ts&");
/* harmony import */ var _QOtp_vue_vue_type_style_index_0_id_9a665fe8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css& */ "./src/components/quick/QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QOtp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QOtp_vue_vue_type_template_id_9a665fe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QOtp_vue_vue_type_template_id_9a665fe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9a665fe8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QOtp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QOtp.vue?vue&type=script&lang=ts&":
/*!****************************************************************!*\
  !*** ./src/components/quick/QOtp.vue?vue&type=script&lang=ts& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QOtp.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./src/components/quick/QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_style_index_0_id_9a665fe8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=style&index=0&id=9a665fe8&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/quick/QOtp.vue?vue&type=template&id=9a665fe8&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/quick/QOtp.vue?vue&type=template&id=9a665fe8&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_template_id_9a665fe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_template_id_9a665fe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QOtp_vue_vue_type_template_id_9a665fe8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QOtp.vue?vue&type=template&id=9a665fe8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=template&id=9a665fe8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=template&id=9a665fe8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QOtp.vue?vue&type=template&id=9a665fe8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: ["otp-wrapper " + _vm.customClass] }, [
    _c(
      "div",
      { ref: "otpContainerRef", staticClass: "otp-container" },
      _vm._l(_vm.numInputs, function (i) {
        return (_vm.type === "number" ? "text" : _vm.type) === "checkbox"
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.otp[i - 1],
                  expression: "otp[i - 1]",
                },
              ],
              key: i,
              ref: "input-" + (i - 1),
              refInFor: true,
              staticClass: "otp-input",
              style: { height: _vm.height, width: _vm.width },
              attrs: {
                maxlength: 1,
                disabled: _vm.disabled,
                readonly: _vm.readonly,
                autocomplete: "off",
                inputmode: _vm.inputMode,
                type: "checkbox",
              },
              domProps: {
                checked: Array.isArray(_vm.otp[i - 1])
                  ? _vm._i(_vm.otp[i - 1], null) > -1
                  : _vm.otp[i - 1],
              },
              on: {
                input: function ($event) {
                  return _vm.handleInput(i - 1, $event)
                },
                keydown: [
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                        "Backspace",
                        "Delete",
                        "Del",
                      ])
                    ) {
                      return null
                    }
                    return _vm.handleDelete(i - 1)
                  },
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "right", 39, $event.key, [
                        "Right",
                        "ArrowRight",
                      ])
                    ) {
                      return null
                    }
                    if ("button" in $event && $event.button !== 2) {
                      return null
                    }
                    return _vm.handleRightArrowKey(i - 1)
                  },
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "left", 37, $event.key, [
                        "Left",
                        "ArrowLeft",
                      ])
                    ) {
                      return null
                    }
                    if ("button" in $event && $event.button !== 0) {
                      return null
                    }
                    return _vm.handleLeftArrowKey(i - 1)
                  },
                ],
                paste: function ($event) {
                  return _vm.handlePaste($event)
                },
                change: function ($event) {
                  var $$a = _vm.otp[i - 1],
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && _vm.$set(_vm.otp, i - 1, $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        _vm.$set(
                          _vm.otp,
                          i - 1,
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        )
                    }
                  } else {
                    _vm.$set(_vm.otp, i - 1, $$c)
                  }
                },
              },
            })
          : (_vm.type === "number" ? "text" : _vm.type) === "radio"
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.otp[i - 1],
                  expression: "otp[i - 1]",
                },
              ],
              key: i,
              ref: "input-" + (i - 1),
              staticClass: "otp-input",
              style: { height: _vm.height, width: _vm.width },
              attrs: {
                maxlength: 1,
                disabled: _vm.disabled,
                readonly: _vm.readonly,
                autocomplete: "off",
                inputmode: _vm.inputMode,
                type: "radio",
              },
              domProps: { checked: _vm._q(_vm.otp[i - 1], null) },
              on: {
                input: function ($event) {
                  return _vm.handleInput(i - 1, $event)
                },
                keydown: [
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                        "Backspace",
                        "Delete",
                        "Del",
                      ])
                    ) {
                      return null
                    }
                    return _vm.handleDelete(i - 1)
                  },
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "right", 39, $event.key, [
                        "Right",
                        "ArrowRight",
                      ])
                    ) {
                      return null
                    }
                    if ("button" in $event && $event.button !== 2) {
                      return null
                    }
                    return _vm.handleRightArrowKey(i - 1)
                  },
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "left", 37, $event.key, [
                        "Left",
                        "ArrowLeft",
                      ])
                    ) {
                      return null
                    }
                    if ("button" in $event && $event.button !== 0) {
                      return null
                    }
                    return _vm.handleLeftArrowKey(i - 1)
                  },
                ],
                paste: function ($event) {
                  return _vm.handlePaste($event)
                },
                change: function ($event) {
                  return _vm.$set(_vm.otp, i - 1, null)
                },
              },
            })
          : _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.otp[i - 1],
                  expression: "otp[i - 1]",
                },
              ],
              key: i,
              ref: "input-" + (i - 1),
              staticClass: "otp-input",
              style: { height: _vm.height, width: _vm.width },
              attrs: {
                maxlength: 1,
                disabled: _vm.disabled,
                readonly: _vm.readonly,
                autocomplete: "off",
                inputmode: _vm.inputMode,
                type: _vm.type === "number" ? "text" : _vm.type,
              },
              domProps: { value: _vm.otp[i - 1] },
              on: {
                input: [
                  function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.otp, i - 1, $event.target.value)
                  },
                  function ($event) {
                    return _vm.handleInput(i - 1, $event)
                  },
                ],
                keydown: [
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                        "Backspace",
                        "Delete",
                        "Del",
                      ])
                    ) {
                      return null
                    }
                    return _vm.handleDelete(i - 1)
                  },
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "right", 39, $event.key, [
                        "Right",
                        "ArrowRight",
                      ])
                    ) {
                      return null
                    }
                    if ("button" in $event && $event.button !== 2) {
                      return null
                    }
                    return _vm.handleRightArrowKey(i - 1)
                  },
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "left", 37, $event.key, [
                        "Left",
                        "ArrowLeft",
                      ])
                    ) {
                      return null
                    }
                    if ("button" in $event && $event.button !== 0) {
                      return null
                    }
                    return _vm.handleLeftArrowKey(i - 1)
                  },
                ],
                paste: function ($event) {
                  return _vm.handlePaste($event)
                },
              },
            })
      }),
      0
    ),
    _vm._v(" "),
    !_vm.valid && _vm.error
      ? _c("label", { staticClass: "error-label" }, [
          _vm._v(_vm._s(_vm.errorMessage)),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QOtp_vue.js.map?ver=3.1.2-4