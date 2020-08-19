"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _grommet = require("grommet");

var _tattleTechCoreUi = _interopRequireDefault(require("@bit/tattle-tech.core-ui.app-logo"));

var _tattleTechCoreUi2 = require("@bit/tattle-tech.core-ui.links");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFeather = require("react-feather");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: inherit;\n  :visited {\n    color: inherit;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconComponents = {
  search: /*#__PURE__*/_react["default"].createElement(_reactFeather.Search, null),
  user: /*#__PURE__*/_react["default"].createElement(_reactFeather.User, null),
  logout: /*#__PURE__*/_react["default"].createElement(_reactFeather.LogOut, null)
};
var ThemedLink = (0, _styledComponents["default"])(_tattleTechCoreUi2.Link)(_templateObject());
/**
 * @author
 * @function SimpleHeader
 **/

var SimpleHeader = function SimpleHeader(_ref) {
  var label = _ref.label,
      target = _ref.target,
      primaryNav = _ref.primaryNav,
      showNav = _ref.showNav;
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row",
    wrap: true
  }, /*#__PURE__*/_react["default"].createElement(_tattleTechCoreUi["default"], {
    name: label,
    target: target
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    margin: {
      left: "large"
    },
    pad: "small",
    direction: "row",
    align: "center",
    gap: "medium",
    flex: "grow"
  }, showNav && primaryNav.main.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(ThemedLink, {
      key: option.id,
      to: option.target
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
      plain: true
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Heading, {
      margin: "none",
      level: 3
    }, "", option.label, " ")));
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row",
    align: "center",
    gap: "small",
    margin: {
      right: "small"
    }
  }, showNav && primaryNav.miniatures.map(function (miniature) {
    return /*#__PURE__*/_react["default"].createElement(ThemedLink, {
      key: miniature.id,
      to: miniature.target
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
      plain: true,
      icon: IconComponents[miniature.icon]
    }));
  })));
};

var _default = SimpleHeader;
exports["default"] = _default;

//# sourceMappingURL=SimpleHeader.js.map