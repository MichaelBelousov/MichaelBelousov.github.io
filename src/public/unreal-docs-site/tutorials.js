"use strict";
(function() {
var exports = {};
exports.id = 8204;
exports.ids = [8204];
exports.modules = {

/***/ 56446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53618);
/* harmony import */ var _components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80989);
/* harmony import */ var _components_pages_Tutorials_Tutorials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27519);
/* harmony import */ var _services_mdxService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57706);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_1__, _components_pages_Tutorials_Tutorials__WEBPACK_IMPORTED_MODULE_3__]);
([_api__WEBPACK_IMPORTED_MODULE_1__, _components_pages_Tutorials_Tutorials__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
__webpack_require__(14473);










function Page(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_2__/* .PageMetadata */ .d, {
      title: "Tutorials | iTwin Platform"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_pages_Tutorials_Tutorials__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      tutorials: props.tutorials,
      firstStepTutorials: props.firstStepTutorials,
      preloadedApis: props.preloadedApis
    })]
  });
}

async function getStaticProps() {
  const metadata = await (0,_services_mdxService__WEBPACK_IMPORTED_MODULE_4__/* .getAllTutorialMetadata */ .u)();
  const metadataArray = metadata.metadataArray;
  const firstStepTutorials = metadata.firstStepTutorials;
  const preloadedApis = await _api__WEBPACK_IMPORTED_MODULE_1__/* .apisApi.getAllApisWithGroups */ .u.getAllApisWithGroups(false);
  return {
    props: {
      tutorials: metadataArray,
      firstStepTutorials: firstStepTutorials.sort((val_1, val_2) => val_1.tile.firstStepsSequenceNumber - val_2.tile.firstStepsSequenceNumber),
      preloadedApis: preloadedApis
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Page);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export SearchInput */
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["placeholder", "duration", "onSearch", "label", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SearchInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref) => {
  const {
    placeholder = 'Search...',
    duration = 500,
    onSearch,
    label = '',
    value = ''
  } = props,
        rest = _objectWithoutProperties(props, _excluded); // current input value


  const {
    0: stringValue,
    1: setStringValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(typeof value === 'string' ? value : value.toString());
  const {
    0: timerId,
    1: setTimerId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return function cleanup() {
      if (timerId && window) {
        window.clearTimeout(timerId);
      }
    };
  }, [timerId]); // send search value (state is necessary to avoid duplicate requests)

  const {
    0: searchValue,
    1: setSearchValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (onSearch && searchValue !== null) {
      onSearch(searchValue);
    }
  }, [onSearch, searchValue]);

  const setValue = (val, timeout = 0) => {
    setStringValue(val);

    if (timeout && window) {
      setTimerId(window.setTimeout(setSearchValue, timeout, val));
    } else {
      setSearchValue(val);
    }
  };

  const handleChange = e => {
    const currentValue = e.target.value;
    setValue(currentValue, duration);
  };

  const handleKeyPress = e => {
    const modifierPressed = e.altKey || e.ctrlKey || e.shiftKey || e.metaKey;

    if (!modifierPressed && e.key === 'Enter') {
      setSearchValue(stringValue);
    }
  };

  const handleIconClick = () => {
    if (stringValue.length > 0) {
      setStringValue('');
      setSearchValue('');
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.LabeledInput, _objectSpread({
    ref: ref,
    label: label,
    onChange: handleChange,
    value: stringValue,
    onKeyDown: handleKeyPress,
    placeholder: placeholder,
    svgIcon: stringValue.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__.SvgCloseSmall, {
      onClick: handleIconClick
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__.SvgSearch, {
      onClick: handleIconClick
    }),
    iconDisplayStyle: "inline"
  }, rest));
});
SearchInput.displayName = 'Search Input';
/* harmony default export */ __webpack_exports__["Z"] = (SearchInput);

/***/ }),

/***/ 80989:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 27519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useApisApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10022);
/* harmony import */ var _Inputs_SearchInput_SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30895);
/* harmony import */ var _Layouts_PageWithHeading_PageWithHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31727);
/* harmony import */ var _TutorialsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75813);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useApisApi__WEBPACK_IMPORTED_MODULE_2__]);
_hooks_useApisApi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function TutorialsPage(props) {
  const [apis, setApis] = react__WEBPACK_IMPORTED_MODULE_1__.useState(props.preloadedApis);
  const [tutorialsToShow, setTutorialsToShow] = react__WEBPACK_IMPORTED_MODULE_1__.useState(props.tutorials);
  const [apiGroupFilterValue, setApiGroupFilterValue] = react__WEBPACK_IMPORTED_MODULE_1__.useState('all');
  const [searchValue, setSearchValue] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
  const apisApi = (0,_hooks_useApisApi__WEBPACK_IMPORTED_MODULE_2__/* .useApisApi */ .N)();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const refreshAPIList = async () => {
      const allApis = await apisApi.getAllApisWithGroups(false);
      setApis(allApis);
    };

    refreshAPIList();
  }, [apisApi]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const result = props.tutorials.filter(tutorial => apiGroupFilterValue === 'all' || tutorial.tile.relatedApiIds && tutorial.tile.relatedApiIds.includes(apiGroupFilterValue)).filter(tutorial => tutorial.tile.name.toLowerCase().search(searchValue.toLowerCase()) > -1 || tutorial.tile.description.toLowerCase().search(searchValue.toLowerCase()) > -1);
    setTutorialsToShow(result);
  }, [searchValue, apiGroupFilterValue, props]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    id: "page",
    className: "tutorials page-content-container",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Layouts_PageWithHeading_PageWithHeading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      headerContent: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Headline, {
        children: "Tutorials"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        id: "tutorials-page-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          id: "all-tutorials-content",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Subheading, {
            className: "subheading",
            children: "First steps"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_TutorialsList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            apis: apis,
            tutorialsToShow: props.firstStepTutorials
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          id: "all-tutorials-content",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Subheading, {
            className: "subheading",
            children: "More topics"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "search-and-filter-section",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.LabeledSelect, {
              label: "APIs",
              onChange: filter => {
                setApiGroupFilterValue(filter);
              },
              style: {
                width: 250
              },
              options: [{
                label: 'All',
                value: 'all'
              }, ...apis.map(x => {
                return {
                  label: x.displayName,
                  value: x.path
                };
              })],
              placeholder: "Select",
              value: apiGroupFilterValue
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Inputs_SearchInput_SearchInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              style: {
                width: 250
              },
              onSearch: search => {
                setSearchValue(search);
              }
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_TutorialsList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            apis: apis,
            tutorialsToShow: tutorialsToShow
          })]
        })]
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (TutorialsPage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ useApisApi; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53618);
/* harmony import */ var _useSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8302);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_1__, _useSession__WEBPACK_IMPORTED_MODULE_2__]);
([_api__WEBPACK_IMPORTED_MODULE_1__, _useSession__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useApisApi() {
  const {
    session
  } = (0,_useSession__WEBPACK_IMPORTED_MODULE_2__/* .useSession */ .k)();
  const apisApi = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new _api__WEBPACK_IMPORTED_MODULE_1__/* .ApisApi */ .Ie(session?.managementToken), [session]);
  return apisApi;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

/***/ 75214:
/***/ (function(module) {

module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/401");

/***/ }),

/***/ 23563:
/***/ (function(module) {

module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/403");

/***/ }),

/***/ 5142:
/***/ (function(module) {

module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/404");

/***/ }),

/***/ 26595:
/***/ (function(module) {

module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/500");

/***/ }),

/***/ 75777:
/***/ (function(module) {

module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/502");

/***/ }),

/***/ 4142:
/***/ (function(module) {

module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/503");

/***/ }),

/***/ 42777:
/***/ (function(module) {

module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/Error");

/***/ }),

/***/ 29165:
/***/ (function(module) {

module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/Redirect");

/***/ }),

/***/ 46573:
/***/ (function(module) {

module.exports = require("@itwin/itwinui-illustrations-react/cjs/illustrations/TimedOut");

/***/ }),

/***/ 57425:
/***/ (function(module) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ 44787:
/***/ (function(module) {

module.exports = require("@tippyjs/react");

/***/ }),

/***/ 52167:
/***/ (function(module) {

module.exports = require("axios");

/***/ }),

/***/ 66303:
/***/ (function(module) {

module.exports = require("chroma-js");

/***/ }),

/***/ 59003:
/***/ (function(module) {

module.exports = require("classnames");

/***/ }),

/***/ 11004:
/***/ (function(module) {

module.exports = require("js-beautify");

/***/ }),

/***/ 44150:
/***/ (function(module) {

module.exports = require("natsort");

/***/ }),

/***/ 3280:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 10299:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ (function(module) {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ (function(module) {

module.exports = require("next/router");

/***/ }),

/***/ 3712:
/***/ (function(module) {

module.exports = require("oidc-client");

/***/ }),

/***/ 16689:
/***/ (function(module) {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ (function(module) {

module.exports = require("react-dom");

/***/ }),

/***/ 62154:
/***/ (function(module) {

module.exports = require("react-table");

/***/ }),

/***/ 84466:
/***/ (function(module) {

module.exports = require("react-transition-group");

/***/ }),

/***/ 20997:
/***/ (function(module) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 67915:
/***/ (function(module) {

module.exports = require("styled-jsx");

/***/ }),

/***/ 99816:
/***/ (function(module) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 23617:
/***/ (function(module) {

module.exports = import("axios-retry");;

/***/ }),

/***/ 15941:
/***/ (function(module) {

module.exports = import("swr");;

/***/ }),

/***/ 9926:
/***/ (function(module) {

module.exports = import("zod");;

/***/ }),

/***/ 57147:
/***/ (function(module) {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,5152,6296,788,2196,5217,236,1477,5829,5781,9209,175,4588,8816,9858,5692,6739,3618,400,347,1878,1727,7246,1890,6198,9332,1086,2485,5448,2028], function() { return __webpack_exec__(56446); });
module.exports = __webpack_exports__;

})();