(function() {
var exports = {};
exports.id = 507;
exports.ids = [507,4298];
exports.modules = {

/***/ 15449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var _components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80989);
/* harmony import */ var _components_pages_TermsOfService_TermsOfService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28897);
/* harmony import */ var _api_AgreementServiceApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30646);
/* harmony import */ var _next_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54963);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_TermsOfService_TermsOfService__WEBPACK_IMPORTED_MODULE_1__, _api_AgreementServiceApi__WEBPACK_IMPORTED_MODULE_2__]);
([_components_pages_TermsOfService_TermsOfService__WEBPACK_IMPORTED_MODULE_1__, _api_AgreementServiceApi__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
__webpack_require__(14473);








function Page(props) {
  const {
    agreement
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_0__/* .PageMetadata */ .d, {
      title: "Terms of Service | iTwin Platform"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_pages_TermsOfService_TermsOfService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      agreement: agreement
    })]
  });
}
async function getStaticProps() {
  const content = _next_utils__WEBPACK_IMPORTED_MODULE_4__/* .NextUtils.isPreloading */ .l.isPreloading ? await _api_AgreementServiceApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getTermsOfService */ .Z.getTermsOfService() : '';
  return {
    props: {
      agreement: content
    }
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AgreementServiceApi; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85804);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_2__]);
_client_env__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



class AgreementServiceApi {
  static async getTermsOfService() {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/rest/agreements/${_constants_constants__WEBPACK_IMPORTED_MODULE_1__/* .AGREEMENT_ID_TOS */ .No}/types/${_constants_constants__WEBPACK_IMPORTED_MODULE_1__/* .AGREEMENT_TYPE_TOS */ .ex}`, {
        baseURL: _client_env__WEBPACK_IMPORTED_MODULE_2__/* ["default"].AGREEMENT_SERVICE_URL */ .Z.AGREEMENT_SERVICE_URL
      });
      return response.data.text;
    } catch (error) {
      throw new Error(`Failed to get terms of service agreement: ${error}`);
    }
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["title", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ContentHeightIFrame = _ref => {
  let {
    title,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const iframe = ref.current;

    if (iframe) {
      const iframeWindow = iframe.contentWindow;

      if (iframeWindow) {
        const resizeObserver = new ResizeObserver(entries => {
          for (const entry of entries) {
            const {
              height
            } = entry.contentRect;
            iframe.style.height = `${height}px`;
          }
        });
        resizeObserver.observe(iframeWindow.document.body);
        return () => {
          resizeObserver.unobserve(iframeWindow.document.body);
          resizeObserver.disconnect();
        };
      }
    }
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("iframe", _objectSpread({
    title: title,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['content-height-frame', className])
  }, props));
};

/* harmony default export */ __webpack_exports__["Z"] = (ContentHeightIFrame);

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

/***/ 28897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ TermsOfService; }
/* harmony export */ });
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61686);
/* harmony import */ var _hooks_useAgreements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69338);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51477);
/* harmony import */ var _ContentSizeIFrame_ContentHeightIFrame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84321);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAgreements__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useAgreements__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function TermsOfService(props) {
  const {
    agreement
  } = props; // isTermsOfServiceAccepted returns true if the user has accepted the terms of service
  // and returns true if the user is not logged in.

  const {
    isTermsOfServiceAccepted,
    acceptTermsOfService
  } = (0,_hooks_useAgreements__WEBPACK_IMPORTED_MODULE_4__/* .useAgreements */ .N)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: checked,
    1: setChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: isAccepting,
    1: setIsAccepting
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  async function accept() {
    // This function tries to accept the terms of service.
    // If for some reason it fails (not user issue), it will unblock
    // the user from browsing the site. So we redirect to home page
    // regardless and require the user to accept the terms of service
    // later after user's cache gets cleared (after 1 hour).
    const redirect = decodeURIComponent(router.query.redirect);

    try {
      setIsAccepting(true);
      await acceptTermsOfService();
    } catch {
      /* empty */
    } finally {
      setIsAccepting(false);
      const redirectUrl = _utils__WEBPACK_IMPORTED_MODULE_5__/* .Utils.getAllowedReturnUrl */ .c.getAllowedReturnUrl(redirect);

      if (_constants_paths__WEBPACK_IMPORTED_MODULE_3__/* .ALL_PRIVATE_ROUTES.some */ .LI.some(path => redirectUrl.startsWith(path))) {
        router.push(redirect);
      } else {
        router.push('/');
      }
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
    id: "page",
    className: "terms-of-service page-content-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "agreement-container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ContentSizeIFrame_ContentHeightIFrame__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        title: "Developer Terms of Service",
        srcDoc: agreement
      }), !isTermsOfServiceAccepted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "agreement-actions",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
          checked: checked,
          label: "I agree to the Terms of Service.",
          onChange: () => setChecked(!checked)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Button, {
          className: "accept-button",
          disabled: !checked || isAccepting,
          onClick: async () => {
            await accept();
          },
          styleType: "high-visibility",
          children: "Accept"
        })]
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4298:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(72189)


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

/***/ 9926:
/***/ (function(module) {

"use strict";
module.exports = import("zod");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,5152,2196,5217,236,1477,5829,1686,8038,9338], function() { return __webpack_exec__(15449); });
module.exports = __webpack_exports__;

})();