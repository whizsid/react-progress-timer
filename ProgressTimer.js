"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _defaultFormatter = _interopRequireDefault(require("./defaultFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProgressTimer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressTimer, _React$Component);

  function ProgressTimer(props) {
    var _this;

    _classCallCheck(this, ProgressTimer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressTimer).call(this, props));
    var date = new Date();
    _this.state = {
      decreseKey: 0,
      percentages: [],
      startedTime: date.getTime()
    }; // If decrease option is enabled decrease key is changing for each second
    // to refreshing the component

    if (props.decreaseTime) {
      window.setInterval(function () {
        var decreseKey = _this.state.decreseKey;

        _this.setState({
          decreseKey: decreseKey + 1
        });
      }, 1000);
    }

    return _this;
  }

  _createClass(ProgressTimer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var percentages = this.state.percentages;

      if (this.props.percentage !== prevProps.percentage) {
        var time = new Date();
        percentages.push({
          percentage: this.props.percentage,
          time: time.getTime()
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          percentage = _this$props.percentage,
          initialText = _this$props.initialText,
          completedText = _this$props.completedText,
          calculateByAverage = _this$props.calculateByAverage,
          formatter = _this$props.formatter,
          decreaseTime = _this$props.decreaseTime,
          format = _this$props.format;
      var _this$state = this.state,
          percentages = _this$state.percentages,
          startedTime = _this$state.startedTime;

      if (percentage <= 0 || percentages.length < 2) {
        return initialText;
      }

      if (percentage >= 100) {
        return completedText;
      }

      var estTime = 0;
      var lastPercentage = percentages[percentages.length - 1];

      if (calculateByAverage) {
        var timeDif = lastPercentage.time - startedTime;
        var timePerChanged = timeDif / lastPercentage.percentage;
        estTime = timePerChanged * (100 - lastPercentage.percentage);
      } else {
        var beforeLastPercentage = percentages[percentages.length - 2];

        var _timeDif = lastPercentage.time - beforeLastPercentage.time;

        var changed = lastPercentage.percentage - beforeLastPercentage.percentage;

        var _timePerChanged = _timeDif / changed;

        estTime = _timePerChanged * (100 - percentage);
      }

      if (decreaseTime) {
        var currentTime = new Date();
        estTime -= currentTime.getTime() - lastPercentage.time;

        if (estTime < 0) {
          estTime = 0;
        }
      }

      if (formatter) {
        return formatter(estTime);
      }

      if (format) {
        return (0, _defaultFormatter["default"])(estTime, format);
      }

      return null;
    }
  }]);

  return ProgressTimer;
}(React.Component);

exports["default"] = ProgressTimer;

_defineProperty(ProgressTimer, "defaultProps", {
  calculateByAverage: false,
  completedText: "Completed",
  decreaseTime: true,
  format: "Completing in {value} {unit}",
  initialText: "Initializing"
});