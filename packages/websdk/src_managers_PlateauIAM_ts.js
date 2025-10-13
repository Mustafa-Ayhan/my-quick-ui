"use strict";
(this["webpackChunk_stechquick_websdk"] = this["webpackChunk_stechquick_websdk"] || []).push([["src_managers_PlateauIAM_ts"],{

/***/ "../../common/shrimp/interfaces/IPromiseData.ts":
/*!******************************************************!*\
  !*** ../../common/shrimp/interfaces/IPromiseData.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePromiseData": () => (/* binding */ CreatePromiseData),
/* harmony export */   "PromiseAllSettled": () => (/* binding */ PromiseAllSettled)
/* harmony export */ });
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
    var resolved = false, rejected = false;
    var isCompleted = function () { return resolved || rejected; };
    if (timeout) {
        startTimer(timeout);
    }
    return {
        startTimer: startTimer,
        promise: new Promise(function (res, rej) {
            var cb = syncResolveFixer(res);
            resolver = function (value) { if (isCompleted()) {
                return;
            } resolved = true; cb(value); };
            reject = function (reason) { if (isCompleted()) {
                return;
            } rejected = true; rej(reason); };
        }),
        resolver: resolver,
        reject: reject,
        isResolved: function () { return resolved; },
        isRejected: function () { return rejected; },
        isCompleted: isCompleted,
    };
}
function PromiseAllSettled(proms) {
    var _this = this;
    var retProm = CreatePromiseData();
    var left = proms.length;
    proms.forEach(function (prom) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, , 2, 3]);
                    return [4 /*yield*/, prom];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    if (--left <= 0) {
                        retProm.resolver(prom);
                    }
                    return [7 /*endfinally*/];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    return retProm.promise;
}


/***/ }),

/***/ "./src/interfaces/externalInterfaces.ts":
/*!**********************************************!*\
  !*** ./src/interfaces/externalInterfaces.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doPostMessage": () => (/* binding */ doPostMessage)
/* harmony export */ });
function doPostMessage(targetWindow, data) {
    targetWindow.postMessage(data, "*");
}


/***/ }),

/***/ "./src/managers/PlateauIAM.ts":
/*!************************************!*\
  !*** ./src/managers/PlateauIAM.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlateauIAM": () => (/* binding */ PlateauIAM)
/* harmony export */ });
/* harmony import */ var keycloak_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keycloak-js */ "../../node_modules/keycloak-js/dist/keycloak.mjs");
/* harmony import */ var _common_shrimp_helpers_scriptRootPathHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/shrimp/helpers/scriptRootPathHelper */ "../../common/shrimp/helpers/scriptRootPathHelper.ts");
/* harmony import */ var _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/shrimp/helpers/logger */ "../../common/shrimp/helpers/logger.ts");
/* harmony import */ var _common_shrimp_interfaces_IPromiseData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/shrimp/interfaces/IPromiseData */ "../../common/shrimp/interfaces/IPromiseData.ts");
/* harmony import */ var _interfaces_externalInterfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfaces/externalInterfaces */ "./src/interfaces/externalInterfaces.ts");
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





var fullUrls = ["https://", "http://"];
var PlateauIAM = /** @class */ (function () {
    function PlateauIAM() {
        var _this = this;
        this.refreshTime = 6000;
        this.updateTime = 10;
        this.initOptions = {
            url: 'http://identity-provider.dev.rally.softtech/auth/',
            realm: 'main',
            clientId: 'ui-web-client',
            onLoad: 'login-required',
            pkceMethod: 'S256',
            identityProvider: '',
            locale: '',
        };
        this.authOptions = { url: "", active: false };
        // private keycloak?: Keycloak;
        //PLATEAU SECURITY OBJECT
        this.iamPlateau = undefined;
        this.sessionStorageNamePrefix = "";
        this.getToken = function () {
            if (_this.iamPlateau != undefined)
                return _this.iamPlateau.token;
            else
                return undefined;
        };
        this.getInfo = function () {
            if (_this.iamPlateau != undefined)
                return _this.iamPlateau.info;
            else
                return undefined;
        };
    }
    PlateauIAM.prototype.setOptions = function (_a) {
        var iam = _a.iam, iamV2 = _a.iamV2;
        if (iamV2 === null || iamV2 === void 0 ? void 0 : iamV2.active) {
            this.configureNewOAuthSettings(iamV2);
        }
        else {
            try {
                var initOptions = iam === null || iam === void 0 ? void 0 : iam.options;
                if (!initOptions) {
                    throw new Error("iam in settings is missing options");
                }
                if (initOptions.identityProvider != undefined) {
                    if (typeof initOptions.identityProvider === 'object') {
                        var subdomain = '';
                        var ipUrlSplit = initOptions.url.split('.');
                        var order = 2;
                        try {
                            order = parseInt(initOptions.identityProvider.order);
                            if (order <= 0) {
                                order = 2;
                            }
                        }
                        catch (error) {
                            order = 2;
                        }
                        if (initOptions.identityProvider.type === 'queryString') {
                            var params = new URLSearchParams(window.location.search);
                            if (params.get('subdomain') != null) {
                                subdomain = params.get('subdomain');
                                // ipUrlSplit[1] = subdomain
                                ipUrlSplit[order - 1] = subdomain;
                                this.initOptions.subdomain = subdomain;
                            }
                            if (params.get('realm') != null) {
                                initOptions.realm = params.get('realm');
                                if (!initOptions.sessionStorageNamePrefix) {
                                    // cookie setle
                                    document.cookie = "queryParamsRealmIAM=" + initOptions.realm + ";path=/;";
                                }
                            }
                            else if (!initOptions.sessionStorageNamePrefix) {
                                var queryParamsRealmIAM = this.getItemFromCookies("queryParamsRealmIAM");
                                if (queryParamsRealmIAM) {
                                    initOptions.realm = queryParamsRealmIAM;
                                }
                            }
                            var localeKey = initOptions.localeQueryStringKey || "ui_locales";
                            if (params.get(localeKey) != null) {
                                this.initOptions.locale = params.get(localeKey);
                                if (!initOptions.sessionStorageNamePrefix) {
                                    document.cookie = "queryParamsLocaleIAM=" + this.initOptions.locale + ";path=/;";
                                }
                            }
                            else {
                                this.initOptions.locale = undefined;
                                if (!initOptions.sessionStorageNamePrefix) {
                                    var queryParamsLocaleIAM = this.getItemFromCookies("queryParamsLocaleIAM");
                                    if (queryParamsLocaleIAM) {
                                        this.initOptions.locale = queryParamsLocaleIAM;
                                    }
                                }
                            }
                        }
                        else if (initOptions.identityProvider.type === 'subdomain') {
                            var urlSplit = window.location.host.split('.');
                            subdomain = urlSplit[0]; // optional parametre ile subdomain of subdomain alinabilir
                            ipUrlSplit[order - 1] = subdomain;
                        }
                        // ipUrlSplit[1] = subdomain               
                        initOptions.url = ipUrlSplit.join('.');
                    }
                    else if (initOptions.identityProvider.length > 1) {
                        initOptions.url = window.location.protocol + '//' + window.location.host.replace(initOptions.identityProvider, 'identity-provider') + '/auth';
                    }
                }
                /*
                        turisui
                        http://turisui.participant-turis-mr-484-dev.turispsql.plateaux.softtech
                        http://identity-provider.participant-turis-mr-484-dev.turispsql.plateaux.softtech/auth
                 */
                if (initOptions.url)
                    this.initOptions.url = initOptions.url;
                if (initOptions.realm)
                    this.initOptions.realm = initOptions.realm;
                if (initOptions.clientId)
                    this.initOptions.clientId = initOptions.clientId;
                if (initOptions.onLoad)
                    this.initOptions.onLoad = initOptions.onLoad;
                if (initOptions.pkceMethod)
                    this.initOptions.pkceMethod = initOptions.pkceMethod;
                if (initOptions.identityProvider)
                    this.initOptions.identityProvider = initOptions.identityProvider;
                if (initOptions.redirectUri)
                    this.initOptions.redirectUri = initOptions.redirectUri;
                if (initOptions.responseMode)
                    this.initOptions.responseMode = initOptions.responseMode;
                if (initOptions.preserveTokens)
                    this.initOptions.preserveTokens = initOptions.preserveTokens;
            }
            catch (error) {
                var errMsg = error.message || "error has no message";
                _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log({ logMessage: "Error on setting IAM options: " + errMsg, logType: _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_2__.LogType.Error });
            }
        }
    };
    PlateauIAM.prototype.getItemFromCookies = function (key) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == key) {
                return unescape(y);
            }
        }
        return undefined;
    };
    PlateauIAM.prototype.configureNewOAuthSettings = function (iamV2) {
        this.authOptions.active = iamV2.active;
        var idendityURL = iamV2.idendityProviderURL || "";
        var queryParams = new URLSearchParams(window.location.search);
        this.authOptions.subdomain = this.getSubdomain(iamV2, queryParams);
        idendityURL = this.replaceSubdomain(idendityURL, this.authOptions);
        this.authOptions.realm = this.getRealm(iamV2, queryParams);
        this.authOptions.language = this.getLocale(iamV2, queryParams);
        this.authOptions.url = idendityURL;
        this.authOptions.clientId = iamV2.clientId;
        this.authOptions.preserveTokens = iamV2.preserveTokens;
        this.authOptions.redirectUri = iamV2.redirectUri;
        this.authOptions.onLoad = iamV2.onLoad;
        this.authOptions.popup = iamV2.popup;
        this.authOptions.sessionStorageNamePrefix = iamV2.sessionStorageNamePrefix;
    };
    PlateauIAM.prototype.getLocale = function (iamV2, queryParams) {
        return iamV2.isLangFromQS ? queryParams.get("lang") : iamV2.language;
    };
    PlateauIAM.prototype.replaceSubdomain = function (idendityURL, authOptions) {
        var splittedURL = idendityURL.split(".");
        splittedURL[1] = authOptions.subdomain || splittedURL[1];
        return splittedURL.join(".");
    };
    PlateauIAM.prototype.getRealm = function (iamV2, queryParams) {
        return iamV2.isRealmFromQS ? queryParams.get("realm") : iamV2.realm;
    };
    PlateauIAM.prototype.getSubdomain = function (iamV2, queryParams) {
        var domainValue = "";
        switch (iamV2.subdomainSource) {
            case "constant":
                domainValue = iamV2.subdomainValue;
                break;
            case "query":
                domainValue = queryParams.get("subdomain");
                break;
            case "currentDomain":
                domainValue = window.location.host.split('.')[0];
                break;
            default:
                break;
        }
        return domainValue;
    };
    PlateauIAM.prototype.isAuthenticated = function () {
        var _a;
        if (((_a = this.iamPlateau) === null || _a === void 0 ? void 0 : _a.token) != undefined)
            return true;
    };
    PlateauIAM.prototype.init = function (callback, PlateauUIOptions) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function () {
            var oAuthoptions, tokens, initOptions, loginOptions, redirectUri, finalRedirectUri, auth, checkIAMPopup;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        oAuthoptions = this.authOptions.active ? this.authOptions : this.initOptions;
                        this.sessionStorageNamePrefix = (((_c = (_b = (_a = this.settingsIAM) === null || _a === void 0 ? void 0 : _a.iam) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.sessionStorageNamePrefix) || this.authOptions.sessionStorageNamePrefix) ? (((_f = (_e = (_d = this.settingsIAM) === null || _d === void 0 ? void 0 : _d.iam) === null || _e === void 0 ? void 0 : _e.options) === null || _f === void 0 ? void 0 : _f.sessionStorageNamePrefix) || this.authOptions.sessionStorageNamePrefix) + "_" : "";
                        this.keycloak = (0,keycloak_js__WEBPACK_IMPORTED_MODULE_0__["default"])(oAuthoptions);
                        tokens = this.getTokens();
                        initOptions = this.getKeyCloakOptions();
                        loginOptions = this.getLoginOptions();
                        if (tokens && tokens.idToken && tokens.refreshToken && tokens.token) {
                            initOptions.idToken = tokens.idToken;
                            initOptions.refreshToken = tokens.refreshToken;
                            initOptions.token = tokens.token;
                        }
                        redirectUri = this.authOptions.active ? this.authOptions.redirectUri : this.initOptions.redirectUri;
                        finalRedirectUri = this.setQueryOrFragment(new URL(window.location.href), redirectUri);
                        if (finalRedirectUri) {
                            loginOptions.redirectUri = finalRedirectUri;
                            initOptions.redirectUri = finalRedirectUri;
                        }
                        auth = false;
                        checkIAMPopup = ((_g = PlateauUIOptions === null || PlateauUIOptions === void 0 ? void 0 : PlateauUIOptions.iamWithPopup) !== null && _g !== void 0 ? _g : (((_j = (_h = this.settingsIAM) === null || _h === void 0 ? void 0 : _h.iam) === null || _j === void 0 ? void 0 : _j.popup) || this.authOptions.popup)) && !(PlateauUIOptions === null || PlateauUIOptions === void 0 ? void 0 : PlateauUIOptions.iamInPopup);
                        if (!checkIAMPopup) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleIAMPopup(PlateauUIOptions, initOptions, this.keycloak)];
                    case 1:
                        auth = _k.sent();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.keycloak.init(initOptions)];
                    case 3:
                        auth = _k.sent();
                        if (!!auth) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.keycloak.login(loginOptions)];
                    case 4:
                        _k.sent();
                        return [2 /*return*/];
                    case 5:
                        if (PlateauUIOptions === null || PlateauUIOptions === void 0 ? void 0 : PlateauUIOptions.iamInPopup) {
                            this.handleInPopup();
                            return [2 /*return*/];
                        }
                        this.setTokens();
                        if (typeof auth == 'boolean') {
                            if (!auth) {
                                window.location.reload();
                            }
                            else {
                                this.constructIAMPlateau();
                            }
                            callback();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlateauIAM.prototype.handleIAMPopup = function (PlateauUIOptions, initOptions, keycloak) {
        return __awaiter(this, void 0, void 0, function () {
            var checkPopupClosed, tokenProm, getStaticPrimitiveAttributes, listener, newWindow, message, tokenInfo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenProm = (0,_common_shrimp_interfaces_IPromiseData__WEBPACK_IMPORTED_MODULE_3__.CreatePromiseData)();
                        getStaticPrimitiveAttributes = function (obj) {
                            var primitives = {};
                            for (var key in obj) {
                                if (obj.hasOwnProperty(key)) {
                                    var value = obj[key];
                                    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || value === null) {
                                        primitives[key] = value;
                                    }
                                }
                            }
                            return primitives;
                        };
                        listener = function (msg) { return __awaiter(_this, void 0, void 0, function () {
                            var parentWindowAttributes;
                            return __generator(this, function (_a) {
                                if (msg.source != newWindow) {
                                    return [2 /*return*/];
                                }
                                switch (msg.data.type) {
                                    case "setTokens":
                                        window.removeEventListener("message", listener);
                                        msg.data.type == 'setTokens' && tokenProm.resolver(msg.data.tokenInfo);
                                        clearInterval(checkPopupClosed);
                                        return [2 /*return*/];
                                    case "iamReady":
                                        parentWindowAttributes = getStaticPrimitiveAttributes(window);
                                        (0,_interfaces_externalInterfaces__WEBPACK_IMPORTED_MODULE_4__.doPostMessage)(newWindow, { type: "iamOptions", options: PlateauUIOptions, tokens: this.getTokens(), sessionStorageNamePrefix: this.sessionStorageNamePrefix, parentWindow: parentWindowAttributes });
                                        return [2 /*return*/];
                                }
                                return [2 /*return*/];
                            });
                        }); };
                        window.addEventListener("message", listener);
                        newWindow = window.open(_common_shrimp_helpers_scriptRootPathHelper__WEBPACK_IMPORTED_MODULE_1__.ScriptRootPathHelper.concatUrl(_common_shrimp_helpers_scriptRootPathHelper__WEBPACK_IMPORTED_MODULE_1__.ScriptRootPathHelper.getScriptRoot(), '../assets/oidc.html'), "plateauIAMPopup", "popup");
                        if (!newWindow) {
                            message = 'Failed to open new window.';
                            console.error(message);
                            throw message;
                        }
                        checkPopupClosed = setInterval(function () {
                            if (newWindow.closed) {
                                clearInterval(checkPopupClosed);
                                var msg = "popup window closed before authentication";
                                console.error(msg);
                                tokenProm.reject(new Error(msg));
                            }
                        }, 500);
                        return [4 /*yield*/, tokenProm.promise];
                    case 1:
                        tokenInfo = _a.sent();
                        this.setToOptions(initOptions, tokenInfo);
                        return [2 /*return*/, keycloak.init(initOptions)];
                }
            });
        });
    };
    PlateauIAM.prototype.handleInPopup = function () {
        var tokenInfo = this.getTokenFromKeycloak();
        if (!tokenInfo) {
            throw new Error("could not retrieve tokenInfo from keycloak");
        }
        (0,_interfaces_externalInterfaces__WEBPACK_IMPORTED_MODULE_4__.doPostMessage)(opener, { type: "setTokens", tokenInfo: tokenInfo });
        window.close();
    };
    PlateauIAM.prototype.pathJoin = function (path1, path2) {
        path1 = path1.endsWith("/") ? path1.substring(0, path1.length - 1) : path1;
        path2 = path2.startsWith("/") ? path2.substring(1) : path2;
        return path1 + "/" + path2;
    };
    PlateauIAM.prototype.setQueryOrFragment = function (location, redirectUrl) {
        if (!redirectUrl) {
            return undefined;
        }
        var fullUrl = fullUrls.find(function (fullUrl) { return redirectUrl.startsWith(fullUrl); }) != undefined;
        if (fullUrl) {
            return redirectUrl;
        }
        var url = new URL("http://a.com/" + redirectUrl);
        var locPath = location.pathname == "/" ? "" : location.pathname;
        var urlPath = url.pathname == "/" ? "" : url.pathname;
        var path = locPath && urlPath ? (urlPath.startsWith("//") ? urlPath.substring(1) : this.pathJoin(locPath, urlPath)) : locPath || urlPath;
        var search = location.search && url.search ? location.search + url.search.replace("?", "&") : location.search || url.search;
        var hash = location.hash && url.hash ? location.hash + url.hash.replace("#", "&") : location.hash || url.hash;
        return location.origin + path + search + hash;
    };
    PlateauIAM.prototype.constructIAMPlateau = function () {
        var _a, _b, _c;
        if (this.iamPlateau == undefined)
            this.iamPlateau = { token: (_a = this.keycloak) === null || _a === void 0 ? void 0 : _a.token, info: (_b = this.keycloak) === null || _b === void 0 ? void 0 : _b.tokenParsed };
        else
            this.iamPlateau.token = (_c = this.keycloak) === null || _c === void 0 ? void 0 : _c.token;
        // if (window.location.search) sessionStorage.setItem('queryParams', window.location.search);
        if (window.location.search)
            document.cookie = "queryParamsIAM=" + window.location.search + ";path=/;";
    };
    PlateauIAM.prototype.getTokens = function () {
        var _a, _b, _c, _d, _e, _f;
        if (!this.authOptions.preserveTokens && !((_c = (_b = (_a = this.settingsIAM) === null || _a === void 0 ? void 0 : _a.iam) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.preserveTokens))
            return undefined;
        return {
            idToken: (_d = sessionStorage.getItem(this.sessionStorageNamePrefix + "kcIdToken")) !== null && _d !== void 0 ? _d : undefined,
            refreshToken: (_e = sessionStorage.getItem(this.sessionStorageNamePrefix + "kcRefreshToken")) !== null && _e !== void 0 ? _e : undefined,
            token: (_f = sessionStorage.getItem(this.sessionStorageNamePrefix + "kcToken")) !== null && _f !== void 0 ? _f : undefined
        };
    };
    PlateauIAM.prototype.getTokenFromKeycloak = function () {
        if (!this.keycloak)
            return undefined;
        if (!this.keycloak.idToken || !this.keycloak.refreshToken || !this.keycloak.token)
            return undefined;
        return { idToken: this.keycloak.idToken, refreshToken: this.keycloak.refreshToken, token: this.keycloak.token, info: this.keycloak.tokenParsed };
    };
    PlateauIAM.prototype.setToOptions = function (initOptions, tokenInfo) {
        initOptions.idToken = tokenInfo.idToken;
        initOptions.refreshToken = tokenInfo.refreshToken;
        initOptions.token = tokenInfo.token;
    };
    PlateauIAM.prototype.setTokens = function (options) {
        var _a, _b, _c, _d;
        if (options === void 0) { options = {}; }
        if (!this.authOptions.preserveTokens && !((_c = (_b = (_a = this.settingsIAM) === null || _a === void 0 ? void 0 : _a.iam) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.preserveTokens))
            return undefined;
        var tokenInfo = (_d = options.tokenInfo) !== null && _d !== void 0 ? _d : this.getTokenFromKeycloak();
        if (!tokenInfo)
            return undefined;
        sessionStorage.setItem(this.sessionStorageNamePrefix + "kcIdToken", tokenInfo.idToken);
        sessionStorage.setItem(this.sessionStorageNamePrefix + "kcRefreshToken", tokenInfo.refreshToken);
        sessionStorage.setItem(this.sessionStorageNamePrefix + "kcToken", tokenInfo.token);
    };
    PlateauIAM.prototype.refreshPromise = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var isRefreshed, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        isRefreshed = false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ((_a = this.keycloak) === null || _a === void 0 ? void 0 : _a.updateToken(this.updateTime))];
                    case 2:
                        isRefreshed = _b.sent();
                        this.constructIAMPlateau();
                        this.setTokens();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        window.location.href = window.location.protocol + '//' + window.location.host;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, isRefreshed];
                }
            });
        });
    };
    PlateauIAM.prototype.getKeyCloakOptions = function () {
        if (this.authOptions.active) {
            return { onLoad: "login-required", pkceMethod: 'S256', checkLoginIframe: false, responseMode: 'fragment' };
        }
        return { onLoad: this.initOptions.onLoad, pkceMethod: this.initOptions.pkceMethod, checkLoginIframe: false, responseMode: this.initOptions.responseMode };
    };
    PlateauIAM.prototype.getLoginOptions = function () {
        return { locale: this.authOptions.language || this.initOptions.locale };
    };
    PlateauIAM.prototype.logout = function () {
        var _a, _b;
        var getredirectURL = window.location.protocol + '//' + window.location.host;
        var paramsArr = this.getLogoutURLParams();
        getredirectURL = this.getRedirectURL(paramsArr, getredirectURL);
        _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log({ logMessage: 'getredirectURL:' });
        _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log({ logMessage: getredirectURL });
        // const getredirectURL = this.initOptions.url
        var options = { redirectUri: getredirectURL };
        var logoutUrl = (_a = this.keycloak) === null || _a === void 0 ? void 0 : _a.createLogoutUrl(options);
        var options2 = { redirectUri: logoutUrl };
        (_b = this.keycloak) === null || _b === void 0 ? void 0 : _b.logout(options2);
    };
    PlateauIAM.prototype.getRedirectURL = function (paramsArr, getredirectURL) {
        if (this.authOptions.active || this.initOptions.identityProvider.type === 'queryString') {
            paramsArr.reduce(function (acc, param, index) {
                if (!param.value) {
                    return acc;
                }
                var separator = index === 0 ? '?' : '&';
                return getredirectURL = getredirectURL + separator + (param.key + "=" + param.value);
            }, '');
        }
        return getredirectURL;
    };
    PlateauIAM.prototype.getLogoutURLParams = function () {
        var newOptions = this.authOptions.active ? this.authOptions : this.initOptions;
        var lang = this.authOptions.active ? this.authOptions.language : this.initOptions.locale;
        return [{ key: "realm", value: newOptions.realm }, { key: "subdomain", value: newOptions.subdomain }, { key: "lang", value: lang }];
    };
    PlateauIAM.prototype.login = function (PlateauUIOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var callback;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        callback = function () {
                            /*             setInterval(() => {
                                            this.refresh()
                                        }, this.refreshTime)
                             */ 
                        };
                        return [4 /*yield*/, this.init(callback, PlateauUIOptions)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PlateauIAM;
}());



/***/ })

}]);
//# sourceMappingURL=src_managers_PlateauIAM_ts.js.map?ver=3.1.2-4