"use strict";
(function() {
var exports = {};
exports.id = 1188;
exports.ids = [1188];
exports.modules = {

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

/***/ 47045:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var _components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80989);
/* harmony import */ var _components_pages_Apis_Overview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20747);
/* harmony import */ var _constants_LeftSideNavigationSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28602);
/* harmony import */ var _services_mdService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79879);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








function Page(props) {
  const {
    content,
    topic,
    menuItems
  } = props;
  const title = _components_pages_Apis_Overview__WEBPACK_IMPORTED_MODULE_1__/* .topics.filter */ .F.filter(t => t.id === topic)[0]?.displayName ?? 'Overview';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_PageMetadata_PageMetadata__WEBPACK_IMPORTED_MODULE_0__/* .PageMetadata */ .d, {
      title: `APIs | ${title} | iTwin Platform`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_pages_Apis_Overview__WEBPACK_IMPORTED_MODULE_1__/* .Overview */ .g, {
      content: content,
      topic: topic,
      menuItems: menuItems
    })]
  });
}

const getStaticProps = async ctx => {
  const {
    topic = _components_pages_Apis_Overview__WEBPACK_IMPORTED_MODULE_1__/* .topics[0].id */ .F[0].id
  } = ctx.params ?? {};
  const content = (0,_services_mdService__WEBPACK_IMPORTED_MODULE_3__/* .preloadOverviewContent */ .qC)(topic);
  return {
    props: {
      topic,
      content,
      menuItems: [_constants_LeftSideNavigationSection__WEBPACK_IMPORTED_MODULE_2__/* .LeftSideNavigationSection.Fundamentals */ .N.Fundamentals]
    }
  };
};
const getStaticPaths = async () => {
  return {
    paths: _components_pages_Apis_Overview__WEBPACK_IMPORTED_MODULE_1__/* .topics.map */ .F.map(x => ({
      params: {
        topic: x.id
      }
    })),
    fallback: false
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

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

/***/ 61024:
/***/ (function(module) {

module.exports = import("mermaid");;

/***/ }),

/***/ 57147:
/***/ (function(module) {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,6296,2196,5217,6227,1974,1477,1686,9209,175,6909,347,6415,7246,1890,4930,246,4352,9104,9444,8362], function() { return __webpack_exec__(47045); });
module.exports = __webpack_exports__;

})();