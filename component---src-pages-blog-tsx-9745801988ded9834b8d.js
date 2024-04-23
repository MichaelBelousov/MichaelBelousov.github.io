(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "1GPU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+Rry");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nNWW");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Dj+");
/* harmony import */ var _blog_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UBO4");
/* harmony import */ var _blog_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blog_module_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var perYear = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
    return props.data.allMarkdownRemark.edges.reduce(function (prev, _ref) {
      var node = _ref.node;

      var _node$frontmatter$dat = node.frontmatter.date.match(/\d+$/),
          year = _node$frontmatter$dat[0];

      var key = year;
      if (!prev.has(key)) prev.set(key, []);
      prev.get(key).push(node);
      return prev;
    }, new Map());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    pageTitle: "Blog"
  }, Array.from(perYear.entries(), function (_ref2) {
    var year = _ref2[0],
        edges = _ref2[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: year
    }, year, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, edges.map(function (node, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: node.fields.slug,
        className: _blog_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blogLink
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, node.frontmatter.title)));
    })));
  }));
});
var pageQuery = "437183399";

/***/ }),

/***/ "UBO4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blogLink":"blog-module--blogLink--1dLLs"};

/***/ })

}]);
//# sourceMappingURL=component---src-pages-blog-tsx-9745801988ded9834b8d.js.map