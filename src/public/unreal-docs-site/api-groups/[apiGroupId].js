"use strict";
(function() {
var exports = {};
exports.id = 3007;
exports.ids = [3007];
exports.modules = {

/***/ 14132:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ApiGroupMarketing_ApiGroupMarketingLayout; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/constants/paths.ts
var paths = __webpack_require__(61686);
// EXTERNAL MODULE: ./src/links/SimpleLink.tsx
var SimpleLink = __webpack_require__(73351);
// EXTERNAL MODULE: ./src/components/MarkdownViewWithMermaid/MarkdownViewWithMermaid.tsx
var MarkdownViewWithMermaid = __webpack_require__(19444);
// EXTERNAL MODULE: ./src/components/icons/GroupIcon.tsx + 13 modules
var GroupIcon = __webpack_require__(61890);
// EXTERNAL MODULE: consume shared module (default) itwinui-v1@^1.48.3 (singleton) (fallback: ./node_modules/itwinui-v1/cjs/index.js) (eager)
var index_js_eager_ = __webpack_require__(85217);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/icons/CheckBoxIcon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8 1.5A6.5 6.5 0 1 1 1.5 8 6.5 6.5 0 0 1 8 1.5M8 0a8 8 0 1 0 8 8 8.023 8.023 0 0 0-8-8zM6.651 11.994l-3.65-3.4 1.395-1.3 2.362 2.2 4.833-4.5 1.396 1.3z",
      fill: "#008be1"
    })
  }));
};

SvgIcon.defaultProps = {
  width: "50",
  height: "50",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

const CheckBoxIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(SvgIcon, _objectSpread({}, props));
};

/* harmony default export */ var icons_CheckBoxIcon = (CheckBoxIcon);
;// CONCATENATED MODULE: ./src/components/mdx/marketing.tsx
function marketing_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function marketing_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? marketing_ownKeys(Object(source), !0).forEach(function (key) { marketing_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : marketing_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function marketing_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const mdComponents = {
  h1: props => /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Headline, marketing_objectSpread({}, props)),
  h2: props => /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Title, marketing_objectSpread({}, props)),
  h3: props => /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Subheading, marketing_objectSpread({}, props)),
  h4: props => /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Leading, marketing_objectSpread({}, props)),
  blockquote: props => /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Body, {
    children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Blockquote, marketing_objectSpread({}, props))
  }),
  code: props => /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Code, marketing_objectSpread({}, props)),
  pre: props => /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Body, {
    children: /*#__PURE__*/jsx_runtime_.jsx("pre", marketing_objectSpread({
      className: "documentation-codeblock"
    }, props))
  }),
  p: props => /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Body, marketing_objectSpread({}, props)),
  a: props => /*#__PURE__*/jsx_runtime_.jsx((link_default()), marketing_objectSpread(marketing_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("a", marketing_objectSpread(marketing_objectSpread({}, props), {}, {
      target: "_blank"
    }))
  })),
  hr: props => /*#__PURE__*/jsx_runtime_.jsx("hr", marketing_objectSpread({
    className: "documentation-divider"
  }, props)),
  em: props => /*#__PURE__*/jsx_runtime_.jsx("em", marketing_objectSpread({}, props)),
  ul: props => /*#__PURE__*/jsx_runtime_.jsx("ul", marketing_objectSpread({
    className: "key-features"
  }, props)),
  li: props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "list-item",
    children: [/*#__PURE__*/jsx_runtime_.jsx(icons_CheckBoxIcon, {}), /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Body, marketing_objectSpread({}, props))]
  })
};
// EXTERNAL MODULE: consume shared module (default) @itwin/itwinui-layouts-react@~0.1.3 (singleton) (fallback: ./node_modules/@itwin/itwinui-layouts-react/dist/esm/index.js) (eager)
var esm_index_js_eager_ = __webpack_require__(70347);
// EXTERNAL MODULE: ./src/components/pages/Apis/ApiCard.tsx
var ApiCard = __webpack_require__(61551);
;// CONCATENATED MODULE: ./src/components/Layouts/MarketingLayout/MarketingCardRow.tsx









function MarketingCardRow({
  title,
  apis
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Headline, {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx(esm_index_js_eager_.FluidGrid, {
      minItemWidth: 230,
      children: apis.map(api => /*#__PURE__*/jsx_runtime_.jsx(ApiCard/* default */.Z, {
        api: api
      }, api.name))
    })]
  });
}

/* harmony default export */ var MarketingLayout_MarketingCardRow = (MarketingCardRow);
// EXTERNAL MODULE: ./src/components/Layouts/MarketingLayout/MarketingHeader.tsx
var MarketingHeader = __webpack_require__(11672);
// EXTERNAL MODULE: ./src/components/Layouts/MarketingLayout/MarketingLayout.tsx
var MarketingLayout = __webpack_require__(13930);
;// CONCATENATED MODULE: ./src/components/Layouts/ApiGroupMarketing/ApiGroupMarketingLayout.tsx











function ApiGroupMarketingLayout({
  apiGroupId,
  content,
  apiGroup,
  preloadedApis
}) {
  const headerContent = /*#__PURE__*/jsx_runtime_.jsx(MarketingHeader/* default */.Z, {
    title: apiGroup?.displayName,
    description: apiGroup?.description,
    image: /*#__PURE__*/jsx_runtime_.jsx(GroupIcon/* GroupIcon */.B, {
      apiGroupId: apiGroupId,
      style: {
        fill: apiGroup.color
      },
      height: 100
    })
  });

  const breadcrumbs = [/*#__PURE__*/jsx_runtime_.jsx(SimpleLink/* default */.Z, {
    href: paths/* DOCUMENTATION */.tQ,
    children: "Documentation"
  }, "documentation"), /*#__PURE__*/jsx_runtime_.jsx("span", {
    children: apiGroup.displayName
  }, "api-group")];

  const mdContent = /*#__PURE__*/jsx_runtime_.jsx(MarkdownViewWithMermaid/* MarkdownViewWithMermaid */.D, {
    markdown: content,
    options: {
      tables: true,
      emoji: true,
      openLinksInNewWindow: true
    },
    components: mdComponents
  });

  return /*#__PURE__*/jsx_runtime_.jsx(MarketingLayout/* default */.Z, {
    breadcrumbs: breadcrumbs,
    headerContent: headerContent,
    apiCards: preloadedApis.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx(MarketingLayout_MarketingCardRow, {
      title: "Featured APIs",
      apis: preloadedApis
    }) : undefined,
    children: mdContent
  });
}

/* harmony default export */ var ApiGroupMarketing_ApiGroupMarketingLayout = (ApiGroupMarketingLayout);

/***/ }),

/***/ 61551:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_Tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57348);
/* harmony import */ var _links_OperationLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58334);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);








const ApiCard = ({
  api
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "card",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_links_OperationLink__WEBPACK_IMPORTED_MODULE_2__/* .OperationLink */ .g, {
      apiName: api.name ?? '',
      className: "link-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "grid-card",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "card-header",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Leading, {
            className: "header-title",
            children: api.displayName ?? ''
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "card-body",
          children: api.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
            placement: "bottom",
            delay: [500, null],
            content: api.description,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "card-body-text-wrapper",
              children: api.description
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "card-footer",
          children: [api.tags.includes(_constants_Tags__WEBPACK_IMPORTED_MODULE_4__/* .TechPreviewTag */ .n) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Badge, {
            className: "badge tech-preview",
            children: "Tech preview"
          }), api.tags.includes(_constants_Tags__WEBPACK_IMPORTED_MODULE_4__/* .DeprecatedTag */ .l) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Badge, {
            className: "badge deprecated",
            children: "Deprecated"
          })]
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ApiCard);

/***/ }),

/***/ 47414:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": function() { return /* binding */ ApiDocumentation; },
  "s": function() { return /* binding */ MenuItems; }
});

// EXTERNAL MODULE: ./src/constants/ApiGroupId.ts
var ApiGroupId = __webpack_require__(7276);
// EXTERNAL MODULE: ./src/constants/ApiName.ts
var ApiName = __webpack_require__(94588);
// EXTERNAL MODULE: ./src/constants/Tags.ts
var Tags = __webpack_require__(57348);
// EXTERNAL MODULE: consume shared module (default) itwinui-v2@^2.12.0 (singleton) (fallback: ./node_modules/itwinui-v2/esm/index.js) (eager)
var index_js_eager_ = __webpack_require__(6227);
// EXTERNAL MODULE: ./src/components/Theme.tsx
var Theme = __webpack_require__(51974);
// EXTERNAL MODULE: ./src/components/icons/Indicators/DeprecationIcon.tsx
var DeprecationIcon = __webpack_require__(81334);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/Badges/DeprecatedBadge.tsx





function DeprecatedBadge() {
  return /*#__PURE__*/jsx_runtime_.jsx(Theme/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Tooltip, {
      content: Tags/* DeprecatedTag */.l,
      placement: "bottom",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(DeprecationIcon/* DeprecationIcon */.r, {})
      })
    })
  });
}
/* harmony default export */ var Badges_DeprecatedBadge = (DeprecatedBadge);
// EXTERNAL MODULE: ./src/components/icons/Indicators/TechPreviewIcon.tsx
var TechPreviewIcon = __webpack_require__(44930);
;// CONCATENATED MODULE: ./src/components/Badges/TechPreviewBadge.tsx





function TechPreviewBadge() {
  return /*#__PURE__*/jsx_runtime_.jsx(Theme/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Tooltip, {
      content: Tags/* TechPreviewTag */.n,
      placement: "bottom",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(TechPreviewIcon/* TechPreviewIcon */.d, {})
      })
    })
  });
}
/* harmony default export */ var Badges_TechPreviewBadge = (TechPreviewBadge);
;// CONCATENATED MODULE: ./src/constants/apiMenuItems.tsx






let MenuItems;

(function (MenuItems) {
  MenuItems["Overview"] = "overview";
  MenuItems["CalculatingVisualizationSessionHours"] = "calculating-visualization-session-hours";
  MenuItems["Documentation"] = "documentation";
  MenuItems["Tutorials"] = "tutorials";
  MenuItems["Samples"] = "samples";
  MenuItems["Changelog"] = "changelog";
  MenuItems["Reference"] = "operations";
  MenuItems["SupportedFormats"] = "supported-formats";
  MenuItems["CCImageCollection"] = "cc-ic";
  MenuItems["CCOrientations"] = "cc-ori";
  MenuItems["RDAContextScene"] = "rda-cs";
  MenuItems["RDAContextScene_V4"] = "rda-cs-v4";
  MenuItems["RDAContextDetector"] = "rda-cd";
  MenuItems["RDAJobTypes"] = "rda-jobtypes";
  MenuItems["RDDetails"] = "rd-details";
  MenuItems["RMRDDetails"] = "rm-rd-details";
  MenuItems["ApiKeys"] = "api-keys";
  MenuItems["Events"] = "events";
  MenuItems["BlueprintApiReference"] = "blueprint-api-reference";
  MenuItems["ModelVersions"] = "model-versions";
})(MenuItems || (MenuItems = {}));

class ApiDocumentation {
  static get allApiGroups() {
    return [...ApiGroupId/* allApiGroupIds */.vf];
  }

  static get menuItems() {
    return [{
      id: MenuItems.Overview,
      children: [],
      level: '1',
      displayName: 'Overview',
      path: `/${MenuItems.Overview}`
    }, {
      id: MenuItems.CalculatingVisualizationSessionHours,
      children: [],
      level: '1',
      displayName: 'Calculating Visualization Session Hours',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.Visualization */.L.Visualization,
      path: `/${MenuItems.CalculatingVisualizationSessionHours}`
    }, {
      id: MenuItems.SupportedFormats,
      children: [],
      level: '1',
      displayName: 'Supported formats',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.Synchronization */.L.Synchronization,
      path: `/${MenuItems.SupportedFormats}`
    }, {
      id: MenuItems.CCImageCollection,
      children: [],
      level: '1',
      displayName: 'CC Image Collection',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.ContextCapture */.L.ContextCapture,
      path: `/${MenuItems.CCImageCollection}`
    }, {
      id: MenuItems.CCOrientations,
      children: [],
      level: '1',
      displayName: 'CC Orientations',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.ContextCapture */.L.ContextCapture,
      path: `/${MenuItems.CCOrientations}`
    }, {
      id: MenuItems.RDAContextScene,
      children: [],
      level: '1',
      displayName: 'Context Scenes',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.RealityAnalysis */.L.RealityAnalysis,
      path: `/${MenuItems.RDAContextScene}`
    }, {
      id: MenuItems.RDAContextScene_V4,
      children: [],
      level: '1',
      displayName: 'Context Scenes version 4',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.RealityAnalysis */.L.RealityAnalysis,
      path: `/${MenuItems.RDAContextScene_V4}`
    }, {
      id: MenuItems.RDAContextDetector,
      children: [],
      level: '1',
      displayName: 'Context Detectors',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.RealityAnalysis */.L.RealityAnalysis,
      path: `/${MenuItems.RDAContextDetector}`
    }, {
      id: MenuItems.RDAJobTypes,
      children: [],
      level: '1',
      displayName: 'Job types',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.RealityAnalysis */.L.RealityAnalysis,
      path: `/${MenuItems.RDAJobTypes}`
    }, {
      id: MenuItems.RDDetails,
      children: [],
      level: '1',
      displayName: 'RealityData Properties',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.RealityData */.L.RealityData,
      path: `/${MenuItems.RDDetails}`
    }, {
      id: MenuItems.RMRDDetails,
      children: [],
      level: '1',
      displayName: 'Reality Data Properties',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.RealityManagement */.L.RealityManagement,
      path: `/${MenuItems.RMRDDetails}`
    }, {
      id: MenuItems.Events,
      children: [],
      level: '1',
      displayName: 'Events',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.Webhooks */.L.Webhooks,
      path: `/${MenuItems.Events}`
    }, {
      id: MenuItems.Tutorials,
      children: [],
      level: '1',
      displayName: 'Tutorials',
      path: `/${MenuItems.Tutorials}`,
      renderFunc: ({
        tutorials
      }) => !!tutorials?.length
    }, {
      id: MenuItems.Samples,
      children: [],
      level: '1',
      displayName: 'Samples',
      path: `/${MenuItems.Samples}`,
      renderFunc: () => true
    }, {
      id: MenuItems.Reference,
      children: [],
      level: '1',
      displayName: 'Reference',
      renderFunc: ({
        apiPath
      }) => apiPath !== ApiName/* ApiPath.Visualization */.L.Visualization,
      path: `/${MenuItems.Reference}`
    }, {
      id: MenuItems.Changelog,
      children: [],
      level: '1',
      displayName: 'Changelog',
      renderFunc: ({
        apiPath
      }) => apiPath !== ApiName/* ApiPath.Visualization */.L.Visualization,
      path: `/${MenuItems.Changelog}`
    }, {
      id: MenuItems.ApiKeys,
      children: [],
      level: '1',
      displayName: 'API Keys',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.Reporting */.L.Reporting || apiPath === ApiName/* ApiPath.Insights */.L.Insights,
      path: `/${MenuItems.ApiKeys}`
    }, {
      id: MenuItems.ModelVersions,
      children: [],
      level: '1',
      displayName: 'Model versions',
      renderFunc: ({
        apiPath
      }) => apiPath === ApiName/* ApiPath.PnIDToITwin */.L.PnIDToITwin,
      path: `/${MenuItems.ModelVersions}`
    }];
  }

  static getMenuItems(apiPath, tutorials) {
    return ApiDocumentation.menuItems.filter(menuItem => menuItem.renderFunc ? menuItem.renderFunc({
      apiPath,
      tutorials
    }) : true);
  } // Tutorials are being passed as a temporary solution as mdx file are not being found when trying to getTutorialMetadataByApi(apiPath) in this file


  static getMenuItemsWithOperations(apiName, apiPath, operationTagGroups, tutorials, ignoreTechPreview = true) {
    return ApiDocumentation.getMenuItems(apiPath, tutorials).map(apiDocMenuItem => {
      const leftSideNavItem = {
        id: apiDocMenuItem.id,
        title: apiDocMenuItem.displayName,
        href: apiDocMenuItem.fullPath ? apiDocMenuItem.path : `/apis/${apiName}${apiDocMenuItem.path}`,
        subItems: []
      };

      if (leftSideNavItem.id === MenuItems.Reference) {
        leftSideNavItem.caption = leftSideNavItem.href ? {
          title: 'View all',
          href: leftSideNavItem.href
        } : undefined;

        for (const tagGroup of operationTagGroups) {
          leftSideNavItem.subItems?.push({
            id: tagGroup.tag,
            subItems: tagGroup.items.map(operation => {
              return {
                id: operation.name,
                title: `${operation.displayName}`,
                href: `/apis/${apiName}${apiDocMenuItem.path}/${operation.name}`,
                prefix: operation.method,
                badge: operation.tags.includes(Tags/* DeprecatedTag */.l) ? /*#__PURE__*/jsx_runtime_.jsx(Badges_DeprecatedBadge, {}) : operation.tags.includes(Tags/* TechPreviewTag */.n) && !ignoreTechPreview ? /*#__PURE__*/jsx_runtime_.jsx(Badges_TechPreviewBadge, {}) : undefined
              };
            }).sort((one, two) => one.title < two.title ? -1 : 1),
            title: `${tagGroup.tag}`
          });
        }
      }

      leftSideNavItem.subItems = leftSideNavItem.subItems?.sort((one, two) => {
        //Place untagged at the end of the list
        if (two.title === 'Untagged') return -1;
        if (one.title === 'Untagged') return 1; //Sort a-z

        if (one.title < two.title) return -1;
        if (one.title > two.title) return 1;
        return 0;
      });
      return leftSideNavItem;
    });
  }

}

/***/ }),

/***/ 58334:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": function() { return /* binding */ OperationLink; },
/* harmony export */   "w": function() { return /* binding */ getOperationHref; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_apiMenuItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47414);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function getOperationHref(apiName, operationName, currentMenuItem) {
  return operationName ? `/apis/${apiName}/operations/${operationName}` : currentMenuItem ? `/apis/${apiName}/${_constants_apiMenuItems__WEBPACK_IMPORTED_MODULE_2__/* .ApiDocumentation.menuItems.map */ .U.menuItems.map(item => item.id).includes(currentMenuItem) ? currentMenuItem : _constants_apiMenuItems__WEBPACK_IMPORTED_MODULE_2__/* .MenuItems.Overview */ .s.Overview}` : `/apis/${apiName}`;
}
function OperationLink({
  apiName,
  className,
  operationName,
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: '/apis/[apiName]/[[...tab]]',
    as: getOperationHref(apiName, operationName),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
      className: className,
      children: children
    })
  });
}

/***/ }),

/***/ 32292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_apisApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46739);
/* harmony import */ var _components_Layouts_ApiGroupMarketing_ApiGroupMarketingLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14132);
/* harmony import */ var _components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80989);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7276);
/* harmony import */ var _constants_defaultApiGroups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30581);
/* harmony import */ var _services_mdService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79879);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_apisApi__WEBPACK_IMPORTED_MODULE_1__]);
_api_apisApi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function Page(props) {
  const {
    title,
    apiGroupId,
    marketingContent,
    apiGroup,
    apis: preloadedApis
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_3__/* .PageMetadata */ .d, {
      title: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_Layouts_ApiGroupMarketing_ApiGroupMarketingLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      apiGroupId: apiGroupId,
      apiGroup: apiGroup,
      preloadedApis: preloadedApis,
      content: marketingContent || ''
    })]
  });
}

const getStaticProps = async ctx => {
  const {
    apiGroupId
  } = ctx.params;
  const apiGroup = _constants_defaultApiGroups__WEBPACK_IMPORTED_MODULE_5__/* .DefaultApiGroups.apiGroupById */ .q.apiGroupById(apiGroupId);
  const title = `${apiGroup.displayName} | iTwin Platform`;
  const preloadedApis = await _api_apisApi__WEBPACK_IMPORTED_MODULE_1__/* .apisApi.getReleasedGroupApis */ .u.getReleasedGroupApis(apiGroup.name, undefined, false);
  const apiPromises = preloadedApis.map(api => (0,_services_mdService__WEBPACK_IMPORTED_MODULE_6__/* .preloadAPIContent */ .hW)(api.path).then(content => api.description = content || api.description));
  await Promise.all(apiPromises);
  const marketingContent = (0,_services_mdService__WEBPACK_IMPORTED_MODULE_6__/* .preloadMarketingContent */ .h1)(apiGroupId);
  return {
    props: {
      title,
      apiGroupId,
      apiGroup,
      marketingContent,
      apis: preloadedApis
    },
    revalidate: 3600
  };
};
const getStaticPaths = async () => {
  return {
    paths: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_4__/* .publicApiGroupsIds.map */ .nW.map(x => ({
      params: {
        apiGroupId: `${x}`
      }
    })),
    fallback: false
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Page);
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

/***/ 69319:
/***/ (function(module) {

module.exports = require("react-showdown");

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

/***/ 23617:
/***/ (function(module) {

module.exports = import("axios-retry");;

/***/ }),

/***/ 61024:
/***/ (function(module) {

module.exports = import("mermaid");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,6296,2196,5217,6227,1974,236,1477,5829,1686,5781,9209,175,4588,8816,9858,6739,347,1878,1727,7246,1890,4930,3627,9444,8362], function() { return __webpack_exec__(32292); });
module.exports = __webpack_exports__;

})();