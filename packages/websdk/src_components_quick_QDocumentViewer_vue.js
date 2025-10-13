"use strict";
(this["webpackChunk_stechquick_websdk"] = this["webpackChunk_stechquick_websdk"] || []).push([["src_components_quick_QDocumentViewer_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pdfvuer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfvuer */ "./node_modules/pdfvuer/dist/pdfvuer.umd.js");
/* harmony import */ var pdfvuer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfvuer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var utif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utif */ "../../node_modules/utif/UTIF.js");
/* harmony import */ var utif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(utif__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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



var ROTATE_STEP = 90;
var ROTATE_MAX = 360;
var ZOOM_STEP = 0.1;
var ZOOM_MIN = 0.2;
var ZOOM_MAX = 2;
var MIN_WIDTH_STEP = 81.6;
var TIFF_TYPES = ["tiff", "tif"];
var IMAGE_TYPES = ["jpeg", "jpg", "gif", "png", "apng", "svg", "bmp", "ico"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
    name: "QDocumentViewer",
    components: {
        pdf: (pdfvuer__WEBPACK_IMPORTED_MODULE_0___default()),
    },
    props: {
        src: {
            default: "",
            type: [String, Object],
        },
        height: {
            type: String,
        },
        width: {
            type: String,
        },
        scale: {
            type: String,
        },
        showToolBar: {
            type: Boolean,
            default: true,
        },
        pdfToolbarBackgroundColor: {
            type: String,
            default: "#fafafa",
        },
        pdfBackgroundColor: {
            type: String,
            default: "#eeeeee",
        },
        hidePagination: {
            type: Boolean,
            default: false,
        },
        hideDescription: {
            type: Boolean,
            default: false,
        },
        hideDownload: {
            type: Boolean,
            default: false,
        },
        hideRotate: {
            type: Boolean,
            default: false,
        },
        hideZoom: {
            type: Boolean,
            default: false,
        },
        loadingContent: {
            type: String,
            default: "Loading...",
        },
        displayOnScroll: {
            type: Boolean,
            default: false,
        },
        fileDescription: {
            type: String,
        },
        showPrint: {
            type: Boolean,
            default: false,
        },
        _renderingProps: {
            type: Object,
            default: null,
        },
    },
    data: function () {
        return {
            show: true,
            loadedRatio: 0,
            numPages: 0,
            page: 1,
            turn: 0,
            showToolbar: true,
            tiffLoading: false,
            zoomVal: this.scale != undefined && this.scale != null
                ? Number(parseFloat(this.scale).toFixed(2))
                : 1.0,
            rotateVal: 0,
            loadedPages: 1,
            docType: undefined,
            url: this.src,
            localLanguage: "en",
            pageTitle: "Page",
            pdfKey: 0,
            currentMinWidth: 816,
            dataType: "url",
            tiffBufferData: null,
            tifIfds: [],
        };
    },
    mounted: function () {
        this.docType = this.getType();
        var localLanguage = this._renderingProps
            .context()
            .GetItemSingle("Dory")
            .GetLRType()
            .substring(0, 2);
        if (localLanguage === "tr") {
            this.pageTitle = "Sayfa";
        }
        else {
            this.pageTitle = "Page";
        }
    },
    watch: {
        src: function () {
            this.pdfKey = new Date().valueOf();
            this.page = 1;
            this.loadedPages = 1;
            this.docType = this.getType();
        },
        scale: function () {
            this.zoomVal = Number(parseFloat(this.scale).toFixed(2));
        },
        page: function (newVal) {
            if (newVal === "") {
                return;
            }
            if (this.page > this.numPages) {
                this.page = this.numPages;
            }
            if (this.page < 1) {
                this.page = 1;
            }
            if (this.page <= this.numPages && this.page > this.loadedPages) {
                this.loadedPages = this.page;
            }
            if (this.docType === "tiff")
                this.renderTiffPage();
        },
        rotateVal: function (newVal) {
            if (newVal < 0) {
                this.rotateVal = 270;
            }
            else if (newVal >= 360) {
                this.rotateVal = 0;
            }
            if (this.docType === "tiff")
                this.renderTiffPage();
        },
    },
    created: function () {
        this.onFrameScrollBottom();
    },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    },
    methods: {
        isTiffBuffer: function (buffer) {
            var bytes = new Uint8Array(buffer);
            return ((bytes[0] === 0x49 && bytes[1] === 0x49 && bytes[2] === 0x2A && bytes[3] === 0x00) || // little endian
                (bytes[0] === 0x4D && bytes[1] === 0x4D && bytes[2] === 0x00 && bytes[3] === 0x2A) // big endian
            );
        },
        loadTiff: function (dataType) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.tiffLoading = true;
                            _a = this;
                            return [4 /*yield*/, this.getTiffBuffer(dataType, this.src)];
                        case 1:
                            _a.tiffBufferData = _b.sent();
                            this.tifIfds = utif__WEBPACK_IMPORTED_MODULE_1__.decode(this.tiffBufferData);
                            this.numPages = this.tifIfds.length;
                            this.$nextTick(function () {
                                var canvas = _this.$refs.tiffContainerRef;
                                if (!canvas) {
                                    setTimeout(function () {
                                        _this.renderTiffPage();
                                        _this.tiffLoading = false;
                                    }, 0);
                                }
                                else {
                                    _this.renderTiffPage();
                                    _this.tiffLoading = false;
                                }
                            });
                            return [2 /*return*/];
                    }
                });
            });
        },
        getTiffBuffer: function (type, src) {
            return __awaiter(this, void 0, void 0, function () {
                var response, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(type === "url")) return [3 /*break*/, 3];
                            return [4 /*yield*/, fetch(src)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.arrayBuffer()];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            if (type === "base64") {
                                data = src.replace(/^data:image\/\w+;base64,/, "");
                                return [2 /*return*/, this.base64ToArrayBuffer(data)];
                            }
                            return [2 /*return*/, src];
                    }
                });
            });
        },
        renderTiffPage: function () {
            var _this = this;
            var canvas = this.$refs.tiffContainerRef;
            if (!canvas)
                return;
            var scale = this.zoomVal || 1;
            var rotate = ((this.rotateVal % ROTATE_MAX) + ROTATE_MAX) % ROTATE_MAX;
            var pages = this.hidePagination ? this.tifIfds : [this.tifIfds[this.page - 1]];
            pages.forEach(function (ifd) {
                utif__WEBPACK_IMPORTED_MODULE_1__.decodeImage(_this.tiffBufferData, ifd);
                var rgba = utif__WEBPACK_IMPORTED_MODULE_1__.toRGBA8(ifd);
                var _a = __read([ifd.width * scale, ifd.height * scale], 2), w = _a[0], h = _a[1];
                if (rotate === 90 || rotate === 270) {
                    canvas.width = h;
                    canvas.height = w;
                }
                else {
                    canvas.width = w;
                    canvas.height = h;
                }
                var ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.save();
                    ctx.translate(canvas.width / 2, canvas.height / 2);
                    ctx.rotate((rotate * Math.PI) / 180);
                    ctx.translate(-w / 2, -h / 2);
                    var imageData = new ImageData(new Uint8ClampedArray(rgba), ifd.width, ifd.height);
                    createImageBitmap(imageData).then(function (bitmap) {
                        // Clear canvas
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(bitmap, 0, 0, w, h);
                        // Restore original state
                        ctx.restore();
                    });
                }
                //container.appendChild(canvas);
            });
        },
        base64ToArrayBuffer: function (base64) {
            var binary = window.atob(base64);
            var len = binary.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++)
                bytes[i] = binary.charCodeAt(i);
            return bytes.buffer;
        },
        createPdf: function () {
            var _this = this;
            var _a, _b;
            var takenSrc;
            var isDataBase64Encoded = false;
            if (this.src.startsWith("data:application/pdf;base64,")) {
                takenSrc = (_a = this.src.split("data:application/pdf;base64,")) === null || _a === void 0 ? void 0 : _a[1];
                isDataBase64Encoded = true;
            }
            else if (this.src.startsWith("data:application/pdf,")) {
                takenSrc = (_b = this.src.split("data:application/pdf,")) === null || _b === void 0 ? void 0 : _b[1];
                isDataBase64Encoded = true;
            }
            else {
                takenSrc = this.src;
                isDataBase64Encoded = false;
            }
            if (isDataBase64Encoded) {
                var blob = this.base64ToBlob(takenSrc, "application/pdf");
                takenSrc = URL.createObjectURL(blob);
            }
            this.url = takenSrc;
            pdfvuer__WEBPACK_IMPORTED_MODULE_0___default().createLoadingTask(takenSrc).then(function (pdf) {
                _this.numPages = pdf.numPages;
            }).catch(function (error) {
                console.error("DocumentViewer createLoadingTask promise.catch..", error);
            });
        },
        downloadTiff: function () {
            var _this = this;
            var blobPromise;
            if (this.dataType === "url") {
                blobPromise = fetch(this.src).then(function (res) { return res.blob(); });
            }
            else if (this.dataType === "base64") {
                var base64Data = this.src.replace(/^data:image\/tiff;base64,/, "");
                var buffer = this.base64ToAB(base64Data);
                blobPromise = Promise.resolve(new Blob([buffer], { type: "image/tiff" }));
            }
            else {
                blobPromise = Promise.resolve(new Blob([this.src], { type: "image/tiff" }));
            }
            blobPromise.then(function (blob) {
                var _a;
                var objectURL = URL.createObjectURL(blob);
                var link = document.createElement("a");
                link.href = objectURL;
                link.download = (_a = _this.fileDescription) !== null && _a !== void 0 ? _a : "fileData.tiff";
                link.click();
                URL.revokeObjectURL(objectURL);
            });
        },
        base64ToAB: function (base64) {
            var binary_string = window.atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        },
        base64ToBlob: function (base64, type) {
            if (type === void 0) { type = "application/octet-stream"; }
            var binStr = atob(base64);
            var len = binStr.length;
            var arr = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                arr[i] = binStr.charCodeAt(i);
            }
            return new Blob([arr], { type: type });
        },
        focusSelectedPage: function () {
            if (!this.displayOnScroll) {
                return;
            }
            if (this.page > this.numPages) {
                this.page = 1;
                var focusedPage = document.getElementById("pdf-page-1");
                if (focusedPage) {
                    focusedPage.scrollIntoView();
                }
            }
            else {
                var focusedPage = document.getElementById("pdf-page-" + this.page.toString());
                if (focusedPage) {
                    focusedPage.scrollIntoView();
                }
            }
        },
        zoomIn: function () {
            if (this.zoomVal < ZOOM_MAX) {
                this.zoomVal += ZOOM_STEP;
                this.currentMinWidth += MIN_WIDTH_STEP;
                if (this.docType === "tiff")
                    this.renderTiffPage();
            }
        },
        zoomOut: function () {
            if (this.zoomVal > ZOOM_MIN) {
                this.zoomVal -= ZOOM_STEP;
                this.currentMinWidth -= MIN_WIDTH_STEP;
                if (this.docType === "tiff")
                    this.renderTiffPage();
            }
        },
        nextPage: function () {
            this.page += this.page < this.numPages ? 1 : 0;
        },
        previousPage: function () {
            this.page -= this.page > 0 ? 1 : 0;
        },
        rotate: function () {
            this.rotateVal = (this.rotateVal - ROTATE_STEP + ROTATE_MAX) % ROTATE_MAX;
            if (this.docType === "tiff")
                this.renderTiffPage();
        },
        goToPage: function (pageNumber) {
            if (pageNumber >= 1 && pageNumber <= this.numPages) {
                this.page = pageNumber;
            }
        },
        downloadPdf: function () {
            var _this = this;
            fetch(this.url)
                .then(function (res) { return res.blob(); }) // Gets the response and returns it as a blob
                .then(function (blob) {
                var _a;
                var objectURL = URL.createObjectURL(blob);
                var link = document.createElement("a");
                link.href = objectURL;
                link.download = (_a = _this.fileDescription) !== null && _a !== void 0 ? _a : "fileData"; //Name of the file to be downloaded
                link.dispatchEvent(new MouseEvent("click"));
            });
        },
        printPdf: function () {
            var _this = this;
            if (this.src.startsWith("data:application/pdf;base64,") ||
                this.src.startsWith("data:application/pdf,")) {
                var printIframe_1 = this.$refs.printIframe;
                if (printIframe_1) {
                    printIframe_1.src = this.url;
                    printIframe_1.onload = function () {
                        var _a;
                        (_a = printIframe_1.contentWindow) === null || _a === void 0 ? void 0 : _a.print();
                    };
                }
            }
            else {
                fetch(this.src)
                    .then(function (response) { return response.blob(); })
                    .then(function (blob) {
                    var objectURL = URL.createObjectURL(blob);
                    var printIframe = _this.$refs.printIframe;
                    if (printIframe) {
                        printIframe.src = objectURL;
                        printIframe.onload = function () {
                            var _a;
                            (_a = printIframe.contentWindow) === null || _a === void 0 ? void 0 : _a.print();
                            URL.revokeObjectURL(objectURL);
                        };
                    }
                });
            }
        },
        getType: function () {
            var _a;
            var val = this.src;
            if ((_a = val === null || val === void 0 ? void 0 : val.startsWith) === null || _a === void 0 ? void 0 : _a.call(val, "data:")) {
                var mediaType = val
                    .split(",")[0]
                    .split(";")[0]
                    .split(":")[1]
                    .split("/");
                if (TIFF_TYPES.includes(mediaType[1])) {
                    this.dataType = "base64";
                    this.loadTiff(this.dataType);
                    return "tiff";
                }
                else if (mediaType[0] === "image") {
                    return "img";
                }
                else if (mediaType[1] === "pdf") {
                    this.createPdf();
                    return "pdf";
                }
                return mediaType[1];
            }
            else if (this.src instanceof ArrayBuffer) {
                if (this.isTiffBuffer(this.src)) {
                    this.dataType = "arrayBuffer";
                    this.loadTiff(this.dataType);
                    return "tiff";
                }
                return;
            }
            else {
                if (!val || val === "")
                    return;
                var parsedType = new URL(val).pathname.split(".").pop() || "";
                if (["html", "htm"].includes(parsedType)) {
                    return "html";
                }
                else if (IMAGE_TYPES.includes(parsedType)) {
                    return "img";
                }
                else if (parsedType === "pdf" ||
                    (parsedType === null || parsedType === void 0 ? void 0 : parsedType.replace(/\s/g, "").startsWith("pdf?"))) {
                    this.createPdf();
                    return "pdf";
                }
                else if (TIFF_TYPES.includes(parsedType)) {
                    this.dataType = "url";
                    this.loadTiff(this.dataType);
                    return "tiff";
                }
                return parsedType;
            }
        },
        onFrameScrollBottom: function () {
            var self = this;
            var scrolledToBottom = function (e) {
                if (e.data == "scrolledToBottom") {
                    self.$emit("scrolledToBottom");
                }
            };
            window.removeEventListener("message", scrolledToBottom, false);
            window.addEventListener("message", scrolledToBottom, false);
        },
        handleScroll: function (_a) {
            var _b = _a.target, scrollTop = _b.scrollTop, clientHeight = _b.clientHeight, scrollHeight = _b.scrollHeight, offsetHeight = _b.lastChild.offsetHeight;
            if (this.displayOnScroll && this.showToolBar) {
                var pageVal = parseInt(Math.ceil(Math.round(scrollTop) / offsetHeight).toString());
                this.page =
                    pageVal == 0 ? 1 : pageVal >= this.numPages ? this.numPages : pageVal;
            }
            if (Math.round(scrollTop) + clientHeight + 1 >= scrollHeight) {
                if (this.displayOnScroll && this.numPages > this.loadedPages) {
                    this.loadedPages++;
                }
                if (scrollTop > 0) {
                    this.$emit("scrollEnd");
                }
            }
        },
    },
}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.q-document-html[data-v-0474cfbc] {\n  border: none;\n  width: 100%;\n  height: 100%;\n}\n.q-document-img[data-v-0474cfbc] {\n  width: 100%;\n}\n.q-document-pdf-wrapper>div>.ratio[data-v-0474cfbc] {\n  background-color: green;\n  color: white;\n  text-align: center;\n}\n.q-document-pdf-wrapper>input[data-v-0474cfbc] {\n  width: 5em;\n}\n.q-document-pdf[data-v-0474cfbc] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n}\n.q-document-pdf-container[data-v-0474cfbc] {\n  width: 100%;\n  overflow: auto;\n}\ninput[type=\"number\"][data-v-0474cfbc]::-webkit-inner-spin-button {\n  opacity: 1;\n}\ninput[type=\"number\"][data-v-0474cfbc] {\n  width: 54px;\n  height: 28px;\n  outline-style: none;\n  background-color: #eeeeee;\n  color: #212121;\n  border-radius: 5px;\n  text-align: center;\n}\n.q-document-zoom-options-list[data-v-0474cfbc] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.q-document-zoom-field[data-v-0474cfbc] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.q-document-toolbar-right-options-wrapper[data-v-0474cfbc] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n.q-document-toolbar-left-options-wrapper[data-v-0474cfbc] {\n  display: flex;\n  align-items: center;\n}\n.q-document-toolbar-wrapper[data-v-0474cfbc] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 44px;\n  border-bottom: 1px solid #e0e0e0;\n  align-items: center;\n  position: sticky;\n  z-index: 1;\n  top: 0px;\n  left: 0px;\n}\n.q-document-zoom-options[data-v-0474cfbc] {\n  display: flex;\n  background-color: #eeeeee;\n  overflow: hidden;\n  border-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  height: 28px;\n}\n.q-document-icon[data-v-0474cfbc] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  width: 30px;\n}\n.q-document-icon[data-v-0474cfbc]:hover {\n  background-color: #e3e3e3;\n  border-radius: 5px;\n}\n.q-document-color-text-content[data-v-0474cfbc] {\n  color: #212121;\n}\n.q-document-zoom-buttons[data-v-0474cfbc] {\n  width: 28px;\n  height: 28px;\n}\n#q-document-download-icon[data-v-0474cfbc] {\n  color: #212121;\n}\n#q-document-rotate-icon[data-v-0474cfbc] {\n  color: #212121;\n}\n#q-document-zoom-in-icon[data-v-0474cfbc] {\n  color: #757575;\n}\n#q-document-zoom-out-icon[data-v-0474cfbc] {\n  color: #757575;\n}\n.q-document-toolbar-part-left[data-v-0474cfbc],\n.q-document-toolbar-part-center[data-v-0474cfbc],\n.q-document-toolbar-part-right[data-v-0474cfbc] {\n  flex: 25%;\n}\n@media (max-width: 644px) {\n.q-document-toolbar-part-center[data-v-0474cfbc],\n  .q-document-toolbar-part-right[data-v-0474cfbc] {\n    flex: 20%;\n}\n}\n@media (max-width: 501px) {\n.q-document-toolbar-part-center[data-v-0474cfbc],\n  .q-document-toolbar-part-right[data-v-0474cfbc] {\n    flex: 10%;\n}\n}\n.tiff-container[data-v-0474cfbc] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  align-items: center;\n}\n.tiff-toolbar[data-v-0474cfbc] {\n  background-color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 44px;\n  border-bottom: 1px solid #e0e0e0;\n  align-items: center;\n  position: sticky;\n  z-index: 1;\n  top: 0px;\n  left: 0px;\n  justify-content: flex-end;\n}\n", "",{"version":3,"sources":["webpack://./src/components/quick/QDocumentViewer.vue"],"names":[],"mappings":";AAuvBA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,0CAAA;EACA,aAAA;EACA,uBAAA;AACA;AAEA;EACA,WAAA;EACA,cAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;AACA;AAEA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,mBAAA;AACA;AAEA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;AACA;AAEA;EACA,aAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AACA;AAEA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;AACA;AAEA;EACA,yBAAA;EACA,kBAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;;;EAGA,SAAA;AACA;AAEA;AAEA;;IAEA,SAAA;AACA;AACA;AAEA;AAEA;;IAEA,SAAA;AACA;AACA;AAEA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;;EAEA,mBAAA;AACA;AAEA;EACA,oCAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;EACA,yBAAA;AACA","sourcesContent":["<template>\n  <div :style=\"{ height: height, width: '100%' }\">\n    <div\n      style=\"width: 100%; justify-content: center; height: 100%;\"\n    >\n     <div v-if=\"docType === 'tiff'\">\n        <div v-if=\"showToolBar\" class=\"tiff-toolbar\">\n          <div class=\"q-document-toolbar-wrapper\">\n            <div class=\"q-document-toolbar-part-left\">\n              <div class=\"q-document-toolbar-left-options-wrapper\" v-if=\"!hidePagination\">\n                    <span class=\"ml-1 mr-1 q-document-color-text-content\">\n                        {{ pageTitle }}\n                    </span>\n                    <input :min=\"1\" :max=\"numPages\" v-model.number=\"page\"  type=\"number\" oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');\" @blur=\"focusSelectedPage\"\n                    />\n                    <span class=\"ml-1 q-document-color-text-content\">\n                      / {{ numPages }}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"q-document-toolbar-part-rightq-document-toolbar-right-options-wrapper mr-1\" style=\"justify-content: end; display: flex\">\n            <div class=\"q-document-icon\" v-if=\"!hideDownload\">\n              <v-icon id=\"q-document-download-icon\" style=\"cursor: pointer\" size=\"18\" @click=\"downloadTiff\">\n                mdi-tray-arrow-down\n              </v-icon>\n            </div>\n            <div class=\"q-document-icon mr-4\" v-if=\"!hideRotate\">\n              <v-icon id=\"q-document-download-icon\" style=\"cursor: pointer\" size=\"18\" @click=\"rotateVal -= 90\">\n                mdi-format-rotate-90\n              </v-icon>\n            </div>\n            <div class=\"q-document-zoom-options\" v-if=\"!hideZoom\">\n              <ul class=\"q-document-zoom-options-list\">\n                <li>\n                  <div class=\"q-document-zoom-field\">\n                    <span class=\"ml-2 mr-3 q-document-color-text-content\">\n                      {{ Number.parseInt(zoomVal * 100).toFixed(0) }}%\n                    </span>\n                  </div>\n                </li>\n                <li @click=\"zoomOut\">\n                  <div class=\"q-document-zoom-buttons q-document-zoom-field\" id=\"q-document-zoom-out-field\"\n                    style=\"cursor: pointer\">\n                    <v-icon id=\"q-document-zoom-out-icon\" size=\"18\">\n                      mdi-minus\n                    </v-icon>\n                  </div>\n                </li>\n                <li class=\"q-document-zoom-field\" @click=\"zoomIn\">\n                  <div class=\"q-document-zoom-buttons q-document-zoom-field\" id=\"q-document-zoom-in-field\"\n                    style=\"cursor: pointer\">\n                    <v-icon id=\"q-document-zoom-in-icon\" size=\"18\">\n                      mdi-plus\n                    </v-icon>\n                  </div>\n                </li>\n              </ul>\n            </div>\n            </div>\n          </div>\n        </div>\n        <div ref=\"tiffContainer\" class=\"tiff-container\" :key=\"'tiff-' + src\">\n          <div v-if=\"tiffLoading\" class=\"q-document-loading\">\n            {{ loadingContent }}\n          </div>\n          <canvas v-show=\"!tiffLoading\" ref=\"tiffContainerRef\" id=\"tiffCanvas\"></canvas>\n        </div>\n      </div>\n\n      <div v-if=\"show\" style=\"height: 100%\">\n        <img\n          v-if=\"docType === 'img'\"\n          :src=\"src\"\n          class=\"q-document-img\"\n          :height=\"height\"\n        />\n        <iframe\n          v-if=\"docType === 'html'\"\n          ref=\"iframe\"\n          :src=\"src\"\n          id=\"q-document-html\"\n          class=\"q-document-html\"\n          title=\"QDocumentViewer IFrame\"\n          :height=\"height\"\n        />\n        <div v-if=\"docType === 'pdf'\" class=\"q-document-pdf-wrapper\">\n          <div\n            class=\"q-document-pdf-container\"\n            :style=\"{\n              transform: 'rotate(' + turn + 'turn)',\n              height: !displayOnScroll\n                ? height\n                : height != undefined\n                ? height\n                : '100vh',\n            }\"\n            @scroll=\"handleScroll\"\n          >\n            <template v-if=\"showToolBar\">\n              <div\n                class=\"q-document-toolbar-wrapper\"\n                v-if=\"showToolBar\"\n                :style=\"`background-color:${pdfToolbarBackgroundColor};`\"\n              >\n                <div class=\"q-document-toolbar-part-left\">\n                  <div\n                    class=\"q-document-toolbar-left-options-wrapper\"\n                    v-if=\"!hidePagination\"\n                  >\n                    <span class=\"ml-1 mr-1 q-document-color-text-content\">\n                      {{ pageTitle }}\n                    </span>\n                    <input\n                      :min=\"1\"\n                      :max=\"numPages\"\n                      v-model.number=\"page\"\n                      type=\"number\"\n                      oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');\"\n                      @blur=\"focusSelectedPage\"\n                    />\n                    <span class=\"ml-1 q-document-color-text-content\">\n                      / {{ numPages }}</span\n                    >\n                  </div>\n                </div>\n\n                <div\n                  class=\"q-document-toolbar-part-center\"\n                  style=\"justify-content: center; display: flex\"\n                >\n                  <span\n                    v-if=\"!hideDescription\"\n                    class=\"q-document-color-text-content\"\n                    style=\"text-align: center\"\n                    >{{ fileDescription }}</span\n                  >\n                </div>\n\n                <div\n                  class=\"\n                    q-document-toolbar-part-right\n                    q-document-toolbar-right-options-wrapper\n                    mr-1\n                  \"\n                  style=\"justify-content: end; display: flex\"\n                >\n                  <div class=\"q-document-icon mr-2\" v-if=\"showPrint\">\n                    <v-icon \n                      id=\"q-document-print-icon\" \n                      style=\"cursor: pointer\" \n                      size=\"18\" \n                      @click=\"printPdf\"\n                    >\n                    mdi-printer\n                  </v-icon>\n                  </div>\n                  <div class=\"q-document-icon mr-2\" v-if=\"!hideDownload\">\n                    <v-icon\n                      id=\"q-document-download-icon\"\n                      style=\"cursor: pointer\"\n                      size=\"18\"\n                      @click=\"downloadPdf\"\n                    >\n                      mdi-tray-arrow-down\n                    </v-icon>\n                  </div>\n                  <div class=\"q-document-icon mr-4\" v-if=\"!hideRotate\">\n                    <v-icon\n                      id=\"q-document-download-icon\"\n                      style=\"cursor: pointer\"\n                      size=\"18\"\n                      @click=\"rotateVal -= 90\"\n                    >\n                      mdi-format-rotate-90\n                    </v-icon>\n                  </div>\n                  <div class=\"q-document-zoom-options\" v-if=\"!hideZoom\">\n                    <ul class=\"q-document-zoom-options-list\">\n                      <li>\n                        <div class=\"q-document-zoom-field\">\n                          <span class=\"ml-2 mr-3 q-document-color-text-content\">\n                            {{ Number.parseInt(zoomVal * 100).toFixed(0) }}%\n                          </span>\n                        </div>\n                      </li>\n\n                      <li @click=\"zoomOut\">\n                        <div\n                          class=\"q-document-zoom-buttons q-document-zoom-field\"\n                          id=\"q-document-zoom-out-field\"\n                          style=\"cursor: pointer\"\n                        >\n                          <v-icon id=\"q-document-zoom-out-icon\" size=\"18\">\n                            mdi-minus\n                          </v-icon>\n                        </div>\n                      </li>\n                      <li class=\"q-document-zoom-field\" @click=\"zoomIn\">\n                        <div\n                          class=\"q-document-zoom-buttons q-document-zoom-field\"\n                          id=\"q-document-zoom-in-field\"\n                          style=\"cursor: pointer\"\n                        >\n                          <v-icon id=\"q-document-zoom-in-icon\" size=\"18\">\n                            mdi-plus\n                          </v-icon>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </template>\n\n            <pdf\n              v-if=\"showToolBar && !displayOnScroll\"\n              ref=\"pdf\"\n              :src=\"url\"\n              :key=\"pdfKey\"\n              class=\"q-document-pdf\"\n              :style=\"`background-color:${pdfBackgroundColor}; min-width:${currentMinWidth}px`\"\n              :page=\"page\"\n              @num-pages=\"numPages = $event\"\n              :scale=\"zoomVal\"\n              :height=\"height\"\n              :text=\"false\"\n              :rotate=\"rotateVal\"\n              :id=\"'pdf-page-' + page\"\n            >\n              <template slot=\"loading\">{{ loadingContent }}</template>\n            </pdf>\n            <pdf\n              v-else-if=\"displayOnScroll\"\n              ref=\"pdf\"\n              :src=\"url\"\n              :key=\"pdfKey + i\"\n              class=\"q-document-pdf\"\n              :style=\"`background-color:${pdfBackgroundColor};`\"\n              :page=\"page\"\n              :scale=\"zoomVal\"\n              :rotate=\"rotateVal\"\n              :height=\"height\"\n              :text=\"false\"\n              :id=\"'pdf-page-' + i\"\n              v-for=\"i in loadedPages\"\n            >\n              <template slot=\"loading\">{{ loadingContent }}</template>\n            </pdf>\n            <pdf\n              v-else\n              ref=\"pdf\"\n              :src=\"url\"\n              :key=\"pdfKey + i\"\n              class=\"q-document-pdf\"\n              :style=\"`background-color:${pdfBackgroundColor};`\"\n              :page=\"i\"\n              :scale=\"zoomVal\"\n              :rotate=\"rotateVal\"\n              :height=\"height\"\n              :text=\"false\"\n              :id=\"'pdf-page-' + i\"\n              v-for=\"i in numPages\"\n            >\n              <template slot=\"loading\">{{ loadingContent }}</template>\n            </pdf>\n          </div>\n        </div>\n      </div>\n    </div>\n    <iframe ref=\"printIframe\" frameborder=\"0\" style=\"display:none;\" v-if=\"showPrint\"></iframe>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport pdf from \"pdfvuer\";\nimport Vue from \"vue\";\nimport * as UTIF from \"utif\";\nconst ROTATE_STEP = 90;\nconst ROTATE_MAX = 360;\nconst ZOOM_STEP = 0.1;\nconst ZOOM_MIN = 0.2;\nconst ZOOM_MAX = 2;\nconst MIN_WIDTH_STEP = 81.6;\nconst TIFF_TYPES = [\"tiff\", \"tif\"];\nconst IMAGE_TYPES = [\"jpeg\", \"jpg\", \"gif\", \"png\", \"apng\", \"svg\", \"bmp\", \"ico\"];\nexport default Vue.extend({\n  name: \"QDocumentViewer\",\n  components: {\n    pdf,\n  },\n  props: {\n    src: {\n      default: \"\",\n      type: [String, Object],\n    },\n    height: {\n      type: String,\n    },\n    width: {\n      type: String,\n    },\n    scale: {\n      type: String,\n    },\n    showToolBar: {\n      type: Boolean,\n      default: true,\n    },\n    pdfToolbarBackgroundColor: {\n      type: String,\n      default: \"#fafafa\",\n    },\n    pdfBackgroundColor: {\n      type: String,\n      default: \"#eeeeee\",\n    },\n    hidePagination: {\n      type: Boolean,\n      default: false,\n    },\n    hideDescription: {\n      type: Boolean,\n      default: false,\n    },\n    hideDownload: {\n      type: Boolean,\n      default: false,\n    },\n    hideRotate: {\n      type: Boolean,\n      default: false,\n    },\n    hideZoom: {\n      type: Boolean,\n      default: false,\n    },\n    loadingContent: {\n      type: String,\n      default: \"Loading...\",\n    },\n    displayOnScroll: {\n      type: Boolean,\n      default: false,\n    },\n    fileDescription: {\n      type: String,\n    },\n    showPrint: {\n      type: Boolean,\n      default: false,\n    },\n    _renderingProps: {\n      type: Object,\n      default: null,\n    },\n  },\n  data() {\n    return {\n      show: true,\n      loadedRatio: 0,\n      numPages: 0,\n      page: 1,\n      turn: 0,\n      showToolbar: true,\n      tiffLoading: false,\n      zoomVal:\n        this.scale != undefined && this.scale != null\n          ? Number(parseFloat(this.scale).toFixed(2))\n          : 1.0,\n      rotateVal: 0,\n      loadedPages: 1,\n      docType: undefined,\n      url: this.src,\n      localLanguage: \"en\",\n      pageTitle: \"Page\",\n      pdfKey: 0,\n      currentMinWidth: 816,\n      dataType: \"url\" as \"base64\" | \"arrayBuffer\" | \"url\",\n      tiffBufferData: null as ArrayBuffer | null,\n      tifIfds: [] as any[],\n    };\n  },\n  mounted() {\n    this.docType = this.getType();\n    let localLanguage = this._renderingProps\n      .context()\n      .GetItemSingle(\"Dory\")\n      .GetLRType()\n      .substring(0, 2);\n    if (localLanguage === \"tr\") {\n      this.pageTitle = \"Sayfa\";\n    } else {\n      this.pageTitle = \"Page\";\n    }\n  },\n  watch: {\n    src: function () {\n      this.pdfKey = new Date().valueOf();\n      this.page = 1;\n      this.loadedPages = 1;\n      this.docType = this.getType();\n    },\n    scale: function () {\n      this.zoomVal = Number(parseFloat(this.scale).toFixed(2));\n    },\n    page: function (newVal) {\n      if (newVal === \"\") {\n        return;\n      }\n      if (this.page > this.numPages) {\n        this.page = this.numPages;\n      }\n      if (this.page < 1) {\n        this.page = 1;\n      }\n      if (this.page <= this.numPages && this.page > this.loadedPages) {\n        this.loadedPages = this.page;\n      }\n      if (this.docType === \"tiff\") this.renderTiffPage();\n    },\n    rotateVal(newVal) {\n      if (newVal < 0) {\n        this.rotateVal = 270;\n      } else if (newVal >= 360) {\n        this.rotateVal = 0;\n      }\n\n      if (this.docType === \"tiff\") this.renderTiffPage();\n   },\n  },\n  created() {\n    this.onFrameScrollBottom();\n  },\n  destroyed() {\n    this.$el?.remove();\n  },\n  methods: {\n    isTiffBuffer(buffer: ArrayBuffer): boolean {\n      const bytes = new Uint8Array(buffer);\n      return (\n        (bytes[0] === 0x49 && bytes[1] === 0x49 && bytes[2] === 0x2A && bytes[3] === 0x00) || // little endian\n        (bytes[0] === 0x4D && bytes[1] === 0x4D && bytes[2] === 0x00 && bytes[3] === 0x2A)    // big endian\n      );\n    },\n    async loadTiff(dataType: \"base64\" | \"arrayBuffer\" | \"url\") {\n      this.tiffLoading = true;\n      this.tiffBufferData = await this.getTiffBuffer(dataType, this.src);\n      this.tifIfds = UTIF.decode(this.tiffBufferData);\n      this.numPages = this.tifIfds.length;\n      this.$nextTick(() => {\n        const canvas = this.$refs.tiffContainerRef as HTMLCanvasElement;\n          if (!canvas) {\n            setTimeout(() => {\n              this.renderTiffPage();\n              this.tiffLoading = false;\n            }, 0);\n        }\n        else {\n          this.renderTiffPage();\n          this.tiffLoading = false;\n        }\n        \n      });\n   },\n    async getTiffBuffer(type: string, src: any): Promise<ArrayBuffer> {\n      if (type === \"url\") {\n        const response = await fetch(src);\n        return await response.arrayBuffer();\n      }\n      if (type === \"base64\") {\n        const data = src.replace(/^data:image\\/\\w+;base64,/, \"\");\n        return this.base64ToArrayBuffer(data);\n      }\n      return src;\n    },\n    renderTiffPage() {\n      const canvas = this.$refs.tiffContainerRef as HTMLCanvasElement;\n      if (!canvas) return;\n      const scale = this.zoomVal || 1;\n      const rotate = ((this.rotateVal % ROTATE_MAX) + ROTATE_MAX) % ROTATE_MAX;\n      const pages = this.hidePagination ? this.tifIfds : [this.tifIfds[this.page - 1]];\n\n      pages.forEach((ifd) => {\n        UTIF.decodeImage(this.tiffBufferData, ifd);\n        const rgba = UTIF.toRGBA8(ifd);\n        const [w, h] = [ifd.width * scale, ifd.height * scale];\n        if (rotate === 90 || rotate === 270) {\n          canvas.width = h;\n          canvas.height = w;\n        } else {\n          canvas.width = w;\n          canvas.height = h;\n        }\n        const ctx = canvas.getContext(\"2d\");\n        if (ctx) {\n          ctx.save();\n          ctx.translate(canvas.width / 2, canvas.height / 2);\n          ctx.rotate((rotate * Math.PI) / 180);\n          ctx.translate(-w / 2, -h / 2); \n          const imageData = new ImageData(new Uint8ClampedArray(rgba), ifd.width, ifd.height);      \n\n          createImageBitmap(imageData).then((bitmap) => { \n            // Clear canvas\n            ctx.clearRect(0, 0, canvas.width, canvas.height);           \n            ctx.drawImage(bitmap, 0, 0, w, h); \n            // Restore original state\n            ctx.restore();            \n          });          \n        }\n        //container.appendChild(canvas);\n      });\n    },\n\n    base64ToArrayBuffer(base64: string): ArrayBuffer {\n      const binary = window.atob(base64);\n      const len = binary.length;\n      const bytes = new Uint8Array(len);\n      for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);\n      return bytes.buffer;\n    },\n\n    createPdf() {\n      let takenSrc;\n      let isDataBase64Encoded = false;\n      if (this.src.startsWith(\"data:application/pdf;base64,\")) {\n        takenSrc = this.src.split(\"data:application/pdf;base64,\")?.[1];\n        isDataBase64Encoded = true;\n      } else if (this.src.startsWith(\"data:application/pdf,\")) {\n        takenSrc = this.src.split(\"data:application/pdf,\")?.[1];\n        isDataBase64Encoded = true;\n      } else {\n        takenSrc = this.src;\n        isDataBase64Encoded = false;\n      }\n      if (isDataBase64Encoded) {\n        const blob = this.base64ToBlob(takenSrc, \"application/pdf\");\n        takenSrc = URL.createObjectURL(blob);\n      }\n    \n     this.url = takenSrc;\n      pdf.createLoadingTask(takenSrc).then((pdf) => {\n        this.numPages = pdf.numPages;\n      }).catch((error) => {\n           console.error(\"DocumentViewer createLoadingTask promise.catch..\", error);\n      });\n    },\n    downloadTiff() {\n      let blobPromise: Promise<Blob>;\n      if (this.dataType === \"url\") {\n        blobPromise = fetch(this.src).then(res => res.blob());\n      } else if (this.dataType === \"base64\") {\n        const base64Data = this.src.replace(/^data:image\\/tiff;base64,/, \"\");\n        const buffer = this.base64ToAB(base64Data);\n        blobPromise = Promise.resolve(new Blob([buffer], { type: \"image/tiff\" }));\n      } else {\n        blobPromise = Promise.resolve(new Blob([this.src], { type: \"image/tiff\" }));\n      }\n\n      blobPromise.then(blob => {\n        const objectURL = URL.createObjectURL(blob);\n        const link = document.createElement(\"a\");\n        link.href = objectURL;\n        link.download = this.fileDescription ?? \"fileData.tiff\";\n        link.click();\n        URL.revokeObjectURL(objectURL);\n      });\n    },\n    base64ToAB(base64: string) {\n      const binary_string = window.atob(base64);\n      const len = binary_string.length;\n      const bytes = new Uint8Array(len);\n      for (let i = 0; i < len; i++) {\n        bytes[i] = binary_string.charCodeAt(i);\n      }\n      return bytes.buffer;\n    },\n    base64ToBlob(base64, type = \"application/octet-stream\") {\n      const binStr = atob(base64);\n      const len = binStr.length;\n      const arr = new Uint8Array(len);\n      for (let i = 0; i < len; i++) {\n        arr[i] = binStr.charCodeAt(i);\n      }\n      return new Blob([arr], { type: type });\n    },\n    focusSelectedPage() {\n      if (!this.displayOnScroll) {\n        return;\n      }\n      if (this.page > this.numPages) {\n        this.page = 1;\n        var focusedPage = document.getElementById(\"pdf-page-1\");\n        if (focusedPage) {\n          focusedPage.scrollIntoView();\n        }\n      } else {\n        var focusedPage = document.getElementById(\n          \"pdf-page-\" + this.page.toString()\n        );\n        if (focusedPage) {\n          focusedPage.scrollIntoView();\n        }\n      }\n    },\n    zoomIn() {\n      if (this.zoomVal < ZOOM_MAX) {\n        this.zoomVal += ZOOM_STEP;\n        this.currentMinWidth += MIN_WIDTH_STEP;\n        if (this.docType === \"tiff\") this.renderTiffPage();\n      }\n    },\n    zoomOut() {\n      if (this.zoomVal > ZOOM_MIN) {\n        this.zoomVal -= ZOOM_STEP;\n        this.currentMinWidth -= MIN_WIDTH_STEP;\n        if (this.docType === \"tiff\") this.renderTiffPage();\n      }\n    },\n    nextPage() {\n      this.page += this.page < this.numPages ? 1 : 0;\n    },\n    previousPage() {\n      this.page -= this.page > 0 ? 1 : 0;\n    },\n    rotate() {\n      this.rotateVal = (this.rotateVal - ROTATE_STEP + ROTATE_MAX) % ROTATE_MAX;\n      if (this.docType === \"tiff\") this.renderTiffPage();\n    },\n    goToPage(pageNumber: number) {\n      if (pageNumber >= 1 && pageNumber <= this.numPages) {\n        this.page = pageNumber;\n      }\n    },\n    downloadPdf() {\n      fetch(this.url)\n        .then((res) => res.blob()) // Gets the response and returns it as a blob\n        .then((blob) => {\n          let objectURL = URL.createObjectURL(blob);\n          var link = document.createElement(\"a\");\n          link.href = objectURL;\n          link.download = this.fileDescription ?? \"fileData\"; //Name of the file to be downloaded\n          link.dispatchEvent(new MouseEvent(\"click\"));\n        });\n    },\n    printPdf() {\n      if (\n        this.src.startsWith(\"data:application/pdf;base64,\") ||\n        this.src.startsWith(\"data:application/pdf,\")\n      ) {\n        const printIframe = this.$refs.printIframe as HTMLIFrameElement;\n        if (printIframe) {\n          printIframe.src = this.url;\n          printIframe.onload = () => {\n            printIframe.contentWindow?.print();\n          };\n        }\n      } else {\n        fetch(this.src)\n          .then((response) => response.blob())\n          .then((blob) => {\n            const objectURL = URL.createObjectURL(blob);\n            const printIframe = this.$refs.printIframe as HTMLIFrameElement;\n            if (printIframe) {\n              printIframe.src = objectURL;\n              printIframe.onload = () => {\n                printIframe.contentWindow?.print();\n                URL.revokeObjectURL(objectURL);\n              };\n            }\n          });\n      }\n    },\n    getType() {\n      const val = this.src;\n      if (val?.startsWith?.(\"data:\")) {\n        const mediaType = val\n          .split(\",\")[0]\n          .split(\";\")[0]\n          .split(\":\")[1]\n          .split(\"/\");\n        if (TIFF_TYPES.includes(mediaType[1])) {\n          this.dataType = \"base64\";\n          this.loadTiff(this.dataType);\n          return \"tiff\";\n        } else if (mediaType[0] === \"image\") {\n          return \"img\";\n        } else if (mediaType[1] === \"pdf\") {\n          this.createPdf();\n          return \"pdf\";\n        }\n        return mediaType[1];\n      } else if (this.src instanceof ArrayBuffer) {\n        if (this.isTiffBuffer(this.src)) {\n          this.dataType = \"arrayBuffer\";\n          this.loadTiff(this.dataType);\n          return \"tiff\";\n        }\n        return;\n      } else {\n        if (!val || val === \"\") return;\n        let parsedType = new URL(val).pathname.split(\".\").pop() || \"\";\n        if ([\"html\", \"htm\"].includes(parsedType)) {\n          return \"html\";\n        } else if (IMAGE_TYPES.includes(parsedType)) {\n          return \"img\";\n        } else if (\n          parsedType === \"pdf\" ||\n          parsedType?.replace(/\\s/g, \"\").startsWith(\"pdf?\")\n        ) {\n          this.createPdf();\n          return \"pdf\";\n        } else if (TIFF_TYPES.includes(parsedType)) {\n          this.dataType = \"url\";\n          this.loadTiff(this.dataType);\n          return \"tiff\";\n        }\n        return parsedType;\n      }\n    },\n    onFrameScrollBottom() {\n      const self = this;\n      let scrolledToBottom = (e) => {\n        if (e.data == \"scrolledToBottom\") {\n          self.$emit(\"scrolledToBottom\");\n        }\n      };\n      window.removeEventListener(\"message\", scrolledToBottom, false);\n      window.addEventListener(\"message\", scrolledToBottom, false);\n    },\n    handleScroll({\n      target: {\n        scrollTop,\n        clientHeight,\n        scrollHeight,\n        lastChild: { offsetHeight },\n      },\n    }) {\n      if (this.displayOnScroll && this.showToolBar) {\n        let pageVal = parseInt(\n          Math.ceil(Math.round(scrollTop) / offsetHeight).toString()\n        );\n\n        this.page =\n          pageVal == 0 ? 1 : pageVal >= this.numPages ? this.numPages : pageVal;\n      }\n      if (Math.round(scrollTop) + clientHeight + 1 >= scrollHeight) {\n        if (this.displayOnScroll && this.numPages > this.loadedPages) {\n          this.loadedPages++;\n        }\n        if (scrollTop > 0) {\n          this.$emit(\"scrollEnd\");\n        }\n      }\n    },\n  },\n});\n</script>\n\n<style scoped>\n.q-document-html {\n  border: none;\n  width: 100%;\n  height: 100%;\n}\n\n.q-document-img {\n  width: 100%;\n}\n\n.q-document-pdf-wrapper>div>.ratio {\n  background-color: green;\n  color: white;\n  text-align: center;\n}\n\n.q-document-pdf-wrapper>input {\n  width: 5em;\n}\n\n.q-document-pdf {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n}\n\n.q-document-pdf-container {\n  width: 100%;\n  overflow: auto;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button {\n  opacity: 1;\n}\n\ninput[type=\"number\"] {\n  width: 54px;\n  height: 28px;\n  outline-style: none;\n  background-color: #eeeeee;\n  color: #212121;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.q-document-zoom-options-list {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.q-document-zoom-field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.q-document-toolbar-right-options-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.q-document-toolbar-left-options-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.q-document-toolbar-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 44px;\n  border-bottom: 1px solid #e0e0e0;\n  align-items: center;\n  position: sticky;\n  z-index: 1;\n  top: 0px;\n  left: 0px;\n}\n\n.q-document-zoom-options {\n  display: flex;\n  background-color: #eeeeee;\n  overflow: hidden;\n  border-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  height: 28px;\n}\n\n.q-document-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  width: 30px;\n}\n\n.q-document-icon:hover {\n  background-color: #e3e3e3;\n  border-radius: 5px;\n}\n\n.q-document-color-text-content {\n  color: #212121;\n}\n\n.q-document-zoom-buttons {\n  width: 28px;\n  height: 28px;\n}\n\n#q-document-download-icon {\n  color: #212121;\n}\n\n#q-document-rotate-icon {\n  color: #212121;\n}\n\n#q-document-zoom-in-icon {\n  color: #757575;\n}\n\n#q-document-zoom-out-icon {\n  color: #757575;\n}\n\n.q-document-toolbar-part-left,\n.q-document-toolbar-part-center,\n.q-document-toolbar-part-right {\n  flex: 25%;\n}\n\n@media (max-width: 644px) {\n\n  .q-document-toolbar-part-center,\n  .q-document-toolbar-part-right {\n    flex: 20%;\n  }\n}\n\n@media (max-width: 501px) {\n\n  .q-document-toolbar-part-center,\n  .q-document-toolbar-part-right {\n    flex: 10%;\n  }\n}\n\n.tiff-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  align-items: center;\n}\n\n.tiff-toolbar {\n  background-color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 44px;\n  border-bottom: 1px solid #e0e0e0;\n  align-items: center;\n  position: sticky;\n  z-index: 1;\n  top: 0px;\n  left: 0px;\n  justify-content: flex-end;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_style_index_0_id_0474cfbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"class":"plateauStudioClass"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_style_index_0_id_0474cfbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_style_index_0_id_0474cfbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_style_index_0_id_0474cfbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_style_index_0_id_0474cfbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/quick/QDocumentViewer.vue":
/*!**************************************************!*\
  !*** ./src/components/quick/QDocumentViewer.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QDocumentViewer_vue_vue_type_template_id_0474cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QDocumentViewer.vue?vue&type=template&id=0474cfbc&scoped=true& */ "./src/components/quick/QDocumentViewer.vue?vue&type=template&id=0474cfbc&scoped=true&");
/* harmony import */ var _QDocumentViewer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QDocumentViewer.vue?vue&type=script&lang=ts& */ "./src/components/quick/QDocumentViewer.vue?vue&type=script&lang=ts&");
/* harmony import */ var _QDocumentViewer_vue_vue_type_style_index_0_id_0474cfbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css& */ "./src/components/quick/QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QDocumentViewer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QDocumentViewer_vue_vue_type_template_id_0474cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QDocumentViewer_vue_vue_type_template_id_0474cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0474cfbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QDocumentViewer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QDocumentViewer.vue?vue&type=script&lang=ts&":
/*!***************************************************************************!*\
  !*** ./src/components/quick/QDocumentViewer.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QDocumentViewer.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/quick/QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_style_index_0_id_0474cfbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=style&index=0&id=0474cfbc&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/quick/QDocumentViewer.vue?vue&type=template&id=0474cfbc&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/components/quick/QDocumentViewer.vue?vue&type=template&id=0474cfbc&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_template_id_0474cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_template_id_0474cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QDocumentViewer_vue_vue_type_template_id_0474cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QDocumentViewer.vue?vue&type=template&id=0474cfbc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=template&id=0474cfbc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=template&id=0474cfbc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QDocumentViewer.vue?vue&type=template&id=0474cfbc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { style: { height: _vm.height, width: "100%" } }, [
    _c(
      "div",
      {
        staticStyle: {
          width: "100%",
          "justify-content": "center",
          height: "100%",
        },
      },
      [
        _vm.docType === "tiff"
          ? _c("div", [
              _vm.showToolBar
                ? _c("div", { staticClass: "tiff-toolbar" }, [
                    _c("div", { staticClass: "q-document-toolbar-wrapper" }, [
                      _c(
                        "div",
                        { staticClass: "q-document-toolbar-part-left" },
                        [
                          !_vm.hidePagination
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "q-document-toolbar-left-options-wrapper",
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ml-1 mr-1 q-document-color-text-content",
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(_vm.pageTitle) +
                                          "\n                  "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: _vm.page,
                                        expression: "page",
                                        modifiers: { number: true },
                                      },
                                    ],
                                    attrs: {
                                      min: 1,
                                      max: _vm.numPages,
                                      type: "number",
                                      oninput:
                                        "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');",
                                    },
                                    domProps: { value: _vm.page },
                                    on: {
                                      blur: [
                                        _vm.focusSelectedPage,
                                        function ($event) {
                                          return _vm.$forceUpdate()
                                        },
                                      ],
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.page = _vm._n($event.target.value)
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ml-1 q-document-color-text-content",
                                    },
                                    [
                                      _vm._v(
                                        "\n                    / " +
                                          _vm._s(_vm.numPages) +
                                          "\n                  "
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "q-document-toolbar-part-rightq-document-toolbar-right-options-wrapper mr-1",
                          staticStyle: {
                            "justify-content": "end",
                            display: "flex",
                          },
                        },
                        [
                          !_vm.hideDownload
                            ? _c(
                                "div",
                                { staticClass: "q-document-icon" },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticStyle: { cursor: "pointer" },
                                      attrs: {
                                        id: "q-document-download-icon",
                                        size: "18",
                                      },
                                      on: { click: _vm.downloadTiff },
                                    },
                                    [
                                      _vm._v(
                                        "\n              mdi-tray-arrow-down\n            "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.hideRotate
                            ? _c(
                                "div",
                                { staticClass: "q-document-icon mr-4" },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticStyle: { cursor: "pointer" },
                                      attrs: {
                                        id: "q-document-download-icon",
                                        size: "18",
                                      },
                                      on: {
                                        click: function ($event) {
                                          _vm.rotateVal -= 90
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n              mdi-format-rotate-90\n            "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.hideZoom
                            ? _c(
                                "div",
                                { staticClass: "q-document-zoom-options" },
                                [
                                  _c(
                                    "ul",
                                    {
                                      staticClass:
                                        "q-document-zoom-options-list",
                                    },
                                    [
                                      _c("li", [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "q-document-zoom-field",
                                          },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "ml-2 mr-3 q-document-color-text-content",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                    " +
                                                    _vm._s(
                                                      Number.parseInt(
                                                        _vm.zoomVal * 100
                                                      ).toFixed(0)
                                                    ) +
                                                    "%\n                  "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { on: { click: _vm.zoomOut } }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "q-document-zoom-buttons q-document-zoom-field",
                                            staticStyle: { cursor: "pointer" },
                                            attrs: {
                                              id: "q-document-zoom-out-field",
                                            },
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: {
                                                  id: "q-document-zoom-out-icon",
                                                  size: "18",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                    mdi-minus\n                  "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        {
                                          staticClass: "q-document-zoom-field",
                                          on: { click: _vm.zoomIn },
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "q-document-zoom-buttons q-document-zoom-field",
                                              staticStyle: {
                                                cursor: "pointer",
                                              },
                                              attrs: {
                                                id: "q-document-zoom-in-field",
                                              },
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    id: "q-document-zoom-in-icon",
                                                    size: "18",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    mdi-plus\n                  "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ]
                      ),
                    ]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  key: "tiff-" + _vm.src,
                  ref: "tiffContainer",
                  staticClass: "tiff-container",
                },
                [
                  _vm.tiffLoading
                    ? _c("div", { staticClass: "q-document-loading" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.loadingContent) +
                            "\n        "
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("canvas", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.tiffLoading,
                        expression: "!tiffLoading",
                      },
                    ],
                    ref: "tiffContainerRef",
                    attrs: { id: "tiffCanvas" },
                  }),
                ]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.show
          ? _c("div", { staticStyle: { height: "100%" } }, [
              _vm.docType === "img"
                ? _c("img", {
                    staticClass: "q-document-img",
                    attrs: { src: _vm.src, height: _vm.height },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.docType === "html"
                ? _c("iframe", {
                    ref: "iframe",
                    staticClass: "q-document-html",
                    attrs: {
                      src: _vm.src,
                      id: "q-document-html",
                      title: "QDocumentViewer IFrame",
                      height: _vm.height,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.docType === "pdf"
                ? _c("div", { staticClass: "q-document-pdf-wrapper" }, [
                    _c(
                      "div",
                      {
                        staticClass: "q-document-pdf-container",
                        style: {
                          transform: "rotate(" + _vm.turn + "turn)",
                          height: !_vm.displayOnScroll
                            ? _vm.height
                            : _vm.height != undefined
                            ? _vm.height
                            : "100vh",
                        },
                        on: { scroll: _vm.handleScroll },
                      },
                      [
                        _vm.showToolBar
                          ? [
                              _vm.showToolBar
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "q-document-toolbar-wrapper",
                                      style:
                                        "background-color:" +
                                        _vm.pdfToolbarBackgroundColor +
                                        ";",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "q-document-toolbar-part-left",
                                        },
                                        [
                                          !_vm.hidePagination
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "q-document-toolbar-left-options-wrapper",
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "ml-1 mr-1 q-document-color-text-content",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                    " +
                                                          _vm._s(
                                                            _vm.pageTitle
                                                          ) +
                                                          "\n                  "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName:
                                                          "v-model.number",
                                                        value: _vm.page,
                                                        expression: "page",
                                                        modifiers: {
                                                          number: true,
                                                        },
                                                      },
                                                    ],
                                                    attrs: {
                                                      min: 1,
                                                      max: _vm.numPages,
                                                      type: "number",
                                                      oninput:
                                                        "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');",
                                                    },
                                                    domProps: {
                                                      value: _vm.page,
                                                    },
                                                    on: {
                                                      blur: [
                                                        _vm.focusSelectedPage,
                                                        function ($event) {
                                                          return _vm.$forceUpdate()
                                                        },
                                                      ],
                                                      input: function ($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.page = _vm._n(
                                                          $event.target.value
                                                        )
                                                      },
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "ml-1 q-document-color-text-content",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                    / " +
                                                          _vm._s(_vm.numPages)
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "q-document-toolbar-part-center",
                                          staticStyle: {
                                            "justify-content": "center",
                                            display: "flex",
                                          },
                                        },
                                        [
                                          !_vm.hideDescription
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "q-document-color-text-content",
                                                  staticStyle: {
                                                    "text-align": "center",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.fileDescription)
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "\n                  q-document-toolbar-part-right\n                  q-document-toolbar-right-options-wrapper\n                  mr-1\n                ",
                                          staticStyle: {
                                            "justify-content": "end",
                                            display: "flex",
                                          },
                                        },
                                        [
                                          _vm.showPrint
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "q-document-icon mr-2",
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticStyle: {
                                                        cursor: "pointer",
                                                      },
                                                      attrs: {
                                                        id: "q-document-print-icon",
                                                        size: "18",
                                                      },
                                                      on: {
                                                        click: _vm.printPdf,
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                  mdi-printer\n                "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          !_vm.hideDownload
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "q-document-icon mr-2",
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticStyle: {
                                                        cursor: "pointer",
                                                      },
                                                      attrs: {
                                                        id: "q-document-download-icon",
                                                        size: "18",
                                                      },
                                                      on: {
                                                        click: _vm.downloadPdf,
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                    mdi-tray-arrow-down\n                  "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          !_vm.hideRotate
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "q-document-icon mr-4",
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticStyle: {
                                                        cursor: "pointer",
                                                      },
                                                      attrs: {
                                                        id: "q-document-download-icon",
                                                        size: "18",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          _vm.rotateVal -= 90
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                    mdi-format-rotate-90\n                  "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          !_vm.hideZoom
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "q-document-zoom-options",
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "q-document-zoom-options-list",
                                                    },
                                                    [
                                                      _c("li", [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "q-document-zoom-field",
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "ml-2 mr-3 q-document-color-text-content",
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                          " +
                                                                    _vm._s(
                                                                      Number.parseInt(
                                                                        _vm.zoomVal *
                                                                          100
                                                                      ).toFixed(
                                                                        0
                                                                      )
                                                                    ) +
                                                                    "%\n                        "
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "li",
                                                        {
                                                          on: {
                                                            click: _vm.zoomOut,
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "q-document-zoom-buttons q-document-zoom-field",
                                                              staticStyle: {
                                                                cursor:
                                                                  "pointer",
                                                              },
                                                              attrs: {
                                                                id: "q-document-zoom-out-field",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    id: "q-document-zoom-out-icon",
                                                                    size: "18",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                          mdi-minus\n                        "
                                                                  ),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "li",
                                                        {
                                                          staticClass:
                                                            "q-document-zoom-field",
                                                          on: {
                                                            click: _vm.zoomIn,
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "q-document-zoom-buttons q-document-zoom-field",
                                                              staticStyle: {
                                                                cursor:
                                                                  "pointer",
                                                              },
                                                              attrs: {
                                                                id: "q-document-zoom-in-field",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    id: "q-document-zoom-in-icon",
                                                                    size: "18",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                          mdi-plus\n                        "
                                                                  ),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.showToolBar && !_vm.displayOnScroll
                          ? _c(
                              "pdf",
                              {
                                key: _vm.pdfKey,
                                ref: "pdf",
                                staticClass: "q-document-pdf",
                                style:
                                  "background-color:" +
                                  _vm.pdfBackgroundColor +
                                  "; min-width:" +
                                  _vm.currentMinWidth +
                                  "px",
                                attrs: {
                                  src: _vm.url,
                                  page: _vm.page,
                                  scale: _vm.zoomVal,
                                  height: _vm.height,
                                  text: false,
                                  rotate: _vm.rotateVal,
                                  id: "pdf-page-" + _vm.page,
                                },
                                on: {
                                  "num-pages": function ($event) {
                                    _vm.numPages = $event
                                  },
                                },
                              },
                              [
                                _c("template", { slot: "loading" }, [
                                  _vm._v(_vm._s(_vm.loadingContent)),
                                ]),
                              ],
                              2
                            )
                          : _vm.displayOnScroll
                          ? _vm._l(_vm.loadedPages, function (i) {
                              return _c(
                                "pdf",
                                {
                                  key: _vm.pdfKey + i,
                                  ref: "pdf",
                                  refInFor: true,
                                  staticClass: "q-document-pdf",
                                  style:
                                    "background-color:" +
                                    _vm.pdfBackgroundColor +
                                    ";",
                                  attrs: {
                                    src: _vm.url,
                                    page: _vm.page,
                                    scale: _vm.zoomVal,
                                    rotate: _vm.rotateVal,
                                    height: _vm.height,
                                    text: false,
                                    id: "pdf-page-" + i,
                                  },
                                },
                                [
                                  _c("template", { slot: "loading" }, [
                                    _vm._v(_vm._s(_vm.loadingContent)),
                                  ]),
                                ],
                                2
                              )
                            })
                          : _vm._l(_vm.numPages, function (i) {
                              return _c(
                                "pdf",
                                {
                                  key: _vm.pdfKey + i,
                                  ref: "pdf",
                                  refInFor: true,
                                  staticClass: "q-document-pdf",
                                  style:
                                    "background-color:" +
                                    _vm.pdfBackgroundColor +
                                    ";",
                                  attrs: {
                                    src: _vm.url,
                                    page: i,
                                    scale: _vm.zoomVal,
                                    rotate: _vm.rotateVal,
                                    height: _vm.height,
                                    text: false,
                                    id: "pdf-page-" + i,
                                  },
                                },
                                [
                                  _c("template", { slot: "loading" }, [
                                    _vm._v(_vm._s(_vm.loadingContent)),
                                  ]),
                                ],
                                2
                              )
                            }),
                      ],
                      2
                    ),
                  ])
                : _vm._e(),
            ])
          : _vm._e(),
      ]
    ),
    _vm._v(" "),
    _vm.showPrint
      ? _c("iframe", {
          ref: "printIframe",
          staticStyle: { display: "none" },
          attrs: { frameborder: "0" },
        })
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QDocumentViewer_vue.js.map?ver=3.1.2-4