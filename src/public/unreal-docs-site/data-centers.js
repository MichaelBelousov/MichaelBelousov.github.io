"use strict";
(function() {
var exports = {};
exports.id = 3479;
exports.ids = [3479];
exports.modules = {

/***/ 99769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ data_centers; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/PageMetadata/PageMetadata.tsx
var PageMetadata = __webpack_require__(80989);
// EXTERNAL MODULE: ./src/components/PageUnderFeatureFlag/PageUnderFeatureFlag.tsx + 1 modules
var PageUnderFeatureFlag = __webpack_require__(2905);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(36864);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4730);
// EXTERNAL MODULE: external "@mdx-js/react"
var react_ = __webpack_require__(57425);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/mdx-loader/index.js!./public/documentation/data-centers/data-centers.md


var _excluded = ["components"];
var __jsx = (external_react_default()).createElement;


var readingTime = {
  "text": "1 min read",
  "minutes": 0.225,
  "time": 13500,
  "words": 45
};
/* @jsxRuntime classic */
/* @jsx mdx */

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
    props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
  return (0,react_.mdx)(MDXLayout, (0,esm_extends/* default */.Z)({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,react_.mdx)("p", null, "To ensure that the iTwin Platform services are always available, Bentley uses multiple data centers located worldwide. However, not all services are available in all data centers. Please note that supported data centers are updated frequently. We recommend checking back periodically for the latest updates."));
}
;
MDXContent.isMDXComponent = true;
var tableOfContents = function tableOfContents() {
  var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [];
};
var frontMatter = {};
// EXTERNAL MODULE: consume shared module (default) itwinui-v1@^1.48.3 (singleton) (fallback: ./node_modules/itwinui-v1/cjs/index.js) (eager)
var index_js_eager_ = __webpack_require__(85217);
// EXTERNAL MODULE: ./src/components/mdx/documentation.tsx
var documentation = __webpack_require__(10246);
// EXTERNAL MODULE: ./src/components/Layouts/PageWithHeading/PageWithHeading.tsx + 1 modules
var PageWithHeading = __webpack_require__(31727);
// EXTERNAL MODULE: consume shared module (default) itwinui-v2@^2.12.0 (singleton) (fallback: ./node_modules/itwinui-v2/esm/index.js) (eager)
var esm_index_js_eager_ = __webpack_require__(6227);
// EXTERNAL MODULE: ./node_modules/@itwin/itwinui-icons-react/cjs/index.js
var cjs = __webpack_require__(56296);
;// CONCATENATED MODULE: ./src/constants/DataCenters.ts
let AvailabilityInRegion;

(function (AvailabilityInRegion) {
  AvailabilityInRegion["Available"] = "available";
  AvailabilityInRegion["NotAvailable"] = "not-available";
})(AvailabilityInRegion || (AvailabilityInRegion = {}));

const regions = {
  name: 'iTwin platform services',
  eastUS: 'East US',
  canadaCentral: 'Canada Central',
  ukSouth: 'UK South',
  northEurope: 'North Europe',
  japanEast: 'Japan East',
  australiaEast: 'Australia East',
  southeastAsia: 'Southeast Asia',
  southAfricaNorth: 'South Africa North',
  centralIndia: 'Central India',
  westEurope: 'West Europe',
  uaeNorth: 'UAE North'
};
const dataCentersData = [{
  name: 'Access Control',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.Available,
  westEurope: AvailabilityInRegion.Available,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Carbon Calculation',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Changed Elements',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Clash Detection',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Export',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Forms',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'iModels',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'iModels OData',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Issues',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'iTwins',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.Available,
  westEurope: AvailabilityInRegion.Available,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Library',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.NotAvailable,
  ukSouth: AvailabilityInRegion.NotAvailable,
  northEurope: AvailabilityInRegion.NotAvailable,
  japanEast: AvailabilityInRegion.NotAvailable,
  australiaEast: AvailabilityInRegion.NotAvailable,
  southeastAsia: AvailabilityInRegion.NotAvailable,
  southAfricaNorth: AvailabilityInRegion.NotAvailable,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Mesh Export',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'PnID to iTwin',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.Available,
  westEurope: AvailabilityInRegion.Available,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Projects',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.Available,
  westEurope: AvailabilityInRegion.Available,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Property Validation',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Reality Analysis',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.NotAvailable,
  ukSouth: AvailabilityInRegion.NotAvailable,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.NotAvailable,
  australiaEast: AvailabilityInRegion.NotAvailable,
  southeastAsia: AvailabilityInRegion.NotAvailable,
  southAfricaNorth: AvailabilityInRegion.NotAvailable,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Reality Conversion',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.NotAvailable,
  ukSouth: AvailabilityInRegion.NotAvailable,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.NotAvailable,
  australiaEast: AvailabilityInRegion.NotAvailable,
  southeastAsia: AvailabilityInRegion.NotAvailable,
  southAfricaNorth: AvailabilityInRegion.NotAvailable,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Reality Data',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.NotAvailable,
  centralIndia: AvailabilityInRegion.Available,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.Available
}, {
  name: 'Reality Management',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.NotAvailable,
  centralIndia: AvailabilityInRegion.Available,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.Available
}, {
  name: 'Reality Modeling',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.NotAvailable,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.NotAvailable,
  centralIndia: AvailabilityInRegion.Available,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Reporting',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Saved Views',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Sensor Data',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.NotAvailable,
  ukSouth: AvailabilityInRegion.NotAvailable,
  northEurope: AvailabilityInRegion.NotAvailable,
  japanEast: AvailabilityInRegion.NotAvailable,
  australiaEast: AvailabilityInRegion.NotAvailable,
  southeastAsia: AvailabilityInRegion.NotAvailable,
  southAfricaNorth: AvailabilityInRegion.NotAvailable,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Storage',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Synchronization',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Transformations',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Users',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.NotAvailable,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.NotAvailable,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.NotAvailable,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Visualization',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Webhooks',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.NotAvailable,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.NotAvailable,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.NotAvailable,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}, {
  name: 'Grouping and Mapping',
  eastUS: AvailabilityInRegion.Available,
  canadaCentral: AvailabilityInRegion.Available,
  ukSouth: AvailabilityInRegion.Available,
  northEurope: AvailabilityInRegion.Available,
  japanEast: AvailabilityInRegion.Available,
  australiaEast: AvailabilityInRegion.Available,
  southeastAsia: AvailabilityInRegion.Available,
  southAfricaNorth: AvailabilityInRegion.Available,
  centralIndia: AvailabilityInRegion.NotAvailable,
  westEurope: AvailabilityInRegion.NotAvailable,
  uaeNorth: AvailabilityInRegion.NotAvailable
}];
// EXTERNAL MODULE: ./src/components/Theme.tsx
var Theme = __webpack_require__(51974);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/pages/DataCenters/DataCentersTableInfo.tsx





const DataCentersTableInfo = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("table", {
    className: "data-centers-table-info",
    children: /*#__PURE__*/jsx_runtime_.jsx("tbody", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
          className: "data-centers-table-info-icon",
          children: /*#__PURE__*/jsx_runtime_.jsx(cjs.SvgStatusSuccess, {
            className: "available-icon availability-icon"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("td", {
          className: "data-centers-table-info-text",
          children: "Available in the region"
        })]
      })
    })
  });
};

/* harmony default export */ var DataCenters_DataCentersTableInfo = (DataCentersTableInfo);
;// CONCATENATED MODULE: ./src/components/pages/DataCenters/DataCentersTable.tsx









function DataCentersTable({
  headers,
  data
}) {
  const columns = Object.keys(headers).map((key, index) => ({
    id: key,
    Header: Object.values(headers)[index],
    accessor: key,
    minWidth: index === 0 ? 200 : 0,
    cellClassName: 'cell',
    columnClassName: 'cell',
    Cell: cell => {
      switch (cell.value) {
        case AvailabilityInRegion.Available:
          return /*#__PURE__*/jsx_runtime_.jsx(cjs.SvgStatusSuccess, {
            className: "cell-content available-icon"
          });

        case AvailabilityInRegion.NotAvailable:
          return /*#__PURE__*/jsx_runtime_.jsx(cjs.SvgMinimize, {
            className: "cell-content"
          });

        default:
          return /*#__PURE__*/jsx_runtime_.jsx(esm_index_js_eager_.Text, {
            children: cell.value
          });
      }
    }
  }));
  return /*#__PURE__*/jsx_runtime_.jsx(Theme/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "data-centers-table",
      children: [/*#__PURE__*/jsx_runtime_.jsx(DataCenters_DataCentersTableInfo, {}), /*#__PURE__*/jsx_runtime_.jsx(esm_index_js_eager_.Table, {
        id: "data-centers-table",
        columns: columns,
        data: data,
        emptyTableContent: "Data center locations table content is unavailable."
      })]
    })
  });
}

/* harmony default export */ var DataCenters_DataCentersTable = (DataCentersTable);
;// CONCATENATED MODULE: ./src/components/pages/DataCenters/DataCenters.tsx
/* eslint-disable import/no-webpack-loader-syntax */










function DataCentersPage(props) {
  const {
    tableData,
    tableHeaders
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "data-centers-page-content",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageWithHeading/* default */.Z, {
      headerContent: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Headline, {
        children: "Data Center Locations"
      }),
      newVersion: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MDXProvider, {
        components: documentation/* mdComponents */.Z,
        children: /*#__PURE__*/jsx_runtime_.jsx(MDXContent, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(DataCenters_DataCentersTable, {
        headers: tableHeaders,
        data: tableData
      })]
    })
  });
}

/* harmony default export */ var DataCenters = (DataCentersPage);
// EXTERNAL MODULE: ./src/constants/flags.ts
var flags = __webpack_require__(46415);
;// CONCATENATED MODULE: ./src/pages/data-centers/index.tsx
__webpack_require__(14473);











function Page(props) {
  const {
    tableHeaders,
    tableData
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(PageUnderFeatureFlag/* PageUnderFeatureFlag */.A, {
    flagName: flags/* FLAG_DATA_CENTER_LOCATIONS */.XS,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(PageMetadata/* PageMetadata */.d, {
        title: "Data Center Locations | iTwin Platform"
      }), /*#__PURE__*/jsx_runtime_.jsx(DataCenters, {
        tableHeaders: tableHeaders,
        tableData: tableData
      })]
    })
  });
}

async function getStaticProps() {
  const tableData = dataCentersData.sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1);
  const tableHeaders = regions;
  return {
    props: {
      tableData,
      tableHeaders
    }
  };
}
/* harmony default export */ var data_centers = (Page);

/***/ }),

/***/ 17155:
/***/ (function(module) {

module.exports = require("@itwin/itwinui-illustrations-react");

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

/***/ 59003:
/***/ (function(module) {

module.exports = require("classnames");

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

/***/ 52458:
/***/ (function(module) {

module.exports = require("pullstate");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,5152,6296,788,2196,5217,6227,1974,6909,347,1878,1727,6415,1993,2905,4930,246], function() { return __webpack_exec__(99769); });
module.exports = __webpack_exports__;

})();