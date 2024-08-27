(function() {
var exports = {};
exports.id = 1438;
exports.ids = [1438,4298];
exports.modules = {

/***/ 64793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var _components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80989);
/* harmony import */ var _components_pages_Samples_Samples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79305);
/* harmony import */ var _services_sampleService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24302);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_Samples_Samples__WEBPACK_IMPORTED_MODULE_1__, _services_sampleService__WEBPACK_IMPORTED_MODULE_2__]);
([_components_pages_Samples_Samples__WEBPACK_IMPORTED_MODULE_1__, _services_sampleService__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
__webpack_require__(14473);








function Page({
  preloadedSamples
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_0__/* .PageMetadata */ .d, {
      title: "Samples | iTwin Platform"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_pages_Samples_Samples__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      preloadedSamples: preloadedSamples
    })]
  });
}

const getStaticProps = async function () {
  return {
    props: {
      preloadedSamples: (await _services_sampleService__WEBPACK_IMPORTED_MODULE_2__/* .sampleService.getSamples */ .l.getSamples()) ?? []
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Page);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 23282:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_defaultApiGroups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30581);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73351);
/* harmony import */ var _icons_GroupIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61890);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










function SampleTile({
  sample
}) {
  const getApiGroupIcon = apiGroupId => {
    const group = _constants_defaultApiGroups__WEBPACK_IMPORTED_MODULE_3__/* .DefaultApiGroups.apiGroups.find */ .q.apiGroups.find(group => group.id === apiGroupId);

    if (group) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "thumbnail-container",
        style: {
          backgroundColor: `${group.backgroundColor}`
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_icons_GroupIcon__WEBPACK_IMPORTED_MODULE_5__/* .GroupIcon */ .B, {
          apiGroupId: group.id,
          id: group.id,
          fill: group.color,
          className: "group-icon iui-picture"
        }, group.id)
      });
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    href: sample.url,
    target: "_blank",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Tile, {
      className: "sample-tile",
      name: sample.label,
      description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
        content: sample.description,
        placement: "bottom",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          children: sample.description
        })
      }),
      thumbnail: sample.image ? sample.image : getApiGroupIcon(sample.apiGroupId),
      metadata: sample.tags && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__.SvgTag, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.TagContainer, {
          children: sample.tags?.map((tag, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Tag, {
            variant: "basic",
            children: tag
          }, `${tag}-${index}`))
        })]
      }),
      isActionable: true
    })
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (SampleTile);

/***/ }),

/***/ 79305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_sampleService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24302);
/* harmony import */ var _Inputs_SearchInput_SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30895);
/* harmony import */ var _Layouts_PageWithHeading_PageWithHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31727);
/* harmony import */ var _SamplesList_SamplesList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51806);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_sampleService__WEBPACK_IMPORTED_MODULE_2__]);
_services_sampleService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function SamplesPage({
  preloadedSamples
}) {
  const {
    0: samplesGroups,
    1: setSamplesGroups
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(preloadedSamples);
  const {
    0: sampleTagFilterValue,
    1: setSampleTagFilterValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all');
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const filterSamplesByTagAndSearchValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((searchValue, sampleTagFilterValue) => {
    const samplesListEdited = [];
    const filteredGroups = samplesGroups.filter(samples => sampleTagFilterValue === 'all' || samples.groupName && samples.groupName === sampleTagFilterValue);
    filteredGroups.forEach(sampleGroup => {
      const filteredSamples = sampleGroup.samples.filter(sample => sample.label.toLowerCase().search(searchValue.toLowerCase()) > -1 || sample.description && sample.description.toLowerCase().search(searchValue.toLowerCase()) > -1);
      if (filteredSamples.length > 0) samplesListEdited.push({
        id: sampleGroup.id,
        groupName: sampleGroup.groupName,
        samples: filteredSamples
      });
    });
    return samplesListEdited;
  }, [samplesGroups]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _services_sampleService__WEBPACK_IMPORTED_MODULE_2__/* .sampleService.getSamples */ .l.getSamples(preloadedSamples).then(samples => {
      setSamplesGroups(samples);
    });
  }, [preloadedSamples]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    id: "page",
    className: "samples page-content-container",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Layouts_PageWithHeading_PageWithHeading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      headerContent: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Headline, {
        children: "Samples"
      }),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        id: "samples-page-content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          id: "all-samples-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "search-and-filter-section",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.LabeledSelect, {
              label: "Tags",
              onChange: filter => {
                setSampleTagFilterValue(filter);
              },
              style: {
                width: 250
              },
              options: [{
                label: 'All',
                value: 'all'
              }, ...samplesGroups.map(x => {
                return {
                  label: x.groupName,
                  value: x.groupName
                };
              })],
              placeholder: "Select",
              value: sampleTagFilterValue
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Inputs_SearchInput_SearchInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              style: {
                width: 250
              },
              onSearch: search => {
                setSearchValue(search);
              }
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SamplesList_SamplesList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            samplesList: filterSamplesByTagAndSearchValue(searchValue, sampleTagFilterValue)
          })]
        })
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (SamplesPage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51806:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SampleTile_SampleTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function SamplesList({
  samplesList
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: samplesList.map((samples, ind) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Subheading, {
          className: "subheading",
          children: samples.groupName
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "sample-tile-list",
          children: samples.samples.sort((a, b) => a.label.localeCompare(b.label)).map((sample, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SampleTile_SampleTile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            sample: sample
          }, `${sample.name}-${index}`))
        })]
      }, `${samples.groupName}-${ind}`);
    })
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (SamplesList);

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

/***/ 48149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ getImodelsApiManagementWorkflowSampleAppSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'imodels-api-management-workflow-sample-app';
function getImodelsApiManagementWorkflowSampleAppSpec() {
  return {
    name,
    label: 'iModels API Sample Application',
    description: 'This is a simple React based application that demonstrates iModel management workflow that can be achieved using iModels API.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.iModels */ .L.iModels],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.DataManagement */ .mV.DataManagement,
    tags: ['Digital Twin Management APIs', 'iModels'],
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ getInsightsApiSampleConsoleAppSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'insights-api-sample-console-app';
function getInsightsApiSampleConsoleAppSpec() {
  return {
    name,
    label: 'Reporting API sample Console application',
    description: 'This is a simple command line app that illustrates the workflow of configuring a report using the Reporting platform APIs.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Insights */ .L.Insights, _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Reporting */ .L.Reporting],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.ReportingInsights */ .mV.ReportingInsights,
    tags: ['Reporting APIs', 'Reporting & Insights'],
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ getiTwinssApiSampleAppSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'itwin-api-sample-app';
function getiTwinssApiSampleAppSpec() {
  return {
    name,
    label: 'iTwin API Sample App',
    description: 'An iTwin sample application that demonstrates how to create, query and update an iTwins using the iTwin API.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.iTwins */ .L.iTwins],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.Administration */ .mV.Administration,
    tags: ['Administration APIs', 'iTwins'],
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": function() { return /* binding */ getLibraryApiSampleAppSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'library-api-sample-app';
function getLibraryApiSampleAppSpec() {
  return {
    name,
    label: 'Library API Sample App',
    description: 'An iTwin sample application that demonstrates how to create, upload and query components in a catalog.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Library */ .L.Library],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.DataManagement */ .mV.DataManagement,
    tags: ['Digital Twin Management APIs', 'Library'],
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ getImportAndCopyProjectTeamMembersSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'platform-api-samples';
function getImportAndCopyProjectTeamMembersSpec() {
  return {
    name,
    label: 'Import and Copy Project Team Members',
    description: 'This sample demonstrates importing users into a project along with a list of project role assignments per user and copying project roles, users, and user project role assignments from one project to another.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Projects */ .L.Projects],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.Administration */ .mV.Administration,
    tags: ['Administration APIs', 'Projects'],
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ getProjectsApiSampleAppSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'project-api-sample-app';
function getProjectsApiSampleAppSpec() {
  return {
    name,
    label: 'Project API Sample App',
    description: 'An iTwin sample application that demonstrates how to create, query and update an iTwin Project using the Project API. It also demonstrates how to create a project role and add a user to the project with that role.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Projects */ .L.Projects],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.Administration */ .mV.Administration,
    tags: ['Administration APIs', 'Projects'],
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": function() { return /* binding */ getStorageApiSampleAppSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'storage-api-sample-app';
function getStorageApiSampleAppSpec() {
  return {
    name,
    label: 'Storage API Sample App',
    description: 'An iTwin sample application that demonstrates how to create, query and update files with folders saved in the Storage.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Storage */ .L.Storage],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.DataManagement */ .mV.DataManagement,
    tags: ['Digital Twin Management APIs', 'Storage'],
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ getSynchronizationApiSampleAppSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'synchronization-api-sample-app';
function getSynchronizationApiSampleAppSpec() {
  return {
    name,
    label: 'Synchronization Sample Using Storage Connections',
    description: 'Sample portal that demonstrates synchronization workflow using the Storage connections API.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Synchronization */ .L.Synchronization],
    tags: ['Synchronization & Exports APIs', 'Synchronization'],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.Synchronization */ .mV.Synchronization,
    image: '../../../images/synchronizationThumbnail.png',
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": function() { return /* binding */ getSynchronizationManifestApiSampleSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'synchronization-manifest-api-sample';
function getSynchronizationManifestApiSampleSpec() {
  return {
    name,
    label: 'Synchronization Sample Using Manifest Connections',
    description: 'Sample portal that demonstrates synchronization workflow using the Manifest connections API.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Synchronization */ .L.Synchronization],
    tags: ['Synchronization & Exports APIs', 'Synchronization'],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.Synchronization */ .mV.Synchronization,
    image: '../../../images/synchronizationThumbnail.png',
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": function() { return /* binding */ getWebhooksApiV1SampleNodeJsExpressAppSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'webhooks-api-v1-sample-nodejs-express-app';
function getWebhooksApiV1SampleNodeJsExpressAppSpec() {
  return {
    name,
    label: 'Webhooks API V1 Sample NodeJs Express App',
    description: 'Node.js (Express) application that shows the basic examples of consuming Webhooks V1 API and reacting to iTwin Platform events.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Webhooks */ .L.Webhooks],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.WorkflowAutomation */ .mV.WorkflowAutomation,
    tags: ['Events', 'Workflow Automation', 'Webhooks'],
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/webhooks-api-samples/tree/master/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ getWebhooksApiV2SampleAzureFunctionSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'webhooks-api-v2-sample-azure-function';
function getWebhooksApiV2SampleAzureFunctionSpec() {
  return {
    name,
    label: 'Webhooks API V2 Sample Azure Function',
    description: 'An Azure Function that shows the basic examples of consuming Webhooks V2 API and reacting to iTwin Platform events.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Webhooks */ .L.Webhooks],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.WorkflowAutomation */ .mV.WorkflowAutomation,
    tags: ['Events', 'Workflow Automation', 'Webhooks'],
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/webhooks-api-samples/tree/master/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ getWebhooksApiV2SampleNodeJsExpressAppSpec; }
/* harmony export */ });
/* harmony import */ var _client_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90236);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _constants_ApiName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_env__WEBPACK_IMPORTED_MODULE_0__]);
_client_env__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/



const name = 'webhooks-api-v2-sample-nodejs-express-app';
function getWebhooksApiV2SampleNodeJsExpressAppSpec() {
  return {
    name,
    label: 'Webhooks API V2 Sample NodeJs Express App',
    description: 'Node.js (Express) application that shows the basic examples of consuming Webhooks V2 API and reacting to iTwin Platform events.',
    relatedApiPaths: [_constants_ApiName__WEBPACK_IMPORTED_MODULE_2__/* .ApiPath.Webhooks */ .L.Webhooks],
    apiGroupId: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_1__/* .ApiGroupId.WorkflowAutomation */ .mV.WorkflowAutomation,
    tags: ['Events', 'Workflow Automation', 'Webhooks'],
    url: `${_client_env__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GITHUB_ITWIN_URL */ .Z.GITHUB_ITWIN_URL}/webhooks-api-samples/tree/master/${name}`
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ sampleManifest; }
/* harmony export */ });
/* harmony import */ var _constants_sandbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36905);
/* harmony import */ var _code_only_samples_imodels_api_management_workflow_sample_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48149);
/* harmony import */ var _code_only_samples_insights_api_sample_console_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78036);
/* harmony import */ var _code_only_samples_itwin_api_sample_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72674);
/* harmony import */ var _code_only_samples_library_api_sample_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51636);
/* harmony import */ var _code_only_samples_platform_api_samples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47796);
/* harmony import */ var _code_only_samples_project_api_sample_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98617);
/* harmony import */ var _code_only_samples_storage_api_sample_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26728);
/* harmony import */ var _code_only_samples_synchronization_api_sample_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68793);
/* harmony import */ var _code_only_samples_synchronization_manifest_api_sample__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91248);
/* harmony import */ var _code_only_samples_webhooks_api_v1_sample_nodejs_express_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69461);
/* harmony import */ var _code_only_samples_webhooks_api_v2_sample_nodejs_express_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99823);
/* harmony import */ var _code_only_samples_webhooks_api_v2_sample_azure_function__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47399);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_code_only_samples_imodels_api_management_workflow_sample_app__WEBPACK_IMPORTED_MODULE_0__, _code_only_samples_insights_api_sample_console_app__WEBPACK_IMPORTED_MODULE_1__, _code_only_samples_itwin_api_sample_app__WEBPACK_IMPORTED_MODULE_2__, _code_only_samples_library_api_sample_app__WEBPACK_IMPORTED_MODULE_3__, _code_only_samples_platform_api_samples__WEBPACK_IMPORTED_MODULE_4__, _code_only_samples_project_api_sample_app__WEBPACK_IMPORTED_MODULE_5__, _code_only_samples_storage_api_sample_app__WEBPACK_IMPORTED_MODULE_6__, _code_only_samples_synchronization_api_sample_app__WEBPACK_IMPORTED_MODULE_7__, _code_only_samples_synchronization_manifest_api_sample__WEBPACK_IMPORTED_MODULE_8__, _code_only_samples_webhooks_api_v1_sample_nodejs_express_app__WEBPACK_IMPORTED_MODULE_9__, _code_only_samples_webhooks_api_v2_sample_nodejs_express_app__WEBPACK_IMPORTED_MODULE_10__, _code_only_samples_webhooks_api_v2_sample_azure_function__WEBPACK_IMPORTED_MODULE_11__]);
([_code_only_samples_imodels_api_management_workflow_sample_app__WEBPACK_IMPORTED_MODULE_0__, _code_only_samples_insights_api_sample_console_app__WEBPACK_IMPORTED_MODULE_1__, _code_only_samples_itwin_api_sample_app__WEBPACK_IMPORTED_MODULE_2__, _code_only_samples_library_api_sample_app__WEBPACK_IMPORTED_MODULE_3__, _code_only_samples_platform_api_samples__WEBPACK_IMPORTED_MODULE_4__, _code_only_samples_project_api_sample_app__WEBPACK_IMPORTED_MODULE_5__, _code_only_samples_storage_api_sample_app__WEBPACK_IMPORTED_MODULE_6__, _code_only_samples_synchronization_api_sample_app__WEBPACK_IMPORTED_MODULE_7__, _code_only_samples_synchronization_manifest_api_sample__WEBPACK_IMPORTED_MODULE_8__, _code_only_samples_webhooks_api_v1_sample_nodejs_express_app__WEBPACK_IMPORTED_MODULE_9__, _code_only_samples_webhooks_api_v2_sample_nodejs_express_app__WEBPACK_IMPORTED_MODULE_10__, _code_only_samples_webhooks_api_v2_sample_azure_function__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/












 // import { getRealityDataApiSampleAppSpec } from './SamplesSpecs/code-only-samples/realitydata-sample-app';

const sampleManifest = [{
  id: _constants_sandbox__WEBPACK_IMPORTED_MODULE_12__/* .iTwinPlatformApiGroupId */ .zj,
  groupName: 'iTwin Platform APIs',
  samples: [(0,_code_only_samples_synchronization_api_sample_app__WEBPACK_IMPORTED_MODULE_7__/* .getSynchronizationApiSampleAppSpec */ .r)(), (0,_code_only_samples_synchronization_manifest_api_sample__WEBPACK_IMPORTED_MODULE_8__/* .getSynchronizationManifestApiSampleSpec */ .P)(), (0,_code_only_samples_imodels_api_management_workflow_sample_app__WEBPACK_IMPORTED_MODULE_0__/* .getImodelsApiManagementWorkflowSampleAppSpec */ .s)(), (0,_code_only_samples_storage_api_sample_app__WEBPACK_IMPORTED_MODULE_6__/* .getStorageApiSampleAppSpec */ .d)(), (0,_code_only_samples_project_api_sample_app__WEBPACK_IMPORTED_MODULE_5__/* .getProjectsApiSampleAppSpec */ .F)(), (0,_code_only_samples_itwin_api_sample_app__WEBPACK_IMPORTED_MODULE_2__/* .getiTwinssApiSampleAppSpec */ .m)(), (0,_code_only_samples_webhooks_api_v1_sample_nodejs_express_app__WEBPACK_IMPORTED_MODULE_9__/* .getWebhooksApiV1SampleNodeJsExpressAppSpec */ .j)(), (0,_code_only_samples_webhooks_api_v2_sample_nodejs_express_app__WEBPACK_IMPORTED_MODULE_10__/* .getWebhooksApiV2SampleNodeJsExpressAppSpec */ .C)(), (0,_code_only_samples_webhooks_api_v2_sample_azure_function__WEBPACK_IMPORTED_MODULE_11__/* .getWebhooksApiV2SampleAzureFunctionSpec */ .k)(), (0,_code_only_samples_platform_api_samples__WEBPACK_IMPORTED_MODULE_4__/* .getImportAndCopyProjectTeamMembersSpec */ .F)(), (0,_code_only_samples_insights_api_sample_console_app__WEBPACK_IMPORTED_MODULE_1__/* .getInsightsApiSampleConsoleAppSpec */ .t)(), (0,_code_only_samples_library_api_sample_app__WEBPACK_IMPORTED_MODULE_3__/* .getLibraryApiSampleAppSpec */ .h)() // getRealityDataApiSampleAppSpec(),
  ]
}];
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ sampleService; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53618);
/* harmony import */ var _samples_sampleManifest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59220);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__, _samples_sampleManifest__WEBPACK_IMPORTED_MODULE_1__]);
([_api__WEBPACK_IMPORTED_MODULE_0__, _samples_sampleManifest__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SampleService {
  constructor() {
    _defineProperty(this, "samples", void 0);
  }

  async getSamples(preloadedSamples = undefined) {
    if (this.samples) return Promise.resolve(this.samples);
    return _api__WEBPACK_IMPORTED_MODULE_0__/* .iTwinSandboxApi.getOfficialSamples */ .DU.getOfficialSamples().then(sampleGroups => {
      for (const group of _samples_sampleManifest__WEBPACK_IMPORTED_MODULE_1__/* .sampleManifest */ .l) {
        const result = sampleGroups.find(s => s.id === group.id);
        if (result) result.samples = [...result.samples, ...group.samples];else sampleGroups.push(group);
      }

      return this.samples = sampleGroups;
    }).catch(() => {
      if (!preloadedSamples) return [];
      return preloadedSamples;
    });
  }

  getSampleGroupsByApiPath(apiPath, samples) {
    return samples.map(sg => {
      return _objectSpread(_objectSpread({}, sg), {}, {
        samples: sg.samples.filter(sample => sample.relatedApiPaths && sample.relatedApiPaths.includes(apiPath))
      });
    }).filter(sg => sg.samples.length > 0);
  }

}

const sampleService = new SampleService();

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

/***/ 23617:
/***/ (function(module) {

"use strict";
module.exports = import("axios-retry");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,5152,6296,2196,5217,236,1477,5829,5781,9209,175,4588,8816,9858,5692,6739,3618,347,1878,1727,7246,1890], function() { return __webpack_exec__(64793); });
module.exports = __webpack_exports__;

})();