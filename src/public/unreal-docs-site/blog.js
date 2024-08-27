"use strict";
(function() {
var exports = {};
exports.id = 9195;
exports.ids = [9195,4820];
exports.modules = {

/***/ 89344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ blog; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/PageMetadata/PageMetadata.tsx
var PageMetadata = __webpack_require__(80989);
// EXTERNAL MODULE: consume shared module (default) itwinui-v1@^1.48.3 (singleton) (fallback: ./node_modules/itwinui-v1/cjs/index.js) (eager)
var index_js_eager_ = __webpack_require__(85217);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/@itwin/itwinui-icons-react/cjs/index.js
var cjs = __webpack_require__(56296);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/pages/Blog/Blog.tsx








function BlogPage(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "page",
    className: "container blog-container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "blog-header",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "blog-header-content",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          id: "blog-header-text",
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Headline, {
            children: "iTwin blog"
          }), "From understanding digital twin to using an iModel, learn all that there is to know about the iTwin Platform by following our latest news."]
        }), /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          id: "blog-header-image",
          src: "/unreal-docs-site/static/images/blog-header-illustration.svg",
          alt: "blog-header-illustration",
          width: 300,
          height: 267
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "blog-content",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "blog-content-body",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "blog-list",
          children: [props.blogs.map(blog => {
            return /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "blog-list-item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "blog-link",
                href: blog.url,
                target: "_blank",
                rel: "noreferrer",
                children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Tile, {
                  metadata: blog.author + ' - ' + blog.date + ' - ' + blog.readTime + ' read',
                  name: blog.title,
                  description: blog.description,
                  thumbnail: blog.image ? blog.image : '/images/blog/blog-default.png',
                  isActionable: true
                }), /*#__PURE__*/jsx_runtime_.jsx(cjs.SvgWindowPopout, {
                  className: "blog-link-icon"
                })]
              })
            }, blog.url);
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "https://medium.com/itwinjs",
            id: "see-more-anchor",
            children: ["See more articles", /*#__PURE__*/jsx_runtime_.jsx(cjs.SvgWindowPopout, {
              id: "popout-icon"
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ var Blog = (BlogPage);
;// CONCATENATED MODULE: ./public/blogs.json
var blogs_namespaceObject = JSON.parse('{"Z":[{"url":"https://medium.com/itwinjs/announcement-my-itwins-62fd7e1587a9","title":"Announcement: My iTwins","description":"Recently, the iTwin Platform released a new tool for creating and managing Test iTwins - My iTwins. My iTwins is the successor to the My iModels page and provides tools for developing on the iTwin Platform.","author":"William K. Bentley","date":"Jul 7,2023","image":"/unreal-docs-site/static/images/blog/Anouncement.png","readTime":"3 min"},{"url":"https://medium.com/itwinjs/a-dgn-with-dreams-c65d54a926bd","title":"A DGN with Dreams","description":"This is a story about a DGN file. A DGN file that wanted to be so much more than just a file. It would spend its days quietly sitting inside the folder of a computer. Hours, days, weeks would go by. The endless hours of silence were broken by occasional chit-chats with the neighboring files.","author":"Roop Saini","date":"Dec 14, 2022","image":"/unreal-docs-site/static/images/blog/DGN.png","readTime":"4 min"},{"url":"https://medium.com/itwinjs/animations-in-itwin-js-7272297401c8","title":"Animation in iTwin.js","description":"A few weeks ago, I was thrilled to publish my very first blogpost. It was about creating what I called a \\"car ant farm\\" in iTwin.js. As soon as I put the post out...it got tons of buzz.","author":"Roop Saini","date":"September 14, 2022","image":"/unreal-docs-site/static/images/blog/blog1.png","readTime":"3 min"},{"url":"https://medium.com/itwinjs/p-id-to-itwin-accelerating-digitalization-using-machine-learning-c70573a6d083","title":"P&ID to iTwin: Accelerating Digitalization using Machine Learning","description":"Creating a Digital Twin can be a daunting task. Even with the help of excellent tools such as Classifiers, a real-world object\'s sheer size and complexity can often represent a significant roadblock to successfully creating a digital twin.","author":"Justin Dehorty","date":"August 18, 2022","image":"/unreal-docs-site/static/images/blog/blog2.png","readTime":"5 min"},{"url":"https://medium.com/itwinjs/validation-an-imperfect-course-c153cc94c3e3","title":"Validation - An imperfect course","description":"I had just come back from a week-long vacation. It was 8:00 am...and I was in my first Monday morning meeting. My post-vacation haze immediately dissipated.","author":"Roop Saini","date":"August 2, 2022","image":"/unreal-docs-site/static/images/blog/blog3.png","readTime":"3 min"}]}');
// EXTERNAL MODULE: ./src/components/PageUnderFeatureFlag/PageUnderFeatureFlag.tsx + 1 modules
var PageUnderFeatureFlag = __webpack_require__(2905);
// EXTERNAL MODULE: ./src/constants/flags.ts
var flags = __webpack_require__(46415);
;// CONCATENATED MODULE: ./src/pages/blog/index.tsx
__webpack_require__(14473);











function Page(props) {
  const {
    blogs
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(PageUnderFeatureFlag/* PageUnderFeatureFlag */.A, {
    flagName: flags/* FLAG_BLOG */.Vg,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(PageMetadata/* PageMetadata */.d, {
        title: "Blog | iTwin Platform"
      }), /*#__PURE__*/jsx_runtime_.jsx(Blog, {
        blogs: blogs
      })]
    })
  });
}

async function getStaticProps() {
  const blogs = blogs_namespaceObject.Z;
  return {
    props: {
      blogs
    }
  };
}
/* harmony default export */ var blog = (Page);

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

/***/ 94957:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ (function(module) {

module.exports = require("next/dist/shared/lib/image-config.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,5152,6296,8866,2196,5217,6227,1974,6415,1993,2905], function() { return __webpack_exec__(89344); });
module.exports = __webpack_exports__;

})();