(function() {
var exports = {};
exports.id = 5159;
exports.ids = [5159,4298];
exports.modules = {

/***/ 89498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_auth_TryItCodeExchange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45203);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_auth_TryItCodeExchange__WEBPACK_IMPORTED_MODULE_1__]);
_components_auth_TryItCodeExchange__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
__webpack_require__(14473);




const getStaticProps = async function () {
  return {
    props: {}
  };
};
const getStaticPaths = async function () {
  return {
    paths: [{
      params: {
        authorizationServerId: 'bentley-oauth'
      }
    }],
    fallback: false
  };
};
function Page() {
  if (true) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
      children: "loading"
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_auth_TryItCodeExchange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ exchangeTryItCodeToAccessCode; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_1__]);
_client_env__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function exchangeTryItCodeToAccessCode(code) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/TryIt', {
    baseURL: _client_env__WEBPACK_IMPORTED_MODULE_1__/* ["default"].FUNCTION_APP_URL */ .Z.FUNCTION_APP_URL,
    params: {
      code: code
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_functionApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34263);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_functionApp__WEBPACK_IMPORTED_MODULE_2__]);
_api_functionApp__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TryItCodeExchange = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    code,
    error_description: errorDescription,
    error
  } = router.query;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function exchangeToken() {
      const parentWindow = window.opener;

      if (code && parentWindow) {
        const response = await (0,_api_functionApp__WEBPACK_IMPORTED_MODULE_2__/* .exchangeTryItCodeToAccessCode */ .s)(typeof code === 'string' ? code : code[0]);

        if (response.status === 200) {
          const tryItTokenResponse = response.data;
          parentWindow.postMessage(tryItTokenResponse, window.location.origin);
        } else {
          console.log(response);
        }
      }
    }

    if (code) {
      exchangeToken();
    }
  }, [code]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (error || errorDescription) {
      const parentWindow = window.opener;

      if (parentWindow) {
        parentWindow.postMessage({
          error,
          errorDescription
        }, window.location.origin);
      }
    }
  }, [code, error, errorDescription]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
    children: "Redirecting"
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (TryItCodeExchange);
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,5152,2196,236], function() { return __webpack_exec__(89498); });
module.exports = __webpack_exports__;

})();