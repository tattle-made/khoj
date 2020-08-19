"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _grommet = require("grommet");

var _tattleTechCoreUi = require("@bit/tattle-tech.core-ui.header");

var _tattleTechCoreUi2 = require("@bit/tattle-tech.core-ui.footer");

var _tattleTechCoreUi3 = require("@bit/tattle-tech.core-ui.theme");

var _tattleTechCoreUi4 = require("@bit/tattle-tech.core-ui.seo");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import SEO from "./s";

/**
 * @author
 * @function ContentPageLayout
 **/
var AppShellFill = function AppShellFill(_ref) {
  var children = _ref.children,
      footerItems = _ref.footerItems,
      headerLabel = _ref.headerLabel,
      headerTarget = _ref.headerTarget,
      primaryNav = _ref.primaryNav,
      expandCenter = _ref.expandCenter;
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _tattleTechCoreUi3.Theme,
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_tattleTechCoreUi4.SEO, {
    title: "Tattle - ".concat(headerLabel)
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    flex: false,
    as: "header"
  }, /*#__PURE__*/_react["default"].createElement(_tattleTechCoreUi.SimpleHeader, {
    label: headerLabel,
    target: headerTarget,
    primaryNav: primaryNav,
    showNav: true
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(ContentPageLayout, null, children))));
};

var ContentPageLayout = function ContentPageLayout(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    fill: true,
    pad: "small",
    margin: {
      top: "large",
      bottom: "large"
    }
  }, children);
};

var _default = AppShellFill;
exports["default"] = _default;

//# sourceMappingURL=AppShellFill.js.map