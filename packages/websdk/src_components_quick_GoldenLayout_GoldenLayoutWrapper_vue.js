"use strict";
(this["webpackChunk_stechquick_websdk"] = this["webpackChunk_stechquick_websdk"] || []).push([["src_components_quick_GoldenLayout_GoldenLayoutWrapper_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! golden-layout */ "../../node_modules/golden-layout/dist/goldenlayout.js");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(golden_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GoldenLayoutHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoldenLayoutHelper */ "./src/components/quick/GoldenLayout/GoldenLayoutHelper.ts");
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
    name: "GoldenLayout",
    data: function () {
        return {
            config: {
                settings: { showPopoutIcon: false, selectionEnabled: true },
                dimensions: {},
                content: [
                    {
                        type: "stack",
                        id: "default",
                        content: [
                            {
                                type: "component",
                                componentName: "component",
                                title: "default",
                                componentState: {
                                    id: "default",
                                    text: "default",
                                    class: "default" + (Math.random() * 100000).toFixed(0),
                                },
                            },
                        ],
                    },
                ],
            },
            getGoldenLayout: null,
            getContentItems: null,
            getComponentInCreation: null,
            componentCb: null,
            StateChangedForDesign: false,
            closedPanes: [],
            containerWidth: 0,
            containerHeight: 0,
            childWindows: []
        };
    },
    props: {
        _renderingProps: {
            default: {
                context: undefined,
                isEditMode: undefined,
            },
        },
        width: {
            type: String,
            default: "1200px",
        },
        height: {
            type: String,
            default: "700px",
        },
        glConfig: {
            type: Object,
            default: null,
        },
        childNames: {
            type: Array,
            default: ["default"],
        },
        dimensions: {
            type: Object
        }
    },
    methods: {
        getClosedPanes: function () {
            return this.closedPanes;
        },
        getConfig: function () {
            return this.getGoldenLayout().toConfig();
        },
        setConfig: function (val) {
            var _this = this;
            var _a;
            this.getGoldenLayout().config = val;
            this.getGoldenLayout().root.contentItems.forEach(function (item) {
                item.remove();
            });
            (_a = val.content) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                _this.getGoldenLayout().root.addChild(item);
            });
            this.StateChangedForDesign = true;
        },
        findContentItem: function (paneName) {
            var self = this;
            var contentItems = self.getContentItems();
            var contentItem = contentItems.find(function (item) { return item.config.componentState.id == paneName; });
            return contentItem;
        },
        changeTitle: function (childName, newTitle) {
            var self = this;
            var contentItem = self.findContentItem(childName);
            contentItem.setTitle(newTitle);
        },
        removePane: function (paneName) {
            var self = this;
            var pane = self.findContentItem(paneName);
            var childArray = [];
            childArray.push(paneName);
            self.removeItem(childArray);
            pane.remove();
            self.$emit("paneClosed", paneName);
        },
        //do not open or inform below methods to quick users.
        addItem: function (_a) {
            var childName = _a.childName, config = _a.config;
            var newItem = {
                type: "component",
                componentName: "component",
                title: childName,
                componentState: {
                    id: childName,
                    text: childName,
                    class: childName + (Math.random() * 100000).toFixed(0),
                },
            };
            if (config) {
                newItem = config;
            }
            var gl = this.getGoldenLayout();
            gl.root.contentItems[0].addChild(newItem);
            this.childNames.push(childName);
            var glConfig = gl.toConfig();
            this.$emit("paneCreated", childName);
            return glConfig;
        },
        goldenLayoutInit: function (stateChangedForDesign) {
            this.StateChangedForDesign = stateChangedForDesign;
        },
        removeItem: function (deletedChildNames) {
            var self = this;
            var dory = this._renderingProps.context().GetItemSingle("Dory");
            var historyItem = this._renderingProps.context().GetItemSingle("HistoryManager").currentLevel().last();
            var pjson = historyItem.qjson.pJson.find(function (i) { return i.T == "GoldenLayout"; });
            deletedChildNames.forEach(function (childName) {
                var _a, _b;
                if (self._renderingProps.isEditMode) {
                    self.childNames.splice(self.childNames.indexOf(childName), 1);
                }
                if (pjson.C[childName] && !self._renderingProps.isEditMode) {
                    self.closedPanes.push(childName);
                }
                (_b = (_a = self.componentCb().children) === null || _a === void 0 ? void 0 : _a[childName]) === null || _b === void 0 ? void 0 : _b.map(function (child) { return child.compId; }).forEach(function (childNameToDelete) { return dory.DestroyComponentCollectionByID(childNameToDelete); });
                // remove after 02.07.2022
                // let contentItems = self.getContentItems();
                // let contentItemIndex = contentItems.findIndex((item) => item.config.componentState.id == childName);
                // contentItems.splice(contentItemIndex, 1);
                self.$emit("paneClosed", childName);
            });
            self.$emit("GL_stateChanged", self.getGoldenLayout().toConfig(), self.childNames);
        },
        customChildAppender: function (_a) {
            var childName = _a.childName, createdComps = _a.createdComps;
            var index = this.closedPanes.findIndex(function (item) { return item == childName; });
            if (index > -1) {
                this.closedPanes.splice(index, 1);
            }
            this.addItem({ childName: childName });
        },
        appendDomElements: function (container, componentConfig) {
            var _a, _b;
            if (componentConfig.fromWindow) {
                container.getElement()[0].innerHTML = '<div class="' + componentConfig.class + '"></div>';
                componentConfig.fromWindow = false;
            }
            else {
                if (!this.componentCb) {
                    var componentCb_1 = this.getComponentInCreation(); //renderingProps da  __domEl var mı bak.
                    this.componentCb = function () {
                        return componentCb_1;
                    };
                }
                var domElements = (_b = (_a = this.componentCb().children) === null || _a === void 0 ? void 0 : _a[componentConfig.id]) === null || _b === void 0 ? void 0 : _b.map(function (i) { return i.domElement; });
                if (!domElements) {
                    return;
                }
                container.getElement()[0].innerHTML = '<div class="' + componentConfig.class + '"><div class="innerWindow"></div>';
                domElements.forEach(function (domElement) {
                    if (domElement) {
                        container.getElement()[0].getElementsByClassName("innerWindow")[0].append(domElement);
                    }
                });
            }
        },
        onStackClose: function (stack) {
            var self = this;
            stack.header.controlsContainer.find(".lm_close").off("click").click(function () {
                var childNames = [];
                for (var index = 0; index < stack.config.content.length; index++) {
                    var element = stack.config.content[index];
                    var childName = element.componentState.id;
                    childNames.push(childName);
                }
                self.removeItem(childNames); // to delete child jsons in goldenLayout before stack remove
                self.StateChangedForDesign = self._renderingProps.isEditMode ? false : true; // to save new goldenLayout config. after stack remove gl will emit layoutChanged event and GoldenLayoutTracker will be triggered.
                stack.remove();
            });
        },
        resizeObserver: function () {
            var self = this;
            var resizeObserver = new ResizeObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (self.containerWidth != entry.target.clientWidth || self.containerHeight != entry.target.clientHeight) {
                        self.containerWidth = entry.target.clientWidth;
                        self.containerHeight = entry.target.clientHeight;
                        self.getGoldenLayout().updateSize();
                    }
                });
            });
            resizeObserver.observe(this.$refs["layoutContainer"]);
        },
        // remove after 02.07.2022
        // addContentItem(contentItem) {
        //   let contentItems = this.getContentItems();
        //   let checkExistencialCrisis = contentItems.find(i => i.config.componentState.id == contentItem.config.componentState.id);
        //   if (!checkExistencialCrisis) {
        //     contentItems.push(contentItem);
        //   }
        // },
        closeChildWindows: function () {
            var self = this;
            if (self.childWindows) {
                self.childWindows.forEach(function (glWindow) {
                    if (!glWindow.childWindow.closed) {
                        glWindow.childWindow.close();
                    }
                });
            }
        },
    },
    mounted: function () {
        var e_1, _a;
        var self = this;
        // ensure that the following are only done in the mounted lifecycle.
        self.closedPanes = [];
        var parentContainer = this.$refs["layoutContainer"];
        window.parentContainer = parentContainer;
        if (!parentContainer) {
            return;
        }
        // create a new GL instance.
        if (this.glConfig) {
            this.config = this.glConfig;
        }
        this.config.dimensions = this.dimensions || this.config.dimensions;
        var context = this._renderingProps.context();
        var rc = context.GetItemSingle("RenderingContext");
        this.getComponentInCreation = function () { return rc.componentInCreation; };
        var layout = new (golden_layout__WEBPACK_IMPORTED_MODULE_0___default())(this.config, parentContainer);
        this.resizeObserver();
        layout.registerComponent("component", function (container, componentConfig) {
            var _a, _b;
            if (componentConfig.fromWindow) {
                container.getElement()[0].innerHTML = '<div class="' + componentConfig.class + '"></div>';
                componentConfig.fromWindow = false;
            }
            else {
                if (!self.componentCb) {
                    var componentCb_2 = self.getComponentInCreation(); //renderingProps da  __domEl var mı bak.
                    self.componentCb = function () { return componentCb_2; };
                }
                var domElements = (_b = (_a = self.componentCb().children) === null || _a === void 0 ? void 0 : _a[componentConfig.id]) === null || _b === void 0 ? void 0 : _b.map(function (i) { return i.domElement; });
                if (!domElements) {
                    return;
                }
                container.getElement()[0].innerHTML = '<div class="' + componentConfig.class + '"><div class="innerWindow"></div>';
                domElements.forEach(function (domElement) {
                    if (domElement) {
                        container.getElement()[0].getElementsByClassName("innerWindow")[0].append(domElement);
                        container.getElement()[0].style.overflow = "overlay";
                    }
                });
            }
        });
        // attach the state change listener
        layout.on("stateChanged", function () {
            if (self.StateChangedForDesign) {
                self.StateChangedForDesign = false;
            }
            else {
                self.$emit("GL_stateChanged", self.getGoldenLayout().toConfig(), self.childNames);
            }
        });
        layout.on("stackCreated", function (stack) {
            _GoldenLayoutHelper__WEBPACK_IMPORTED_MODULE_1__.initPopOut.call(self, stack);
            self.onStackClose(stack);
        });
        layout.on("tabCreated", function (tab) {
            // self.addContentItem(tab.contentItem);
            self.$emit("paneCreated", tab.contentItem.config.componentState.text);
            tab.closeElement.off("click").click(function () {
                var childName = tab.contentItem.config.componentState.text;
                self.removeItem([childName]); // to delete child jsons in goldenLayout before tab remove.
                self.StateChangedForDesign = self._renderingProps.isEditMode ? false : true; // to save new goldenLayout config. after tab remove gl will emit layoutChanged event and GoldenLayoutTracker will be triggered.
                tab.contentItem.remove();
            });
        });
        this.getContentItems = function () {
            var _a, _b;
            var contentItems = [];
            (_b = (_a = self.getGoldenLayout())._getAllContentItems) === null || _b === void 0 ? void 0 : _b.call(_a).forEach(function (item) {
                if (item.config.type == "component") {
                    contentItems.push(item);
                }
            });
            return contentItems;
        };
        // initiatialize the layout
        layout.init();
        this.getGoldenLayout = function () { return layout; };
        var head = document.getElementsByTagName("head");
        var isCssExist = false;
        try {
            for (var _b = __values(head[0].children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item.href && item.href.includes("goldenlayout-base")) {
                    isCssExist = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!isCssExist) {
            var glBaseCssTag = document.createElement("link");
            glBaseCssTag.href =
                "https://golden-layout.com/files/latest/css/goldenlayout-base.css";
            glBaseCssTag.rel = "stylesheet";
            glBaseCssTag.type = "text/css";
            var glLightCssTag = document.createElement("link");
            glLightCssTag.href =
                "https://golden-layout.com/files/latest/css/goldenlayout-light-theme.css";
            glLightCssTag.rel = "stylesheet";
            glLightCssTag.type = "text/css";
            head[0].appendChild(glBaseCssTag);
            head[0].appendChild(glLightCssTag);
        }
    },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    },
}));


/***/ }),

/***/ "./src/components/quick/GoldenLayout/GoldenLayoutHelper.ts":
/*!*****************************************************************!*\
  !*** ./src/components/quick/GoldenLayout/GoldenLayoutHelper.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPopOut": () => (/* binding */ initPopOut)
/* harmony export */ });
/* harmony import */ var _common_shrimp_helpers_windowHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../common/shrimp/helpers/windowHelper */ "../../common/shrimp/helpers/windowHelper.ts");

function initPopOut(stack) {
    var self = this;
    var popoutButton = document.createElement("li");
    popoutButton.className = "lm_popout";
    stack.header.controlsContainer.prepend(popoutButton);
    (function (popoutButton, stack) {
        var item = undefined;
        var mainWindow = window;
        popoutButton.onclick = function () {
            if (self._renderingProps.isEditMode) {
                return;
            }
            var className = item.config.componentState.class;
            var randomNumber = (Math.random() * 10000).toFixed(0); // todo math random kaldıralacak.
            var windId = "wind" + randomNumber;
            var newWindow = window.open("", windId, "height=700,width=1000");
            self.childWindows.push({ windId: windId, childWindow: newWindow });
            if (newWindow) {
                newWindow.onload = function () {
                    if (newWindow) {
                        if (newWindow.ranOnce) {
                            return;
                        }
                        else {
                            newWindow.ranOnce = true;
                        }
                        var popoutOuterElement = document.getElementsByClassName(className)[0].children[0];
                        var div = document.createElement("DIV");
                        newWindow.document.write("<!DOCTYPE html><html><head><title>" + item.config.title + "</title></head><body></body></html>");
                        newWindow.document.body.append(div);
                        div.className = "lm_content " + mainWindow.document.getElementsByClassName("v-application")[0].getAttribute("class");
                        div.style.width = "100%";
                        div.style.height = "100%";
                        div.style.overflow = "scroll";
                        div.style.display = "grid";
                        div.append(popoutOuterElement);
                        var currentPageSChildren = document.head.children;
                        for (var i = 0; i < currentPageSChildren.length; i++) {
                            var child = currentPageSChildren[i];
                            if (child.tagName == "LINK") {
                                var AChild = child;
                                var cssLink = newWindow.document.createElement("link");
                                cssLink.rel = "stylesheet";
                                cssLink.type = "text/css";
                                cssLink.href = AChild.href;
                                newWindow.document.head.appendChild(cssLink);
                            }
                            else if (child.tagName == "STYLE") {
                                var style = newWindow.document.createElement("style");
                                style.type = "text/css";
                                style.innerHTML = child.innerHTML;
                                newWindow.document.head.appendChild(style);
                            }
                        }
                        newWindow.stateCopy = {
                            componentState: { class: item.config.componentState.class, text: item.config.componentState.text, fromWindow: true, },
                            title: item.config.title,
                            type: "component",
                            componentName: item.config.componentName,
                        };
                        newWindow.onbeforeunload = function () {
                            self.addItem({ config: newWindow.stateCopy });
                            var popinDiv = mainWindow.document.getElementsByClassName(newWindow.stateCopy.componentState.class)[0];
                            popinDiv.appendChild(newWindow.document.getElementsByClassName("innerWindow")[0]);
                            self.childWindows.splice(self.childWindows.findIndex(function (i) { return i.windId == windId; }), 1);
                        };
                        overrideAppendChild(self.childWindows);
                        // addEventListeners(newWindow);
                        item.remove();
                    }
                };
                if (newWindow.document && newWindow.document.readyState == "complete" /* ah chrome ah */) {
                    newWindow.onload();
                }
            }
        };
        // Add the colorDropdown to the header
        // Update the color initially and whenever the tab changes
        stack.on("activeContentItemChanged", function (contentItem) {
            item = contentItem;
            self.$emit("activeContentItemChanged", contentItem);
        });
    })(popoutButton, stack);
}

function overrideAppendChild(childWindows) {
    var currDocument = _common_shrimp_helpers_windowHelper__WEBPACK_IMPORTED_MODULE_0__.WindowHelper.Instance.document;
    (function (origAppendChild) {
        currDocument.body.appendChild = function (node) {
            if (currDocument.hasFocus()) {
                origAppendChild.apply(window.document.body, [node]);
                return node;
            }
            for (var i = 0; i < childWindows.length; i++) {
                if (childWindows[i].childWindow.document.hasFocus()) {
                    childWindows[i].childWindow.document.body.appendChild(node);
                    break;
                }
            }
            return node;
        };
    })(currDocument.body.appendChild);
}


/***/ }),

/***/ "./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue":
/*!*******************************************************************!*\
  !*** ./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GoldenLayoutWrapper_vue_vue_type_template_id_2701f7f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoldenLayoutWrapper.vue?vue&type=template&id=2701f7f6& */ "./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=template&id=2701f7f6&");
/* harmony import */ var _GoldenLayoutWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoldenLayoutWrapper.vue?vue&type=script&lang=ts& */ "./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoldenLayoutWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoldenLayoutWrapper_vue_vue_type_template_id_2701f7f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _GoldenLayoutWrapper_vue_vue_type_template_id_2701f7f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************!*\
  !*** ./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_GoldenLayoutWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GoldenLayoutWrapper.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_GoldenLayoutWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=template&id=2701f7f6&":
/*!**************************************************************************************************!*\
  !*** ./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=template&id=2701f7f6& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoldenLayoutWrapper_vue_vue_type_template_id_2701f7f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoldenLayoutWrapper_vue_vue_type_template_id_2701f7f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoldenLayoutWrapper_vue_vue_type_template_id_2701f7f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GoldenLayoutWrapper.vue?vue&type=template&id=2701f7f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=template&id=2701f7f6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=template&id=2701f7f6&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GoldenLayout/GoldenLayoutWrapper.vue?vue&type=template&id=2701f7f6& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    ref: "layoutContainer",
    style: "width:" + _vm.width + "; height:" + _vm.height + ";",
    attrs: { id: "layoutContainer" },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_GoldenLayout_GoldenLayoutWrapper_vue.js.map?ver=3.1.2-4