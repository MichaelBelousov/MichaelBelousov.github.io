(function() {
var exports = {};
exports.id = 9939;
exports.ids = [9939,4298,2905,1890,4930,9444,8362];
exports.modules = {

/***/ 13131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53618);
/* harmony import */ var _components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80989);
/* harmony import */ var _components_PageUnderFeatureFlag_PageUnderFeatureFlag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var _components_pages_Pricing_Pricing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4827);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7276);
/* harmony import */ var _constants_Tiers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71747);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85804);
/* harmony import */ var _services_mdService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79879);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__, _components_pages_Pricing_Pricing__WEBPACK_IMPORTED_MODULE_3__]);
([_api__WEBPACK_IMPORTED_MODULE_0__, _components_pages_Pricing_Pricing__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
__webpack_require__(14473);













function Page(props) {
  const {
    preloadedApis,
    tiers,
    usingCreditsMdContent,
    faqMdContent,
    contactUsMdContent
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_PageUnderFeatureFlag_PageUnderFeatureFlag__WEBPACK_IMPORTED_MODULE_2__/* .PageUnderFeatureFlag */ .A, {
    flagName: "pricing",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_1__/* .PageMetadata */ .d, {
        title: "Pricing | iTwin Platform"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_pages_Pricing_Pricing__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        preloadedApis: preloadedApis,
        tiers: tiers,
        usingCreditsMdContent: usingCreditsMdContent,
        faqMdContent: faqMdContent,
        contactUsMdContent: contactUsMdContent
      })]
    })
  });
}

async function getStaticProps() {
  const responseDictionary = await _api__WEBPACK_IMPORTED_MODULE_0__/* .apisApi.getPricedApiMap */ .u.getPricedApiMap();
  responseDictionary['Visualization'] = [{
    name: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_4__/* .ApiGroupId.Visualization */ .mV.Visualization,
    path: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_4__/* .ApiGroupId.Visualization */ .mV.Visualization,
    displayName: 'Visualization',
    tags: []
  }];
  const tiers = Object.values(_constants_Tiers__WEBPACK_IMPORTED_MODULE_5__/* .Tier */ .K).map(tier => {
    return {
      tier: tier,
      name: tier === _constants_Tiers__WEBPACK_IMPORTED_MODULE_5__/* .Tier.Trial */ .K.Trial ? '90-day Trial' : tier,
      price: _constants_Tiers__WEBPACK_IMPORTED_MODULE_5__/* .creditsPerTier */ .h[tier] ?? 0,
      isFree: tier === _constants_Tiers__WEBPACK_IMPORTED_MODULE_5__/* .Tier.Trial */ .K.Trial,
      isStartingPrice: _constants_Tiers__WEBPACK_IMPORTED_MODULE_5__/* .creditsPerTier */ .h[tier] !== undefined,
      description: (0,_services_mdService__WEBPACK_IMPORTED_MODULE_7__/* .preloadTierTileMdContent */ .UA)(tier)
    };
  });
  const usingCreditsMdContent = (0,_services_mdService__WEBPACK_IMPORTED_MODULE_7__/* .preloadPricingSectionMdContent */ .kI)('using-credits');
  const faqMdContent = (0,_services_mdService__WEBPACK_IMPORTED_MODULE_7__/* .preloadPricingSectionMdContent */ .kI)('faq');
  const contactUsMdContent = (0,_services_mdService__WEBPACK_IMPORTED_MODULE_7__/* .preloadPricingSectionMdContent */ .kI)('contact-us');
  return {
    props: {
      tiers: tiers,
      preloadedApis: responseDictionary,
      usingCreditsMdContent,
      faqMdContent,
      contactUsMdContent
    },
    revalidate: _constants_constants__WEBPACK_IMPORTED_MODULE_6__/* .CACHE_REVALIDATION_PERIOD_IN_SECONDS */ .qr
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Page);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19444:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ MarkdownViewWithMermaid; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_showdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69319);
/* harmony import */ var react_showdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_showdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useMermaid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2961);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MarkdownViewWithMermaid = props => {
  (0,_hooks_useMermaid__WEBPACK_IMPORTED_MODULE_2__/* .useMermaid */ .p)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_showdown__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread({}, props));
};

/***/ }),

/***/ 80989:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": function() { return /* binding */ PageMetadata; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function PageMetadata({
  title
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("title", {
      children: title
    })
  });
}

/***/ }),

/***/ 2905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": function() { return /* binding */ PageUnderFeatureFlag; }
});

// EXTERNAL MODULE: ./src/stores/launchDarklyStore.ts
var launchDarklyStore = __webpack_require__(53164);
// EXTERNAL MODULE: ./src/components/pages/NotFound/NotFound.tsx
var NotFound = __webpack_require__(212);
;// CONCATENATED MODULE: ./src/components/pages/NotFound/index.ts

// EXTERNAL MODULE: ./src/components/ProgressRadialWithOverlay/ProgressRadialWithOverlay.tsx
var ProgressRadialWithOverlay = __webpack_require__(31993);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/PageUnderFeatureFlag/PageUnderFeatureFlag.tsx




function PageUnderFeatureFlag({
  flagName,
  children
}) {
  const flags = (0,launchDarklyStore/* useLaunchDarklyFlags */.L)();

  if (flags[flagName] == null) {
    return /*#__PURE__*/jsx_runtime_.jsx(ProgressRadialWithOverlay/* ProgressRadialWithOverlay */.b, {
      isFullPage: true
    });
  }

  return flags[flagName] ? children : /*#__PURE__*/jsx_runtime_.jsx(NotFound/* NotFound */.T, {});
}

/***/ }),

/***/ 61890:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": function() { return /* binding */ GroupIcon; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/constants/ApiGroupId.ts
var ApiGroupId = __webpack_require__(7276);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/AdministrationIcon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M15.25 3.422a1.301 1.301 0 0 0-1.18-1.298A10.361 10.361 0 0 1 8.843.304a1.3 1.3 0 0 0-1.669 0 10.571 10.571 0 0 1-5.244 1.82A1.301 1.301 0 0 0 .75 3.422c0 9.442 6.457 12.359 6.727 12.477a1.4 1.4 0 0 0 1.046 0c.27-.118 6.727-3.035 6.727-12.477zm-4.721 9.459a8.468 8.468 0 0 1-2.546 1.871 8.997 8.997 0 0 1-2.529-1.871l.169-1.467a1.602 1.602 0 0 1 1.585-1.417h1.568a1.59 1.59 0 0 1 1.584 1.417zM9.467 7.013A1.467 1.467 0 1 1 8 5.547a1.468 1.468 0 0 1 1.467 1.466zm4.519-3.574a13.633 13.633 0 0 1-2.327 8.093l-.033-.27a2.88 2.88 0 0 0-1.72-2.293 2.731 2.731 0 1 0-3.811 0 2.855 2.855 0 0 0-1.72 2.293l-.033.27a13.767 13.767 0 0 1-2.277-8.127 12.344 12.344 0 0 0 5.968-2.108 11.632 11.632 0 0 0 5.918 2.108z"
    })
  }));
};

SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const AdministrationIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(SvgIcon, _objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_AdministrationIcon = (AdministrationIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/ConstructionIcon.tsx
function ConstructionIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ConstructionIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ConstructionIcon_ownKeys(Object(source), !0).forEach(function (key) { ConstructionIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ConstructionIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ConstructionIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ConstructionIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", ConstructionIcon_objectSpread(ConstructionIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      "'data-name'": "Construction",
      d: "M16 9.067c0-.147-.12-.267-.267-.4h-3.466v-.715a.795.795 0 0 0 0-1.501V5.333H15.2c.147 0 .267-.12.133-.266V2.933c.134-.005.128-.037.126-.05a.153.153 0 0 0-.011-.037.374.374 0 0 0-.017-.035.151.151 0 0 0-.021-.034.266.266 0 0 0-.027-.03.14.14 0 0 0-.029-.026.151.151 0 0 0-.035-.022.13.13 0 0 0-.034-.016.273.273 0 0 0-.038-.011c-.01 0-.042-.005-.048-.005h-2.095L3.539.01A.209.209 0 0 0 3.469 0h-.002l-.014.003a.203.203 0 0 0-.056.008l-.024.008a.213.213 0 0 0-.042.021l-.022.013-.013.008-3.2 2.667a.727.727 0 0 0-.043.053.346.346 0 0 0-.026.04.624.624 0 0 0-.024.102L0 2.933v2.134l.003.013a.206.206 0 0 0 .005.04.153.153 0 0 0 .01.037.029.029 0 0 0 .003.014.093.093 0 0 0 .014.021.152.152 0 0 0 .021.035.267.267 0 0 0 .027.029.14.14 0 0 0 .029.027.151.151 0 0 0 .035.021c.008.003.013.01.021.013l.01.003a.304.304 0 0 0 .089.013h1.9v10.4c-.034.006-.031.008-.031.014a.206.206 0 0 0 .005.04.153.153 0 0 0 .011.037.02.02 0 0 1 .003.013c0 .006.008.014.013.022a.151.151 0 0 0 .021.034.266.266 0 0 0 .027.03.14.14 0 0 0 .03.026.151.151 0 0 0 .034.022c.008.002.013.01.021.013l.011.003A.304.304 0 0 0 2.4 16h2.133a.325.325 0 0 0 .3-.267V9.6h1.3a.494.494 0 0 0 .367-.267v-4h5.233v1.115a.795.795 0 0 0 0 1.501v.718H8.267C8.12 8.8 8 8.92 8 9.067v1.066c0 .147.12.267.267.2h7.466c.147.067.267-.053.267-.2ZM6.4 4.8H5.176L6.4 3.576Zm-2.133 0H3.043l1.224-1.224Zm6.842-2.133H4.715l-.8-1.998ZM2.667 4.424V3.2H3.89Zm1.472-1.757H2.795L3.467.983ZM4.8 4.424V3.2h1.224ZM2.827 1.147l-.608 1.52H1.002ZM.533 4.424V3.2h1.224Zm6.4 0V3.2h1.224Zm2.134 0V3.2h1.224Zm2.133 0V3.2h1.224Zm3.733-.848V4.8H13.71Zm-.376-.376-1.224 1.224V3.2ZM.91 4.8l1.224-1.224V4.8Zm3.358 7.31v1.223H3.043Zm-.376-.377-1.224 1.224v-1.224Zm-1.224 3.358v-1.224H3.89Zm1.6-5.115V11.2H3.043ZM3.89 9.6l-1.224 1.224V9.6Zm.376 4.643v1.224H3.043Zm1.6-5.176L4.533 9H2.667V5.333h.666v2.934c-.133.034-.125.069-.112.101a.272.272 0 0 0 .144.144.083.083 0 0 0 .102-.012h2.4ZM6 5.333V8h-.824l.344-.344a.267.267 0 0 0-.376-.376l-.72.72h-.312l.877-.877a.267.267 0 0 0-.376-.376l-.78.877v-2.29ZM7.31 4.8l1.223-1.224V4.8Zm2.133 0 1.224-1.224V4.8Zm2.133 0L12.8 3.576V4.8Zm.157 2.4a.267.267 0 1 1 .267.267.267.267 0 0 1-.267-.267Zm3.734 2.133v.5H8.533v-.5Z"
    })
  }));
};

ConstructionIcon_SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const ConstructionIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(ConstructionIcon_SvgIcon, ConstructionIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_ConstructionIcon = (ConstructionIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/DocumentManagementIcon.tsx
function DocumentManagementIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function DocumentManagementIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? DocumentManagementIcon_ownKeys(Object(source), !0).forEach(function (key) { DocumentManagementIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : DocumentManagementIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function DocumentManagementIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var DocumentManagementIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", DocumentManagementIcon_objectSpread(DocumentManagementIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M3 12.5a.5.5 0 1 1-.5-.5.5.5 0 0 1 .5.5zM5 1v14a1.04 1.04 0 0 1-1.071 1H1.07A1.04 1.04 0 0 1 0 15V1a1.04 1.04 0 0 1 1.071-1H3.93A1.04 1.04 0 0 1 5 1zM4 12.5A1.5 1.5 0 1 0 2.5 14 1.5 1.5 0 0 0 4 12.5zM4 5H1v1h3zm0-2H1v1h3zm0-2H1v1h3zm4 11a.5.5 0 1 0 .5.5.5.5 0 0 0-.5-.5zm2.5-11v14a1.04 1.04 0 0 1-1.071 1H6.57A1.04 1.04 0 0 1 5.5 15V1a1.04 1.04 0 0 1 1.071-1H9.43A1.04 1.04 0 0 1 10.5 1zm-1 11.5A1.5 1.5 0 1 0 8 14a1.5 1.5 0 0 0 1.5-1.5zm0-7.5h-3v1h3zm0-2h-3v1h3zm0-2h-3v1h3zm4 11a.5.5 0 1 0 .5.5.5.5 0 0 0-.5-.5zM16 1v14a1.04 1.04 0 0 1-1.071 1H12.07A1.04 1.04 0 0 1 11 15V1a1.04 1.04 0 0 1 1.071-1h2.858A1.04 1.04 0 0 1 16 1zm-1 11.5a1.5 1.5 0 1 0-1.5 1.5 1.5 1.5 0 0 0 1.5-1.5zM15 5h-3v1h3zm0-2h-3v1h3zm0-2h-3v1h3z"
    })
  }));
};

DocumentManagementIcon_SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const DocumentManagementIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(DocumentManagementIcon_SvgIcon, DocumentManagementIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_DocumentManagementIcon = (DocumentManagementIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/InfrastructureIcon.tsx
function InfrastructureIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function InfrastructureIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? InfrastructureIcon_ownKeys(Object(source), !0).forEach(function (key) { InfrastructureIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : InfrastructureIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function InfrastructureIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var InfrastructureIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", InfrastructureIcon_objectSpread(InfrastructureIcon_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M0 0v7h3a5 5 0 0 1 10 0h3V0"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M11.12 6H4.87L3 15.37V16h10v-.63ZM7.93 7h.13l.2 1.71h-.53Zm-.34 2.86h.8l.2 1.71h-1.2ZM7 15l.27-2.29h1.46L9 15Z"
    })]
  }));
};

InfrastructureIcon_SvgIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
};

const InfrastructureIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(InfrastructureIcon_SvgIcon, InfrastructureIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_InfrastructureIcon = (InfrastructureIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/InternalAccessIcon.tsx
function InternalAccessIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function InternalAccessIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? InternalAccessIcon_ownKeys(Object(source), !0).forEach(function (key) { InternalAccessIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : InternalAccessIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function InternalAccessIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var InternalAccessIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", InternalAccessIcon_objectSpread(InternalAccessIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M7.984 1.679a1.441 1.441 0 1 1-1.441 1.44 1.441 1.441 0 0 1 1.441-1.44zm-3.446 1.44A1.441 1.441 0 1 1 3.097 4.56a1.441 1.441 0 0 1 1.44-1.44zM3.12 6.575a1.441 1.441 0 1 1-1.441 1.441 1.441 1.441 0 0 1 1.44-1.441zm1.44 3.446a1.441 1.441 0 1 1-1.44 1.441 1.441 1.441 0 0 1 1.44-1.441zm3.456 1.418a1.441 1.441 0 1 1-1.441 1.441 1.441 1.441 0 0 1 1.441-1.441zm3.446-1.44a1.441 1.441 0 1 1-1.441 1.44A1.441 1.441 0 0 1 11.462 10zm1.418-3.456a1.441 1.441 0 1 1-1.441 1.441 1.441 1.441 0 0 1 1.441-1.441zm-1.44-3.446a1.441 1.441 0 1 1-1.442 1.44 1.441 1.441 0 0 1 1.441-1.44zM8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14.763A6.763 6.763 0 1 1 14.763 8 6.77 6.77 0 0 1 8 14.763zm0-9.788A3.025 3.025 0 1 0 11.025 8 3.025 3.025 0 0 0 8 4.975zm0 5.096A2.071 2.071 0 1 1 10.071 8 2.071 2.071 0 0 1 8 10.071z"
    })
  }));
};

InternalAccessIcon_SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const InternalAccessIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(InternalAccessIcon_SvgIcon, InternalAccessIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_InternalAccessIcon = (InternalAccessIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/PerformanceOperationsIcon.tsx
function PerformanceOperationsIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PerformanceOperationsIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PerformanceOperationsIcon_ownKeys(Object(source), !0).forEach(function (key) { PerformanceOperationsIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PerformanceOperationsIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function PerformanceOperationsIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var PerformanceOperationsIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", PerformanceOperationsIcon_objectSpread(PerformanceOperationsIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m10.75 5.952-3.6 2.233a1.72 1.72 0 0 0-.8 1.45 1.679 1.679 0 0 0 1.69 1.667h.01a1.667 1.667 0 0 0 1.433-.834l2.166-3.65a.642.642 0 0 0-.9-.866zM8 1.608a8.009 8.009 0 0 0-6.636 12.48.676.676 0 0 0 .556.304.655.655 0 0 0 .388-.118.698.698 0 0 0 .185-.944A6.504 6.504 0 0 1 1.416 10.3h1.077a.674.674 0 0 0 0-1.348H1.399a6.645 6.645 0 0 1 1.448-3.503l.775.775a.674.674 0 0 0 .488.202.7.7 0 0 0 .488-.202.67.67 0 0 0 .012-.948l-.012-.012-.792-.81A6.805 6.805 0 0 1 7.31 2.99v1.095a.674.674 0 1 0 1.347 0V2.99a6.669 6.669 0 0 1 5.944 5.945h-1.094a.674.674 0 0 0 0 1.347h1.077a6.706 6.706 0 0 1-1.077 3.031.664.664 0 0 0 .16.926l.025.018a.664.664 0 0 0 .926-.16l.017-.026A7.996 7.996 0 0 0 8 1.608z"
    })
  }));
};

PerformanceOperationsIcon_SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const PerformanceOperationsIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(PerformanceOperationsIcon_SvgIcon, PerformanceOperationsIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_PerformanceOperationsIcon = (PerformanceOperationsIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/ProjectDeliveryIcon.tsx
function ProjectDeliveryIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ProjectDeliveryIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ProjectDeliveryIcon_ownKeys(Object(source), !0).forEach(function (key) { ProjectDeliveryIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ProjectDeliveryIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ProjectDeliveryIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ProjectDeliveryIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", ProjectDeliveryIcon_objectSpread(ProjectDeliveryIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8.722 2.075h-4v6.777h9.6V2.074h-4V3.11h-1.6zM0 1.582V0h3.167L3.09 10.456H16v1.575H1.56V1.581zM3.09 14.4zm8.11 0z",
      fillRule: "evenodd"
    })
  }));
};

ProjectDeliveryIcon_SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const ProjectDeliveryIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(ProjectDeliveryIcon_SvgIcon, ProjectDeliveryIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_ProjectDeliveryIcon = (ProjectDeliveryIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/RealityModelingIcon.tsx
function RealityModelingIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function RealityModelingIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? RealityModelingIcon_ownKeys(Object(source), !0).forEach(function (key) { RealityModelingIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : RealityModelingIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function RealityModelingIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var RealityModelingIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", RealityModelingIcon_objectSpread(RealityModelingIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M13.967 5.085h-.434V3.857h-.066a.64.64 0 0 1-.666-.612l-.001-.019V1.833h-.533V3.26a.662.662 0 0 1-.667.63v1.228H4.433V3.891c-.033 0-.733.033-.733-.631V1.833h-.533V3.26a.662.662 0 0 1-.667.63v1.228h-.467a.93.93 0 0 0-.933.927v.003a.93.93 0 0 0 .93.93h2.137l-1.8 6.67a.39.39 0 0 0 .733.266l1.867-6.97.8 1.858h1.266v.764H5.667A.667.667 0 0 0 5 10.23v2.29a.667.667 0 0 0 .667.663h4.666a.667.667 0 0 0 .667-.664v-2.29a.667.667 0 0 0-.667-.663H8.967v-.764h1.266l.8-1.858 1.867 6.969a.39.39 0 0 0 .733-.266l-1.8-6.738h2.134a.93.93 0 0 0 .933-.926V5.98a.947.947 0 0 0-.933-.895zm-4.8 6.306A1.167 1.167 0 1 1 8 10.229a1.178 1.178 0 0 1 1.167 1.162zM8 10.622a.755.755 0 0 0-.767.742v.025a.755.755 0 0 0 .742.767H8a.767.767 0 0 0 0-1.534zM14.433 3A3.503 3.503 0 0 0 16 2.6a3.503 3.503 0 0 0-1.567-.4c-.866 0-1.333.167-1.333.4s.467.4 1.333.4zm-2.466-.4c0-.233-.434-.4-1.3-.4a3.503 3.503 0 0 0-1.567.4 3.503 3.503 0 0 0 1.567.4c.866 0 1.3-.166 1.3-.4zM5.333 3A3.503 3.503 0 0 0 6.9 2.6a3.49 3.49 0 0 0-1.567-.4c-.866 0-1.3.167-1.3.4s.434.4 1.3.4zM2.9 2.6c0-.233-.433-.4-1.3-.4a3.736 3.736 0 0 0-1.6.4 3.503 3.503 0 0 0 1.567.4C2.433 3 2.9 2.833 2.9 2.6z"
    })
  }));
};

RealityModelingIcon_SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const RealityModelingIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(RealityModelingIcon_SvgIcon, RealityModelingIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_RealityModelingIcon = (RealityModelingIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/ReportingsInsightsIcon.tsx
function ReportingsInsightsIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ReportingsInsightsIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ReportingsInsightsIcon_ownKeys(Object(source), !0).forEach(function (key) { ReportingsInsightsIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ReportingsInsightsIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ReportingsInsightsIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ReportingsInsightsIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", ReportingsInsightsIcon_objectSpread(ReportingsInsightsIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M6.866.004A7.18 7.18 0 0 0 0 6.87h6.867zm-6.232 8.6a7.599 7.599 0 0 0 1.207 3.865l5.556-3.865zm2.418 5.315a7.606 7.606 0 0 0 4.974 2.077V8.867L2.172 12.94a7.796 7.796 0 0 0 .88.979zm2.677-2.154h1.436a.287.287 0 0 1 .287.287.287.287 0 0 1-.287.287H5.73a.287.287 0 0 1-.287-.287.287.287 0 0 1 .287-.287zm-.575 1.149h2.01a.287.287 0 0 1 .288.287.287.287 0 0 1-.287.287H5.153a.287.287 0 0 1-.287-.287.287.287 0 0 1 .287-.287zm0 1.149h2.01a.287.287 0 0 1 .288.287.287.287 0 0 1-.287.288H5.153a.287.287 0 0 1-.287-.287.287.287 0 0 1 .287-.288zm8.762-11.008A7.607 7.607 0 0 0 8.6.637v15.36l.203-.01a7.685 7.685 0 0 0 5.112-12.932zm-4.452-.483h2.584a.287.287 0 0 1 .287.287.287.287 0 0 1-.287.288H9.463a.287.287 0 0 1-.287-.287.287.287 0 0 1 .287-.288zm3.446 2.872H9.464a.287.287 0 0 1-.288-.287.287.287 0 0 1 .287-.287h3.447a.287.287 0 0 1 0 .574zm0-1.149H9.464a.287.287 0 0 1-.288-.287.287.287 0 0 1 .287-.287h3.447a.287.287 0 0 1 0 .574z"
    })
  }));
};

ReportingsInsightsIcon_SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const ReportingsInsightsIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(ReportingsInsightsIcon_SvgIcon, ReportingsInsightsIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_ReportingsInsightsIcon = (ReportingsInsightsIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/ReviewIcon.tsx
function ReviewIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ReviewIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ReviewIcon_ownKeys(Object(source), !0).forEach(function (key) { ReviewIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ReviewIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ReviewIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ReviewIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", ReviewIcon_objectSpread(ReviewIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M18 13.5a.5.5 0 0 1-.354-.146l-1.5-1.5a.5.5 0 0 1 .707-.707l1.083 1.082 2.157-3.02a.5.5 0 0 1 .814.582l-2.5 3.5a.503.503 0 0 1-.366.208L18 13.5Zm.041 5.998a.502.502 0 0 0 .366-.207l2.5-3.5a.5.5 0 0 0-.814-.582l-2.157 3.02-1.083-1.083a.5.5 0 0 0-.707.707l1.5 1.5A.501.501 0 0 0 18 19.5l.041-.002ZM24 15.258V7.461a.54.54 0 0 0-.539-.539H20V7a1.003 1.003 0 0 1-1 1h-8a1.003 1.003 0 0 1-1-1v-.077H6.539A.54.54 0 0 0 6 7.462v21.999a.54.54 0 0 0 .539.539h16.922a.54.54 0 0 0 .539-.539v-5.718l2-2v7.718A2.539 2.539 0 0 1 23.461 32H6.539A2.539 2.539 0 0 1 4 29.461V7.462a2.539 2.539 0 0 1 2.539-2.539h3.49A2.23 2.23 0 0 1 12 3.01V3a3 3 0 0 1 6 0v.01a2.23 2.23 0 0 1 1.97 1.913h3.491A2.539 2.539 0 0 1 26 7.462v5.795ZM14 3a1 1 0 1 0 1-1 1.003 1.003 0 0 0-1 1Zm16.01 10.49a2 2 0 0 0-2.828 0l-8.353 8.352-.61 2.67-1.365-1.366a.5.5 0 0 0-.707.707l1.5 1.5a.497.497 0 0 0 .345.145l-.002.012 3.668-.84 8.352-8.352a2 2 0 0 0 0-2.828ZM15 12.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5Zm0 6a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5Zm0 6a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5Z"
    })
  }));
};

ReviewIcon_SvgIcon.defaultProps = {
  'data-name': "Layer 1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
};

const ReviewIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(ReviewIcon_SvgIcon, ReviewIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_ReviewIcon = (ReviewIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/SynchronizationIcon.tsx
function SynchronizationIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function SynchronizationIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SynchronizationIcon_ownKeys(Object(source), !0).forEach(function (key) { SynchronizationIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SynchronizationIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function SynchronizationIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SynchronizationIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", SynchronizationIcon_objectSpread(SynchronizationIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M14 2.5v2a10.011 10.011 0 0 0-10 10h2l-3 4-3-4h2a12.013 12.013 0 0 1 12-12Zm15 11-3 4h2a10.012 10.012 0 0 1-10 10v2a12.013 12.013 0 0 0 12-12h2Zm-4 2a9 9 0 1 1-9-9 9 9 0 0 1 9 9Zm-2.023.451h-1.99a12.167 12.167 0 0 1-.468 3.009l1.562-.006a6.944 6.944 0 0 0 .896-3.003ZM19.033 11A4.167 4.167 0 0 0 16.5 8.564V11ZM16.5 12v2.951h3.484A10.809 10.809 0 0 0 19.44 12Zm-3.533-1H15.5V8.564A4.167 4.167 0 0 0 12.967 11Zm-.407 1a10.809 10.809 0 0 0-.544 2.951H15.5V12Zm-1.067 0H9.947a6.941 6.941 0 0 0-.92 2.951h1.99A12.096 12.096 0 0 1 11.493 12Zm-2.47 3.951a6.942 6.942 0 0 0 .922 3.046l1.545-.006a12.145 12.145 0 0 1-.476-3.04Zm3.532 3.037 2.945-.01V15.95h-3.486a10.85 10.85 0 0 0 .541 3.037Zm.405.998a4.177 4.177 0 0 0 2.54 2.45v-2.459Zm6.091-.021-2.551.009v2.462a4.191 4.191 0 0 0 2.551-2.471Zm.402-1.001a10.862 10.862 0 0 0 .533-3.013H16.5v3.023Zm3.52-4.013a6.941 6.941 0 0 0-.92-2.951h-1.546a12.096 12.096 0 0 1 .476 2.951Zm-3.81-5.687A7.666 7.666 0 0 1 20.158 11h1.196a7.039 7.039 0 0 0-2.19-1.736ZM10.646 11h1.196a7.666 7.666 0 0 1 .995-1.736A7.039 7.039 0 0 0 10.646 11Zm2.19 10.736a7.68 7.68 0 0 1-.998-1.746l-1.197.004a7.038 7.038 0 0 0 2.195 1.742Zm8.557-1.78-1.22.005a7.704 7.704 0 0 1-1.01 1.775 7.04 7.04 0 0 0 2.23-1.78Z"
    })
  }));
};

SynchronizationIcon_SvgIcon.defaultProps = {
  'data-name': "Layer 1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
};

const SynchronizationIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(SynchronizationIcon_SvgIcon, SynchronizationIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_SynchronizationIcon = (SynchronizationIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/VisualizationIcon.tsx
function VisualizationIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function VisualizationIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? VisualizationIcon_ownKeys(Object(source), !0).forEach(function (key) { VisualizationIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : VisualizationIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function VisualizationIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var VisualizationIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", VisualizationIcon_objectSpread(VisualizationIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M14.647 12.43v-1.348a.473.473 0 0 0-.406-.471l-5.767-.74V8.74a6.938 6.938 0 0 0 3.957-2.29.46.46 0 0 0 0-.607C12.346 5.744 10.435 3.52 8 3.52S3.653 5.743 3.569 5.844a.46.46 0 0 0 0 .607 7.01 7.01 0 0 0 3.957 2.29V9.87l-5.768.74a.473.473 0 0 0-.405.472v1.348A1.815 1.815 0 0 0 1.826 16a1.837 1.837 0 0 0 1.827-1.82A1.81 1.81 0 0 0 2.3 12.43v-.943l5.226-.674v1.617A1.815 1.815 0 0 0 8 16a1.837 1.837 0 0 0 1.827-1.82 1.81 1.81 0 0 0-1.354-1.75v-1.617l5.227.674v.943a1.815 1.815 0 0 0 .473 3.57A1.837 1.837 0 0 0 16 14.18a1.81 1.81 0 0 0-1.353-1.75zM2.706 14.18a.897.897 0 1 1-.897-.892.9.9 0 0 1 .897.893zm4.803-9.6a.543.543 0 0 1 .541.54.555.555 0 0 1-.541.539.539.539 0 1 1 0-1.078zm-1.15.287a1.752 1.752 0 0 0-.084.505 1.725 1.725 0 0 0 3.45 0 1.752 1.752 0 0 0-.085-.505 7.47 7.47 0 0 1 1.793 1.28A5.424 5.424 0 0 1 8 7.832a5.422 5.422 0 0 1-3.433-1.685 6.644 6.644 0 0 1 1.792-1.28zm2.537 9.314A.896.896 0 1 1 8 13.288a.9.9 0 0 1 .896.893zm5.277.876a.893.893 0 1 1 .896-.893.89.89 0 0 1-.886.893zM8 2.34a.472.472 0 0 0 .473-.47V.47a.472.472 0 0 0-.472-.47H8a.461.461 0 0 0-.474.448V1.886A.469.469 0 0 0 8 2.341zm2.993.808a.387.387 0 0 0 .237.067.456.456 0 0 0 .405-.235l.71-1.23a.47.47 0 0 0-.811-.471l-.71 1.23a.456.456 0 0 0 .147.626zm-6.63-.184a.476.476 0 0 0 .406.235.427.427 0 0 0 .236-.066.469.469 0 0 0 .17-.64l-.71-1.23a.47.47 0 0 0-.813.471z"
    })
  }));
};

VisualizationIcon_SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const VisualizationIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(VisualizationIcon_SvgIcon, VisualizationIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_VisualizationIcon = (VisualizationIcon);
;// CONCATENATED MODULE: ./src/components/icons/ApiGroups/EventsIcon.tsx
function EventsIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EventsIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EventsIcon_ownKeys(Object(source), !0).forEach(function (key) { EventsIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EventsIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function EventsIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var EventsIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", EventsIcon_objectSpread(EventsIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12.487 12.08H4.605v.835a1.856 1.856 0 0 1-3.678-.318 1.814 1.814 0 0 1 .798-1.5l-.532-.748A2.721 2.721 0 0 0 0 12.597a2.758 2.758 0 0 0 2.78 2.736 2.768 2.768 0 0 0 2.741-2.278h6.929a.922.922 0 1 0 .801-1.37.93.93 0 0 0-.764.395zM1.93 12.2a.925.925 0 0 1 .843-.58l3.435-6.035a2.804 2.804 0 0 1-.624-3.529 2.717 2.717 0 0 1 3.699-1.04l.04.023a2.775 2.775 0 0 1 1.357 2.164l-.909.08a1.85 1.85 0 0 0-.905-1.442 1.811 1.811 0 0 0-2.477.652l-.015.026a1.867 1.867 0 0 0 .614 2.497l.502.294-3.891 6.835a.936.936 0 0 1 .016.762.911.911 0 0 1-1.77-.32.935.935 0 0 1 .085-.387zm6.105-7.865 3.853 6.767.458-.27.008.015.011-.008a1.802 1.802 0 0 1 2.469.636l.016.028a1.856 1.856 0 0 1-.677 2.514 1.805 1.805 0 0 1-1.688.078l-.39.834a2.71 2.71 0 0 0 2.53-.12 2.785 2.785 0 0 0 1.017-3.77 2.703 2.703 0 0 0-3.338-1.183L8.884 3.851a.926.926 0 0 0-.007-.899.902.902 0 0 0-1.23-.338l-.013.007a.929.929 0 0 0-.338 1.257.901.901 0 0 0 .738.456z",
      fillRule: "evenodd"
    })
  }));
};

EventsIcon_SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const EventsIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(EventsIcon_SvgIcon, EventsIcon_objectSpread({}, props));
};

/* harmony default export */ var ApiGroups_EventsIcon = (EventsIcon);
// EXTERNAL MODULE: ./src/components/icons/ItwinGameEngineIcon.tsx
var ItwinGameEngineIcon = __webpack_require__(87246);
;// CONCATENATED MODULE: ./src/components/icons/GroupIcon.tsx
const _excluded = ["apiGroupId"];

function GroupIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function GroupIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? GroupIcon_ownKeys(Object(source), !0).forEach(function (key) { GroupIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : GroupIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function GroupIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



















function GroupIcon(_ref) {
  let {
    apiGroupId
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  switch (apiGroupId) {
    case ApiGroupId/* ApiGroupId.Administration */.mV.Administration:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_AdministrationIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.Construction */.mV.Construction:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_ConstructionIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.DataManagement */.mV.DataManagement:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_DocumentManagementIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.Events */.mV.Events:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_EventsIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.WorkflowAutomation */.mV.WorkflowAutomation:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_EventsIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.Infrastructure */.mV.Infrastructure:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_InfrastructureIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.Internal */.mV.Internal:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_InternalAccessIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.ITwinUnreal */.mV.ITwinUnreal:
      return /*#__PURE__*/jsx_runtime_.jsx(ItwinGameEngineIcon/* default */.Z, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.PerformanceOperations */.mV.PerformanceOperations:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_PerformanceOperationsIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.ProjectDelivery */.mV.ProjectDelivery:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_ReviewIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.RealityModeling */.mV.RealityModeling:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_RealityModelingIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.ReportingInsights */.mV.ReportingInsights:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_ReportingsInsightsIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.Synchronization */.mV.Synchronization:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_SynchronizationIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.Visualization */.mV.Visualization:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_VisualizationIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.Validation */.mV.Validation:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_ProjectDeliveryIcon, GroupIcon_objectSpread({}, rest));

    case ApiGroupId/* ApiGroupId.Enterprise */.mV.Enterprise:
      return /*#__PURE__*/jsx_runtime_.jsx(ApiGroups_DocumentManagementIcon, GroupIcon_objectSpread({}, rest));

    default:
      return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
  }
}

/***/ }),

/***/ 81334:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ DeprecationIcon; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["className", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const DeprecationIcon = _ref => {
  let {
    className,
    size = 'default'
  } = _ref,
      restProp = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__.SvgStatusWarning, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['indicator-icon', 'deprecated', size, className])
  }, restProp));
};

/***/ }),

/***/ 44930:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": function() { return /* binding */ TechPreviewIcon; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["className", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("defs", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("linearGradient", {
        id: "a",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("stop", {
          stopColor: "#ffc000"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("linearGradient", {
        id: "b",
        x1: "8",
        y1: "32",
        x2: "8",
        y2: "16",
        gradientTransform: "translate(0 -16)",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("stop", {
          offset: "0",
          stopColor: "#ffc335"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("stop", {
          offset: "1",
          stopColor: "#ffdf52"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
      d: "m8 1 7 7-7 7-7-7 7-7m0-1a.908.908 0 0 0-.7.3l-7 7a.967.967 0 0 0 0 1.4l7 7a.967.967 0 0 0 1.4 0l7-7a.967.967 0 0 0 0-1.4l-7-7A.908.908 0 0 0 8 0Z",
      fill: "url(#a)"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
      d: "m8.7.3 7 7a.967.967 0 0 1 0 1.4l-7 7a.967.967 0 0 1-1.4 0l-7-7a.967.967 0 0 1 0-1.4l7-7a.967.967 0 0 1 1.4 0",
      fill: "url(#b)"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("circle", {
      cx: "8",
      cy: "8",
      r: "2",
      opacity: ".9",
      style: {
        isolation: "isolate"
      }
    })]
  }));
};

SvgIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
};



const TechPreviewIcon = _ref => {
  let {
    className,
    size = 'default'
  } = _ref,
      restProp = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(SvgIcon, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['indicator-icon', 'tech-preview', size, className])
  }, restProp));
};

/***/ }),

/***/ 2257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("linearGradient", {
        id: "a",
        x1: "40.662",
        y1: "37.431",
        x2: "234.283",
        y2: "253.431",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("stop", {
          offset: "0",
          stopColor: "#cdecff"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("stop", {
          offset: "1",
          stopColor: "#fff",
          stopOpacity: "0"
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M218.33 122.483c.168 47.248-43.422 98.577-98.576 98.577-61.37 0-106.041-62.412-98.577-98.577 4.09-19.817 39.732-9.197 49.892-43.303 5.633-18.91-.82-47.836 8.851-55.525 24.456-19.441 138.14 22.735 138.41 98.828Z",
      fill: "url(#a)"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
      x: "277.206",
      y: "128.166",
      width: "32.432",
      height: "70.051",
      rx: "5",
      fill: "#b1c854"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
      x: "96.946",
      y: "74.41",
      width: "54.658",
      height: "104.648",
      rx: "5",
      fill: "#9ba5ae"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
      x: "100.94",
      y: "74.41",
      width: "51.625",
      height: "104.648",
      rx: "5",
      fill: "#dce0e3"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M126.522 84.829h.39a6.02 6.02 0 0 1 6.02 6.02v71.31a6.02 6.02 0 0 1-6.02 6.02h-.39a6.02 6.02 0 0 1-6.02-6.02v-71.31a6.02 6.02 0 0 1 6.02-6.02Z",
      fill: "#4d575f"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M277.203 134.65V190h-62.26a24.963 24.963 0 0 1-18.71-8.42l-18.88-21.3-1.33-1.5-4.44-5.01h-30.16V96.81h79.48a25.002 25.002 0 0 1 18.56 8.25l26.72 29.59Z",
      fill: "#b26e45"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M139.707 137.244h29.86a12.287 12.287 0 0 1 12.288 12.288 12.287 12.287 0 0 1-12.287 12.287h-19.861a10 10 0 0 1-10-10Z",
      fill: "#b26e45"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M170.964 136.541a1.5 1.5 0 0 0 0 3 10.783 10.783 0 0 1 6.174 19.629l-.46.321 2.003 2.26.366-.266a13.778 13.778 0 0 0-8.083-24.944Z",
      fill: "#7c4524"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M170.052 122.299a30.687 30.687 0 0 1-49.55 24.23v-48.47a30.53 30.53 0 0 1 12.43-5.8 30.738 30.738 0 0 1 37.12 30.04Z",
      fill: "#ffc335"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M139.352 97.118a25.087 25.087 0 0 0-18.85 8.51v3.15a23.187 23.187 0 0 1 12.43-8.78 22.697 22.697 0 0 1 6.42-.91 23.205 23.205 0 0 1 0 46.41 22.697 22.697 0 0 1-6.42-.91 23.224 23.224 0 0 1-12.43-8.77v3.14a25.167 25.167 0 1 0 18.85-41.84Z",
      fill: "#f7963e"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M141.882 104.819a2.083 2.083 0 0 1-2.09 2.09 16.308 16.308 0 0 0-6.86 1.49 16.59 16.59 0 0 0-9.72 15.1 2.101 2.101 0 0 1-2.71 2v-9.71a20.836 20.836 0 0 1 12.43-11.9 20.463 20.463 0 0 1 6.86-1.16 2.083 2.083 0 0 1 2.09 2.09Z",
      fill: "#fff",
      opacity: ".5"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M148.781 117.102v-.017a3.76 3.76 0 0 0-3.878-3.713 3.681 3.681 0 0 0-1.91.548 6.22 6.22 0 0 0-6.195-4.022c-4.962 0-7.186 3.77-7.192 7.506a5.04 5.04 0 0 0-4.135 5.14 5.707 5.707 0 0 0 5.698 5.697h1.038v1.437a2.064 2.064 0 0 0 .987 1.728l5.047 3a2.04 2.04 0 0 0 2.07 0l5.048-3a2.018 2.018 0 0 0 .987-1.728v-1.437h1.038a5.703 5.703 0 0 0 5.698-5.698 5.429 5.429 0 0 0-4.3-5.441Zm-6.473 13.99a.256.256 0 0 1-.125.217l-2.75 1.637a.245.245 0 0 1-.256.006l-2.806-1.66a.234.234 0 0 1-.12-.217v-1.454a.246.246 0 0 1 .25-.25.23.23 0 0 1 .126.033l1.643.907v-3.462l-.89-.564a.251.251 0 0 1-.12-.217v-1.46a.25.25 0 0 1 .251-.251.265.265 0 0 1 .132.034l2.52 1.397a.257.257 0 0 1 .126.217v4.306l1.637-.907a.25.25 0 0 1 .342.092.194.194 0 0 1 .04.125Zm-4.106-8.207a1.075 1.075 0 1 1 1.077 1.078 1.08 1.08 0 0 1-1.078-1.078Zm9.182 4.215h-1.038v-3.582a1.976 1.976 0 0 0-.987-1.7l-5.047-3.005a2.066 2.066 0 0 0-2.07 0l-5.048 3.006a2.016 2.016 0 0 0-.987 1.728v3.553h-1.038a4.566 4.566 0 0 1-4.557-4.557 3.869 3.869 0 0 1 3.61-4.067l.525-.034v-1.026c0-2.943 1.586-6.377 6.052-6.377 3.108 0 4.38 1.512 5.43 3.953l.284.667.582-.433a2.885 2.885 0 0 1 1.808-.713 2.603 2.603 0 0 1 2.738 2.572v.992l.49.069a4.322 4.322 0 0 1 3.81 4.397 4.566 4.566 0 0 1-4.557 4.557Z",
      fill: "#f7963e"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M207.8 125.569h-44.107a12.287 12.287 0 0 0-12.288 12.287v0a12.287 12.287 0 0 0 12.288 12.287h29.86v0a25.577 25.577 0 0 0 25.578 25.577h2.507",
      fill: "#b26e45",
      stroke: "#7c4524",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3"
    })]
  }));
};

SvgIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 330 240"
};

const PricingPageCreditsIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SvgIcon, _objectSpread({}, props));
};

/* harmony default export */ __webpack_exports__["Z"] = (PricingPageCreditsIcon);

/***/ }),

/***/ 71304:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M231.619 198.92a48.195 48.195 0 1 1 37.4-17.806 48.218 48.218 0 0 1-37.4 17.806Z",
      fill: "#fff"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M231.619 105.898a44.863 44.863 0 1 1-44.868 44.86 44.914 44.914 0 0 1 44.868-44.86m0-6.59a51.482 51.482 0 1 0 51.458 51.45 51.512 51.512 0 0 0-51.458-51.45Z",
      fill: "#6ab9ec"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M258.995 185.028a10.84 10.84 0 0 1-.066 1.332 44.84 44.84 0 0 1-54.612-.013 10.638 10.638 0 0 1-.066-1.319c0-12.088 7.29-32.85 27.365-32.85s27.38 20.762 27.38 32.85Z",
      fill: "#b1c854"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
      cx: "231.619",
      cy: "136.728",
      r: "23.376",
      fill: "#b26e45"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M231.725 152.845c-4.376 0-8.23-1.993-9.813-5.077a1.318 1.318 0 0 1 2.346-1.205c1.12 2.18 4.12 3.645 7.467 3.645 3.346 0 6.348-1.464 7.468-3.644a1.319 1.319 0 0 1 2.345 1.207c-1.585 3.082-5.437 5.074-9.813 5.074Z",
      fill: "#593723"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M98.381 198.92a48.195 48.195 0 1 1 37.4-17.806 48.218 48.218 0 0 1-37.4 17.806Z",
      fill: "#fff"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M98.381 105.898a44.863 44.863 0 1 1-44.867 44.86 44.914 44.914 0 0 1 44.867-44.86m0-6.59a51.482 51.482 0 1 0 51.46 51.45 51.512 51.512 0 0 0-51.46-51.45Z",
      fill: "#b1c854"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M125.758 185.028a10.839 10.839 0 0 1-.066 1.332 44.84 44.84 0 0 1-54.613-.013 10.638 10.638 0 0 1-.065-1.319c0-12.088 7.29-32.85 27.365-32.85s27.38 20.762 27.38 32.85Z",
      fill: "#4d9dff"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
      cx: "98.381",
      cy: "136.728",
      r: "23.376",
      fill: "#f5aa75"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M98.381 152.365c-4.376 0-8.23-1.993-9.813-5.076a1.318 1.318 0 0 1 2.346-1.205c1.12 2.18 4.12 3.645 7.467 3.645 3.346 0 6.348-1.465 7.468-3.644a1.319 1.319 0 0 1 2.345 1.206c-1.585 3.083-5.437 5.074-9.813 5.074Z",
      fill: "#b88058"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M127.105 44.68a28.723 28.723 0 1 0-33.36 28.346l4.636 13.84 4.637-13.84a28.727 28.727 0 0 0 24.087-28.345Z",
      fill: "#fff",
      stroke: "#dce0e3",
      strokeMiterlimit: "10",
      strokeWidth: "3"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M93.598 51.117v-1.853a8.217 8.217 0 0 1 1.027-4.182 13.452 13.452 0 0 1 3.756-3.782 15.717 15.717 0 0 0 3.469-3.055 4.424 4.424 0 0 0 .839-2.63 2.848 2.848 0 0 0-1.202-2.479 5.732 5.732 0 0 0-3.356-.851 19.268 19.268 0 0 0-8.564 2.454l-2.73-5.484a23.859 23.859 0 0 1 11.845-3.13 12.6 12.6 0 0 1 8.201 2.479 8.095 8.095 0 0 1 3.043 6.61 8.793 8.793 0 0 1-1.252 4.759 17.845 17.845 0 0 1-4.758 4.508 14.69 14.69 0 0 0-3.043 2.704 4.2 4.2 0 0 0-.639 2.43v1.502Zm-.801 8.564a4.198 4.198 0 0 1 1.127-3.18 4.57 4.57 0 0 1 3.28-1.077 4.44 4.44 0 0 1 3.218 1.102 4.866 4.866 0 0 1-.012 6.273 4.36 4.36 0 0 1-3.206 1.14 4.49 4.49 0 0 1-3.255-1.115 4.17 4.17 0 0 1-1.152-3.143Z",
      fill: "#002a44"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M260.342 44.68a28.723 28.723 0 1 0-33.36 28.346l4.637 13.84 4.637-13.84a28.727 28.727 0 0 0 24.086-28.345Z",
      fill: "#fff",
      stroke: "#dce0e3",
      strokeMiterlimit: "10",
      strokeWidth: "3"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M227.036 59.487a4.39 4.39 0 0 1 1.178-3.326 4.779 4.779 0 0 1 3.43-1.126 4.642 4.642 0 0 1 3.366 1.152 5.088 5.088 0 0 1-.013 6.56 4.56 4.56 0 0 1-3.352 1.191 4.696 4.696 0 0 1-3.404-1.165 4.36 4.36 0 0 1-1.205-3.286Zm7.83-8.956h-6.39l-1.335-25.584h9.06Z",
      fill: "#002a44"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("ellipse", {
      cx: "98.381",
      cy: "219.57",
      rx: "45.063",
      ry: "4.473",
      fill: "#dce0e3"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("ellipse", {
      cx: "231.619",
      cy: "219.57",
      rx: "45.063",
      ry: "4.473",
      fill: "#dce0e3"
    })]
  }));
};

SvgIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 330 240"
};

const PricingPageFaqIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SvgIcon, _objectSpread({}, props));
};

/* harmony default export */ __webpack_exports__["Z"] = (PricingPageFaqIcon);

/***/ }),

/***/ 45608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("linearGradient", {
        id: "a",
        x1: "191.88",
        y1: "33.815",
        x2: "101.534",
        y2: "305.265",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("stop", {
          offset: "0",
          stopColor: "#cdecff"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("stop", {
          offset: "1",
          stopColor: "#fff",
          stopOpacity: "0"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
      style: {
        isolation: "isolate"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M168.196 213.729c-62.304.155-129.991-25.544-129.991-91.51 0-56.97 87.182-112.202 129.991-91.51 36.165 17.482 7.407 42.864 62.868 47.424 25.467 2.093 47.668 6.062 53.33 18.365 15.427 33.526-15.855 116.98-116.198 117.231Z",
        fill: "url(#a)"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
        cx: "41.27",
        cy: "135.526",
        r: "19.331",
        fill: "#ffc335"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M41.27 151.376a15.85 15.85 0 1 1 15.85-15.85 15.868 15.868 0 0 1-15.85 15.85Zm0-30.459a14.609 14.609 0 1 0 14.609 14.608 14.625 14.625 0 0 0-14.608-14.608Z",
        fill: "#f7963e"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M29.792 137.6a1.317 1.317 0 0 1-1.317-1.317 13.075 13.075 0 0 1 13.075-13.076 1.317 1.317 0 1 1 0 2.634 10.442 10.442 0 0 0-10.44 10.442 1.317 1.317 0 0 1-1.318 1.317Z",
        fill: "#fff",
        opacity: ".5"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M62.507 159.73v1.69a2.49 2.49 0 0 1-2.445 2.481H22.454a2.494 2.494 0 0 1-2.42-2.482v-1.688a2.485 2.485 0 0 1 2.42-2.482h37.608a2.482 2.482 0 0 1 2.445 2.482Z",
        fill: "#ffc335"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        fill: "#f7963e",
        d: "M22.454 157.249h1.241v6.653h-1.241zM26.5 157.249h1.241v6.653H26.5zM30.534 157.249h1.241v6.653h-1.241zM34.58 157.249h1.241v6.653H34.58zM38.614 157.249h1.241v6.653h-1.241zM42.66 157.249h1.241v6.653H42.66zM46.694 157.249h1.241v6.653h-1.241zM50.741 157.249h1.241v6.653h-1.241zM54.774 157.249h1.241v6.653h-1.241zM58.821 157.249h1.241v6.653h-1.241z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M58.744 186.826v1.688a2.49 2.49 0 0 1-2.445 2.482H18.69a2.494 2.494 0 0 1-2.42-2.482v-1.688a2.485 2.485 0 0 1 2.42-2.483h37.608a2.482 2.482 0 0 1 2.445 2.483Z",
        fill: "#ffc335"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        fill: "#f7963e",
        d: "M18.691 184.343h1.241v6.653h-1.241zM22.737 184.343h1.241v6.653h-1.241zM26.771 184.343h1.241v6.653h-1.241zM30.817 184.343h1.241v6.653h-1.241zM34.851 184.343h1.241v6.653h-1.241zM38.897 184.343h1.241v6.653h-1.241zM42.931 184.343h1.241v6.653h-1.241zM46.977 184.343h1.241v6.653h-1.241zM51.011 184.343h1.241v6.653h-1.241zM55.057 184.343h1.241v6.653h-1.241z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M64.448 195.857v1.688a2.49 2.49 0 0 1-2.445 2.483H24.395a2.494 2.494 0 0 1-2.42-2.483v-1.688a2.485 2.485 0 0 1 2.42-2.482h37.608a2.482 2.482 0 0 1 2.445 2.482Z",
        fill: "#ffc335"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        fill: "#f7963e",
        d: "M24.395 193.375h1.241v6.653h-1.241zM28.441 193.375h1.241v6.653h-1.241zM32.475 193.375h1.241v6.653h-1.241zM36.521 193.375h1.241v6.653h-1.241zM40.555 193.375h1.241v6.653h-1.241zM44.601 193.375h1.241v6.653h-1.241zM48.635 193.375h1.241v6.653h-1.241zM52.681 193.375h1.241v6.653h-1.241zM56.715 193.375h1.241v6.653h-1.241zM60.762 193.375h1.241v6.653h-1.241z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M59.932 168.763v1.688a2.49 2.49 0 0 1-2.445 2.482H19.879a2.494 2.494 0 0 1-2.42-2.482v-1.688a2.485 2.485 0 0 1 2.42-2.483h37.608a2.482 2.482 0 0 1 2.445 2.483Z",
        fill: "#9ba5ae"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        fill: "#677480",
        d: "M19.879 166.28h1.241v6.653h-1.241zM23.925 166.28h1.241v6.653h-1.241zM27.959 166.28H29.2v6.653h-1.241zM32.005 166.28h1.241v6.653h-1.241zM36.039 166.28h1.241v6.653h-1.241zM40.086 166.28h1.241v6.653h-1.241zM44.119 166.28h1.241v6.653h-1.241zM48.166 166.28h1.241v6.653h-1.241zM52.199 166.28h1.241v6.653h-1.241zM56.246 166.28h1.241v6.653h-1.241z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M61.833 204.729v1.688a2.49 2.49 0 0 1-2.445 2.483H21.78a2.494 2.494 0 0 1-2.42-2.483v-1.688a2.485 2.485 0 0 1 2.42-2.482h37.608a2.482 2.482 0 0 1 2.445 2.482Z",
        fill: "#9ba5ae"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        fill: "#677480",
        d: "M21.78 202.247h1.241v6.653H21.78zM25.827 202.247h1.241v6.653h-1.241zM29.86 202.247h1.241v6.653H29.86zM33.907 202.247h1.241v6.653h-1.241zM37.941 202.247h1.241v6.653h-1.241zM41.987 202.247h1.241v6.653h-1.241zM46.021 202.247h1.241v6.682h-1.241zM50.067 202.247h1.241v6.653h-1.241zM54.101 202.247h1.241v6.653h-1.241zM58.147 202.247h1.241v6.653h-1.241z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M63.735 177.794v1.688a2.49 2.49 0 0 1-2.445 2.483H23.682a2.494 2.494 0 0 1-2.42-2.483v-1.688a2.485 2.485 0 0 1 2.42-2.482H61.29a2.482 2.482 0 0 1 2.445 2.482Z",
        fill: "#9ba5ae"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        fill: "#677480",
        d: "M23.682 175.312h1.241v6.653h-1.241zM27.728 175.312h1.241v6.653h-1.241zM31.762 175.312h1.241v6.653h-1.241zM35.808 175.312h1.241v6.653h-1.241zM39.842 175.312h1.241v6.653h-1.241zM43.888 175.312h1.241v6.653h-1.241zM47.922 175.312h1.241v6.653h-1.241zM51.968 175.312h1.241v6.653h-1.241zM56.002 175.312h1.241v6.653h-1.241zM60.048 175.312h1.241v6.653h-1.241z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M194.29 78.534v125.394a4.995 4.995 0 0 1-5 5H99.71a4.995 4.995 0 0 1-5-5V78.534a4.995 4.995 0 0 1 5-5h89.58a4.995 4.995 0 0 1 5 5Z",
        fill: "#a6afb7"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M194.29 75.264v125.394a4.995 4.995 0 0 1-5 5H99.71a4.995 4.995 0 0 1-5-5V75.264a4.995 4.995 0 0 1 5-5h89.58a4.995 4.995 0 0 1 5 5Z",
        fill: "#dce0e3"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M194.29 75.42v29.898H94.71V75.419a5.075 5.075 0 0 1 5-5.155h89.58a5.075 5.075 0 0 1 5 5.155Z",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        fill: "#d4f4bd",
        d: "M102.726 78.287h83.42v18.977h-83.42z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M184.147 80.287v14.977h-79.42V80.287h79.42m2-2h-83.42v18.977h83.42V78.287Z",
        fill: "#d4f4bd",
        opacity: ".5",
        style: {
          mixBlendMode: "multiply"
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "102.779",
        y: "109.7",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#f7706c"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "124.287",
        y: "109.764",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "145.794",
        y: "109.764",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "167.364",
        y: "109.764",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "102.779",
        y: "127.892",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "124.287",
        y: "127.956",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "145.794",
        y: "127.956",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "167.364",
        y: "127.956",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "102.779",
        y: "146.083",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "124.287",
        y: "146.147",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "145.794",
        y: "146.147",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "167.364",
        y: "146.147",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "102.779",
        y: "164.275",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "124.287",
        y: "164.339",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "145.794",
        y: "164.339",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "102.779",
        y: "182.466",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "124.287",
        y: "182.53",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "145.794",
        y: "182.53",
        width: "18.648",
        height: "15.244",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "167.364",
        y: "164.265",
        width: "18.648",
        height: "33.509",
        rx: "2",
        fill: "#4d575f"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "171.821",
        y: "152.556",
        width: "9.735",
        height: "2.426",
        rx: "1.213",
        fill: "#fff"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "175.018",
        y: "80.998",
        width: "4.978",
        height: "1.24",
        rx: ".62",
        fill: "#2a2f34"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "175.018",
        y: "93.042",
        width: "4.978",
        height: "1.24",
        rx: ".62",
        fill: "#2a2f34"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "172.08",
        y: "84.328",
        width: "4.978",
        height: "1.24",
        rx: ".62",
        transform: "rotate(90 174.57 84.948)",
        fill: "#2a2f34"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "172.031",
        y: "89.86",
        width: "4.978",
        height: "1.24",
        rx: ".62",
        transform: "rotate(90 174.52 90.48)",
        fill: "#2a2f34"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "177.955",
        y: "84.328",
        width: "4.978",
        height: "1.24",
        rx: ".62",
        transform: "rotate(90 180.445 84.948)",
        fill: "#2a2f34"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "177.907",
        y: "89.86",
        width: "4.978",
        height: "1.24",
        rx: ".62",
        transform: "rotate(90 180.396 90.48)",
        fill: "#2a2f34"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "m178.404 117.386 1.727-1.727a1.213 1.213 0 1 0-1.715-1.715l-1.727 1.727-1.727-1.727a1.213 1.213 0 0 0-1.715 1.715l1.726 1.727-1.726 1.727a1.213 1.213 0 0 0 1.715 1.715l1.727-1.727 1.727 1.727a1.213 1.213 0 0 0 1.715-1.715Z",
        fill: "#fff"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "171.821",
        y: "177.86",
        width: "9.735",
        height: "2.426",
        rx: "1.213",
        fill: "#fff"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "171.821",
        y: "181.753",
        width: "9.735",
        height: "2.426",
        rx: "1.213",
        fill: "#fff"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M158.774 188.939h-2.443v-2.442a1.213 1.213 0 0 0-2.425 0v2.442h-2.442a1.213 1.213 0 0 0 0 2.426h2.442v2.442a1.213 1.213 0 1 0 2.425 0v-2.442h2.443a1.213 1.213 0 1 0 0-2.426Z",
        fill: "#fff"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "171.821",
        y: "134.325",
        width: "9.735",
        height: "2.426",
        rx: "1.213",
        fill: "#fff"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
        cx: "176.672",
        cy: "131.9",
        r: "1.34",
        fill: "#fff"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
        cx: "176.672",
        cy: "139.255",
        r: "1.34",
        fill: "#fff"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        fill: "#d4f4bd",
        opacity: ".5",
        style: {
          mixBlendMode: "multiply"
        },
        d: "M102.668 87.776h83.537v9.489h-83.537z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        fill: "#4d575f",
        opacity: ".5",
        style: {
          mixBlendMode: "multiply"
        },
        d: "m94.711 105.318 7.957-8.054h83.537l8.086 8.054h-99.58z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M234.09 208.928a10.297 10.297 0 0 1-10.423-10.088V50.803a10.284 10.284 0 0 1 10.186-10.312h69.662a10.2 10.2 0 0 1 10.215 10.186v148.037a10.025 10.025 0 0 1-9.978 10.214",
        fill: "#2a2f34"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M309.598 55.37v128.346H227.77V55.484a4.223 4.223 0 0 1 4.128-4.243h73.559a4.134 4.134 0 0 1 4.14 4.129Z",
        fill: "#e5f5fd"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
        cx: "268.554",
        cy: "195.961",
        r: "6.256",
        fill: "#9ba5ae"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
        cx: "248.068",
        cy: "45.874",
        r: "2.38",
        fill: "#9ba5ae"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        x: "258.42",
        y: "43.221",
        width: "19.74",
        height: "4.761",
        rx: "2.38",
        fill: "#9ba5ae"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M294.876 124.314a4.025 4.025 0 0 0-5.265-1.054l-8.252 5.479a4.448 4.448 0 0 1-3.688 5.095q-.167.027-.336.04a5.488 5.488 0 0 1-2.832-.695l-9.005-6.116a.926.926 0 1 1 1.16-1.426l8.829 5.982c3.394 1.927 5.67-2.642 2.4-4.634l-11.162-7.607a7.434 7.434 0 0 0-8.3.302c-.72.436-9.455 6.056-10.735 6.88l-.162-.24a3.272 3.272 0 0 0-4.53-.89l-4.253 2.86a3.269 3.269 0 0 0-.887 4.53l9.89 14.713a3.266 3.266 0 0 0 4.53.888l4.253-2.86a3.269 3.269 0 0 0 .888-4.531l-.344-.513a23.535 23.535 0 0 1 2.177-1.478 71.786 71.786 0 0 0 10.83 5.784 4.123 4.123 0 0 0 1.793-.7l21.948-14.544a3.48 3.48 0 0 0 1.645-2.538 3.067 3.067 0 0 0-.592-2.727Zm-39.263 19.883v-.002l-4.252 2.86a1.628 1.628 0 0 1-2.248-.441l-9.89-14.712a1.62 1.62 0 0 1 .44-2.246l4.252-2.86a1.605 1.605 0 0 1 .786-.27 1.643 1.643 0 0 1 .43.027 1.603 1.603 0 0 1 1.032.684l9.89 14.71a1.624 1.624 0 0 1-.44 2.25Z",
        fill: "#4585a5"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M294.043 98.57v-.023a5.29 5.29 0 0 0-5.457-5.225 5.18 5.18 0 0 0-2.689.77c-1.453-3.04-3.651-5.657-8.715-5.657-6.982 0-10.112 5.305-10.12 10.561a7.091 7.091 0 0 0-5.819 7.231 8.03 8.03 0 0 0 8.018 8.017h1.46v2.023a2.904 2.904 0 0 0 1.389 2.432l7.102 4.22a2.87 2.87 0 0 0 2.913 0l7.103-4.22a2.84 2.84 0 0 0 1.388-2.432v-2.023h1.46a8.025 8.025 0 0 0 8.018-8.017 7.639 7.639 0 0 0-6.051-7.656Zm-9.109 19.687a.36.36 0 0 1-.177.305l-3.868 2.303a.345.345 0 0 1-.36.008l-3.95-2.335a.329.329 0 0 1-.168-.305v-2.047a.346.346 0 0 1 .353-.353.323.323 0 0 1 .177.049l2.311 1.275v-4.87l-1.252-.795a.354.354 0 0 1-.168-.305v-2.055a.351.351 0 0 1 .353-.353.372.372 0 0 1 .184.048l3.547 1.966a.361.361 0 0 1 .177.306v6.059l2.303-1.276a.353.353 0 0 1 .482.128.273.273 0 0 1 .056.177Zm-5.778-11.548a1.513 1.513 0 1 1 1.517 1.516 1.52 1.52 0 0 1-1.517-1.516Zm12.92 5.93h-1.46v-5.04a2.781 2.781 0 0 0-1.388-2.391l-7.103-4.23a2.908 2.908 0 0 0-2.913 0l-7.102 4.23a2.837 2.837 0 0 0-1.389 2.432v5h-1.46a6.425 6.425 0 0 1-6.413-6.413 5.443 5.443 0 0 1 5.08-5.722l.739-.048v-1.445c0-4.14 2.23-8.972 8.515-8.972 4.373 0 6.163 2.127 7.64 5.562l.401.939.819-.61a4.06 4.06 0 0 1 2.544-1.004 3.663 3.663 0 0 1 3.852 3.62v1.396l.69.097a6.082 6.082 0 0 1 5.36 6.187 6.425 6.425 0 0 1-6.411 6.412Z",
        fill: "#4585a5"
      })]
    })]
  }));
};

SvgIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 330 240"
};

const PricingPageSalesIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SvgIcon, _objectSpread({}, props));
};

/* harmony default export */ __webpack_exports__["Z"] = (PricingPageSalesIcon);

/***/ }),

/***/ 26933:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ mdComponents; }
/* harmony export */ });
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const mdComponents = {
  h1: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Headline, _objectSpread({}, props)),
  h2: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Title, _objectSpread({}, props)),
  h3: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Subheading, _objectSpread({}, props)),
  h4: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Leading, _objectSpread({}, props)),
  p: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, _objectSpread({}, props)),
  sub: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Small, _objectSpread({
    isMuted: true
  }, props))
};

/***/ }),

/***/ 212:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ NotFound; }
/* harmony export */ });
/* harmony import */ var _itwin_itwinui_illustrations_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17155);
/* harmony import */ var _itwin_itwinui_illustrations_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_illustrations_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51974);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function NotFound() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    id: "error-page",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_2__.NonIdealState, {
      svg: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_itwin_itwinui_illustrations_react__WEBPACK_IMPORTED_MODULE_0__.Svg404, {}),
      heading: "Page not found",
      description: "You don't have permissions to this page or this page does not exist."
    })
  });
}

/***/ }),

/***/ 4827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_ApiConsumptionCosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89722);
/* harmony import */ var _constants_Tiers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71747);
/* harmony import */ var _constants_flags__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46415);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61686);
/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8302);
/* harmony import */ var _links_LinkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13250);
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58679);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99301);
/* harmony import */ var _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53164);
/* harmony import */ var _Layouts_PageWithHeading_PageWithHeading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31727);
/* harmony import */ var _MarkdownViewWithMermaid_MarkdownViewWithMermaid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19444);
/* harmony import */ var _icons_Pricing_PricingPageCreditsImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2257);
/* harmony import */ var _icons_Pricing_PricingPageFaqImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71304);
/* harmony import */ var _icons_Pricing_PricingPageSalesImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45608);
/* harmony import */ var _mdx_pricing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26933);
/* harmony import */ var _Sections_ApiConsumptionInformationBlock_ApiConsumptionInformationBlock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67669);
/* harmony import */ var _Sections_PricingPageSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17390);
/* harmony import */ var _Sections_TierListSection_TierListSection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(42480);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSession__WEBPACK_IMPORTED_MODULE_5__, _services_authService__WEBPACK_IMPORTED_MODULE_8__]);
([_hooks_useSession__WEBPACK_IMPORTED_MODULE_5__, _services_authService__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function PricingPage({
  preloadedApis,
  tiers,
  usingCreditsMdContent,
  faqMdContent,
  contactUsMdContent
}) {
  const flags = (0,_stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_9__/* .useLaunchDarklyFlags */ .L)();
  const {
    signin,
    isLoggedIn
  } = (0,_services_authService__WEBPACK_IMPORTED_MODULE_8__/* .useAuthService */ .m)();
  const {
    session
  } = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_5__/* .useSession */ .k)();
  const helpSectionItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => flags[_constants_flags__WEBPACK_IMPORTED_MODULE_20__/* .FLAG_CONTACT_SALES */ .Gc] ? [{
    content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_MarkdownViewWithMermaid_MarkdownViewWithMermaid__WEBPACK_IMPORTED_MODULE_11__/* .MarkdownViewWithMermaid */ .D, {
      markdown: contactUsMdContent,
      components: _mdx_pricing__WEBPACK_IMPORTED_MODULE_15__/* .mdComponents */ .Z
    }),
    action: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_links_LinkButton__WEBPACK_IMPORTED_MODULE_6__/* .LinkButton */ .Q, {
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_4__/* .CONTACT_SALES */ .xJ,
      children: "Contact us"
    })
  }] : [], [flags, contactUsMdContent]);
  const tierTiles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const tierAction = tier => {
      const startBuilding = 'Start building';
      const startForFree = 'Start for free';

      const signInGetStarted = () => signin(_constants_paths__WEBPACK_IMPORTED_MODULE_4__/* .GET_STARTED */ .v4); //If not free pricing tier, show contact sales button or nothing if contact sales is disabled


      if (tier.tier !== _constants_Tiers__WEBPACK_IMPORTED_MODULE_3__/* .Tier.Trial */ .K.Trial) if (flags[_constants_flags__WEBPACK_IMPORTED_MODULE_20__/* .FLAG_CONTACT_SALES */ .Gc]) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_links_LinkButton__WEBPACK_IMPORTED_MODULE_6__/* .LinkButton */ .Q, {
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_4__/* .CONTACT_SALES */ .xJ,
        children: "Contact us"
      });else return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {});

      if (!isLoggedIn) {
        if (flags[_constants_flags__WEBPACK_IMPORTED_MODULE_20__/* .FLAG_TRIAL_FORM */ .DY]) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_links_LinkButton__WEBPACK_IMPORTED_MODULE_6__/* .LinkButton */ .Q, {
          href: _constants_paths__WEBPACK_IMPORTED_MODULE_4__/* .TRIAL */ .Kh,
          children: startForFree
        });else return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Button, {
          onClick: () => {
            signInGetStarted();
          },
          children: startForFree
        });
      }

      if (!!session && !session.subscription) {
        if (flags[_constants_flags__WEBPACK_IMPORTED_MODULE_20__/* .FLAG_TRIAL_FORM */ .DY]) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_links_LinkButton__WEBPACK_IMPORTED_MODULE_6__/* .LinkButton */ .Q, {
          href: _constants_paths__WEBPACK_IMPORTED_MODULE_4__/* .TRIAL */ .Kh,
          children: "Start Trial"
        });else return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Button, {
          onClick: () => {
            signInGetStarted();
          },
          children: startForFree
        });
      }

      if (!!session && session?.subscription?.state !== _models_session__WEBPACK_IMPORTED_MODULE_7__/* .SubscriptionState.Active */ .j.Active) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
          placement: "top",
          content: "Subscription has expired or been cancelled",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Button, {
              disabled: true,
              children: startBuilding
            })
          })
        });
      }

      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_links_LinkButton__WEBPACK_IMPORTED_MODULE_6__/* .LinkButton */ .Q, {
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_4__/* .DOCUMENTATION */ .tQ,
        children: startBuilding
      });
    };

    return tiers.map(tier => {
      return _objectSpread(_objectSpread({}, tier), {}, {
        action: tierAction(tier)
      });
    });
  }, [flags, isLoggedIn, session, signin, tiers]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
    id: "page",
    className: "pricing-page page-content-container",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Layouts_PageWithHeading_PageWithHeading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      headerContent: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
        className: "pricing-page-heading",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Headline, {
          children: "Pricing"
        })
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: "pricing-page-content",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Sections_TierListSection_TierListSection__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          tiers: tierTiles
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Sections_PricingPageSection__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          id: "using-credits",
          title: "Using credits",
          image: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_icons_Pricing_PricingPageCreditsImage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
          footer: flags[_constants_flags__WEBPACK_IMPORTED_MODULE_20__/* .FLAG_CREDIT_USAGE_DETAILS */ .Cs] && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Sections_ApiConsumptionInformationBlock_ApiConsumptionInformationBlock__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            apis: preloadedApis,
            apiConsumptionCosts: _constants_ApiConsumptionCosts__WEBPACK_IMPORTED_MODULE_2__/* .apiConsumptionCosts */ .R
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_MarkdownViewWithMermaid_MarkdownViewWithMermaid__WEBPACK_IMPORTED_MODULE_11__/* .MarkdownViewWithMermaid */ .D, {
              markdown: usingCreditsMdContent,
              components: _mdx_pricing__WEBPACK_IMPORTED_MODULE_15__/* .mdComponents */ .Z
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Sections_PricingPageSection__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          id: "faq",
          title: "Frequently asked questions",
          image: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_icons_Pricing_PricingPageFaqImage__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
          imagePosition: "left",
          children: faqMdContent && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_MarkdownViewWithMermaid_MarkdownViewWithMermaid__WEBPACK_IMPORTED_MODULE_11__/* .MarkdownViewWithMermaid */ .D, {
            markdown: faqMdContent,
            components: {
              p: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Leading, _objectSpread({}, props))
            }
          })
        }), helpSectionItems.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Sections_PricingPageSection__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          id: "help",
          title: "Need some help to figure it out?",
          image: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_icons_Pricing_PricingPageSalesImage__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
            className: "help-section-content",
            children: helpSectionItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
              children: [item.content, item.action]
            }, `help-${index}`))
          })
        })]
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (PricingPage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67669:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ApiConsumptionInformationBlock_ApiConsumptionInformationBlock; }
});

// EXTERNAL MODULE: consume shared module (default) itwinui-v2@^2.12.0 (singleton) (fallback: ./node_modules/itwinui-v2/esm/index.js) (eager)
var index_js_eager_ = __webpack_require__(6227);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/constants/Tags.ts
var Tags = __webpack_require__(57348);
// EXTERNAL MODULE: ./src/constants/Tiers.ts
var Tiers = __webpack_require__(71747);
// EXTERNAL MODULE: ./src/constants/defaultApiGroups.ts
var defaultApiGroups = __webpack_require__(30581);
// EXTERNAL MODULE: ./src/components/icons/GroupIcon.tsx + 13 modules
var GroupIcon = __webpack_require__(61890);
// EXTERNAL MODULE: ./src/components/icons/Indicators/DeprecationIcon.tsx
var DeprecationIcon = __webpack_require__(81334);
// EXTERNAL MODULE: ./src/components/icons/Indicators/TechPreviewIcon.tsx
var TechPreviewIcon = __webpack_require__(44930);
// EXTERNAL MODULE: consume shared module (default) itwinui-v1@^1.48.3 (singleton) (fallback: ./node_modules/itwinui-v1/cjs/index.js) (eager)
var cjs_index_js_eager_ = __webpack_require__(85217);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/pages/Pricing/TierBadge/TierBadge.tsx




function TierBadge({
  tier,
  postfix
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(cjs_index_js_eager_.Badge, {
    className: "tier-badge",
    children: `with ${tier}${postfix ?? ''}`
  });
}

/* harmony default export */ var TierBadge_TierBadge = (TierBadge);
;// CONCATENATED MODULE: ./src/components/pages/Pricing/Sections/ApiConsumptionInformationBlock/ApiConsumptionInformationBlock.tsx













function ApiConsumptionInformationBlock({
  apis,
  apiConsumptionCosts
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "usage-summary-block",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "credit-cost",
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
        variant: "body",
        children: /*#__PURE__*/jsx_runtime_.jsx("b", {
          children: "$ 1 per credit"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(TierBadge_TierBadge, {
        tier: Tiers/* Tier.Basic */.K.Basic
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "api-consumption-list",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(index_js_eager_.Text, {
        variant: "body",
        className: "additional-info",
        children: ["*", /*#__PURE__*/jsx_runtime_.jsx("b", {
          children: "Deprecated APIs"
        }), " may be removed from the ecosystem within one year."]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(index_js_eager_.Text, {
        variant: "body",
        className: "additional-info",
        children: ["*APIs in ", /*#__PURE__*/jsx_runtime_.jsx("b", {
          children: "Technical Preview"
        }), " are free to use until the preview ends."]
      }), Object.values(defaultApiGroups/* DefaultApiGroups.apiGroups */.q.apiGroups).filter(group => group.name in apis && apis[group.name]?.length > 0 && //filtering out API groups that have no APIs with prices listed in apiConsumptionCosts
      apis[group.name].filter(api => apiConsumptionCosts.find(cost => cost.apiPath === api.path) !== undefined).length > 0).sort((a, b) => (a.displayName ?? a.name).localeCompare(b.displayName ?? b.name)).map((group, index, groupArray) => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "api-consumption-data-container",
            children: [/*#__PURE__*/jsx_runtime_.jsx(GroupIcon/* GroupIcon */.B, {
              apiGroupId: group.id,
              className: "api-group-icon",
              style: {
                fill: group.color
              }
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
                variant: "subheading",
                className: "api-display-name",
                children: /*#__PURE__*/jsx_runtime_.jsx("b", {
                  children: group.displayName
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "api-list",
                children: /*#__PURE__*/jsx_runtime_.jsx("table", {
                  className: "api-table",
                  children: /*#__PURE__*/jsx_runtime_.jsx("tbody", {
                    children: apis[group.name].filter(api => apiConsumptionCosts.find(cost => cost.apiPath === api.path) !== undefined).sort((a, b) => (a.displayName ?? a.name).localeCompare(b.displayName ?? b.name)).map(api => {
                      const apiConsumptionCost = apiConsumptionCosts.find(cost => cost.apiPath === api.path);
                      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                        className: "consumptionRow",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                          className: "api-name",
                          children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
                            variant: "body",
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                              children: [api.displayName ?? api.name, apiConsumptionCost?.showTechPreview && /*#__PURE__*/jsx_runtime_.jsx("div", {
                                className: "informational-icon",
                                children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Tooltip, {
                                  content: Tags/* TechPreviewTag */.n,
                                  placement: "bottom",
                                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/jsx_runtime_.jsx(TechPreviewIcon/* TechPreviewIcon */.d, {
                                      className: "logo"
                                    })
                                  })
                                })
                              }), apiConsumptionCost?.showDeprecated && /*#__PURE__*/jsx_runtime_.jsx("div", {
                                className: "informational-icon",
                                children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Tooltip, {
                                  content: Tags/* DeprecatedTag */.l,
                                  placement: "bottom",
                                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/jsx_runtime_.jsx(DeprecationIcon/* DeprecationIcon */.r, {
                                      className: "logo"
                                    })
                                  })
                                })
                              })]
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                          className: "api-pricing",
                          children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
                            variant: "body",
                            children: apiConsumptionCost?.showTechPreview ? 'Free*' : apiConsumptionCost?.unitPerCredit === 0 && !apiConsumptionCost?.priceDescription ? 'Free' : apiConsumptionCost?.priceDescription ?? `1 Credit per ${apiConsumptionCost?.unitPerCredit} ${apiConsumptionCost?.unit}`
                          })
                        })]
                      }, api.name);
                    })
                  })
                })
              })]
            })]
          }), groupArray.length >= index + 2 && /*#__PURE__*/jsx_runtime_.jsx("hr", {
            className: "api-list-divider"
          })]
        }, group.id);
      })]
    })]
  });
}

/* harmony default export */ var ApiConsumptionInformationBlock_ApiConsumptionInformationBlock = (ApiConsumptionInformationBlock);

/***/ }),

/***/ 17390:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Sections_PricingPageSection; }
});

// EXTERNAL MODULE: consume shared module (default) itwinui-v1@^1.48.3 (singleton) (fallback: ./node_modules/itwinui-v1/cjs/index.js) (eager)
var index_js_eager_ = __webpack_require__(85217);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/Cards/ShadowedCard/ShadowedCard.tsx





function ShadowedCard(props) {
  const {
    children,
    footer,
    image,
    imagePosition
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "shadowed-card",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()(['shadowed-card-body', imagePosition === 'left' ? 'reverse-content' : undefined]),
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "shadowed-card-content",
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "shadowed-card-image",
        children: image
      })]
    }), footer]
  });
}

/* harmony default export */ var ShadowedCard_ShadowedCard = (ShadowedCard);
;// CONCATENATED MODULE: ./src/components/pages/Pricing/Sections/PricingPageSection.tsx






function PricingPageSection({
  id,
  title,
  footer,
  image,
  children,
  imagePosition
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "pricing-section-container",
    id: id,
    children: [title && /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Headline, {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx(ShadowedCard_ShadowedCard, {
      footer: footer,
      image: image,
      imagePosition: imagePosition,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "pricing-section-content",
        children: children
      })
    })]
  });
}

/* harmony default export */ var Sections_PricingPageSection = (PricingPageSection);

/***/ }),

/***/ 42480:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TierListSection_TierListSection; }
});

// EXTERNAL MODULE: consume shared module (default) itwinui-v1@^1.48.3 (singleton) (fallback: ./node_modules/itwinui-v1/cjs/index.js) (eager)
var index_js_eager_ = __webpack_require__(85217);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/Cards/CardWithHeader/CardWithHeader.tsx






function CardWithHeader({
  title,
  action,
  children,
  color = 'steelblue'
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "card-with-header",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-content-container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
          variant: "leading",
          className: external_classnames_default()(['card-header', color]),
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "card-content",
          children: children
        })]
      }), action && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "card-action",
        children: action
      })]
    })
  });
}

/* harmony default export */ var CardWithHeader_CardWithHeader = (CardWithHeader);
// EXTERNAL MODULE: ./src/components/MarkdownViewWithMermaid/MarkdownViewWithMermaid.tsx
var MarkdownViewWithMermaid = __webpack_require__(19444);
// EXTERNAL MODULE: ./src/components/mdx/pricing.tsx
var pricing = __webpack_require__(26933);
;// CONCATENATED MODULE: ./src/components/pages/Pricing/PriceTag/PriceTag.tsx







function PriceTag({
  color = 'default',
  price,
  isFree,
  isStartingPrice,
  pricePostfix = 'monthly',
  size = 'large'
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()('price-tag', size),
    children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Small, {
      isMuted: true,
      className: "starting-price-prefix",
      children: isStartingPrice && 'From'
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "price",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
          variant: size === 'large' ? 'headline' : 'subheading',
          className: external_classnames_default()(['price-text', color]),
          children: isFree ? 'Free' : price !== undefined ? price : 'Custom'
        }), isFree && /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
          variant: "headline",
          style: {
            color: `rgba(0, 0, 0, 0.4)`
          },
          children: "*"
        }), price !== undefined && /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
          className: "price-details",
          variant: size === 'large' ? 'body' : 'small',
          children: pricePostfix
        })]
      })
    })]
  });
}

/* harmony default export */ var PriceTag_PriceTag = (PriceTag);
;// CONCATENATED MODULE: ./src/components/pages/Pricing/Sections/TierListSection/TierListSection.tsx









function TierListSection({
  tiers
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "tile-list-section",
    children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Body, {
      isMuted: true,
      className: "currency-disclaimer",
      children: "All prices are in USD"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pricing-tile-container",
      children: tiers.map(tier => /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardWithHeader_CardWithHeader, {
        title: tier.name,
        color: tier.isFree ? 'celery' : 'steelblue',
        action: tier.action,
        children: [/*#__PURE__*/jsx_runtime_.jsx(PriceTag_PriceTag, {
          color: tier.isFree ? 'celery' : 'steelblue',
          price: tier.price !== 0 ? `${tier.price}` : undefined,
          isFree: tier.isFree,
          pricePostfix: "Credits / Month",
          isStartingPrice: tier.isStartingPrice
        }), tier.description && /*#__PURE__*/jsx_runtime_.jsx(MarkdownViewWithMermaid/* MarkdownViewWithMermaid */.D, {
          markdown: tier.description ?? '',
          components: pricing/* mdComponents */.Z
        })]
      }, tier.tier))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(index_js_eager_.Body, {
      className: "disclaimers",
      isMuted: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Small, {
        children: "*For non-commercial use only. Use your Trial to explore tutorials and learn more about the iTwin Platform."
      }), /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Small, {
        children: "**The Reality Modeling service is available in Enterprise subscriptions only. The service allows Trial access for all other tiers and is limited to one job at a time and limitations on the amount of data processed may apply."
      })]
    })]
  });
}

/* harmony default export */ var TierListSection_TierListSection = (TierListSection);

/***/ }),

/***/ 89722:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": function() { return /* binding */ apiConsumptionCosts; }
/* harmony export */ });
const apiConsumptionCosts = [{
  apiPath: 'insights/carbon-calculation',
  unit: 'Rows',
  unitPerCredit: 0,
  showTechPreview: true
}, {
  apiPath: 'clashdetection',
  unit: 'Runs',
  unitPerCredit: 0.5,
  priceDescription: '2 Credits per Run'
}, {
  apiPath: 'contextcapture',
  unitPerCredit: 0,
  priceDescription: 'Only available with Enterprise tier. Contact Bentley for pricing information.'
}, {
  apiPath: 'designelementclassification',
  unitPerCredit: 0,
  showTechPreview: true
}, {
  apiPath: 'export',
  unit: 'GB',
  unitPerCredit: 3,
  priceDescription: '1 Credit per 3 GB Exported'
}, {
  apiPath: 'insights/imodels-odata',
  unit: 'Rows',
  unitPerCredit: 25000,
  priceDescription: '1 Credit per 25000 Rows Processed'
}, {
  apiPath: 'imodels',
  unit: 'GB',
  unitPerCredit: 2,
  priceDescription: '1 Credit per 2 GB Ingress / Egress'
}, {
  apiPath: 'issues',
  unit: 'Queries',
  unitPerCredit: 50
}, {
  apiPath: 'library',
  unit: 'Components',
  unitPerCredit: 1,
  priceDescription: '1 Credit per Component'
}, {
  apiPath: 'mesh-export',
  unitPerCredit: 0,
  showTechPreview: true
}, {
  apiPath: 'synchronization/pnidtoitwin',
  unit: 'Sheets',
  unitPerCredit: 1,
  priceDescription: '1 Credit per Sheet'
}, {
  apiPath: 'projects',
  unitPerCredit: 0
}, {
  apiPath: 'validation/propertyValue',
  unit: 'Runs',
  unitPerCredit: 2,
  priceDescription: '1 Credit per 2 Runs'
}, {
  apiPath: 'insights/reporting',
  unit: 'Rows',
  unitPerCredit: 25000,
  priceDescription: '1 Credit per 25000 Rows Processed'
}, {
  apiPath: 'savedviews',
  unitPerCredit: 0
}, {
  apiPath: 'storage',
  unit: 'GB',
  unitPerCredit: 2,
  priceDescription: '1 Credit per 2 GB Stored'
}, {
  apiPath: 'realitydata',
  unit: 'GB',
  unitPerCredit: 16.6666666666667,
  priceDescription: '6 Credits per 100 GB Stored',
  showDeprecated: true
}, {
  apiPath: 'reality-management/reality-data',
  unit: 'GB',
  unitPerCredit: 16.6666666666667,
  priceDescription: '6 Credits per 100 GB Stored'
}, {
  apiPath: 'synchronization',
  unit: 'Files',
  unitPerCredit: 2,
  priceDescription: '1 Credit per 2 Files Synchronized'
}, {
  apiPath: 'transformations',
  unit: 'GB',
  unitPerCredit: 2
}, {
  apiPath: 'users',
  unitPerCredit: 0
}, {
  apiPath: 'changedelements',
  unit: 'Hours',
  unitPerCredit: 30,
  priceDescription: '1 Credit per 30 Compute Hours'
}, {
  apiPath: 'webhooks',
  unitPerCredit: 0
}, {
  apiPath: 'visualization',
  unit: 'Hours',
  unitPerCredit: 10,
  priceDescription: '1 Credit per 1 Access Hours'
}];

/***/ }),

/***/ 2961:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ useMermaid; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54963);


const useMermaid = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (_next_utils__WEBPACK_IMPORTED_MODULE_1__/* .NextUtils.isRuntime */ .l.isRuntime) {
      Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 61024)).then(mermaid => {
        mermaid.default.init();
      });
    }
  });
};

/***/ }),

/***/ 8302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* reexport safe */ _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_0__.kP; }
/* harmony export */ });
/* harmony import */ var _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_SessionProvider__WEBPACK_IMPORTED_MODULE_0__]);
_providers_SessionProvider__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13250:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": function() { return /* binding */ LinkButton; }
/* harmony export */ });
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable jsx-a11y/anchor-is-valid */




const LinkButton = ({
  children,
  href,
  style,
  styleType
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Button, {
      as: "a",
      href: href,
      style: style,
      styleType: styleType,
      children: children
    })
  });
};

/***/ }),

/***/ 53164:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ useLaunchDarklyFlags; },
/* harmony export */   "j": function() { return /* binding */ launchDarklyStore; }
/* harmony export */ });
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52458);
/* harmony import */ var pullstate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pullstate__WEBPACK_IMPORTED_MODULE_0__);

const launchDarklyStore = new pullstate__WEBPACK_IMPORTED_MODULE_0__.Store({});
const useLaunchDarklyFlags = () => launchDarklyStore.useState();

/***/ }),

/***/ 4298:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(72189)


/***/ }),

/***/ 17155:
/***/ (function(module) {

"use strict";
module.exports = require("@itwin/itwinui-illustrations-react");

/***/ }),

/***/ 75214:
/***/ (function(module) {

"use strict";
module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/401");

/***/ }),

/***/ 23563:
/***/ (function(module) {

"use strict";
module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/403");

/***/ }),

/***/ 5142:
/***/ (function(module) {

"use strict";
module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/404");

/***/ }),

/***/ 26595:
/***/ (function(module) {

"use strict";
module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/500");

/***/ }),

/***/ 75777:
/***/ (function(module) {

"use strict";
module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/502");

/***/ }),

/***/ 4142:
/***/ (function(module) {

"use strict";
module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/503");

/***/ }),

/***/ 42777:
/***/ (function(module) {

"use strict";
module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/Error");

/***/ }),

/***/ 29165:
/***/ (function(module) {

"use strict";
module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/Redirect");

/***/ }),

/***/ 46573:
/***/ (function(module) {

"use strict";
module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/TimedOut");

/***/ }),

/***/ 44787:
/***/ (function(module) {

"use strict";
module.exports = require("@tippyjs/react");

/***/ }),

/***/ 52167:
/***/ (function(module) {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 66303:
/***/ (function(module) {

"use strict";
module.exports = require("chroma-js");

/***/ }),

/***/ 59003:
/***/ (function(module) {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 11004:
/***/ (function(module) {

"use strict";
module.exports = require("js-beautify");

/***/ }),

/***/ 44150:
/***/ (function(module) {

"use strict";
module.exports = require("natsort");

/***/ }),

/***/ 3280:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 10299:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3712:
/***/ (function(module) {

"use strict";
module.exports = require("oidc-client");

/***/ }),

/***/ 52458:
/***/ (function(module) {

"use strict";
module.exports = require("pullstate");

/***/ }),

/***/ 16689:
/***/ (function(module) {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 69319:
/***/ (function(module) {

"use strict";
module.exports = require("react-showdown");

/***/ }),

/***/ 62154:
/***/ (function(module) {

"use strict";
module.exports = require("react-table");

/***/ }),

/***/ 84466:
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 20997:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 67915:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx");

/***/ }),

/***/ 99816:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 23617:
/***/ (function(module) {

"use strict";
module.exports = import("axios-retry");;

/***/ }),

/***/ 61024:
/***/ (function(module) {

"use strict";
module.exports = import("mermaid");;

/***/ }),

/***/ 15941:
/***/ (function(module) {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ 9926:
/***/ (function(module) {

"use strict";
module.exports = import("zod");;

/***/ }),

/***/ 57147:
/***/ (function(module) {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 14473:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// this is needed to ensure webpack does not attempt to tree shake unused modules. Since these should always come from host
__webpack_require__(16689);
__webpack_require__(66405);
__webpack_require__(41664);
__webpack_require__(71853);
__webpack_require__(40968);
__webpack_require__(4298);
__webpack_require__(5152);
__webpack_require__(67915);
__webpack_require__(99816);
if (false) {}
module.exports = {};
//# sourceMappingURL=include-defaults.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,5152,6296,2196,5217,6227,1974,236,1477,5829,1686,5781,9209,175,4588,8816,9858,5692,6739,3618,347,1878,1727,6415,1993,7246], function() { return __webpack_exec__(13131); });
module.exports = __webpack_exports__;

})();