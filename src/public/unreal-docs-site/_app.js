(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888,4820];
exports.modules = {

/***/ 57431:
/***/ (function(module) {

const globalCssRe = [/(?<!\.module)\.css$/, /(?<!\.module)\.(scss|sass)$/]
const globalCssModulesRe = [/\.module\.css$/, /\.module\.(scss|sass)$/]

module.exports = { globalCssRe, globalCssModulesRe }


/***/ }),

/***/ 9489:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

const Module = __webpack_require__(98188)

const { globalCssRe } = __webpack_require__(57431)

Module.prototype.require = new Proxy(Module.prototype.require, {
  apply(target, thisArg, args) {
    if (globalCssRe.some((reg) => reg.test(args[0]))) {
      return ''
    }
    return Reflect.apply(target, thisArg, args)
  },
})


/***/ }),

/***/ 24183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50790);
/* harmony import */ var _components_UpdatePopUp_UpdatePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24746);
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45829);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__, _components_UpdatePopUp_UpdatePopUp__WEBPACK_IMPORTED_MODULE_2__, _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__, _components_UpdatePopUp_UpdatePopUp__WEBPACK_IMPORTED_MODULE_2__, _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(14473);













function MyApp({
  Component,
  pageProps
}) {
  const Layout = Component.Layout ?? _components_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLayout */ .H;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("title", {
        children: "iTwin Platform"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
        name: "author",
        content: "Bentley Systems"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_3__/* .AuthProvider */ .H, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Layout, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_UpdatePopUp_UpdatePopUp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})]
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ HeaderItems; }
/* harmony export */ });
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90236);
/* harmony import */ var _components_icons_UserManagementIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21073);
/* harmony import */ var _constants_flags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46415);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61686);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_1__]);
_client_env__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






class HeaderItems {
  static getAllHeaderItems() {
    return [{
      title: 'Get Started',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .GET_STARTED */ .v4,
      allowAnonymous: true
    }, {
      title: 'Documentation',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .DOCUMENTATION */ .tQ,
      allowAnonymous: true,
      isActiveFn: pathName => [_constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .DOCUMENTATION */ .tQ, _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .API_GROUPS */ .Ss, _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .UNREAL */ .fI].some(p => pathName.startsWith(p))
    }, {
      title: 'Learning',
      allowAnonymous: true,
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .LEARNING */ .MG,
      customRenderCondition: ({
        flags
      }) => flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_LEARNING_PAGE */ .wm]
    }, {
      title: 'Learning',
      allowAnonymous: true,
      isDropdown: true,
      href: '',
      values: [{
        title: 'Tutorials',
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .TUTORIALS */ .eU,
        allowAnonymous: true
      }, {
        title: 'Accreditation',
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .ACCREDITATION */ .lP,
        allowAnonymous: true
      }, {
        title: 'Powered by iTwin',
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .POWERED_BY_ITWIN */ .ZY,
        allowAnonymous: true
      }, {
        title: 'iTwin University',
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .ITWIN_UNIVERSITY */ .f_,
        allowAnonymous: true,
        customRenderCondition: ({
          flags
        }) => flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_ITWIN_UNIVERSITY */ .R8]
      }],
      customRenderCondition: ({
        flags
      }) => flags && !flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_LEARNING_PAGE */ .wm]
    }, {
      title: 'Samples',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .SAMPLES */ .FH,
      allowAnonymous: true
    }, {
      title: 'Blog',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .BLOG */ .RM,
      allowAnonymous: true,
      customRenderCondition: ({
        flags
      }) => flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_BLOG */ .Vg]
    }, {
      title: 'Support',
      href: '',
      allowAnonymous: true,
      isDropdown: true,
      values: [{
        title: 'Get Support',
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .SUPPORT */ .wL,
        allowAnonymous: true
      }, {
        title: 'Platform Health',
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .PLATFORM_HEALTH */ .Vg,
        allowAnonymous: true,
        customRenderCondition: ({
          flags
        }) => flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_PLATFORM_HEALTH */ .uU]
      }, {
        title: 'Submit an Idea',
        href: _client_env__WEBPACK_IMPORTED_MODULE_1__/* ["default"].IDEAS_PORTAL_URL */ .Z.IDEAS_PORTAL_URL,
        allowAnonymous: true,
        endIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_0__.SvgWindowPopout, {})
      }]
    }, {
      title: 'Pricing',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .PRICING */ .$r,
      allowAnonymous: true,
      customRenderCondition: ({
        flags
      }) => flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_PRICING */ .Wz]
    }, {
      title: 'Profile',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .PROFILE */ .ih,
      allowAnonymous: false,
      isInUserProfile: true
    }, {
      title: 'My Apps',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .MY_APPS */ .$Z,
      allowAnonymous: false,
      isInUserProfile: true,
      isActiveFn: pathName => [_constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .MY_APPS */ .$Z, _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .REGISTER */ .Nz, _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .APPS */ .ei, _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .REGISTER_V2 */ ._m, _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .APPS_V2 */ .Nd].some(p => pathName.startsWith(p))
    }, {
      title: 'My iTwins',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .MY_ITWINS */ .z$,
      allowAnonymous: false,
      isInUserProfile: true,
      isActiveFn: pathName => pathName.startsWith(_constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .MY_ITWINS */ .z$)
    }, {
      title: 'All Resources',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .LEARNING */ .MG,
      allowAnonymous: true,
      isInLearningPage: true,
      isActiveFn: pathName => pathName.endsWith(_constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .LEARNING */ .MG),
      customRenderCondition: ({
        flags
      }) => flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_LEARNING_PAGE */ .wm]
    }, {
      title: 'Tutorials',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .TUTORIALS */ .eU,
      allowAnonymous: true,
      isInLearningPage: true,
      isActiveFn: pathName => pathName.startsWith(_constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .TUTORIALS */ .eU),
      customRenderCondition: ({
        flags
      }) => flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_LEARNING_PAGE */ .wm]
    }, {
      title: 'Courses',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .COURSES */ .Wv,
      allowAnonymous: true,
      isInLearningPage: true,
      isActiveFn: pathName => pathName.startsWith(_constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .COURSES */ .Wv),
      customRenderCondition: ({
        flags
      }) => flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_ITWIN_UNIVERSITY */ .R8]
    }, {
      title: 'Hands-on Labs',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .HANDS_ON_LABS */ .PY,
      allowAnonymous: true,
      isInLearningPage: true,
      isActiveFn: pathName => pathName.startsWith(_constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .HANDS_ON_LABS */ .PY),
      customRenderCondition: ({
        flags
      }) => flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_ITWIN_UNIVERSITY */ .R8]
    }, {
      title: 'Account settings',
      href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .ACCOUNT_SETTINGS */ .QL,
      allowAnonymous: false,
      isInUserProfile: true,
      startIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_icons_UserManagementIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z //override for thumbnail style default icon
      , {
        style: {
          backgroundColor: 'unset',
          padding: 0
        }
      }),
      addDividerBefore: true,
      customRenderCondition: ({
        flags,
        session
      }) => flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_ACCOUNT_SETTINGS */ .j8] && session?.areas?.subscriptionManagement
    }];
  }

  static getFilteredHeaderItems(flags, session) {
    const allItems = this.getAllHeaderItems();
    const filteredItems = allItems.map(dropdownItem => {
      return dropdownItem.values ? Object.assign({}, dropdownItem, {
        values: dropdownItem.values.reduce((array, currentValue) => {
          if (currentValue.customRenderCondition === undefined || currentValue.customRenderCondition({
            flags,
            session
          })) {
            array.push(currentValue);
          }

          return array;
        }, [])
      }) : dropdownItem;
    }).filter(headerItem => //Filtering by custom render condition
    (headerItem.customRenderCondition === undefined || headerItem.customRenderCondition({
      flags,
      session
    })) && ( //Filtering by child items
    !headerItem.values || headerItem.values.length > 0));
    return filteredItems;
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87625:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TrialBanner; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/constants/constants.ts
var constants = __webpack_require__(85804);
// EXTERNAL MODULE: consume shared module (default) itwinui-v2@^2.12.0 (singleton) (fallback: ./node_modules/itwinui-v2/esm/index.js) (eager)
var index_js_eager_ = __webpack_require__(6227);
// EXTERNAL MODULE: ./src/constants/paths.ts
var paths = __webpack_require__(61686);
// EXTERNAL MODULE: ./src/links/SimpleLink.tsx
var SimpleLink = __webpack_require__(73351);
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(51477);
// EXTERNAL MODULE: ./src/components/Theme.tsx
var Theme = __webpack_require__(51974);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/Banners/TrialBanner/ExpiredTrialBanner.tsx








function ExpiredTrialBanner(props) {
  const {
    onClose,
    trialExpirationDateTime
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(Theme/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(index_js_eager_.Alert, {
      onClose: onClose,
      type: "negative",
      isSticky: true,
      className: "trial-banner",
      children: ["Your free Trial", ' ', /*#__PURE__*/jsx_runtime_.jsx("strong", {
        className: "days-remaining-counter negative",
        children: trialExpirationDateTime ? `expired on ${utils/* Utils.formatDateToString */.c.formatDateToString(trialExpirationDateTime)}` : 'expired'
      }), ". Please subscribe to continue using the iTwin Platform. All created applications and test iModels", ' ', /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "may become unavailable 90 days after Trial expiration."
      }), /*#__PURE__*/jsx_runtime_.jsx(SimpleLink/* default */.Z, {
        className: "iui-alert-link",
        href: paths/* PRICING */.$r,
        children: "See subscription plans"
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Banners/TrialBanner/TrialProgressBanner.tsx








function TrialProgressBanner(props) {
  const {
    onClose,
    daysBeforeExpiration
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(Theme/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(index_js_eager_.Alert, {
      onClose: onClose,
      type: daysBeforeExpiration < constants/* DAYS_BEFORE_TRIAL_EXPIRATION_WARNING */.PX ? 'warning' : 'informational',
      isSticky: true,
      className: "trial-banner",
      children: ["Your free Trial expires in", ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
        children: [daysBeforeExpiration, " ", daysBeforeExpiration === 1 ? 'day' : 'days']
      }), ".", /*#__PURE__*/jsx_runtime_.jsx(SimpleLink/* default */.Z, {
        className: "iui-alert-link",
        href: paths/* PRICING */.$r,
        children: "See subscription plans"
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Banners/TrialBanner/TrialBanner.tsx






function TrialBanner(props) {
  const {
    onClose,
    trialExpirationDateTime
  } = props;
  const daysLeft = (0,external_react_.useMemo)(() => {
    const todayTime = new Date().getTime();
    const expirationTime = trialExpirationDateTime.getTime();
    const difference = expirationTime - todayTime;
    const daysLeft = Math.ceil(difference / constants/* MILLISECONDS_IN_DAY */.xR);
    return daysLeft;
  }, [trialExpirationDateTime]);
  if (daysLeft === undefined || isNaN(daysLeft)) return null;
  if (daysLeft > 0) return /*#__PURE__*/jsx_runtime_.jsx(TrialProgressBanner, {
    onClose: onClose,
    daysBeforeExpiration: daysLeft
  });
  return /*#__PURE__*/jsx_runtime_.jsx(ExpiredTrialBanner, {
    onClose: onClose,
    trialExpirationDateTime: trialExpirationDateTime
  });
}

/***/ }),

/***/ 50790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ DefaultLayout; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46449);
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45829);
/* harmony import */ var _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25781);
/* harmony import */ var _utils_LaunchDarklyWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86581);
/* harmony import */ var _utils_RedirectWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90518);
/* harmony import */ var _utils_ModalWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74980);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__, _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_2__, _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_3__, _utils_LaunchDarklyWrapper__WEBPACK_IMPORTED_MODULE_4__, _utils_RedirectWrapper__WEBPACK_IMPORTED_MODULE_5__, _utils_ModalWrapper__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__, _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_2__, _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_3__, _utils_LaunchDarklyWrapper__WEBPACK_IMPORTED_MODULE_4__, _utils_RedirectWrapper__WEBPACK_IMPORTED_MODULE_5__, _utils_ModalWrapper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function DefaultLayout(props) {
  const {
    isLoaded,
    isLoggedIn,
    silentSignin
  } = (0,_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_2__/* .useAuthService */ .m)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isLoaded && !isLoggedIn) silentSignin();
  }, [isLoaded, isLoggedIn, silentSignin]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_providers_SessionProvider__WEBPACK_IMPORTED_MODULE_3__/* .SessionProvider */ .eA, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_utils_LaunchDarklyWrapper__WEBPACK_IMPORTED_MODULE_4__/* .LaunchDarklyWrapper */ .w, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_utils_RedirectWrapper__WEBPACK_IMPORTED_MODULE_5__/* .RedirectWrapper */ .C, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_utils_ModalWrapper__WEBPACK_IMPORTED_MODULE_6__/* .ModalWrapper */ .A, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .A, {
            children: props.children
          })
        })
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70347);
/* harmony import */ var _itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90236);
/* harmony import */ var _constants_flags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46415);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61686);
/* harmony import */ var _next_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54963);
/* harmony import */ var _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25781);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23315);
/* harmony import */ var _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53164);
/* harmony import */ var _utils_apiRequestResponseLog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31156);
/* harmony import */ var _Banners_TrialBanner_TrialBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87625);
/* harmony import */ var _SecondaryHeader_SecondaryHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71494);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44352);
/* harmony import */ var _header_ESHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41412);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72382);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_4__, _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_6__, _stores__WEBPACK_IMPORTED_MODULE_7__, _SecondaryHeader_SecondaryHeader__WEBPACK_IMPORTED_MODULE_11__, _header_ESHeader__WEBPACK_IMPORTED_MODULE_13__, _header_Header__WEBPACK_IMPORTED_MODULE_14__]);
([_client_env__WEBPACK_IMPORTED_MODULE_4__, _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_6__, _stores__WEBPACK_IMPORTED_MODULE_7__, _SecondaryHeader_SecondaryHeader__WEBPACK_IMPORTED_MODULE_11__, _header_ESHeader__WEBPACK_IMPORTED_MODULE_13__, _header_Header__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















function Layout({
  children
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const isLoggedIn = (0,_stores__WEBPACK_IMPORTED_MODULE_7__/* .useIsLoggedIn */ .n)();
  const {
    closeTrialBanner,
    session,
    showTrialBanner
  } = (0,_providers_SessionProvider__WEBPACK_IMPORTED_MODULE_6__/* .useSession */ .kP)();
  const {
    0: hasError,
    1: setHasError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (_client_env__WEBPACK_IMPORTED_MODULE_4__/* ["default"].ENVIRONMENT */ .Z.ENVIRONMENT !== 'prod') {
      const meta = window.document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex';
      const head = window.document.getElementsByTagName('head')[0];
      head.insertBefore(meta, head.firstChild);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setHasError( false && 0);
  }, [router, isLoggedIn]);
  const noFooterPageRegex = [`.*${_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .APPS */ .ei}`, `.*${_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .REGISTER */ .Nz}`, `.*${_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .APPS_V2 */ .Nd}`, `.*${_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .REGISTER_V2 */ ._m}`];
  const darkThemePages = [_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .HOME */ .Sd, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .TRIAL */ .Kh];
  const newLayoutPages = [_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .HOME */ .Sd, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .TRIAL */ .Kh, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .DOCUMENTATION */ .tQ, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .MY_APPS */ .$Z];
  const flags = (0,_stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_8__/* .useLaunchDarklyFlags */ .L)();
  const {
    0: isInterceptorActive,
    1: setIsInterceptorActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  if (flags[_constants_flags__WEBPACK_IMPORTED_MODULE_16__/* .FLAG_TESTS */ .UH] && !isInterceptorActive) {
    setIsInterceptorActive(true);
    (0,_utils_apiRequestResponseLog__WEBPACK_IMPORTED_MODULE_9__/* .logAPIRequest */ .z)();
    (0,_utils_apiRequestResponseLog__WEBPACK_IMPORTED_MODULE_9__/* .logAPIResponse */ .r)();
  }

  const pathsWithSecondaryHeader = flags[_constants_flags__WEBPACK_IMPORTED_MODULE_16__/* .FLAG_LEARNING_PAGE */ .wm] ? [_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .PROFILE */ .ih, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .MY_APPS */ .$Z, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .MY_ITWINS */ .z$, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .ACCOUNT_SETTINGS */ .QL, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .LEARNING */ .MG, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .TUTORIALS */ .eU, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .COURSES */ .Wv, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .HANDS_ON_LABS */ .PY] : [_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .PROFILE */ .ih, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .MY_APPS */ .$Z, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .MY_ITWINS */ .z$, _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .ACCOUNT_SETTINGS */ .QL];

  const header = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_header_Header__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      className: "dark-blue"
    }), pathsWithSecondaryHeader.some(p => router.pathname.startsWith(p)) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_SecondaryHeader_SecondaryHeader__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})]
  });

  const enterpriseSystemsHeader = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_header_ESHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      className: "dark-blue"
    })
  });

  const footer = !noFooterPageRegex.some(p => new RegExp(p).test(_next_utils__WEBPACK_IMPORTED_MODULE_17__/* .NextUtils.isPreloading */ .l.isPreloading ? '' : window.location.pathname)) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_12__/* .Footer */ .$, {});

  if ((newLayoutPages.some(path => path === router.pathname) || router.pathname.includes(_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .REST_API_OVERVIEW */ .A) || router.pathname.includes(_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .DOCUMENTATION */ .tQ)) && !hasError) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
      "data-theme": darkThemePages.some(path => path === router.pathname) ? 'dark' : 'light',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_3__.PageLayout, {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()([router.pathname === _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .HOME */ .Sd || darkThemePages.some(path => path === router.pathname) ? 'dark-bg' : undefined]),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_3__.PageLayout.Header, {
          children: [showTrialBanner && isLoggedIn && session?.subscription?.expirationDateTime && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Banners_TrialBanner_TrialBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            onClose: closeTrialBanner,
            trialExpirationDateTime: new Date(session?.subscription?.expirationDateTime)
          }), router.pathname !== _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .ESREGISTER */ .au ? header : enterpriseSystemsHeader]
        }), children]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: "app",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "sticky-top",
      style: {
        zIndex: 10
      },
      children: [showTrialBanner && session?.subscription?.expirationDateTime && isLoggedIn && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Banners_TrialBanner_TrialBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        onClose: closeTrialBanner,
        trialExpirationDateTime: new Date(session?.subscription?.expirationDateTime)
      }), router.pathname !== _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .ESREGISTER */ .au ? header : enterpriseSystemsHeader]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("main", {
      className: "content",
      children: children
    }), footer]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const FullWidthMenuDivider = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.MenuDivider, {
    className: "full-width-menu-divider"
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (FullWidthMenuDivider);

/***/ }),

/***/ 12349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87929);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90236);
/* harmony import */ var _hooks_useSearchService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76150);
/* harmony import */ var _Panels_FilterPanel_FilterPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33370);
/* harmony import */ var _Panels_SearchPanel_SearchPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15863);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96123);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_3__, _hooks_useSearchService__WEBPACK_IMPORTED_MODULE_4__, _Panels_SearchPanel_SearchPanel__WEBPACK_IMPORTED_MODULE_6__]);
([_client_env__WEBPACK_IMPORTED_MODULE_3__, _hooks_useSearchService__WEBPACK_IMPORTED_MODULE_4__, _Panels_SearchPanel_SearchPanel__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const FullPageSearch = ({
  isOpen,
  onClose
}) => {
  const searchClient = (0,_hooks_useSearchService__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const [searchSite, setSearchSite] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(_types__WEBPACK_IMPORTED_MODULE_7__/* .SearchSites.iTwinPlatform */ .Cc.iTwinPlatform);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: "",
    isOpen: isOpen,
    isDismissible: false,
    className: "search-modal",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.InstantSearch, {
      searchClient: searchClient,
      indexName: searchSite === _types__WEBPACK_IMPORTED_MODULE_7__/* .SearchSites.iTwinPlatform */ .Cc.iTwinPlatform ? _client_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ALGOLIA_INDEX */ .Z.ALGOLIA_INDEX : _client_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ITWINJS_INDEX */ .Z.ITWINJS_INDEX,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Panels_FilterPanel_FilterPanel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        searchSite: searchSite,
        onChange: setSearchSite
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Panels_SearchPanel_SearchPanel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        onClose: onClose
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (FullPageSearch);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ Hit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96123);
/* harmony import */ var _SandboxHit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13536);
/* harmony import */ var _ShowcaseHit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48449);
/* harmony import */ var _ITwinJsDocumentationHit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34907);
/* harmony import */ var _PlatformHit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79900);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SandboxHit__WEBPACK_IMPORTED_MODULE_2__, _ShowcaseHit__WEBPACK_IMPORTED_MODULE_3__, _ITwinJsDocumentationHit__WEBPACK_IMPORTED_MODULE_4__]);
([_SandboxHit__WEBPACK_IMPORTED_MODULE_2__, _ShowcaseHit__WEBPACK_IMPORTED_MODULE_3__, _ITwinJsDocumentationHit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Hit = ({
  hit: initialHit,
  onClick
}) => {
  const removePlural = type => {
    const types = {
      'Topic': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.Topic */ .OP.Topic,
      'Methods': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.Method */ .OP.Method,
      'Classes': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.Class */ .OP.Class,
      'Interfaces': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.Interface */ .OP.Interface,
      'Enumerations': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.Enumeration */ .OP.Enumeration,
      'Global Functions': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.GlobalFunction */ .OP.GlobalFunction,
      'Constants': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.Constant */ .OP.Constant,
      'Type Aliases': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.TypeAlias */ .OP.TypeAlias,
      'Namespaces': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.Namespace */ .OP.Namespace,
      'Properties': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.Property */ .OP.Property,
      'Sandbox': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.Sandbox */ .OP.Sandbox,
      'Sample': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.Sample */ .OP.Sample,
      'ECSchema': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinJsContentType.ECSchema */ .OP.ECSchema,
      'Developer APIs': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinPlatformContentType.DeveloperAPI */ .RR.DeveloperAPI,
      'Tutorials': _types__WEBPACK_IMPORTED_MODULE_1__/* .iTwinPlatformContentType.Tutorial */ .RR.Tutorial
    };
    return types[type] ?? type;
  };

  const convertFilePathToBreadcrumbs = filePath => {
    let breadcrumbs = filePath.replace(/\\/g, ' > ');

    if (breadcrumbs.endsWith('Static')) {
      const staticLoc = breadcrumbs.lastIndexOf('Static');
      breadcrumbs = breadcrumbs.slice(0, staticLoc);
    }

    return breadcrumbs;
  };

  const getBadgeType = contentType => {
    return 'badge badge-' + contentType.toLowerCase().replace(/\s/g, '-');
  };

  const {
    0: hitToDisplay,
    1: setHitToDisplay
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialHit);
  const {
    0: badgeType,
    1: setBadgeType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getBadgeType(initialHit.contentType));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const hit = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(initialHit);

    if (hit._highlightResult && hit._highlightResult.filePath) {
      hit._highlightResult.filePath.value = convertFilePathToBreadcrumbs(hit._highlightResult.filePath.value);
    }

    setHitToDisplay(hit);
    setBadgeType(getBadgeType(hit.contentType));
  }, [initialHit]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [hitToDisplay.filePath && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ITwinJsDocumentationHit__WEBPACK_IMPORTED_MODULE_4__/* .ITwinJsDocumentationHit */ .C, {
      hit: hitToDisplay,
      className: badgeType,
      badgeContent: removePlural(hitToDisplay.contentType)
    }), hitToDisplay.name && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SandboxHit__WEBPACK_IMPORTED_MODULE_2__/* .SandboxHit */ .b, {
      hit: hitToDisplay,
      className: badgeType,
      badgeContent: removePlural(hitToDisplay.contentType)
    }), hitToDisplay.sampleName && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ShowcaseHit__WEBPACK_IMPORTED_MODULE_3__/* .ShowcaseHit */ .f, {
      hit: hitToDisplay,
      className: badgeType,
      badgeContent: removePlural(hitToDisplay.contentType)
    }), hitToDisplay.title && hitToDisplay.url && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_PlatformHit__WEBPACK_IMPORTED_MODULE_5__/* .ITwinPlatformHit */ .M, {
      hit: hitToDisplay,
      className: badgeType,
      badgeContent: removePlural(hitToDisplay.contentType),
      onClick: onClick
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ ITwinJsDocumentationHit; }
/* harmony export */ });
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87929);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90236);
/* harmony import */ var _links_ExternalSearchResultLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59513);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73351);
/* harmony import */ var _SubRecordHit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22492);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_3__, _SubRecordHit__WEBPACK_IMPORTED_MODULE_6__]);
([_client_env__WEBPACK_IMPORTED_MODULE_3__, _SubRecordHit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ITwinJsDocumentationHit = ({
  hit,
  className,
  badgeContent
}) => {
  const href = new URL(_client_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ITWINJS_URL */ .Z.ITWINJS_URL + '/' + hit.filePath.toLowerCase()).toString();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
    className: "custom-hit",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      target: "_blank",
      href: href,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Badge, {
        className: className,
        children: badgeContent
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
        className: "result-heading result-title",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.Highlight, {
          attribute: "filePath",
          hit: hit
        })
      }), hit.contentType !== 'Global Functions' && hit.contentType !== 'Methods' && hit.Methods && hit._highlightResult.Methods.matchedWords.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit._highlightResult.Methods.value.match(/<ais-\S+/g).map((match, index) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            hit: hit,
            highlightType: "Methods",
            match: match,
            cssTypeName: "methods",
            displayName: "Method"
          }, index);
        })
      }), hit.contentType !== 'Properties' && hit.Properties && hit._highlightResult.Properties.matchedWords.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit._highlightResult.Properties.value.match(/<ais-\S+/g).map((match, index) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            hit: hit,
            highlightType: "Properties",
            match: match,
            cssTypeName: "properties",
            displayName: "Property"
          }, index);
        })
      }), hit.EntityClass && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.EntityClass.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.EntityClass[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "EntityClass",
              cssTypeName: "entity-class",
              displayName: "EntityClass"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.RelationshipClass && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.RelationshipClass.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.RelationshipClass[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "RelationshipClass",
              cssTypeName: "relationship-class",
              displayName: "RelationshipClass"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.Unit && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.Unit.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.Unit[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "Unit",
              cssTypeName: "unit",
              displayName: "Unit"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.InvertedUnit && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.InvertedUnit.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.InvertedUnit[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "InvertedUnit",
              cssTypeName: "inverted-unit",
              displayName: "InvertedUnit"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.Phenomenon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.Phenomenon.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.Phenomenon[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "Phenomenon",
              cssTypeName: "phenomenon",
              displayName: "Phenomenon"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.UnitSystem && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.UnitSystem.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.UnitSystem[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "UnitSystem",
              cssTypeName: "unit-system",
              displayName: "UnitSystem"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.Mixin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.Mixin.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.Mixin[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "Mixin",
              cssTypeName: "mixin",
              displayName: "Mixin"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.Deprecated && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.Deprecated.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.Deprecated[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "Deprecated",
              cssTypeName: "deprecated",
              displayName: "Deprecated"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.StructClass && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.StructClass.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.StructClass[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "StructClass",
              cssTypeName: "struct-class",
              displayName: "StructClass"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.Enumeration && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.Enumeration.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.Enumeration[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "Enumeration",
              cssTypeName: "enumeration",
              displayName: "Enumeration"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.KindOfQuantity && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.KindOfQuantity.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.KindOfQuantity[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "KindOfQuantity",
              cssTypeName: "kind-of-quantity",
              displayName: "KindOfQuantity"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.PropertyCategory && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.PropertyCategory.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.PropertyCategory[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "PropertyCategory",
              cssTypeName: "property-category",
              displayName: "PropertyCategory"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.CustomAttributeClass && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.CustomAttributeClass.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.CustomAttributeClass[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "CustomAttributeClass",
              cssTypeName: "custom-attribute-class",
              displayName: "CustomAttributeClass"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.Format && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: hit.Format.map((_item, index) => {
          // Only match the array index that matches.
          if (hit._highlightResult.Format[index].matchedWords.length > 0) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SubRecordHit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              index: index,
              hit: hit,
              highlightType: "Format",
              cssTypeName: "format",
              displayName: "Format"
            }, index);
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
        })
      }), hit.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
        className: "result-heading result-description",
        children: hit.description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_links_ExternalSearchResultLink__WEBPACK_IMPORTED_MODULE_4__/* .ExternalSearchResultLink */ .u, {
        href: href,
        children: href
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79900:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": function() { return /* binding */ ITwinPlatformHit; }
});

// EXTERNAL MODULE: consume shared module (default) itwinui-v1@^1.48.3 (singleton) (fallback: ./node_modules/itwinui-v1/cjs/index.js) (eager)
var index_js_eager_ = __webpack_require__(85217);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-instantsearch-dom"
var external_react_instantsearch_dom_ = __webpack_require__(87929);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/links/InternalSearchResultLink.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */



const InternalSearchResultLink = ({
  children,
  href,
  className,
  style = {},
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
    href: href,
    as: href,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      style: style,
      className: className,
      onClick: onClick,
      children: children
    })
  });
};
// EXTERNAL MODULE: ./src/links/SimpleLink.tsx
var SimpleLink = __webpack_require__(73351);
;// CONCATENATED MODULE: ./src/components/Search/Hit/PlatformHit.tsx








const ITwinPlatformHit = ({
  hit,
  className,
  badgeContent,
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: "custom-hit",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SimpleLink/* default */.Z, {
      className: "result-list-item-link",
      href: hit.url,
      onClick: onClick,
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Badge, {
        className: className,
        children: badgeContent
      }), /*#__PURE__*/jsx_runtime_.jsx(SimpleLink/* default */.Z, {
        href: hit.url,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "result-heading result-title",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Highlight, {
            attribute: "title",
            hit: hit
          })
        })
      }), hit.description && /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Body, {
        className: "result-heading result-description",
        children: hit.description
      }), /*#__PURE__*/jsx_runtime_.jsx(InternalSearchResultLink, {
        href: hit.url,
        children: hit.url
      })]
    })
  });
};

/***/ }),

/***/ 13536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": function() { return /* binding */ SandboxHit; }
/* harmony export */ });
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87929);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90236);
/* harmony import */ var _links_ExternalSearchResultLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59513);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73351);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_3__]);
_client_env__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const SandboxHit = ({
  hit,
  className,
  badgeContent
}) => {
  const href = new URL(_client_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ITWINJS_URL */ .Z.ITWINJS_URL + '/sandboxes/' + hit.username + '/' + hit.name).toString();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
    className: "custom-hit",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      className: "result-list-item-link",
      target: "_blank",
      href: href,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Badge, {
        className: className,
        children: badgeContent
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: href,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
          className: "result-heading result-title",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.Highlight, {
            attribute: "name",
            hit: hit
          })
        })
      }), hit.tags && hit.tags.map((_item, index) => {
        if (hit._highlightResult.tags[index].matchedWords.length > 0) {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              href: _client_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ITWINJS_URL */ .Z.ITWINJS_URL + '/sandboxes/search?term=' + _item,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
                className: "result-heading",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.Highlight, {
                  attribute: `tags[${index}]`,
                  hit: hit
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Badge, {
                  className: "badge badge-tag",
                  children: "Tag"
                })]
              })
            })
          }, index);
        }

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {});
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: _client_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ITWINJS_URL */ .Z.ITWINJS_URL + '/sandboxes/search?term=' + hit.username,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
          className: "result-heading",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.Highlight, {
            attribute: "username",
            hit: hit
          })
        })
      }), hit.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
        className: "result-heading result-description",
        children: hit.description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_links_ExternalSearchResultLink__WEBPACK_IMPORTED_MODULE_4__/* .ExternalSearchResultLink */ .u, {
        href: href,
        children: href
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ ShowcaseHit; }
/* harmony export */ });
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87929);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90236);
/* harmony import */ var _links_ExternalSearchResultLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59513);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73351);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_3__]);
_client_env__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ShowcaseHit = ({
  hit,
  className,
  badgeContent
}) => {
  const href = new URL(_client_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ITWINJS_URL */ .Z.ITWINJS_URL + '/sample-showcase/?group=' + hit.groupName + '&sample=' + hit.sampleName).toString();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
    className: "custom-hit",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      className: "result-list-item-link",
      target: "_blank",
      href: href,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Badge, {
        className: className,
        children: badgeContent
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: href,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
          className: "result-heading result-title",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.Highlight, {
            attribute: "sampleName",
            hit: hit
          })
        })
      }), hit.contentType === 'Sample' && hit.tags && hit.tags.map((_item, index) => {
        if (hit._highlightResult.tags && hit._highlightResult.tags[index].matchedWords.length > 0) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
            className: "result-heading result-description",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.Highlight, {
              attribute: `tags[${index}]`,
              hit: hit
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Badge, {
              className: "badge badge-tag",
              children: "Tag"
            })]
          }, index);
        }

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {});
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
        className: "result-heading result-description",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.Highlight, {
          attribute: "groupName",
          hit: hit
        })
      }), hit.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
        className: "result-heading result-description",
        children: hit.description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_links_ExternalSearchResultLink__WEBPACK_IMPORTED_MODULE_4__/* .ExternalSearchResultLink */ .u, {
        href: href,
        children: href
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SubRecordHit; }
/* harmony export */ });
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87929);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90236);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73351);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_3__]);
_client_env__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function SubRecordHit({
  index,
  hit,
  highlightType,
  match,
  cssTypeName,
  displayName
}) {
  if (displayName === 'Method' || displayName === 'Property') {
    const subBadgeType = `badge badge-${cssTypeName}`;
    const clonedHit = JSON.parse(JSON.stringify(hit));
    clonedHit._highlightResult[`${highlightType}`].value = match;
    const linkedString = match ? match.replace('<ais-highlight-0000000000>', '').replace('</ais-highlight-0000000000>', '') : '';
    const href = new URL(`${_client_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ITWINJS_URL */ .Z.ITWINJS_URL}/${hit.filePath.toLowerCase()}${linkedString ? `#${linkedString.toLowerCase()}` : ''}`).toString();
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      href: href,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
        className: "result-heading",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.Highlight, {
          attribute: `${highlightType}`,
          hit: clonedHit
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Badge, {
          className: subBadgeType,
          children: displayName
        })]
      })
    });
  } else {
    // Only match the array index that matches.
    if (index && hit._highlightResult[`${highlightType}`][index].matchedWords.length > 0) {
      const subBadgeType = `badge badge-${cssTypeName}`;
      const href = new URL(_client_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ITWINJS_URL */ .Z.ITWINJS_URL + '/' + hit.filePath.toLowerCase() + '#' + hit[`${highlightType}`][index].toLowerCase()).toString();
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        href: href,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
          className: "result-heading",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.Highlight, {
            attribute: `${highlightType}[${index}]`,
            hit: hit
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Badge, {
            className: subBadgeType,
            children: displayName
          })]
        })
      });
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {});
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87929);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hit_Hit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49041);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Hit_Hit__WEBPACK_IMPORTED_MODULE_2__]);
_Hit_Hit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const InfiniteHitsComponent = ({
  onClick,
  hits,
  hasMore,
  refineNext
}) => {
  const sentinel = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);

  const onSentinelIntersection = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && hasMore) {
        refineNext();
      }
    });
  };

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const observer = new IntersectionObserver(onSentinelIntersection);

    if (sentinel.current !== null) {
      observer.observe(sentinel.current);
    }

    return () => observer.disconnect();
  }, [hits]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "infinite-hits",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
      className: "infinite-hits-list",
      children: [hits.map(hit => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
        className: "infinite-hits-item",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Hit_Hit__WEBPACK_IMPORTED_MODULE_2__/* .Hit */ ._, {
          hit: hit,
          onClick: onClick
        })
      }, hit.objectID)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
        className: "infinite-hits-sentinel",
        ref: sentinel
      })]
    })
  });
};

const InfiniteHits = ({
  onClick
}) => {
  const InfiniteHitsConnector = (0,react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__.connectInfiniteHits)(({
    hits,
    hasMore,
    refineNext
  }) => {
    return InfiniteHitsComponent({
      onClick,
      hits,
      hasMore,
      refineNext
    });
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(InfiniteHitsConnector, {});
};

/* harmony default export */ __webpack_exports__["Z"] = (InfiniteHits);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33370:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ FilterPanel; }
});

// EXTERNAL MODULE: consume shared module (default) itwinui-v1@^1.48.3 (singleton) (fallback: ./node_modules/itwinui-v1/cjs/index.js) (eager)
var index_js_eager_ = __webpack_require__(85217);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-instantsearch-dom"
var external_react_instantsearch_dom_ = __webpack_require__(87929);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/Search/RefinementLists/ClearRefinements/ClearRefinements.tsx





const ClearRefinements = (0,external_react_instantsearch_dom_.connectCurrentRefinements)(({
  items,
  refine
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "refinement-list-clear",
    children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Button, {
      id: "clear-all-filters",
      onClick: () => refine(items),
      disabled: !items.length,
      styleType: "high-visibility",
      children: "Clear all filters"
    })
  });
});
/* harmony default export */ var ClearRefinements_ClearRefinements = (ClearRefinements);
;// CONCATENATED MODULE: ./src/components/Search/RefinementLists/RefinementList/RefinementList.tsx






const RefinementList = ({
  items,
  currentRefinement,
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "refinement-list",
    children: items && items.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "refinement-list-list",
      children: items.sort((a, b) => a.label.localeCompare(b.label)).map(item => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "refinement-list-item",
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Checkbox, {
            label: item.label,
            checked: currentRefinement.includes(item.label),
            onClick: () => {
              onClick(item.value);
            }
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "refinement-list-count",
            children: item.count
          })]
        }, item.label);
      })
    }) : 'No results'
  });
};

/* harmony default export */ var RefinementList_RefinementList = (RefinementList);
;// CONCATENATED MODULE: ./src/components/Search/RefinementLists/ExampleRefinementList.tsx




const ExampleRefinementList = (0,external_react_instantsearch_dom_.connectRefinementList)(({
  items,
  currentRefinement,
  refine
}) => {
  const filteredItems = items.filter(item => item.label === 'Sample' || item.label === 'Sandbox');
  return /*#__PURE__*/jsx_runtime_.jsx(RefinementList_RefinementList, {
    items: filteredItems,
    currentRefinement: currentRefinement,
    onClick: refine
  });
});
/* harmony default export */ var RefinementLists_ExampleRefinementList = (ExampleRefinementList);
;// CONCATENATED MODULE: ./src/components/Search/RefinementLists/NonExampleRefinementList.tsx




const NonExampleRefinementList = (0,external_react_instantsearch_dom_.connectRefinementList)(({
  items,
  currentRefinement,
  refine
}) => {
  const filteredItems = items.filter(item => item.label !== 'Sample' && item.label !== 'Sandbox');
  return /*#__PURE__*/jsx_runtime_.jsx(RefinementList_RefinementList, {
    items: filteredItems,
    currentRefinement: currentRefinement,
    onClick: refine
  });
});
/* harmony default export */ var RefinementLists_NonExampleRefinementList = (NonExampleRefinementList);
;// CONCATENATED MODULE: ./src/components/Search/RefinementLists/SimpleRefinementList.tsx




const SimpleRefinementList = (0,external_react_instantsearch_dom_.connectRefinementList)(({
  items,
  currentRefinement,
  refine
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(RefinementList_RefinementList, {
    items: items,
    currentRefinement: currentRefinement,
    onClick: refine
  });
});
/* harmony default export */ var RefinementLists_SimpleRefinementList = (SimpleRefinementList);
// EXTERNAL MODULE: ./src/components/Search/types.ts
var types = __webpack_require__(96123);
;// CONCATENATED MODULE: ./src/components/Search/Panels/FilterPanel/FilterPanel.tsx











function FilterPanel({
  searchSite,
  onChange
}) {
  const menuItems = close => Object.values(types/* SearchSites */.Cc).map(site => {
    return /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.MenuItem, {
      onClick: () => {
        onChange(site);
        close();
      },
      children: site
    }, site);
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "filter-panel",
    children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.DropdownButton, {
      menuItems: menuItems,
      defaultValue: searchSite,
      className: "search-site-select",
      children: searchSite
    }), /*#__PURE__*/jsx_runtime_.jsx(ClearRefinements_ClearRefinements, {}), /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Subheading, {
      className: "filters-heading",
      children: "Filter by"
    }), searchSite === types/* SearchSites.iTwinPlatform */.Cc.iTwinPlatform && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.InputGroup, {
        label: "Type of content",
        children: /*#__PURE__*/jsx_runtime_.jsx(RefinementLists_SimpleRefinementList, {
          attribute: "contentType",
          limit: 100
        })
      })
    }), searchSite === types/* SearchSites.iTwinJs */.Cc.iTwinJs && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.InputGroup, {
        label: "Examples",
        children: /*#__PURE__*/jsx_runtime_.jsx(RefinementLists_ExampleRefinementList, {
          attribute: "contentType",
          limit: 100
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.InputGroup, {
        label: "Typescript API",
        children: /*#__PURE__*/jsx_runtime_.jsx(RefinementLists_NonExampleRefinementList, {
          attribute: "contentType",
          limit: 100
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.InputGroup, {
        label: "Packages",
        children: /*#__PURE__*/jsx_runtime_.jsx(RefinementLists_NonExampleRefinementList, {
          attribute: "package",
          limit: 100
        })
      })]
    })]
  });
}

/***/ }),

/***/ 15863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SearchPanel; }
/* harmony export */ });
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87929);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90236);
/* harmony import */ var _InfiniteHits_InfiniteHits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14039);
/* harmony import */ var _SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62465);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_4__, _InfiniteHits_InfiniteHits__WEBPACK_IMPORTED_MODULE_5__]);
([_client_env__WEBPACK_IMPORTED_MODULE_4__, _InfiniteHits_InfiniteHits__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SearchPanel({
  onClose
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "search-panel",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "search-bar-area",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Button, {
        id: "close-search",
        onClick: onClose,
        startIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_3__.SvgClose, {}),
        styleType: "borderless",
        children: "Close"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "search-result",
      children: [_client_env__WEBPACK_IMPORTED_MODULE_4__/* ["default"].ALGOLIA_INDEX */ .Z.ALGOLIA_INDEX, _client_env__WEBPACK_IMPORTED_MODULE_4__/* ["default"].ITWINJS_INDEX */ .Z.ITWINJS_INDEX].map(index => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.Index, {
        indexName: index,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InfiniteHits_InfiniteHits__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          onClick: onClose
        })
      }, index))
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87929);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const SearchBox = (0,react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__.connectSearchBox)(({
  currentRefinement,
  refine
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Input, {
  id: "search-box",
  placeholder: 'Search...',
  value: currentRefinement,
  onChange: event => refine(event.currentTarget.value)
}));
/* harmony default export */ __webpack_exports__["Z"] = (SearchBox);

/***/ }),

/***/ 96123:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cc": function() { return /* binding */ SearchSites; },
/* harmony export */   "OP": function() { return /* binding */ iTwinJsContentType; },
/* harmony export */   "RR": function() { return /* binding */ iTwinPlatformContentType; }
/* harmony export */ });
let iTwinJsContentType;

(function (iTwinJsContentType) {
  iTwinJsContentType["Topic"] = "Topic";
  iTwinJsContentType["Method"] = "Method";
  iTwinJsContentType["Class"] = "Class";
  iTwinJsContentType["Interface"] = "Interface";
  iTwinJsContentType["Enumeration"] = "Enumeration";
  iTwinJsContentType["GlobalFunction"] = "Global Function";
  iTwinJsContentType["Constant"] = "Constant";
  iTwinJsContentType["TypeAlias"] = "Type Alias";
  iTwinJsContentType["Namespace"] = "Namespace";
  iTwinJsContentType["Property"] = "Property";
  iTwinJsContentType["Sandbox"] = "Sandbox";
  iTwinJsContentType["Sample"] = "Sample";
  iTwinJsContentType["ECSchema"] = "ECSchema";
})(iTwinJsContentType || (iTwinJsContentType = {}));

let iTwinPlatformContentType;

(function (iTwinPlatformContentType) {
  iTwinPlatformContentType["DeveloperAPI"] = "Developer API";
  iTwinPlatformContentType["Tutorial"] = "Tutorial";
})(iTwinPlatformContentType || (iTwinPlatformContentType = {}));

let SearchSites;

(function (SearchSites) {
  SearchSites["iTwinPlatform"] = "iTwin Platform";
  SearchSites["iTwinJs"] = "iTwin.js";
})(SearchSites || (SearchSites = {}));

/***/ }),

/***/ 71494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* unused harmony export SecondaryHeader */
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_headerItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51888);
/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8302);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99301);
/* harmony import */ var _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53164);
/* harmony import */ var _header_HeaderButtons_HeaderLinkButton_HeaderLinkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33265);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61686);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_headerItems__WEBPACK_IMPORTED_MODULE_2__, _hooks_useSession__WEBPACK_IMPORTED_MODULE_3__, _services_authService__WEBPACK_IMPORTED_MODULE_4__]);
([_common_headerItems__WEBPACK_IMPORTED_MODULE_2__, _hooks_useSession__WEBPACK_IMPORTED_MODULE_3__, _services_authService__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function SecondaryHeader() {
  const flags = (0,_stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_5__/* .useLaunchDarklyFlags */ .L)();
  const {
    session
  } = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_3__/* .useSession */ .k)();
  const data = _common_headerItems__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getFilteredHeaderItems */ .Z.getFilteredHeaderItems(flags, session);
  const {
    isLoggedIn,
    signout,
    user
  } = (0,_services_authService__WEBPACK_IMPORTED_MODULE_4__/* .useAuthService */ .m)();
  const {
    firstName
  } = user;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const isLearningPage = [_constants_paths__WEBPACK_IMPORTED_MODULE_8__/* .LEARNING */ .MG, _constants_paths__WEBPACK_IMPORTED_MODULE_8__/* .TUTORIALS */ .eU, _constants_paths__WEBPACK_IMPORTED_MODULE_8__/* .HANDS_ON_LABS */ .PY, _constants_paths__WEBPACK_IMPORTED_MODULE_8__/* .COURSES */ .Wv].some(p => router.pathname.startsWith(p));

  if (!isLoggedIn && !isLearningPage) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {});
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Header, {
    className: "secondary-header",
    appLogo: undefined,
    breadcrumbs: data.filter(val => isLearningPage ? val.isInLearningPage : val.isInUserProfile).map(val => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_header_HeaderButtons_HeaderLinkButton_HeaderLinkButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      className: "secondary-header-button",
      href: val.href,
      title: val.title,
      isActiveFn: val.isActiveFn,
      startIcon: val.startIcon,
      addDividerBefore: val.addDividerBefore
    }, val.title)),
    actions: !isLearningPage ? [firstName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Text, {
      id: "user-welcome-text",
      children: ["Welcome back, ", firstName, "!"]
    }, "user-welcome-text"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: "iui-divider"
    }, "divider"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.HeaderButton, {
      name: "Sign Out",
      onClick: () => {
        signout();
      }
    }, "sign-out-btn")] : []
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (SecondaryHeader);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20949);
/* harmony import */ var _hooks_useSessionService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9975);
/* harmony import */ var _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25781);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_2__, _hooks_useSessionService__WEBPACK_IMPORTED_MODULE_3__, _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_2__, _hooks_useSessionService__WEBPACK_IMPORTED_MODULE_3__, _providers_SessionProvider__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function TrialPromptModal({
  givenName,
  closeModal
}) {
  const iTwinDeveloperPortalApi = (0,_hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_2__/* .useITwinDeveloperPortalApi */ .A)();
  const sessionService = (0,_hooks_useSessionService__WEBPACK_IMPORTED_MODULE_3__/* .useSessionService */ .v)();
  const {
    session,
    fetchSession
  } = (0,_providers_SessionProvider__WEBPACK_IMPORTED_MODULE_4__/* .useSession */ .kP)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  function handleClickNotNow() {
    closeModal();
    if (session?.profile.trialPromptShown !== true) iTwinDeveloperPortalApi.updateTrialPrompt().then(() => sessionService.getSession()).then(() => fetchSession());
  }

  function handleClickSignUp() {
    closeModal();
    iTwinDeveloperPortalApi.updateTrialPrompt().then(() => sessionService.getSession()).then(() => fetchSession()).then(() => router.push('/trial'));
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    isOpen: true,
    title: `Hi, ${givenName}!`,
    id: "trial-prompt-modal",
    closeOnExternalClick: false,
    isDismissible: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "main-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "trial-prompt-modal-text",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Text, {
            variant: "headline",
            className: "trial-prompt-modal-headline",
            children: "Sign up for a free 90 days Trial*"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Text, {
            variant: "subheading",
            className: "trial-prompt-modal-subheading",
            children: "Learn about the iTwin Platform at your own pace. No credit card needed."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Text, {
            variant: "leading",
            className: "trial-prompt-modal-leading",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Access all iTwin Platform services"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Includes 1 GB of storage"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Community Support"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Text, {
            variant: "body",
            className: "trial-prompt-modal-body-text",
            children: "*For non-commercial use only. Use your Trial to explore tutorials and learn more about the iTwin Platform."
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
          id: "trial-prompt-illustration",
          src: "/images/svg/trial-prompt-illustration.svg",
          alt: "trial-prompt-image"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.ModalButtonBar, {
        className: "trial-prompt-modal-button-bar",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Button, {
          id: "not-now-button",
          styleType: "borderless",
          onClick: handleClickNotNow,
          children: "Not now"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Button, {
          id: "sign-up-button",
          styleType: "high-visibility",
          onClick: handleClickSignUp,
          children: "Sign up"
        })]
      })]
    })
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (TrialPromptModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63737:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ APIDeprecationUpdateExample; }
/* harmony export */ });
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _links_ExternalLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(781);
/* harmony import */ var _UpdateContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92507);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function APIDeprecationUpdateExample() {
  const deprecatingAPI = "Projects";
  const endOfSupportDate = "Dec 31, 2000";
  const linkToDoc = "https://developer.bentley.com/apis/projects/overview/";
  const linkTitle = "projects"; // The defails Text is optional, allowing you to add additional info

  let details = null; // comment out the assignment if you don't want it in the modal

  details = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Text, {
    children: ["Projects API is being superseded by the ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
      children: "iTwins API"
    }), " and the ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
      children: "Access Control API"
    }), "."]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_UpdateContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Text, {
      variant: "leading",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("b", {
        children: "API/API version deprecation notice"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Text, {
      children: ["The ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("b", {
        children: deprecatingAPI
      }), " API is on a path to deprecation. The anticipated End of Support date is ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("b", {
        children: endOfSupportDate
      }), ".", details ?? details]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Text, {
      children: ["If you are using ", deprecatingAPI, " API in your products, please plan to migrate before the end of support. See ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_links_ExternalLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        href: linkToDoc,
        children: linkTitle
      }), " for more information on upgrading."]
    })]
  });
}

/***/ }),

/***/ 89685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AccountSettingsUpdate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61686);
/* harmony import */ var _links_ExternalLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(781);
/* harmony import */ var _ImportantUpdateBlockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22334);
/* harmony import */ var _UpdateContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92507);
/* harmony import */ var _ShowContactInformation_ShowContactInformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83961);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ShowContactInformation_ShowContactInformation__WEBPACK_IMPORTED_MODULE_7__]);
_ShowContactInformation_ShowContactInformation__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var SvgExample = function SvgExample(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("defs", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("clipPath", {
        id: "clip2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("use", {
          xlinkHref: "#path1"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("filter", {
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%",
        filterUnits: "objectBoundingBox",
        id: "filter3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("feColorMatrix", {
          values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
          in: "SourceGraphic"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("style", {
        children: [".cls-1", `{`, "fill:#000e25", `}`, ".cls-2", `{`, "fill:#fff", `}`, ".cls-3", `{`, "fill:#f18b12", `}`, ".cls-4", `{`, "fill:#85a9cf", `}`, ".cls-5", `{`, "fill:#91b2d4", `}`, ".cls-6", `{`, "fill:#333", `}`, ".cls-7", `{`, "fill:#acacac", `}`, ".cls-8", `{`, "fill:#c7ccd1", `}`, ".cls-9", `{`, "fill:#d9dbde", `}`, ".cls-10", `{`, "fill:#424242", `}`, ".cls-11", `{`, "fill:#2e383d", `}`]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        d: "M0 0h321v366.5H0Z",
        fillRule: "evenodd",
        fill: "#000",
        id: "path1"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("g", {
      transform: "matrix(.63551 0 0 .63551 0 .042)",
      clipPath: "url(#clip2)",
      filter: "url(#filter3)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-1",
        d: "M.5.5h320v55H.5z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-11",
        d: "M.5 55.51h320v.99H.5z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-1",
        d: "M.5 56.5h320v309H.5z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-2",
        d: "M98.5 55.5h222v265h-222z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-8",
        d: "M98.5 122.5h222v1h-222zM98.5 240.5h222v1h-222zM98.5 280.5h222v1h-222z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-9",
        d: "M181.68 26.28c0 1.01-.34 1.79-1.04 2.33-.69.54-1.68.82-2.96.82h-1.18v3.93h-1.16v-9.99h2.59c2.5 0 3.75.97 3.75 2.91Zm-5.17 2.15h1.04c1.03 0 1.78-.17 2.24-.5.46-.33.69-.87.69-1.6 0-.66-.22-1.15-.65-1.48-.43-.32-1.11-.49-2.02-.49h-1.3v4.06ZM187.02 25.73c.33 0 .63.03.89.08l-.16 1.05c-.31-.07-.58-.1-.82-.1-.61 0-1.12.25-1.56.74s-.65 1.11-.65 1.84v4.02h-1.13v-7.49h.94l.13 1.39h.05c.28-.49.61-.86 1-1.13.39-.26.82-.4 1.29-.4ZM189.22 23.83c0-.26.06-.45.19-.57.13-.12.29-.18.48-.18s.34.06.47.18c.13.12.2.31.2.57s-.07.45-.2.57c-.13.12-.29.19-.47.19-.19 0-.35-.06-.48-.19s-.19-.32-.19-.57Zm1.23 9.52h-1.13v-7.49h1.13v7.49ZM195.85 33.49c-1.08 0-1.92-.33-2.52-1-.59-.67-.89-1.61-.89-2.83s.3-2.22.91-2.91 1.46-1.03 2.58-1.03c.36 0 .72.04 1.08.12.36.08.64.17.85.27l-.35.96c-.25-.1-.52-.18-.82-.25-.3-.07-.56-.1-.79-.1-1.52 0-2.28.97-2.28 2.91 0 .92.19 1.63.56 2.12s.92.74 1.65.74c.62 0 1.26-.13 1.92-.4v1c-.5.26-1.13.39-1.89.39ZM199.43 23.83c0-.26.06-.45.19-.57.13-.12.29-.18.48-.18s.34.06.47.18c.13.12.2.31.2.57s-.07.45-.2.57c-.13.12-.29.19-.47.19s-.35-.06-.48-.19-.19-.32-.19-.57Zm1.23 9.52h-1.13v-7.49h1.13v7.49ZM208.19 33.36v-4.85c0-.61-.14-1.07-.42-1.37-.28-.3-.71-.45-1.31-.45-.78 0-1.36.21-1.72.64-.36.42-.55 1.12-.55 2.1v3.93h-1.13v-7.49h.92l.18 1.03h.05c.23-.37.56-.66.98-.86.42-.2.89-.3 1.4-.3.9 0 1.58.22 2.04.65.46.44.68 1.13.68 2.09v4.89h-1.13ZM217.79 25.87v.72l-1.39.16c.13.16.24.37.34.63.1.26.15.55.15.87 0 .73-.25 1.32-.75 1.76-.5.44-1.19.66-2.06.66-.22 0-.43-.02-.63-.05-.48.25-.72.58-.72.96 0 .21.08.36.25.46.17.1.46.15.87.15h1.33c.81 0 1.43.17 1.87.51s.65.84.65 1.49c0 .83-.33 1.46-1 1.9-.67.43-1.64.65-2.91.65-.98 0-1.73-.18-2.27-.55s-.8-.88-.8-1.54c0-.46.15-.85.44-1.18.29-.33.7-.56 1.23-.68-.19-.09-.35-.22-.48-.4s-.19-.39-.19-.64c0-.27.07-.51.22-.72.15-.21.38-.4.69-.59-.39-.16-.7-.43-.95-.81s-.37-.82-.37-1.31c0-.82.25-1.45.74-1.9.49-.44 1.19-.67 2.09-.67.39 0 .75.05 1.06.14h2.59Zm-5.97 8.75c0 .41.17.71.51.92s.83.31 1.47.31c.95 0 1.66-.14 2.12-.43.46-.29.69-.67.69-1.16 0-.41-.12-.69-.38-.84-.25-.16-.72-.24-1.42-.24h-1.36c-.52 0-.92.12-1.2.37s-.43.6-.43 1.06Zm.62-6.35c0 .52.15.92.45 1.19.3.27.71.4 1.24.4 1.11 0 1.66-.54 1.66-1.61s-.56-1.69-1.68-1.69c-.53 0-.94.14-1.23.43s-.43.71-.43 1.28Z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-10",
        d: "M110.88 86.37c-.49 0-.88-.07-1.16-.21v-1.13c.37.1.76.16 1.16.16.52 0 .91-.16 1.18-.47.27-.31.4-.76.4-1.35V71.95h1.33v11.31c0 .99-.25 1.76-.75 2.3s-1.22.82-2.16.82ZM124.01 79.07c0 1.4-.35 2.49-1.05 3.27s-1.67 1.18-2.91 1.18c-.77 0-1.45-.18-2.04-.54s-1.05-.88-1.38-1.55c-.32-.67-.48-1.46-.48-2.36 0-1.4.35-2.48 1.05-3.26.7-.78 1.67-1.17 2.91-1.17s2.15.4 2.86 1.2c.71.8 1.06 1.88 1.06 3.23Zm-6.52 0c0 1.09.22 1.93.66 2.5s1.08.86 1.93.86 1.49-.29 1.93-.86c.44-.57.66-1.41.66-2.5s-.22-1.92-.66-2.48c-.44-.57-1.09-.85-1.95-.85s-1.49.28-1.92.84c-.43.56-.65 1.39-.65 2.49ZM132.14 83.36v-5.54c0-.7-.16-1.22-.48-1.56-.32-.34-.82-.52-1.49-.52-.9 0-1.56.25-1.97.73s-.62 1.29-.62 2.41v4.48h-1.3V71.2h1.3v3.68c0 .44-.02.81-.06 1.1h.08c.25-.41.62-.74 1.09-.97.47-.24 1.01-.36 1.61-.36 1.05 0 1.83.25 2.36.75s.79 1.29.79 2.37v5.59h-1.3ZM141.96 83.36v-5.54c0-.7-.16-1.22-.48-1.56-.32-.34-.81-.52-1.49-.52-.9 0-1.55.24-1.97.73-.42.48-.62 1.28-.62 2.4v4.49h-1.3V74.8h1.05l.21 1.17h.06c.27-.42.64-.75 1.12-.98.48-.23 1.01-.35 1.6-.35 1.03 0 1.81.25 2.33.75s.78 1.29.78 2.39v5.59h-1.3ZM159.39 77.54c0 1.89-.51 3.33-1.54 4.32s-2.5 1.5-4.42 1.5h-3.16V71.94h3.5c1.78 0 3.16.49 4.14 1.48s1.48 2.36 1.48 4.12Zm-1.41.05c0-1.49-.37-2.61-1.12-3.37-.75-.75-1.86-1.13-3.33-1.13h-1.93v9.12h1.62c1.58 0 2.77-.39 3.57-1.17s1.2-1.93 1.2-3.46ZM169.13 79.07c0 1.4-.35 2.49-1.05 3.27s-1.67 1.18-2.91 1.18c-.77 0-1.45-.18-2.04-.54s-1.05-.88-1.38-1.55c-.32-.67-.48-1.46-.48-2.36 0-1.4.35-2.48 1.05-3.26.7-.78 1.67-1.17 2.91-1.17s2.15.4 2.86 1.2c.71.8 1.06 1.88 1.06 3.23Zm-6.52 0c0 1.09.22 1.93.66 2.5s1.08.86 1.93.86 1.49-.29 1.93-.86c.44-.57.66-1.41.66-2.5s-.22-1.92-.66-2.48c-.44-.57-1.09-.85-1.95-.85s-1.49.28-1.92.84c-.43.56-.65 1.39-.65 2.49ZM175.02 83.51c-1.27 0-2.26-.39-3-1.16-.73-.77-1.1-1.84-1.1-3.21s.34-2.48 1.02-3.29 1.59-1.22 2.74-1.22c1.07 0 1.92.35 2.55 1.06s.94 1.64.94 2.79v.82h-5.9c.03 1 .28 1.77.76 2.29s1.16.78 2.04.78c.92 0 1.83-.19 2.73-.58v1.16c-.46.2-.89.34-1.3.43-.41.09-.9.13-1.48.13Zm-.35-7.79c-.69 0-1.24.22-1.64.67-.41.45-.65 1.07-.72 1.86h4.48c0-.82-.18-1.44-.55-1.88-.36-.43-.88-.65-1.56-.65Z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-7",
        d: "M111.26 107.72c-.43 0-.78-.06-1.05-.17v-.92c.31.09.62.14.93.14.36 0 .62-.1.78-.29.17-.19.25-.49.25-.88v-8.72h1.13v8.64c0 1.48-.68 2.21-2.04 2.21Zm.81-12.89c0-.26.06-.45.19-.57.13-.12.29-.18.48-.18s.34.06.47.18.2.31.2.57-.07.45-.2.57c-.13.12-.29.19-.47.19-.19 0-.35-.06-.48-.19s-.19-.32-.19-.57ZM115.55 103.63c0-.31.07-.54.21-.69.14-.16.34-.24.6-.24s.47.08.62.24c.15.16.22.39.22.69s-.08.52-.23.68-.36.24-.62.24c-.23 0-.42-.07-.58-.22-.15-.14-.23-.38-.23-.71ZM124.54 103.35h-.06c-.52.76-1.31 1.14-2.35 1.14-.98 0-1.74-.33-2.29-1s-.82-1.62-.82-2.86.27-2.19.82-2.88 1.31-1.03 2.28-1.03 1.8.37 2.34 1.11h.09l-.05-.54-.03-.53v-3.05h1.13v10.64h-.92l-.15-1Zm-2.27.19c.77 0 1.34-.21 1.69-.63.35-.42.52-1.1.52-2.04v-.24c0-1.06-.18-1.82-.53-2.27-.35-.45-.92-.68-1.69-.68-.67 0-1.17.26-1.53.78-.35.52-.53 1.25-.53 2.19s.18 1.68.53 2.17.87.73 1.54.73ZM134.48 100.6c0 1.22-.31 2.17-.92 2.86-.62.69-1.47 1.03-2.55 1.03-.67 0-1.26-.16-1.78-.47s-.92-.77-1.2-1.35-.42-1.28-.42-2.06c0-1.22.31-2.17.92-2.85.61-.68 1.46-1.02 2.54-1.02s1.88.35 2.5 1.05.93 1.64.93 2.83Zm-5.71 0c0 .96.19 1.69.57 2.19s.95.75 1.69.75 1.31-.25 1.69-.75c.39-.5.58-1.23.58-2.19s-.19-1.68-.58-2.17c-.39-.49-.95-.74-1.71-.74s-1.3.24-1.68.73-.57 1.21-.57 2.18ZM139.64 104.49c-1.11 0-1.98-.34-2.62-1.01s-.96-1.61-.96-2.81.3-2.17.89-2.88 1.39-1.07 2.4-1.07c.94 0 1.68.31 2.23.93.55.62.82 1.43.82 2.44v.72h-5.16c.02.88.25 1.55.67 2s1.01.68 1.78.68c.81 0 1.6-.17 2.39-.51v1.01c-.4.17-.78.3-1.14.37-.36.08-.79.11-1.3.11Zm-.31-6.82c-.6 0-1.08.2-1.44.59s-.57.93-.63 1.63h3.92c0-.72-.16-1.26-.48-1.64-.32-.38-.78-.57-1.37-.57ZM154.88 99.37c0 .65-.1 1.24-.3 1.78-.2.54-.48.96-.85 1.25-.36.3-.78.44-1.26.44-.39 0-.72-.12-.99-.36a1.43 1.43 0 0 1-.48-.91h-.05c-.18.4-.44.71-.78.93s-.74.33-1.21.33c-.68 0-1.22-.23-1.6-.7-.39-.47-.58-1.1-.58-1.9 0-.93.27-1.69.81-2.27.54-.58 1.24-.87 2.12-.87.31 0 .66.03 1.05.08.39.06.74.14 1.06.24l-.17 3.21v.15c0 .81.3 1.22.91 1.22.42 0 .75-.25 1.01-.73.26-.49.39-1.13.39-1.91 0-.83-.17-1.55-.51-2.17-.34-.62-.82-1.1-1.44-1.43-.62-.34-1.34-.5-2.14-.5-1.02 0-1.9.21-2.65.63-.75.42-1.33 1.02-1.72 1.8-.4.78-.6 1.69-.6 2.71 0 1.39.37 2.46 1.1 3.21.73.75 1.79 1.12 3.17 1.12.96 0 1.95-.2 2.98-.59v.91c-.88.38-1.87.57-2.98.57-1.65 0-2.94-.46-3.85-1.36-.91-.91-1.37-2.18-1.37-3.81 0-1.18.24-2.24.73-3.17.49-.92 1.18-1.64 2.09-2.15.9-.51 1.94-.76 3.1-.76.98 0 1.85.21 2.61.62.76.41 1.35 1 1.77 1.76.42.76.62 1.63.62 2.62Zm-7.07.9c0 1.16.45 1.74 1.33 1.74.94 0 1.46-.71 1.54-2.14l.1-1.78a4.07 4.07 0 0 0-1.07-.14c-.59 0-1.06.21-1.39.62s-.5.98-.5 1.71ZM160.4 96.74c.98 0 1.75.34 2.29 1.01.54.67.82 1.62.82 2.85s-.27 2.19-.82 2.87c-.55.68-1.31 1.02-2.29 1.02-.49 0-.93-.09-1.34-.27-.4-.18-.74-.46-1.01-.83h-.08l-.24.96h-.81V93.71h1.13v2.58c0 .58-.02 1.1-.05 1.56h.05c.53-.75 1.31-1.12 2.35-1.12Zm-.16.95c-.78 0-1.33.22-1.68.67-.34.44-.51 1.19-.51 2.25s.17 1.81.53 2.26c.35.45.91.68 1.69.68.7 0 1.22-.25 1.56-.76.34-.51.51-1.24.51-2.19s-.17-1.7-.51-2.18-.87-.72-1.59-.72ZM168.66 104.49c-1.11 0-1.98-.34-2.62-1.01s-.96-1.61-.96-2.81.3-2.17.89-2.88 1.39-1.07 2.4-1.07c.94 0 1.68.31 2.23.93.55.62.82 1.43.82 2.44v.72h-5.16c.02.88.24 1.55.67 2s1.02.68 1.78.68c.81 0 1.6-.17 2.39-.51v1.01c-.4.17-.78.3-1.14.37-.36.08-.79.11-1.29.11Zm-.31-6.82c-.6 0-1.08.2-1.44.59s-.57.93-.63 1.63h3.92c0-.72-.16-1.26-.48-1.64-.32-.38-.77-.57-1.37-.57ZM178.47 104.36v-4.85c0-.61-.14-1.07-.42-1.37-.28-.3-.71-.45-1.3-.45-.78 0-1.36.21-1.72.64-.37.42-.55 1.12-.55 2.1v3.93h-1.13v-7.49h.92l.19 1.03h.05c.23-.37.56-.66.98-.86.42-.2.89-.3 1.4-.3.9 0 1.58.22 2.04.65.46.44.68 1.13.68 2.09v4.89h-1.13ZM184.36 103.56c.2 0 .39-.01.58-.04.19-.03.33-.06.44-.09v.87c-.12.06-.3.11-.54.15-.24.04-.46.06-.65.06-1.45 0-2.17-.76-2.17-2.29v-4.46h-1.07v-.55l1.07-.47.48-1.6h.66v1.74h2.17v.88h-2.17v4.41c0 .45.11.8.32 1.04.21.24.51.36.88.36ZM188.02 104.36h-1.13V93.72h1.13v10.64ZM193.59 104.49c-1.11 0-1.98-.34-2.62-1.01s-.96-1.61-.96-2.81.3-2.17.89-2.88 1.39-1.07 2.4-1.07c.94 0 1.68.31 2.23.93.55.62.82 1.43.82 2.44v.72h-5.16c.02.88.25 1.55.67 2s1.01.68 1.78.68c.81 0 1.6-.17 2.39-.51v1.01c-.4.17-.78.3-1.14.37-.36.08-.79.11-1.3.11Zm-.31-6.82c-.6 0-1.08.2-1.44.59s-.57.93-.63 1.63h3.92c0-.72-.16-1.26-.48-1.64-.32-.38-.78-.57-1.37-.57ZM197.09 96.87h1.22l1.64 4.27c.36.98.58 1.68.67 2.11h.05c.06-.23.18-.63.37-1.19.19-.56.81-2.29 1.86-5.19h1.22l-3.22 8.53c-.32.84-.69 1.44-1.12 1.79-.43.35-.95.53-1.57.53-.35 0-.69-.04-1.03-.12v-.91c.25.05.53.08.84.08.78 0 1.33-.44 1.67-1.31l.42-1.07-3.02-7.53ZM205.17 103.63c0-.31.07-.54.21-.69.14-.16.34-.24.6-.24s.47.08.62.24c.15.16.22.39.22.69s-.08.52-.23.68-.36.24-.62.24c-.23 0-.42-.07-.58-.22-.15-.14-.23-.38-.23-.71ZM212.05 104.49c-1.08 0-1.92-.33-2.52-1-.59-.67-.89-1.61-.89-2.83s.3-2.22.91-2.91 1.46-1.03 2.58-1.03c.36 0 .72.04 1.08.12.36.08.64.17.85.27l-.35.96c-.25-.1-.52-.18-.82-.25-.3-.07-.56-.1-.79-.1-1.52 0-2.28.97-2.28 2.91 0 .92.19 1.63.56 2.12s.92.74 1.65.74c.62 0 1.26-.13 1.92-.4v1c-.5.26-1.13.39-1.89.39ZM222.19 100.6c0 1.22-.31 2.17-.92 2.86-.62.69-1.47 1.03-2.55 1.03-.67 0-1.26-.16-1.78-.47s-.92-.77-1.2-1.35c-.28-.59-.42-1.28-.42-2.06 0-1.22.3-2.17.92-2.85.61-.68 1.46-1.02 2.54-1.02s1.88.35 2.5 1.05.93 1.64.93 2.83Zm-5.71 0c0 .96.19 1.69.57 2.19s.95.75 1.69.75 1.31-.25 1.69-.75c.39-.5.58-1.23.58-2.19s-.19-1.68-.58-2.17c-.39-.49-.95-.74-1.71-.74s-1.3.24-1.68.73c-.38.49-.57 1.21-.57 2.18ZM233.73 104.36v-4.87c0-.6-.13-1.04-.38-1.34-.25-.3-.65-.45-1.19-.45-.71 0-1.23.2-1.56.61-.34.41-.51 1.03-.51 1.87v4.18h-1.13v-4.87c0-.6-.13-1.04-.38-1.34-.26-.3-.65-.45-1.2-.45-.71 0-1.23.21-1.56.64-.33.43-.5 1.12-.5 2.09v3.93h-1.13v-7.49h.92l.19 1.03h.05c.21-.36.52-.65.91-.85s.83-.31 1.31-.31c1.17 0 1.94.42 2.3 1.27h.05c.22-.39.55-.7.97-.93s.91-.34 1.45-.34c.85 0 1.48.22 1.9.65.42.44.63 1.13.63 2.09v4.89h-1.13Z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-10",
        d: "M119.68 142.28c0 1.01-.35 1.79-1.04 2.33-.69.54-1.68.82-2.96.82h-1.18v3.93h-1.16v-9.99h2.59c2.5 0 3.75.97 3.75 2.91Zm-5.17 2.15h1.05c1.03 0 1.77-.17 2.24-.5s.69-.87.69-1.6c0-.66-.22-1.15-.65-1.48s-1.11-.49-2.02-.49h-1.3v4.06ZM125.02 141.73c.33 0 .63.03.9.08l-.16 1.05c-.31-.07-.58-.1-.82-.1-.61 0-1.12.25-1.56.74s-.65 1.11-.65 1.84v4.02h-1.13v-7.49h.94l.13 1.39h.05c.28-.49.61-.86 1-1.13s.82-.4 1.29-.4ZM133.78 145.6c0 1.22-.31 2.17-.92 2.86-.62.69-1.47 1.03-2.55 1.03-.67 0-1.26-.16-1.78-.47s-.92-.77-1.2-1.35-.42-1.28-.42-2.06c0-1.22.31-2.17.92-2.85.61-.68 1.46-1.02 2.54-1.02s1.88.35 2.5 1.05.93 1.64.93 2.83Zm-5.71 0c0 .96.19 1.69.57 2.19s.95.75 1.69.75 1.31-.25 1.69-.75c.39-.5.58-1.23.58-2.19s-.19-1.68-.58-2.17c-.39-.49-.95-.74-1.71-.74s-1.3.24-1.68.73-.57 1.21-.57 2.18ZM139.15 142.75h-1.91v6.61h-1.13v-6.61h-1.34v-.51l1.34-.41v-.42c0-1.84.8-2.76 2.41-2.76.4 0 .86.08 1.39.24l-.29.91c-.44-.14-.81-.21-1.12-.21-.43 0-.75.14-.95.43-.21.28-.31.74-.31 1.37v.49h1.91v.88Zm1.27-2.91c0-.26.06-.45.19-.57.13-.12.29-.18.48-.18s.34.06.47.18c.13.12.2.31.2.57s-.07.45-.2.57c-.13.12-.29.19-.47.19s-.35-.06-.48-.19-.19-.32-.19-.57Zm1.23 9.52h-1.13v-7.49h1.13v7.49ZM145.19 149.36h-1.13v-10.64h1.13v10.64ZM150.76 149.49c-1.11 0-1.98-.34-2.62-1.01s-.96-1.61-.96-2.81.3-2.17.89-2.88 1.39-1.07 2.4-1.07c.94 0 1.68.31 2.23.93.55.62.82 1.43.82 2.44v.72h-5.16c.02.88.24 1.55.67 2s1.02.68 1.78.68c.81 0 1.6-.17 2.39-.51v1.01c-.4.17-.78.3-1.14.37-.36.08-.79.11-1.29.11Zm-.31-6.82c-.6 0-1.08.2-1.44.59s-.57.93-.63 1.63h3.92c0-.72-.16-1.26-.48-1.64-.32-.38-.77-.57-1.37-.57ZM117.77 187.36l-3.39-8.86h-.05c.06.7.1 1.54.1 2.5v6.36h-1.07v-9.99h1.75l3.17 8.24h.05l3.19-8.24h1.74v9.99h-1.16v-6.44c0-.74.03-1.54.1-2.41h-.05l-3.42 8.85h-.94ZM124.62 179.87h1.22l1.64 4.27c.36.98.58 1.68.67 2.11h.05c.06-.23.18-.63.37-1.19.19-.56.81-2.29 1.86-5.19h1.22l-3.22 8.53c-.32.84-.69 1.44-1.12 1.79-.43.35-.95.53-1.57.53-.35 0-.69-.04-1.03-.12v-.91c.25.05.53.08.84.08.78 0 1.34-.44 1.67-1.31l.42-1.07-3.02-7.53ZM142.96 187.36l-1.24-3.18h-4.01l-1.23 3.18h-1.18l3.95-10.04h.98l3.93 10.04h-1.2Zm-1.61-4.22-1.16-3.1c-.15-.39-.3-.87-.46-1.44-.1.44-.24.92-.43 1.44l-1.18 3.1h3.23ZM148.85 187.49c-.49 0-.93-.09-1.34-.27-.4-.18-.74-.46-1.01-.83h-.08c.05.44.08.85.08 1.24v3.08h-1.13v-10.86h.92l.16 1.03h.05c.29-.41.63-.71 1.02-.89.39-.18.83-.27 1.33-.27.99 0 1.76.34 2.3 1.02s.81 1.63.81 2.86-.27 2.19-.82 2.87c-.55.68-1.31 1.02-2.29 1.02Zm-.16-6.8c-.77 0-1.32.21-1.66.64s-.52 1.1-.53 2.02v.25c0 1.05.17 1.81.53 2.26.35.45.91.68 1.69.68.65 0 1.15-.26 1.52-.79s.55-1.25.55-2.17-.18-1.65-.55-2.15c-.37-.5-.88-.75-1.55-.75ZM157.43 187.49c-.49 0-.93-.09-1.34-.27-.4-.18-.74-.46-1.02-.83h-.08c.05.44.08.85.08 1.24v3.08h-1.13v-10.86h.92l.16 1.03h.05c.29-.41.63-.71 1.02-.89.39-.18.83-.27 1.33-.27.99 0 1.76.34 2.3 1.02s.81 1.63.81 2.86-.28 2.19-.82 2.87c-.55.68-1.31 1.02-2.29 1.02Zm-.16-6.8c-.77 0-1.32.21-1.66.64s-.52 1.1-.53 2.02v.25c0 1.05.18 1.81.53 2.26.35.45.91.68 1.69.68.65 0 1.15-.26 1.52-.79s.55-1.25.55-2.17-.18-1.65-.55-2.15c-.37-.5-.88-.75-1.55-.75ZM167.35 185.31c0 .7-.26 1.24-.78 1.61s-1.25.57-2.19.57c-.99 0-1.77-.16-2.32-.47v-1.05c.36.18.75.33 1.16.43s.81.16 1.19.16c.59 0 1.05-.09 1.37-.28.32-.19.48-.48.48-.86 0-.29-.13-.54-.38-.75-.25-.21-.75-.45-1.48-.73-.7-.26-1.19-.49-1.49-.68-.29-.19-.51-.41-.66-.66s-.21-.54-.21-.88c0-.61.25-1.09.74-1.45.5-.35 1.18-.53 2.04-.53.81 0 1.59.16 2.37.49l-.4.92c-.75-.31-1.43-.46-2.04-.46-.54 0-.94.08-1.22.25s-.41.4-.41.7c0 .2.05.37.15.51s.27.28.5.4c.23.13.67.31 1.31.55.89.32 1.49.65 1.8.98s.47.74.47 1.24ZM117.77 225.36l-3.39-8.86h-.05c.06.7.1 1.54.1 2.5v6.36h-1.07v-9.99h1.75l3.17 8.24h.05l3.19-8.24h1.74v9.99h-1.16v-6.44c0-.74.03-1.54.1-2.41h-.05l-3.42 8.85h-.94ZM124.62 217.87h1.22l1.64 4.27c.36.98.58 1.68.67 2.11h.05c.06-.23.18-.63.37-1.19.19-.56.81-2.29 1.86-5.19h1.22l-3.22 8.53c-.32.84-.69 1.44-1.12 1.79-.43.35-.95.53-1.57.53-.35 0-.69-.04-1.03-.12v-.91c.25.05.53.08.84.08.78 0 1.34-.44 1.67-1.31l.42-1.07-3.02-7.53ZM136.41 215.83c0-.26.06-.45.19-.57.13-.12.29-.18.48-.18s.34.06.47.18c.13.12.2.31.2.57s-.07.45-.2.57c-.13.12-.29.19-.47.19-.19 0-.35-.06-.48-.19s-.19-.32-.19-.57Zm1.23 9.52h-1.13v-7.49h1.13v7.49ZM144.64 225.36l-3.39-8.86h-.05c.06.7.1 1.54.1 2.5v6.36h-1.07v-9.99h1.75l3.17 8.24h.05l3.19-8.24h1.74v9.99h-1.16v-6.44c0-.74.03-1.54.1-2.41h-.05l-3.42 8.85h-.94ZM159.15 221.6c0 1.22-.31 2.17-.92 2.86-.62.69-1.47 1.03-2.55 1.03-.67 0-1.26-.16-1.78-.47s-.92-.77-1.2-1.35c-.28-.59-.42-1.28-.42-2.06 0-1.22.3-2.17.92-2.85.61-.68 1.46-1.02 2.54-1.02s1.88.35 2.5 1.05.93 1.64.93 2.83Zm-5.71 0c0 .96.19 1.69.57 2.19s.95.75 1.69.75 1.31-.25 1.69-.75c.39-.5.58-1.23.58-2.19s-.19-1.68-.58-2.17c-.39-.49-.95-.74-1.71-.74s-1.3.24-1.68.73c-.38.49-.57 1.21-.57 2.18ZM166.24 224.35h-.06c-.52.76-1.31 1.14-2.35 1.14-.98 0-1.74-.33-2.29-1s-.82-1.62-.82-2.86.27-2.19.82-2.88 1.31-1.03 2.28-1.03 1.8.37 2.34 1.11h.09l-.05-.54-.03-.53v-3.05h1.13v10.64h-.92l-.15-1Zm-2.27.19c.77 0 1.34-.21 1.68-.63.35-.42.52-1.1.52-2.04v-.24c0-1.06-.18-1.82-.53-2.27-.35-.45-.92-.68-1.69-.68-.67 0-1.18.26-1.53.78-.35.52-.53 1.25-.53 2.19s.18 1.68.53 2.17c.35.49.87.73 1.54.73ZM172.88 225.49c-1.11 0-1.98-.34-2.62-1.01s-.96-1.61-.96-2.81.3-2.17.89-2.88 1.39-1.07 2.4-1.07c.94 0 1.68.31 2.23.93.55.62.82 1.43.82 2.44v.72h-5.16c.02.88.24 1.55.67 2s1.02.68 1.78.68c.81 0 1.6-.17 2.39-.51v1.01c-.4.17-.78.3-1.14.37-.36.08-.79.11-1.29.11Zm-.31-6.82c-.6 0-1.08.2-1.44.59s-.57.93-.63 1.63h3.92c0-.72-.16-1.26-.48-1.64-.32-.38-.77-.57-1.37-.57ZM178.71 225.36h-1.13v-10.64h1.13v10.64ZM185.95 223.31c0 .7-.26 1.24-.78 1.61s-1.25.57-2.19.57c-.99 0-1.77-.16-2.32-.47v-1.05c.36.18.75.33 1.16.43s.81.16 1.19.16c.59 0 1.05-.09 1.37-.28.32-.19.48-.48.48-.86 0-.29-.13-.54-.38-.75-.25-.21-.75-.45-1.48-.73-.7-.26-1.19-.49-1.49-.68-.29-.19-.51-.41-.66-.66s-.21-.54-.21-.88c0-.61.25-1.09.74-1.45.5-.35 1.18-.53 2.04-.53.81 0 1.59.16 2.37.49l-.4.92c-.75-.31-1.43-.46-2.04-.46-.54 0-.94.08-1.22.25s-.41.4-.41.7c0 .2.05.37.15.51s.27.28.5.4c.23.13.67.31 1.31.55.89.32 1.49.65 1.8.98s.47.74.47 1.24ZM143.47 265.1l-1.24-3.18h-4.01l-1.23 3.18h-1.18l3.95-10.04h.98l3.93 10.04h-1.2Zm-1.61-4.22-1.16-3.1c-.15-.39-.31-.87-.46-1.44-.1.44-.24.92-.43 1.44l-1.18 3.1h3.23ZM148.87 265.24c-1.08 0-1.92-.33-2.52-1-.59-.67-.89-1.61-.89-2.83s.3-2.22.91-2.91 1.46-1.03 2.58-1.03c.36 0 .72.04 1.08.12.36.08.64.17.85.27l-.35.96c-.25-.1-.52-.18-.82-.25-.3-.07-.56-.1-.79-.1-1.52 0-2.28.97-2.28 2.91 0 .92.19 1.63.56 2.12s.92.74 1.65.74c.62 0 1.27-.13 1.92-.4v1c-.5.26-1.13.39-1.89.39ZM155.54 265.24c-1.08 0-1.92-.33-2.52-1-.59-.67-.89-1.61-.89-2.83s.3-2.22.91-2.91 1.46-1.03 2.58-1.03c.36 0 .72.04 1.08.12.36.08.64.17.85.27l-.35.96c-.25-.1-.52-.18-.82-.25-.3-.07-.56-.1-.79-.1-1.52 0-2.28.97-2.28 2.91 0 .92.19 1.63.56 2.12s.92.74 1.65.74c.62 0 1.26-.13 1.92-.4v1c-.5.26-1.13.39-1.89.39ZM165.67 261.35c0 1.22-.31 2.17-.92 2.86-.62.69-1.47 1.03-2.55 1.03-.67 0-1.26-.16-1.78-.47s-.92-.77-1.2-1.35c-.28-.59-.42-1.28-.42-2.06 0-1.22.3-2.17.92-2.85.61-.68 1.46-1.02 2.54-1.02s1.88.35 2.5 1.05.93 1.64.93 2.83Zm-5.71 0c0 .96.19 1.69.57 2.19s.95.75 1.69.75 1.31-.25 1.69-.75c.39-.5.58-1.23.58-2.19s-.19-1.68-.58-2.17c-.39-.49-.95-.74-1.71-.74s-1.3.24-1.68.73c-.38.49-.57 1.21-.57 2.18ZM168.73 257.61v4.86c0 .61.14 1.07.42 1.37.28.3.71.45 1.31.45.78 0 1.36-.21 1.72-.64s.54-1.13.54-2.1v-3.94h1.13v7.49h-.94l-.16-1h-.06c-.23.37-.55.65-.97.85s-.88.29-1.41.29c-.91 0-1.59-.22-2.05-.65s-.68-1.13-.68-2.08v-4.9h1.15ZM181.38 265.1v-4.85c0-.61-.14-1.07-.42-1.37-.28-.3-.71-.45-1.31-.45-.78 0-1.36.21-1.72.64-.36.42-.55 1.12-.55 2.1v3.93h-1.13v-7.49h.92l.18 1.03h.05c.23-.37.56-.66.98-.86.42-.2.89-.3 1.4-.3.9 0 1.58.22 2.04.65.46.44.68 1.13.68 2.09v4.89h-1.13ZM187.27 264.3c.2 0 .39-.01.58-.04.19-.03.34-.06.45-.09v.87c-.12.06-.3.11-.54.15-.24.04-.45.06-.65.06-1.45 0-2.17-.76-2.17-2.29v-4.46h-1.07v-.55l1.07-.47.48-1.6h.66v1.74h2.17v.88h-2.17v4.41c0 .45.11.8.32 1.04.21.24.51.36.88.36ZM198.26 263.06c0 .7-.26 1.24-.78 1.61s-1.25.57-2.19.57c-.99 0-1.77-.16-2.32-.47v-1.05c.36.18.75.33 1.16.43s.81.16 1.19.16c.59 0 1.05-.09 1.37-.28.32-.19.48-.48.48-.86 0-.29-.13-.54-.38-.75-.25-.21-.75-.45-1.48-.73-.7-.26-1.19-.49-1.49-.68-.29-.19-.51-.41-.66-.66s-.22-.54-.22-.88c0-.61.25-1.09.75-1.45.5-.35 1.18-.53 2.04-.53.81 0 1.6.16 2.37.49l-.4.92c-.75-.31-1.43-.46-2.04-.46-.54 0-.94.08-1.22.25s-.41.4-.41.7c0 .2.05.37.15.51s.27.28.5.4c.23.13.67.31 1.31.55.89.32 1.49.65 1.8.98s.47.74.47 1.24ZM203.27 265.24c-1.11 0-1.98-.34-2.62-1.01s-.96-1.61-.96-2.81.3-2.17.89-2.88 1.39-1.07 2.4-1.07c.94 0 1.68.31 2.23.93.55.62.82 1.43.82 2.44v.72h-5.16c.02.88.25 1.55.67 2s1.01.68 1.78.68c.81 0 1.6-.17 2.39-.51v1.01c-.4.17-.78.3-1.14.37-.36.08-.79.11-1.3.11Zm-.31-6.82c-.6 0-1.08.2-1.44.59s-.57.93-.63 1.63h3.92c0-.72-.16-1.26-.48-1.64-.32-.38-.78-.57-1.37-.57ZM210.38 264.3c.2 0 .39-.01.58-.04.19-.03.33-.06.44-.09v.87c-.12.06-.3.11-.54.15-.24.04-.46.06-.65.06-1.45 0-2.17-.76-2.17-2.29v-4.46h-1.07v-.55l1.07-.47.48-1.6h.66v1.74h2.17v.88h-2.17v4.41c0 .45.11.8.32 1.04.21.24.51.36.88.36ZM215.32 264.3c.2 0 .39-.01.58-.04.19-.03.34-.06.45-.09v.87c-.12.06-.3.11-.54.15-.24.04-.45.06-.65.06-1.45 0-2.17-.76-2.17-2.29v-4.46h-1.07v-.55l1.07-.47.48-1.6h.66v1.74h2.17v.88h-2.17v4.41c0 .45.11.8.32 1.04.21.24.51.36.88.36ZM217.75 255.58c0-.26.06-.45.19-.57.13-.12.29-.18.48-.18s.34.06.47.18c.13.12.2.31.2.57s-.07.45-.2.57c-.13.12-.29.19-.47.19s-.35-.06-.48-.19-.19-.32-.19-.57Zm1.23 9.52h-1.13v-7.49h1.13v7.49ZM226.51 265.1v-4.85c0-.61-.14-1.07-.42-1.37-.28-.3-.71-.45-1.31-.45-.78 0-1.36.21-1.72.64-.36.42-.55 1.12-.55 2.1v3.93h-1.13v-7.49h.92l.18 1.03h.05c.23-.37.56-.66.98-.86.42-.2.89-.3 1.4-.3.9 0 1.58.22 2.04.65.46.44.68 1.13.68 2.09v4.89h-1.13ZM236.11 257.61v.72l-1.39.16c.13.16.24.37.34.63.1.26.15.55.15.87 0 .73-.25 1.32-.75 1.76-.5.44-1.19.66-2.06.66-.22 0-.43-.02-.63-.05-.48.25-.72.58-.72.96 0 .21.08.36.25.46.17.1.46.15.87.15h1.33c.81 0 1.43.17 1.87.51s.65.84.65 1.49c0 .83-.33 1.46-1 1.9-.67.43-1.64.65-2.91.65-.98 0-1.73-.18-2.27-.55s-.8-.88-.8-1.54c0-.46.15-.85.44-1.18.29-.33.7-.56 1.23-.68-.19-.09-.35-.22-.48-.4s-.19-.39-.19-.64c0-.27.07-.51.22-.72.15-.21.38-.4.69-.59-.39-.16-.7-.43-.95-.81s-.37-.82-.37-1.31c0-.82.25-1.45.74-1.9.49-.44 1.19-.67 2.09-.67.39 0 .75.05 1.06.14h2.59Zm-5.97 8.75c0 .41.17.71.51.92s.83.31 1.47.31c.95 0 1.66-.14 2.12-.43.46-.29.69-.67.69-1.16 0-.41-.12-.69-.38-.84-.25-.16-.72-.24-1.42-.24h-1.36c-.52 0-.92.12-1.2.37s-.43.6-.43 1.06Zm.62-6.35c0 .52.15.92.45 1.19.3.27.71.4 1.24.4 1.11 0 1.66-.54 1.66-1.61s-.56-1.69-1.68-1.69c-.53 0-.94.14-1.23.43s-.43.71-.43 1.28ZM242.48 263.06c0 .7-.26 1.24-.78 1.61s-1.25.57-2.19.57c-.99 0-1.77-.16-2.32-.47v-1.05c.36.18.75.33 1.16.43s.81.16 1.19.16c.59 0 1.05-.09 1.37-.28.32-.19.48-.48.48-.86 0-.29-.13-.54-.38-.75-.25-.21-.75-.45-1.48-.73-.7-.26-1.19-.49-1.49-.68-.29-.19-.51-.41-.66-.66s-.21-.54-.21-.88c0-.61.25-1.09.74-1.45.5-.35 1.18-.53 2.04-.53.81 0 1.59.16 2.37.49l-.4.92c-.75-.31-1.43-.46-2.04-.46-.54 0-.94.08-1.22.25s-.41.4-.41.7c0 .2.05.37.15.51s.27.28.5.4c.23.13.67.31 1.31.55.89.32 1.49.65 1.8.98s.47.74.47 1.24ZM118.83 304.7c0 .88-.32 1.57-.96 2.06s-1.5.74-2.6.74c-1.19 0-2.1-.15-2.73-.46v-1.12c.41.17.86.31 1.34.41s.96.15 1.44.15c.77 0 1.36-.15 1.75-.44.39-.29.59-.7.59-1.23 0-.35-.07-.63-.21-.85-.14-.22-.37-.43-.7-.61s-.82-.4-1.49-.64c-.93-.33-1.59-.73-1.99-1.18s-.6-1.05-.6-1.78c0-.77.29-1.38.87-1.84s1.34-.68 2.3-.68 1.91.18 2.74.55l-.36 1.01c-.82-.35-1.63-.52-2.41-.52-.62 0-1.1.13-1.44.4s-.52.63-.52 1.1c0 .35.06.63.19.85.13.22.34.42.65.61.3.19.77.39 1.39.61 1.05.37 1.77.77 2.16 1.2s.59.98.59 1.67ZM120.6 297.83c0-.26.06-.45.19-.57.13-.12.29-.18.48-.18s.34.06.47.18.2.31.2.57-.07.45-.2.57c-.13.12-.29.19-.47.19-.19 0-.35-.06-.48-.19s-.19-.32-.19-.57Zm1.23 9.52h-1.13v-7.49h1.13v7.49ZM130.37 299.87v.72l-1.39.16c.13.16.24.37.34.63.1.26.15.55.15.87 0 .73-.25 1.32-.75 1.76s-1.19.66-2.06.66c-.22 0-.43-.02-.63-.05-.48.25-.72.58-.72.96 0 .21.08.36.25.46.17.1.46.15.87.15h1.33c.81 0 1.43.17 1.87.51s.65.84.65 1.49c0 .83-.33 1.46-1 1.9-.67.43-1.64.65-2.91.65-.98 0-1.74-.18-2.27-.55s-.8-.88-.8-1.54c0-.46.15-.85.44-1.18s.7-.56 1.23-.68c-.19-.09-.35-.22-.48-.4s-.19-.39-.19-.64c0-.27.07-.51.22-.72s.38-.4.69-.59c-.39-.16-.7-.43-.95-.81s-.37-.82-.37-1.31c0-.82.25-1.45.74-1.9.49-.44 1.19-.67 2.09-.67.39 0 .75.05 1.06.14h2.59Zm-5.97 8.75c0 .41.17.71.51.92s.83.31 1.47.31c.95 0 1.66-.14 2.12-.43.46-.29.69-.67.69-1.16 0-.41-.13-.69-.38-.84-.25-.16-.72-.24-1.42-.24h-1.36c-.52 0-.92.12-1.2.37s-.43.6-.43 1.06Zm.62-6.35c0 .52.15.92.44 1.19s.71.4 1.24.4c1.11 0 1.66-.54 1.66-1.61s-.56-1.69-1.68-1.69c-.53 0-.94.14-1.23.43s-.43.71-.43 1.28ZM137.04 307.36v-4.85c0-.61-.14-1.07-.42-1.37-.28-.3-.71-.45-1.31-.45-.78 0-1.36.21-1.72.64s-.55 1.12-.55 2.1v3.93h-1.13v-7.49h.92l.18 1.03h.05c.23-.37.56-.66.98-.86.42-.2.89-.3 1.4-.3.9 0 1.58.22 2.04.65.46.44.68 1.13.68 2.09v4.89h-1.13ZM152.99 302.35c0 1.6-.4 2.86-1.21 3.77s-1.93 1.37-3.37 1.37-2.61-.45-3.41-1.35c-.8-.9-1.2-2.17-1.2-3.81s.4-2.89 1.2-3.78c.8-.89 1.94-1.34 3.42-1.34s2.56.46 3.36 1.37 1.21 2.17 1.21 3.77Zm-7.96 0c0 1.35.29 2.38.87 3.08.58.7 1.41 1.05 2.51 1.05s1.94-.35 2.51-1.05c.56-.7.85-1.72.85-3.08s-.28-2.36-.84-3.06c-.56-.69-1.4-1.04-2.5-1.04s-1.95.35-2.53 1.05c-.58.7-.87 1.72-.87 3.05ZM156.11 299.87v4.86c0 .61.14 1.07.42 1.37.28.3.71.45 1.3.45.78 0 1.36-.21 1.72-.64s.54-1.13.54-2.1v-3.94h1.13v7.49h-.94l-.16-1h-.06c-.23.37-.55.65-.97.85s-.88.29-1.41.29c-.91 0-1.59-.22-2.05-.65s-.68-1.13-.68-2.08v-4.9h1.15ZM166.06 306.56c.2 0 .39-.01.58-.04.19-.03.34-.06.45-.09v.87c-.12.06-.3.11-.54.15-.24.04-.45.06-.65.06-1.45 0-2.17-.76-2.17-2.29v-4.46h-1.07v-.55l1.07-.47.48-1.6h.66v1.74h2.17v.88h-2.17v4.41c0 .45.11.8.32 1.04.21.24.51.36.88.36Z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-9",
        d: "M77.98 30.7c0 .88-.32 1.57-.96 2.06s-1.5.74-2.6.74c-1.19 0-2.1-.15-2.73-.46v-1.12c.41.17.86.31 1.34.41s.96.15 1.44.15c.77 0 1.36-.15 1.75-.44.39-.29.59-.7.59-1.23 0-.35-.07-.63-.21-.85-.14-.22-.37-.43-.7-.61s-.82-.4-1.49-.64c-.93-.33-1.59-.73-1.99-1.18s-.6-1.05-.6-1.78c0-.77.29-1.38.87-1.84s1.34-.68 2.3-.68 1.91.18 2.74.55l-.36 1.01c-.82-.35-1.63-.52-2.41-.52-.62 0-1.1.13-1.44.4s-.52.63-.52 1.1c0 .35.06.63.19.85.13.22.34.42.65.61.3.19.77.39 1.39.61 1.05.37 1.77.77 2.16 1.2s.59.98.59 1.67ZM80.92 25.87v4.86c0 .61.14 1.07.42 1.37s.71.45 1.31.45c.78 0 1.36-.21 1.72-.64s.54-1.13.54-2.1v-3.94h1.13v7.49h-.94l-.16-1h-.06c-.23.37-.55.65-.97.85s-.88.29-1.41.29c-.91 0-1.59-.22-2.05-.65s-.68-1.13-.68-2.08v-4.9h1.15ZM91.94 33.49c-.49 0-.93-.09-1.34-.27-.4-.18-.74-.46-1.02-.83h-.08c.05.44.08.85.08 1.24v3.08h-1.13V25.85h.92l.16 1.03h.05c.29-.41.63-.71 1.02-.89s.83-.27 1.33-.27c.99 0 1.76.34 2.3 1.02s.81 1.63.81 2.86-.27 2.19-.82 2.87c-.55.68-1.31 1.02-2.29 1.02Zm-.16-6.8c-.77 0-1.32.21-1.66.64s-.52 1.1-.53 2.02v.25c0 1.05.18 1.81.53 2.26.35.45.91.68 1.69.68.65 0 1.15-.26 1.52-.79s.55-1.25.55-2.17-.18-1.65-.55-2.15c-.37-.5-.88-.75-1.55-.75ZM100.51 33.49c-.49 0-.93-.09-1.34-.27-.4-.18-.74-.46-1.02-.83h-.08c.05.44.08.85.08 1.24v3.08h-1.13V25.85h.92l.16 1.03h.05c.29-.41.63-.71 1.02-.89s.83-.27 1.33-.27c.99 0 1.76.34 2.3 1.02s.81 1.63.81 2.86-.27 2.19-.82 2.87c-.55.68-1.31 1.02-2.29 1.02Zm-.16-6.8c-.77 0-1.32.21-1.66.64s-.52 1.1-.53 2.02v.25c0 1.05.18 1.81.53 2.26.35.45.91.68 1.69.68.65 0 1.15-.26 1.52-.79s.55-1.25.55-2.17-.18-1.65-.55-2.15c-.37-.5-.88-.75-1.55-.75ZM112.07 29.6c0 1.22-.31 2.17-.92 2.86-.62.69-1.47 1.03-2.55 1.03-.67 0-1.26-.16-1.78-.47s-.92-.77-1.2-1.35-.42-1.28-.42-2.06c0-1.22.31-2.17.92-2.85.61-.68 1.46-1.02 2.54-1.02s1.88.35 2.5 1.05.93 1.64.93 2.83Zm-5.71 0c0 .96.19 1.69.57 2.19s.95.75 1.69.75 1.31-.25 1.69-.75c.39-.5.58-1.23.58-2.19s-.19-1.68-.58-2.17c-.39-.49-.95-.74-1.71-.74s-1.3.24-1.68.73-.57 1.21-.57 2.18ZM117.48 25.73c.33 0 .63.03.9.08l-.16 1.05c-.31-.07-.58-.1-.82-.1-.61 0-1.12.25-1.56.74s-.65 1.11-.65 1.84v4.02h-1.13v-7.49h.94l.13 1.39h.05c.28-.49.61-.86 1-1.13s.82-.4 1.29-.4ZM122.2 32.56c.2 0 .39-.01.58-.04.19-.03.33-.06.44-.09v.87c-.12.06-.3.11-.54.15-.24.04-.45.06-.65.06-1.45 0-2.17-.76-2.17-2.29v-4.46h-1.07v-.55l1.07-.47.48-1.6h.66v1.74h2.17v.88H121v4.41c0 .45.11.8.32 1.04s.51.36.88.36ZM17.34 23.36h2.82c1.33 0 2.29.2 2.88.59s.89 1.02.89 1.88c0 .59-.17 1.08-.5 1.47-.33.38-.81.63-1.45.75v.07c1.52.26 2.28 1.06 2.28 2.39 0 .89-.3 1.59-.91 2.09s-1.45.75-2.53.75h-3.49v-9.99Zm1.16 4.28h1.91c.82 0 1.41-.13 1.77-.39.36-.26.54-.69.54-1.3 0-.56-.2-.96-.6-1.21-.4-.25-1.04-.37-1.91-.37H18.5v3.27Zm0 .98v3.74h2.08c.81 0 1.41-.16 1.82-.47.41-.31.61-.8.61-1.47 0-.62-.21-1.08-.63-1.37s-1.05-.44-1.9-.44h-1.99ZM27.38 33.36h-1.13V22.72h1.13v10.64ZM36.25 29.6c0 1.22-.31 2.17-.92 2.86-.62.69-1.47 1.03-2.55 1.03-.67 0-1.26-.16-1.78-.47s-.92-.77-1.2-1.35-.42-1.28-.42-2.06c0-1.22.31-2.17.92-2.85.61-.68 1.46-1.02 2.54-1.02s1.88.35 2.5 1.05.93 1.64.93 2.83Zm-5.71 0c0 .96.19 1.69.57 2.19s.95.75 1.69.75 1.31-.25 1.69-.75c.39-.5.58-1.23.58-2.19s-.19-1.68-.58-2.17c-.39-.49-.95-.74-1.71-.74s-1.3.24-1.68.73-.57 1.21-.57 2.18ZM44.37 25.87v.72l-1.39.16c.13.16.24.37.34.63.1.26.15.55.15.87 0 .73-.25 1.32-.75 1.76s-1.19.66-2.06.66c-.22 0-.43-.02-.63-.05-.48.25-.72.58-.72.96 0 .21.08.36.25.46.17.1.46.15.87.15h1.33c.81 0 1.43.17 1.87.51s.65.84.65 1.49c0 .83-.33 1.46-1 1.9-.67.43-1.64.65-2.91.65-.98 0-1.74-.18-2.27-.55s-.8-.88-.8-1.54c0-.46.15-.85.44-1.18s.7-.56 1.23-.68c-.19-.09-.35-.22-.48-.4s-.19-.39-.19-.64c0-.27.07-.51.22-.72s.38-.4.69-.59c-.39-.16-.7-.43-.95-.81s-.37-.82-.37-1.31c0-.82.25-1.45.74-1.9.49-.44 1.19-.67 2.09-.67.39 0 .75.05 1.06.14h2.59Zm-5.97 8.75c0 .41.17.71.51.92s.83.31 1.47.31c.95 0 1.66-.14 2.12-.43.46-.29.69-.67.69-1.16 0-.41-.13-.69-.38-.84-.25-.16-.72-.24-1.42-.24h-1.36c-.52 0-.92.12-1.2.37s-.43.6-.43 1.06Zm.62-6.35c0 .52.15.92.44 1.19s.71.4 1.24.4c1.11 0 1.66-.54 1.66-1.61s-.56-1.69-1.68-1.69c-.53 0-.94.14-1.23.43s-.43.71-.43 1.28ZM248.5 32.5c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6c0 1.6-.62 3.11-1.76 4.24a5.97 5.97 0 0 1-4.24 1.76Zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.07 0 2.07-.42 2.83-1.17.76-.76 1.17-1.76 1.17-2.83 0-2.21-1.79-4-4-4Z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-9",
        d: "m251.338 30.743 1.414-1.414 5.466 5.466-1.414 1.414zM140.5 26.5l3 3 2.99-3h-5.99z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("circle", {
        className: "cls-4",
        cx: "295.5",
        cy: "28.5",
        r: "16"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-5",
        d: "M295.5 45c-9.1 0-16.5-7.4-16.5-16.5S286.4 12 295.5 12 312 19.4 312 28.5 304.6 45 295.5 45Zm0-32c-8.55 0-15.5 6.95-15.5 15.5S286.95 44 295.5 44 311 37.05 311 28.5 304.05 13 295.5 13Z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-2",
        d: "M288.91 36.29c-.51 0-.94-.07-1.28-.2v-1.57c.44.11.82.16 1.14.16 1.02 0 1.53-.65 1.53-1.94V21.67h1.88v11.01c0 1.17-.28 2.06-.83 2.68s-1.37.93-2.43.93ZM304.42 27.28c0 1.89-.52 3.33-1.57 4.32s-2.55 1.5-4.52 1.5h-3.2V21.68h3.53c1.82 0 3.23.49 4.24 1.47s1.52 2.36 1.52 4.13Zm-1.97.06c0-2.73-1.28-4.1-3.84-4.1h-1.62v8.29h1.33c2.75 0 4.12-1.4 4.12-4.19Z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-6",
        d: "M115.01 256.46c0-2.63 1.3-3.46 2.93-3.46s2.93.82 2.93 3.46c.13 1.76-1.17 3.3-2.93 3.46a3.231 3.231 0 0 1-2.93-3.46Zm3.44 8.54c0-1.8.98-3.46 2.55-4.33l-.7-.36h-.16a3.7 3.7 0 0 1-2.18.81c-.8-.03-1.58-.31-2.21-.81h-.16l-2.28 1.19c-.14.06-.26.17-.33.32l-1.46 3.24c-.08.2-.08.43 0 .63.15.21.39.33.65.32h6.39c-.07-.33-.1-.66-.1-1Zm9 .71v-1.43l-1.1-.22c-.05-.15-.12-.3-.19-.45l.62-.93-1.01-1.01-.93.62c-.15-.08-.3-.14-.46-.19l-.22-1.1h-1.43l-.22 1.1c-.16.05-.31.11-.46.19l-.93-.62-1.01 1.01.62.93c-.07.15-.14.3-.19.46l-1.09.22v1.43l1.1.22c.05.16.11.31.19.45l-.62.94 1.01 1.01.94-.63c.14.08.29.14.44.19l.23 1.1h1.42l.23-1.11c.15-.05.3-.11.44-.18l.94.62 1.01-1.01-.62-.94c.07-.14.13-.3.18-.45l1.11-.22Zm-4 .81c-.84 0-1.53-.68-1.53-1.52s.68-1.53 1.52-1.53 1.53.68 1.53 1.52c0 .85-.68 1.53-1.52 1.53Z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-9",
        d: "M321 366.5H0V0h321v366.5Zm-320-1h319V1H1v364.5Z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-3",
        d: "M12 257.64h66.32v8H12z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
        className: "cls-3",
        d: "m51.82 294.36-5.46-5.86 28.89-26.85-28.89-26.86 5.46-5.86L87 261.65l-35.18 32.71z"
      })]
    })]
  }));
};

SvgExample.defaultProps = {
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 204 233",
  xmlns: "http://www.w3.org/2000/svg"
};



function AccountSettingsUpdate() {
  const {
    0: contentToShowIndex,
    1: setContentToShowIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const content = [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_UpdateContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__.Text, {
      children: ["We have recently introduced ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("b", {
        children: "role-based permissions"
      }), " to help you better manage your iTwin Platform subscription."]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__.Text, {
      children: "These roles allow your organization to control who can manage your subscription and applications, enabling you to prevent unnecessary costs and disruption of your application."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ImportantUpdateBlockquote__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      type: "informational",
      image: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(SvgExample, {}),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__.Text, {
        variant: "leading",
        children: "For account administrators"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: "Role management is found on the Account Settings page in the menu under your profile button."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: "To learn more about these changes, see a complete list of the roles available, and learn how to assign roles, please visit:"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_links_ExternalLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_2__/* .ROLES_AND_PERMISSIONS */ .QR,
        children: "Roles and permissions"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ImportantUpdateBlockquote__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      type: "informational",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__.Text, {
        variant: "leading",
        children: "For non-administrators"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: ["If you do not have access to this iTwin Platform subscription,", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("b", {
          children: " please contact a Subscription Manager"
        }), " or any Admin or Co-Admin for your Bentley account."]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          className: "link",
          onClick: () => {
            setContentToShowIndex(1);
            dialogRef?.current?.scrollIntoView();
          },
          children: "Show contact information"
        })
      })]
    })]
  }, "main"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ShowContactInformation_ShowContactInformation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    onClose: () => {
      setContentToShowIndex(0);
      dialogRef?.current?.scrollIntoView();
    }
  }, "admins")];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: "account-settings-update-container",
    ref: dialogRef,
    children: content[contentToShowIndex]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ AccountAdminList; }
});

// EXTERNAL MODULE: ./src/links/SimpleLink.tsx
var SimpleLink = __webpack_require__(73351);
// EXTERNAL MODULE: consume shared module (default) itwinui-v2@^2.12.0 (singleton) (fallback: ./node_modules/itwinui-v2/esm/index.js) (eager)
var index_js_eager_ = __webpack_require__(6227);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/UpdatePopUp/Content/AccountSettingsUpdate/ShowContactInformation/AccountAdminList/AccountAdminListEmptyState.tsx



function AccountAdminListEmptyState() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "account-admins empty",
    children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
      children: "No account administrators found."
    })
  });
}
;// CONCATENATED MODULE: ./src/components/UpdatePopUp/Content/AccountSettingsUpdate/ShowContactInformation/AccountAdminList/AccountAdminList.tsx




function AccountAdminList({
  listOfAdmins
}) {
  if (listOfAdmins.length === 0) {
    return /*#__PURE__*/jsx_runtime_.jsx(AccountAdminListEmptyState, {});
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "account-admins loaded",
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: listOfAdmins.sort((a, b) => a.localeCompare(b)).map(i => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(SimpleLink/* default */.Z, {
          href: `mailto:${i}`,
          target: "_blank",
          children: i
        })
      }, i))
    })
  });
}

/***/ }),

/***/ 70269:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AccountAdminListLoading; }
/* harmony export */ });
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function AccountAdminListLoading() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "account-admins loading",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.ProgressRadial, {
      indeterminate: true
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Text, {
      children: "Loading account administrators"
    })]
  });
}

/***/ }),

/***/ 83961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ShowContactInformation; }
/* harmony export */ });
/* harmony import */ var _UpdateContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92507);
/* harmony import */ var _ShowContactInformationContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79119);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ShowContactInformationContent__WEBPACK_IMPORTED_MODULE_1__]);
_ShowContactInformationContent__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ShowContactInformation(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_UpdateContainer__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    onClose: props.onClose,
    title: "Account administrators for your organization",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ShowContactInformationContent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ShowContactInformationContent; }
/* harmony export */ });
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20949);
/* harmony import */ var _AccountAdminList_AccountAdminList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28149);
/* harmony import */ var _AccountAdminList_AccountAdminListLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70269);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_2__]);
_hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ShowContactInformationContent() {
  const api = (0,_hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_2__/* .useITwinDeveloperPortalApi */ .A)();
  const {
    0: listOfAdmins,
    1: setListOfAdmins
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loadingAdmins,
    1: setLoadingAdmins
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (listOfAdmins.length === 0) {
      setLoadingAdmins(true);
      api.getAllOrganizationAdminsEmails().then(resp => {
        setListOfAdmins(resp);
      }).catch(err => {
        itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.toaster.negative(`Unable to get account administrators: ${err.response?.data ?? err}`);
      }).finally(() => setLoadingAdmins(false));
    }
  }, [api, listOfAdmins]);

  if (loadingAdmins) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_AccountAdminList_AccountAdminListLoading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_AccountAdminList_AccountAdminList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    listOfAdmins: listOfAdmins
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70657:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AppDetailsV2Update; }
/* harmony export */ });
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UpdateContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92507);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function AppDetailsV2Update() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_UpdateContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Text, {
      variant: "leading",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("b", {
        children: "Introducing new Application Management pages"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Text, {
      children: "To simplify management of your iTwin Platform apps, we have redesigned the Register an app and App Details pages to provide a similar experience."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Text, {
      children: "The new Application Management experience is now available. Use the toggle in the upper right corner of the page to move between the old and new pages."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "app-details-v2-image",
      src: "/images/app-details-v2-update.png",
      alt: "Application Management update" // Original image size is 1151x815
      ,
      width: 1151,
      height: 815
    })]
  });
}

/***/ }),

/***/ 22334:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ImportantUpdateBlockquote; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["className", "image", "children", "type"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ImportantUpdateBlockquote(_ref) {
  let {
    className,
    image,
    children,
    type = 'default'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(itwinui_v2__WEBPACK_IMPORTED_MODULE_1__.Blockquote, _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['important-update-blockquote', className]),
    "data-type": type
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "content-text",
      children: children
    }), image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "content-image",
      children: image
    })]
  }));
}

/***/ }),

/***/ 44674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ LoggedInUserUpdatePopUp; }
/* harmony export */ });
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20949);
/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8302);
/* harmony import */ var _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53164);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51974);
/* harmony import */ var _UpdatePopUp_UpdateList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88503);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_3__, _hooks_useSession__WEBPACK_IMPORTED_MODULE_4__, _UpdatePopUp_UpdateList__WEBPACK_IMPORTED_MODULE_7__]);
([_hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_3__, _hooks_useSession__WEBPACK_IMPORTED_MODULE_4__, _UpdatePopUp_UpdateList__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function LoggedInUserUpdatePopUp() {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: updateList,
    1: setUpdateList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    session,
    fetchSession
  } = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_4__/* .useSession */ .k)();
  const flags = (0,_stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_5__/* .useLaunchDarklyFlags */ .L)();
  const portalApi = (0,_hooks_useITwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_3__/* .useITwinDeveloperPortalApi */ .A)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Session is not cleared, until sign out finishes,
    // so we check if user is loaded too.
    if (!session) {
      setIsOpen(false);
      return;
    }

    const updates = _UpdatePopUp_UpdateList__WEBPACK_IMPORTED_MODULE_7__/* .UpdateList.getFilteredUpdateList */ .B.getFilteredUpdateList(session.profile.lastSeenUpdateDateTime, session.subscription, flags);
    setUpdateList(updates);

    if (updates.length > 0) {
      setIsOpen(true);
    }
  }, [session, flags]);

  const closeHandler = () => {
    setIsOpen(false);
    portalApi.updatePopUpSeenDateTime().then(() => fetchSession());
  };

  if (updateList.length === 0) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {});
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    theme: "light",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Dialog, {
      id: "important-update-modal",
      isOpen: isOpen,
      trapFocus: true,
      isDismissible: true,
      preventDocumentScroll: true,
      closeOnExternalClick: false,
      onClose: closeHandler,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Dialog.Backdrop, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Dialog.Main, {
        className: "important-update",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Dialog.TitleBar, {
          className: "dialog-title-bar",
          titleText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__.SvgInfoCircular, {
              className: "dialog-title-icon"
            }), "Important update"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Dialog.Content, {
          id: "important-update-modal-content",
          className: "dialog-content-wrapper",
          children: [updateList, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Dialog.ButtonBar, {
            className: "button-bar",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Button, {
              styleType: "default",
              onClick: closeHandler,
              children: "Close"
            })
          })]
        })]
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92507:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ UpdateContainer; }
});

// EXTERNAL MODULE: consume shared module (default) itwinui-v2@^2.12.0 (singleton) (fallback: ./node_modules/itwinui-v2/esm/index.js) (eager)
var index_js_eager_ = __webpack_require__(6227);
// EXTERNAL MODULE: ./node_modules/@itwin/itwinui-icons-react/cjs/index.js
var cjs = __webpack_require__(56296);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/UpdatePopUp/UpdatePopUpHeading.tsx





function UpdatePopUpHeading({
  title,
  onClose
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "dialog-heading",
    children: [onClose && /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      id: "back-button",
      className: "link",
      onClick: onClose,
      children: [/*#__PURE__*/jsx_runtime_.jsx(cjs.SvgChevronLeft, {
        className: "chevron-back"
      }), /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
        children: "Back"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
      variant: "leading",
      children: title
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/UpdatePopUp/UpdateContainer.tsx





function UpdateContainer({
  title,
  onClose,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [title && /*#__PURE__*/jsx_runtime_.jsx(UpdatePopUpHeading, {
      onClose: onClose,
      title: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dialog-content",
      children: children
    })]
  });
}

/***/ }),

/***/ 88503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": function() { return /* binding */ UpdateList; }
/* harmony export */ });
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_flags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46415);
/* harmony import */ var _Content_AccountSettingsUpdate_AccountSettingsUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89685);
/* harmony import */ var _Content_AppDetailsV2Update_AppDetailsV2Update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70657);
/* harmony import */ var _Content_APIDeprecationUpdate_APIDeprecationUpdateExample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63737);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Content_AccountSettingsUpdate_AccountSettingsUpdate__WEBPACK_IMPORTED_MODULE_1__]);
_Content_AccountSettingsUpdate_AccountSettingsUpdate__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






class UpdateList {
  static getUpdateList() {
    return [{
      content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Content_AppDetailsV2Update_AppDetailsV2Update__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}, "appDetailsV2"),
      startDisplayDate: new Date('2023-12-17T10:00:00+00:00'),
      endDisplayDate: new Date('2024-12-17T00:00:00+00:00'),
      renderFunc: ({
        subscription,
        flags
      }) => subscription && flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_APP_DETAILS_V2 */ .u7]
    }, {
      content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Content_AccountSettingsUpdate_AccountSettingsUpdate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}, "accountSettingsInfo"),
      startDisplayDate: new Date('2023-06-06T10:00:00+00:00'),
      endDisplayDate: new Date('2024-06-07T00:00:00+00:00'),
      renderFunc: ({
        subscription,
        flags
      }) => subscription && subscription.tier !== 'Trial' && flags && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_5__/* .FLAG_ACCOUNT_SETTINGS */ .j8]
    }, {
      content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Content_APIDeprecationUpdate_APIDeprecationUpdateExample__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}, "ApiDeprecationInfoExample"),
      startDisplayDate: new Date('2000-06-06T10:00:00+00:00'),
      // when endDisplayDate is in the past, we can remove this content from the list
      endDisplayDate: new Date('2001-06-07T00:00:00+00:00'),
      // The modal content would only be shown to internal users
      // To make the modal public for everyone, 
      // remove renderFunc or remove the filter: subscription.tier == 'Internal'
      renderFunc: ({
        subscription
      }) => subscription && subscription.tier == 'Internal'
    }];
  }

  static getFilteredUpdateList(lastSeenUpdateDateTime, subscription, flags) {
    const dateNow = new Date();
    const dateNowTime = dateNow.getTime();
    const userLastSeen = lastSeenUpdateDateTime ? new Date(lastSeenUpdateDateTime) : undefined;
    return this.interleaveDividers(this.getUpdateList().filter(update => {
      const updateValid = dateNowTime < update.endDisplayDate.getTime() && dateNowTime > update.startDisplayDate.getTime();
      const updateSeen = userLastSeen && update.startDisplayDate.getTime() < userLastSeen.getTime();
      const customFiltering = update.renderFunc ? update.renderFunc({
        subscription: subscription,
        flags
      }) : true;
      return updateValid && !updateSeen && customFiltering;
    }).map(update => update.content));
  }

  static interleaveDividers(updates) {
    return updates.flatMap((update, index) => [update, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Divider, {}, index)]).slice(0, -1);
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ UpdatePopUp; }
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61686);
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45829);
/* harmony import */ var _LoggedInUserUpdatePopUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44674);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_2__, _LoggedInUserUpdatePopUp__WEBPACK_IMPORTED_MODULE_3__]);
([_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_2__, _LoggedInUserUpdatePopUp__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function UpdatePopUp() {
  const {
    isLoggedIn
  } = (0,_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_2__/* .useAuthService */ .m)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  if (!isLoggedIn || _constants_paths__WEBPACK_IMPORTED_MODULE_1__/* .NO_UPDATE_POPUP_ROUTES.some */ .fy.some(url => router.pathname === url)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {});
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_LoggedInUserUpdatePopUp__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63825:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Backdrop */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Backdrop(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: props.className,
    style: {
      display: props.show ? 'block' : 'none'
    },
    onClick: props.onClick,
    children: props.children
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (Backdrop);

/***/ }),

/***/ 41412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* unused harmony export ESPortalHeader */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_headerItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51888);
/* harmony import */ var _components_icons_BentleySystemsIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44971);
/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8302);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99301);
/* harmony import */ var _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53164);
/* harmony import */ var _HeaderButtons_UserIconButton_UserIconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24632);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_headerItems__WEBPACK_IMPORTED_MODULE_3__, _hooks_useSession__WEBPACK_IMPORTED_MODULE_5__, _services_authService__WEBPACK_IMPORTED_MODULE_6__, _HeaderButtons_UserIconButton_UserIconButton__WEBPACK_IMPORTED_MODULE_8__]);
([_common_headerItems__WEBPACK_IMPORTED_MODULE_3__, _hooks_useSession__WEBPACK_IMPORTED_MODULE_5__, _services_authService__WEBPACK_IMPORTED_MODULE_6__, _HeaderButtons_UserIconButton_UserIconButton__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function ESPortalHeader({
  className
}) {
  const flags = (0,_stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_7__/* .useLaunchDarklyFlags */ .L)();
  const {
    session,
    isInitializing
  } = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_5__/* .useSession */ .k)();
  const data = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => _common_headerItems__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getFilteredHeaderItems */ .Z.getFilteredHeaderItems(flags, session).filter(val => val.isInUserProfile).filter(({
    title
  }) => title !== 'Account settings' && title !== 'My iModels' && title !== 'My iTwins'), [flags, session]);
  const {
    isLoggingIn,
    isLoggedIn,
    signin
  } = (0,_services_authService__WEBPACK_IMPORTED_MODULE_6__/* .useAuthService */ .m)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['portal-header', className]),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.Header, {
        className: "page-header",
        appLogo: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.HeaderLogo, {
          logo: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_icons_BentleySystemsIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("strong", {
            children: "Enterprise Systems"
          })
        }),
        userIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: isLoggingIn || isInitializing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.ProgressRadial, {
            indeterminate: true,
            className: "desktop-header-signin-spinner"
          }) : isLoggedIn ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_HeaderButtons_UserIconButton_UserIconButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            className: "desktop-header-button",
            userIconMenuItemData: data
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.HeaderButton, {
            className: "desktop-header-button",
            name: "Sign In",
            onClick: () => {
              signin();
            }
          })
        })
      })
    })
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (ESPortalHeader);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41877:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const HamburgerButton = ({
  name,
  isActive = false,
  onClick,
  startIcon,
  endIcon
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.HeaderButton, {
    className: "hamburger-button",
    name: name,
    isActive: isActive,
    onClick: onClick,
    startIcon: startIcon,
    endIcon: endIcon
  }, name);
};

/* harmony default export */ __webpack_exports__["Z"] = (HamburgerButton);

/***/ }),

/***/ 18999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73351);
/* harmony import */ var _HamburgerButton_HamburgerButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41877);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const HamburgerLinkButton = ({
  to,
  title,
  isActiveFn,
  startIcon,
  endIcon
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const isActive = !isActiveFn ? router.pathname.startsWith(to) : isActiveFn(router.pathname);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    href: to,
    className: "hamburger-nav-link",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_HamburgerButton_HamburgerButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      name: title,
      isActive: isActive,
      startIcon: startIcon,
      endIcon: endIcon
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (HamburgerLinkButton);

/***/ }),

/***/ 88992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* unused harmony export HamburgerMenu */
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99301);
/* harmony import */ var _backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63825);
/* harmony import */ var _LoggedInHamburgerMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95896);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_authService__WEBPACK_IMPORTED_MODULE_3__, _LoggedInHamburgerMenu__WEBPACK_IMPORTED_MODULE_5__]);
([_services_authService__WEBPACK_IMPORTED_MODULE_3__, _LoggedInHamburgerMenu__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function HamburgerMenu({
  menuItems,
  isOpen,
  setIsOpen
}) {
  const {
    isLoggedIn
  } = (0,_services_authService__WEBPACK_IMPORTED_MODULE_3__/* .useAuthService */ .m)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    show: isOpen,
    onClick: () => setIsOpen(!isOpen),
    className: "header-menu-backdrop",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "collapsible-menu",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: isLoggedIn ? 'user-info-area' : 'collapsible-menu-close-area',
        children: [isLoggedIn && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_LoggedInHamburgerMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
          className: "header-close-button",
          styleType: "borderless",
          size: "small",
          onClick: () => setIsOpen(!isOpen),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__.SvgClose, {})
        })]
      }), menuItems]
    })
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (HamburgerMenu);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* unused harmony export LoggedInHamburgerMenu */
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23315);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51477);
/* harmony import */ var _Avatars_UserIcon_UserIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores__WEBPACK_IMPORTED_MODULE_2__]);
_stores__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function LoggedInHamburgerMenu() {
  const {
    firstName,
    lastName,
    email
  } = (0,_stores__WEBPACK_IMPORTED_MODULE_2__/* .useUser */ .a)();
  const fullName = _utils__WEBPACK_IMPORTED_MODULE_3__/* .Utils.getUserFullName */ .c.getUserFullName(firstName, lastName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "side-menu-user-info-section",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Avatars_UserIcon_UserIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      firstName: firstName,
      lastName: lastName,
      size: "large"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "user-info",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Text, {
        variant: "leading",
        id: "full-user-name",
        children: fullName
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Text, {
        isMuted: true,
        id: "user-email",
        children: email
      })]
    })]
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (LoggedInHamburgerMenu);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* unused harmony export PortalHeader */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_headerItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51888);
/* harmony import */ var _constants_flags__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46415);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61686);
/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8302);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99301);
/* harmony import */ var _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53164);
/* harmony import */ var _Search_FullPageSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12349);
/* harmony import */ var _HamburgerMenu_HamburgerButton_HamburgerButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41877);
/* harmony import */ var _HamburgerMenu_HamburgerLinkButton_HamburgerLinkButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18999);
/* harmony import */ var _HamburgerMenu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88992);
/* harmony import */ var _HeaderButtons_AppLogo_AppLogo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(84953);
/* harmony import */ var _HeaderButtons_HeaderDropdownButton_HeaderDropdownButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35202);
/* harmony import */ var _HeaderButtons_HeaderLinkButton_HeaderLinkButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33265);
/* harmony import */ var _HeaderButtons_SearchHeaderButton_SearchHeaderButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29763);
/* harmony import */ var _HeaderButtons_SimpleLinkButton_SimpleLinkButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80600);
/* harmony import */ var _HeaderButtons_UserIconButton_UserIconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(24632);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_headerItems__WEBPACK_IMPORTED_MODULE_4__, _hooks_useSession__WEBPACK_IMPORTED_MODULE_6__, _services_authService__WEBPACK_IMPORTED_MODULE_7__, _Search_FullPageSearch__WEBPACK_IMPORTED_MODULE_9__, _HamburgerMenu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_12__, _HeaderButtons_UserIconButton_UserIconButton__WEBPACK_IMPORTED_MODULE_18__]);
([_common_headerItems__WEBPACK_IMPORTED_MODULE_4__, _hooks_useSession__WEBPACK_IMPORTED_MODULE_6__, _services_authService__WEBPACK_IMPORTED_MODULE_7__, _Search_FullPageSearch__WEBPACK_IMPORTED_MODULE_9__, _HamburgerMenu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_12__, _HeaderButtons_UserIconButton_UserIconButton__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























function PortalHeader({
  className
}) {
  const flags = (0,_stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_8__/* .useLaunchDarklyFlags */ .L)();
  const {
    session,
    isInitializing
  } = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_6__/* .useSession */ .k)();
  const {
    isLoggingIn,
    isLoggedIn,
    signout,
    signin
  } = (0,_services_authService__WEBPACK_IMPORTED_MODULE_7__/* .useAuthService */ .m)();
  const data = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => _common_headerItems__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getFilteredHeaderItems */ .Z.getFilteredHeaderItems(flags, session).filter(headerItem => headerItem.allowAnonymous || isLoggedIn), [flags, session, isLoggedIn]);
  const {
    0: showFullPageSearch,
    1: setShowFullPageSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: showMenu,
    1: setShowMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const showFreeTrialButton = flags[_constants_flags__WEBPACK_IMPORTED_MODULE_20__/* .FLAG_TRIAL_FORM */ .DY] && !isLoggingIn && !isInitializing && (!isLoggedIn || !!session && !session.subscription);
  const headerButtons = [...data.filter(headerItem => !headerItem.isInUserProfile && !headerItem.isInLearningPage).map(val => {
    if (val.isDropdown && val.values) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HeaderButtons_HeaderDropdownButton_HeaderDropdownButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        className: "desktop-header-button",
        title: val.title,
        menuItems: val.values
      }, val.title);
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HeaderButtons_HeaderLinkButton_HeaderLinkButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        className: "desktop-header-button",
        href: val.href,
        title: val.title,
        isActiveFn: val.isActiveFn,
        startIcon: val.startIcon,
        endIcon: val.endIcon,
        addDividerBefore: val.addDividerBefore
      }, val.title);
    }
  }), flags[_constants_flags__WEBPACK_IMPORTED_MODULE_20__/* .FLAG_ALGOLIA_SEARCH */ .qr] ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HeaderButtons_SearchHeaderButton_SearchHeaderButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z //Note: Displaying search only for large screens until search modal will have small screen support
  , {
    className: "desktop-header-button",
    onClick: () => setShowFullPageSearch(true)
  }, "search-button") : undefined, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
    id: "mobile-header-button",
    styleType: "borderless",
    onClick: () => setShowMenu(!showMenu),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_3__.SvgMenu, {})
  }, "mobile-header-button")];
  const hamburgerMenuButtons = [];

  if (isLoggedIn) {
    hamburgerMenuButtons.push( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.MenuDivider, {
      className: "hamburger-menu-divider"
    }));
    hamburgerMenuButtons.push(...[...data.filter(x => !x.allowAnonymous).flatMap(val => {
      if (val.isDropdown) {
        return (val.values || []).map(inner => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HamburgerMenu_HamburgerLinkButton_HamburgerLinkButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          to: inner.href,
          title: inner.title
        }, inner.title));
      } else {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HamburgerMenu_HamburgerLinkButton_HamburgerLinkButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          to: val.href,
          title: val.title,
          isActiveFn: val.isActiveFn,
          startIcon: val.startIcon
        }, val.title);
      }
    })]);
    hamburgerMenuButtons.push( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.MenuDivider, {
      className: "hamburger-menu-divider"
    }));
  }

  if (showFreeTrialButton) {
    hamburgerMenuButtons.push( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HamburgerMenu_HamburgerLinkButton_HamburgerLinkButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      to: _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .TRIAL */ .Kh,
      title: "Free Trial"
    }, "trial"));
  }

  hamburgerMenuButtons.push(...data.filter(x => x.allowAnonymous).flatMap(val => {
    if (val.isDropdown) {
      return (val.values || []).map(inner => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HamburgerMenu_HamburgerLinkButton_HamburgerLinkButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        to: inner.href,
        title: inner.title,
        endIcon: inner.endIcon
      }, inner.title));
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HamburgerMenu_HamburgerLinkButton_HamburgerLinkButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        to: val.href,
        title: val.title,
        isActiveFn: val.isActiveFn,
        startIcon: val.startIcon,
        endIcon: val.endIcon
      }, val.title);
    }
  }), isLoggingIn || isInitializing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.ProgressRadial, {
    indeterminate: true,
    style: {
      margin: '16px 24px'
    }
  }) : isLoggedIn ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HamburgerMenu_HamburgerButton_HamburgerButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    name: "Sign Out",
    onClick: () => {
      signout();
    }
  }, "Sign Out") : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HamburgerMenu_HamburgerButton_HamburgerButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    name: "Sign In",
    onClick: () => {
      signin();
    }
  }, "Sign In"));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['portal-header', className]),
      "data-theme": "dark",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.Header, {
        className: "page-header",
        appLogo: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HeaderButtons_AppLogo_AppLogo__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
        actions: headerButtons,
        userIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
          children: [isLoggingIn || isInitializing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.ProgressRadial, {
            indeterminate: true,
            className: "desktop-header-signin-spinner"
          }) : isLoggedIn ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HeaderButtons_UserIconButton_UserIconButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            className: "desktop-header-button",
            userIconMenuItemData: data.filter(val => val.isInUserProfile)
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.HeaderButton, {
            className: "desktop-header-button",
            name: "Sign In",
            onClick: () => {
              signin();
            }
          }), showFreeTrialButton && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HeaderButtons_SimpleLinkButton_SimpleLinkButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            href: _constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .TRIAL */ .Kh,
            title: "Free Trial"
          }, "trial")]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HamburgerMenu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        isOpen: showMenu,
        setIsOpen: setShowMenu,
        menuItems: hamburgerMenuButtons
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Search_FullPageSearch__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      isOpen: showFullPageSearch,
      onClose: () => {
        setShowFullPageSearch(false);
      }
    })]
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (PortalHeader);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppLogo */
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61686);
/* harmony import */ var _icons_ItwinIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72600);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function AppLogo() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .HOME */ .Sd,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
      id: "itwin-platform-header-logo-link",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.HeaderLogo, {
        logo: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_icons_ItwinIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          id: "header-logo-icon"
        }),
        onClick: () => {
          /* do nothing */
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("strong", {
          children: "iTwin Platform"
        })
      })
    })
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (AppLogo);

/***/ }),

/***/ 35202:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HeaderDropdownButton */
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73351);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function HeaderDropdownButton({
  title,
  menuItems,
  className
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const menuItemsToShow = menuItems.filter(item => item.customRenderCondition === undefined || item.customRenderCondition);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.HeaderButton, {
    name: title,
    className: className,
    isActive: !!menuItems.filter(item => router.pathname.startsWith(item.href)).length,
    menuItems: close => menuItemsToShow.map(value => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: value.href,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
          className: "dropdown-button",
          onClick: () => {
            close();
          },
          isSelected: router.pathname.startsWith(value.href),
          badge: value.endIcon,
          children: value.title
        })
      }, value.title);
    })
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (HeaderDropdownButton);

/***/ }),

/***/ 33265:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HeaderLinkButton */
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function HeaderLinkButton({
  href,
  title,
  isActiveFn,
  className,
  startIcon,
  endIcon,
  addDividerBefore
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [addDividerBefore && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "iui-divider"
    }, "divider"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: href,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.HeaderButton, {
        name: title,
        isActive: !isActiveFn ? router.pathname.startsWith(href) : isActiveFn(router.pathname),
        className: className,
        startIcon: startIcon,
        endIcon: endIcon,
        as: "a",
        href: href
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (HeaderLinkButton);

/***/ }),

/***/ 29763:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearchHeaderButton */
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function SearchHeaderButton({
  onClick,
  className
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
    className: className,
    styleType: "borderless",
    id: "search-button",
    onClick: () => {
      onClick();
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__.SvgSearch, {})
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (SearchHeaderButton);

/***/ }),

/***/ 80600:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SimpleLinkButton */
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







function SimpleLinkButton({
  href,
  title,
  startIcon,
  addDividerBefore
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [addDividerBefore && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "iui-divider"
    }, "divider"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: href,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Button, {
        styleType: "high-visibility",
        className: "simple-link-button",
        startIcon: startIcon,
        as: "a",
        href: href,
        children: title
      })
    })]
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (SimpleLinkButton);

/***/ }),

/***/ 24632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* unused harmony export UserIconButton */
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73351);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99301);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23315);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51477);
/* harmony import */ var _Avatars_UserIcon_UserIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52818);
/* harmony import */ var _MenuDivider_MenuDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_authService__WEBPACK_IMPORTED_MODULE_4__, _stores__WEBPACK_IMPORTED_MODULE_5__]);
([_services_authService__WEBPACK_IMPORTED_MODULE_4__, _stores__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function UserIconButton({
  userIconMenuItemData,
  className
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    signout
  } = (0,_services_authService__WEBPACK_IMPORTED_MODULE_4__/* .useAuthService */ .m)();
  const {
    firstName,
    lastName,
    email
  } = (0,_stores__WEBPACK_IMPORTED_MODULE_5__/* .useUser */ .a)();
  const userIconMenuItems = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const fullName = _utils__WEBPACK_IMPORTED_MODULE_6__/* .Utils.getUserFullName */ .c.getUserFullName(firstName, lastName);
    return close => [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.MenuExtraContent, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Text, {
        variant: "leading",
        id: "full-user-name",
        children: fullName
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Text, {
        isMuted: true,
        id: "user-email",
        children: email
      })]
    }, fullName), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_MenuDivider_MenuDivider__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}, "user-data-divider"), ...userIconMenuItemData.map(val => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      children: [val.addDividerBefore && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_MenuDivider_MenuDivider__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}, `${val.title}-divider`), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: val.href,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
          className: "dropdown-button",
          value: val.title,
          onClick: () => {
            close();
          },
          isSelected: !val.isActiveFn ? router.pathname.startsWith(val.href) : val.isActiveFn(router.pathname),
          icon: val.startIcon,
          children: val.title
        })
      }, val.title)]
    }, val.title)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_MenuDivider_MenuDivider__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}, "sign-out-divider"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
      value: "Sign Out",
      onClick: () => {
        close();
        signout();
      },
      children: "Sign Out"
    }, "sign-out")];
  }, [firstName, lastName, email, userIconMenuItemData, router.pathname, signout]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, {
    menuItems: userIconMenuItems,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
      id: "user-profile",
      className: className,
      styleType: "borderless",
      isActive: !!userIconMenuItemData.filter(val => !val.isActiveFn ? router.pathname.startsWith(val.href) : val.isActiveFn(router.pathname)).length,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Avatars_UserIcon_UserIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        firstName: firstName,
        lastName: lastName,
        size: "medium"
      })
    })
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (UserIconButton);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44971:
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
      d: "M4.09 9.491c1.051 0 6.231.341 6.333 1.505.164 1.866-3.538 2.357-5.82 2.38-.82 0-2.845-.27-2.845-1.236 0-.47.563-.965.897-1.28ZM12.84 0H16v1.147A4.83 4.83 0 0 0 12.84 0Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M16 3.886V16H.005L0 14.524a12.567 12.567 0 0 0 4.448.814c4.417.164 8.88-1.264 8.802-4.4-.054-2.155-4.851-3.015-7.792-3.094l.212-.228c4.941.122 9.02-.587 10.33-3.73Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M.005 10.541V0h8.849a17.694 17.694 0 0 0-4.27.86A17.663 17.663 0 0 0 1.52 2.114C.834 2.533.018 3.228.199 3.979c.174.726 2.238-.18 3.121-.437a52.184 52.184 0 0 1 7.15-1.413c2.974-.18 3.693.606 3.718 1.1-.061.737-1.308 2.132-7.103 2.828 2.129-2.178 2.308-2.47 2.488-2.85-2.564 0-3.749 1.482-5.415 2.897a6.678 6.678 0 0 0-3.113.88c-.349.282-.846.545-.548 1.037.215.355 1.132.188 1.445.208-.71.82-1.536 1.818-1.937 2.313Z"
    })]
  }));
};

SvgIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
};

const BentleySystemsIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SvgIcon, _objectSpread({}, props));
};

/* harmony default export */ __webpack_exports__["Z"] = (BentleySystemsIcon);

/***/ }),

/***/ 72600:
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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M15.997 3.95a1.405 1.405 0 0 0-.682-1.122L11.901.802a1.397 1.397 0 0 0-1.427 0L10.3.906l-1.017.604L7.06 2.828a1.404 1.404 0 0 0-.684 1.202v1.113l-.85-.504a1.397 1.397 0 0 0-1.427 0l-2.157 1.28-.995.59-.262.156A1.404 1.404 0 0 0 0 7.867v4.103c0 .027.001.054.003.08a1.405 1.405 0 0 0 .682 1.122l3.414 2.026a1.397 1.397 0 0 0 1.427 0l.175-.104 1.017-.604 2.222-1.318a1.404 1.404 0 0 0 .685-1.202v-1.113l.85.504a1.397 1.397 0 0 0 1.426 0l2.157-1.28.996-.59.262-.156A1.404 1.404 0 0 0 16 8.133V4.03c0-.027-.001-.054-.003-.08zM4.82 6.619a.744.744 0 1 1-.744.744.744.744 0 0 1 .744-.744zm2.037 6.375-.3.184-1.071.66-.367.227-.19.117a.174.174 0 0 1-.043.02.253.253 0 0 1-.173-.012l-.017-.008-.103-.064-1.825-1.124V11.86s.006-.244.316-.067l1.126.692v-2.428l-.701-.433V8.492s.006-.244.317-.066l1.582.973v3.091l1.132-.696c.31-.177.317.067.317.067zm8.548-7.889v3.028a.807.807 0 0 1-.393.69l-.262.156-.996.591-2.156 1.28a.802.802 0 0 1-.82 0l-1.153-.685V7.867a1.404 1.404 0 0 0-.685-1.202l-1.124-.667-.846-.502V4.03a.807.807 0 0 1 .393-.69L9.585 2.02l1.018-.604.175-.103a.803.803 0 0 1 .82 0l3.414 2.025a.814.814 0 0 1 .392.645l.001.046zm-3.958-2.713 2.157 1.329V5.06s-.008.288-.375.078L11.9 4.32v2.87l.829.511v1.34s-.007.288-.374.078l-1.87-1.15V4.316l-1.338.822c-.367.21-.374-.078-.374-.078V3.72l.354-.217 1.266-.78.434-.268.224-.138a.205.205 0 0 1 .05-.025.299.299 0 0 1 .205.016l.02.01z"
    })
  }));
};

SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const ITwinIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SvgIcon, _objectSpread({}, props));
};

/* harmony default export */ __webpack_exports__["Z"] = (ITwinIcon);

/***/ }),

/***/ 21073:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserManagementIcon */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M3.56 3.456C3.56.823 4.862 0 6.489 0s2.93.823 2.93 3.456a3.229 3.229 0 0 1-2.93 3.456 3.229 3.229 0 0 1-2.93-3.456zM7 12a4.978 4.978 0 0 1 2.55-4.333l-.701-.362h-.163a3.703 3.703 0 0 1-2.184.813 3.777 3.777 0 0 1-2.21-.814H4.13L1.851 8.491a.627.627 0 0 0-.325.317L.06 12.05a.844.844 0 0 0 0 .633.747.747 0 0 0 .65.316h6.39A5.021 5.021 0 0 1 7 12zm9 .71v-1.43l-1.1-.22a4.318 4.318 0 0 0-.19-.45l.62-.93-1.01-1.01-.93.62a2.62 2.62 0 0 0-.46-.19L12.71 8h-1.43l-.22 1.1a2.62 2.62 0 0 0-.46.19l-.93-.62-1.01 1.01.62.93a3.704 3.704 0 0 0-.19.46L8 11.29v1.43l1.1.22a2.525 2.525 0 0 0 .19.45l-.62.94 1.01 1.01.94-.63a2.43 2.43 0 0 0 .44.19l.23 1.1h1.42l.23-1.11a3.38 3.38 0 0 0 .44-.18l.94.62 1.01-1.01-.62-.94a3.011 3.011 0 0 0 .18-.45zm-4 .81A1.525 1.525 0 1 1 13.52 12 1.522 1.522 0 0 1 12 13.52z"
    })
  }));
};

SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};
const UserManagementIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SvgIcon, _objectSpread({}, props));
};
/* harmony default export */ __webpack_exports__["Z"] = (UserManagementIcon);

/***/ }),

/***/ 20949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ useITwinDeveloperPortalApi; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_iTwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28038);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23315);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_iTwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_1__, _stores__WEBPACK_IMPORTED_MODULE_2__]);
([_api_iTwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_1__, _stores__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useITwinDeveloperPortalApi() {
  const user = (0,_stores__WEBPACK_IMPORTED_MODULE_2__/* .useUser */ .a)();
  const iTwinDeveloperPortalApi = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new _api_iTwinDeveloperPortalApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(user.accessToken), [user]);
  return iTwinDeveloperPortalApi;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* unused harmony export useAlgoliaSearch */
/* harmony import */ var algoliasearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38970);
/* harmony import */ var algoliasearch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algoliasearch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_1__]);
_client_env__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useAlgoliaSearch = () => {
  return algoliasearch__WEBPACK_IMPORTED_MODULE_0___default()(_client_env__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ALGOLIA_APPLICATION_ID */ .Z.ALGOLIA_APPLICATION_ID, _client_env__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ALGOLIA_READ_KEY */ .Z.ALGOLIA_READ_KEY);
};
/* harmony default export */ __webpack_exports__["Z"] = (useAlgoliaSearch);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 781:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ExternalLink; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SimpleLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73351);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["children", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function ExternalLink(_ref) {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SimpleLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['external-link', className]),
    target: "_blank"
  }, props), {}, {
    children: [children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_1__.SvgWindowPopout, {})]
  }));
}

/***/ }),

/***/ 59513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": function() { return /* binding */ ExternalSearchResultLink; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_NewWindowIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82909);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const ExternalSearchResultLink = ({
  children,
  href,
  className,
  style = {}
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
    href: href,
    style: style,
    target: "_blank",
    rel: "noreferrer",
    className: className ? `external-link ${className}` : 'external-link',
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_icons_NewWindowIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), children]
  });
};

/***/ }),

/***/ 73351:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SimpleLink; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable jsx-a11y/anchor-is-valid */



function SimpleLink({
  children,
  href,
  as,
  target,
  className,
  style = {},
  onClick
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: href,
    as: as,
    passHref: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
      style: style,
      target: target,
      className: className,
      onClick: onClick,
      children: children
    })
  });
}

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

/***/ 86581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ LaunchDarklyWrapper; }
/* harmony export */ });
/* harmony import */ var launchdarkly_js_client_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23785);
/* harmony import */ var launchdarkly_js_client_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(launchdarkly_js_client_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46555);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90236);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23315);
/* harmony import */ var _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__, _client_env__WEBPACK_IMPORTED_MODULE_3__, _stores__WEBPACK_IMPORTED_MODULE_4__]);
([uuid__WEBPACK_IMPORTED_MODULE_2__, _client_env__WEBPACK_IMPORTED_MODULE_3__, _stores__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const getAnonymousUser = () => {
  const LD_ANONYMOUS_USER_KEY = 'LD_ANONYMOUS_USER_KEY';
  let key = window.localStorage.getItem(LD_ANONYMOUS_USER_KEY);

  if (key === null) {
    key = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();
    window.localStorage.setItem(LD_ANONYMOUS_USER_KEY, key);
  }

  return {
    key,
    anonymous: true
  };
};

const getAuthenticatedUser = user => {
  const ultimateId = Number(user.ultimateSite ?? '0');
  return {
    key: user.sub,
    name: user.email?.toUpperCase(),
    email: user.email?.toUpperCase(),
    custom: {
      UltimateId: isNaN(ultimateId) ? 0 : ultimateId
    }
  };
};

const LaunchDarklyWrapper = props => {
  const clientId = _client_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].LAUNCHDARKLY_CLIENT_ID */ .Z.LAUNCHDARKLY_CLIENT_ID;
  const ldClientRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const user = (0,_stores__WEBPACK_IMPORTED_MODULE_4__/* .useUser */ .a)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const options = {
      bootstrap: 'localStorage'
    };
    ldClientRef.current = (0,launchdarkly_js_client_sdk__WEBPACK_IMPORTED_MODULE_0__.initialize)(clientId, !!user.accessToken ? getAuthenticatedUser(user) : getAnonymousUser(), options);

    const onReady = () => {
      if (!ldClientRef.current) {
        return;
      }

      const flags = ldClientRef.current.allFlags();
      _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_5__/* .launchDarklyStore.replace */ .j.replace(flags);

      for (const flag in flags) {
        ldClientRef.current.on(`change:${flag}`, current => {
          _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_5__/* .launchDarklyStore.update */ .j.update(currentValue => {
            currentValue[flag] = current;
          });
        });
      }
    };

    ldClientRef.current.on('ready', onReady);
  }, [user, clientId]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: props.children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ ModalWrapper; }
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TrialPromptModal_TrialPromptModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75409);
/* harmony import */ var _constants_flags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46415);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61686);
/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8302);
/* harmony import */ var _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TrialPromptModal_TrialPromptModal__WEBPACK_IMPORTED_MODULE_2__, _hooks_useSession__WEBPACK_IMPORTED_MODULE_4__]);
([_components_TrialPromptModal_TrialPromptModal__WEBPACK_IMPORTED_MODULE_2__, _hooks_useSession__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ModalWrapper = props => {
  const flags = (0,_stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_5__/* .useLaunchDarklyFlags */ .L)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    session
  } = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_4__/* .useSession */ .k)();
  const {
    0: showTrialPrompt,
    1: setShowTrialPrompt
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: trialPromptShown,
    1: setTrialPromptShown
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const subscriptionIsStarted = !!session?.subscription;

  const closeTrialPrompt = () => {
    setShowTrialPrompt(false);
    setTrialPromptShown(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!!session && !subscriptionIsStarted && session.profile.trialPromptShown !== true && flags[_constants_flags__WEBPACK_IMPORTED_MODULE_7__/* .FLAG_TRIAL_FORM */ .DY] && router.pathname !== _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .TERMS_OF_SERVICE */ .sz && router.pathname !== _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .START_SUBSCRIPTION */ .Od && !trialPromptShown) {
      setShowTrialPrompt(true);
    } else {
      setShowTrialPrompt(false);
    }
  }, [router, flags, session, trialPromptShown, subscriptionIsStarted]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [props.children, showTrialPrompt && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_TrialPromptModal_TrialPromptModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      givenName: session?.profile.givenName,
      closeModal: closeTrialPrompt
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ RedirectWrapper; }
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_Tiers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71747);
/* harmony import */ var _constants_flags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46415);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61686);
/* harmony import */ var _hooks_useSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8302);
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58679);
/* harmony import */ var _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSession__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useSession__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const RedirectWrapper = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const flags = (0,_stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_6__/* .useLaunchDarklyFlags */ .L)();
  const {
    session
  } = (0,_hooks_useSession__WEBPACK_IMPORTED_MODULE_4__/* .useSession */ .k)();
  const isInStartSubscriptionPage = flags[_constants_flags__WEBPACK_IMPORTED_MODULE_8__/* .FLAG_TRIAL_FORM */ .DY] && router.pathname === _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .START_SUBSCRIPTION */ .Od;
  const isInTrialPage = flags[_constants_flags__WEBPACK_IMPORTED_MODULE_8__/* .FLAG_TRIAL_FORM */ .DY] && router.pathname === _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .TRIAL */ .Kh;
  const subscriptionIsStarted = !!session?.subscription;
  const hasActiveTrial = session?.subscription?.tier === _constants_Tiers__WEBPACK_IMPORTED_MODULE_2__/* .Tier.Trial */ .K.Trial && session?.subscription?.state === _models_session__WEBPACK_IMPORTED_MODULE_5__/* .SubscriptionState.Active */ .j.Active;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if ((isInStartSubscriptionPage || isInTrialPage) && subscriptionIsStarted) {
      let target = _constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .PROFILE */ .ih;
      if (isInStartSubscriptionPage && hasActiveTrial) target += '?welcome=true';
      router.push(target);
    }
  }, [router, hasActiveTrial, isInStartSubscriptionPage, isInTrialPage, subscriptionIsStarted]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: props.children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31156:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ logAPIResponse; },
/* harmony export */   "z": function() { return /* binding */ logAPIRequest; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const excludedUrls = ['/_next/static'];

function filterHeaders(headers) {
  const excludedHeaders = ['common', 'get', 'post', 'head', 'put', 'patch', 'delete', 'date', 'strict-transport-security', 'request-context'];

  const filteredHeaders = _objectSpread({}, headers);

  excludedHeaders.forEach(header => delete filteredHeaders[header]);
  return filteredHeaders;
}

function logAPIRequest() {
  const axiosRequestInterceptor = axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.request.use(request => {
    const method = request.method?.toUpperCase();
    const fullUrl = request.baseURL ? request.baseURL + request.url : request.url;

    if (!excludedUrls.some(url => fullUrl?.includes(url))) {
      console.log(`REQUEST: ${method} ${fullUrl}\n${JSON.stringify({
        headers: request.headers ? filterHeaders(request.headers) : {}
      })}`);
    }

    return request;
  });
  return axiosRequestInterceptor;
}
function logAPIResponse() {
  const axiosResponseInterceptor = axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.response.use(response => {
    const method = response.config.method?.toUpperCase();
    const fullUrl = response.config.baseURL ? response.config.baseURL + response.config.url : response.config.url;

    if (!excludedUrls.some(url => fullUrl && url.includes(fullUrl))) {
      console.log(`RESPONSE: ${method} ${fullUrl} STATUS: ${response.status}\n${JSON.stringify({
        headers: response.headers ? filterHeaders(response.headers) : {},
        payload: response.data
      })}`);
    }

    return response;
  });
  return axiosResponseInterceptor;
}

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

/***/ 38970:
/***/ (function(module) {

"use strict";
module.exports = require("algoliasearch");

/***/ }),

/***/ 52167:
/***/ (function(module) {

"use strict";
module.exports = require("axios");

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

/***/ 23785:
/***/ (function(module) {

"use strict";
module.exports = require("launchdarkly-js-client-sdk");

/***/ }),

/***/ 46517:
/***/ (function(module) {

"use strict";
module.exports = require("lodash");

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

/***/ 94957:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 87929:
/***/ (function(module) {

"use strict";
module.exports = require("react-instantsearch-dom");

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

/***/ 46555:
/***/ (function(module) {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ 9926:
/***/ (function(module) {

"use strict";
module.exports = import("zod");;

/***/ }),

/***/ 98188:
/***/ (function(module) {

"use strict";
module.exports = require("module");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,5152,6296,8866,2196,5217,6227,1974,236,1477,5829,1686,5781,8038,7985,347,6415,4352,2818], function() { return __webpack_exec__(9489), __webpack_exec__(24183); });
module.exports = __webpack_exports__;

})();