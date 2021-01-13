(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "YzFs":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"blog-module--container--1pCGB","loader":"blog-module--loader--27Uha","inner":"blog-module--inner--3N3oy","spin":"blog-module--spin--1ZuQ_","post":"blog-module--post--oYMJm"};

/***/ }),

/***/ "fCFq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Dj+");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TJpk");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blog_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YzFs");
/* harmony import */ var _blog_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blog_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function BlogPost(props) {
  var post = props.data.markdownRemark;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    pageTitle: post.frontmatter.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/paraiso-dark.min.css",
    crossOrigin: "anonymous"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _blog_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, post.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: post.html
    }
  })));
}
var query = "4155115450";

/***/ })

}]);
//# sourceMappingURL=component---src-components-blog-page-tsx-98839c1f48d27880ffdd.js.map