"use strict";
(function() {
var exports = {};
exports.id = 2013;
exports.ids = [2013,4352,9104,9444,8362];
exports.modules = {

/***/ 89104:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70347);
/* harmony import */ var _itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61686);
/* harmony import */ var _next_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54963);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44352);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);












function CommonLayout({
  className,
  children,
  theme,
  headerContent,
  breadcrumbs = [],
  sideNavigation,
  contentAlert,
  padded
}) {
  const noFooterPageRegex = [`.*${_constants_paths__WEBPACK_IMPORTED_MODULE_2__/* .APPS */ .ei}`, `.*${_constants_paths__WEBPACK_IMPORTED_MODULE_2__/* .REGISTER */ .Nz}`, `.*${_constants_paths__WEBPACK_IMPORTED_MODULE_2__/* .APPS_V2 */ .Nd}`, `.*${_constants_paths__WEBPACK_IMPORTED_MODULE_2__/* .REGISTER_V2 */ ._m}`];

  const footer = !noFooterPageRegex.some(p => new RegExp(p).test(_next_utils__WEBPACK_IMPORTED_MODULE_7__/* .NextUtils.isPreloading */ .l.isPreloading ? '' : window.location.pathname)) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$, {
    theme: theme
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [sideNavigation, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_1__.PageLayout.Content, {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['content-container-base', 'transparent-container', className]),
      children: [(headerContent || contentAlert) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_1__.PageLayout.TitleArea, {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['page-title-area', padded ? 'padded' : undefined, breadcrumbs.length > 0 ? 'with-breadcrumbs' : undefined]),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_1__.PageLayout.Content, {
          className: "transparent-container page-title-area-content",
          padded: padded,
          children: [breadcrumbs.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_4__.Breadcrumbs, {
              className: "breadcrumbs",
              children: breadcrumbs
            })
          }), headerContent]
        }), contentAlert]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "content-container-body",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_1__.PageLayout.Content, {
          className: "transparent-container content-container",
          padded: padded,
          children: children
        }), footer]
      })]
    })]
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (CommonLayout);

/***/ }),

/***/ 50528:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ LeftSideNavigation_LeftSideNavigation; }
});

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: consume shared module (default) @itwin/itwinui-layouts-react@~0.1.3 (singleton) (fallback: ./node_modules/@itwin/itwinui-layouts-react/dist/esm/index.js) (eager)
var index_js_eager_ = __webpack_require__(70347);
// EXTERNAL MODULE: ./src/components/Theme.tsx
var Theme = __webpack_require__(51974);
// EXTERNAL MODULE: consume shared module (default) itwinui-v2@^2.12.0 (singleton) (fallback: ./node_modules/itwinui-v2/esm/index.js) (eager)
var esm_index_js_eager_ = __webpack_require__(6227);
// EXTERNAL MODULE: ./node_modules/@itwin/itwinui-icons-react/cjs/index.js
var cjs = __webpack_require__(56296);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/Layouts/LeftSideNavigation/LeftSideNavigationHeader.tsx







function LeftSideNavigationHeader({
  isExpanded = false,
  onExpanderClick,
  onSearch,
  customHeaderContent
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()(['left-side-nav-header', isExpanded ? 'expanded' : 'collapsed']),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "left-side-nav-title-container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "left-side-nav-title-section",
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm_index_js_eager_.Text, {
          className: "left-side-nav-title",
          variant: "title",
          children: "Table of contents"
        }), /*#__PURE__*/jsx_runtime_.jsx(esm_index_js_eager_.IconButton, {
          className: "left-side-nav-expander",
          styleType: "borderless",
          onClick: onExpanderClick,
          size: "small",
          children: /*#__PURE__*/jsx_runtime_.jsx(cjs.SvgMenu, {})
        })]
      }), onSearch &&
      /*#__PURE__*/
      // Should replace LabeledInput with SearchBox after full migration to iTwin UI v2
      jsx_runtime_.jsx(esm_index_js_eager_.LabeledInput, {
        id: "search-input",
        className: "left-side-nav-header-item",
        role: "searchbox",
        placeholder: 'Search...',
        svgIcon: /*#__PURE__*/jsx_runtime_.jsx(cjs.SvgSearch, {}),
        iconDisplayStyle: "inline",
        onChange: event => onSearch(event.currentTarget.value)
      }), customHeaderContent && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "left-side-nav-header-item",
        children: customHeaderContent
      })]
    })
  });
}

/* harmony default export */ var LeftSideNavigation_LeftSideNavigationHeader = (LeftSideNavigationHeader);
;// CONCATENATED MODULE: ./src/components/Layouts/LeftSideNavigation/LeftSideNavigationSection.tsx





function LeftSideNavigationSection({
  title,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "left-side-nav-section",
    children: [title && /*#__PURE__*/jsx_runtime_.jsx(esm_index_js_eager_.Text, {
      variant: "small",
      "data-variant": "small",
      className: 'left-side-nav-title',
      children: title
    }), children && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "left-side-nav-section-content",
      children: children
    })]
  });
}

/* harmony default export */ var LeftSideNavigation_LeftSideNavigationSection = (LeftSideNavigationSection);
// EXTERNAL MODULE: ./src/links/SimpleLink.tsx
var SimpleLink = __webpack_require__(73351);
// EXTERNAL MODULE: external "chroma-js"
var external_chroma_js_ = __webpack_require__(66303);
var external_chroma_js_default = /*#__PURE__*/__webpack_require__.n(external_chroma_js_);
;// CONCATENATED MODULE: ./src/components/Layouts/LeftSideNavigation/NavigationItem.tsx








function NavigationItem(props) {
  const {
    title,
    prefix,
    href,
    level,
    onClick,
    isActive,
    highlightColor,
    badge
  } = props;
  const style = (0,external_react_.useMemo)(() => ({
    '--highlight-color': highlightColor,
    '--highlight-background-color': highlightColor ? external_chroma_js_default()(highlightColor).alpha(0.05).hex() : undefined
  }), [highlightColor]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: style,
    className: external_classnames_default()(['left-side-nav-item', isActive ? 'active' : undefined, `level-${level}`]),
    children: [prefix && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: `${prefix.toLowerCase()} method`,
      children: prefix
    }), href ? /*#__PURE__*/jsx_runtime_.jsx(SimpleLink/* default */.Z, {
      href: href,
      onClick: onClick,
      children: title
    }) : title, badge && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "left-side-nav-item-badge",
      children: badge
    })]
  });
}

/* harmony default export */ var LeftSideNavigation_NavigationItem = (NavigationItem);
;// CONCATENATED MODULE: ./src/components/Layouts/LeftSideNavigation/NavigationExpandableBlock.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function NavigationExpandableBlock(props) {
  const {
    id,
    title,
    href,
    prefix,
    subItems = [],
    icon,
    highlightColor,
    badge,
    caption,
    forceExpand = false,
    onClick,
    activeItem,
    level = 1
  } = props;
  const style = (0,external_react_.useMemo)(() => ({
    '--highlight-color': highlightColor,
    '--highlight-background-color': highlightColor ? external_chroma_js_default()(highlightColor).alpha(0.05).hex() : undefined
  }), [highlightColor]);
  const isActive = id === activeItem;
  const {
    0: isExpanded,
    1: setIsExpanded
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    function filter(array, condition) {
      return array.reduce((array, currentValue) => {
        const subItems = filter(currentValue.subItems || [], condition);

        if (condition(currentValue) || subItems.length) {
          const navItem = Object.assign({}, currentValue, subItems.length && {
            subItems
          });
          array.push(navItem);
        }

        return array;
      }, []);
    }

    setIsExpanded(prevState => prevState || filter(subItems, ({
      id
    }) => id === activeItem).length > 0 || isActive);
  }, [isActive, subItems, activeItem]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: subItems.length === 0 ? /*#__PURE__*/jsx_runtime_.jsx(LeftSideNavigation_NavigationItem, _objectSpread(_objectSpread({}, props), {}, {
      level: level,
      isActive: isActive,
      highlightColor: highlightColor,
      onClick: onClick ? () => onClick(id ?? '') : undefined,
      href: href,
      prefix: prefix,
      badge: badge
    })) : /*#__PURE__*/jsx_runtime_.jsx(esm_index_js_eager_.ExpandableBlock, {
      title: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "left-side-nav-expandable-title",
          children: [title, badge && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "left-side-nav-item-badge",
            children: badge
          })]
        }), isExpanded && caption && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "left-side-nav-item-caption",
          children: /*#__PURE__*/jsx_runtime_.jsx(SimpleLink/* default */.Z, {
            href: caption.href,
            onClick: event => {
              if (onClick && id) {
                onClick(id);
              }

              event.stopPropagation();
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(esm_index_js_eager_.Text, {
              variant: "small",
              as: "small",
              children: caption.title
            })
          }, caption.title)
        })]
      }),
      styleType: "borderless",
      endIcon: icon,
      className: external_classnames_default()(['left-side-nav-expandable', `level-${level}`, isActive ? 'active' : undefined, icon ? 'with-icon' : undefined]),
      style: style,
      isExpanded: isExpanded || forceExpand,
      onToggle: () => setIsExpanded(prevState => !prevState),
      size: level !== 1 ? 'small' : 'default',
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "nav-expandable-content",
        children: subItems.map(item => /*#__PURE__*/jsx_runtime_.jsx(NavigationExpandableBlock, _objectSpread({
          forceExpand: forceExpand,
          level: level + 1,
          activeItem: activeItem,
          onClick: onClick
        }, item), item.title))
      })
    })
  });
}

/* harmony default export */ var LeftSideNavigation_NavigationExpandableBlock = (NavigationExpandableBlock);
;// CONCATENATED MODULE: ./src/components/Layouts/LeftSideNavigation/LeftSideNavigation.tsx
function LeftSideNavigation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function LeftSideNavigation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? LeftSideNavigation_ownKeys(Object(source), !0).forEach(function (key) { LeftSideNavigation_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : LeftSideNavigation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function LeftSideNavigation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function LeftSideNavigation({
  sections,
  activeItem,
  className,
  expand = true,
  customHeaderContent
}) {
  const {
    0: isExpanded,
    1: setIsExpanded
  } = (0,external_react_.useState)(expand);
  const {
    0: expandBlocks,
    1: setExpandBlocks
  } = (0,external_react_.useState)(sections.length === 1);
  const {
    0: sectionsToShow,
    1: setSectionsToShow
  } = (0,external_react_.useState)(sections);
  const {
    0: currentActiveItem,
    1: setCurrentActiveItem
  } = (0,external_react_.useState)(activeItem);
  const {
    0: searchText,
    1: setSearchText
  } = (0,external_react_.useState)('');
  const searchHandle = (0,external_react_.useCallback)(searchValue => {
    function filter(array, condition) {
      return array.reduce((array, currentValue) => {
        const subItems = filter(currentValue.subItems || [], condition);

        if (condition(currentValue) || subItems.length) {
          const navItem = Object.assign({}, currentValue, subItems.length && {
            subItems
          });
          array.push(navItem);
        }

        return array;
      }, []);
    }

    return sections.map(section => {
      return Object.assign({}, section, {
        navItems: section.navItems ? filter(section.navItems, ({
          title
        }) => title.toLowerCase().includes(searchValue.toLowerCase())) : []
      });
    });
  }, [sections]);

  const onClick = value => {
    setCurrentActiveItem(value);
  };

  (0,external_react_.useEffect)(() => {
    setSectionsToShow(searchHandle(searchText));
  }, [searchHandle, searchText]);
  return sections.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.PageLayout.SideNavigation, {
    className: external_classnames_default()([className, 'left-side-nav', isExpanded ? 'expanded' : undefined]),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Theme/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(LeftSideNavigation_LeftSideNavigationHeader, {
        isExpanded: isExpanded,
        onExpanderClick: () => {
          setIsExpanded(prevState => !prevState);
        },
        onSearch: search => {
          setSearchText(search);
          const result = searchHandle(search);
          setSectionsToShow(result);
          setExpandBlocks(true);
        },
        customHeaderContent: customHeaderContent
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "nav-item-container",
        children: sectionsToShow.map((section, index) => section.navItems && section.navItems.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(LeftSideNavigation_LeftSideNavigationSection, {
          title: section.sectionTitle,
          children: section.navItems.map((navItem, index) => /*#__PURE__*/jsx_runtime_.jsx(LeftSideNavigation_NavigationExpandableBlock, LeftSideNavigation_objectSpread({
            forceExpand: expandBlocks,
            onClick: onClick,
            activeItem: currentActiveItem,
            highlightColor: navItem.highlightColor ?? section.highlightColor
          }, navItem), `${navItem.title}${index}`))
        }, `${section.sectionTitle}${index}`))
      })]
    })
  }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

/* harmony default export */ var LeftSideNavigation_LeftSideNavigation = (LeftSideNavigation);

/***/ }),

/***/ 19444:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ MarkdownViewWithMermaid; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_showdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69319);
/* harmony import */ var react_showdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_showdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useMermaid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2961);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MarkdownViewWithMermaid = props => {
  (0,_hooks_useMermaid__WEBPACK_IMPORTED_MODULE_2__/* .useMermaid */ .p)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_showdown__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread({}, props));
};

/***/ }),

/***/ 44352:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61686);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Footer({
  theme = 'inherit'
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    theme: theme,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Footer, {
      className: "footer",
      customElements: defaultElements => defaultElements.map(element => _objectSpread(_objectSpread({}, element), {}, {
        url: element.key === 'termsOfService' ? _constants_paths__WEBPACK_IMPORTED_MODULE_1__/* .TERMS_OF_SERVICE */ .sz : element.url
      }))
    })
  });
}

/***/ }),

/***/ 81334:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ DeprecationIcon; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["className", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const DeprecationIcon = _ref => {
  let {
    className,
    size = 'default'
  } = _ref,
      restProp = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__.SvgStatusWarning, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['indicator-icon', 'deprecated', size, className])
  }, restProp));
};

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

/***/ 46233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Tags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57348);
/* harmony import */ var _icons_GroupIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61890);
/* harmony import */ var _icons_Indicators_DeprecationIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81334);
/* harmony import */ var _icons_Indicators_TechPreviewIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44930);
/* harmony import */ var _GroupTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57090);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61686);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);












const ApiGroupTile = ({
  group,
  apis
}) => {
  const thumbnail = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: "group-tile-thumbnail",
    style: {
      backgroundColor: group.backgroundColor
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_icons_GroupIcon__WEBPACK_IMPORTED_MODULE_1__/* .GroupIcon */ .B, {
      apiGroupId: group.id,
      className: "group-icon",
      style: {
        fill: group.color
      }
    })
  });

  const techPreviewBadge = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Badge, {
    backgroundColor: "#ffcf00",
    className: "badge",
    children: "Tech preview"
  });

  const showGroupTechPreview = apis.every(api => api.tags.includes(_constants_Tags__WEBPACK_IMPORTED_MODULE_7__/* .TechPreviewTag */ .n));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_GroupTile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    displayName: group.displayName,
    groupHref: `${_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .API_GROUPS */ .Ss}/${group.id}`,
    thumbnail: thumbnail,
    badge: showGroupTechPreview && techPreviewBadge,
    description: group.description,
    links: apis.map(api => ({
      displayName: api.displayName,
      href: `${_constants_paths__WEBPACK_IMPORTED_MODULE_5__/* .DOCUMENTATION */ .tQ}/${api.name}/overview`,
      badge: !showGroupTechPreview ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [api.tags.includes(_constants_Tags__WEBPACK_IMPORTED_MODULE_7__/* .TechPreviewTag */ .n) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
          content: _constants_Tags__WEBPACK_IMPORTED_MODULE_7__/* .TechPreviewTag */ .n,
          placement: "bottom",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_icons_Indicators_TechPreviewIcon__WEBPACK_IMPORTED_MODULE_3__/* .TechPreviewIcon */ .d, {})
          })
        }), api.tags.includes(_constants_Tags__WEBPACK_IMPORTED_MODULE_7__/* .DeprecatedTag */ .l) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
          content: _constants_Tags__WEBPACK_IMPORTED_MODULE_7__/* .DeprecatedTag */ .l,
          placement: "bottom",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_icons_Indicators_DeprecationIcon__WEBPACK_IMPORTED_MODULE_2__/* .DeprecationIcon */ .r, {})
          })
        })]
      }) : undefined
    }))
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ApiGroupTile);

/***/ }),

/***/ 57090:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ApiGroupTile_GroupTile; }
});

// EXTERNAL MODULE: consume shared module (default) itwinui-v1@^1.48.3 (singleton) (fallback: ./node_modules/itwinui-v1/cjs/index.js) (eager)
var index_js_eager_ = __webpack_require__(85217);
// EXTERNAL MODULE: ./src/links/SimpleLink.tsx
var SimpleLink = __webpack_require__(73351);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/pages/Apis/TruncationTooltip/TruncationTooltip.tsx



const TruncationTooltip = ({
  content,
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Tooltip, {
    content: content,
    placement: "bottom",
    delay: [500, null],
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: children
    })
  });
};

/* harmony default export */ var TruncationTooltip_TruncationTooltip = (TruncationTooltip);
;// CONCATENATED MODULE: ./src/components/pages/Apis/ApiGroupTile/GroupTile.tsx







const GroupTile = ({
  displayName,
  groupHref,
  description,
  thumbnail,
  badge,
  links
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Tile, {
    className: "group-tile",
    thumbnail: thumbnail,
    name: /*#__PURE__*/jsx_runtime_.jsx(TruncationTooltip_TruncationTooltip, {
      content: displayName,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "group-name",
        children: groupHref ? /*#__PURE__*/jsx_runtime_.jsx(SimpleLink/* default */.Z, {
          href: groupHref,
          children: displayName
        }) : displayName
      })
    }),
    badge: badge,
    description: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "group-tile-details",
      children: [description && /*#__PURE__*/jsx_runtime_.jsx(TruncationTooltip_TruncationTooltip, {
        content: description,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "group-tile-description",
          children: description
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "group-link-list",
        children: links.map(link => {
          if (link.isExternal) {
            return /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: link.href,
              className: "group-link",
              rel: "noreferrer",
              target: "_blank",
              children: link.displayName
            }, link.displayName);
          } else {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SimpleLink/* default */.Z, {
              href: link.href,
              className: "group-link",
              children: [link.displayName, link.badge]
            }, link.displayName);
          }
        })
      })]
    })
  });
};

/* harmony default export */ var ApiGroupTile_GroupTile = (GroupTile);

/***/ }),

/***/ 61184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70347);
/* harmony import */ var _itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_LeftSideNavigationSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28602);
/* harmony import */ var _constants_defaultApiGroups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30581);
/* harmony import */ var _constants_documentationBannerHighlights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76502);
/* harmony import */ var _constants_guides__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13288);
/* harmony import */ var _constants_helpfulResources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76181);
/* harmony import */ var _hooks_useApimProductApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81061);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23315);
/* harmony import */ var _stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53164);
/* harmony import */ var _Layouts_CommonLayout_CommonLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89104);
/* harmony import */ var _Layouts_LeftSideNavigation_LeftSideNavigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50528);
/* harmony import */ var _ApiGroupTile_ApiGroupTile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46233);
/* harmony import */ var _ApiGroupTile_GroupTile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(57090);
/* harmony import */ var _CardList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15820);
/* harmony import */ var _DocumentationBannerTile_DocumentationBannerTile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35623);
/* harmony import */ var _DocumentationHomepageSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42058);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useApimProductApi__WEBPACK_IMPORTED_MODULE_8__, _stores__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_useApimProductApi__WEBPACK_IMPORTED_MODULE_8__, _stores__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const minTileWidth = 230;

const Apis = ({
  preloadedApis
}) => {
  const isLoggedIn = (0,_stores__WEBPACK_IMPORTED_MODULE_9__/* .useIsLoggedIn */ .n)();
  const {
    0: apis,
    1: setApis
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(preloadedApis);
  const productApi = (0,_hooks_useApimProductApi__WEBPACK_IMPORTED_MODULE_8__/* .useApimProductApi */ .t)();
  const flags = (0,_stores_launchDarklyStore__WEBPACK_IMPORTED_MODULE_10__/* .useLaunchDarklyFlags */ .L)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isLoggedIn) {
      _constants_defaultApiGroups__WEBPACK_IMPORTED_MODULE_4__/* .DefaultApiGroups.internalApiGroups.forEach */ .q.internalApiGroups.forEach(group => productApi.getUniqueProductApis(group.id).then(response => {
        if (response.length > 0) {
          setApis(apis => _objectSpread(_objectSpread({}, apis), {}, {
            [group.name]: response
          }));
        }
      }));
    }
  }, [isLoggedIn, productApi, setApis]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Layouts_CommonLayout_CommonLayout__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    headerContent: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Theme__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_18__.Text, {
        variant: "headline",
        children: "Documentation"
      })
    }),
    sideNavigation: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Layouts_LeftSideNavigation_LeftSideNavigation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      sections: [_constants_LeftSideNavigationSection__WEBPACK_IMPORTED_MODULE_3__/* .LeftSideNavigationSection.Fundamentals */ .N.Fundamentals, _constants_LeftSideNavigationSection__WEBPACK_IMPORTED_MODULE_3__/* .LeftSideNavigationSection.ApiReferences */ .N.ApiReferences(apis), _constants_LeftSideNavigationSection__WEBPACK_IMPORTED_MODULE_3__/* .LeftSideNavigationSection.Guides */ .N.Guides, _constants_LeftSideNavigationSection__WEBPACK_IMPORTED_MODULE_3__/* .LeftSideNavigationSection.getHelpfulResources */ .N.getHelpfulResources(flags)],
      className: 'apis-page-nav',
      expand: false
    }),
    padded: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
      className: "documentation-home-page",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
        className: "documentation-homepage-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "documentation-homepage-section",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_2__.FluidGrid, {
            minItemWidth: minTileWidth,
            className: "documentation-banner-tile-grid",
            children: _constants_documentationBannerHighlights__WEBPACK_IMPORTED_MODULE_5__/* .documentationBannerHighlights.map */ .B.map(content => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_DocumentationBannerTile_DocumentationBannerTile__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                name: content.name,
                description: content.description,
                href: content.href,
                thumbnail: content.thumbnail
              }, content.name);
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Theme__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
              className: "documentation-banner-button-bar",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "#api-references",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_18__.Button, {
                  className: "documentation-banner-button",
                  size: "large",
                  as: "a",
                  href: "#api-references",
                  children: "See API references"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "#guides",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_18__.Button, {
                  className: "documentation-banner-button",
                  size: "large",
                  as: "a",
                  href: "#guides",
                  children: "See guides"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "#helpful-resources",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_18__.Button, {
                  className: "documentation-banner-button",
                  size: "large",
                  as: "a",
                  href: "#helpful-resources",
                  children: "See helpful resources"
                })
              })]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_DocumentationHomepageSection__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          title: "API references",
          children: Object.values(_constants_defaultApiGroups__WEBPACK_IMPORTED_MODULE_4__/* .DefaultApiGroups.publicApiGroups */ .q.publicApiGroups).map(group => {
            if (!(group.name in apis) || apis[group.name]?.length === 0) {
              return null;
            }

            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_ApiGroupTile_ApiGroupTile__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              group: group,
              apis: apis[group.name]
            }, group.id);
          })
        }), Object.values(_constants_defaultApiGroups__WEBPACK_IMPORTED_MODULE_4__/* .DefaultApiGroups.internalApiGroups */ .q.internalApiGroups).map(group => {
          if (!(group.name in apis) || apis[group.name]?.length === 0) {
            return null;
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("div", {
            className: "documentation-homepage-section",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_CardList__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              title: group.displayName,
              apis: apis[group.name],
              apiGroup: group
            })
          }, group.name);
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_DocumentationHomepageSection__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          title: "Guides",
          children: Object.values(_constants_guides__WEBPACK_IMPORTED_MODULE_6__/* .Guides */ .t).map(group => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_ApiGroupTile_GroupTile__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              displayName: group.title,
              description: group.description,
              links: group.links
            }, group.title);
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_DocumentationHomepageSection__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          title: "Helpful resources",
          children: _constants_helpfulResources__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getFilteredHelpfulResources */ .Z.getFilteredHelpfulResources(flags).map(group => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_ApiGroupTile_GroupTile__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              displayName: group.title,
              description: group.description,
              links: group.links
            }, group.title);
          })
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Apis);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70347);
/* harmony import */ var _itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51477);
/* harmony import */ var _icons_GroupIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61890);
/* harmony import */ var _ApiCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61551);
/* harmony import */ var _DocumentationSectionTitle_DocumentationSectionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66594);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











const CardList = ({
  title,
  apis,
  apiGroup
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "card-list",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_DocumentationSectionTitle_DocumentationSectionTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: _utils__WEBPACK_IMPORTED_MODULE_3__/* .Utils.getIdFromTitle */ .c.getIdFromTitle(title),
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_icons_GroupIcon__WEBPACK_IMPORTED_MODULE_4__/* .GroupIcon */ .B, {
        apiGroupId: apiGroup.id,
        className: "grid-icon",
        style: {
          fill: apiGroup.color
        }
      }),
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
      className: "description",
      children: apiGroup.description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_2__.FluidGrid, {
      minItemWidth: 230,
      children: apis.map(api => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ApiCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        api: api
      }, api.name))
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (CardList);

/***/ }),

/***/ 35623:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73351);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const DocumentationBannerTile = ({
  name,
  description,
  href,
  thumbnail
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    href: href,
    className: "documentation-banner-tile-link",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Tile, {
      name: name,
      description: description,
      thumbnail: thumbnail,
      className: "documentation-banner-tile"
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (DocumentationBannerTile);

/***/ }),

/***/ 42058:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70347);
/* harmony import */ var _itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51477);
/* harmony import */ var _DocumentationSectionTitle_DocumentationSectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66594);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const DocumentationHomepageSection = ({
  title,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "documentation-homepage-section",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_DocumentationSectionTitle_DocumentationSectionTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      id: _utils__WEBPACK_IMPORTED_MODULE_1__/* .Utils.getIdFromTitle */ .c.getIdFromTitle(title),
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_itwin_itwinui_layouts_react__WEBPACK_IMPORTED_MODULE_0__.FluidGrid, {
      minItemWidth: 230,
      children: children
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (DocumentationHomepageSection);

/***/ }),

/***/ 66594:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56296);
/* harmony import */ var _itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73351);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const DocumentationSectionTitle = ({
  id,
  children,
  className,
  icon
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(itwinui_v1__WEBPACK_IMPORTED_MODULE_1__.Title, {
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['documentation-heading', className]),
    children: [icon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "documentation-heading-icon",
      children: icon
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: `#${id}`,
        children: children
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_itwin_itwinui_icons_react__WEBPACK_IMPORTED_MODULE_2__.SvgLink, {
        className: "permalink"
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (DocumentationSectionTitle);

/***/ }),

/***/ 20747:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": function() { return /* reexport */ Overview; },
  "F": function() { return /* reexport */ topics; }
});

// EXTERNAL MODULE: consume shared module (default) itwinui-v2@^2.12.0 (singleton) (fallback: ./node_modules/itwinui-v2/esm/index.js) (eager)
var index_js_eager_ = __webpack_require__(6227);
// EXTERNAL MODULE: ./src/components/MarkdownViewWithMermaid/MarkdownViewWithMermaid.tsx
var MarkdownViewWithMermaid = __webpack_require__(19444);
// EXTERNAL MODULE: ./src/components/Theme.tsx
var Theme = __webpack_require__(51974);
// EXTERNAL MODULE: ./src/components/mdx/documentation.tsx
var documentation = __webpack_require__(10246);
// EXTERNAL MODULE: ./src/components/Layouts/CommonLayout/CommonLayout.tsx
var CommonLayout = __webpack_require__(89104);
// EXTERNAL MODULE: ./src/components/Layouts/LeftSideNavigation/LeftSideNavigation.tsx + 4 modules
var LeftSideNavigation = __webpack_require__(50528);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/Layouts/DocumentationTopicLayout/DocumentationTopicLayout.tsx








function DocumentationTopicLayout({
  title,
  sideNavigationItems,
  activeItem,
  markdown,
  mdComponents = documentation/* mdComponents */.Z
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(CommonLayout/* default */.Z, {
    headerContent: /*#__PURE__*/jsx_runtime_.jsx(Theme/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Text, {
        variant: "headline",
        children: title
      })
    }),
    sideNavigation: /*#__PURE__*/jsx_runtime_.jsx(LeftSideNavigation/* default */.Z, {
      sections: sideNavigationItems,
      activeItem: activeItem
    }),
    padded: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(MarkdownViewWithMermaid/* MarkdownViewWithMermaid */.D, {
      markdown: markdown,
      components: mdComponents,
      options: {
        tables: true,
        openLinksInNewWindow: true,
        tablesHeaderId: true,
        ghCompatibleHeaderId: true,
        //generate heading IDs in GitHub format
        disableForced4SpacesIndentedSublists: true
      }
    })
  });
}
;// CONCATENATED MODULE: ./src/components/pages/Apis/Overview/Overview.tsx


function Overview(props) {
  const {
    content,
    topic,
    menuItems
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(DocumentationTopicLayout, {
    title: "REST API Overview",
    sideNavigationItems: menuItems,
    activeItem: topic,
    markdown: content
  });
}
;// CONCATENATED MODULE: ./src/components/pages/Apis/Overview/constants.ts
const topics = [{
  id: 'api-fundamentals',
  displayName: 'API fundamentals'
}, {
  id: 'error-codes',
  displayName: 'Error codes'
}, {
  id: 'authorization',
  displayName: 'Authorization'
}, {
  id: 'lifecycle',
  displayName: 'Lifecycle'
}, {
  id: 'rate-limits',
  displayName: 'Rate limits'
}];
;// CONCATENATED MODULE: ./src/components/pages/Apis/Overview/index.ts



/***/ }),

/***/ 28602:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ LeftSideNavigationSection; }
/* harmony export */ });
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6227);
/* harmony import */ var itwinui_v2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_GroupIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61890);
/* harmony import */ var _components_icons_Indicators_DeprecationIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81334);
/* harmony import */ var _components_icons_Indicators_TechPreviewIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44930);
/* harmony import */ var _components_pages_Apis_Overview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20747);
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57348);
/* harmony import */ var _defaultApiGroups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30581);
/* harmony import */ var _guides__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13288);
/* harmony import */ var _helpfulResources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76181);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61686);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51477);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class LeftSideNavigationSection {
  static getHelpfulResources(flags) {
    return {
      sectionTitle: 'Helpful resources',
      navItems: _helpfulResources__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getFilteredHelpfulResources */ .Z.getFilteredHelpfulResources(flags).map(resource => ({
        id: _utils__WEBPACK_IMPORTED_MODULE_9__/* .Utils.getIdFromTitle */ .c.getIdFromTitle(resource.title),
        title: resource.title,
        isExpandable: true,
        subItems: resource.links.map(link => ({
          id: _utils__WEBPACK_IMPORTED_MODULE_9__/* .Utils.getIdFromTitle */ .c.getIdFromTitle(link.displayName),
          title: link.displayName,
          href: link.href
        }))
      }))
    };
  }

  static ApiReferences(apis) {
    return {
      sectionTitle: 'API references',
      navItems: Object.values(_defaultApiGroups__WEBPACK_IMPORTED_MODULE_5__/* .DefaultApiGroups.publicApiGroups */ .q.publicApiGroups).filter(group => group.name in apis && apis[group.name]?.length > 0).map(group => {
        const groupApis = apis[group.name];
        const showGroupTechPreview = groupApis.every(api => api.tags.includes(_Tags__WEBPACK_IMPORTED_MODULE_11__/* .TechPreviewTag */ .n));

        const techPreviewBadge = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
          content: 'Technical Preview',
          placement: "bottom",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_icons_Indicators_TechPreviewIcon__WEBPACK_IMPORTED_MODULE_3__/* .TechPreviewIcon */ .d, {})
          })
        });

        const deprecationBadge = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(itwinui_v2__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
          content: 'Deprecated',
          placement: "bottom",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_icons_Indicators_DeprecationIcon__WEBPACK_IMPORTED_MODULE_2__/* .DeprecationIcon */ .r, {})
          })
        });

        return {
          id: group.id,
          title: group.displayName,
          icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_icons_GroupIcon__WEBPACK_IMPORTED_MODULE_1__/* .GroupIcon */ .B, {
            apiGroupId: group.id,
            className: "group-icon",
            style: {
              fill: group.color
            }
          }),
          caption: {
            title: 'Overview',
            href: `${_paths__WEBPACK_IMPORTED_MODULE_8__/* .API_GROUPS */ .Ss}/${group.id}`
          },
          subItems: groupApis.map(api => ({
            id: api.name,
            title: api.displayName,
            href: `${_paths__WEBPACK_IMPORTED_MODULE_8__/* .DOCUMENTATION */ .tQ}/${api.name}/overview/`,
            badge: !showGroupTechPreview && api.tags.includes(_Tags__WEBPACK_IMPORTED_MODULE_11__/* .TechPreviewTag */ .n) ? techPreviewBadge : api.tags.includes(_Tags__WEBPACK_IMPORTED_MODULE_11__/* .DeprecatedTag */ .l) ? deprecationBadge : undefined
          })),
          highlightColor: group.color,
          badge: showGroupTechPreview ? techPreviewBadge : undefined
        };
      })
    };
  }

}

_defineProperty(LeftSideNavigationSection, "Fundamentals", {
  navItems: [{
    id: 'rest-api-overview',
    title: 'REST API Overview',
    subItems: _components_pages_Apis_Overview__WEBPACK_IMPORTED_MODULE_4__/* .topics.map */ .F.map(topic => ({
      id: topic.id,
      title: topic.displayName,
      href: `${_paths__WEBPACK_IMPORTED_MODULE_8__/* .REST_API_OVERVIEW */ .A}/${topic.id}`
    }))
  }]
});

_defineProperty(LeftSideNavigationSection, "Guides", {
  sectionTitle: 'Guides',
  navItems: _guides__WEBPACK_IMPORTED_MODULE_6__/* .Guides.map */ .t.map(guide => ({
    id: _utils__WEBPACK_IMPORTED_MODULE_9__/* .Utils.getIdFromTitle */ .c.getIdFromTitle(guide.title),
    title: guide.title,
    isExpandable: true,
    subItems: guide.links.map(link => ({
      id: _utils__WEBPACK_IMPORTED_MODULE_9__/* .Utils.getIdFromTitle */ .c.getIdFromTitle(link.displayName),
      title: link.displayName,
      href: link.href
    }))
  }))
});

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

/***/ 76502:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": function() { return /* binding */ documentationBannerHighlights; }
});

// EXTERNAL MODULE: ./src/components/icons/LearnAboutItwinThumbnail.tsx
var LearnAboutItwinThumbnail = __webpack_require__(89624);
// EXTERNAL MODULE: ./src/components/icons/QuickstartThumbnail.tsx
var QuickstartThumbnail = __webpack_require__(91595);
// EXTERNAL MODULE: ./src/components/icons/SamplesThumbnail.tsx
var SamplesThumbnail = __webpack_require__(42339);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/icons/SpatialAlignmentThumbnail.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("style", {
        children: [".spatial-alignment-thumbnail-2", `{`, "fill:#e6edfc", `}`, ".spatial-alignment-thumbnail-4,.spatial-alignment-thumbnail-5", `{`, "fill:#fff", `}`, ".spatial-alignment-thumbnail-6", `{`, "fill:#8a9de0", `}`, ".spatial-alignment-thumbnail-7", `{`, "fill:#bfccf8", `}`, ".spatial-alignment-thumbnail-10,.spatial-alignment-thumbnail-9", `{`, "fill:#873b24", `}`, ".spatial-alignment-thumbnail-11", `{`, "fill:#272a49", `}`, ".spatial-alignment-thumbnail-10,.spatial-alignment-thumbnail-13,.spatial-alignment-thumbnail-14,.spatial-alignment-thumbnail-5", `{`, "fill-rule:evenodd", `}`, ".spatial-alignment-thumbnail-13", `{`, "fill:#4a2a1a", `}`, ".spatial-alignment-thumbnail-14", `{`, "fill:#ffa062", `}`]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-2",
      d: "M276.92 162.95c2.78 24.12-1.96 49.86-23.28 72.34-25.12 26.49-50.36 19.93-74.51 9.17-1.85.57-3.71 1.11-5.57 1.6-18.64 17.2-33.45 26.04-62.01 26.14-35.23.12-51.5-17.79-60.92-45.3-1.49-4.35-2.45-8.12-3.02-11.47-7.08-6.42-14.12-15.05-20.79-26.54-32.78-56.57-8.86-116.9 51.47-142.06 3.78-7.79 9.29-15.36 17.38-23.5 24.83-25 48.99-23.84 75.1-11.04 4.13 2.02 7.47 4.01 10.24 5.97 9.55-.47 20.63.66 33.47 4.07 64.51 17.16 90 78.88 62.44 140.62Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      className: "spatial-alignment-thumbnail-2",
      cx: "144.77",
      cy: "289.99",
      rx: "129.15",
      ry: "5.51"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-6",
      d: "M224.23 208.14c-1.5 6.02-11.03 10.03-14.54 12.54s-11.54 7.02-10.03 13.04c1.09 4.34 3.22 6.86 5.45 7.92-39.64 21.44-86.77 15.83-120.01-10.67 28.96 10.98 62.37 9.64 91.59-6.51.56-.31 1.12-.63 1.68-.95.3-.17.6-.34.89-.52l.06-.03c.35-.2.69-.41 1.03-.62.19-.11.38-.23.57-.35.37-.22.74-.45 1.1-.68.21-.13.42-.26.62-.39.43-.27.86-.55 1.29-.84.31-.2.61-.4.92-.61.43-.29.85-.57 1.27-.87.14-.1.27-.19.41-.28.28-.19.55-.39.82-.58l.23-.17c.21-.15.42-.3.62-.45l1.11-.81c.06-.04.11-.08.16-.12.57-.43 1.13-.86 1.7-1.3.01 0 .02-.02.03-.02.5-.39.99-.78 1.48-1.18.19-.15.38-.31.57-.46l.18-.15c.28-.23.56-.46.83-.69.14-.11.27-.23.4-.34.48-.41.96-.82 1.43-1.24.53-.47 1.05-.94 1.57-1.41.5-.46 1-.92 1.49-1.39.17-.16.34-.32.5-.48.33-.31.66-.63.98-.95l.09-.09c.31-.31.61-.61.91-.92.19-.19.37-.38.56-.57.27-.27.53-.55.79-.82.22-.23.44-.46.66-.7 8.11.85 14.08-.87 14.08-.87s8.02-.5 6.52 5.52ZM251.2 97.58c-5.12-.86-14.34-2.29-23.77-3.2-.13-.39-.26-.78-.4-1.16-.25-.73-.51-1.45-.78-2.17-.02-.07-.05-.14-.08-.2l-.42-1.11c-.08-.19-.15-.39-.23-.58-.07-.2-.15-.39-.23-.58-.16-.39-.31-.77-.47-1.15-.06-.14-.11-.27-.17-.4-.08-.19-.16-.37-.24-.55-.06-.16-.13-.31-.2-.46-.06-.15-.13-.31-.2-.46-.05-.11-.09-.22-.14-.33-.17-.39-.34-.78-.52-1.17l-.63-1.38c-.08-.16-.15-.32-.23-.48-.22-.45-.43-.9-.65-1.34-.23-.47-.46-.93-.69-1.39v-.02l-.3-.57c-.19-.37-.38-.74-.58-1.11-.03-.05-.05-.1-.08-.15-.27-.51-.54-1.01-.82-1.51-7.15-12.93-16.54-23.84-27.42-32.51 23.31 8.84 43.73 25.69 56.74 49.22.87 1.57 1.7 3.16 2.48 4.76Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-7",
      d: "M155.01 150.96c1.5 9.53 6.02 21.06 23.07 39.62 8.29 9.02 17.87 12.11 25.54 12.91-.22.24-.44.47-.66.7-.26.27-.52.55-.79.82-.19.19-.37.38-.56.57-.3.31-.61.61-.91.92l-.09.09c-.33.32-.65.64-.98.95-.17.17-.33.32-.5.48-.49.47-.99.93-1.49 1.39-.52.48-1.04.95-1.57 1.41-.48.42-.95.83-1.43 1.24-.13.12-.27.23-.4.34-.28.23-.55.46-.83.69l-.18.15c-.19.16-.38.31-.57.46-.49.4-.98.79-1.48 1.18 0 0-.02.02-.03.02-.56.44-1.12.87-1.7 1.3-.06.04-.11.08-.16.12-.37.28-.74.55-1.11.81-.21.15-.42.3-.62.45l-.23.17c-.27.2-.55.39-.82.58-.14.1-.27.19-.41.28-.42.3-.85.58-1.27.87-.31.21-.61.41-.92.61-.43.29-.86.57-1.29.84-.21.14-.41.27-.62.39-.36.24-.73.46-1.1.68-.19.12-.38.24-.57.35-.34.21-.69.42-1.03.62l-.06.03c-.3.18-.59.35-.89.52-.55.32-1.11.64-1.68.95-29.22 16.15-62.63 17.49-91.59 6.51-1.02-.82-2.04-1.65-3.03-2.51 3.01.33 9.61.87 13.77-.26 5.52-1.5 16.05-6.02 19.56-13.04s3.01-13.04-2.01-15.55c-10.84-5.42-17.3-9.73-20.56-13.54-3.01-3.51-5.52-17.55-14.54-29.09-7.8-9.97-28.72-12.07-34.25-12.46.17-15.25 3.53-30.29 9.8-44.1 4.11 6.2 27.05 5.08 32.97 1.89 6.52-3.51 7.52-12.54 14.54-11.54s26.08-3.01 30.09-5.52 6.52-5.02 22.07-7.52 7.02-21.06 2.01-22.57-16.05-8.02-20.06-13.54a19.58 19.58 0 0 0-2.89-3.21c20.11-3.87 40.69-1.92 59.41 5.19 10.88 8.68 20.27 19.58 27.42 32.51.28.5.55 1.01.82 1.51.03.05.06.1.08.15.2.37.39.74.58 1.11l.3.57v.02c.24.46.47.92.69 1.39.22.45.44.89.65 1.34.08.16.15.32.23.48.22.46.43.92.63 1.38.18.39.35.78.52 1.17.05.11.1.22.14.33.07.16.14.31.2.46.07.15.14.31.2.46.08.18.16.37.24.55.06.13.11.27.17.4.16.38.31.76.47 1.15.08.19.15.39.23.58.08.19.15.39.23.58l.42 1.11c.02.06.05.13.08.2.27.72.53 1.44.78 2.17.14.39.27.78.4 1.16-9.3-.9-18.81-1.28-24.77-.09-15.05 3.01-21.36 11.54-23.97 17.8s-3.62 7.27-14.15 11.79c-10.53 4.51-11.03 17.55-9.53 27.08Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-6",
      d: "M153.51 77.74c-15.55 2.51-18.06 5.02-22.07 7.52s-23.07 6.52-30.09 5.52-8.02 8.02-14.54 11.54c-5.92 3.18-28.86 4.31-32.97-1.89 9.36-20.62 25.2-38.52 46.54-50.32 10.33-5.71 21.19-9.57 32.19-11.69.92.82 1.91 1.87 2.89 3.21 4.01 5.52 15.05 12.04 20.06 13.54s13.54 20.06-2.01 22.57ZM115.39 215.16c-3.51 7.02-14.04 11.54-19.56 13.04-4.15 1.13-10.76.59-13.77.26-9.6-8.24-17.91-18.3-24.39-30.01-9.46-17.12-13.84-35.67-13.64-53.92 5.53.39 26.45 2.49 34.25 12.46 9.03 11.54 11.54 25.58 14.54 29.09 3.26 3.81 9.72 8.12 20.56 13.54 5.02 2.51 5.52 8.53 2.01 15.55ZM233.04 128.82c0 .47 0 .93-.01 1.39v.73c0 .4-.02.79-.03 1.18 0 .19-.01.38-.02.57-.01.51-.04 1.02-.07 1.53-.01.38-.04.75-.07 1.13 0 .09-.01.18-.02.26l-.03.56v.05l-.12 1.58c-.05.54-.09 1.08-.15 1.61-.06.58-.12 1.16-.19 1.75l-.21 1.74-.12.88-.18 1.28c-.17 1.14-.36 2.27-.57 3.4-.21 1.17-.45 2.33-.69 3.49 0 .02-.01.04-.01.05-.02.07-.03.13-.04.2-.11.51-.23 1.01-.35 1.51-.11.47-.22.94-.34 1.41l-.15.6c-.12.45-.23.9-.36 1.35-.07.27-.14.53-.22.79l-.09.34c-.02.08-.04.16-.07.23-.07.24-.13.47-.2.71-.17.59-.34 1.17-.52 1.76l-.39 1.25-.21.66c-.13.41-.27.82-.41 1.22-.19.55-.38 1.1-.57 1.64-.02.04-.03.08-.05.12l-.06.17c-.17.49-.35.97-.53 1.45-.18.48-.36.95-.55 1.42-.1.26-.2.51-.3.76-.13.34-.27.67-.41 1-.03.08-.07.16-.1.23-.18.43-.36.85-.54 1.28-.1.22-.19.43-.28.64l-.57 1.29c-.25.55-.5 1.09-.75 1.62-.26.54-.51 1.08-.78 1.61-.26.53-.53 1.06-.8 1.58v.03c-.28.52-.56 1.04-.83 1.56 0 0 0 .01-.01.02a67 67 0 0 1-.79 1.45c-.06.11-.12.21-.18.31l-.78 1.38c-.25.44-.51.88-.77 1.31-.16.26-.31.51-.46.76-.21.34-.41.68-.62 1.01-.31.51-.63 1.01-.95 1.5-.28.43-.56.86-.84 1.28-.18.26-.35.52-.53.78-.83 1.23-1.7 2.45-2.58 3.65-.27.37-.55.73-.82 1.09l-.99 1.29c-.12.15-.23.29-.34.44 0 0-.01.01-.01.02-.24.29-.47.58-.7.87-.27.34-.55.67-.82 1-.35.42-.69.83-1.04 1.24-.35.42-.71.82-1.07 1.23-.29.33-.58.66-.87.98l-.28.31c-.35.38-.7.76-1.05 1.13-7.67-.8-17.25-3.89-25.54-12.91-17.05-18.56-21.57-30.09-23.07-39.62s-1-22.57 9.53-27.08c10.53-4.51 11.54-5.52 14.15-11.79s8.92-14.8 23.97-17.8c5.96-1.19 15.46-.81 24.77.09.24.72.47 1.44.7 2.16.11.35.21.69.32 1.03.11.36.21.71.32 1.07.1.36.21.71.3 1.07.09.3.17.6.25.9.13.49.26.97.38 1.46.1.39.2.78.29 1.17.01.05.03.11.04.16l.15.6c.09.36.17.72.25 1.07.08.36.16.71.23 1.06.16.73.31 1.47.45 2.21.07.35.13.69.2 1.04.13.72.26 1.44.37 2.16.05.3.1.6.14.9 0 .02 0 .04.01.05l.03.2c.07.44.13.88.19 1.33v.04c.07.46.13.91.18 1.37.07.56.14 1.12.2 1.68.07.6.13 1.2.18 1.8.04.43.08.86.11 1.29.04.44.07.88.1 1.32l.06.85c.03.36.05.72.06 1.08.01.24.02.49.04.73l.03.76v.18c0 .17 0 .33.01.49 0 .12.01.23.01.34.01.41.02.82.02 1.22.01.56.02 1.11.02 1.67Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M206.01 241.15c-.3.17-.6.33-.91.49-2.23-1.06-4.36-3.58-5.45-7.92-1.5-6.02 6.52-10.53 10.03-13.04s13.04-6.52 14.54-12.54-6.52-5.52-6.52-5.52-5.97 1.73-14.08.87c.35-.38.7-.75 1.05-1.13l.28-.31c.3-.33.59-.65.87-.98.36-.41.72-.81 1.07-1.23.36-.41.7-.83 1.04-1.24.28-.33.55-.67.82-1 .24-.29.47-.58.7-.87 0 0 0-.01.01-.02.12-.15.23-.29.34-.44.34-.43.67-.86.99-1.29.28-.36.55-.73.82-1.09.89-1.2 1.75-2.42 2.58-3.65.18-.26.35-.52.53-.78.28-.43.56-.85.84-1.28.32-.5.64-1 .95-1.5.21-.34.42-.67.62-1.01.16-.25.31-.51.46-.76.26-.44.52-.87.77-1.31.27-.46.53-.92.78-1.38.06-.1.12-.21.18-.31a67 67 0 0 0 .79-1.45s0-.01.01-.02c.28-.52.55-1.04.82-1.56v-.03c.29-.53.55-1.05.81-1.58.27-.54.52-1.07.78-1.61s.51-1.08.75-1.62c.2-.43.39-.86.57-1.29.1-.21.19-.42.28-.64.18-.43.36-.85.54-1.28.03-.08.07-.15.1-.23.14-.34.28-.67.41-1 .11-.25.21-.5.3-.76.19-.47.37-.94.55-1.42.18-.48.36-.96.53-1.45l.06-.17s.03-.08.05-.12c.19-.54.38-1.09.57-1.64.14-.4.28-.81.41-1.22l.21-.66c.14-.42.27-.83.39-1.25.18-.58.35-1.17.52-1.76.07-.24.14-.47.2-.71.02-.08.05-.16.07-.23.03-.11.07-.23.09-.34.08-.26.15-.53.22-.79.13-.45.24-.9.36-1.35l.15-.6c.12-.47.23-.94.34-1.41.12-.5.24-1.01.35-1.51.01-.07.02-.13.04-.2 0-.02.01-.04.01-.05.25-1.16.48-2.32.69-3.49.21-1.13.4-2.26.57-3.4.07-.43.13-.85.18-1.28.05-.3.09-.59.12-.88.08-.58.15-1.16.21-1.74.07-.58.13-1.16.19-1.75.06-.54.1-1.07.15-1.61.05-.53.09-1.06.12-1.58v-.05l.03-.56c0-.09.01-.18.02-.26.03-.38.05-.75.07-1.13.02-.51.05-1.02.07-1.53.01-.19.01-.38.02-.57l.03-1.18v-.73c0-.46.01-.93.01-1.39 0-.56 0-1.11-.02-1.67 0-.41-.01-.82-.02-1.22 0-.12 0-.23-.01-.34 0-.17-.01-.33-.01-.49v-.18l-.03-.76c-.01-.25-.02-.49-.04-.73-.01-.36-.04-.72-.06-1.08-.01-.29-.04-.57-.06-.85-.03-.44-.06-.88-.1-1.32-.04-.43-.07-.86-.11-1.29l-.18-1.8c-.06-.56-.13-1.12-.2-1.68l-.18-1.37v-.04c-.06-.45-.13-.89-.19-1.33l-.03-.2c0-.02 0-.04-.01-.05-.05-.3-.1-.6-.14-.9-.12-.72-.24-1.44-.37-2.16-.07-.35-.13-.69-.2-1.04-.14-.74-.29-1.47-.45-2.21-.07-.36-.15-.71-.23-1.06-.08-.36-.16-.72-.25-1.07l-.15-.6c-.01-.05-.02-.11-.04-.16-.1-.39-.19-.78-.29-1.17-.12-.49-.25-.97-.38-1.46-.09-.3-.17-.6-.25-.9l-.3-1.07c-.11-.36-.21-.71-.32-1.07-.11-.34-.21-.68-.32-1.03-.23-.72-.46-1.44-.7-2.16 9.43.91 18.65 2.35 23.77 3.2 25.51 51.92 5.99 115.28-45.19 143.57Z",
      style: {
        fill: "#415987"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-2",
      d: "M231.09 108.32c-.14-.74-.29-1.47-.45-2.21.17.73.31 1.47.45 2.21Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M106.97 35.1C87.1 35.1 71 51.2 71 71.07c0 7.82 6.74 20.96 6.74 20.96l29.64 49.98 28.05-48.96s7.5-13.71 7.5-21.99c0-19.87-16.1-35.97-35.97-35.97Zm.74 24.14c6.4 0 11.58 5.18 11.58 11.58s-5.18 11.58-11.58 11.58-11.58-5.18-11.58-11.58 5.18-11.58 11.58-11.58Z",
      style: {
        fill: "#f98338"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
      className: "spatial-alignment-thumbnail-4",
      cx: "107.71",
      cy: "70.82",
      r: "11.58"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-9",
      d: "m208.03 246.05 5.35-24.51-15.82-4.01-1.56 27.15c-.35 1.79-.12 3.59.64 5.12l15.07 30.25c.67 1.34 2.5 1.46 3.46.23l.17-3.03s-2.44-27.03-7.31-31.19Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M184.02 289.79c.03 2.32 14.29 4.21 31.84 4.21s31.75-1.88 31.72-4.21-14.29-4.21-31.84-4.21-31.75 1.88-31.72 4.21Z",
      style: {
        fillRule: "evenodd",
        fill: "#e6edfc"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m211.5 279.69-1.83 5.64c-.13 1.14-2.71 5.33-2.71 5.33.3 1.03 1.36.82 2.04.42l10.48-9.19s2.01-2.57-4.35-5.33c-1.19 2.46-1.83 4.13-3.63 3.13Z",
      style: {
        fillRule: "evenodd",
        fill: "#272a49"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-9",
      d: "M214.82 236.84s-.01 18.23 1.57 28.83c.95 6.36 2.09 19.01 2.09 19.01l2.75 2.78 1.6-2.69s1.16-7.84 3.67-22.56c.31-1.83 2.5-24.06 2.68-25.17.18-1.11-11.03-4.73-14.36-.19Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-11",
      d: "M218.97 284.07c-.23.32-.78-.15-.8.26-.05 1.14-.15 2.73-.31 3.32-.26.95-.97 3.84 1.15 4.25 2.12.4 4.72-.11 4.99-.15.27-.03 1.07-.75.31-2.97-.45-1.31-.82-3.02-1.05-4.21-.09-.46-.65.07-.96-.3-1.21-1.46-2.37-1.5-3.33-.18Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-14",
      d: "m227.57 170.37-28.81 2.27c-1.69 5.44-3.09 29.27-3.09 29.27l19.18.73c8.8-.2 19.86 6.86 20.98-8 1.28-17-8.25-24.26-8.25-24.26Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-14",
      d: "m195.83 198.34-1.85 40.37s26.23 3.35 40.98.66l.87-44.74-40 3.71Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-13",
      d: "M221.75 112.58c1.37-.18 3.34 1.37 4.02 3.19.65 1.77 3.04 1.73 2.97 3.62-.16 4.48 3.75 2.5 1.87 8.74-.57 1.89-2.8 2.95-5 3.12-2.06.16-2.42 2.91-4.36 2.18-2.33-.88-5.06-4.45-7.51-4.05-6.57 1.54-4.47-2.02-6.25-5.62-1.78-3.6.62-6.25 3.75-8.12s1.5-1.58 3.06-2.94c3.81-3.31 5.06.44 7.45-.13Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-9",
      d: "M189.99 158.38c2.69 8 4.09 10.93 6.97 18.9l-3.49 3.12c-8.18-15.13-13.23-16.86-13.19-24.18 5.96-5 8.68.46 9.72 2.16Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-9",
      d: "m193.62 176.2-1.63 3.93c-.33.79-.36 1.66-.09 2.47l1.08 3.27a1.721 1.721 0 0 0 2.71.8l1.76-5.06c.39-1.12.34-2.42-.13-3.65l-.79-2.05-2.93.28Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-5",
      d: "m191.09 177.37 5.17-3.41-5.71-15.51 16.06-4.57s2.27-3.16 3.08-4.64c.81-1.48 1.91-13.01 1.91-13.01l-5.78.72a10.3 10.3 0 0 0-4.09 1.42l-19.79 11.96s-5.21 3.84-1.78 9.42c3.43 5.58 10.92 17.62 10.92 17.62Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-5",
      d: "m207.89 137.52 4.53-1.01 10.3-.2 8.16 3.96c3.66 1.92 5.39 6.21 4.04 10.01l-2.53 12.32c2.9 9.44.29 12.2 4.02 25.66-15.28 5.22-36.37 4.28-41.28-2.91.39-11.74 3.37-26.29 6.78-35.65 2.17-5.98 4.9-7.76 5.98-12.17Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-9",
      d: "M211.6 136.22s-3.47 8.16 2.29 8.62c5.75.46 8.83-8.53 8.83-8.53l-3.95-1.61-3.38.25-3.78 1.27Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-10",
      d: "M234.12 169.78c4.16.28 7.43 2.89 7.67 7.72l-3.68 23.33-4.23-2.52-.09-17.76.33-10.77Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-9",
      d: "m234.06 196.9-1.17 4.14c-.23.83-.16 1.71.2 2.49l1.47 3.16a1.74 1.74 0 0 0 2.82.48l1.17-5.29c.26-1.17.06-2.47-.56-3.65l-1.03-1.96-2.9.63Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-5",
      d: "m234.89 144.86 7 21.13c.61 1.84.81 3.79.6 5.71l-2.5 22.4-7.4-.51.03-24.64-4.91-15.2 7.17-8.89Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-7",
      d: "M232.6 185.73h-.02c-.24 0-.42-.21-.41-.45l.63-16.15c-.04-.54-2.1-9.52-3.47-15.42l-.03-.11.39-1.34c.07-.23.3-.36.54-.29.23.07.36.31.29.54l-.33 1.12c.85 3.67 3.48 15.03 3.46 15.53l-.63 16.15c0 .23-.2.41-.43.41Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-10",
      d: "M213.87 129.75s-.03 4.16-.06 7.6c0 .92.48 1.76 1.26 2.22.79.45 1.76.44 2.54-.03.26-.15.5-.31.74-.45a3.27 3.27 0 0 0 1.55-3.11c-.31-3.21-.87-9.05-.87-9.05l-5.17 2.82Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-10",
      d: "m213.55 130.78.29 3.97 2.83-3.65-3.12-.32z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-10",
      d: "M221.08 125.72c.34-1.17-.33-2.39-1.49-2.73-1.23-.36-2.79-.81-4.03-1.18-1.16-.34-2.19.4-2.7 1.51-.6 1.3-1.21 4.2-1.4 6.35-.11 1.21.49 2.53 1.64 2.87 1.23.36 5.28.25 6.28-1.88.76-1.62 1.2-3.22 1.69-4.94Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-13",
      d: "M219.08 128.98c-.19-2-.69-5.37-2.6-5.97-.97-.46-5.62 4.11-6.77 5.69-.19.26 2.71-6.63 4.43-8.19 1.99-1.85 5.57-1.56 7.58 1.4.99 1.26.7 3.07.36 4.64-.12.79-.58 1.91-1.55 1.73-.42-.1-.71-.66-.52-1.06 0 .03-1 1.63-.93 1.75Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-10",
      d: "M221.09 129.69c-.58.81-1.59 1.07-2.26.58-.66-.49-.72-1.54-.14-2.35s1.59-1.07 2.26-.58c.66.49.72 1.54.14 2.35Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-5",
      d: "m212.56 128.8 2.03.64s-.48 1.4-1.42.97c-.94-.43-.61-1.62-.61-1.62Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-7",
      d: "M198.89 160.21h-.01a.42.42 0 0 1-.42-.44c0-.09 0-.32 2.11-6.09l-.31-1.68a.43.43 0 0 1 .35-.5c.23-.04.46.11.5.35l.36 1.91-.04.11c-.77 2.12-2.02 5.59-2.1 5.97a.44.44 0 0 1-.43.38Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "spatial-alignment-thumbnail-11",
      d: "m150.04 121.45-4.37 4.43c-.41.41-.95.62-1.49.62s-1.06-.2-1.48-.6c-.82-.81-.83-2.14-.02-2.96l.85-.86h-13.08v13.08l.86-.85c.83-.81 2.15-.8 2.97.02.81.82.8 2.15-.02 2.96l-4.43 4.37a2.099 2.099 0 0 1-2.94 0l-4.43-4.37c-.83-.81-.83-2.14-.02-2.96.81-.83 2.14-.83 2.96-.02l.86.85v-13.08h-13.08l.85.86c.81.82.8 2.15-.02 2.96a2.099 2.099 0 0 1-2.96-.02l-4.37-4.43c-.8-.82-.8-2.13 0-2.95l4.37-4.43c.81-.82 2.14-.83 2.96-.02.83.81.83 2.14.02 2.97l-.85.86h13.08V104.8l-.86.85c-.82.81-2.15.8-2.96-.02-.81-.82-.8-2.15.02-2.96l4.43-4.37a2.1 2.1 0 0 1 2.94 0l4.43 4.37c.82.81.83 2.14.02 2.96-.41.42-.95.62-1.49.62s-1.06-.2-1.48-.6l-.86-.85v13.08h13.08l-.85-.86c-.81-.83-.8-2.15.02-2.97.83-.81 2.15-.8 2.97.02l4.37 4.43c.81.82.81 2.13 0 2.95Z"
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      className: "spatial-alignment-thumbnail-4",
      cx: "86.05",
      cy: "160.74",
      rx: "9.78",
      ry: "5.27"
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      className: "spatial-alignment-thumbnail-4",
      cx: "120.75",
      cy: "174.25",
      rx: "31.94",
      ry: "11.75"
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      className: "spatial-alignment-thumbnail-4",
      cx: "147.27",
      cy: "182.99",
      rx: "19.28",
      ry: "9.04"
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      className: "spatial-alignment-thumbnail-4",
      cx: "98.32",
      cy: "209.64",
      rx: "19.08",
      ry: "7.02"
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      className: "spatial-alignment-thumbnail-4",
      cx: "172.16",
      cy: "62",
      rx: "19.08",
      ry: "7.02"
    }), /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
      className: "spatial-alignment-thumbnail-4",
      cx: "193.88",
      cy: "76.99",
      rx: "9.78",
      ry: "5.27"
    })]
  }));
};

SvgIcon.defaultProps = {
  id: "Calque_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 300 300"
};

const SpatialAlignmentThumbnail = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(SvgIcon, _objectSpread(_objectSpread({}, props), {}, {
    className: "iui-tile-thumbnail-picture"
  }));
};

/* harmony default export */ var icons_SpatialAlignmentThumbnail = (SpatialAlignmentThumbnail);
;// CONCATENATED MODULE: ./src/constants/documentationBannerHighlights.tsx





const documentationBannerHighlights = [{
  name: 'Quickstart - Web and Service Apps',
  thumbnail: /*#__PURE__*/jsx_runtime_.jsx(QuickstartThumbnail/* default */.Z, {}),
  href: '/tutorials/quickstart-web-and-service-apps',
  description: 'Building a web or service application, use this guide for step-by-step instructions.'
}, {
  name: 'Learn about the iTwin Viewer',
  thumbnail: /*#__PURE__*/jsx_runtime_.jsx(LearnAboutItwinThumbnail/* default */.Z, {}),
  href: '/get-started',
  description: 'Building a Single Page Application (SPA), this tutorial will guide you through the process.'
}, {
  name: 'View our Samples',
  thumbnail: /*#__PURE__*/jsx_runtime_.jsx(SamplesThumbnail/* default */.Z, {}),
  href: '/samples',
  description: 'View our sample applications to help you get started.'
}, {
  name: 'Learn about iTwin spatial alignment',
  thumbnail: /*#__PURE__*/jsx_runtime_.jsx(icons_SpatialAlignmentThumbnail, {}),
  href: '/spatial',
  description: 'Improve the effectiveness and efficiency of your projects by ensuring accurate and precise geolocation.'
}];

/***/ }),

/***/ 13288:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ Guides; }
/* harmony export */ });
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61686);

const Guides = [{
  title: 'Roles and permissions',
  description: 'Learn how to control who can manage your iTwin Platform subscription and applications.',
  links: [{
    displayName: 'Learn about roles and permissions',
    href: _paths__WEBPACK_IMPORTED_MODULE_0__/* .ROLES_AND_PERMISSIONS */ .QR
  }]
}, {
  title: 'iTwin for game engines',
  description: 'Learn how to view your digital twins on game engines.',
  links: [{
    displayName: 'iTwin for Unreal',
    href: _paths__WEBPACK_IMPORTED_MODULE_0__/* .UNREAL */ .fI
  }, {
    displayName: 'iTwin for Unity',
    href: _paths__WEBPACK_IMPORTED_MODULE_0__/* .UNITY */ .HP
  }]
}, {
  title: 'Spatial alignment',
  description: 'Improve the effectiveness and efficiency of your projects by ensuring accurate and precise geolocation.',
  links: [{
    displayName: 'Learn about iTwin spatial alignment',
    href: _paths__WEBPACK_IMPORTED_MODULE_0__/* .SPACIAL_ALIGNMENT */ .sU
  }]
}];

/***/ }),

/***/ 76181:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ HelpfulResources; }
/* harmony export */ });
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46415);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61686);


class HelpfulResources {
  static getAllHelpfulResources() {
    return [{
      title: 'iTwin Platform availability',
      description: 'View which services are available across our data centers.',
      links: [{
        displayName: 'Data center locations',
        href: _paths__WEBPACK_IMPORTED_MODULE_0__/* .DATA_CENTER_LOCATIONS */ .up,
        renderFunc: flags => flags[_flags__WEBPACK_IMPORTED_MODULE_1__/* .FLAG_DATA_CENTER_LOCATIONS */ .XS]
      }]
    }, {
      title: 'Open Source',
      description: 'Interested in our open source projects? We use them in the iTwin Platform.',
      links: [{
        displayName: 'iTwin.js',
        href: 'https://www.itwinjs.org/',
        isExternal: true
      }, {
        displayName: 'iTwin UI',
        href: 'https://itwinui.bentley.com/',
        isExternal: true
      }]
    }, {
      title: 'iTwin Component Registry',
      description: 'A catalog of components for use in iTwin apps, dashboards, or other web applications.',
      links: [{
        displayName: 'iTwin Component Registry',
        href: 'https://component-registry.itwin.dev/',
        isExternal: true,
        renderFunc: flags => flags[_flags__WEBPACK_IMPORTED_MODULE_1__/* .FLAG_SHOW_COMPONENT_REGISTRY_LINK */ .E$]
      }]
    }];
  }

  static getFilteredHelpfulResources(flags) {
    const allResources = this.getAllHelpfulResources();
    return allResources.map(resource => {
      return Object.assign({}, resource, {
        links: resource.links.reduce((array, currentValue) => {
          if (currentValue.renderFunc === undefined || currentValue.renderFunc(flags)) {
            array.push(currentValue);
          }

          return array;
        }, [])
      });
    }).filter(resource => resource.links.length > 0);
  }

}

/***/ }),

/***/ 81061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ useApimProductApi; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53618);
/* harmony import */ var _useSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8302);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_1__, _useSession__WEBPACK_IMPORTED_MODULE_2__]);
([_api__WEBPACK_IMPORTED_MODULE_1__, _useSession__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useApimProductApi() {
  const {
    session
  } = (0,_useSession__WEBPACK_IMPORTED_MODULE_2__/* .useSession */ .k)();
  const productApi = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new _api__WEBPACK_IMPORTED_MODULE_1__/* .ProductApi */ .yF(session?.managementToken), [session]);
  return productApi;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2961:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ useMermaid; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54963);


const useMermaid = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (_next_utils__WEBPACK_IMPORTED_MODULE_1__/* .NextUtils.isRuntime */ .l.isRuntime) {
      Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 61024)).then(mermaid => {
        mermaid.default.init();
      });
    }
  });
};

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

/***/ 73351:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 20079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53618);
/* harmony import */ var _components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80989);
/* harmony import */ var _components_pages_Apis_Apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61184);
/* harmony import */ var _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7276);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85804);
/* harmony import */ var _services_mdService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79879);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__, _components_pages_Apis_Apis__WEBPACK_IMPORTED_MODULE_2__]);
([_api__WEBPACK_IMPORTED_MODULE_0__, _components_pages_Apis_Apis__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





 // import { logError } from '../../utils/serverLoggerUtils';





function Page(props) {
  const {
    preloadedApis
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_1__/* .PageMetadata */ .d, {
      title: "APIs | iTwin Platform"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_pages_Apis_Apis__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      preloadedApis: preloadedApis
    })]
  });
}

const getStaticProps = async function () {
  let responseDictionary = {}; // eslint-disable-next-line no-useless-catch

  try {
    responseDictionary = await _api__WEBPACK_IMPORTED_MODULE_0__/* .apisApi.getReleasedApiMap */ .u.getReleasedApiMap(undefined, false);
  } catch (error) {
    // logError(error as object, 'failed to GetRealesedApiMap on index of apis');
    throw error;
  }

  responseDictionary['Visualization'] = [{
    name: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_3__/* .ApiGroupId.Visualization */ .mV.Visualization,
    path: _constants_ApiGroupId__WEBPACK_IMPORTED_MODULE_3__/* .ApiGroupId.Visualization */ .mV.Visualization,
    displayName: 'Visualization',
    description: await (0,_services_mdService__WEBPACK_IMPORTED_MODULE_5__/* .preloadAPIContent */ .hW)('visualization'),
    tags: []
  }];
  return {
    props: {
      preloadedApis: responseDictionary
    },
    revalidate: _constants_constants__WEBPACK_IMPORTED_MODULE_4__/* .CACHE_REVALIDATION_PERIOD_IN_SECONDS */ .qr
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,6296,2196,5217,6227,1974,236,1477,5829,1686,5781,9209,175,4588,8816,9858,5692,6739,3618,6909,347,6415,7246,1890,4930,246,2169], function() { return __webpack_exec__(20079); });
module.exports = __webpack_exports__;

})();