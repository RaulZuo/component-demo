'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

require("./styles.scss");

var ComponentDemo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ComponentDemo, _Component);

  function ComponentDemo(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ComponentDemo);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ComponentDemo).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(ComponentDemo, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "demo"
      }, "This is component demo");
    }
  }]);
  return ComponentDemo;
}(_react.Component);

var _default = ComponentDemo;
exports.default = _default;