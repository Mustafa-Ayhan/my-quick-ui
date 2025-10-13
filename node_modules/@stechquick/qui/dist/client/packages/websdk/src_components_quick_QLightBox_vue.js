"use strict";
(this["webpackChunk_stechquick_websdk"] = this["webpackChunk_stechquick_websdk"] || []).push([["src_components_quick_QLightBox_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: "QLightBox",
    data: function () {
        return {
            element: { style: { width: "0", height: "0" } },
            resizeObserver: null,
            calculatedHeight: "",
            calculatedWidth: "",
            calculateTop: "",
            calculateLeft: "",
            limitedTop: null,
            limitedLeft: null,
            preFullScreenStyle: null,
            reachedMinSize: false,
            reachedMaxSize: false,
            minWidth: 70,
            maxWidth: undefined,
            minHeight: 70,
            maxHeight: undefined,
            internalPinned: this.pinned,
            internalResizable: this.resizable,
            pos1: 0,
            pos2: 0,
            pos3: 0,
            pos4: 0,
            //For ViewPort
            _bottom: 0,
            _left: 0,
            _right: 0,
            _top: 0,
            rect: new DOMRect(),
            resizing: false,
            resizeHandle: "",
            initialRect: null,
            coords: ["top-left", "top-right", "bottom-left", "bottom-right"],
            isFullScreen: false,
            isMinimized: false,
            savedPosition: null,
            currentWidth: "",
            currentHeight: "",
            insetRight: "",
        };
    },
    props: {
        width: {
            type: String,
            default: "500px",
        },
        height: {
            type: String,
            default: "400px",
        },
        headerPadding: {
            type: String,
            default: "27px",
        },
        right: {
            type: String,
            default: "auto",
        },
        left: {
            type: String,
            default: "0px",
        },
        top: {
            type: String,
            default: "auto",
        },
        bottom: {
            type: String,
            default: "0px",
        },
        zIndex: {
            type: String,
        },
        pinned: {
            type: Boolean,
        },
        backgroundColor: {
            type: String,
        },
        _renderingProps: {
            type: Object,
        },
        class: {
            type: String,
        },
        border: {
            type: Boolean,
            default: true,
        },
        closeBtn: {
            type: Boolean,
            default: true,
        },
        fullScreen: {
            type: Boolean,
            default: false,
        },
        resizable: {
            type: Boolean,
            default: false,
        },
        minimizable: {
            type: Boolean,
            default: false,
        },
    },
    mounted: function () {
        var _this = this;
        this.configureForEditor();
        this.dragElement(this.$refs["draggableDiv"]);
        var el = this.$refs["draggableDiv"];
        var checkVisibilityAndMeasure = function () {
            if (getComputedStyle(el).display === "none") {
                // 🚨 Hâlâ görünmez, tekrar dene
                requestAnimationFrame(checkVisibilityAndMeasure);
                return;
            }
            // ✅ Görünür, ölçümleri yap
            _this.doInitialMeasurements();
        };
        requestAnimationFrame(checkVisibilityAndMeasure);
    },
    updated: function () {
        var el = this.$refs["draggableDiv"];
        this.element = el;
    },
    computed: {
        classObject: function () {
            var _a;
            return _a = {},
                _a[this.class] = true,
                _a.minimized = this.isMinimized,
                _a;
        },
    },
    methods: {
        doInitialMeasurements: function () {
            var _this = this;
            this.$nextTick(function () {
                requestAnimationFrame(function () {
                    var el = _this.$refs["draggableDiv"];
                    if (!el.style.width) {
                        el.style.width = _this.width;
                    }
                    if (!el.style.height) {
                        el.style.height = _this.height;
                    }
                    if (_this.top) {
                        el.style.top = _this.top;
                    }
                    if (_this.left) {
                        el.style.left = _this.left;
                    }
                    if (_this.right) {
                        el.style.right = _this.right;
                    }
                    if (_this.bottom) {
                        el.style.bottom = _this.bottom;
                    }
                    var computedStyle = window.getComputedStyle(el);
                    parseFloat(computedStyle.top) < 0
                        ? (el.style.top = "0px")
                        : (el.style.top = computedStyle.top);
                    parseFloat(computedStyle.bottom) < 0
                        ? (el.style.bottom = "0px")
                        : (el.style.bottom = computedStyle.bottom);
                    parseFloat(computedStyle.left) < 0
                        ? (el.style.left = "0px")
                        : (el.style.left = computedStyle.left);
                    parseFloat(computedStyle.right) < 0
                        ? (el.style.right = "0px")
                        : (el.style.right = computedStyle.right);
                    var maxAllowedWidth = computedStyle.left
                        ? window.innerWidth - parseFloat(computedStyle.left)
                        : window.innerWidth;
                    var maxAllowedHeight = computedStyle.top
                        ? window.innerHeight - parseFloat(computedStyle.top)
                        : window.innerHeight;
                    // Min Width
                    if (computedStyle.minWidth &&
                        computedStyle.minWidth !== "none" &&
                        computedStyle.minWidth !== "auto" &&
                        computedStyle.minWidth !== "0px" &&
                        computedStyle.minWidth.trim() !== "") {
                        _this.minWidth = parseFloat(computedStyle.minWidth);
                    }
                    else {
                        _this.minWidth = 70; // fallback değeri
                    }
                    // Max Width
                    if (computedStyle.maxWidth &&
                        computedStyle.maxWidth !== "none" &&
                        computedStyle.maxWidth !== "auto" &&
                        computedStyle.maxWidth !== "0px" &&
                        computedStyle.maxWidth.trim() !== "") {
                        _this.maxWidth = parseFloat(computedStyle.maxWidth);
                        if (_this.maxWidth > maxAllowedWidth) {
                            _this.maxWidth = maxAllowedWidth;
                        }
                    }
                    else {
                        _this.maxWidth = maxAllowedWidth;
                    }
                    // Min Height
                    if (computedStyle.minHeight &&
                        computedStyle.minHeight !== "none" &&
                        computedStyle.minHeight !== "auto" &&
                        computedStyle.minHeight !== "0px" &&
                        computedStyle.minHeight.trim() !== "") {
                        _this.minHeight = parseFloat(computedStyle.minHeight);
                    }
                    else {
                        _this.minHeight = 70;
                    }
                    // Max Height
                    if (computedStyle.maxHeight &&
                        computedStyle.maxHeight !== "none" &&
                        computedStyle.maxHeight !== "auto" &&
                        computedStyle.maxHeight !== "0px" &&
                        computedStyle.maxHeight.trim() !== "") {
                        _this.maxHeight = parseFloat(computedStyle.maxHeight);
                        if (_this.maxHeight > maxAllowedHeight) {
                            _this.maxHeight = maxAllowedHeight;
                        }
                    }
                    else {
                        _this.maxHeight = maxAllowedHeight;
                    }
                    var givenHeight = parseFloat(getComputedStyle(el).height);
                    if (givenHeight > _this.maxHeight) {
                        el.style.setProperty("height", _this.maxHeight + "px", "important");
                        var limitedHeight = parseFloat(getComputedStyle(el).height);
                        _this.limitedTop = window.innerHeight - limitedHeight + "px";
                        el.style.setProperty("top", _this.limitedTop + "px", "important");
                    }
                    var givenWidth = parseFloat(getComputedStyle(el).width);
                    if (givenWidth > _this.maxWidth) {
                        el.style.setProperty("width", _this.maxWidth + "px", "important");
                        var limitedWidth = parseFloat(getComputedStyle(el).width);
                        var height = parseFloat(getComputedStyle(el).height);
                        _this.limitedLeft = window.innerWidth - limitedWidth + "px";
                        el.style.setProperty("left", _this.limitedLeft + "px", "important");
                    }
                    _this.observeExternalResize();
                    _this.updateCalculatedSize();
                    _this.setDraggableBodyHeight();
                    document.onclick = _this.clickEvent;
                    if (el) {
                        _this.element = el;
                    }
                    else {
                        _this.element = _this.$refs["draggableDiv"];
                    }
                    _this.$emit("mounted");
                });
            });
        },
        dragMouseDownHandler: function (e) {
            if (!this.internalPinned && !this._renderingProps.isEditMode) {
                this.dragMouseDown(e); // ✅ sadece şartlar sağlanınca çağır
            }
            else {
                return; // ✅ aksi halde hiçbir şey yapma
            }
        },
        setDraggableBodyHeight: function () {
            var _this = this;
            requestAnimationFrame(function () {
                var _a;
                var header = _this.$refs["draggableDivHeader"];
                var body = _this.$refs["draggableDivBody"];
                var full = _this.$refs["draggableDiv"];
                if (header && body && full) {
                    var headerHeight = ((_a = header.getClientRects()[0]) === null || _a === void 0 ? void 0 : _a.height) || 0;
                    var fullHeight = full.offsetHeight;
                    var bodyHeight = fullHeight - headerHeight;
                    body.style.setProperty("height", bodyHeight > 0 ? bodyHeight + "px" : "auto", "important");
                }
                _this.fixZIndex();
            });
        },
        updateCalculatedSize: function () {
            var el = this.$refs["draggableDiv"];
            var computedStyle = window.getComputedStyle(el);
            this.calculatedWidth = el.offsetWidth + "px";
            this.calculatedHeight = el.offsetHeight + "px";
            this.calculateTop = this.limitedTop
                ? this.limitedTop
                : computedStyle.top
                    ? computedStyle.top
                    : window.innerHeight -
                        Number(this.calculatedHeight.replace(/[^0-9.]+/, "")) +
                        "px";
            this.calculateLeft = this.limitedLeft
                ? this.limitedLeft
                : computedStyle.left
                    ? computedStyle.left
                    : 0 + "px";
            this.applyStyleWithImportant(this.calculatedHeight, this.calculatedWidth, el.style.position, this.calculateTop, this.calculateLeft, computedStyle.bottom ? computedStyle.bottom : null, computedStyle.right ? computedStyle.right : null);
        },
        observeExternalResize: function () {
            var _this = this;
            var el = this.$refs["draggableDiv"];
            this.resizeObserver = new ResizeObserver(function () {
                var newHeight = el.offsetHeight + "px";
                var newWidth = el.offsetWidth + "px";
                if (newHeight !== _this.calculatedHeight ||
                    newWidth !== _this.calculatedWidth) {
                    _this.calculatedHeight = newHeight;
                    _this.calculatedWidth = newWidth;
                }
            });
            this.resizeObserver.observe(el);
        },
        applyStyleWithImportant: function (height, width, position, top, left, bottom, right) {
            var _this = this;
            var setOrRemove = function (prop, value) {
                if (value === undefined) {
                    // ❌ undefined => hiç dokunma (önceki değeri koru)
                    return;
                }
                if (value === null || value === "") {
                    // 🔵 null veya boş string => property'i sil
                    _this.element.style.removeProperty(prop);
                }
                else {
                    // ✅ string bir değer => uygula
                    _this.element.style.setProperty(prop, value, "important");
                }
            };
            // ✅ Ana stil özellikleri
            setOrRemove("height", height);
            setOrRemove("width", width);
            setOrRemove("position", position);
            setOrRemove("top", top);
            setOrRemove("left", left);
            setOrRemove("bottom", bottom);
            setOrRemove("right", right);
            // 🔵 FULLSCREEN & MINIMIZE durumunda limitleri kaldır
            if (this.isFullScreen || this.isMinimized) {
                this.element.style.setProperty("max-width", "none", "important");
                this.element.style.setProperty("max-height", "none", "important");
                this.element.style.setProperty("min-width", "0", "important");
                this.element.style.setProperty("min-height", "0", "important");
            }
            else {
                // ✅ Burada artık undefined ihtimali yok → direkt uygula
                this.element.style.setProperty("max-width", this.maxWidth + "px", "important");
                this.element.style.setProperty("max-height", this.maxHeight + "px", "important");
                this.element.style.setProperty("min-width", this.minWidth + "px", "important");
                this.element.style.setProperty("min-height", this.minHeight + "px", "important");
            }
            // ✅ her style update sonunda z-index yeniden fixle
            this.fixZIndex();
        },
        closeDragElement: function () {
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;
        },
        elementDrag: function (mouseEvent) {
            if (this.resizing) {
                return;
            }
            var currEvent = mouseEvent || window.event;
            currEvent.preventDefault();
            this.pos1 = this.pos3 - currEvent.clientX;
            this.pos2 = this.pos4 - currEvent.clientY;
            this.pos3 = currEvent.clientX;
            this.pos4 = currEvent.clientY;
            // Yeni pozisyon hesapla
            var newLeft = this.element.offsetLeft - this.pos1;
            var newTop = this.element.offsetTop - this.pos2;
            var maxLeft = window.innerWidth - this.element.offsetWidth - 10;
            var maxTop = window.innerHeight - this.element.offsetHeight;
            // Sınırları uygula (taşmayı engelle)
            var clampedLeft = Math.min(Math.max(newLeft, 0), maxLeft);
            var clampedTop = Math.min(Math.max(newTop, 0), maxTop);
            this.applyStyleWithImportant(this.element.style.height, this.element.style.width, this.element.style.position, clampedTop + "px", clampedLeft + "px");
        },
        elementMobileDrag: function (mouseEvent) {
            var currEvent = mouseEvent || window.event;
            currEvent.preventDefault();
            this.pos1 = this.pos3 - currEvent.touches[0].clientX;
            this.pos2 = this.pos4 - currEvent.touches[0].clientY;
            this.pos3 = currEvent.touches[0].clientX;
            this.pos4 = currEvent.touches[0].clientY;
            this.element.style.top = this.element.offsetTop - this.pos2 + "px";
            this.element.style.left = this.element.offsetLeft - this.pos1 + "px";
        },
        dragMouseDown: function (mouseEvent) {
            if (this.resizing)
                return; // Prevent dragging while resizing
            var currEvent = mouseEvent || window.event;
            currEvent.preventDefault();
            this.pos3 = currEvent.clientX;
            this.pos4 = currEvent.clientY;
            this.rect = this.element.getBoundingClientRect();
            this._left = 0;
            this._top = 0;
            this._bottom = window.innerHeight;
            this._right = window.innerWidth;
            document.onmouseup = this.closeDragElement;
            document.onmousemove = this.elementDrag;
            document.ontouchmove = this.elementMobileDrag;
            document.ontouchend = this.closeDragElement;
            document.activeElement.blur(); //trigger blur of inner components
            this.fixZIndex();
        },
        dragElement: function (elmnt) {
            (this.pos1 = 0), (this.pos2 = 0), (this.pos3 = 0), (this.pos4 = 0);
            this.element = elmnt;
        },
        closePopup: function () {
            this.$emit("closePopup");
        },
        toggleFullscreen: function () {
            var _this = this;
            this.$nextTick(function () {
                _this.isFullScreen = !_this.isFullScreen;
                var el = _this.$refs["draggableDiv"];
                _this.element = el;
                var frame = document.getElementById("app");
                if (_this.isFullScreen) {
                    if (!_this.preFullScreenStyle) {
                        var preWidth = _this.isMinimized
                            ? _this.currentWidth
                            : _this.calculatedWidth;
                        var preHeight = _this.isMinimized
                            ? _this.currentHeight
                            : _this.calculatedHeight;
                        var preTop = window.innerHeight -
                            Number(preHeight.replace(/[^0-9.]+/g, "")) +
                            "px";
                        var preLeft = frame.offsetWidth - parseFloat(preWidth) + "px";
                        _this.preFullScreenStyle = {
                            width: preWidth || window.getComputedStyle(_this.element).width,
                            height: preHeight || window.getComputedStyle(_this.element).height,
                            position: window.getComputedStyle(_this.element).position || "absolute",
                            top: preTop,
                            left: preLeft,
                        };
                    }
                    if (_this.isMinimized) {
                        _this.isMinimized = false;
                    }
                    var position = "absolute";
                    _this.$refs["draggableDivBody"].style.setProperty("display", "block");
                    var top_1 = "0px";
                    var bottom = "0px";
                    var right = "0px";
                    var width = frame.offsetWidth + "px";
                    var height = frame.offsetHeight + "px";
                    var left = _this.isMinimized
                        ? frame.offsetWidth - parseFloat(_this.width) + "px"
                        : "1px";
                    _this.applyStyleWithImportant(height, width, position, top_1, left, bottom, right);
                    _this.internalPinned = true;
                }
                else {
                    if (_this.preFullScreenStyle) {
                        _this.applyStyleWithImportant(_this.preFullScreenStyle.height, _this.preFullScreenStyle.width, _this.preFullScreenStyle.position, _this.preFullScreenStyle.top, _this.preFullScreenStyle.left);
                    }
                    _this.preFullScreenStyle = null;
                    if (_this.pinned) {
                        _this.internalPinned = _this.pinned;
                    }
                    else {
                        _this.internalPinned = false;
                    }
                }
                _this.setDraggableBodyHeight();
                _this.fixZIndex();
                _this.$emit("toggleFullscreen", _this.isFullScreen);
            });
        },
        minimizeWindow: function () {
            var _a, _b, _c, _d, _e, _f, _g;
            this.isMinimized = !this.isMinimized;
            var frame = document.getElementById("app");
            if (this.isMinimized) {
                this.isFullScreen = false;
                this.internalPinned = false;
                this.internalResizable = false;
                var gapBetweenTabs = 10;
                this.currentHeight = this.calculatedHeight;
                this.currentWidth = this.calculatedWidth;
                var height = "50px";
                var width = "150px";
                var position = "fixed";
                var top_2 = window.innerHeight - 50 + "px";
                var left = "auto";
                var right = this.insetRight
                    ? "calc(" + this.insetRight + "px)"
                    : document.querySelectorAll(".minimized").length *
                        (150 + gapBetweenTabs) + "px";
                var bottom = "auto";
                this.applyStyleWithImportant(height, width, position, top_2, left, bottom, right);
                this.element.children[this.element.children.length - 1].style.setProperty("display", "none");
                this.element.children[0].style.setProperty("box-shadow", "none");
                this.element.children[0].style.setProperty("box-sizing", "content-box");
                this.insetRight = this.element.style.right;
            }
            else {
                this.internalResizable = (_a = this.resizable) !== null && _a !== void 0 ? _a : false;
                this.internalPinned = (_b = this.pinned) !== null && _b !== void 0 ? _b : false;
                var position = ((_c = this.preFullScreenStyle) === null || _c === void 0 ? void 0 : _c.position) || "absolute";
                var top_3 = ((_d = this.preFullScreenStyle) === null || _d === void 0 ? void 0 : _d.top) ||
                    window.innerHeight -
                        Number(this.currentHeight.replace(/[^0-9.]+/, "")) +
                        "px";
                var width = ((_e = this.preFullScreenStyle) === null || _e === void 0 ? void 0 : _e.width) || this.currentWidth;
                var height = ((_f = this.preFullScreenStyle) === null || _f === void 0 ? void 0 : _f.height) || this.currentHeight;
                var left = ((_g = this.preFullScreenStyle) === null || _g === void 0 ? void 0 : _g.left) ||
                    frame.offsetWidth - parseFloat(this.currentWidth) + "px";
                this.applyStyleWithImportant(height, width, position, top_3, left);
                this.element.children[this.element.children.length - 1].style.setProperty("display", "block");
                this.setDraggableBodyHeight();
            }
            this.fixZIndex();
            this.$emit("minimizePopup", this.isMinimized);
        },
        resizeMouseDown: function (event, handle) {
            if (this.isFullScreen)
                return;
            this.resizing = true;
            this.resizeHandle = handle;
            this.initialRect = this.element.getBoundingClientRect();
            document.addEventListener("mousemove", this.resizeMouseMove);
            document.addEventListener("mouseup", this.resizeMouseUp);
        },
        resizeMouseMove: function (event) {
            var _a, _b;
            var frame = document.getElementById("app");
            if (!this.resizing || this.initialRect === null)
                return;
            var offsetX = event.clientX - this.initialRect.left;
            var offsetY = event.clientY - this.initialRect.top;
            var offsetRightX = event.clientX - (this.initialRect.left + this.initialRect.width);
            var offsetRightY = event.clientY - (this.initialRect.top + this.initialRect.height);
            var visibleAreaWidth = frame.offsetWidth;
            var visibleAreaHeight = frame.offsetHeight;
            var el = this.$refs["draggableDiv"];
            var computedStyle = window.getComputedStyle(el);
            var minWidth = (_a = this.minWidth) !== null && _a !== void 0 ? _a : 70;
            var minHeight = (_b = this.minHeight) !== null && _b !== void 0 ? _b : 70;
            var parsedMaxHeight = parseFloat(computedStyle.maxHeight);
            var validMaxHeight = !isNaN(parsedMaxHeight) && parsedMaxHeight > minHeight;
            var parsedMaxWidth = parseFloat(computedStyle.maxWidth);
            var validMaxWidth = !isNaN(parsedMaxWidth) && parsedMaxWidth > minWidth;
            this.maxWidth = validMaxWidth ? parsedMaxWidth : window.innerWidth;
            this.maxHeight = validMaxHeight ? parsedMaxHeight : window.innerHeight;
            var maxWidth = this.maxWidth;
            var maxHeight = this.maxHeight;
            var newWidth = this.initialRect.width;
            var newHeight = this.initialRect.height;
            var newLeft = this.initialRect.left;
            var newTop = this.initialRect.top;
            switch (this.resizeHandle) {
                case "top-left":
                    newWidth = this.initialRect.width - offsetX;
                    newHeight = this.initialRect.height - offsetY;
                    newLeft = this.initialRect.left + offsetX;
                    newTop = this.initialRect.top + offsetY;
                    break;
                case "bottom-left":
                    newWidth = this.initialRect.width - offsetX;
                    newHeight = this.initialRect.height + offsetRightY;
                    newLeft = this.initialRect.left + offsetX;
                    break;
                case "top-right":
                    newWidth = this.initialRect.width + offsetRightX;
                    newHeight = this.initialRect.height - offsetY;
                    newTop = this.initialRect.top + offsetY;
                    break;
                case "bottom-right":
                    newWidth = this.initialRect.width + offsetRightX;
                    newHeight = this.initialRect.height + offsetRightY;
                    break;
            }
            // ✅ MIN/MAX kontrol
            var exceedsMaxWidth = newWidth >= maxWidth;
            var exceedsMaxHeight = newHeight >= maxHeight;
            this.reachedMaxSize = exceedsMaxWidth || exceedsMaxHeight;
            var belowMinWidth = newWidth <= minWidth;
            var belowMinHeight = newHeight <= minHeight;
            this.reachedMinSize = belowMinWidth || belowMinHeight;
            // Yeni konumdan taşma olacak mı kontrol et
            var exceedsRightEdge = this.resizeHandle.includes("right") &&
                newLeft + newWidth >= visibleAreaWidth;
            var exceedsBottomEdge = this.resizeHandle.includes("bottom") &&
                newTop + newHeight >= visibleAreaHeight;
            var exceedsLeftEdge = this.resizeHandle.includes("left") && newLeft <= 0;
            var exceedsTopEdge = this.resizeHandle.includes("top") && newTop <= 0;
            var hitsViewportEdge = exceedsRightEdge ||
                exceedsBottomEdge ||
                exceedsLeftEdge ||
                exceedsTopEdge;
            if (hitsViewportEdge) {
                this.reachedMaxSize = true;
                return; // ❌ Taşmasın → işlem yapma
            }
            // ✅ WIDTH & HEIGHT uygula
            if (!this.reachedMinSize && !this.reachedMaxSize) {
                newWidth = Math.max(newWidth, minWidth);
                newHeight = Math.max(newHeight, minHeight);
                this.calculatedWidth = newWidth + "px";
                this.calculatedHeight = newHeight + "px";
                this.applyStyleWithImportant(newHeight + "px", newWidth + "px");
                this.setDraggableBodyHeight();
            }
            // ✅ LEFT uygula (sadece top-left & bottom-left senaryolarında)
            if ((this.resizeHandle === "top-left" ||
                this.resizeHandle === "bottom-left") &&
                newLeft >= 0 &&
                newLeft + newWidth <= visibleAreaWidth &&
                !this.reachedMinSize &&
                !this.reachedMaxSize) {
                this.applyStyleWithImportant(undefined, undefined, undefined, undefined, newLeft + "px");
                this.calculateLeft = newLeft + "px";
            }
            // ✅ TOP uygula (sadece top-left & top-right senaryolarında)
            if ((this.resizeHandle === "top-left" ||
                this.resizeHandle === "top-right") &&
                newTop >= 0 &&
                newTop + newHeight <= visibleAreaHeight &&
                !this.reachedMinSize &&
                !this.reachedMaxSize) {
                this.applyStyleWithImportant(undefined, undefined, undefined, newTop + "px");
                this.calculateTop = newTop + "px";
            }
        },
        resizeMouseUp: function () {
            this.resizing = false;
            this.reachedMinSize = false;
            this.reachedMaxSize = false;
            this.resizeHandle = "";
            this.initialRect = null;
            document.removeEventListener("mousemove", this.resizeMouseMove);
            document.removeEventListener("mouseup", this.resizeMouseUp);
            this.setDraggableBodyHeight();
        },
        clickEvent: function (e) {
            // var documentObject = document.getElementById("draggableDiv");
            // if (
            //   documentObject &&
            //   e.target instanceof HTMLElement &&
            //   e.target &&
            //   documentObject.contains(e.target)
            // ) {
            //   this.$emit("clickInside");
            // } else {
            //   this.$emit("clickOutside");
            // }
            var el = this.$refs["draggableDiv"];
            if (!el)
                return;
            // ✅ Her türlü DOM node kabul edilir (HTMLElement, SVGElement, Text vs.)
            if (e.target instanceof Node && el.contains(e.target)) {
                this.$emit("clickInside");
            }
            else {
                this.$emit("clickOutside");
            }
        },
        fixZIndex: function () {
            var _this = this;
            if (this.zIndex === null ||
                this.zIndex === undefined ||
                this.zIndex === "") {
                document.getElementsByName("draggableDiv").forEach(function (element) {
                    element.style.setProperty("z-index", "9", "important");
                });
                this.element.style.setProperty("z-index", "12", "important");
            }
            else {
                document.getElementsByName("draggableDiv").forEach(function (element) {
                    //zIndex must be an integer (proptan zIndex number verilmeli)
                    var strzIndex = _this.zIndex - 1;
                    element.style.setProperty("z-index", strzIndex.toString(), "important");
                });
                this.element.style.setProperty("z-index", this.zIndex, "important");
            }
        },
        configureForEditor: function () {
            if (this._renderingProps.isEditMode ||
                this._renderingProps.isEditMode == null ||
                this._renderingProps.isEditMode == undefined)
                this.$refs["draggableDiv"].style.setProperty("position", "relative");
            else
                this.$refs["draggableDiv"].style.setProperty("position", "absolute");
        },
    },
    watch: {
        pinned: function (val) {
            this.internalPinned = val;
        },
        resizable: function (val) {
            this.internalResizable = val;
        },
        isVisible: function (val) {
            var _this = this;
            if (val) {
                this.$nextTick(function () { return _this.doInitialMeasurements(); });
            }
        },
    },
    beforeDestroy: function () {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        document.removeEventListener("click", this.clickEvent);
    },
}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ndiv[name=\"draggableDiv\"][data-v-7354eac4] {\n  border-radius: 10px;\n  position: absolute;\n  background-color: #f1f1f1;\n  text-align: center;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n#draggableDivHeader[data-v-7354eac4] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.draggableDivBody[data-v-7354eac4] {\n  overflow: auto;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.custom-icon[data-v-7354eac4] {\n  font-size: 20px;\n}\n.b-close[data-v-7354eac4] {\n  position: absolute !important;\n  right: 8px;\n  top: 15px;\n  cursor: pointer;\n}\n.fullscreen[data-v-7354eac4] {\n  position: absolute !important;\n  right: 33px;\n  top: 15px;\n  cursor: pointer;\n}\n.fullscreenExit[data-v-7354eac4] {\n  position: absolute !important;\n  right: 33px;\n  top: 15px;\n  cursor: pointer;\n}\n.minimize[data-v-7354eac4] {\n  position: absolute !important;\n  right: 58px;\n  top: 20px;\n  cursor: pointer;\n}\n.resize-handle[data-v-7354eac4] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n}\n.resize-handle.top-left[data-v-7354eac4] {\n  border-left: solid 1px #000;\n  border-top: solid 1px #000;\n  border-top-left-radius: 10px;\n  top: 0;\n  left: 0;\n  cursor: nwse-resize;\n  z-index: 9999;\n  opacity: 0;\n}\n.resize-handle.top-right[data-v-7354eac4] {\n  border-right: solid 1px #000;\n  border-top: solid 1px #000;\n  border-top-right-radius: 10px;\n  top: 0;\n  right: 0;\n  cursor: nesw-resize;\n  z-index: 9999;\n  opacity: 0;\n}\n.resize-handle.bottom-left[data-v-7354eac4] {\n  border-left: solid 1px #000;\n  border-bottom: solid 1px #000;\n  border-bottom-left-radius: 10px;\n  bottom: 0;\n  left: 0;\n  cursor: nesw-resize;\n  z-index: 9999;\n  opacity: 0;\n}\n.resize-handle.bottom-right[data-v-7354eac4] {\n  border-right: solid 1px #000;\n  border-bottom: solid 1px #000;\n  border-bottom-right-radius: 10px;\n  bottom: 0;\n  right: 0;\n  cursor: nwse-resize;\n  z-index: 9999;\n  opacity: 0;\n}\n@media (min-width: 320px) and (max-width: 767px) {\ndiv[name=\"draggableDiv\"][data-v-7354eac4] {\n    width: 100% !important;\n    height: 100% !important;\n}\n}\n", "",{"version":3,"sources":["webpack://./src/components/quick/QLightBox.vue"],"names":[],"mappings":";AA86BA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,2CAAA;AACA;AAEA;EACA,4BAAA;EACA,6BAAA;AACA;AACA;EACA,cAAA;EACA,+BAAA;EACA,gCAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,6BAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;AACA;AACA;EACA,6BAAA;EACA,WAAA;EACA,SAAA;EACA,eAAA;AACA;AACA;EACA,6BAAA;EACA,WAAA;EACA,SAAA;EACA,eAAA;AACA;AACA;EACA,6BAAA;EACA,WAAA;EACA,SAAA;EACA,eAAA;AACA;AACA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;AACA;AACA;EACA,2BAAA;EACA,0BAAA;EACA,4BAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,aAAA;EACA,UAAA;AACA;AAEA;EACA,4BAAA;EACA,0BAAA;EACA,6BAAA;EACA,MAAA;EACA,QAAA;EACA,mBAAA;EACA,aAAA;EACA,UAAA;AACA;AAEA;EACA,2BAAA;EACA,6BAAA;EACA,+BAAA;EACA,SAAA;EACA,OAAA;EACA,mBAAA;EACA,aAAA;EACA,UAAA;AACA;AAEA;EACA,4BAAA;EACA,6BAAA;EACA,gCAAA;EACA,SAAA;EACA,QAAA;EACA,mBAAA;EACA,aAAA;EACA,UAAA;AACA;AAEA;AACA;IACA,sBAAA;IACA,uBAAA;AACA;AACA","sourcesContent":["<template>\n  <div\n    id=\"draggableDiv\"\n    ref=\"draggableDiv\"\n    name=\"draggableDiv\"\n    :class=\"{ class: true, minimized: isMinimized }\"\n    :style=\"[zIndex ? { zIndex: zIndex } : {}]\"\n  >\n    <div\n      id=\"draggableDivHeader\"\n      ref=\"draggableDivHeader\"\n      v-on=\"{\n        mousedown: dragMouseDownHandler,\n        touchstart: dragMouseDownHandler,\n      }\"\n      :style=\"[\n        border\n          ? {\n              'box-shadow':\n                '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',\n            }\n          : { 'box-shadow': 'none' },\n        internalPinned ? { cursor: 'auto' } : { cursor: 'move' },\n        { padding: headerPadding },\n      ]\"\n    >\n      <div><slot name=\"header\"></slot></div>\n      <v-icon v-show=\"closeBtn\" class=\"b-close custom-icon\" @click=\"closePopup\"\n        >mdi-close</v-icon\n      >\n      <v-icon\n        v-show=\"fullScreen !== false\"\n        :class=\"{\n          'custom-icon': true,\n          fullscreen: !isFullScreen,\n          fullscreenExit: isFullScreen,\n        }\"\n        @click=\"toggleFullscreen\"\n        v-text=\"isFullScreen ? 'mdi-dock-window' : 'mdi-crop-square'\"\n      >\n      </v-icon>\n\n      <v-icon\n        v-show=\"minimizable\"\n        :class=\"{}\"\n        class=\"minimize custom-icon\"\n        @click=\"minimizeWindow\"\n        >{{ \"mdi-minus\" }}\n      </v-icon>\n    </div>\n    <div\n      v-show=\"!isFullScreen && internalResizable\"\n      class=\"resize-handle top-left\"\n      @mousedown.stop=\"resizeMouseDown($event, 'top-left')\"\n    ></div>\n    <div\n      v-show=\"!isFullScreen && internalResizable\"\n      class=\"resize-handle top-right\"\n      @mousedown.stop=\"resizeMouseDown($event, 'top-right')\"\n    ></div>\n    <div\n      v-show=\"!isFullScreen && internalResizable\"\n      class=\"resize-handle bottom-left\"\n      @mousedown.stop=\"resizeMouseDown($event, 'bottom-left')\"\n    ></div>\n    <div\n      v-show=\"!isFullScreen && internalResizable\"\n      class=\"resize-handle bottom-right\"\n      @mousedown.stop=\"resizeMouseDown($event, 'bottom-right')\"\n    ></div>\n    <div class=\"draggableDivBody\" ref=\"draggableDivBody\">\n      <slot name=\"content\"></slot>\n    </div>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nexport default Vue.extend({\n  name: \"QLightBox\",\n  data: function () {\n    return {\n      element: { style: { width: \"0\", height: \"0\" } } as HTMLDivElement,\n      resizeObserver: null as ResizeObserver | null,\n      calculatedHeight: \"\",\n      calculatedWidth: \"\",\n      calculateTop: \"\",\n      calculateLeft: \"\",\n      limitedTop: null as string | null,\n      limitedLeft: null as string | null,\n      preFullScreenStyle: null as any,\n      reachedMinSize: false,\n      reachedMaxSize: false,\n      minWidth: 70 as number,\n      maxWidth: undefined as number | undefined,\n      minHeight: 70 as number,\n      maxHeight: undefined as number | undefined,\n      internalPinned: this.pinned,\n      internalResizable: this.resizable,\n      pos1: 0,\n      pos2: 0,\n      pos3: 0,\n      pos4: 0,\n      //For ViewPort\n      _bottom: 0,\n      _left: 0,\n      _right: 0,\n      _top: 0,\n      rect: new DOMRect(),\n      resizing: false,\n      resizeHandle: \"\",\n      initialRect: null as DOMRect | null,\n      coords: [\"top-left\", \"top-right\", \"bottom-left\", \"bottom-right\"],\n      isFullScreen: false as Boolean,\n      isMinimized: false as Boolean,\n      savedPosition: null,\n      currentWidth: \"\",\n      currentHeight: \"\",\n      insetRight: \"\",\n    };\n  },\n  props: {\n    width: {\n      type: String,\n      default: \"500px\",\n    },\n    height: {\n      type: String,\n      default: \"400px\",\n    },\n    headerPadding: {\n      type: String,\n      default: \"27px\",\n    },\n    right: {\n      type: String,\n      default: \"auto\",\n    },\n    left: {\n      type: String,\n      default: \"0px\",\n    },\n    top: {\n      type: String,\n      default: \"auto\",\n    },\n    bottom: {\n      type: String,\n      default: \"0px\",\n    },\n    zIndex: {\n      type: String,\n    },\n    pinned: {\n      type: Boolean,\n    },\n    backgroundColor: {\n      type: String,\n    },\n    _renderingProps: {\n      type: Object,\n    },\n    class: {\n      type: String,\n    },\n    border: {\n      type: Boolean,\n      default: true,\n    },\n    closeBtn: {\n      type: Boolean,\n      default: true,\n    },\n    fullScreen: {\n      type: Boolean,\n      default: false,\n    },\n    resizable: {\n      type: Boolean,\n      default: false,\n    },\n    minimizable: {\n      type: Boolean,\n      default: false,\n    },\n  },\n  mounted() {\n    this.configureForEditor();\n    this.dragElement(<HTMLDivElement>this.$refs[\"draggableDiv\"]);\n    const el = this.$refs[\"draggableDiv\"] as HTMLDivElement;\n    const checkVisibilityAndMeasure = () => {\n      if (getComputedStyle(el).display === \"none\") {\n        // 🚨 Hâlâ görünmez, tekrar dene\n        requestAnimationFrame(checkVisibilityAndMeasure);\n        return;\n      }\n      // ✅ Görünür, ölçümleri yap\n      this.doInitialMeasurements();\n    };\n    requestAnimationFrame(checkVisibilityAndMeasure);\n  },\n  updated() {\n    const el = this.$refs[\"draggableDiv\"] as HTMLDivElement;\n    this.element = el;\n  },\n  computed: {\n    classObject: function () {\n      return {\n        [this.class]: true,\n        minimized: (<any>this).isMinimized,\n      };\n    },\n  },\n  methods: {\n    doInitialMeasurements() {\n      this.$nextTick(() => {\n        requestAnimationFrame(() => {\n          const el = this.$refs[\"draggableDiv\"] as HTMLDivElement;\n\n          if (!el.style.width) {\n            el.style.width = this.width;\n          }\n          if (!el.style.height) {\n            el.style.height = this.height;\n          }\n          if (this.top) {\n            el.style.top = this.top;\n          }\n          if (this.left) {\n            el.style.left = this.left;\n          }\n          if (this.right) {\n            el.style.right = this.right;\n          }\n          if (this.bottom) {\n            el.style.bottom = this.bottom;\n          }\n          const computedStyle = window.getComputedStyle(el);\n          parseFloat(computedStyle.top) < 0\n            ? (el.style.top = \"0px\")\n            : (el.style.top = computedStyle.top);\n          parseFloat(computedStyle.bottom) < 0\n            ? (el.style.bottom = \"0px\")\n            : (el.style.bottom = computedStyle.bottom);\n          parseFloat(computedStyle.left) < 0\n            ? (el.style.left = \"0px\")\n            : (el.style.left = computedStyle.left);\n          parseFloat(computedStyle.right) < 0\n            ? (el.style.right = \"0px\")\n            : (el.style.right = computedStyle.right);\n          const maxAllowedWidth = computedStyle.left\n            ? window.innerWidth - parseFloat(computedStyle.left)\n            : window.innerWidth;\n          const maxAllowedHeight = computedStyle.top\n            ? window.innerHeight - parseFloat(computedStyle.top)\n            : window.innerHeight;\n\n          // Min Width\n          if (\n            computedStyle.minWidth &&\n            computedStyle.minWidth !== \"none\" &&\n            computedStyle.minWidth !== \"auto\" &&\n            computedStyle.minWidth !== \"0px\" &&\n            computedStyle.minWidth.trim() !== \"\"\n          ) {\n            this.minWidth = parseFloat(computedStyle.minWidth);\n          } else {\n            this.minWidth = 70; // fallback değeri\n          }\n\n          // Max Width\n          if (\n            computedStyle.maxWidth &&\n            computedStyle.maxWidth !== \"none\" &&\n            computedStyle.maxWidth !== \"auto\" &&\n            computedStyle.maxWidth !== \"0px\" &&\n            computedStyle.maxWidth.trim() !== \"\"\n          ) {\n            this.maxWidth = parseFloat(computedStyle.maxWidth);\n            if (this.maxWidth > maxAllowedWidth) {\n              this.maxWidth = maxAllowedWidth;\n            }\n          } else {\n            this.maxWidth = maxAllowedWidth;\n          }\n\n          // Min Height\n          if (\n            computedStyle.minHeight &&\n            computedStyle.minHeight !== \"none\" &&\n            computedStyle.minHeight !== \"auto\" &&\n            computedStyle.minHeight !== \"0px\" &&\n            computedStyle.minHeight.trim() !== \"\"\n          ) {\n            this.minHeight = parseFloat(computedStyle.minHeight);\n          } else {\n            this.minHeight = 70;\n          }\n\n          // Max Height\n          if (\n            computedStyle.maxHeight &&\n            computedStyle.maxHeight !== \"none\" &&\n            computedStyle.maxHeight !== \"auto\" &&\n            computedStyle.maxHeight !== \"0px\" &&\n            computedStyle.maxHeight.trim() !== \"\"\n          ) {\n            this.maxHeight = parseFloat(computedStyle.maxHeight);\n            if (this.maxHeight > maxAllowedHeight) {\n              this.maxHeight = maxAllowedHeight;\n            }\n          } else {\n            this.maxHeight = maxAllowedHeight;\n          }\n          const givenHeight = parseFloat(getComputedStyle(el).height);\n          if (givenHeight > this.maxHeight) {\n            el.style.setProperty(\"height\", `${this.maxHeight}px`, \"important\");\n            const limitedHeight = parseFloat(getComputedStyle(el).height);\n            this.limitedTop = window.innerHeight - limitedHeight + \"px\";\n            el.style.setProperty(\"top\", `${this.limitedTop}px`, \"important\");\n          }\n\n          const givenWidth = parseFloat(getComputedStyle(el).width);\n          if (givenWidth > this.maxWidth) {\n            el.style.setProperty(\"width\", `${this.maxWidth}px`, \"important\");\n            const limitedWidth = parseFloat(getComputedStyle(el).width);\n            const height = parseFloat(getComputedStyle(el).height);\n            this.limitedLeft = window.innerWidth - limitedWidth + \"px\";\n            el.style.setProperty(\"left\", `${this.limitedLeft}px`, \"important\");\n          }\n\n          this.observeExternalResize();\n          this.updateCalculatedSize();\n          this.setDraggableBodyHeight();\n          document.onclick = this.clickEvent;\n          if (el) {\n            this.element = el;\n          } else {\n            this.element = this.$refs[\"draggableDiv\"] as HTMLDivElement;\n          }\n          this.$emit(\"mounted\");\n        });\n      });\n    },\n    dragMouseDownHandler(e: MouseEvent) {\n      if (!this.internalPinned && !this._renderingProps.isEditMode) {\n        this.dragMouseDown(e); // ✅ sadece şartlar sağlanınca çağır\n      } else {\n        return; // ✅ aksi halde hiçbir şey yapma\n      }\n    },\n    setDraggableBodyHeight() {\n      requestAnimationFrame(() => {\n        const header = this.$refs[\"draggableDivHeader\"] as HTMLDivElement;\n        const body = this.$refs[\"draggableDivBody\"] as HTMLDivElement;\n        const full = this.$refs[\"draggableDiv\"] as HTMLDivElement;\n        if (header && body && full) {\n          const headerHeight = header.getClientRects()[0]?.height || 0;\n          const fullHeight = full.offsetHeight;\n          const bodyHeight = fullHeight - headerHeight;\n          body.style.setProperty(\n            \"height\",\n            bodyHeight > 0 ? `${bodyHeight}px` : \"auto\",\n            \"important\"\n          );\n        }\n        this.fixZIndex();\n      });\n    },\n    updateCalculatedSize() {\n      const el = this.$refs[\"draggableDiv\"] as HTMLDivElement;\n      const computedStyle = window.getComputedStyle(el);\n      this.calculatedWidth = el.offsetWidth + \"px\";\n      this.calculatedHeight = el.offsetHeight + \"px\";\n      this.calculateTop = this.limitedTop\n        ? this.limitedTop\n        : computedStyle.top\n        ? computedStyle.top\n        : window.innerHeight -\n          Number(this.calculatedHeight.replace(/[^0-9.]+/, \"\")) +\n          \"px\";\n      this.calculateLeft = this.limitedLeft\n        ? this.limitedLeft\n        : computedStyle.left\n        ? computedStyle.left\n        : 0 + \"px\";\n      this.applyStyleWithImportant(\n        this.calculatedHeight,\n        this.calculatedWidth,\n        el.style.position,\n        this.calculateTop,\n        this.calculateLeft,\n        computedStyle.bottom ? computedStyle.bottom : null,\n        computedStyle.right ? computedStyle.right : null\n      );\n    },\n    observeExternalResize() {\n      const el = this.$refs[\"draggableDiv\"] as HTMLDivElement;\n      this.resizeObserver = new ResizeObserver(() => {\n        const newHeight = el.offsetHeight + \"px\";\n        const newWidth = el.offsetWidth + \"px\";\n        if (\n          newHeight !== this.calculatedHeight ||\n          newWidth !== this.calculatedWidth\n        ) {\n          this.calculatedHeight = newHeight;\n          this.calculatedWidth = newWidth;\n        }\n      });\n      this.resizeObserver.observe(el);\n    },\n    applyStyleWithImportant(\n      height?: string | null,\n      width?: string | null,\n      position?: string | null,\n      top?: string | null,\n      left?: string | null,\n      bottom?: string | null,\n      right?: string | null\n    ) {\n      const setOrRemove = (prop: string, value?: string | null) => {\n        if (value === undefined) {\n          // ❌ undefined => hiç dokunma (önceki değeri koru)\n          return;\n        }\n        if (value === null || value === \"\") {\n          // 🔵 null veya boş string => property'i sil\n          this.element.style.removeProperty(prop);\n        } else {\n          // ✅ string bir değer => uygula\n          this.element.style.setProperty(prop, value, \"important\");\n        }\n      };\n\n      // ✅ Ana stil özellikleri\n      setOrRemove(\"height\", height);\n      setOrRemove(\"width\", width);\n      setOrRemove(\"position\", position);\n      setOrRemove(\"top\", top);\n      setOrRemove(\"left\", left);\n      setOrRemove(\"bottom\", bottom);\n      setOrRemove(\"right\", right);\n\n      // 🔵 FULLSCREEN & MINIMIZE durumunda limitleri kaldır\n      if (this.isFullScreen || this.isMinimized) {\n        this.element.style.setProperty(\"max-width\", \"none\", \"important\");\n        this.element.style.setProperty(\"max-height\", \"none\", \"important\");\n        this.element.style.setProperty(\"min-width\", \"0\", \"important\");\n        this.element.style.setProperty(\"min-height\", \"0\", \"important\");\n      } else {\n        // ✅ Burada artık undefined ihtimali yok → direkt uygula\n        this.element.style.setProperty(\n          \"max-width\",\n          `${this.maxWidth}px`,\n          \"important\"\n        );\n        this.element.style.setProperty(\n          \"max-height\",\n          `${this.maxHeight}px`,\n          \"important\"\n        );\n        this.element.style.setProperty(\n          \"min-width\",\n          `${this.minWidth}px`,\n          \"important\"\n        );\n        this.element.style.setProperty(\n          \"min-height\",\n          `${this.minHeight}px`,\n          \"important\"\n        );\n      }\n\n      // ✅ her style update sonunda z-index yeniden fixle\n      this.fixZIndex();\n    },\n    closeDragElement() {\n      document.onmouseup = null;\n      document.onmousemove = null;\n      document.ontouchend = null;\n      document.ontouchmove = null;\n    },\n    elementDrag(mouseEvent: MouseEvent) {\n      if (this.resizing) {\n        return;\n      }\n      const currEvent: any = mouseEvent || window.event;\n      currEvent.preventDefault();\n\n      this.pos1 = this.pos3 - currEvent.clientX;\n      this.pos2 = this.pos4 - currEvent.clientY;\n      this.pos3 = currEvent.clientX;\n      this.pos4 = currEvent.clientY;\n\n      // Yeni pozisyon hesapla\n      const newLeft = this.element.offsetLeft - this.pos1;\n      const newTop = this.element.offsetTop - this.pos2;\n\n      const maxLeft = window.innerWidth - this.element.offsetWidth - 10;\n      const maxTop = window.innerHeight - this.element.offsetHeight;\n\n      // Sınırları uygula (taşmayı engelle)\n      const clampedLeft = Math.min(Math.max(newLeft, 0), maxLeft);\n      const clampedTop = Math.min(Math.max(newTop, 0), maxTop);\n\n      this.applyStyleWithImportant(\n        this.element.style.height,\n        this.element.style.width,\n        this.element.style.position,\n        `${clampedTop}px`,\n        `${clampedLeft}px`\n      );\n    },\n    elementMobileDrag(mouseEvent: TouchEvent) {\n      const currEvent: any = mouseEvent || window.event;\n      currEvent.preventDefault();\n      this.pos1 = this.pos3 - currEvent.touches[0].clientX;\n      this.pos2 = this.pos4 - currEvent.touches[0].clientY;\n      this.pos3 = currEvent.touches[0].clientX;\n      this.pos4 = currEvent.touches[0].clientY;\n      this.element.style.top = this.element.offsetTop - this.pos2 + \"px\";\n      this.element.style.left = this.element.offsetLeft - this.pos1 + \"px\";\n    },\n    dragMouseDown(mouseEvent: MouseEvent) {\n      if (this.resizing) return; // Prevent dragging while resizing\n      const currEvent: any = mouseEvent || window.event;\n      currEvent.preventDefault();\n      this.pos3 = currEvent.clientX;\n      this.pos4 = currEvent.clientY;\n\n      this.rect = this.element.getBoundingClientRect();\n      this._left = 0;\n      this._top = 0;\n      this._bottom = window.innerHeight;\n      this._right = window.innerWidth;\n\n      document.onmouseup = this.closeDragElement;\n      document.onmousemove = this.elementDrag;\n      document.ontouchmove = this.elementMobileDrag;\n      document.ontouchend = this.closeDragElement;\n\n      (<any>document.activeElement).blur(); //trigger blur of inner components\n\n      this.fixZIndex();\n    },\n    dragElement(elmnt: HTMLDivElement) {\n      (this.pos1 = 0), (this.pos2 = 0), (this.pos3 = 0), (this.pos4 = 0);\n      this.element = elmnt;\n    },\n    closePopup() {\n      this.$emit(\"closePopup\");\n    },\n    toggleFullscreen() {\n      this.$nextTick(() => {\n        this.isFullScreen = !this.isFullScreen;\n        const el = this.$refs[\"draggableDiv\"] as HTMLDivElement;\n        this.element = el;\n        let frame = document.getElementById(\"app\") as HTMLDivElement;\n        if ((<any>this).isFullScreen) {\n          if (!this.preFullScreenStyle) {\n            const preWidth = this.isMinimized\n              ? this.currentWidth\n              : this.calculatedWidth;\n            const preHeight = this.isMinimized\n              ? this.currentHeight\n              : this.calculatedHeight;\n            const preTop =\n              window.innerHeight -\n              Number(preHeight.replace(/[^0-9.]+/g, \"\")) +\n              \"px\";\n            const preLeft = frame.offsetWidth - parseFloat(preWidth) + \"px\";\n\n            this.preFullScreenStyle = {\n              width: preWidth || window.getComputedStyle(this.element).width,\n              height: preHeight || window.getComputedStyle(this.element).height,\n              position:\n                window.getComputedStyle(this.element).position || \"absolute\",\n              top: preTop,\n              left: preLeft,\n            };\n          }\n          if ((<any>this).isMinimized) {\n            this.isMinimized = false;\n          }\n          let position = \"absolute\";\n          (this.$refs[\"draggableDivBody\"] as HTMLDivElement).style.setProperty(\n            \"display\",\n            \"block\"\n          );\n          let top = \"0px\";\n          let bottom = \"0px\";\n          let right = \"0px\";\n          let width = frame.offsetWidth + \"px\";\n          let height = frame.offsetHeight + \"px\";\n          let left = this.isMinimized\n            ? frame.offsetWidth - parseFloat(this.width) + \"px\"\n            : \"1px\";\n          this.applyStyleWithImportant(\n            height,\n            width,\n            position,\n            top,\n            left,\n            bottom,\n            right\n          );\n          this.internalPinned = true;\n        } else {\n          if (this.preFullScreenStyle) {\n            this.applyStyleWithImportant(\n              this.preFullScreenStyle.height,\n              this.preFullScreenStyle.width,\n              this.preFullScreenStyle.position,\n              this.preFullScreenStyle.top,\n              this.preFullScreenStyle.left\n            );\n          }\n          this.preFullScreenStyle = null;\n          if (this.pinned) {\n            this.internalPinned = this.pinned;\n          } else {\n            this.internalPinned = false;\n          }\n        }\n        this.setDraggableBodyHeight();\n        this.fixZIndex();\n        this.$emit(\"toggleFullscreen\", this.isFullScreen);\n      });\n    },\n    minimizeWindow() {\n      this.isMinimized = !this.isMinimized;\n      let frame = document.getElementById(\"app\") as HTMLDivElement;\n      if ((<any>this).isMinimized) {\n        this.isFullScreen = false;\n        this.internalPinned = false;\n        this.internalResizable = false;\n        const gapBetweenTabs = 10;\n        this.currentHeight = this.calculatedHeight;\n        this.currentWidth = this.calculatedWidth;\n\n        let height = \"50px\";\n        let width = \"150px\";\n        let position = \"fixed\";\n        let top = `${window.innerHeight - 50}px`;\n        let left = \"auto\";\n        let right = this.insetRight\n          ? `calc(${this.insetRight}px)`\n          : `${\n              document.querySelectorAll(\".minimized\").length *\n              (150 + gapBetweenTabs)\n            }px`;\n        let bottom = \"auto\";\n        this.applyStyleWithImportant(\n          height,\n          width,\n          position,\n          top,\n          left,\n          bottom,\n          right\n        );\n        (\n          this.element.children[\n            this.element.children.length - 1\n          ] as HTMLDivElement\n        ).style.setProperty(\"display\", \"none\");\n        (this.element.children[0] as HTMLDivElement).style.setProperty(\n          \"box-shadow\",\n          \"none\"\n        );\n        (this.element.children[0] as HTMLDivElement).style.setProperty(\n          \"box-sizing\",\n          \"content-box\"\n        );\n        this.insetRight = this.element.style.right;\n      } else {\n        this.internalResizable = this.resizable ?? false;\n        this.internalPinned = this.pinned ?? false;\n        let position = this.preFullScreenStyle?.position || \"absolute\";\n        let top =\n          this.preFullScreenStyle?.top ||\n          window.innerHeight -\n            Number(this.currentHeight.replace(/[^0-9.]+/, \"\")) +\n            \"px\";\n        let width = this.preFullScreenStyle?.width || this.currentWidth;\n        let height = this.preFullScreenStyle?.height || this.currentHeight;\n        let left =\n          this.preFullScreenStyle?.left ||\n          frame.offsetWidth - parseFloat(this.currentWidth) + \"px\";\n        this.applyStyleWithImportant(height, width, position, top, left);\n        (\n          this.element.children[\n            this.element.children.length - 1\n          ] as HTMLDivElement\n        ).style.setProperty(\"display\", \"block\");\n        this.setDraggableBodyHeight();\n      }\n      this.fixZIndex();\n      this.$emit(\"minimizePopup\", this.isMinimized);\n    },\n    resizeMouseDown(\n      event: MouseEvent,\n      handle: \"top-left\" | \"top-right\" | \"bottom-left\" | \"bottom-right\"\n    ) {\n      if ((<any>this).isFullScreen) return;\n      this.resizing = true;\n      this.resizeHandle = handle;\n      this.initialRect = this.element.getBoundingClientRect();\n      document.addEventListener(\"mousemove\", this.resizeMouseMove);\n      document.addEventListener(\"mouseup\", this.resizeMouseUp);\n    },\n    resizeMouseMove(event) {\n      let frame = document.getElementById(\"app\") as HTMLDivElement;\n      if (!this.resizing || this.initialRect === null) return;\n\n      const offsetX = event.clientX - this.initialRect.left;\n      const offsetY = event.clientY - this.initialRect.top;\n      const offsetRightX =\n        event.clientX - (this.initialRect.left + this.initialRect.width);\n      const offsetRightY =\n        event.clientY - (this.initialRect.top + this.initialRect.height);\n\n      const visibleAreaWidth = frame.offsetWidth;\n      const visibleAreaHeight = frame.offsetHeight;\n\n      const el = this.$refs[\"draggableDiv\"] as HTMLDivElement;\n      const computedStyle = window.getComputedStyle(el);\n\n      const minWidth = this.minWidth ?? 70;\n      const minHeight = this.minHeight ?? 70;\n\n      const parsedMaxHeight = parseFloat(computedStyle.maxHeight);\n      const validMaxHeight =\n        !isNaN(parsedMaxHeight) && parsedMaxHeight > minHeight;\n      const parsedMaxWidth = parseFloat(computedStyle.maxWidth);\n      const validMaxWidth = !isNaN(parsedMaxWidth) && parsedMaxWidth > minWidth;\n\n      this.maxWidth = validMaxWidth ? parsedMaxWidth : window.innerWidth;\n      this.maxHeight = validMaxHeight ? parsedMaxHeight : window.innerHeight;\n      const maxWidth = this.maxWidth;\n      const maxHeight = this.maxHeight;\n\n      let newWidth = this.initialRect.width;\n      let newHeight = this.initialRect.height;\n      let newLeft = this.initialRect.left;\n      let newTop = this.initialRect.top;\n\n      switch (this.resizeHandle) {\n        case \"top-left\":\n          newWidth = this.initialRect.width - offsetX;\n          newHeight = this.initialRect.height - offsetY;\n          newLeft = this.initialRect.left + offsetX;\n          newTop = this.initialRect.top + offsetY;\n          break;\n        case \"bottom-left\":\n          newWidth = this.initialRect.width - offsetX;\n          newHeight = this.initialRect.height + offsetRightY;\n          newLeft = this.initialRect.left + offsetX;\n          break;\n        case \"top-right\":\n          newWidth = this.initialRect.width + offsetRightX;\n          newHeight = this.initialRect.height - offsetY;\n          newTop = this.initialRect.top + offsetY;\n          break;\n        case \"bottom-right\":\n          newWidth = this.initialRect.width + offsetRightX;\n          newHeight = this.initialRect.height + offsetRightY;\n          break;\n      }\n\n      // ✅ MIN/MAX kontrol\n      const exceedsMaxWidth = newWidth >= maxWidth;\n      const exceedsMaxHeight = newHeight >= maxHeight;\n      this.reachedMaxSize = exceedsMaxWidth || exceedsMaxHeight;\n\n      const belowMinWidth = newWidth <= minWidth;\n      const belowMinHeight = newHeight <= minHeight;\n      this.reachedMinSize = belowMinWidth || belowMinHeight;\n      // Yeni konumdan taşma olacak mı kontrol et\n      const exceedsRightEdge =\n        this.resizeHandle.includes(\"right\") &&\n        newLeft + newWidth >= visibleAreaWidth;\n      const exceedsBottomEdge =\n        this.resizeHandle.includes(\"bottom\") &&\n        newTop + newHeight >= visibleAreaHeight;\n      const exceedsLeftEdge =\n        this.resizeHandle.includes(\"left\") && newLeft <= 0;\n      const exceedsTopEdge = this.resizeHandle.includes(\"top\") && newTop <= 0;\n\n      const hitsViewportEdge =\n        exceedsRightEdge ||\n        exceedsBottomEdge ||\n        exceedsLeftEdge ||\n        exceedsTopEdge;\n\n      if (hitsViewportEdge) {\n        this.reachedMaxSize = true;\n        return; // ❌ Taşmasın → işlem yapma\n      }\n\n      // ✅ WIDTH & HEIGHT uygula\n      if (!this.reachedMinSize && !this.reachedMaxSize) {\n        newWidth = Math.max(newWidth, minWidth);\n        newHeight = Math.max(newHeight, minHeight);\n\n        this.calculatedWidth = `${newWidth}px`;\n        this.calculatedHeight = `${newHeight}px`;\n\n        this.applyStyleWithImportant(`${newHeight}px`, `${newWidth}px`);\n\n        this.setDraggableBodyHeight();\n      }\n\n      // ✅ LEFT uygula (sadece top-left & bottom-left senaryolarında)\n      if (\n        (this.resizeHandle === \"top-left\" ||\n          this.resizeHandle === \"bottom-left\") &&\n        newLeft >= 0 &&\n        newLeft + newWidth <= visibleAreaWidth &&\n        !this.reachedMinSize &&\n        !this.reachedMaxSize\n      ) {\n        this.applyStyleWithImportant(\n          undefined,\n          undefined,\n          undefined,\n          undefined,\n          `${newLeft}px`\n        );\n        this.calculateLeft = `${newLeft}px`;\n      }\n\n      // ✅ TOP uygula (sadece top-left & top-right senaryolarında)\n      if (\n        (this.resizeHandle === \"top-left\" ||\n          this.resizeHandle === \"top-right\") &&\n        newTop >= 0 &&\n        newTop + newHeight <= visibleAreaHeight &&\n        !this.reachedMinSize &&\n        !this.reachedMaxSize\n      ) {\n        this.applyStyleWithImportant(\n          undefined,\n          undefined,\n          undefined,\n          `${newTop}px`\n        );\n        this.calculateTop = `${newTop}px`;\n      }\n    },\n    resizeMouseUp() {\n      this.resizing = false;\n      this.reachedMinSize = false;\n      this.reachedMaxSize = false;\n      this.resizeHandle = \"\";\n      this.initialRect = null;\n      document.removeEventListener(\"mousemove\", this.resizeMouseMove);\n      document.removeEventListener(\"mouseup\", this.resizeMouseUp);\n      this.setDraggableBodyHeight();\n    },\n    clickEvent(e: Event) {\n      // var documentObject = document.getElementById(\"draggableDiv\");\n      // if (\n      //   documentObject &&\n      //   e.target instanceof HTMLElement &&\n      //   e.target &&\n      //   documentObject.contains(e.target)\n      // ) {\n      //   this.$emit(\"clickInside\");\n      // } else {\n      //   this.$emit(\"clickOutside\");\n      // }\n      const el = this.$refs[\"draggableDiv\"] as HTMLDivElement;\n      if (!el) return;\n\n      // ✅ Her türlü DOM node kabul edilir (HTMLElement, SVGElement, Text vs.)\n      if (e.target instanceof Node && el.contains(e.target)) {\n        this.$emit(\"clickInside\");\n      } else {\n        this.$emit(\"clickOutside\");\n      }\n    },\n    fixZIndex() {\n      if (\n        this.zIndex === null ||\n        this.zIndex === undefined ||\n        this.zIndex === \"\"\n      ) {\n        document.getElementsByName(\"draggableDiv\").forEach((element) => {\n          element.style.setProperty(\"z-index\", \"9\", \"important\");\n        });\n        this.element.style.setProperty(\"z-index\", \"12\", \"important\");\n      } else {\n        document.getElementsByName(\"draggableDiv\").forEach((element) => {\n          //zIndex must be an integer (proptan zIndex number verilmeli)\n          let strzIndex = <any>this.zIndex - 1;\n          element.style.setProperty(\n            \"z-index\",\n            strzIndex.toString(),\n            \"important\"\n          );\n        });\n        this.element.style.setProperty(\"z-index\", this.zIndex, \"important\");\n      }\n    },\n    configureForEditor() {\n      if (\n        this._renderingProps.isEditMode ||\n        this._renderingProps.isEditMode == null ||\n        this._renderingProps.isEditMode == undefined\n      )\n        (<HTMLDivElement>this.$refs[\"draggableDiv\"])!.style.setProperty(\n          \"position\",\n          \"relative\"\n        );\n      else\n        (<HTMLDivElement>this.$refs[\"draggableDiv\"])!.style.setProperty(\n          \"position\",\n          \"absolute\"\n        );\n    },\n  },\n  watch: {\n    pinned(val) {\n      this.internalPinned = val;\n    },\n    resizable(val) {\n      this.internalResizable = val;\n    },\n    isVisible(val) {\n      if (val) {\n        this.$nextTick(() => this.doInitialMeasurements());\n      }\n    },\n  },\n  beforeDestroy() {\n    this.resizeObserver?.disconnect();\n    document.removeEventListener(\"click\", this.clickEvent);\n  },\n});\n</script>\n<style scoped>\ndiv[name=\"draggableDiv\"] {\n  border-radius: 10px;\n  position: absolute;\n  background-color: #f1f1f1;\n  text-align: center;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n\n#draggableDivHeader {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.draggableDivBody {\n  overflow: auto;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.custom-icon {\n  font-size: 20px;\n}\n.b-close {\n  position: absolute !important;\n  right: 8px;\n  top: 15px;\n  cursor: pointer;\n}\n.fullscreen {\n  position: absolute !important;\n  right: 33px;\n  top: 15px;\n  cursor: pointer;\n}\n.fullscreenExit {\n  position: absolute !important;\n  right: 33px;\n  top: 15px;\n  cursor: pointer;\n}\n.minimize {\n  position: absolute !important;\n  right: 58px;\n  top: 20px;\n  cursor: pointer;\n}\n.resize-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n}\n.resize-handle.top-left {\n  border-left: solid 1px #000;\n  border-top: solid 1px #000;\n  border-top-left-radius: 10px;\n  top: 0;\n  left: 0;\n  cursor: nwse-resize;\n  z-index: 9999;\n  opacity: 0;\n}\n\n.resize-handle.top-right {\n  border-right: solid 1px #000;\n  border-top: solid 1px #000;\n  border-top-right-radius: 10px;\n  top: 0;\n  right: 0;\n  cursor: nesw-resize;\n  z-index: 9999;\n  opacity: 0;\n}\n\n.resize-handle.bottom-left {\n  border-left: solid 1px #000;\n  border-bottom: solid 1px #000;\n  border-bottom-left-radius: 10px;\n  bottom: 0;\n  left: 0;\n  cursor: nesw-resize;\n  z-index: 9999;\n  opacity: 0;\n}\n\n.resize-handle.bottom-right {\n  border-right: solid 1px #000;\n  border-bottom: solid 1px #000;\n  border-bottom-right-radius: 10px;\n  bottom: 0;\n  right: 0;\n  cursor: nwse-resize;\n  z-index: 9999;\n  opacity: 0;\n}\n\n@media (min-width: 320px) and (max-width: 767px) {\n  div[name=\"draggableDiv\"] {\n    width: 100% !important;\n    height: 100% !important;\n  }\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_style_index_0_id_7354eac4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"class":"plateauStudioClass"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_style_index_0_id_7354eac4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_style_index_0_id_7354eac4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_style_index_0_id_7354eac4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_style_index_0_id_7354eac4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/quick/QLightBox.vue":
/*!********************************************!*\
  !*** ./src/components/quick/QLightBox.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QLightBox_vue_vue_type_template_id_7354eac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QLightBox.vue?vue&type=template&id=7354eac4&scoped=true& */ "./src/components/quick/QLightBox.vue?vue&type=template&id=7354eac4&scoped=true&");
/* harmony import */ var _QLightBox_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QLightBox.vue?vue&type=script&lang=ts& */ "./src/components/quick/QLightBox.vue?vue&type=script&lang=ts&");
/* harmony import */ var _QLightBox_vue_vue_type_style_index_0_id_7354eac4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css& */ "./src/components/quick/QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QLightBox_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QLightBox_vue_vue_type_template_id_7354eac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QLightBox_vue_vue_type_template_id_7354eac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7354eac4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QLightBox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QLightBox.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./src/components/quick/QLightBox.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QLightBox.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./src/components/quick/QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_style_index_0_id_7354eac4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=style&index=0&id=7354eac4&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/quick/QLightBox.vue?vue&type=template&id=7354eac4&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/components/quick/QLightBox.vue?vue&type=template&id=7354eac4&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_template_id_7354eac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_template_id_7354eac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QLightBox_vue_vue_type_template_id_7354eac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QLightBox.vue?vue&type=template&id=7354eac4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=template&id=7354eac4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=template&id=7354eac4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLightBox.vue?vue&type=template&id=7354eac4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    {
      ref: "draggableDiv",
      class: { class: true, minimized: _vm.isMinimized },
      style: [_vm.zIndex ? { zIndex: _vm.zIndex } : {}],
      attrs: { id: "draggableDiv", name: "draggableDiv" },
    },
    [
      _c(
        "div",
        _vm._g(
          {
            ref: "draggableDivHeader",
            style: [
              _vm.border
                ? {
                    "box-shadow":
                      "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                  }
                : { "box-shadow": "none" },
              _vm.internalPinned ? { cursor: "auto" } : { cursor: "move" },
              { padding: _vm.headerPadding },
            ],
            attrs: { id: "draggableDivHeader" },
          },
          {
            mousedown: _vm.dragMouseDownHandler,
            touchstart: _vm.dragMouseDownHandler,
          }
        ),
        [
          _c("div", [_vm._t("header")], 2),
          _vm._v(" "),
          _c(
            "v-icon",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.closeBtn,
                  expression: "closeBtn",
                },
              ],
              staticClass: "b-close custom-icon",
              on: { click: _vm.closePopup },
            },
            [_vm._v("mdi-close")]
          ),
          _vm._v(" "),
          _c("v-icon", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.fullScreen !== false,
                expression: "fullScreen !== false",
              },
            ],
            class: {
              "custom-icon": true,
              fullscreen: !_vm.isFullScreen,
              fullscreenExit: _vm.isFullScreen,
            },
            domProps: {
              textContent: _vm._s(
                _vm.isFullScreen ? "mdi-dock-window" : "mdi-crop-square"
              ),
            },
            on: { click: _vm.toggleFullscreen },
          }),
          _vm._v(" "),
          _c(
            "v-icon",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.minimizable,
                  expression: "minimizable",
                },
              ],
              staticClass: "minimize custom-icon",
              class: {},
              on: { click: _vm.minimizeWindow },
            },
            [_vm._v(_vm._s("mdi-minus") + "\n    ")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.isFullScreen && _vm.internalResizable,
            expression: "!isFullScreen && internalResizable",
          },
        ],
        staticClass: "resize-handle top-left",
        on: {
          mousedown: function ($event) {
            $event.stopPropagation()
            return _vm.resizeMouseDown($event, "top-left")
          },
        },
      }),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.isFullScreen && _vm.internalResizable,
            expression: "!isFullScreen && internalResizable",
          },
        ],
        staticClass: "resize-handle top-right",
        on: {
          mousedown: function ($event) {
            $event.stopPropagation()
            return _vm.resizeMouseDown($event, "top-right")
          },
        },
      }),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.isFullScreen && _vm.internalResizable,
            expression: "!isFullScreen && internalResizable",
          },
        ],
        staticClass: "resize-handle bottom-left",
        on: {
          mousedown: function ($event) {
            $event.stopPropagation()
            return _vm.resizeMouseDown($event, "bottom-left")
          },
        },
      }),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.isFullScreen && _vm.internalResizable,
            expression: "!isFullScreen && internalResizable",
          },
        ],
        staticClass: "resize-handle bottom-right",
        on: {
          mousedown: function ($event) {
            $event.stopPropagation()
            return _vm.resizeMouseDown($event, "bottom-right")
          },
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        { ref: "draggableDivBody", staticClass: "draggableDivBody" },
        [_vm._t("content")],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QLightBox_vue.js.map?ver=3.1.2-4