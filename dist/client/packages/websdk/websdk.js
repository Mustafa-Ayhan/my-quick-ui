(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["websdk"] = factory();
	else
		root["websdk"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../common/qshell/src/helpers/QJsonHelpers/QJsonCollector.ts":
/*!**********************************************************************!*\
  !*** ../../common/qshell/src/helpers/QJsonHelpers/QJsonCollector.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QJsonCollector": () => (/* binding */ QJsonCollector)
/* harmony export */ });
/* harmony import */ var _shrimp_interfaces_Scripting_LangCalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shrimp/interfaces/Scripting/LangCalc */ "../../common/shrimp/interfaces/Scripting/LangCalc.ts");
/* harmony import */ var _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shrimp/helpers/logger */ "../../common/shrimp/helpers/logger.ts");
/* harmony import */ var _shrimp_helpers_QJsonHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shrimp/helpers/QJsonHelper */ "../../common/shrimp/helpers/QJsonHelper.ts");
/* harmony import */ var _shrimp_constants_knownComps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shrimp/constants/knownComps */ "../../common/shrimp/constants/knownComps.ts");
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




var QJsonCollector = /** @class */ (function () {
    function QJsonCollector(_a) {
        var moduleManager = _a.moduleManager;
        this.moduleManager = moduleManager;
    }
    QJsonCollector.prototype.collectQJson = function (qjson, qjsonPath, dory, qjsonRetrieve, doryJr, options) {
        var _this = this;
        var promiseList = [];
        var enableMasterPage = dory.GetEditMode();
        var qLang = options.qLang, _a = options.level, level = _a === void 0 ? 0 : _a;
        var traverseJson = function (childCJson) {
            if (!childCJson) {
                return;
            }
            childCJson.forEach(function (comp) { return __awaiter(_this, void 0, void 0, function () {
                var qjsonPath_1, masterPathProp, masterPagePath, compProm;
                var _a;
                return __generator(this, function (_b) {
                    if (!comp) {
                        return [2 /*return*/];
                    }
                    switch (comp.T) {
                        case _shrimp_constants_knownComps__WEBPACK_IMPORTED_MODULE_3__.knownComps.customComponent.name:
                        case _shrimp_constants_knownComps__WEBPACK_IMPORTED_MODULE_3__.knownComps.renderingComponent.name:
                            qjsonPath_1 = dory.Evaluate({ script: (_a = comp.P[_shrimp_constants_knownComps__WEBPACK_IMPORTED_MODULE_3__.knownComps.customComponent.props.qjsonPath]) === null || _a === void 0 ? void 0 : _a.H, response: null, lang: _shrimp_interfaces_Scripting_LangCalc__WEBPACK_IMPORTED_MODULE_0__.LangCalc.getLang({ ctrl: comp, qLang: qLang }) });
                            qjsonPath_1 && promiseList.push({ type: "qjson", qProm: qjsonRetrieve(qjsonPath_1), qJsonPath: qjsonPath_1, subPromiseList: [] });
                            break;
                        case _shrimp_constants_knownComps__WEBPACK_IMPORTED_MODULE_3__.knownComps.messaging.name:
                            if (enableMasterPage) {
                                break;
                            }
                            masterPathProp = comp.P[_shrimp_constants_knownComps__WEBPACK_IMPORTED_MODULE_3__.knownComps.messaging.props.masterPath];
                            masterPagePath = masterPathProp && dory.Evaluate({ script: masterPathProp.H, response: null, lang: _shrimp_interfaces_Scripting_LangCalc__WEBPACK_IMPORTED_MODULE_0__.LangCalc.getLang({ ctrl: comp, qLang: qLang }) });
                            masterPagePath && promiseList.push({ type: "masterPage", qProm: qjsonRetrieve(masterPagePath), qJsonPath: masterPagePath, subPromiseList: [] });
                            break;
                        default:
                            compProm = this.moduleManager.CheckComponent(comp.T, comp.CP);
                            compProm && promiseList.push({ type: "domainComp", prom: compProm, compPath: comp.CP, compName: comp.T, subPromiseList: [] });
                            break;
                    }
                    comp.C && Object.keys(comp.C).forEach(function (childKey) { return traverseJson(comp.C[childKey].c); });
                    return [2 /*return*/];
                });
            }); });
        };
        traverseJson(qjson.cJson);
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            function goResolve() {
                if (level == 0 && lastMasterPath && !hasMaster) {
                    reject(new Error("Not implemented: Navigating from a page with a masterPage to a page with no masterPage"));
                    return;
                }
                resolve(collectResult);
            }
            var lastMasterPath, hasMaster, collectResult, completedPromises;
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        lastMasterPath = (_b = (_a = doryJr === null || doryJr === void 0 ? void 0 : doryJr.GetLastHistory()) === null || _a === void 0 ? void 0 : _a.masterData) === null || _b === void 0 ? void 0 : _b.path;
                        hasMaster = false;
                        collectResult = { qjson: qjson };
                        completedPromises = 0;
                        if (!promiseList.length) {
                            goResolve();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Promise.all(promiseList.map(function (promItem) { return __awaiter(_this, void 0, void 0, function () {
                                var awaitedQJson, err_1, errorCompName, logMessage;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 5, 6, 7]);
                                            if (!(promItem.type == "domainComp")) return [3 /*break*/, 2];
                                            return [4 /*yield*/, promItem.prom];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                        case 2: return [4 /*yield*/, promItem.qProm];
                                        case 3:
                                            awaitedQJson = _a.sent();
                                            promItem.type == "masterPage" && (hasMaster = true) && (collectResult = this.handleMasterPage(awaitedQJson, promItem.qJsonPath, qjsonPath, lastMasterPath) || collectResult);
                                            return [4 /*yield*/, this.collectQJson(awaitedQJson, promItem.qJsonPath, dory, qjsonRetrieve, doryJr, { qLang: qLang, level: level + 1 })];
                                        case 4:
                                            _a.sent();
                                            return [3 /*break*/, 7];
                                        case 5:
                                            err_1 = _a.sent();
                                            errorCompName = promItem.type != "domainComp" ? promItem.qJsonPath : promItem.compName + (promItem.compPath ? " " + promItem.compPath : "");
                                            logMessage = "Error on collectQJson " + promItem.type + ": " + errorCompName + ": " + err_1.message;
                                            _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log({ logMessage: logMessage, error: err_1, logType: _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.LogType.Error });
                                            return [3 /*break*/, 7];
                                        case 6:
                                            completedPromises++;
                                            if (completedPromises === promiseList.length) {
                                                goResolve();
                                            }
                                            return [7 /*endfinally*/];
                                        case 7: return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _c.sent();
                        goResolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    QJsonCollector.prototype.handleMasterPage = function (masterPageQJson, masterPagePath, realPagePath, lastMasterPath) {
        if (lastMasterPath == masterPagePath) {
            _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log({ logMessage: "page has masterPage but previous page had the same master, so pass", logType: _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.LogType.Trace });
            return undefined;
        }
        if (lastMasterPath && lastMasterPath != masterPagePath) {
            throw new Error("Not implemented: Navigating from a page with a masterPage to a page with a different masterPage");
        }
        var masterQJsonClone = structuredClone(masterPageQJson); // if non existing in mobile, might consider if !structuredClone -> ser&deser with JSON
        var renderingComp = _shrimp_helpers_QJsonHelper__WEBPACK_IMPORTED_MODULE_2__.QJsonHelper.findComponentByType(masterQJsonClone.cJson, _shrimp_constants_knownComps__WEBPACK_IMPORTED_MODULE_3__.knownComps.renderingComponent.name);
        if (!renderingComp) {
            _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log({ logMessage: "page had masterPage but masterPage does not have RenderingComponent", logType: _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.LogType.Warning });
            return undefined;
        }
        if (!realPagePath) {
            _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log({ logMessage: "page has a masterPage, but does not know self path", logType: _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.LogType.Warning });
            return undefined;
        }
        // renderingComp.P.QJsonPath = { H: `quick.quick.return('${realPagePath}')`, T: "prop", HL: "JS" };
        renderingComp.P.QJsonPath = { H: "\u256C'" + realPagePath + "'\u2569\u2569", T: "prop", HL: "QS" };
        return { qjson: masterQJsonClone, changedPath: masterPagePath };
    };
    return QJsonCollector;
}());



/***/ }),

/***/ "../../common/qshell/src/helpers/QJsonHelpers/QJsonPool.ts":
/*!*****************************************************************!*\
  !*** ../../common/qshell/src/helpers/QJsonHelpers/QJsonPool.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QJsonPool": () => (/* binding */ QJsonPool)
/* harmony export */ });
/* harmony import */ var _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shrimp/helpers/logger */ "../../common/shrimp/helpers/logger.ts");
/* harmony import */ var _shrimp_helpers_qjsonParser_QJsonExtractHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shrimp/helpers/qjsonParser/QJsonExtractHelper */ "../../common/shrimp/helpers/qjsonParser/QJsonExtractHelper.ts");
/* harmony import */ var _QJsonCollector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QJsonCollector */ "../../common/qshell/src/helpers/QJsonHelpers/QJsonCollector.ts");
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



function importer(name) {
    var _this = this;
    return function (pool) { return __awaiter(_this, void 0, void 0, function () {
        var comps;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() */ "common_qshell_src_customComponents_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../customComponents/index */ "../../common/qshell/src/customComponents/index.ts"))];
                case 1:
                    comps = _a.sent();
                    Object.keys(comps).forEach(function (key) { return pool[key] = comps[key]; });
                    return [2 /*return*/, comps[name]];
            }
        });
    }); };
}
var QJsonPool = /** @class */ (function () {
    function QJsonPool(_a) {
        var qjsonRetriever = _a.qjsonRetriever, moduleManager = _a.moduleManager;
        this.contextName = QJsonPool.contextName;
        this.qJsonPool = {};
        this.qjsonRetriever = qjsonRetriever;
        this.moduleManager = moduleManager;
        this.qjsonCollector = new _QJsonCollector__WEBPACK_IMPORTED_MODULE_2__.QJsonCollector({ moduleManager: moduleManager });
        this.ResetPool();
    }
    QJsonPool.prototype.ResetPool = function () {
        var self = this;
        this.qJsonPool = {
            get "qjson://QLegend"() {
                return importer("QLegend")(self.qJsonPool);
            },
            get "qjson://QCaptcha"() {
                return importer("QCaptcha")(self.qJsonPool);
            },
            get "qjson://QDynamicFields"() {
                return importer("QDynamicFields")(self.qJsonPool);
            },
            get "qjson://QQRCode"() {
                return importer("QQRCode")(self.qJsonPool);
            },
        };
    };
    Object.defineProperty(QJsonPool.prototype, "ModuleManager", {
        get: function () {
            return this.moduleManager;
        },
        enumerable: false,
        configurable: true
    });
    QJsonPool.prototype.retrieveAndFillQjsonAsync = function (_a) {
        var _b;
        var qjson = _a.qjson, dory = _a.dory, doryJr = _a.doryJr;
        return __awaiter(this, void 0, void 0, function () {
            var self, qjsonData, extractQjson, qjsonRetrieveFunc, qjsonContent, _c, qjsonPath, qjsonToRender;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        self = this;
                        qjsonData = qjson;
                        extractQjson = function (qjsonStringProm) {
                            return __awaiter(this, void 0, void 0, function () {
                                var qjsonString, qjson, _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, qjsonStringProm];
                                        case 1:
                                            qjsonString = _c.sent();
                                            _b = (_a = _shrimp_helpers_qjsonParser_QJsonExtractHelper__WEBPACK_IMPORTED_MODULE_1__.QJsonExtractHelper).qJsonExtractor;
                                            return [4 /*yield*/, qjsonStringProm];
                                        case 2:
                                            qjson = _b.apply(_a, [_c.sent()]);
                                            return [2 /*return*/, qjson];
                                    }
                                });
                            });
                        };
                        qjsonRetrieveFunc = function (qjsonPath, fixSyncResolve) {
                            var _a;
                            return __awaiter(this, void 0, void 0, function () {
                                var qjson, qjsonStringProm, disablePagePool, qjsonProm, ex_1;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            qjson = self.qJsonPool[qjsonPath];
                                            if (!qjson) return [3 /*break*/, 5];
                                            if (!(typeof qjson == "function")) return [3 /*break*/, 1];
                                            return [2 /*return*/, qjson(self.qJsonPool)];
                                        case 1:
                                            if (!(qjson instanceof Promise)) return [3 /*break*/, 3];
                                            return [4 /*yield*/, qjson];
                                        case 2: return [2 /*return*/, _b.sent()];
                                        case 3: return [2 /*return*/, qjson];
                                        case 4: return [3 /*break*/, 10];
                                        case 5:
                                            qjsonStringProm = self.qjsonRetriever.retrieveQJsonAsync(qjsonPath, qjsonData.options);
                                            disablePagePool = self.qjsonRetriever.disablePagePool;
                                            _b.label = 6;
                                        case 6:
                                            _b.trys.push([6, 8, , 9]);
                                            qjsonProm = extractQjson(qjsonStringProm);
                                            if (!disablePagePool) {
                                                self.qJsonPool[qjsonPath] = qjsonProm;
                                            }
                                            return [4 /*yield*/, qjsonProm];
                                        case 7:
                                            qjson = _b.sent();
                                            if (!disablePagePool) {
                                                self.qJsonPool[qjsonPath] = qjson;
                                            }
                                            return [3 /*break*/, 9];
                                        case 8:
                                            ex_1 = _b.sent();
                                            _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log({ logMessage: "qjson error: " + qjsonPath + " has error", logType: _shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_0__.LogType.Trace, additional: ex_1, minEngineLogLevel: (_a = dory.GetLogParams()) === null || _a === void 0 ? void 0 : _a.minEngineLogLevel });
                                            throw ex_1;
                                        case 9: return [2 /*return*/, qjson];
                                        case 10: return [2 /*return*/];
                                    }
                                });
                            });
                        };
                        if (!(qjson.type == "content")) return [3 /*break*/, 1];
                        _c = qjson.content;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, qjsonRetrieveFunc(qjson.path, true)];
                    case 2:
                        _c = _d.sent();
                        _d.label = 3;
                    case 3:
                        qjsonContent = _c;
                        qjsonPath = qjson.type == "content" ? undefined : qjson.path;
                        return [4 /*yield*/, this.qjsonCollector.collectQJson(qjsonContent, qjsonPath, dory, qjsonRetrieveFunc, doryJr, { qLang: (_b = qjsonContent.opt) === null || _b === void 0 ? void 0 : _b.QL })];
                    case 4:
                        qjsonToRender = _d.sent();
                        return [2 /*return*/, qjsonToRender];
                }
            });
        });
    };
    QJsonPool.prototype.getCJson = function (qjsonPath) {
        return this.qJsonPool[qjsonPath];
    };
    QJsonPool.contextName = "QJsonPool";
    return QJsonPool;
}());



/***/ }),

/***/ "../../common/shrimp/constants/knownComps.ts":
/*!***************************************************!*\
  !*** ../../common/shrimp/constants/knownComps.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "knownComps": () => (/* binding */ knownComps),
/* harmony export */   "mobileOnlyComponents": () => (/* binding */ mobileOnlyComponents)
/* harmony export */ });
var knownComps = {
    renderingComponent: {
        name: "RenderingComponent", props: {
            qjsonPath: "QJsonPath",
        }
    },
    customComponent: {
        name: "CustomComponent", props: {
            qjsonPath: "QJsonPath",
        }
    },
    messaging: {
        name: "Messaging", props: {
            masterPath: "masterPath",
        }
    },
};
var mobileOnlyComponents = ["QPieChart", "QQrReader"];


/***/ }),

/***/ "../../common/shrimp/helpers/QJsonHelper.ts":
/*!**************************************************!*\
  !*** ../../common/shrimp/helpers/QJsonHelper.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompSearchKey": () => (/* binding */ CompSearchKey),
/* harmony export */   "QJsonHelper": () => (/* binding */ QJsonHelper)
/* harmony export */ });
/* harmony import */ var _typeHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeHelper */ "../../common/shrimp/helpers/typeHelper.ts");

var CompSearchKey;
(function (CompSearchKey) {
    CompSearchKey[CompSearchKey["PID"] = 0] = "PID";
    CompSearchKey[CompSearchKey["EditorID"] = 1] = "EditorID";
    CompSearchKey[CompSearchKey["Render"] = 2] = "Render";
})(CompSearchKey || (CompSearchKey = {}));
var QJsonHelper = /** @class */ (function () {
    function QJsonHelper() {
    }
    /**
     * Make the calculation with given pageJson
     * @param pageJson Given pageJson
     * @param callBack Function to be handled. Return false to STOP traversing.
     * @returns boolean
     */
    QJsonHelper.ForEachComp = function (pageJson, callBack, compiledJson, reverseLook) {
        var traverse = function (_a) {
            var _b;
            var curJson = _a.curJson, path = _a.path, parentCompJson = _a.parentCompJson, compiledJson = _a.compiledJson;
            if (!curJson || curJson.length === 0) {
                console.error("curJson is empty or undefined");
                return;
            }
            var step = reverseLook ? -1 : 1;
            var start = reverseLook ? curJson.length - 1 : 0;
            var end = reverseLook ? -1 : curJson.length;
            for (var i = start; i !== end; i += step) {
                var compJson = curJson[i];
                var cJson = compiledJson === null || compiledJson === void 0 ? void 0 : compiledJson[i];
                if (!compJson) {
                    continue;
                }
                path.push(i);
                if (callBack(compJson, path.map(function (item) { return item; }), { compName: compJson.T, eID: compJson._Editor.eID, parentCompJson: parentCompJson, compiledJson: cJson }) === false) {
                    return false;
                }
                if (compJson.C) {
                    for (var childNamed in compJson.C) {
                        path.push(childNamed);
                        if (traverse({ curJson: compJson.C[childNamed].c, path: path, parentCompJson: compJson, compiledJson: (_b = cJson === null || cJson === void 0 ? void 0 : cJson.C[childNamed]) === null || _b === void 0 ? void 0 : _b.c }) === false) {
                            return false;
                        }
                        path.pop();
                    }
                }
                path.pop();
            }
        };
        traverse({ curJson: pageJson, path: [], compiledJson: compiledJson });
    };
    QJsonHelper.findComponentByType = function (curJson, type) {
        var foundCompJson;
        QJsonHelper.ForEachComp(curJson, function (compJson) {
            if (compJson.T != type) {
                return true;
            }
            foundCompJson = compJson;
            return false;
        });
        return foundCompJson;
    };
    /**
     * @deprecated Please use QJsonHelper.FindParentArrayPath
     */
    QJsonHelper.prototype.findParentArrayPath = function (path, pageJson) {
        return QJsonHelper.FindParentArrayPath(path, pageJson);
    };
    /**
     * Find json and path with given path in the given pageJson
     * @param path Sample path: [3,default,2]
     * @param pageJson Given pageJson
     * @returns ICompParentLocation
     */
    QJsonHelper.FindParentArrayPath = function (path, pageJson) {
        var _a;
        var parent = null;
        var selfIndex = path.pop();
        if (path.length == 0) {
            return { selfIndex: selfIndex, parentArray: pageJson, parent: null };
        }
        var target = pageJson;
        var typeHelper = new _typeHelper__WEBPACK_IMPORTED_MODULE_0__.TypeHelper();
        //Sample path: [3,default,2] --> [ {},{},{},{C:{default: [{}, {}, {BURADASIN}]}}  ]
        for (var i = 0; i < path.length; i++) {
            var curPath = path[i];
            if (typeHelper.isObject(target)) {
                parent = target;
                target = ((_a = parent === null || parent === void 0 ? void 0 : parent.C[curPath]) === null || _a === void 0 ? void 0 : _a.c) || [];
            }
            else { //array 
                target = target[curPath] || [];
            }
        }
        return { selfIndex: selfIndex, parentArray: target, parent: parent };
    };
    /**
     * @deprecated please use QJsonHelper.FindCompBySearchField
     */
    QJsonHelper.prototype.findCompBySearchField = function (pageJson, value, componentPropertySearchKey) {
        if (componentPropertySearchKey === void 0) { componentPropertySearchKey = CompSearchKey.EditorID; }
        return QJsonHelper.FindCompBySearchField(pageJson, value, componentPropertySearchKey);
    };
    /**
     * Search the given pageJson with key and value parameters
     * @param pageJson Given pageJson
     * @param value To be searched value
     * @param componentPropertySearchKey Search key
     * @returns ICompLocation or null
     */
    QJsonHelper.FindCompBySearchField = function (pageJson, value, componentPropertySearchKey, reverseLook) {
        if (componentPropertySearchKey === void 0) { componentPropertySearchKey = CompSearchKey.EditorID; }
        var retVal = null;
        // Switch outside the traversal to minimize checks in each iteration
        var propertyAccessor = function (compJson) {
            var _a, _b, _c, _d, _e;
            switch (componentPropertySearchKey) {
                case CompSearchKey.PID: return (_b = (_a = compJson.P) === null || _a === void 0 ? void 0 : _a.ID) === null || _b === void 0 ? void 0 : _b.H;
                case CompSearchKey.Render: return (_d = (_c = compJson.P) === null || _c === void 0 ? void 0 : _c.Render) === null || _d === void 0 ? void 0 : _d.H;
                case CompSearchKey.EditorID:
                default: return (_e = compJson._Editor) === null || _e === void 0 ? void 0 : _e.eID;
            }
        };
        QJsonHelper.ForEachComp(pageJson, function (compJson, curPath) {
            if (propertyAccessor(compJson) === value) {
                retVal = { compJson: compJson, curPath: curPath };
                return false; // Stop traversal
            }
            return true; // Continue traversal
        }, undefined, reverseLook);
        return retVal;
    };
    /**
     * Parse event parameters
     * @param eventParameters event parameters QS: x, y, z | TS: x: string, y: {a:number}, z: number
     */
    QJsonHelper.ParseParameters = function (eventParameters, handlerLang) {
        if (eventParameters) {
            var paramConverter = handlerLang == "TS" || handlerLang == "JS" ? (function (item) { return ({ name: item.split(":")[0], type: item.split(":")[1] }); }) : (function (item) { return ({ name: item }); });
            return eventParameters.split(",").map(paramConverter);
        }
        return undefined;
    };
    /**
     * Find component json path by EID
     * @returns path Sample path: [3,default,2]
     */
    QJsonHelper.FindCompPathByEID = function (qjson, compEID) {
        var path;
        QJsonHelper.ForEachComp(qjson, function (comp, curPath) { if (comp._Editor.eID == compEID) {
            path = curPath;
            return false;
        } return true; });
        return path;
    };
    return QJsonHelper;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/bulkManager.ts":
/*!**************************************************!*\
  !*** ../../common/shrimp/helpers/bulkManager.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulkManager": () => (/* binding */ BulkManager)
/* harmony export */ });
var BulkManager = /** @class */ (function () {
    function BulkManager() {
        this.bulkMessages = [];
        this.totalBulk = 0;
    }
    /**
     * Vomit the bulk messages into callback function of the shell
     * @param message Log message that to be added
     */
    BulkManager.prototype.writeMessage = function (message) {
        var _a, _b;
        if (this.bulkSize) {
            this.totalBulk += message.message.length;
            this.bulkMessages.push(message);
            if (this.totalBulk >= this.bulkSize) {
                (_a = this.logHandler) === null || _a === void 0 ? void 0 : _a.call(this, this.bulkMessages);
                this.totalBulk = 0;
                this.bulkMessages = [];
            }
        }
        else {
            (_b = this.logHandler) === null || _b === void 0 ? void 0 : _b.call(this, message);
        }
    };
    return BulkManager;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/lazyLoader.ts":
/*!*************************************************!*\
  !*** ../../common/shrimp/helpers/lazyLoader.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyLoader": () => (/* binding */ LazyLoader)
/* harmony export */ });
var LazyLoader = /** @class */ (function () {
    function LazyLoader() {
    }
    LazyLoader.LoadModule = function (moduleBody) {
        var moduleObject = {};
        var module = new Function("module", "exports", moduleBody);
        var temp_export = {};
        module(moduleObject, temp_export);
        var exported = moduleObject.exports;
        return exported;
    };
    LazyLoader.FetchModuleBody = function (url) {
        return new Promise(function (res, rej) { return fetch(url).then(function (response) { return response.text().then(function (body) { return res({ body: body, status: response.status }); }).catch(rej); }).catch(rej); });
    };
    return LazyLoader;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/logger.ts":
/*!*********************************************!*\
  !*** ../../common/shrimp/helpers/logger.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogType": () => (/* reexport safe */ _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType),
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/ComponentInterfaces/ILogger */ "../../common/shrimp/interfaces/ComponentInterfaces/ILogger.ts");
/* harmony import */ var _bulkManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bulkManager */ "../../common/shrimp/helpers/bulkManager.ts");
/* harmony import */ var _windowHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windowHelper */ "../../common/shrimp/helpers/windowHelper.ts");



// Log type values are equal to their acceptable byte size
// 1 char * 2 = 1 byte

var Singularizer = /** @class */ (function () {
    function Singularizer() {
    }
    Singularizer.trySingularize = function (name, instance) {
        if (!this.singularized(name)) {
            _windowHelper__WEBPACK_IMPORTED_MODULE_2__.WindowHelper.Instance.Window[name] = instance;
            return true;
        }
        return false;
    };
    Singularizer.singularized = function (name) {
        return _windowHelper__WEBPACK_IMPORTED_MODULE_2__.WindowHelper.Instance.Window[name];
    };
    Singularizer.getFreeName = function (name) {
        var _a;
        var win = (_a = _windowHelper__WEBPACK_IMPORTED_MODULE_2__.WindowHelper === null || _windowHelper__WEBPACK_IMPORTED_MODULE_2__.WindowHelper === void 0 ? void 0 : _windowHelper__WEBPACK_IMPORTED_MODULE_2__.WindowHelper.Instance.Window) !== null && _a !== void 0 ? _a : {};
        var counter = 0;
        while (win[name + "_" + ++counter])
            ;
        return name + "_" + counter;
    };
    return Singularizer;
}());
var Logger = /** @class */ (function () {
    function Logger() {
        // i know this functions are static but in rallyshell we have shrimp not quick_shrimp.
        // and the first caller of the functions are throws 'not implemented exception' because of lazy load.
        return { Log: this.Log };
    }
    Object.defineProperty(Logger, "LogBulkManager", {
        get: function () {
            if (!Logger.logBulkManager) {
                Logger.logBulkManager = Singularizer.singularized(Logger.windowName);
            }
            return Logger.logBulkManager;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Whenever the shell initiates its callback, this handling also will be initiated as well
     * ? Static may change? Will see
     * @param timer Seconds of writing down the messages
     * @param callBack Function that handles the messages, comes from shell.
     */
    Logger.Init = function (_a) {
        var callBack = _a.callBack, bulkSize = _a.bulkSize;
        this.logBulkManager = new _bulkManager__WEBPACK_IMPORTED_MODULE_1__.BulkManager();
        this.logBulkManager.logHandler = callBack;
        this.logBulkManager.bulkSize = bulkSize;
        Singularizer.trySingularize(this.windowName, this.logBulkManager);
    };
    /**
     * Console log function
     * @param logMessage Message that to be written to the console
     * @param logType console type(Debug, Trace, Warning, Error)
     * @param backgroundColor message background color
     * @param color message text color
     * @param additional additional info for logging
     * @param yamlLogType
     * @returns void
     */
    Logger.Log = function (_a) {
        var logMessage = _a.logMessage, _b = _a.logType, logType = _b === void 0 ? _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Debug : _b, error = _a.error, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? null : _c, _d = _a.textColor, textColor = _d === void 0 ? null : _d, _e = _a.additional, additional = _e === void 0 ? null : _e, source = _a.source, _f = _a.isClientLog, isClientLog = _f === void 0 ? false : _f, yamlLogType = _a.yamlLogType, minEngineLogLevel = _a.minEngineLogLevel, ownerEventName = _a.ownerEventName;
        var colorOptions = backgroundColor || textColor ? "background: " + backgroundColor + "; color: " + textColor : null;
        var targetLog;
        switch (true) {
            case logType == _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.MobilDebug && this.logLevel.indexOf(_interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.MobilDebug) > -1:
                targetLog = console.log;
                break;
            case (logType == _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Debug && this.logLevel.indexOf(_interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Debug) > -1):
            case (logType == _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Trace && this.logLevel.indexOf(_interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Trace) > -1):
                targetLog = console.log;
                break;
            case (logType == _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Error && this.logLevel.indexOf(_interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Error) > -1):
                targetLog = console.error;
                break;
            case (logType == _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Warning && this.logLevel.indexOf(_interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Warning) > -1):
                targetLog = console.warn;
                break;
            case true:
                break;
        }
        var params = [logMessage];
        if (colorOptions && typeof logMessage === "string") {
            params[0] = '%c' + logMessage;
            params.push(colorOptions);
        }
        if (error) {
            params.push(error);
        }
        if (additional) {
            params.push(additional);
        }
        if (source) { // MUST BE LAST!!!! (used in mobile sim. -> editor logging)
            params.push({ source: source });
        }
        if (!Logger.checkEventNameIsSpecial(ownerEventName) || isClientLog) {
            params[3] = { clientOnlyLog: true };
        }
        targetLog === null || targetLog === void 0 ? void 0 : targetLog.apply(console, params);
        if (!Logger.checkEventNameIsSpecial(ownerEventName)) {
            return;
        }
        if (isClientLog || (isClientLog && yamlLogType && yamlLogType <= logType) || minEngineLogLevel && minEngineLogLevel <= logType) {
            this.prepareClientLog(logMessage, logType);
        }
    };
    Logger.checkEventNameIsSpecial = function (eventName) {
        return eventName ? !(eventName === "onBeforeRequest" || eventName === "onAfterResponse" || eventName === "logHandler") : true;
    };
    /**
     * Log messages are controlled by their size and add them to the bulk array with type, date and caller function name
     * @param logMessage Message that will be written to the server
     * @param logType Type of log message
     */
    Logger.prepareClientLog = function (logMessage, logType) {
        var _a;
        var currentDateFormat = new Date(Date.now());
        var clientDate = currentDateFormat.getFullYear() + "." + ("0" + (currentDateFormat.getMonth() + 1)).slice(-2) + "." + ("0" + currentDateFormat.getDate()).slice(-2) + " " +
            currentDateFormat.getHours() + ':' + ("0" + currentDateFormat.getMinutes()).slice(-2) + ':' + ("0" + currentDateFormat.getSeconds()).slice(-2) + ':' + currentDateFormat.getMilliseconds();
        ;
        var message;
        var whoCallMe = this.getCalleFunctionName();
        if (typeof logMessage !== "string") {
            try {
                message = this.shorten(JSON.stringify(logMessage), logType);
            }
            catch (error) {
                message = "Can not stringfy the given log. Type of log data is: " + Object.prototype.toString.call(logMessage);
            }
        }
        else {
            message = this.shorten(logMessage, logType);
        }
        (_a = Logger.LogBulkManager) === null || _a === void 0 ? void 0 : _a.writeMessage({ message: message, type: _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType[logType], time: clientDate, caller: whoCallMe });
    };
    /**
     * Can't call Log.calle.caller beacuse of the TypeScript classes are on "strict mode"
     * JS doesn't allow to arguments.callee.caller on strict mode
     * So just throw an simple Error and get the latest function name
     * returns String
     */
    Logger.getCalleFunctionName = function () {
        // try {
        //     throw new Error();
        // }
        // catch (e) {
        //     try {
        //         return e.stack.split('at ')[4].split(' ')[0];
        //     } catch (e) {
        //         return '';
        //     }
        // }
        return '';
    };
    /**
     * Clears the bulk of messages
     */
    Logger.clearLogs = function () {
        var _a, _b;
        (_b = (_a = Logger.LogBulkManager) === null || _a === void 0 ? void 0 : _a.clear) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    /**
     * Trim the message with size of the log type
     * @param logMessage log message
     * @param logType Log type that will be controlled
     */
    Logger.shorten = function (logMessage, logType) {
        return logMessage;
        // if (logType > logMessage.length) {
        // } else {
        //     return "Non trimmed message size is: " + logMessage.length;
        // }
    };
    ;
    /**
     * @deprecated do not use. Use Logger.Log(...)
     */
    Logger.prototype.Log = function (options) {
        return Logger.Log(options);
    };
    Logger.windowName = Singularizer.getFreeName("shrimp_shelldorynemo_pulsar_lbm");
    Logger.logLevel = [_interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.MobilDebug, _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Trace, _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Debug, _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Warning, _interfaces_ComponentInterfaces_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogType.Error];
    return Logger;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/qjsonParser/QJsonContentParser.ts":
/*!*********************************************************************!*\
  !*** ../../common/shrimp/helpers/qjsonParser/QJsonContentParser.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QJsonContentParser": () => (/* binding */ QJsonContentParser)
/* harmony export */ });
var QJsonContentParser = /** @class */ (function () {
    function QJsonContentParser() {
    }
    QJsonContentParser.ParseQJsonContent = function (jsonString) {
        var json = jsonString;
        if (jsonString.indexOf("let pjson =") > -1) {
            var jsonSplitted = jsonString.split("let pjson =");
            jsonSplitted = jsonSplitted[1].split(';\nexport')[0].split(';\r\nexport');
            json = jsonSplitted[0];
        }
        else if (json.indexOf("rally_microUI") > -1) {
            var registerIndex = json.indexOf("registerQJson");
            var jsonStartIndex = json.indexOf(",", registerIndex) + 1;
            json = json.substring(jsonStartIndex, json.length - 2);
        }
        return JSON.parse(json);
    };
    return QJsonContentParser;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/qjsonParser/QJsonExtractHelper.ts":
/*!*********************************************************************!*\
  !*** ../../common/shrimp/helpers/qjsonParser/QJsonExtractHelper.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QJsonExtractHelper": () => (/* binding */ QJsonExtractHelper)
/* harmony export */ });
/* harmony import */ var _QJsonParserV2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QJsonParserV2 */ "../../common/shrimp/helpers/qjsonParser/QJsonParserV2.ts");
/* harmony import */ var _QJsonContentParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QJsonContentParser */ "../../common/shrimp/helpers/qjsonParser/QJsonContentParser.ts");


var QJsonExtractHelper = /** @class */ (function () {
    function QJsonExtractHelper() {
    }
    QJsonExtractHelper.qJsonExtractor = function (qjsonData) {
        var jsonString = QJsonExtractHelper.qJsonMediumDecider(qjsonData);
        if (jsonString.startsWith("qjson-")) {
            var version = (0,_QJsonParserV2__WEBPACK_IMPORTED_MODULE_0__.removeCR)(jsonString.substring("qjson-".length, jsonString.indexOf("\n")));
            return parsers[version].Parse(jsonString);
        }
        return QJsonExtractHelper.ParseQJsonContent(jsonString);
    };
    QJsonExtractHelper.qJsonMediumDecider = function (qjsonData) {
        if (typeof qjsonData == "string") { //rally | symphony
            return qjsonData.startsWith('{"qjson":"') ? JSON.parse(qjsonData).qjson : qjsonData; // symphony : other
        }
        else {
            var qjsonString = JSON.stringify(qjsonData);
            return qjsonData.qjson || qjsonString; //symphony & websdk.axios
        }
    };
    QJsonExtractHelper.ParseQJsonContent = function (jsonString) {
        return _QJsonContentParser__WEBPACK_IMPORTED_MODULE_1__.QJsonContentParser.ParseQJsonContent(jsonString);
    };
    return QJsonExtractHelper;
}());

var parsers = { v2: new _QJsonParserV2__WEBPACK_IMPORTED_MODULE_0__.QJsonParserV2() };


/***/ }),

/***/ "../../common/shrimp/helpers/qjsonParser/QJsonParserV2.ts":
/*!****************************************************************!*\
  !*** ../../common/shrimp/helpers/qjsonParser/QJsonParserV2.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QJsonParserV2": () => (/* binding */ QJsonParserV2),
/* harmony export */   "removeCR": () => (/* binding */ removeCR)
/* harmony export */ });
/* harmony import */ var _QJsonContentParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QJsonContentParser */ "../../common/shrimp/helpers/qjsonParser/QJsonContentParser.ts");
//////////////////////////////////SAMPLE V2 QJSON\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/**
 * @see \test\qjsonV2Tests.spec.ts
 */
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\SAMPLE V2 QJSON//////////////////////////////////

var QJsonParserV2 = /** @class */ (function () {
    function QJsonParserV2() {
    }
    QJsonParserV2.QJsonBodyToString = function (qjson, unformatQjson) {
        return "let pjson = " +
            (unformatQjson == true ? JSON.stringify(qjson) : JSON.stringify(qjson, null, '\t')) +
            ";\r\n" +
            "export default pjson";
    };
    QJsonParserV2.prototype.Serialize = function (qjson) {
        var bodundary = QJsonParserV2.boundary + "\r\n";
        var header = QJsonParserV2.headerPrefix + "v2\r\nboundary: " + bodundary + "\r\n" + bodundary;
        var serializeFile = function (fileName, type, fileBody) { return "name: " + fileName + "\r\ntype: " + type + "\r\n\r\n" + fileBody; };
        var files = qjson.files;
        var cFiles = qjson.cFiles;
        var qjsonFile;
        try {
            qjson.files = undefined;
            qjson.cFiles = undefined;
            qjsonFile = serializeFile("qjson", "qjson", QJsonParserV2.QJsonBodyToString(qjson));
        }
        finally {
            qjson.files = files;
            qjson.cFiles = cFiles;
        } // atomic
        var fileItems = files ? bodundary + Object.keys(files).map(function (fileName) { return serializeFile(fileName, "source", files[fileName]); }).join(bodundary) : "";
        var cFileItems = cFiles ? bodundary + Object.keys(cFiles).map(function (fileName) { return serializeFile(fileName, "compiled", cFiles[fileName]); }).join(bodundary) : "";
        return header + qjsonFile + fileItems + cFileItems;
    };
    QJsonParserV2.prototype.Parse = function (jsonString) {
        var curLine = this.nextLine(jsonString, 0);
        var fileHeaders = this.extractHeaders(jsonString, curLine.lastIndex);
        var boundary = fileHeaders.headers.boundary;
        var lastIndex = fileHeaders.lastIndex;
        var files = {};
        var cFiles = {};
        do {
            var section = this.getSection(jsonString, boundary, lastIndex);
            var targetFiles = section.headers.type == "compiled" ? cFiles : files;
            targetFiles[section.headers.name] = { headers: section.headers, content: section.section };
            lastIndex = section.lastIndex;
        } while (lastIndex != -1);
        var qjson = _QJsonContentParser__WEBPACK_IMPORTED_MODULE_0__.QJsonContentParser.ParseQJsonContent(files["qjson"].content);
        delete files.qjson;
        var qjsonFiles = qjson.files = {};
        var qjsonCFiles = qjson.cFiles = {};
        Object.keys(files).forEach(function (fileName) { return qjsonFiles[fileName] = files[fileName].content; });
        Object.keys(cFiles).forEach(function (fileName) { return qjsonCFiles[fileName] = cFiles[fileName].content; });
        return qjson;
    };
    QJsonParserV2.prototype.getSection = function (str, boundary, lastIndex) {
        var headers = this.extractHeaders(str, lastIndex);
        var section = this.getTillBoundary(str, boundary, headers.lastIndex);
        return { headers: headers.headers, section: section.section, lastIndex: section.lastIndex };
    };
    QJsonParserV2.prototype.getTillBoundary = function (str, boundary, lastIndex) {
        var nextBoundaryIndex = str.indexOf(boundary, lastIndex);
        if (nextBoundaryIndex == -1) {
            return { section: str.substring(lastIndex), lastIndex: -1 };
        }
        return { section: str.substring(lastIndex, nextBoundaryIndex), lastIndex: nextBoundaryIndex + boundary.length + 1 };
    };
    QJsonParserV2.prototype.extractHeaders = function (str, lastIndex) {
        var headersBucket = {};
        var curLine = { line: "", lastIndex: lastIndex };
        do {
            curLine = this.nextLine(str, curLine.lastIndex);
            if (!curLine.line) {
                break;
            } // headers section end
            var lineData = this.parseLine(curLine.line);
            if (!lineData) {
                continue;
            } // line is not parsable skip
            headersBucket[lineData.key] = lineData.value;
        } while (curLine.lastIndex != -1);
        return { headers: headersBucket, lastIndex: curLine.lastIndex };
    };
    QJsonParserV2.prototype.parseLine = function (line) {
        var commaIndex = line.indexOf(":");
        if (commaIndex == -1) {
            return undefined;
        }
        return { key: line.substring(0, commaIndex).trim(), value: line.substring(commaIndex + 1).trim() };
    };
    QJsonParserV2.prototype.nextLine = function (str, lastIndex) {
        var lineEnd = str.indexOf("\n", lastIndex);
        var line = removeCR(str.substring(lastIndex, lineEnd == -1 ? undefined : lineEnd));
        return { line: line, lastIndex: lineEnd + 1 || -1 };
    };
    QJsonParserV2.boundary = "-------------------" + "QJSONFileBoundary" + "-----------------------------";
    QJsonParserV2.headerPrefix = "qjson-";
    return QJsonParserV2;
}());
function removeCR(str) {
    return str.endsWith("\r") ? str.substring(0, str.length - 1) : str;
}



/***/ }),

/***/ "../../common/shrimp/helpers/scriptRootPathHelper.ts":
/*!***********************************************************!*\
  !*** ../../common/shrimp/helpers/scriptRootPathHelper.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptRootPathHelper": () => (/* binding */ ScriptRootPathHelper)
/* harmony export */ });
var src = document.currentScript.src;
var pathRoot = src.substring(0, src.lastIndexOf("/"));
var ScriptRootPathHelper = /** @class */ (function () {
    function ScriptRootPathHelper() {
    }
    ScriptRootPathHelper.getScriptRoot = function () {
        return pathRoot;
    };
    ScriptRootPathHelper.concatUrl = function (url1, url2) {
        return (url1.endsWith("/") ? url1 : url1 + "/") + (url2.startsWith("/") ? url2.substring(1) : url2);
    };
    return ScriptRootPathHelper;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/singularizer.ts":
/*!***************************************************!*\
  !*** ../../common/shrimp/helpers/singularizer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Singularizer": () => (/* binding */ Singularizer)
/* harmony export */ });
var Singularizer = /** @class */ (function () {
    function Singularizer() {
    }
    Singularizer.trySingularize = function (name, targetObject, instance) {
        var retVal = targetObject[name];
        if (!retVal) {
            retVal = targetObject[name] = instance;
        }
        return retVal;
    };
    return Singularizer;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/typeHelper.ts":
/*!*************************************************!*\
  !*** ../../common/shrimp/helpers/typeHelper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeHelper": () => (/* binding */ TypeHelper)
/* harmony export */ });
var TypeHelper = /** @class */ (function () {
    function TypeHelper() {
    }
    TypeHelper.prototype.isJsonString = function (param) {
        try {
            JSON.parse(param);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    TypeHelper.prototype.GetObjectType = function (param) {
        return Object.prototype.toString.call(param);
    };
    ;
    /** @deprecated use instanceof for typescript type distinction intellisense. ex: if (variable instanceof Array)*/
    TypeHelper.prototype.isArray = function (param) {
        return this.GetObjectType(param) == "[object Array]";
    };
    ;
    TypeHelper.prototype.isString = function (param) {
        return this.GetObjectType(param) === "[object String]";
    };
    ;
    TypeHelper.prototype.isNumber = function (param) {
        return this.GetObjectType(param) === "[object Number]";
    };
    ;
    TypeHelper.prototype.isNull = function (param) {
        return param === null || param === undefined;
    };
    ;
    TypeHelper.prototype.isFunction = function (param) {
        return this.GetObjectType(param) === "[object Function]";
    };
    ;
    TypeHelper.prototype.isObject = function (param) {
        return this.GetObjectType(param) === "[object Object]";
    };
    ;
    TypeHelper.prototype.isBool = function (param) {
        return this.GetObjectType(param) === "[object Boolean]";
    };
    ;
    TypeHelper.prototype.isBooleanConstructor = function (param) {
        return (param === null || param === void 0 ? void 0 : param.toString()) == "function Boolean() { [native code] }";
    };
    TypeHelper.prototype.isStringConstructor = function (param) {
        return (param === null || param === void 0 ? void 0 : param.toString()) == "function String() { [native code] }";
    };
    TypeHelper.prototype.isArrayConstructor = function (param) {
        return (param === null || param === void 0 ? void 0 : param.toString()) == "function Array() { [native code] }";
    };
    TypeHelper.prototype.isObjectConstructor = function (param) {
        return (param === null || param === void 0 ? void 0 : param.toString()) == "function Object() { [native code] }";
    };
    TypeHelper.prototype.isNumberConstructor = function (param) {
        return (param === null || param === void 0 ? void 0 : param.toString()) == "function Number() { [native code] }";
    };
    TypeHelper.prototype.isDateString = function (param) {
        if (!this.isString(param)) {
            return false;
        }
        return !isNaN(Date.parse(param));
    };
    ;
    TypeHelper.prototype.isDate = function (param) {
        return this.GetObjectType(param) === "[object Date]";
    };
    TypeHelper.prototype.isFile = function (param) {
        return this.GetObjectType(param) === "[object File]";
    };
    TypeHelper.prototype.isBlob = function (param) {
        var MyBlob = new Blob([param]);
        return MyBlob instanceof Blob; // true
    };
    TypeHelper.prototype.cloneObject = function (obj) {
        var copy;
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) {
            return obj;
        }
        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        // Handle Array
        if (Array.isArray(obj)) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.cloneObject(obj[i]);
            }
            return copy;
        }
        // Handle Object
        if (typeof obj === "object") {
            copy = obj.constructor && obj.constructor.length < 1 ? new obj.constructor() : {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = this.cloneObject(obj[attr]);
                }
            }
            return copy;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    };
    ;
    return TypeHelper;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/urlHelper.ts":
/*!************************************************!*\
  !*** ../../common/shrimp/helpers/urlHelper.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlHelper": () => (/* binding */ UrlHelper)
/* harmony export */ });
/* harmony import */ var _scriptRootPathHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scriptRootPathHelper */ "../../common/shrimp/helpers/scriptRootPathHelper.ts");

var UrlHelper = /** @class */ (function () {
    function UrlHelper() {
    }
    UrlHelper.getScriptRoot = function () {
        return _scriptRootPathHelper__WEBPACK_IMPORTED_MODULE_0__.ScriptRootPathHelper.getScriptRoot();
    };
    UrlHelper.concatUrl = function (url1, url2) {
        return _scriptRootPathHelper__WEBPACK_IMPORTED_MODULE_0__.ScriptRootPathHelper.concatUrl(url1, url2);
    };
    UrlHelper.IsDirectUrl = function (url) {
        return url.startsWith("http:") || url.startsWith("https:") || url.startsWith("blob:");
    };
    UrlHelper.GetDomain = function (urlString) {
        var url;
        try {
            url = new URL(urlString);
        }
        catch (ex) {
            var a = document.createElement("a");
            a.href = urlString;
            url = a;
        }
        return url.protocol + "//" + url.hostname + (url.port ? ":" + url.port : "");
    };
    UrlHelper.ParseQuery = function (queryString) {
        var query = {};
        if (!queryString) {
            return query;
        }
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            var curKey = decodeURIComponent(pair[0]);
            var curItem = query[curKey];
            if (!curItem) {
                curItem = [];
                query[curKey] = curItem;
            }
            curItem.push(decodeURIComponent(pair[1] || ''));
        }
        return query;
    };
    return UrlHelper;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/windowHelper.ts":
/*!***************************************************!*\
  !*** ../../common/shrimp/helpers/windowHelper.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowHelper": () => (/* binding */ WindowHelper)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "../../common/shrimp/helpers/logger.ts");
/* harmony import */ var _singularizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singularizer */ "../../common/shrimp/helpers/singularizer.ts");


var undefinedType = "undefined";
var WindowHelper = /** @class */ (function () {
    function WindowHelper() {
        this.doc = typeof (document) !== undefinedType ? document : {
            addEventListener: function (type, listener, options) {
                //might simulate this in future...
                _logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log({ logMessage: "Enviroment does not support document. Triggering document.addEventListener now, type is: " + type, logType: _logger__WEBPACK_IMPORTED_MODULE_0__.LogType.Warning });
                listener({ target: { readyState: this.readyState } });
            },
            createElement: function (tagName, options) {
                return { tagName: tagName, options: options };
            },
            readyState: "complete"
        };
        this.hist = typeof (history) !== undefinedType ? history : {
            pushState: function (data, title, url) {
                //might log data and url with additional data in logging
                _logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log({ logMessage: "history.pushState not supported on Node. title: " + title, logType: _logger__WEBPACK_IMPORTED_MODULE_0__.LogType.Debug });
            }
        };
        this.win = typeof (window) !== undefinedType ? window : {
            setInterval: setInterval,
            clearInterval: clearInterval,
            setTimeout: setTimeout,
            clearTimeout: clearTimeout,
            atob: atob,
            btoa: btoa
        };
        this.helperWorker = {
            worker: function (scriptURL, options) {
                return typeof (Worker) !== undefinedType ? new Worker(scriptURL, options) : undefined;
            }
        };
        // this.eventListeners = this.wrapEventListeners();
    }
    Object.defineProperty(WindowHelper.prototype, "onPopState", {
        set: function (value) {
            if (typeof (window) !== undefinedType) {
                window.onpopstate = value;
            }
            else {
                _logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log({ logMessage: "onPopState not supported on Node.", logType: _logger__WEBPACK_IMPORTED_MODULE_0__.LogType.Debug });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "document", {
        get: function () {
            return this.doc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "history", {
        get: function () {
            return this.hist;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "Window", {
        get: function () {
            return this.win;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "Worker", {
        get: function () {
            return this.helperWorker;
        },
        enumerable: false,
        configurable: true
    });
    WindowHelper.Instance = _singularizer__WEBPACK_IMPORTED_MODULE_1__.Singularizer.trySingularize("theOneWindow", new WindowHelper().Window, new WindowHelper());
    return WindowHelper;
}());



/***/ }),

/***/ "../../common/shrimp/interfaces/ComponentInterfaces/ILogger.ts":
/*!*********************************************************************!*\
  !*** ../../common/shrimp/interfaces/ComponentInterfaces/ILogger.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogType": () => (/* binding */ LogType)
/* harmony export */ });
var LogType;
(function (LogType) {
    LogType[LogType["Debug"] = 0] = "Debug";
    LogType[LogType["MobilDebug"] = 1000] = "MobilDebug";
    LogType[LogType["Trace"] = 200000] = "Trace";
    LogType[LogType["Warning"] = 500000] = "Warning";
    LogType[LogType["Error"] = 1000000] = "Error"; // 500Kb
})(LogType || (LogType = {}));


/***/ }),

/***/ "../../common/shrimp/interfaces/Scripting/LangCalc.ts":
/*!************************************************************!*\
  !*** ../../common/shrimp/interfaces/Scripting/LangCalc.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangCalc": () => (/* binding */ LangCalc)
/* harmony export */ });
var LangCalc = /** @class */ (function () {
    function LangCalc() {
    }
    LangCalc.getLang = function (_a) {
        var _b, _c;
        var self = _a.self, ctrl = _a.ctrl, qJson = _a.qJson, qLang = _a.qLang;
        return self || ((_b = ctrl === null || ctrl === void 0 ? void 0 : ctrl.O) === null || _b === void 0 ? void 0 : _b.CL) || (((_c = qJson === null || qJson === void 0 ? void 0 : qJson.opt) === null || _c === void 0 ? void 0 : _c.QL) || qLang);
    };
    return LangCalc;
}());



/***/ }),

/***/ "./build/legacy.ts":
/*!*************************!*\
  !*** ./build/legacy.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Legacy": () => (/* binding */ Legacy)
/* harmony export */ });
/* harmony import */ var _common_shrimp_helpers_urlHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/shrimp/helpers/urlHelper */ "../../common/shrimp/helpers/urlHelper.ts");
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

var Legacy = /** @class */ (function () {
    function Legacy() {
    }
    Legacy.migrateLegacySettings = function (settings) {
        /*
        csspath -> cssPath
        domainURL, urlprefix  ->  qjsonURLPrefix
        RegionalDefinition  ->  regionalDefinition
        DomainModuleList -> domainModuleList
        Backend -> backendInf
        PredefinedBackendHeaders -> backendInf.PredefinedBackendHeaders
        HeaderExceptionList -> backendInf.HeaderExceptionList
        Header -> backendInf.Header
        backendInf.singleTab -> singleTab
        */
        var legacySettingFields = [
            { oldField: "csspath", newField: "cssPath", log: "legacy Settings.yaml. change csspath -> cssPath" },
            { oldField: "domainURL", newField: "qjsonURLPrefix", log: "legacy Settings.yaml. change domainURL -> qjsonURLPrefix" },
            { oldField: "urlprefix", newField: "qjsonURLPrefix", log: "legacy Settings.yaml. change urlprefix -> qjsonURLPrefix" },
            { oldField: "RegionalDefinition", newField: "regionalDefinition", log: "legacy Settings.yaml. change RegionalDefinition -> regionalDefinition" },
            { oldField: "DomainModuleList", newField: "domainModuleList", log: "legacy Settings.yaml. change DomainModuleList -> domainModuleList" },
            { oldField: "Backend", newField: "backendInf", log: "legacy Settings.yaml. Move Backend in to backendInf key." },
            { oldField: "PredefinedBackendHeaders", newField: "backendInf.PredefinedBackendHeaders", log: "legacy Settings.yaml. Move PredefinedBackendHeaders in to backendInf key." },
            { oldField: "HeaderExceptionList", newField: "backendInf.HeaderExceptionList", log: "legacy Settings.yaml. Move HeaderExceptionList in to backendInf key." },
            { oldField: "Header", newField: "backendInf.Header", log: "legacy Settings.yaml. Move Header in to backendInf key." },
            { oldField: "backendInf.singleTab", newField: "singleTab", log: "legacy Settings.yaml. Move Header in to backendInf key." },
            { oldField: "yamlLogType", newField: "appSettings.logging.yamlLogType", log: "legacy Settings.yaml. Move yamlLogType in to appSettings yamlLogType key." },
            { oldField: "minEngineLogLevel", newField: "appSettings.logging.minEngineLogLevel", log: "legacy Settings.yaml. Move minEngineLogLevel in to appSettings minEngineLogLevel key." },
            { oldField: "logBulkSize", newField: "appSettings.logging.logBulkSize", log: "legacy Settings.yaml. Move logBulkSize in to appSettings logBulkSize key." },
        ];
        var findOldFieldValue = function (fieldPath) {
            var fieldPathArray = fieldPath.split('.');
            var field = settings;
            for (var i = 0; i < fieldPathArray.length; i++) {
                var temp = field[fieldPathArray[i]];
                if (!temp) {
                    return;
                }
                if (i == fieldPathArray.length - 1)
                    delete field[fieldPathArray[i]];
                field = temp;
            }
            return field;
        };
        var setNewFieldValue = function (value, fieldPathArray, settings) {
            if (fieldPathArray.length == 1) {
                if (!settings[fieldPathArray[0]]) {
                    settings[fieldPathArray[0]] = value;
                }
                return;
            }
            if (settings[fieldPathArray[0]] && typeof (settings[fieldPathArray[0]]) != "object")
                settings[fieldPathArray[0]] = {};
            settings[fieldPathArray[0]] = settings[fieldPathArray[0]] || {};
            setNewFieldValue(value, fieldPathArray.slice(1), settings[fieldPathArray[0]]);
        };
        legacySettingFields.forEach(function (item) {
            var oldField = findOldFieldValue(item.oldField);
            if (oldField) {
                setNewFieldValue(oldField, item.newField.split('.'), settings);
            }
        });
        return settings;
    };
    /*
     * @param url: (legacy applications url format: quick://<module_name>/<path_to_file>)
     * @returns formattedURL for newBuild
     */
    Legacy.fixLegacyPathFormat = function (url) {
        if (url.startsWith("quick://")) {
            var splittedPath = url.substring(8).split('/');
            return "/microui/" + splittedPath[0] + "/qjson/" + url.substring(splittedPath[0].length + 9);
        }
        else {
            return url;
        }
    };
    Legacy.containerServicesModifications = function (containerServices, plateauIAM) {
        if (!containerServices) {
            containerServices = {};
        }
        if (plateauIAM) {
            containerServices.logout = function () { plateauIAM.logout(); };
            containerServices.getPlateauIAM = function () { return plateauIAM; };
        }
        return containerServices;
    };
    Legacy.fixQueryString = function (qjsonPath) {
        var _a;
        //ex:
        //this is symphony -> "q=/isleasing-sym/qjsonfunc?qjsonpath=homeTablet"
        //this is qui -> "q=/static/qjsons/homeTablet"
        var search = window.location.search;
        var fragment = window.location.hash;
        var query = {};
        if (search) {
            search = search[0] === '?' ? search.substr(1) : search;
            search = search.replace(/\?/, "&");
            query = _common_shrimp_helpers_urlHelper__WEBPACK_IMPORTED_MODULE_0__.UrlHelper.ParseQuery(search);
            qjsonPath = query.q ? query.q.splice(0, 1).join("") : qjsonPath;
            if (((_a = query.q) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                delete query.q;
            }
        }
        if (query.qjsonpath) {
            qjsonPath += "?qjsonpath=" + query.qjsonpath.splice(0, 1);
            if (query.qjsonpath.length == 0) {
                delete query.qjsonpath;
            }
        }
        var leftQueryString = Object.entries(query).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return value === null || value === void 0 ? void 0 : value.map(function (eachValue) { return encodeURIComponent(key) + "=" + encodeURIComponent(eachValue); });
        }).map(function (item) { return item === null || item === void 0 ? void 0 : item.join("&"); }).join('&');
        if (qjsonPath === null || qjsonPath === void 0 ? void 0 : qjsonPath.endsWith(".js")) {
            return qjsonPath;
        }
        if (qjsonPath) {
            var _qjsonPath = (qjsonPath === null || qjsonPath === void 0 ? void 0 : qjsonPath.endsWith(".qjson")) ? qjsonPath : qjsonPath += ".qjson";
            var retVal = leftQueryString ? _qjsonPath + "?" + leftQueryString : _qjsonPath;
            return retVal + fragment;
        }
        return qjsonPath;
    };
    return Legacy;
}());



/***/ }),

/***/ "./src/managers/LivePreviewManager.ts":
/*!********************************************!*\
  !*** ./src/managers/LivePreviewManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LivePreviewManager": () => (/* binding */ LivePreviewManager)
/* harmony export */ });
/* harmony import */ var _stechquick_algae_lib_protocols_PlateauMessaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stechquick/algae/lib/protocols/PlateauMessaging */ "../../node_modules/@stechquick/algae/lib/protocols/PlateauMessaging.js");
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

var LivePreviewManager = /** @class */ (function () {
    function LivePreviewManager() {
        if (!window.opener) {
            return;
        }
        this.frameCommunication = _stechquick_algae_lib_protocols_PlateauMessaging__WEBPACK_IMPORTED_MODULE_0__.PlateauMessaging.CreatePlateauMessaging(window.opener);
    }
    LivePreviewManager.prototype.isItLivePreview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.frameCommunication) {
                            return [2 /*return*/, false];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.frameCommunication.Send("LivePreview", "getLPID", { type: "getLPID" }, { awaitResponse: true, awaitTime: 100 })];
                    case 2:
                        response = _b.sent();
                        if (!response || response.msg.type != "getLPIDResponse") {
                            return [2 /*return*/, false];
                        }
                        this.livePreviewID = response.msg.ID;
                        return [2 /*return*/, response.msg.ID];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LivePreviewManager.prototype.getLivePreviewSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.frameCommunication) {
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.frameCommunication.Send("LivePreview", "getLPPlateauUIOptions", { type: "getLPPlateauUIOptions" }, { awaitResponse: true, awaitTime: 10000 })];
                    case 2:
                        response = _b.sent();
                        if (!response || response.msg.type != "getLPPlateauUIOptionsResponse") {
                            return [2 /*return*/];
                        }
                        if (!response.msg.PlateauUIOptions.serviceWorker) {
                            this.getQjsonUrlPrefix = response.msg.getQJsonUrlPrefix;
                        }
                        response.msg.PlateauUIOptions.settings.settings = response.msg.PlateauUIOptions.settings.settings || { value: {}, type: "object" };
                        response.msg.PlateauUIOptions.settings.settings.value["useLocalProxyOnClient"] = true;
                        return [2 /*return*/, response.msg.PlateauUIOptions];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LivePreviewManager.prototype.sendSwMessage = function (packId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.frameCommunication) {
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.frameCommunication.Send("LivePreview", "lpServiceWorkerRequestRequest", { type: "lpServiceWorkerRequestRequest", resourceId: packId }, { awaitResponse: true, awaitTime: 60000 })];
                    case 2:
                        response = _b.sent();
                        if (!response || response.msg.type != "lpServiceWorkerRequestResponse") {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, response.msg];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LivePreviewManager.prototype.setExternalQJsonRetriever = function (sdk) {
        if (!this.getQjsonUrlPrefix) {
            return;
        }
        sdk.setQJsonUrlPrefix(this.getQjsonUrlPrefix);
    };
    return LivePreviewManager;
}());



/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/helpers/createPromiseData.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/helpers/createPromiseData.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePromiseData = void 0;
var syncResolved = false;
new Promise(function (res) { return res(); }).then(function () { return syncResolved = true; });
typeof (doNothing) != "undefined" && doNothing();
var syncResolveProblem = syncResolved === true; // platform has sync resolve problem or not
/**
 * @param timeout timeout time in ms, undefined if infinite
 */
function CreatePromiseData(timeout, opt) {
    if (opt === void 0) { opt = {}; }
    var syncResolveFixer = function (cb) { return syncResolveProblem && opt.fixSyncResolve ? function (value) { return setTimeout(function () { return cb(value); }); } : cb; };
    var resolver = undefined, reject = undefined;
    var timer;
    var startTimer = function (timeout) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () { reject(new Error("The operation has timed out. timeoutValue  : " + timeout)); }, timeout);
    };
    if (timeout) {
        startTimer(timeout);
    }
    return {
        startTimer: startTimer,
        promise: new Promise(function (res, rej) { resolver = syncResolveFixer(res); reject = rej; }),
        resolver: resolver,
        reject: reject
    };
}
exports.CreatePromiseData = CreatePromiseData;


/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/helpers/cryptoHelper.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/helpers/cryptoHelper.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CryptoHelper = void 0;
var CryptoHelper = /** @class */ (function () {
    function CryptoHelper() {
    }
    CryptoHelper.generateRandom = function (nums) {
        var characters = '0123456789abcdefghijklmnopqrstuvwxyz';
        var sum = nums.reduce(function (prev, cur) { return prev + cur; }, 0);
        var isomorphicCrypto = typeof crypto != "undefined" ? eval("crypto") : eval("require")("crypto");
        var randomValues = isomorphicCrypto.getRandomValues(new Uint8Array(sum));
        var index = 0;
        return nums.reduce(function (prev, num) {
            prev.push(Array.from(new Array(num)).map(function (_) { return characters[randomValues[index++] % characters.length]; }).join(""));
            return prev;
        }, []);
    };
    /**
     * be945482-jf10-40d1-a50d-rzxa2c41fdcu
     * (   8    - 4  - 4  - 4  - 3 ) + 9(time)(1970 - 5186)
     */
    CryptoHelper.CreateGuid = function () {
        var timePart = Date.now().toString(36).substring(0, 9).padStart(9, "0");
        var randomPart = CryptoHelper.generateRandom([8, 4, 4, 4, 3]).join("-");
        return randomPart + timePart;
    };
    return CryptoHelper;
}());
exports.CryptoHelper = CryptoHelper;


/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/helpers/eventBus.js":
/*!********************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/helpers/eventBus.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventBus = void 0;
var hook_1 = __webpack_require__(/*! ./hook */ "../../node_modules/@stechquick/algae/lib/helpers/hook.js");
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.subsDict = {};
    }
    EventBus.prototype.obtainSubsList = function (eventName) {
        return this.subsDict[eventName] || (this.subsDict[eventName] = new hook_1.Hook("EventBus_" + eventName));
    };
    EventBus.prototype.Subscribe = function (eventName, cb) {
        if (eventName == EventBus.AllEvents) {
            throw new Error(eventName + " is a registered key. If you want to subscribe all events, use SubsribeAll().");
        }
        this.obtainSubsList(eventName).subscribe(cb);
    };
    EventBus.prototype.Unsubscribe = function (eventName, cb) {
        var _a;
        if (eventName == EventBus.AllEvents) {
            throw new Error(eventName + " is a registered key. If you want to subscribe all events, use SubsribeAll().");
        }
        (_a = this.subsDict[eventName]) === null || _a === void 0 ? void 0 : _a.unsubscribe(cb);
    };
    EventBus.prototype.SubscribeAll = function (cb) {
        this.obtainSubsList(EventBus.AllEvents).subscribe(cb);
    };
    EventBus.prototype.UnsubscribeAll = function (cb) {
        var _a;
        (_a = this.subsDict[EventBus.AllEvents]) === null || _a === void 0 ? void 0 : _a.unsubscribe(cb);
    };
    EventBus.prototype.Trigger = function (eventName) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var allEventsHook = this.subsDict[EventBus.AllEvents];
        allEventsHook === null || allEventsHook === void 0 ? void 0 : allEventsHook.triggerer.apply(allEventsHook, params);
        if (eventName == EventBus.AllEvents) {
            return;
        }
        var hook = this.subsDict[eventName];
        hook === null || hook === void 0 ? void 0 : hook.triggerer.apply(hook, params);
    };
    EventBus.prototype.TriggerJustAllSubs = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var allEventsHook = this.subsDict[EventBus.AllEvents];
        allEventsHook === null || allEventsHook === void 0 ? void 0 : allEventsHook.triggerer.apply(allEventsHook, params);
    };
    EventBus.prototype.destroy = function () {
        this.subsDict = {};
    };
    EventBus.AllEvents = "AllEvents";
    return EventBus;
}());
exports.EventBus = EventBus;


/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/helpers/frameCommunicator.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/helpers/frameCommunicator.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FrameCommunicator = void 0;
var structuredSocket_1 = __webpack_require__(/*! ./socket/structuredSocket */ "../../node_modules/@stechquick/algae/lib/helpers/socket/structuredSocket.js");
var WindowSocket = /** @class */ (function () {
    function WindowSocket(targetWindow) {
        var _this = this;
        this.OnMessageWithDirectObject = true;
        this.targetWindow = targetWindow;
        window.addEventListener("message", this.messageHandler = function (ev) {
            var _a;
            if (ev.source != targetWindow) {
                return;
            }
            (_a = _this.OnMessage) === null || _a === void 0 ? void 0 : _a.call(_this, ev.data);
        });
    }
    WindowSocket.prototype.Send = function (packet) {
        this.targetWindow.postMessage(packet, "*");
    };
    WindowSocket.prototype.destroy = function () {
        window.removeEventListener("message", this.messageHandler);
        this.OnMessage = undefined;
    };
    return WindowSocket;
}());
var FrameCommunicator = /** @class */ (function () {
    function FrameCommunicator(targetWindow) {
        this.windowSocket = new WindowSocket(targetWindow);
        this.structuredSocket = new structuredSocket_1.StructuredSocket(this.windowSocket);
    }
    FrameCommunicator.prototype.Send = function (target, messageType, message, options) {
        var structuredSocket = this.structuredSocket;
        return structuredSocket.Send(message, options);
    };
    FrameCommunicator.prototype.Subscribe = function (target, messageType, cb) {
        var structuredSocket = this.structuredSocket;
        structuredSocket.Subscribe(messageType, cb);
    };
    FrameCommunicator.prototype.SubscribeAll = function (cb) {
        this.structuredSocket.SubscribeAll(function (data) { return cb(data); });
    };
    FrameCommunicator.prototype.UnsubscribeAll = function (cb) {
        this.structuredSocket.UnsubscribeAll(function (data) { return cb(data); });
    };
    FrameCommunicator.prototype.destroy = function () {
        this.structuredSocket.destroy();
    };
    return FrameCommunicator;
}());
exports.FrameCommunicator = FrameCommunicator;


/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/helpers/hook.js":
/*!****************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/helpers/hook.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hook = void 0;
__webpack_require__(/*! ../polyfill/string */ "../../node_modules/@stechquick/algae/lib/polyfill/string.js");
var Hook = /** @class */ (function () {
    function Hook(hookName, options) {
        if (options === void 0) { options = {}; }
        this.subscribers = [];
        this.hookName = hookName;
        this.triggerPostSubscribersWithCb = options.triggerPostSubscribersWithCb || false;
        options.manageState = options.manageState || false;
        this.hookState = { triggered: false, triggerArgs: [], active: options.manageState };
    }
    Hook.configure = function (logger) { Hook.logger = logger; };
    Object.defineProperty(Hook.prototype, "TriggerPostSubscribersWithCb", {
        get: function () {
            return this.triggerPostSubscribersWithCb;
        },
        set: function (v) {
            this.triggerPostSubscribersWithCb = v;
        },
        enumerable: false,
        configurable: true
    });
    Hook.prototype.ResetAndStartState = function () {
        this.hookState.triggerArgs = [];
        this.hookState.active = true;
        this.hookState.triggered = false;
    };
    Hook.prototype.DisableState = function () {
        this.hookState.triggerArgs = [];
        this.hookState.active = false;
        this.hookState.triggered = false;
    };
    Hook.prototype.IsTriggered = function () {
        if (!this.hookState.active) {
            throw new Error("IsTriggered can not be checked on a non manageState Hook: " + this.hookName);
        }
        return this.hookState.triggered;
    };
    Hook.prototype.getHookName = function () {
        var retVal = this.hookName;
        if (!retVal.toLowerCase().endsWith("hook")) {
            retVal += " hook";
        }
        return retVal;
    };
    Object.defineProperty(Hook.prototype, "hasSubscribers", {
        get: function () {
            return this.subscriberCount > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "subscriberCount", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "hasPostSubscribers", {
        get: function () {
            var _a, _b;
            return (((_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.hasPostSubscribers) || ((_b = this.postSubscribers) === null || _b === void 0 ? void 0 : _b.hasSubscribers)) === true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "triggerer", {
        get: function () {
            return this.trigger;
        },
        enumerable: false,
        configurable: true
    });
    Hook.prototype.trigger = function () {
        var _this = this;
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.hookState.active) {
            this.hookState.triggered = true;
            this.hookState.triggerArgs = args;
        }
        this.subscribers.forEach(function (sub) { return _this.tryTriggerSubscriber(sub, args); });
        if (!this.triggerPostSubscribersWithCb)
            (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.triggerer.apply(this.postSubscribers, args);
    };
    Hook.prototype.tryTriggerSubscriber = function (sub, args) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sub.apply(null, args)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        message = this.getHookName() + " subscriber failed";
                        if (Hook.logger) {
                            Hook.logger.log({ error: ex_1, message: message });
                            return [2 /*return*/];
                        }
                        console.error(message, ex_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Hook.prototype.triggerPostSubscribers = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.triggerer.apply(this.postSubscribers, args);
    };
    Hook.prototype.postSubscribe = function (cb) {
        if (!this.postSubscribers) {
            this.postSubscribers = new Hook(this.hookName + "_Post", { manageState: this.hookState.active });
            this.postSubscribers.hookState = this.hookState;
        }
        this.postSubscribers.subscribe(cb);
    };
    Hook.prototype.postUnsubscribe = function (cb) {
        var _a;
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(cb);
    };
    Hook.prototype.clearPostSubscribers = function (forced) {
        var _a;
        if (forced === void 0) { forced = false; }
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.clearSubscribers();
        if (forced || !this.hasPostSubscribers) {
            this.postSubscribers = undefined;
        }
    };
    Hook.prototype.forceClearAllSubscibers = function () {
        this.clearPostSubscribers(true);
        this.clearSubscribers();
    };
    Hook.prototype.subscribe = function (cb) {
        this.subscribers.push(cb);
        this.hookState.active && this.hookState.triggered && this.tryTriggerSubscriber(cb, this.hookState.triggerArgs);
    };
    Hook.prototype.clearSubscribers = function () {
        this.subscribers = [];
    };
    Hook.prototype.unsubscribe = function (cb) {
        this.subscribers = this.subscribers.filter(function (sub) { return sub != cb; }); // splice is fastest but this is safest, because of immutability, because of forEach traversals
    };
    return Hook;
}());
exports.Hook = Hook;


/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/helpers/importHelper.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/helpers/importHelper.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.importModuleBody = exports.importModuleFile = exports.importModule = exports.importScript = void 0;
var createPromiseData_1 = __webpack_require__(/*! ./createPromiseData */ "../../node_modules/@stechquick/algae/lib/helpers/createPromiseData.js");
function importScript(path, windowLibraryName, importField, parameters) {
    if (importField === void 0) { importField = "default"; }
    return __awaiter(this, void 0, void 0, function () {
        var prom, script, module;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    window.__tempPlateauUIParams__ = parameters;
                    prom = (0, createPromiseData_1.CreatePromiseData)();
                    script = document.createElement("script");
                    script.src = path;
                    script.onload = function () { return prom.resolver(); };
                    script.onerror = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        delete window.__tempPlateauUIParams__;
                        prom.reject(__assign({}, args));
                    };
                    document.body.appendChild(script);
                    return [4 /*yield*/, prom.promise];
                case 1:
                    _a.sent();
                    delete window.__tempPlateauUIParams__;
                    module = window[windowLibraryName];
                    try {
                        delete window[windowLibraryName];
                    }
                    catch (error) { // throws "Cannot delete property of #<Window>", some declared properties are mounted on the window and are non-configurable.
                    }
                    return [2 /*return*/, (importField == "*" ? module : module[importField])];
            }
        });
    });
}
exports.importScript = importScript;
function importModule(path, require, importField, parameters) {
    if (importField === void 0) { importField = "default"; }
    return __awaiter(this, void 0, void 0, function () {
        var compjs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, importModuleFile(path)];
                case 1:
                    compjs = _a.sent();
                    return [2 /*return*/, importModuleBody(compjs, require, importField, parameters)];
            }
        });
    });
}
exports.importModule = importModule;
function importModuleFile(path) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(path)];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.text()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.importModuleFile = importModuleFile;
function importModuleBody(moduleJs, require, importField, parameters) {
    if (importField === void 0) { importField = "default"; }
    var module = {}, exports = {};
    new Function("module", "exports", "require", "params", "__tempPlateauUIParams__", moduleJs)(module, exports, require, parameters, parameters);
    return (importField == "*" ? module.exports : module.exports[importField]);
}
exports.importModuleBody = importModuleBody;


/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/helpers/socket/structuredSocket.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/helpers/socket/structuredSocket.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StructuredSocket = void 0;
var createPromiseData_1 = __webpack_require__(/*! ../createPromiseData */ "../../node_modules/@stechquick/algae/lib/helpers/createPromiseData.js");
var cryptoHelper_1 = __webpack_require__(/*! ../cryptoHelper */ "../../node_modules/@stechquick/algae/lib/helpers/cryptoHelper.js");
var eventBus_1 = __webpack_require__(/*! ../eventBus */ "../../node_modules/@stechquick/algae/lib/helpers/eventBus.js");
;
var StructuredSocket = /** @class */ (function () {
    function StructuredSocket(socket) {
        this.socket = socket;
        this.awaitMsgList = {};
        this.eventBus = new eventBus_1.EventBus();
        socket.OnMessage = this.listen.bind(this);
    }
    StructuredSocket.prototype.CreatePackage = function (msg, options) {
        var packet = { msg: msg, id: cryptoHelper_1.CryptoHelper.CreateGuid(), replyId: options.replyId };
        return packet;
    };
    StructuredSocket.prototype.Send = function (msg, options) {
        var packet = this.CreatePackage(msg, options);
        this.socket.Send(packet, { transferBuffers: options.transferBuffers });
        if (!options.awaitResponse) {
            return undefined;
        }
        var promData = (0, createPromiseData_1.CreatePromiseData)(options.awaitTime);
        this.awaitMsgList[packet.id] = { promData: promData };
        return promData.promise;
    };
    StructuredSocket.prototype.Subscribe = function (key, cb) {
        this.eventBus.Subscribe(key, cb);
    };
    StructuredSocket.prototype.Unsubscribe = function (key, cb) {
        this.eventBus.Unsubscribe(key, cb);
    };
    StructuredSocket.prototype.SubscribeAll = function (cb) {
        this.eventBus.SubscribeAll(cb);
    };
    StructuredSocket.prototype.UnsubscribeAll = function (cb) {
        this.eventBus.UnsubscribeAll(cb);
    };
    StructuredSocket.prototype.tryLogJsonParseEx = function (str) {
        try {
            return JSON.parse(str);
        }
        catch (ex) {
            var err = ex;
            if (!err.message) {
                throw ex;
            }
            var jsonPosInfo = "in JSON at position";
            var index = err.message.indexOf(jsonPosInfo);
            if (index <= -1) {
                throw ex;
            }
            var posInfo = err.message.substring(index + jsonPosInfo.length);
            var pos = Number(posInfo);
            if (isNaN(pos)) {
                throw ex;
            }
            var start = pos < 30 ? 0 : pos - 30;
            var end = pos > str.length - 30 ? str.length : pos + 30;
            var log = str.substring(start, end);
            console.log(log + "\n" + " ".repeat(pos - start) + "^");
            throw ex;
        }
    };
    StructuredSocket.prototype.ConvertBufferToStructure = function (data) {
        try {
            var packet = (this.socket.OnMessageWithDirectObject ? data : this.tryLogJsonParseEx(data.toString()));
            if (!packet) {
                console.log("unexpected message format: undefined");
                return undefined;
            }
            if (!packet.msg || !packet.msg.type) {
                console.log("unexpected message format: missing {msg:{type: ... }} structure");
                return undefined;
            }
            return packet;
        }
        catch (ex) {
            console.log("unexpected message format: json.parse error: ", ex);
            return undefined;
        }
    };
    StructuredSocket.prototype.listen = function (data) {
        var packet = this.ConvertBufferToStructure(data);
        if (!packet) {
            return undefined;
        }
        if (packet.replyId) {
            var awaiter = this.awaitMsgList[packet.replyId];
            if (awaiter) {
                delete this.awaitMsgList[packet.replyId];
                awaiter.promData.resolver(packet);
            }
            this.eventBus.TriggerJustAllSubs(packet);
            return;
        }
        this.eventBus.Trigger(packet.msg.type, packet);
    };
    StructuredSocket.prototype.destroy = function (reason) {
        this.socket.destroy();
        var awaitMsgList = this.awaitMsgList;
        this.awaitMsgList = {};
        this.eventBus.destroy();
        var errorForWaiters = new Error(reason || "structuredSocket destroyed with no reason specified");
        Object.keys(awaitMsgList).forEach(function (key) { var _a; return (_a = awaitMsgList[key]) === null || _a === void 0 ? void 0 : _a.promData.reject(errorForWaiters); });
    };
    return StructuredSocket;
}());
exports.StructuredSocket = StructuredSocket;


/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/polyfill/string.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/polyfill/string.js ***!
  \*******************************************************************/
/***/ (() => {


if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, this_len) {
        if (this_len === undefined || this_len > this.length) {
            this_len = this.length;
        }
        return this.substring(this_len - search.length, this_len) === search;
    };
}


/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/protocols/PlateauMessaging.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/protocols/PlateauMessaging.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlateauMessaging = exports.FrameCommunicator = void 0;
var frameCommunicator_1 = __webpack_require__(/*! ../helpers/frameCommunicator */ "../../node_modules/@stechquick/algae/lib/helpers/frameCommunicator.js");
Object.defineProperty(exports, "FrameCommunicator", ({ enumerable: true, get: function () { return frameCommunicator_1.FrameCommunicator; } }));
var PlateauMessaging = /** @class */ (function () {
    function PlateauMessaging() {
    }
    PlateauMessaging.CreatePlateauMessaging = function (targetWindow) {
        var mes = new frameCommunicator_1.FrameCommunicator(targetWindow);
        return mes;
    };
    return PlateauMessaging;
}());
exports.PlateauMessaging = PlateauMessaging;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js?ver=3.1.2-4";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "@stechquick/websdk:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"websdk": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = this["webpackChunk_stechquick_websdk"] = this["webpackChunk_stechquick_websdk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./websdk.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRenderer": () => (/* binding */ createRenderer),
/* harmony export */   "destroy": () => (/* binding */ destroy),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stechquick/algae/lib/helpers/importHelper */ "../../node_modules/@stechquick/algae/lib/helpers/importHelper.js");
/* harmony import */ var _stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_qshell_src_helpers_QJsonHelpers_QJsonPool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/qshell/src/helpers/QJsonHelpers/QJsonPool */ "../../common/qshell/src/helpers/QJsonHelpers/QJsonPool.ts");
/* harmony import */ var _common_shrimp_helpers_lazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/shrimp/helpers/lazyLoader */ "../../common/shrimp/helpers/lazyLoader.ts");
/* harmony import */ var _common_shrimp_helpers_qjsonParser_QJsonExtractHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/shrimp/helpers/qjsonParser/QJsonExtractHelper */ "../../common/shrimp/helpers/qjsonParser/QJsonExtractHelper.ts");
/* harmony import */ var _build_legacy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build/legacy */ "./build/legacy.ts");
/* harmony import */ var _src_managers_LivePreviewManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/managers/LivePreviewManager */ "./src/managers/LivePreviewManager.ts");
/* harmony import */ var _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/shrimp/helpers/logger */ "../../common/shrimp/helpers/logger.ts");
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







var PlateauUI = /** @class */ (function () {
    function PlateauUI(container, renderer, mountPoint, sdkInstance) {
        this.container = container;
        this.renderer = renderer;
        this.mountPoint = mountPoint;
        this.sdkInstance = sdkInstance;
    }
    PlateauUI.prototype.open = function (qjsonPath, args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.sdkInstance.showCssTags(true, (args === null || args === void 0 ? void 0 : args.pageName) || "");
                        return [4 /*yield*/, this.container.open({ renderer: this.renderer, qjsonPath: qjsonPath, args: args })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlateauUI.prototype.show = function (args) {
        var pageName = (args === null || args === void 0 ? void 0 : args.pageName) || "default";
        this.renderer.resurrect();
        this.sdkInstance.showCssTags(true, pageName);
        this.mountPoint.style.display = "block";
    };
    PlateauUI.prototype.hide = function (args) {
        var pageName = (args === null || args === void 0 ? void 0 : args.pageName) || "default";
        this.mountPoint.style.display = "none";
        this.sdkInstance.showCssTags(false, pageName);
        this.renderer.Hibernate(true);
    };
    PlateauUI.prototype.close = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.destroy(args)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlateauUI.prototype.destroy = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var pageName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.renderer.settingModels.TriggerPipeline("applicationEnd", {})];
                    case 1:
                        _a.sent();
                        pageName = (args === null || args === void 0 ? void 0 : args.pageName) || "default";
                        this.sdkInstance.showCssTags(false, pageName);
                        this.sdkInstance.destroyRenderer(this.renderer);
                        this.mountPoint.remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlateauUI.prototype.trigger = function (_a) {
        var eventName = _a.eventName, parameters = _a.parameters;
        return this.renderer.Trigger(eventName, parameters);
    };
    PlateauUI.prototype.triggerPipeline = function (_a) {
        var eventName = _a.eventName, parameters = _a.parameters;
        return this.renderer.settingModels.TriggerPipeline(eventName, parameters);
    };
    PlateauUI.prototype.getGlobalStore = function (storeFieldName) {
        var storeContext = this.renderer.DoryInst.GetContext().GetItemSingle("GlobalStoreContext");
        if (!storeContext) {
            throw "Store context is not found";
        }
        var storeField = storeContext.get(storeFieldName);
        console.log("storeField => ", storeField);
        return storeField;
    };
    return PlateauUI;
}());
var WebsdkContainer = /** @class */ (function () {
    function WebsdkContainer() {
        this.enviromentInfo = "sdk";
        this.PlateauIAM = undefined;
        this.PlateauUIOptions = {
            corsEnabled: true,
            iam: "./settings/settings_iam.js",
            settings: "./settings/settings_web.js",
            asset: "./static/css/assetList.js"
        };
        this.initCompleted = false;
        this.containerServicesParameter = {};
        Object.defineProperty(this.containerServicesParameter, "plateauUIRenderer", { get: function () { throw new Error("Create renderer first!"); }, configurable: true });
    }
    WebsdkContainer.prototype.init = function (_a) {
        var _b, _c, _d;
        var PlateauUIOptions = _a.PlateauUIOptions, _e = _a.environmentInfo, environmentInfo = _e === void 0 ? "sdk" : _e;
        return __awaiter(this, void 0, void 0, function () {
            var self, LPPlateauUIOptions, settingsWeb, settingsOption, _f, assetListOptions, _g, error_1, _h, containerServices, _j, rendererConfig;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        self = this;
                        self.enviromentInfo = environmentInfo;
                        return [4 /*yield*/, self.configureLivePreview(PlateauUIOptions)];
                    case 1:
                        LPPlateauUIOptions = _k.sent();
                        self.PlateauUIOptions = LPPlateauUIOptions ? LPPlateauUIOptions : (PlateauUIOptions !== null && PlateauUIOptions !== void 0 ? PlateauUIOptions : this.PlateauUIOptions);
                        if (!!self.settingsWeb) return [3 /*break*/, 8];
                        settingsWeb = void 0;
                        if (!self.lpManager) return [3 /*break*/, 2];
                        settingsWeb = self.PlateauUIOptions.settings;
                        self.appSettings = self.PlateauUIOptions.settings.appSettings ? JSON.parse(self.PlateauUIOptions.settings.appSettings.value) : undefined;
                        return [3 /*break*/, 7];
                    case 2:
                        settingsOption = self.PlateauUIOptions.settings;
                        if (!(settingsOption instanceof Promise)) return [3 /*break*/, 4];
                        return [4 /*yield*/, settingsOption];
                    case 3:
                        _f = _k.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, self.LoadJS(settingsOption, "plateauUISettings", { importField: "*" })];
                    case 5:
                        _f = _k.sent();
                        _k.label = 6;
                    case 6:
                        settingsWeb = _f;
                        if (!settingsWeb) {
                            throw "please set following: PlateauUIOptions['settings']";
                        }
                        _k.label = 7;
                    case 7:
                        if (settingsWeb.localProxy && settingsWeb.localProxy.type == "object") {
                            settingsWeb.settings.value.settingsProxyYaml = settingsWeb.settings.value.settingsProxyYaml || {};
                            settingsWeb.settings.value.settingsProxyYaml["localProxy"] = settingsWeb.localProxy.value;
                        }
                        self.SDKSettings = _build_legacy__WEBPACK_IMPORTED_MODULE_4__.Legacy.migrateLegacySettings(settingsWeb.settings.value);
                        self.lpManager && (self.SDKSettings.appSettings = self.appSettings);
                        self.settingsWeb = settingsWeb;
                        _k.label = 8;
                    case 8: return [4 /*yield*/, self.handleIAMSettings()];
                    case 9:
                        _k.sent();
                        self.assetList = (_c = (_b = LPPlateauUIOptions === null || LPPlateauUIOptions === void 0 ? void 0 : LPPlateauUIOptions.settings) === null || _b === void 0 ? void 0 : _b.asset) === null || _c === void 0 ? void 0 : _c.value;
                        assetListOptions = self.PlateauUIOptions.asset;
                        if (!assetListOptions) return [3 /*break*/, 16];
                        if (!(assetListOptions instanceof Promise)) return [3 /*break*/, 14];
                        _k.label = 10;
                    case 10:
                        _k.trys.push([10, 12, , 13]);
                        _g = self;
                        return [4 /*yield*/, assetListOptions];
                    case 11:
                        _g.assetList = _k.sent();
                        return [3 /*break*/, 13];
                    case 12:
                        error_1 = _k.sent();
                        return [3 /*break*/, 13];
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        _h = self;
                        return [4 /*yield*/, self.LoadJS(assetListOptions, "plateauUIAsset", { importField: "*", required: false })];
                    case 15:
                        _h.assetList = _k.sent();
                        _k.label = 16;
                    case 16:
                        if (!!this.SDKInstance) return [3 /*break*/, 20];
                        containerServices = void 0;
                        if (!((_d = self.settingsWeb) === null || _d === void 0 ? void 0 : _d.containerServices)) return [3 /*break*/, 18];
                        return [4 /*yield*/, self.LoadObject(self.settingsWeb.containerServices, "plateauUIContainerServices", { importField: "*", required: false, parameters: this.containerServicesParameter })];
                    case 17:
                        containerServices = _k.sent();
                        _k.label = 18;
                    case 18:
                        containerServices = _build_legacy__WEBPACK_IMPORTED_MODULE_4__.Legacy.containerServicesModifications(containerServices, this.PlateauIAM);
                        if (window.location.search)
                            document.cookie = "queryParams=" + window.location.search + ";path=/;";
                        _j = this;
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_stechquick_algae_lib_helpers_clientDB_clientDB_js-node_modules_axios_ind-cfe4f3"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_-src_WebSDK_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./src/WebSDK */ "./src/WebSDK.ts"))];
                    case 19:
                        _j.SDKInstance = new (_k.sent()).WebSDK(self.SDKSettings, containerServices, { environmentName: environmentInfo });
                        _k.label = 20;
                    case 20:
                        if (self.lpManager) {
                            self.lpManager.setExternalQJsonRetriever(self.SDKInstance);
                        }
                        if (!!self.SDKConfiguration) return [3 /*break*/, 22];
                        return [4 /*yield*/, self.setSDKConfig()];
                    case 21:
                        rendererConfig = _k.sent();
                        self.SDKConfiguration = rendererConfig;
                        _k.label = 22;
                    case 22:
                        this.initCompleted = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.createRenderer = function (_a) {
        var mountPoint = _a.mountPoint;
        return __awaiter(this, void 0, void 0, function () {
            var self, _b, newMountPoint, renderer, dory, plateauUI;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        self = this;
                        _b = self.SDKInstance.CreateRenderer({ mountPoint: mountPoint, config: self.SDKConfiguration }), newMountPoint = _b.newMountPoint, renderer = _b.renderer;
                        dory = renderer.DoryInst;
                        dory.SetAssetValues(self.assetList);
                        return [4 /*yield*/, self.setSettingModels({ renderer: renderer })];
                    case 1:
                        _c.sent();
                        plateauUI = new PlateauUI(self, renderer, newMountPoint, this.SDKInstance);
                        delete this.containerServicesParameter.plateauUIRenderer;
                        this.containerServicesParameter.plateauUIRenderer = plateauUI;
                        return [2 /*return*/, plateauUI];
                }
            });
        });
    };
    WebsdkContainer.prototype.destroy = function () {
        var _a;
        (_a = this.SDKInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    WebsdkContainer.prototype.initLoadingComponent = function (renderer) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var self, qjsonData, qjsonPool, dory, loadingqjsonPath, collectResult;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        self = this;
                        if (!((_a = self.settingsWeb) === null || _a === void 0 ? void 0 : _a.loading) && !((_b = self.settingsWeb) === null || _b === void 0 ? void 0 : _b.settings.value.loadingqjson)) {
                            return [2 /*return*/];
                        }
                        if (((_c = self.settingsWeb.loading) === null || _c === void 0 ? void 0 : _c.format) == "lottie" || ((_d = self.settingsWeb.loading) === null || _d === void 0 ? void 0 : _d.type) == "object") {
                            throw "Loading Lottie Format or Object Type on Web NOTIMPLEMENTED";
                        }
                        qjsonPool = renderer.getContextItem(_common_qshell_src_helpers_QJsonHelpers_QJsonPool__WEBPACK_IMPORTED_MODULE_1__.QJsonPool.contextName);
                        dory = renderer.DoryInst;
                        loadingqjsonPath = (_e = self.settingsWeb) === null || _e === void 0 ? void 0 : _e.settings.value.loadingqjson;
                        if (loadingqjsonPath) {
                            qjsonData = { type: "path", path: loadingqjsonPath.startsWith("/") ? loadingqjsonPath.substring(1) : loadingqjsonPath, options: { disableLoading: true } };
                        }
                        if ((_f = self.settingsWeb) === null || _f === void 0 ? void 0 : _f.loading) {
                            qjsonData = self.settingsWeb.loading.type == "js" ? { type: "content", content: renderer.settingModels.GetLoadingQjson() } :
                                { type: "path", path: self.settingsWeb.loading.value, options: { disableLoading: true } };
                        }
                        return [4 /*yield*/, qjsonPool.retrieveAndFillQjsonAsync({ qjson: qjsonData, dory: dory })];
                    case 1:
                        collectResult = _g.sent();
                        if (collectResult.changedPath) {
                            throw new Error("unexpected path change: possible masterPage");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.open = function (_a) {
        var _b, _c, _d, _e, _f, _g, _h, _j;
        var renderer = _a.renderer, qjsonPath = _a.qjsonPath, args = _a.args;
        return __awaiter(this, void 0, void 0, function () {
            var self, renderOptions, queryString, qjsonContent, pageName, rootQjsonContent, rootQjsonObj, pjsonContent, pjsonPath, prom, ux;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, self.initLoadingComponent(renderer)];
                    case 1:
                        _k.sent();
                        queryString = _build_legacy__WEBPACK_IMPORTED_MODULE_4__.Legacy.fixQueryString();
                        if (!(this.enviromentInfo == "sdk" && qjsonPath)) return [3 /*break*/, 2];
                        qjsonPath = _build_legacy__WEBPACK_IMPORTED_MODULE_4__.Legacy.fixLegacyPathFormat(qjsonPath);
                        renderOptions = { pjsonPath: qjsonPath, storeItems: args };
                        return [3 /*break*/, 9];
                    case 2:
                        if (!(this.enviromentInfo == "qui" && queryString)) return [3 /*break*/, 3];
                        renderOptions = { pjsonPath: queryString, storeItems: args };
                        return [3 /*break*/, 9];
                    case 3:
                        if (!(!renderOptions && ((_b = self.settingsWeb) === null || _b === void 0 ? void 0 : _b.rootqjson))) return [3 /*break*/, 5];
                        return [4 /*yield*/, self.LoadObject((_c = self.settingsWeb) === null || _c === void 0 ? void 0 : _c.rootqjson, "")];
                    case 4:
                        qjsonContent = _k.sent();
                        pageName = self.settingsWeb.settings.value.rootqjson;
                        renderOptions = { pjsonContent: qjsonContent, pageName: pageName, storeItems: args };
                        return [3 /*break*/, 9];
                    case 5:
                        if (!(((_d = self.settingsWeb) === null || _d === void 0 ? void 0 : _d.settings.value.rootqjsonpath) && !self.settingsWeb.rootqjson)) return [3 /*break*/, 8];
                        return [4 /*yield*/, ((_e = this.SDKInstance) === null || _e === void 0 ? void 0 : _e.qJsonRetriever.retrieveQJsonAsync((_f = self.settingsWeb) === null || _f === void 0 ? void 0 : _f.settings.value.rootqjsonpath, { disableLoading: true }))];
                    case 6:
                        rootQjsonContent = _k.sent();
                        rootQjsonObj = { format: "qjson", type: "js", value: rootQjsonContent };
                        return [4 /*yield*/, self.LoadObject(rootQjsonObj, "")];
                    case 7:
                        pjsonContent = _k.sent();
                        pjsonPath = self.settingsWeb.settings.value.rootqjsonpath;
                        renderOptions = { pjsonContent: pjsonContent, pjsonPath: pjsonPath };
                        return [3 /*break*/, 9];
                    case 8: throw Error("please set following: PlateauUIOptions.rootqjson");
                    case 9:
                        //WindowHistoryManager pushState'e bak 
                        if ((_g = renderOptions.pjsonPath) === null || _g === void 0 ? void 0 : _g.includes("<<qjsonpass:")) {
                            renderOptions.pjsonPath = renderOptions.pjsonPath.replace("<<qjsonpass:", "<<qjson:").replace(".qjson", "");
                        }
                        prom = renderer.Render(renderOptions);
                        ux = (_h = this.SDKInstance) === null || _h === void 0 ? void 0 : _h.getUXManager();
                        ux === null || ux === void 0 ? void 0 : ux.setTheme("default", (_j = this.settingsWeb) === null || _j === void 0 ? void 0 : _j.style);
                        return [4 /*yield*/, prom];
                    case 10:
                        _k.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.handleIAMSettings = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return __awaiter(this, void 0, void 0, function () {
            var self, iamOption, settingsIAM, _l, _m, _o, securePage, rootQjson, unsecurePages, i, queryString;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        self = this;
                        if (!self.PlateauUIOptions.iam) return [3 /*break*/, 9];
                        iamOption = self.PlateauUIOptions.iam;
                        if (self.lpManager) {
                            iamOption["iamV2"] = (_a = self.appSettings) === null || _a === void 0 ? void 0 : _a.oAuthSettings;
                        }
                        if (!self.lpManager) return [3 /*break*/, 1];
                        _l = iamOption;
                        return [3 /*break*/, 6];
                    case 1:
                        if (!(iamOption instanceof Promise)) return [3 /*break*/, 3];
                        return [4 /*yield*/, iamOption];
                    case 2:
                        _m = _p.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, self.LoadJS(iamOption, "plateauUIIAMOptions", { importField: "*", required: false })];
                    case 4:
                        _m = _p.sent();
                        _p.label = 5;
                    case 5:
                        _l = (_m);
                        _p.label = 6;
                    case 6:
                        settingsIAM = _l;
                        if (!(settingsIAM && ((_b = settingsIAM.iam) === null || _b === void 0 ? void 0 : _b.active) || ((_c = settingsIAM === null || settingsIAM === void 0 ? void 0 : settingsIAM.iamV2) === null || _c === void 0 ? void 0 : _c.active))) return [3 /*break*/, 9];
                        _o = self;
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_keycloak-js_dist_keycloak_mjs"), __webpack_require__.e("src_managers_PlateauIAM_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./src/managers/PlateauIAM */ "./src/managers/PlateauIAM.ts"))];
                    case 7:
                        _o.PlateauIAM = new (_p.sent()).PlateauIAM();
                        self.PlateauIAM.setOptions({ iam: settingsIAM.iam, iamV2: settingsIAM.iamV2 });
                        self.PlateauIAM.settingsIAM = settingsIAM;
                        securePage = true;
                        rootQjson = (_e = (_d = self.settingsWeb) === null || _d === void 0 ? void 0 : _d.settings.value.rootqjson) !== null && _e !== void 0 ? _e : (_f = self.settingsWeb) === null || _f === void 0 ? void 0 : _f.settings.value.rootqjsonpath;
                        unsecurePages = (_h = (_g = self.PlateauIAM.settingsIAM.iamV2) === null || _g === void 0 ? void 0 : _g.unsecurePages) !== null && _h !== void 0 ? _h : (_k = (_j = self.PlateauIAM.settingsIAM) === null || _j === void 0 ? void 0 : _j.iam) === null || _k === void 0 ? void 0 : _k.unsecurePages;
                        if (unsecurePages) {
                            for (i = 0; i < unsecurePages.length; i++) {
                                queryString = _build_legacy__WEBPACK_IMPORTED_MODULE_4__.Legacy.fixQueryString();
                                if (unsecurePages[i] === (queryString !== null && queryString !== void 0 ? queryString : rootQjson)) {
                                    securePage = false;
                                }
                            }
                        }
                        if (!securePage) return [3 /*break*/, 9];
                        return [4 /*yield*/, self.PlateauIAM.login(self.PlateauUIOptions)];
                    case 8:
                        _p.sent();
                        if (!self.PlateauIAM.isAuthenticated()) {
                            throw Error("Authentication: Must logon");
                        }
                        _p.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.setSDKConfig = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var self, plateauUIComponentOptions, plateauUIGlobalLRQjson, rendererConfig;
            return __generator(this, function (_e) {
                self = this;
                if ((_a = self.settingsWeb) === null || _a === void 0 ? void 0 : _a.componentList) {
                    plateauUIComponentOptions = self.LoadObject(self.settingsWeb.componentList, "plateauUIComponentOptions", { importField: "*", required: false });
                }
                if ((_b = self.settingsWeb) === null || _b === void 0 ? void 0 : _b.globalLocalization) {
                    plateauUIGlobalLRQjson = self.LoadObject((_c = self.settingsWeb) === null || _c === void 0 ? void 0 : _c.globalLocalization, "", { importField: "*", required: false }); //windowLibraryName
                    self.LoadQjson((_d = self.settingsWeb) === null || _d === void 0 ? void 0 : _d.globalLocalization);
                }
                rendererConfig = {};
                return [2 /*return*/, Promise.all([plateauUIComponentOptions, plateauUIGlobalLRQjson]).then(function (_a) {
                        var _b, _c, _d, _e;
                        var _f = __read(_a, 2), plateauUIComponentOptions = _f[0], plateauUIGlobalLRQjson = _f[1];
                        if (plateauUIComponentOptions) {
                            rendererConfig.SiteSettings = { compSettings: plateauUIComponentOptions };
                        }
                        if (plateauUIGlobalLRQjson) {
                            rendererConfig.GlobalLRDict = plateauUIGlobalLRQjson.clrids;
                        }
                        if ((_b = self.SDKSettings) === null || _b === void 0 ? void 0 : _b.rootLangCode) {
                            rendererConfig.LRType = (_c = self.SDKSettings) === null || _c === void 0 ? void 0 : _c.rootLangCode;
                        }
                        if ((_d = self.SDKSettings) === null || _d === void 0 ? void 0 : _d.configValues) {
                            rendererConfig.configValues = (_e = self.SDKSettings) === null || _e === void 0 ? void 0 : _e.configValues;
                        }
                        return rendererConfig;
                    })];
            });
        });
    };
    WebsdkContainer.prototype.setSettingModels = function (_a) {
        var _b, _c, _d, _e, _f, _g, _h, _j;
        var renderer = _a.renderer;
        return __awaiter(this, void 0, void 0, function () {
            var self, pipelineqjsonPath, alertqjsonPath, loadingqjsonPath, pipelineqjson, qjson, err_1, alertqjson, qjson, err_2, loadingqjson, qjson, err_3;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        self = this;
                        pipelineqjsonPath = (_b = self.settingsWeb) === null || _b === void 0 ? void 0 : _b.settings.value.pipelineqjson;
                        alertqjsonPath = (_c = self.settingsWeb) === null || _c === void 0 ? void 0 : _c.settings.value.alertqjson;
                        loadingqjsonPath = (_d = self.settingsWeb) === null || _d === void 0 ? void 0 : _d.settings.value.loadingqjson;
                        pipelineqjson = ((_e = self.settingsWeb) === null || _e === void 0 ? void 0 : _e.pipeline) ||
                            { type: "path", value: (pipelineqjsonPath === null || pipelineqjsonPath === void 0 ? void 0 : pipelineqjsonPath.startsWith("/")) ? pipelineqjsonPath.substring(1) : pipelineqjsonPath, format: "qjson" };
                        if (!(pipelineqjson && pipelineqjson.value)) return [3 /*break*/, 5];
                        return [4 /*yield*/, self.LoadObject(pipelineqjson, "", { importField: "*", required: false })];
                    case 1:
                        qjson = _k.sent();
                        if (!qjson) return [3 /*break*/, 5];
                        _k.label = 2;
                    case 2:
                        _k.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, renderer.settingModels.SetPipelineQjson(qjson)];
                    case 3:
                        _k.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _k.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        alertqjson = ((_f = self.settingsWeb) === null || _f === void 0 ? void 0 : _f.alert) ||
                            { type: "path", value: (alertqjsonPath === null || alertqjsonPath === void 0 ? void 0 : alertqjsonPath.startsWith("/")) ? alertqjsonPath.substring(1) : alertqjsonPath, format: "qjson" };
                        if (!(alertqjson && alertqjson.value)) return [3 /*break*/, 10];
                        return [4 /*yield*/, self.LoadObject(alertqjson, "", { importField: "*", required: false })];
                    case 6:
                        qjson = _k.sent();
                        if (!qjson) return [3 /*break*/, 10];
                        _k.label = 7;
                    case 7:
                        _k.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, renderer.settingModels.SetAlertQjson(qjson)];
                    case 8:
                        _k.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        err_2 = _k.sent();
                        return [3 /*break*/, 10];
                    case 10:
                        loadingqjson = ((_g = self.settingsWeb) === null || _g === void 0 ? void 0 : _g.loading) ||
                            { type: "path", value: (loadingqjsonPath === null || loadingqjsonPath === void 0 ? void 0 : loadingqjsonPath.startsWith("/")) ? loadingqjsonPath.substring(1) : loadingqjsonPath, format: "qjson" };
                        if (!(loadingqjson && loadingqjson.value)) return [3 /*break*/, 15];
                        return [4 /*yield*/, self.LoadObject(loadingqjson, "", { importField: "*", required: false })];
                    case 11:
                        qjson = _k.sent();
                        if (!qjson) return [3 /*break*/, 15];
                        _k.label = 12;
                    case 12:
                        _k.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, renderer.settingModels.SetLoadingQjson(qjson)];
                    case 13:
                        _k.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        err_3 = _k.sent();
                        return [3 /*break*/, 15];
                    case 15:
                        if (!((_h = self.SDKSettings) === null || _h === void 0 ? void 0 : _h.domainModuleList)) return [3 /*break*/, 17];
                        return [4 /*yield*/, ((_j = self.SDKInstance) === null || _j === void 0 ? void 0 : _j.LoadModuleCompLists(self.SDKSettings.domainModuleList).catch(function (ev) {
                                _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.Log({ logMessage: ev, logType: _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__.LogType.Error });
                            }))];
                    case 16:
                        _k.sent();
                        _k.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.LoadObject = function (data, windowLibraryName, options) {
        if (options === void 0) { options = { required: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        if (!data) {
                            return [2 /*return*/];
                        }
                        if (options.parameters && (data.type != "path" && data.type != "js")) {
                            if (data.type != "object") {
                                throw new Error("Parameters can be used for 'path' and 'js' data types!");
                            }
                            _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.Log({ logMessage: 'LoadObject with object type not supported with parameters.', logType: _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__.LogType.Warning });
                        }
                        if (!(data.format == "qjson")) return [3 /*break*/, 2];
                        return [4 /*yield*/, self.LoadQjson(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (data.format == "lottie") {
                            throw new Error("Not implemented");
                        }
                        if (!(data.type == "path")) return [3 /*break*/, 4];
                        return [4 /*yield*/, self.LoadJS(data.value, windowLibraryName, options)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (data.type == "object") {
                            return [2 /*return*/, data.value];
                        }
                        if (!(data.type == "js")) return [3 /*break*/, 6];
                        return [4 /*yield*/, (0,_stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_0__.importModuleBody)(data.value, function () { }, options.importField, options.parameters)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.LoadJS = function (requestData, windowLibraryName, options) {
        if (options === void 0) { options = { required: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var self, requestObject, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!(this.PlateauUIOptions.corsEnabled && typeof requestData == "string")) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0,_stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_0__.importScript)(requestData, windowLibraryName, options.importField, options.parameters)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        requestObject = typeof requestData == "string" ? requestData : new Request(requestData.url, { method: 'GET', body: JSON.stringify(requestData.body), headers: requestData.headers });
                        return [4 /*yield*/, (0,_stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_0__.importModule)(requestObject, function () { }, options.importField, options.parameters)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        if (!options.required) {
                            return [2 /*return*/, undefined];
                        }
                        throw new Error("couldn't load " + JSON.stringify(requestData));
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.LoadQjson = function (plateauUIObject) {
        return __awaiter(this, void 0, void 0, function () {
            var qJsonString, qjsonPath, qJsonExtracted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qJsonString = "";
                        if (!(plateauUIObject.type == "path")) return [3 /*break*/, 2];
                        qjsonPath = _build_legacy__WEBPACK_IMPORTED_MODULE_4__.Legacy.fixLegacyPathFormat(plateauUIObject.value);
                        return [4 /*yield*/, _common_shrimp_helpers_lazyLoader__WEBPACK_IMPORTED_MODULE_2__.LazyLoader.FetchModuleBody(qjsonPath)];
                    case 1:
                        qJsonString = (_a.sent()).body; //TODO:newWebSDKBuild change to load from importHelper
                        _a.label = 2;
                    case 2:
                        if (plateauUIObject.type == "js") {
                            qJsonString = plateauUIObject.value;
                        }
                        if (!qJsonString) {
                            return [2 /*return*/, undefined];
                        }
                        qJsonExtracted = _common_shrimp_helpers_qjsonParser_QJsonExtractHelper__WEBPACK_IMPORTED_MODULE_3__.QJsonExtractHelper.qJsonExtractor(qJsonString);
                        if (!qJsonExtracted) {
                            throw new Error("qJsonExtracted is undefined");
                        }
                        return [2 /*return*/, qJsonExtracted];
                }
            });
        });
    };
    WebsdkContainer.prototype.configureLivePreview = function (PlateauUIOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var self, lpManager, resp, settingsResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (PlateauUIOptions === null || PlateauUIOptions === void 0 ? void 0 : PlateauUIOptions.disableLP) {
                            return [2 /*return*/];
                        }
                        self = this;
                        lpManager = new _src_managers_LivePreviewManager__WEBPACK_IMPORTED_MODULE_5__.LivePreviewManager();
                        return [4 /*yield*/, lpManager.isItLivePreview()];
                    case 1:
                        resp = _a.sent();
                        if (!resp) {
                            return [2 /*return*/];
                        }
                        self.lpManager = lpManager;
                        return [4 /*yield*/, lpManager.getLivePreviewSettings()];
                    case 2:
                        settingsResponse = _a.sent();
                        _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.Log({ logMessage: "settingsResponse: " + settingsResponse });
                        if (!settingsResponse) {
                            return [2 /*return*/];
                        }
                        if (settingsResponse.serviceWorker) {
                            self.registerServiceWorker();
                        }
                        return [2 /*return*/, settingsResponse];
                }
            });
        });
    };
    WebsdkContainer.prototype.registerServiceWorker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, registration, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        if (!("serviceWorker" in navigator)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator['serviceWorker'].register("./sw.js", {
                                scope: "/qui-lp/",
                            })];
                    case 2:
                        registration = _a.sent();
                        if (registration.installing) {
                            _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.Log({ logMessage: "Service worker installing" });
                        }
                        else if (registration.waiting) {
                            _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.Log({ logMessage: "Service worker installed" });
                        }
                        else if (registration.active) {
                            _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.Log({ logMessage: "Service worker activated" });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.Log({ logMessage: "Registration failed with " + error_3, logType: _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_6__.LogType.Error });
                        return [3 /*break*/, 4];
                    case 4:
                        navigator['serviceWorker'].onmessage = function (event) {
                            var pack = event.data;
                            self.onSWMessage(pack);
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.onSWMessage = function (packId) {
        return __awaiter(this, void 0, void 0, function () {
            var self, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, self.lpManager.sendSwMessage(packId)];
                    case 1:
                        resp = _a.sent();
                        self.sendMessage(resp);
                        return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.sendMessage = function (msg) {
        setTimeout(function () {
            var _a;
            (_a = navigator['serviceWorker'].controller) === null || _a === void 0 ? void 0 : _a.postMessage(msg);
        }, 1000);
    };
    return WebsdkContainer;
}());
var websdkContainerInstance;
function init(PlateauUIOptions, environmentInfo) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (websdkContainerInstance) {
                        return [2 /*return*/, websdkContainerInstance];
                    }
                    websdkContainerInstance = new WebsdkContainer();
                    return [4 /*yield*/, websdkContainerInstance.init({ PlateauUIOptions: PlateauUIOptions, environmentInfo: environmentInfo })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, websdkContainerInstance];
            }
        });
    });
}
function createRenderer(_a) {
    var mountPoint = _a.mountPoint;
    if (!websdkContainerInstance) {
        throw "websdk initiation went wrong.";
    }
    var plateauUI = websdkContainerInstance.createRenderer({ mountPoint: mountPoint });
    return plateauUI;
}
function destroy() {
    if (!websdkContainerInstance) {
        return;
    }
    websdkContainerInstance.destroy();
    websdkContainerInstance = undefined;
}


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=websdk.js.map?ver=3.1.2-4