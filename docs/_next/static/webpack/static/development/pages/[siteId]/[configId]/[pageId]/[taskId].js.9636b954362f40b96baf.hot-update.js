webpackHotUpdate("static\\development\\pages\\[siteId]\\[configId]\\[pageId]\\[taskId].js",{

/***/ "./components/TaskPageResult.tsx":
/*!***************************************!*\
  !*** ./components/TaskPageResult.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _IssuesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssuesList */ "./components/IssuesList.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models */ "./components/models.ts");



var _jsxFileName = "C:\\projects\\projectq\\a11y-dashboard-next\\components\\TaskPageResult.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var styles = function styles(theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    tabsRoot: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    },
    tabIndicator: {
      backgroundColor: theme.palette.grey[500],
      minWidth: theme.spacing(20)
    },
    errorTabHeader: {
      color: theme.palette.error.main
    },
    warningTabHeader: {
      color: theme.palette.warning.main
    },
    noticeTabHeader: {
      color: theme.palette.info.main
    },
    tabPanelContainer: {
      padding: theme.spacing(2)
    }
  });
};

;

var TabPanel = function TabPanel(props) {
  var children = props.children,
      currentId = props.currentId,
      id = props.id,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "currentId", "id"]);

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    component: "div",
    role: "tabpanel",
    hidden: currentId !== id,
    id: "full-width-tabpanel-".concat(id),
    "aria-labelledby": "full-width-tab-".concat(id)
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), children);
};

var a11yProps = function a11yProps(tabId) {
  return {
    id: "full-width-tab-".concat(tabId),
    'aria-controls': "full-width-tabpanel-".concat(tabId)
  };
};

var TaskPageResult = function TaskPageResult(props) {
  var page = props.page,
      results = props.results,
      classes = props.classes;
  var issues = results.map(function (r) {
    return r.issue;
  });
  var errorIssues = issues.filter(function (issue) {
    return issue.type == _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Error;
  });
  var warningIssues = issues.filter(function (issue) {
    return issue.type == _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Warning;
  });
  var noticeIssues = issues.filter(function (issue) {
    return issue.type == _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Notice;
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(_models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Error),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      currentTabId = _React$useState2[0],
      setCurrentTabId = _React$useState2[1];

  var handleTabChange = function handleTabChange(event, newTabId) {
    setCurrentTabId(newTabId);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, page.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: page.url,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, page.url)), __jsx("div", {
    className: classes.tabsRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    classes: {
      indicator: classes.tabIndicator
    },
    value: currentTabId,
    onChange: handleTabChange,
    "aria-label": "A11y results tabs by types",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.errorTabHeader,
    label: "Errors (".concat(errorIssues.length, ")"),
    value: _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Error
  }, a11yProps(_models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Error), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.warningTabHeader,
    label: "Warnings (".concat(warningIssues.length, ")"),
    value: _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Warning
  }, a11yProps(_models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Warning), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.noticeTabHeader,
    label: "Notices (".concat(noticeIssues.length, ")"),
    value: _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Notice
  }, a11yProps(_models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Notice), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.tabPanelContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(TabPanel, {
    currentId: currentTabId,
    id: _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_IssuesList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    issues: errorIssues,
    issueType: _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), __jsx(TabPanel, {
    currentId: currentTabId,
    id: _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Warning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_IssuesList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    issues: warningIssues,
    issueType: _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Warning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), __jsx(TabPanel, {
    currentId: currentTabId,
    id: _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Notice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_IssuesList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    issues: noticeIssues,
    issueType: _models__WEBPACK_IMPORTED_MODULE_6__["IssueType"].Notice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(TaskPageResult));

/***/ })

})
//# sourceMappingURL=[taskId].js.9636b954362f40b96baf.hot-update.js.map