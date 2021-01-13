(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "hkpG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nNWW");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _work_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qysu");
/* harmony import */ var _work_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_work_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Dj+");


 // TODO: replace with object? can't remember why I stopped using an object element

var calcHeight = function calcHeight(windowHeight) {};

var Work = function Work() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(
  /*window.innerHeight*/
  "7in"),
      height = _useState[0],
      setHeight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    var resizePDF = function resizePDF() {};

    document.addEventListener('resize', resizePDF);
    return function () {
      return document.removeEventListener('resize', resizePDF);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    pageTitle: "Work"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " It isn't up to date, since I'm not looking for new serious employment right now. "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _work_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Michael Belousov's Resume:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "mike's resume pdf",
    className: _work_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pdf,
    src: "https://docs.google.com/gview?url=http://github.com/MichaelBelousov/resume/raw/master/resume.pdf&embedded=true" //frameborder="0"
    ,
    style: {
      height: height
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " You can't see it apparently. My resume as a PDF should be at my github page,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://github.com/MichaelBelousov/resume"
  }, "here"), "."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ "qysu":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"work-module--container--31LKz","pdf":"work-module--pdf--8cbUT"};

/***/ })

}]);
//# sourceMappingURL=component---src-pages-work-tsx-ee69e68621a4e5486dce.js.map