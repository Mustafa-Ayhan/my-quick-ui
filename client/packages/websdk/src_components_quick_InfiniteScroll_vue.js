"use strict";
(this["webpackChunk_stechquick_websdk"] = this["webpackChunk_stechquick_websdk"] || []).push([["src_components_quick_InfiniteScroll_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: "InfiniteScroll",
    props: {
        componentCount: {
            type: Number,
            required: true
        },
        items: {
            type: Array,
            required: true,
        },
        _renderingProps: {
            type: Object,
        }
    },
    data: function () {
        return {
            visibleComponents: [],
            currentIndex: 0,
            observer: null,
            localItems: [],
            evaluatorGlobal: {},
            historyManager: null,
            lastHistory: null
        };
    },
    watch: {
        componentCount: {
            immediate: true,
            handler: function () {
                this.updateVisibleComponents();
            }
        },
        items: {
            immediate: true,
            handler: function (newItems) {
                newItems && Array.isArray(newItems) && this.setItems(newItems);
            }
        },
    },
    mounted: function () {
        this.initObserver();
        this.localItems = this.items;
    },
    methods: {
        initObserver: function () {
            var _this = this;
            this.observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        _this.emitIntersection();
                    }
                });
            });
            if (this.$refs.loadMoreTrigger) {
                this.observer.observe(this.$refs.loadMoreTrigger);
            }
        },
        updateVisibleComponents: function () {
            this.visibleComponents = this.localItems.slice(0, this.currentIndex) || [];
        },
        emitIntersection: function () {
            this.$emit("onIntersection", this.currentIndex);
        },
        setItems: function (items) {
            this.localItems = items;
            this.currentIndex = 0;
            this.visibleComponents = [];
            this.loadNextComponents();
        },
        loadNextComponents: function () {
            var start = this.currentIndex;
            var end = start + this.componentCount;
            this.visibleComponents = __spreadArray(__spreadArray([], __read(this.visibleComponents), false), __read(this.localItems.slice(start, end)), false);
            this.currentIndex += this.componentCount;
        },
        addItems: function (items) {
            this.localItems = __spreadArray(__spreadArray([], __read(this.localItems), false), __read(items), false);
            this.loadNextComponents();
        },
        // processItem(item: unknown, index: number) {
        //   const compColl = this._renderingProps.compCollCb();
        //   if (!compColl.children) {
        //     return;
        //   }
        //   const self = this;
        //   const childId = compColl.children?.['default']?.[0].compId + '_' + index
        //   if (this._renderingProps.lastHistoryItem?.getCompCollectionById(childId)) {
        //     return;
        //   }
        //   const createdComps = this._renderingProps.createDynamicComp?.({
        //     context: this._renderingProps.context(),
        //     templateCompQID: compColl.children?.['default']?.[0].compId,
        //     newCompID: index + '',
        //     renderedByOutside: true,
        //     historyItem: this._renderingProps.lastHistoryItem!
        //   });
        //   createdComps?.newComponent.SetComponentCreatedFields({
        //     createdComponent: {
        //       compGroupType: compColl.compGroupType, instance: self.$children?.[index] as any, el: self.$children?.[index]?.$el as IDomElement
        //     }
        //   });
        //   if (!createdComps?.newComponent.children) {
        //     return;
        //   }
        //   Object.keys(createdComps?.newComponent.children).forEach((child: any) => {
        //     const childComps = createdComps?.newComponent.children![child];
        //     childComps.forEach((childComp: any) => {
        //       childComp.SetComponentCreatedFields({
        //         createdComponent: {
        //           compGroupType: compColl.compGroupType, instance: self.$children?.[index] as any, el: self.$children?.[index]?.$el as IDomElement
        //         }
        //       });
        //     });
        //   });
        // }
    },
    beforeDestroy: function () {
        if (this.observer && this.$refs.loadMoreTrigger) {
            this.observer.unobserve(this.$refs.loadMoreTrigger);
        }
    }
}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.load-more-trigger[data-v-1297ad13] {\n  height: 1px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/quick/InfiniteScroll.vue"],"names":[],"mappings":";AA6IA;EACA,WAAA;AACA","sourcesContent":["<template>\n  <div style=\"overflow-y: auto;\">\n    <div v-for=\"(item, index) in visibleComponents\" :key=\"index\">\n      <slot :data=\"item\" :newCompID=\"index\"></slot>\n    </div>\n    <div ref=\"loadMoreTrigger\" class=\"load-more-trigger\"></div>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { IRenderingProps } from \"../../../../../common/shrimp/interfaces/RenderingInterfaces/IRenderer\";\nimport { IGlobalsQS } from \"../../../../../common/shrimp/interfaces/Scripting/IGlobals\";\nexport default Vue.extend({\n  name: \"InfiniteScroll\",\n  props: {\n    componentCount: {\n      type: Number,\n      required: true\n    },\n    items: {\n      type: Array as () => unknown[],\n      required: true,\n    },\n    _renderingProps: {\n      type: Object as () => IRenderingProps,\n    }\n  },\n  data() {\n    return {\n      visibleComponents: [] as unknown[],\n      currentIndex: 0,\n      observer: null as IntersectionObserver | null,\n      localItems: [] as unknown[],\n      evaluatorGlobal: {} as IGlobalsQS,\n      historyManager: null as any,\n      lastHistory: null as any\n    };\n  },\n  watch: {\n    componentCount: {\n      immediate: true,\n      handler() {\n        this.updateVisibleComponents();\n      }\n    },\n    items: {\n      immediate: true,\n      handler(newItems) {\n        newItems && Array.isArray(newItems) && this.setItems(newItems);\n      }\n    },\n  },\n  mounted() {\n    this.initObserver();\n    this.localItems = this.items;\n  },\n  methods: {\n    initObserver() {\n      this.observer = new IntersectionObserver(entries => {\n        entries.forEach(entry => {\n          if (entry.isIntersecting) {\n            this.emitIntersection();\n          }\n        });\n      });\n      if (this.$refs.loadMoreTrigger) {\n        this.observer.observe(this.$refs.loadMoreTrigger as Element);\n      }\n    },\n    updateVisibleComponents() {\n      this.visibleComponents = this.localItems.slice(0, this.currentIndex) || [];\n    },\n    emitIntersection() {\n      this.$emit(\"onIntersection\", this.currentIndex);\n    },\n    setItems(items) {\n      this.localItems = items;\n      this.currentIndex = 0;\n      this.visibleComponents = [];\n      this.loadNextComponents();\n    },\n    loadNextComponents() {\n      const start = this.currentIndex;\n      const end = start + this.componentCount;\n      this.visibleComponents = [\n        ...this.visibleComponents,\n        ...this.localItems.slice(start, end)\n      ];\n      this.currentIndex += this.componentCount;\n    },\n    addItems(items: unknown[]) {\n      this.localItems = [...this.localItems, ...items];\n      this.loadNextComponents();\n    },\n    // processItem(item: unknown, index: number) {\n    //   const compColl = this._renderingProps.compCollCb();\n    //   if (!compColl.children) {\n    //     return;\n    //   }\n    //   const self = this;\n    //   const childId = compColl.children?.['default']?.[0].compId + '_' + index\n    //   if (this._renderingProps.lastHistoryItem?.getCompCollectionById(childId)) {\n    //     return;\n    //   }\n    //   const createdComps = this._renderingProps.createDynamicComp?.({\n    //     context: this._renderingProps.context(),\n    //     templateCompQID: compColl.children?.['default']?.[0].compId,\n    //     newCompID: index + '',\n    //     renderedByOutside: true,\n    //     historyItem: this._renderingProps.lastHistoryItem!\n    //   });\n    //   createdComps?.newComponent.SetComponentCreatedFields({\n    //     createdComponent: {\n    //       compGroupType: compColl.compGroupType, instance: self.$children?.[index] as any, el: self.$children?.[index]?.$el as IDomElement\n    //     }\n    //   });\n    //   if (!createdComps?.newComponent.children) {\n    //     return;\n    //   }\n    //   Object.keys(createdComps?.newComponent.children).forEach((child: any) => {\n    //     const childComps = createdComps?.newComponent.children![child];\n    //     childComps.forEach((childComp: any) => {\n    //       childComp.SetComponentCreatedFields({\n    //         createdComponent: {\n    //           compGroupType: compColl.compGroupType, instance: self.$children?.[index] as any, el: self.$children?.[index]?.$el as IDomElement\n    //         }\n    //       });\n    //     });\n    //   });\n    // }\n  },\n  beforeDestroy() {\n    if (this.observer && this.$refs.loadMoreTrigger) {\n      this.observer.unobserve(this.$refs.loadMoreTrigger as Element);\n    }\n  }\n});\n</script>\n\n<style scoped>\n.load-more-trigger {\n  height: 1px;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_style_index_0_id_1297ad13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"class":"plateauStudioClass"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_style_index_0_id_1297ad13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_style_index_0_id_1297ad13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_style_index_0_id_1297ad13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_style_index_0_id_1297ad13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/quick/InfiniteScroll.vue":
/*!*************************************************!*\
  !*** ./src/components/quick/InfiniteScroll.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfiniteScroll_vue_vue_type_template_id_1297ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfiniteScroll.vue?vue&type=template&id=1297ad13&scoped=true& */ "./src/components/quick/InfiniteScroll.vue?vue&type=template&id=1297ad13&scoped=true&");
/* harmony import */ var _InfiniteScroll_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfiniteScroll.vue?vue&type=script&lang=ts& */ "./src/components/quick/InfiniteScroll.vue?vue&type=script&lang=ts&");
/* harmony import */ var _InfiniteScroll_vue_vue_type_style_index_0_id_1297ad13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css& */ "./src/components/quick/InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InfiniteScroll_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfiniteScroll_vue_vue_type_template_id_1297ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _InfiniteScroll_vue_vue_type_template_id_1297ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1297ad13",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/InfiniteScroll.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/InfiniteScroll.vue?vue&type=script&lang=ts&":
/*!**************************************************************************!*\
  !*** ./src/components/quick/InfiniteScroll.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfiniteScroll.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./src/components/quick/InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_style_index_0_id_1297ad13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=style&index=0&id=1297ad13&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/quick/InfiniteScroll.vue?vue&type=template&id=1297ad13&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/components/quick/InfiniteScroll.vue?vue&type=template&id=1297ad13&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_template_id_1297ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_template_id_1297ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_template_id_1297ad13_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfiniteScroll.vue?vue&type=template&id=1297ad13&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=template&id=1297ad13&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=template&id=1297ad13&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/InfiniteScroll.vue?vue&type=template&id=1297ad13&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticStyle: { "overflow-y": "auto" } },
    [
      _vm._l(_vm.visibleComponents, function (item, index) {
        return _c(
          "div",
          { key: index },
          [_vm._t("default", null, { data: item, newCompID: index })],
          2
        )
      }),
      _vm._v(" "),
      _c("div", { ref: "loadMoreTrigger", staticClass: "load-more-trigger" }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_InfiniteScroll_vue.js.map?ver=3.1.2-4