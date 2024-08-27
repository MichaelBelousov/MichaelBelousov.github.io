"use strict";
(function() {
var exports = {};
exports.id = 4734;
exports.ids = [4734,9444,8362];
exports.modules = {

/***/ 52181:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _tab_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: consume shared module (default) itwinui-v1@^1.48.3 (singleton) (fallback: ./node_modules/itwinui-v1/cjs/index.js) (eager)
var index_js_eager_ = __webpack_require__(85217);
// EXTERNAL MODULE: ./src/components/DocumentationSideMenu/MenuButton.tsx + 2 modules
var MenuButton = __webpack_require__(71125);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/constants/Tags.ts
var Tags = __webpack_require__(57348);
// EXTERNAL MODULE: ./src/components/icons/Indicators/DeprecationIcon.tsx
var DeprecationIcon = __webpack_require__(81334);
// EXTERNAL MODULE: ./src/components/icons/Indicators/TechPreviewIcon.tsx
var TechPreviewIcon = __webpack_require__(44930);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/pages/ApiDocumentation/ApiDocumentationSideMenu/ApiDocumentationMenuItem.tsx










const ApiDocumentationMenuItem = ({
  item,
  setActiveItem,
  className,
  activeItem,
  apiName
}) => {
  if (!item.path) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "menuItem-container",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        onClick: () => setActiveItem(item.id),
        className: `${className} ${item.id === activeItem ? 'active' : ''}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: item.displayName
        })
      })
    });
  }

  const href = item.fullPath ? item.path : `/apis/[apiName]/[[...tab]]`;
  const as = item.fullPath ? undefined : `/apis/${apiName}${item.path}`;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "menuItem-container",
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: href,
      as: as,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          onClick: () => setActiveItem(item.id),
          className: `${className}${item.id === activeItem ? ' active' : ''}`,
          children: [item.prefix && /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: `${item.prefix.toLowerCase()} method`,
            children: item.prefix
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: item.displayName
          }), item.isInTechPreview && /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Tooltip, {
            content: Tags/* TechPreviewTag */.n,
            placement: "bottom",
            className: "operation-tech-preview-tooltip",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "operation-tech-preview-badge",
              children: /*#__PURE__*/jsx_runtime_.jsx(TechPreviewIcon/* TechPreviewIcon */.d, {})
            })
          }), item.isDeprecated && /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Tooltip, {
            content: Tags/* DeprecatedTag */.l,
            placement: "bottom",
            className: "operation-tech-preview-tooltip",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "operation-tech-preview-badge",
              children: /*#__PURE__*/jsx_runtime_.jsx(DeprecationIcon/* DeprecationIcon */.r, {})
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ var ApiDocumentationSideMenu_ApiDocumentationMenuItem = (ApiDocumentationMenuItem);
;// CONCATENATED MODULE: ./src/components/pages/ApiDocumentation/ApiDocumentationSideMenu/ApiDocumentationMenuItems.tsx







const ApiDocumentationMenuItems = ({
  items,
  setActiveItem,
  activeItem,
  apiName
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: items.map((item, key) => {
      const content = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `sideMenu-${item.level}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx(ApiDocumentationSideMenu_ApiDocumentationMenuItem, {
          item: item,
          className: `sideMenuItem-${item.level}`,
          setActiveItem: setActiveItem,
          activeItem: activeItem,
          apiName: apiName
        }, item.id), item.children.map((subItem, key) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `sideMenu-${subItem.level}`,
          children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.ExpandableBlock, {
            title: subItem.displayName,
            children: subItem.children.map((subsubItem, key) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: `sideMenu-${subsubItem.level}`,
              children: /*#__PURE__*/jsx_runtime_.jsx(ApiDocumentationSideMenu_ApiDocumentationMenuItem, {
                item: subsubItem,
                className: `sideMenuItem-${subsubItem.level}`,
                setActiveItem: setActiveItem,
                activeItem: activeItem,
                apiName: apiName
              }, subsubItem.id)
            }, `sideMenu-${subsubItem.id}${key}`))
          })
        }, `sideMenu-${subItem.id}${key}`))]
      }, `sideMenu-${item.id}${key}`);

      return content;
    })
  });
};

/* harmony default export */ var ApiDocumentationSideMenu_ApiDocumentationMenuItems = (ApiDocumentationMenuItems);
;// CONCATENATED MODULE: ./src/components/pages/ApiDocumentation/ApiDocumentationSideMenu/ApiDocumentationSideMenu.tsx








const ApiDocumentationSideMenu = props => {
  const [isOpened, setIsOpened] = external_react_.useState(false);

  const openMenu = () => {
    setIsOpened(true);
  };

  const closeMenu = () => {
    setIsOpened(false);
  };

  const onClick = value => {
    props.setActiveItemId(value);
    if (isOpened) closeMenu();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(MenuButton/* default */.Z, {
      isOpened: isOpened,
      onClick: isOpened ? closeMenu : openMenu
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "api-documentation-side-navigation-pane",
      className: `sticky-container${isOpened && ' opened'}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "sideMenu sticky-element",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "sideMenu-large",
          children: [props.header, /*#__PURE__*/jsx_runtime_.jsx(ApiDocumentationSideMenu_ApiDocumentationMenuItems, {
            items: props.items,
            setActiveItem: onClick,
            activeItem: props.activeItemId,
            apiName: props.apiName
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var ApiDocumentationSideMenu_ApiDocumentationSideMenu = (ApiDocumentationSideMenu);
// EXTERNAL MODULE: ./src/components/Layouts/PageWithHeading/PageWithHeading.tsx + 1 modules
var PageWithHeading = __webpack_require__(31727);
;// CONCATENATED MODULE: ./src/components/Layouts/Documentation/DocumentationLayout.tsx

 // TODO: split out and dedeuplicate shared styles to a higher level file
// Importing styles api documentation styles which we currently use







function DocumentationLayout({
  breadcrumbs,
  title,
  tabId,
  menuItems,
  getContentByMenuItem
}) {
  const {
    0: currentMenuItem,
    1: setCurrentMenuItem
  } = (0,external_react_.useState)(tabId);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "page",
    className: "api-documentation page-content-container",
    children: /*#__PURE__*/jsx_runtime_.jsx(PageWithHeading/* default */.Z, {
      headerContent: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "api-documentation-header",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Headline, {
          children: title
        })
      }),
      breadcrumbs: breadcrumbs,
      sideMenu: /*#__PURE__*/jsx_runtime_.jsx(ApiDocumentationSideMenu_ApiDocumentationSideMenu, {
        items: menuItems,
        apiName: title,
        activeItemId: currentMenuItem,
        setActiveItemId: setCurrentMenuItem
      }),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "api-documentation-page-content",
        children: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: getContentByMenuItem(tabId)
        })
      })
    })
  });
}

/* harmony default export */ var Documentation_DocumentationLayout = (DocumentationLayout);
// EXTERNAL MODULE: ./src/components/PageMetadata/PageMetadata.tsx
var PageMetadata = __webpack_require__(80989);
// EXTERNAL MODULE: ./src/components/pages/ApiDocumentation/ApiDocumentationOverview.tsx
var ApiDocumentationOverview = __webpack_require__(94479);
// EXTERNAL MODULE: ./src/components/pages/ApiDocumentation/ApiDocumentationTutorials.tsx
var ApiDocumentationTutorials = __webpack_require__(21017);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ResponsiveTable/ResponsiveTable.tsx
var ResponsiveTable = __webpack_require__(56110);
;// CONCATENATED MODULE: ./src/components/pages/ApiDocumentation/BlueprintApiReference.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function BlueprintApiReference() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "blueprint-api-reference",
    children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Headline, {
      children: "Blueprint API Reference"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "intro",
      children: "Once your iTwin data is imported to Unreal using Datasmith, there are some convenience functions in the iTwin Unreal Datasmith Plugin that you can use to control and introspect the schedule animation."
    }), blueprintApi.map(t => /*#__PURE__*/jsx_runtime_.jsx(DocumentBlueprintType, {
      data: t
    }, t.name))]
  });
}

const propertyTableColumns = [{
  Header: 'Table',
  columns: [{
    Header: 'Name',
    accessor: 'name',
    Cell: cell => /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: makeBlueprintMemberId(cell.row.original),
      children: cell.value
    })
  }, {
    Header: 'Type',
    Cell: rowData => /*#__PURE__*/jsx_runtime_.jsx(TypeWithDocLink, {
      type: rowData.row.original.cpp.type
    })
  }, {
    Header: 'Description',
    accessor: 'description'
  }]
}];
const functionTableColumns = [{
  Header: 'Table',
  columns: [{
    Header: 'Name',
    accessor: 'name',
    Cell: cell => /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: makeBlueprintMemberId(cell.row.original),
      children: cell.value
    })
  }, {
    Header: 'Return Type',
    Cell: cell => /*#__PURE__*/jsx_runtime_.jsx(TypeWithDocLink, {
      type: cell.row.original.cpp.returnType ?? 'void'
    })
  }, {
    Header: 'Description',
    accessor: 'description'
  }]
}];
const argumentTableColumns = [{
  Header: 'Table',
  columns: [{
    Header: 'Name',
    accessor: 'name'
  }, {
    Header: 'Type',
    Cell: rowData => /*#__PURE__*/jsx_runtime_.jsx(TypeWithDocLink, {
      type: rowData.row.original.type
    })
  }, {
    Header: 'Description',
    accessor: 'description'
  }]
}];

function makeBlueprintMemberId(original) {
  return `${typeof original.cpp.thisType === 'string' ? original.cpp.thisType : original.cpp.thisType.name}::${original.cpp.name}`;
}

function DocumentBlueprintType(props) {
  const functions = props.data.members.filter(m => m.type === 'function');
  const properties = props.data.members.filter(m => m.type === 'property'); // the component seems to mount twice and there is no API to set expansion without using a controlled component
  // so we use an external ref to make sure the toggle runs once

  const rowExpandEffectRan = (0,external_react_.useRef)(false);

  const SubComponent = row => {
    const hash =  false ? 0 : undefined;
    const id = makeBlueprintMemberId(row.original);
    (0,external_react_.useEffect)(() => {
      const fragment = hash?.slice(1); // cut off the '#'

      if (fragment === id && !rowExpandEffectRan.current) {
        row.toggleRowExpanded();
        rowExpandEffectRan.current = true;
      }
    }, [hash, id, row]);
    const data = (0,external_react_.useMemo)(() => [...(row.original.cpp.outputPins ?? []), ...(row.original.cpp.returnType ? [{
      name: 'Return Value',
      type: row.original.cpp.returnType
    }] : [])], [row.original.cpp.outputPins, row.original.cpp.returnType]);
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "expanded-row-container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: row.original.blueprintNodeImgSrc,
        style: {
          maxWidth: row.original.blueprintNodeImgMaxWidth
        },
        alt: `unreal blueprint node "${row.original.name}"`,
        className: external_classnames_default()('bpnode-pic', row.original.deprecated && 'deprecated-func-pic')
      }), row.original.static && /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Leading, {
        children: /*#__PURE__*/jsx_runtime_.jsx("em", {
          children: "Static Function"
        })
      }), row.original.deprecated && /*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Leading, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "bpapi-deprecated",
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "Deprecated:"
          }), "\xA0", row.original.deprecated.message]
        })
      }), row.original.cpp.inputPins.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "pin-table",
        children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Leading, {
          children: " Inputs: "
        }), /*#__PURE__*/jsx_runtime_.jsx(ResponsiveTable/* ResponsiveTable */.U, {
          density: "extra-condensed",
          data: row.original.cpp.inputPins,
          emptyTableContent: "empty table" // unreachable
          ,
          columns: argumentTableColumns
        })]
      }), (row.original.cpp.outputPins?.length ?? 0) > 0 || row.original.cpp.returnType && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "pin-table",
        children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Leading, {
          children: " Outputs: "
        }), /*#__PURE__*/jsx_runtime_.jsx(ResponsiveTable/* ResponsiveTable */.U, {
          density: "extra-condensed",
          data: data,
          emptyTableContent: "empty table" // unreachable
          ,
          columns: argumentTableColumns
        })]
      })]
    });
  };

  const id = props.data.cpp.name;
  const href = `#${id}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "doc-type",
    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: href,
      as: href,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        id: id,
        href: href,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "type-title",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(index_js_eager_.Subheading, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("em", {
              className: "type-type",
              children: props.data.type
            }), "\xA0", props.data.name]
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "type-desc",
        children: props.data.description
      }), functions.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Subheading, {
          children: "Functions"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "doc-funcs",
          children: /*#__PURE__*/jsx_runtime_.jsx(ResponsiveTable/* ResponsiveTable */.U, {
            data: functions,
            emptyTableContent: "empty table" // unreachable
            ,
            columns: functionTableColumns,
            subComponent: SubComponent
          })
        })]
      }), properties.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(index_js_eager_.Subheading, {
          children: "Properties"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "doc-props",
          children: /*#__PURE__*/jsx_runtime_.jsx(ResponsiveTable/* ResponsiveTable */.U, {
            data: properties,
            emptyTableContent: "empty table" // unreachable
            ,
            columns: propertyTableColumns
          })
        })]
      })]
    })]
  });
}

function TypeWithDocLink(props) {
  if (typeof props.type === 'string') {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: props.type
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: props.type.docsUrl,
      as: props.type.docsUrl,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", _objectSpread(_objectSpread({
        href: props.type.docsUrl
      }, props.type.docsUrl[0] !== '#' ? {
        target: '_blank',
        rel: 'noreferrer'
      } : {}), {}, {
        children: props.type.name
      }))
    });
  }
}

const blueprintApi = [{
  name: 'Separated Export Scene Data',
  cpp: {
    name: 'FSeparatedExportSceneData'
  },
  type: 'struct',
  description: 'Global metadata accessible from scenes exported without the combine-meshes option.',
  members: [{
    type: 'property',
    name: 'Schedule Ticks Per Frame',
    cpp: {
      thisType: 'FSeparatedExportSceneData',
      name: 'ScheduleTicksPerFrame',
      type: 'int64'
    },
    deprecated: {
      message: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: ["use\xA0", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "#FSeparatedExportSceneData::ScheduleTicksPerSecond",
          as: "#FSeparatedExportSceneData::ScheduleTicksPerSecond",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#FSeparatedExportSceneData::ScheduleTicksPerSecond",
            children: "ScheduleTicksPerSecond"
          })
        }), "\xA0 instead for frame rate independence"]
      })
    },
    description: 'The amount of FDateTime ticks that the schedule animates through in one 24FPS frame.'
  }, {
    type: 'property',
    name: 'Schedule Ticks Per Second',
    cpp: {
      thisType: 'FSeparatedExportSceneData',
      name: 'ScheduleTicksPerSecond',
      type: 'int64'
    },
    description: 'The amount of FDateTime ticks that the schedule animates through in a second of game time.'
  }, {
    type: 'property',
    name: 'Schedule Start Date Time',
    cpp: {
      thisType: 'FSeparatedExportSceneData',
      name: 'ScheduleStartDateTime',
      type: {
        name: 'FDateTime',
        docsUrl: 'https://docs.unrealengine.com/API/Runtime/Core/Misc/FDateTime/'
      }
    },
    description: 'The start date and time of the schedule animation.'
  }, {
    type: 'property',
    name: 'Schedule End Date Time',
    cpp: {
      thisType: 'FSeparatedExportSceneData',
      name: 'ScheduleEndDateTime',
      type: {
        name: 'FDateTime',
        docsUrl: 'https://docs.unrealengine.com/API/Runtime/Core/Misc/FDateTime/'
      }
    },
    description: 'The end date and time of the schedule animation.'
  }]
}, {
  name: 'Scheduled Actor',
  cpp: {
    name: 'AScheduledActor'
  },
  type: 'class',
  description: 'The actor class that handles animating combined-mesh scenes.',
  members: [{
    type: 'function',
    name: 'Get Combined Mesh Actor',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'GetCombinedMeshActor',
      inputPins: [],
      returnType: {
        name: 'AStaticMeshActor*',
        docsUrl: 'https://docs.unrealengine.com/API/Runtime/Engine/Engine/AStaticMeshActor/'
      }
    },
    categories: [],
    description: 'Get the static mesh actor for the combined mesh from the actor hierarchy.',
    blueprintNodeImgSrc: '/images/unreal_blueprint_nodes/GetCombinedMeshActorNode.png'
  }, {
    type: 'property',
    name: 'Animation Start Time',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'AnimationStartTime',
      type: {
        name: 'FDateTime',
        docsUrl: 'https://docs.unrealengine.com/API/Runtime/Core/Misc/FDateTime/'
      }
    },
    description: 'The start date and time of the schedule animation.',
    categories: ['Animation Parameters']
  }, {
    type: 'property',
    name: 'Animation End Time',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'AnimationEndTime',
      type: {
        name: 'FDateTime',
        docsUrl: 'https://docs.unrealengine.com/API/Runtime/Core/Misc/FDateTime/'
      }
    },
    description: 'The start date and time of the schedule animation.',
    categories: ['Animation Parameters']
  }, {
    type: 'property',
    name: 'Animation Time',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'AnimationTime',
      type: {
        name: 'FDateTime',
        docsUrl: 'https://docs.unrealengine.com/API/Runtime/Core/Misc/FDateTime/'
      }
    },
    description: 'The current date time of the animation, set this to update the animation.',
    categories: ['Animation Parameters']
  }, {
    type: 'property',
    name: 'Animation Ticks Per Second Scale',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'AnimationTicksPerSecondScale',
      type: 'float'
    },
    description: 'The amount of schedule datetime ticks to advance per second. Defaults to one week of schedule time per second of game time.',
    categories: ['Animation Parameters']
  }, {
    type: 'property',
    name: 'Animation Auto Replay',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'bAnimationAutoReplay',
      type: 'bool'
    },
    description: 'Whether to restart the animation immediately at the start time upon reaching the end of the schedule animation.',
    categories: ['Animation Parameters']
  }, {
    type: 'property',
    name: 'Animation Is Playing',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'bAnimationIsPlaying',
      type: 'bool'
    },
    description: 'Whether the animation is playing. Set this as false to pause the animation.',
    categories: ['Animation Parameters']
  }, {
    type: 'function',
    static: true,
    deprecated: {
      message: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: ["use the \xA0", /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://docs.unrealengine.com/BlueprintAPI/Utilities/Text/FormatText/",
          children: /*#__PURE__*/jsx_runtime_.jsx("em", {
            children: "Format Text"
          })
        }), "\xA0 node instead"]
      })
    },
    name: 'Format Date Time',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'FormatDateTime',
      inputPins: [{
        name: 'DateTime',
        description: 'the date time to represent',
        type: {
          name: 'FDateTime',
          docsUrl: 'https://docs.unrealengine.com/API/Runtime/Core/Misc/FDateTime/'
        }
      }],
      returnType: {
        name: 'FString',
        docsUrl: 'https://docs.unrealengine.com/API/Runtime/Core/Containers/FString/'
      }
    },
    categories: ['Utilities'],
    description: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      children: ["Get an FString representing the given date as an HTTP date (See\xA0", /*#__PURE__*/jsx_runtime_.jsx(TypeWithDocLink, {
        type: {
          name: 'FString::HttpDate',
          docsUrl: 'https://docs.unrealengine.com/API/Runtime/Core/Misc/FDateTime/ToHttpDate/'
        }
      }), ")."]
    }),
    blueprintNodeImgSrc: '/images/unreal_blueprint_nodes/FormatDateTimeNode.png'
  }, {
    type: 'function',
    static: true,
    name: 'Get Separated Export Scene Data',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'GetSeparatedExportSceneData',
      inputPins: [{
        name: 'DatasmithScene',
        description: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["the datasmith scene exported using\xA0", /*#__PURE__*/jsx_runtime_.jsx("em", {
            children: "iTwin Exporter for Datasmith"
          }), " from which to get scene metadata from"]
        }),
        type: {
          name: 'ADatasmithSceneActor*',
          docsUrl: 'https://docs.unrealengine.com/4.26/en-US/API/Plugins/DatasmithContent/ADatasmithSceneActor/'
        }
      }],
      returnType: {
        name: 'FSeparatedExportSceneData',
        docsUrl: '#FSeparatedExportSceneData'
      }
    },
    blueprintNodeImgSrc: '/images/unreal_blueprint_nodes/GetSeparatedExportSceneDataNode.png',
    categories: ['Separate Object Export Utilities'],
    description: 'Get the global scene metadata from a scene that was exported without mesh combination.'
  }, {
    type: 'function',
    static: true,
    name: 'Get Schedule Date Time From Active Sequence',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'GetScheduleDateTimeFromActiveSequence',
      inputPins: [{
        name: 'SceneData',
        description: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: ["The scene data to read from, use the\xA0", /*#__PURE__*/jsx_runtime_.jsx(TypeWithDocLink, {
            type: {
              name: 'GetSeparatedExportSceneData',
              docsUrl: '#AScheduledActor::GetSeparatedExportSceneData'
            }
          }), "\xA0 static function to retrieve scene data."]
        }),
        type: {
          name: 'const FSeparatedExportSceneData&',
          docsUrl: '#FSeparatedExportSceneData'
        }
      }, {
        name: 'SequenceActor',
        description: 'The runtime level sequence actor to use to find the corresponding schedule date time.',
        type: {
          name: 'ALevelSequenceActor*',
          docsUrl: 'https://docs.unrealengine.com/API/Runtime/LevelSequence/ALevelSequenceActor/'
        }
      }],
      returnType: {
        name: 'FDateTime',
        docsUrl: 'https://docs.unrealengine.com/API/Runtime/Core/Misc/FDateTime/'
      }
    },
    categories: ['Separate Object Export Utilities'],
    description: 'Get the global scene metadata from a scene that was exported without mesh combination.',
    blueprintNodeImgSrc: '/images/unreal_blueprint_nodes/GetScheduleDateTimeFromActiveSequenceNode.png'
  }, {
    type: 'function',
    name: 'Synchronize With Level Sequence',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'SynchronizeWithLevelSequence',
      inputPins: [{
        name: 'LevelSequenceActor',
        description: 'The runtime level sequence actor to synchronize with.',
        type: {
          name: 'ALevelSequenceActor*',
          docsUrl: 'https://docs.unrealengine.com/API/Runtime/LevelSequence/ALevelSequenceActor/'
        }
      }]
    },
    categories: ['Combined Mesh Export Utilities'],
    description: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      children: ["Synchronize the ScheduledActor's timing with the state of a level sequence. Make sure to have called\xA0", /*#__PURE__*/jsx_runtime_.jsx(TypeWithDocLink, {
        type: {
          name: 'CorrectLevelSequenceEnd',
          docsUrl: '#AScheduledActor::CorrectLevelSequenceEnd'
        }
      }), "\xA0first."]
    }),
    blueprintNodeImgSrc: '/images/unreal_blueprint_nodes/SynchronizeWithLevelSequenceNode.png',
    blueprintNodeImgMaxWidth: 300
  }, {
    type: 'function',
    name: 'Correct Level Sequence End',
    cpp: {
      thisType: 'AScheduledActor',
      name: 'CorrectLevelSequenceEnd',
      inputPins: [{
        name: 'LevelSequenceActor',
        description: 'The runtime level sequence actor to correct the end of.',
        type: {
          name: 'ALevelSequenceActor*',
          docsUrl: 'https://docs.unrealengine.com/API/Runtime/LevelSequence/ALevelSequenceActor/'
        }
      }]
    },
    deprecated: {
      message: 'This should not be necessary to use on the latest version of the exporter'
    },
    categories: ['Combined Mesh Export Utilities'],
    description: 'Correct the length of a level sequence to fit that of a schedule animation in this AScheduleActor. ' + 'This currently necessary due to a limitation of the Datasmith API.',
    blueprintNodeImgSrc: '/images/unreal_blueprint_nodes/CorrectLevelSequenceEndNode.png',
    blueprintNodeImgMaxWidth: 300
  }]
}];
/* harmony default export */ var ApiDocumentation_BlueprintApiReference = (BlueprintApiReference);
// EXTERNAL MODULE: ./src/constants/ApiGroupId.ts
var ApiGroupId = __webpack_require__(7276);
// EXTERNAL MODULE: ./src/constants/ApiName.ts
var ApiName = __webpack_require__(94588);
// EXTERNAL MODULE: ./src/constants/apiMenuItems.tsx + 2 modules
var apiMenuItems = __webpack_require__(47414);
// EXTERNAL MODULE: ./src/constants/paths.ts
var paths = __webpack_require__(61686);
// EXTERNAL MODULE: ./src/links/SimpleLink.tsx
var SimpleLink = __webpack_require__(73351);
// EXTERNAL MODULE: ./src/services/mdService.ts
var mdService = __webpack_require__(79879);
// EXTERNAL MODULE: ./src/services/mdxService.ts + 1 modules
var mdxService = __webpack_require__(57706);
;// CONCATENATED MODULE: ./src/pages/unreal/integration/[tab].tsx
__webpack_require__(14473);

















const menuItems = [{
  id: apiMenuItems/* MenuItems.Overview */.s.Overview,
  children: [],
  level: '1',
  displayName: 'Overview',
  path: `/unreal/integration/${apiMenuItems/* MenuItems.Overview */.s.Overview}`,
  fullPath: true
}, {
  id: apiMenuItems/* MenuItems.Documentation */.s.Documentation,
  children: [],
  level: '1',
  displayName: 'Documentation',
  path: `/unreal/integration/${apiMenuItems/* MenuItems.Documentation */.s.Documentation}`,
  fullPath: true
}, {
  id: apiMenuItems/* MenuItems.Tutorials */.s.Tutorials,
  children: [],
  level: '1',
  displayName: 'Tutorials',
  path: `/unreal/integration/${apiMenuItems/* MenuItems.Tutorials */.s.Tutorials}`,
  fullPath: true
}, {
  id: apiMenuItems/* MenuItems.BlueprintApiReference */.s.BlueprintApiReference,
  children: [],
  level: '1',
  displayName: 'Blueprint API Reference',
  path: `/unreal/integration/${apiMenuItems/* MenuItems.BlueprintApiReference */.s.BlueprintApiReference}`,
  fullPath: true
}];

function Page({
  tab: tabId,
  overview,
  documentation
}) {
  const getContentByMenuItem = (0,external_react_.useCallback)(menuItem => {
    switch (menuItem) {
      case apiMenuItems/* MenuItems.Overview */.s.Overview:
        return /*#__PURE__*/jsx_runtime_.jsx(ApiDocumentationOverview/* default */.Z, {
          mdContent: overview
        });

      case apiMenuItems/* MenuItems.Documentation */.s.Documentation:
        return /*#__PURE__*/jsx_runtime_.jsx(ApiDocumentationOverview/* default */.Z, {
          mdContent: documentation
        });

      case apiMenuItems/* MenuItems.Tutorials */.s.Tutorials:
        return /*#__PURE__*/jsx_runtime_.jsx(ApiDocumentationTutorials/* default */.Z, {
          apis: [{
            displayName: 'iTwin for Unreal',
            apiGroupId: ApiGroupId/* ApiGroupId.ITwinUnreal */.mV.ITwinUnreal,
            path: ApiGroupId/* ApiGroupId.ITwinUnreal */.mV.ITwinUnreal,
            name: '',
            tags: []
          }],
          tutorialsMetadata: (0,mdxService/* getTutorialMetadataByApi */.Y)(ApiName/* ApiName.ITwinUnrealV1 */.l.ITwinUnrealV1)
        });

      case apiMenuItems/* MenuItems.BlueprintApiReference */.s.BlueprintApiReference:
        return /*#__PURE__*/jsx_runtime_.jsx(ApiDocumentation_BlueprintApiReference, {});
    }
  }, []);
  const tab = menuItems.find(item => item.id === tabId);
  const title = tab ? `${tab.displayName} - iTwin Unreal Integration | iTwin Platform` : `iTwin Unreal Integration | iTwin Platform`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageMetadata/* PageMetadata */.d, {
      title: title
    }), /*#__PURE__*/jsx_runtime_.jsx(Documentation_DocumentationLayout, {
      title: tab ? `${tab.displayName}` : `iTwin Unreal Integration`,
      breadcrumbs: [/*#__PURE__*/jsx_runtime_.jsx(SimpleLink/* default */.Z, {
        href: paths/* DOCUMENTATION */.tQ,
        children: "Documentation"
      }, "documentation"), /*#__PURE__*/jsx_runtime_.jsx(SimpleLink/* default */.Z, {
        href: paths/* UNREAL */.fI,
        children: "iTwin for Unreal"
      }, "unreal"), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "iTwin Unreal Integration"
      }, "unreal-integration")],
      menuItems: menuItems,
      getContentByMenuItem: getContentByMenuItem,
      tabId: tabId
    })]
  });
}

const getStaticProps = async ctx => {
  const {
    tab = apiMenuItems/* MenuItems.Overview */.s.Overview
  } = ctx.params;
  return {
    props: {
      tab,
      overview: await (0,mdService/* preloadApiDocumentation */.Zi)(ApiName/* ApiName.ITwinUnrealV1 */.l.ITwinUnrealV1),
      documentation: (0,mdService/* preloadManual */.Su)(ApiName/* ApiName.ITwinUnrealV1 */.l.ITwinUnrealV1)
    }
  };
};
const getStaticPaths = async () => {
  return {
    paths: menuItems.map(x => ({
      params: {
        tab: x.id
      }
    })),
    fallback: false
  };
};
/* harmony default export */ var _tab_ = (Page);

/***/ }),

/***/ 71125:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DocumentationSideMenu_MenuButton; }
});

// UNUSED EXPORTS: MenuButton

// EXTERNAL MODULE: ./node_modules/@itwin/itwinui-icons-react/cjs/index.js
var cjs = __webpack_require__(56296);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/icons/ChevronDownIcon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m16 4.7-1.4-1.4L8 9.9 1.4 3.3 0 4.7l8 8z"
    })
  }));
};

SvgIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
};

const ChevronDownIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(SvgIcon, _objectSpread({}, props));
};

/* harmony default export */ var icons_ChevronDownIcon = (ChevronDownIcon);
;// CONCATENATED MODULE: ./src/components/icons/ChevronUpIcon.tsx
function ChevronUpIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ChevronUpIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ChevronUpIcon_ownKeys(Object(source), !0).forEach(function (key) { ChevronUpIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ChevronUpIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ChevronUpIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ChevronUpIcon_SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", ChevronUpIcon_objectSpread(ChevronUpIcon_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m16 11.3-1.4 1.4L8 6.1l-6.6 6.6L0 11.3l8-8"
    })
  }));
};

ChevronUpIcon_SvgIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
};

const ChevronUpIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(ChevronUpIcon_SvgIcon, ChevronUpIcon_objectSpread({}, props));
};

/* harmony default export */ var icons_ChevronUpIcon = (ChevronUpIcon);
;// CONCATENATED MODULE: ./src/components/DocumentationSideMenu/MenuButton.tsx







function MenuButton(props) {
  const {
    isOpened,
    onClick
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "menu-button",
    onClick: onClick,
    "data-testid": "menu-button",
    children: isOpened ? /*#__PURE__*/jsx_runtime_.jsx(cjs.SvgClose, {}) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(icons_ChevronUpIcon, {}), /*#__PURE__*/jsx_runtime_.jsx(icons_ChevronDownIcon, {})]
    })
  });
}
/* harmony default export */ var DocumentationSideMenu_MenuButton = (MenuButton);

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

/***/ 56110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": function() { return /* binding */ ResponsiveTable; }
/* harmony export */ });
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function ResponsiveTable(props) {
  const rest = Object.assign({}, props);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Table, _objectSpread({}, rest));
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

/***/ 94479:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MarkdownViewWithMermaid_MarkdownViewWithMermaid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19444);
/* harmony import */ var _mdx_documentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10246);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);

 //Importing components





function ApiDocumentationOverview({
  mdContent
}) {
  if (!mdContent) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_MarkdownViewWithMermaid_MarkdownViewWithMermaid__WEBPACK_IMPORTED_MODULE_1__/* .MarkdownViewWithMermaid */ .D, {
    markdown: mdContent,
    components: _mdx_documentation__WEBPACK_IMPORTED_MODULE_2__/* .mdComponents */ .Z,
    options: {
      tables: true,
      emoji: true,
      openLinksInNewWindow: true
    }
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (ApiDocumentationOverview);

/***/ }),

/***/ 21017:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85217);
/* harmony import */ var itwinui_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61686);
/* harmony import */ var _links_SimpleLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73351);
/* harmony import */ var _Tutorials_TutorialsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75813);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









function ApiDocumentationTutorials({
  tutorialsMetadata,
  apis
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "related-tutorials",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Title, {
      className: "documentation-title",
      children: "Tutorials"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "tutorials-list-section",
      children: tutorialsMetadata && tutorialsMetadata.length > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Tutorials_TutorialsList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        apis: apis,
        tutorialsToShow: tutorialsMetadata
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(itwinui_v1__WEBPACK_IMPORTED_MODULE_0__.Body, {
        isMuted: true,
        children: "This API does not have published tutorials yet."
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "see-all-tutorials-link",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_links_SimpleLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_2__/* .TUTORIALS */ .eU,
        children: "See all tutorials"
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (ApiDocumentationTutorials);

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

/***/ 54963:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ NextUtils; }
/* harmony export */ });
class NextUtils {
  static get isPreloading() {
    return true;
  }

  static get isRuntime() {
    return !this.isPreloading;
  }

}

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

/***/ 66303:
/***/ (function(module) {

module.exports = require("chroma-js");

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

/***/ 67915:
/***/ (function(module) {

module.exports = require("styled-jsx");

/***/ }),

/***/ 99816:
/***/ (function(module) {

module.exports = require("styled-jsx/style");

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
var __webpack_exports__ = __webpack_require__.X(0, [1505,2189,1664,5152,6296,788,2196,5217,6227,1974,1686,9209,175,4588,6909,400,347,1878,1727,7246,1890,4930,246,6198,9332,1086,2485,5448,2028], function() { return __webpack_exec__(52181); });
module.exports = __webpack_exports__;

})();