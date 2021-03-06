"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultValueReducer = defaultValueReducer;
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _utils = require("@material-ui/utils");

var _clamp = _interopRequireDefault(require("@material-ui/lab/utils/clamp"));

var styles = function styles(theme) {
  var commonTransitionsOptions = {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeOut
  };
  var trackTransitions = theme.transitions.create(['width', 'height', 'transform'], commonTransitionsOptions);
  var thumbTransitions = theme.transitions.create(['transform', 'box-shadow'], commonTransitionsOptions);
  var colors = {
    primary: theme.palette.primary.main,
    disabled: theme.palette.grey[400],
    thumbOutline: (0, _colorManipulator.fade)(theme.palette.primary.main, 0.16)
  };
  /**
   * radius of the box-shadow when pressed
   * hover should have a diameter equal to the pressed radius
   */

  var pressedOutlineRadius = 18;
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      width: '100%',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent',
      '&$disabled': {
        cursor: 'no-drop'
      },
      '&$vertical': {
        height: '100%'
      }
    },

    /* Styles applied to the container element. */
    container: {
      position: 'relative',
      '&$vertical': {
        height: '100%'
      }
    },

    /* Styles applied to the track elements. */
    track: {
      position: 'absolute',
      transform: 'translate(0, -50%)',
      top: '50%',
      width: '100%',
      height: 2,
      backgroundColor: colors.primary,
      transition: trackTransitions,
      '&$activated': {
        transition: 'none'
      },
      '&$disabled': {
        backgroundColor: colors.disabled,
        boxShadow: 'none'
      },
      '&$vertical': {
        transform: 'translate(-50%, 0)',
        left: '50%',
        top: 'initial',
        bottom: 0,
        width: 2,
        height: '100%'
      }
    },

    /* Styles applied to the track element before the thumb. */
    trackBefore: {
      zIndex: 1,
      left: 0,
      transformOrigin: 'left bottom'
    },

    /* Styles applied to the track element after the thumb. */
    trackAfter: {
      right: 0,
      opacity: 0.24,
      transformOrigin: 'right top',
      '&$vertical': {
        top: 0
      }
    },

    /* Styles applied to the thumb wrapper element. */
    thumbWrapper: {
      position: 'relative',
      zIndex: 2,
      transition: thumbTransitions,
      '&$activated': {
        transition: 'none'
      },
      '&$vertical': {
        bottom: 0,
        height: '100%'
      }
    },

    /* Styles applied to the thumb element. */
    thumb: {
      // Opt out of rtl flip as positioning here only is for centering
      flip: false,
      position: 'absolute',
      left: 0,
      transform: 'translate(-50%, -50%)',
      width: 24,
      height: 24,
      borderRadius: '50%',
      backgroundColor: colors.primary,
      transition: thumbTransitions,
      '&$focused, &:hover': {
        boxShadow: "0px 0px 0px ".concat(pressedOutlineRadius, "px ").concat(colors.thumbOutline)
      },
      '&$activated': {
        boxShadow: "0px 0px 0px ".concat(pressedOutlineRadius * 2, "px ").concat(colors.thumbOutline)
      },
      '&$disabled': {
        cursor: 'no-drop',
        width: 9,
        height: 9,
        backgroundColor: colors.disabled
      },
      '&$jumped': {
        boxShadow: "0px 0px 0px ".concat(pressedOutlineRadius * 2, "px ").concat(colors.thumbOutline)
      }
    },

    /* Class applied to the thumb element if custom thumb icon provided. */
    thumbIconWrapper: {
      backgroundColor: 'transparent'
    },
    thumbIcon: {
      height: 'inherit',
      width: 'inherit'
    },

    /* Class applied to the track and thumb elements to trigger JSS nested styles if `disabled`. */
    disabled: {},

    /* Class applied to the track and thumb elements to trigger JSS nested styles if `jumped`. */
    jumped: {},

    /* Class applied to the track and thumb elements to trigger JSS nested styles if `focused`. */
    focused: {},

    /* Class applied to the track and thumb elements to trigger JSS nested styles if `activated`. */
    activated: {},

    /* Class applied to the root, track and container to trigger JSS nested styles if `vertical`. */
    vertical: {}
  };
};

exports.styles = styles;

function percentToValue(percent, min, max) {
  return (max - min) * percent / 100 + min;
}

function roundToStep(number, step) {
  return Math.round(number / step) * step;
}

function getOffset(node) {
  var _global = global,
      pageYOffset = _global.pageYOffset,
      pageXOffset = _global.pageXOffset;

  var _node$getBoundingClie = node.getBoundingClientRect(),
      left = _node$getBoundingClie.left,
      bottom = _node$getBoundingClie.bottom;

  return {
    bottom: bottom + pageYOffset,
    left: left + pageXOffset
  };
}

function getMousePosition(event, touchId) {
  if (event.changedTouches) {
    // event.changedTouches.findIndex(touch => touch.identifier === touchId)
    var touchIndex = 0;

    for (var i = 0; i < event.changedTouches.length; i += 1) {
      var touch = event.changedTouches[i];

      if (touch.identifier === touchId) {
        touchIndex = i;
        break;
      }
    }

    if (event.changedTouches[touchIndex]) {
      return {
        x: event.changedTouches[touchIndex].pageX,
        y: event.changedTouches[touchIndex].pageY
      };
    }
  }

  return {
    x: event.pageX,
    y: event.pageY
  };
}

function calculatePercent(node, event, isVertical, isRtl, touchId) {
  var _node$getBoundingClie2 = node.getBoundingClientRect(),
      width = _node$getBoundingClie2.width,
      height = _node$getBoundingClie2.height;

  var _getOffset = getOffset(node),
      bottom = _getOffset.bottom,
      left = _getOffset.left;

  var _getMousePosition = getMousePosition(event, touchId),
      x = _getMousePosition.x,
      y = _getMousePosition.y;

  var value = isVertical ? bottom - y : x - left;
  var onePercent = (isVertical ? height : width) / 100;
  return isRtl && !isVertical ? 100 - (0, _clamp.default)(value / onePercent) : (0, _clamp.default)(value / onePercent);
}

function preventPageScrolling(event) {
  event.preventDefault();
}
/* istanbul ignore if */


if (process.env.NODE_ENV !== 'production' && !_react.default.createContext) {
  throw new Error('Material-UI: react@16.3.0 or greater is required.');
}
/**
 * @param {number} rawValue
 * @param {object} props
 */


function defaultValueReducer(rawValue, props) {
  var disabled = props.disabled,
      step = props.step;

  if (disabled) {
    return null;
  }

  if (step) {
    return roundToStep(rawValue, step);
  }

  return Number(rawValue.toFixed(3));
}

var Slider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Slider, _React$Component);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      currentState: 'initial'
    };
    _this.jumpAnimationTimeoutId = -1;
    _this.touchId = undefined;

    _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          currentValue = _this$props.value;
      var onePercent = Math.abs((max - min) / 100);
      var step = _this.props.step || onePercent;
      var value;

      switch (event.key) {
        case 'Home':
          value = min;
          break;

        case 'End':
          value = max;
          break;

        case 'PageUp':
          value = currentValue + onePercent * 10;
          break;

        case 'PageDown':
          value = currentValue - onePercent * 10;
          break;

        case 'ArrowRight':
        case 'ArrowUp':
          value = currentValue + step;
          break;

        case 'ArrowLeft':
        case 'ArrowDown':
          value = currentValue - step;
          break;

        default:
          return;
      }

      event.preventDefault();
      value = (0, _clamp.default)(value, min, max);

      _this.emitChange(event, value);
    };

    _this.handleFocus = function () {
      _this.setState({
        currentState: 'focused'
      });
    };

    _this.handleBlur = function () {
      _this.setState({
        currentState: 'normal'
      });
    };

    _this.handleClick = function (event) {
      var _this$props2 = _this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          vertical = _this$props2.vertical;
      var percent = calculatePercent(_this.containerRef, event, vertical, _this.isReverted(), _this.touchId);
      var value = percentToValue(percent, min, max);

      _this.emitChange(event, value, function () {
        _this.playJumpAnimation();
      });
    };

    _this.handleMouseEnter = function (event) {
      // If the slider was being interacted with but the mouse went off the window
      // and then re-entered while unclicked then end the interaction.
      if (event.buttons === 0) {
        _this.handleDragEnd(event);
      }
    };

    _this.handleMouseLeave = function (event) {
      // The mouse will have moved between the last mouse move event
      // this mouse leave event
      _this.handleMouseMove(event);
    };

    _this.handleTouchStart = function (event) {
      event.preventDefault();
      var touch = event.changedTouches.item(0);

      if (touch != null) {
        _this.touchId = touch.identifier;
      }

      _this.setState({
        currentState: 'activated'
      });

      document.body.addEventListener('touchend', _this.handleTouchEnd);

      if (typeof _this.props.onDragStart === 'function') {
        _this.props.onDragStart(event);
      }
    };

    _this.handleMouseDown = function (event) {
      event.preventDefault();

      _this.setState({
        currentState: 'activated'
      });

      document.body.addEventListener('mouseenter', _this.handleMouseEnter);
      document.body.addEventListener('mouseleave', _this.handleMouseLeave);
      document.body.addEventListener('mousemove', _this.handleMouseMove);
      document.body.addEventListener('mouseup', _this.handleMouseUp);

      if (typeof _this.props.onDragStart === 'function') {
        _this.props.onDragStart(event);
      }
    };

    _this.handleTouchEnd = function (event) {
      if (_this.touchId === undefined) {
        _this.handleMouseUp(event);
      }

      for (var i = 0; i < event.changedTouches.length; i += 1) {
        var touch = event.changedTouches.item(i);

        if (touch.identifier === _this.touchId) {
          _this.handleMouseUp(event);

          break;
        }
      }
    };

    _this.handleMouseUp = function (event) {
      _this.handleDragEnd(event);
    };

    _this.handleTouchMove = function (event) {
      if (_this.touchId === undefined) {
        _this.handleMouseMove(event);
      }

      for (var i = 0; i < event.changedTouches.length; i += 1) {
        var touch = event.changedTouches.item(i);

        if (touch.identifier === _this.touchId) {
          _this.handleMouseMove(event);

          break;
        }
      }
    };

    _this.handleMouseMove = function (event) {
      var _this$props3 = _this.props,
          min = _this$props3.min,
          max = _this$props3.max,
          vertical = _this$props3.vertical;
      var percent = calculatePercent(_this.containerRef, event, vertical, _this.isReverted(), _this.touchId);
      var value = percentToValue(percent, min, max);

      _this.emitChange(event, value);
    };

    return _this;
  }

  (0, _createClass2.default)(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.containerRef) {
        this.containerRef.addEventListener('touchstart', preventPageScrolling, {
          passive: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Guarding for **broken** shallow rendering method that call componentDidMount
      // but doesn't handle refs correctly.
      // To remove once the shallow rendering has been fixed.
      if (this.containerRef) {
        this.containerRef.removeEventListener('touchstart', preventPageScrolling, {
          passive: false
        });
      }

      document.body.removeEventListener('mouseenter', this.handleMouseEnter);
      document.body.removeEventListener('mouseleave', this.handleMouseLeave);
      document.body.removeEventListener('mousemove', this.handleMouseMove);
      document.body.removeEventListener('mouseup', this.handleMouseUp);
      clearTimeout(this.jumpAnimationTimeoutId);
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd(event) {
      this.setState({
        currentState: 'normal'
      });
      document.body.removeEventListener('mouseenter', this.handleMouseEnter);
      document.body.removeEventListener('mouseleave', this.handleMouseLeave);
      document.body.removeEventListener('mousemove', this.handleMouseMove);
      document.body.removeEventListener('mouseup', this.handleMouseUp);
      document.body.removeEventListener('touchend', this.handleTouchEnd);

      if (typeof this.props.onDragEnd === 'function') {
        this.props.onDragEnd(event);
      }
    }
  }, {
    key: "emitChange",
    value: function emitChange(event, rawValue, callback) {
      var _this$props4 = this.props,
          onChange = _this$props4.onChange,
          previousValue = _this$props4.value,
          valueReducer = _this$props4.valueReducer;
      var newValue = valueReducer(rawValue, this.props, event);

      if (newValue !== null && newValue !== previousValue && typeof onChange === 'function') {
        onChange(event, newValue);

        if (typeof callback === 'function') {
          callback();
        }
      }
    }
  }, {
    key: "calculateTrackPartStyles",
    value: function calculateTrackPartStyles(percent) {
      var _this$props5 = this.props,
          theme = _this$props5.theme,
          vertical = _this$props5.vertical;
      var currentState = this.state.currentState;

      switch (currentState) {
        case 'disabled':
          return (0, _defineProperty2.default)({}, vertical ? 'height' : 'width', "calc(".concat(percent, "% - 6px)"));

        default:
          return {
            transform: "".concat(vertical ? "translateX(".concat(theme.direction === 'rtl' ? '' : '-', "50%) scaleY") : 'translateY(-50%) scaleX', "(").concat(percent / 100, ")")
          };
      }
    }
  }, {
    key: "playJumpAnimation",
    value: function playJumpAnimation() {
      var _this2 = this;

      this.setState({
        currentState: 'jumped'
      }, function () {
        clearTimeout(_this2.jumpAnimationTimeoutId);
        _this2.jumpAnimationTimeoutId = setTimeout(function () {
          _this2.setState({
            currentState: 'normal'
          });
        }, _this2.props.theme.transitions.duration.complex);
      });
    }
  }, {
    key: "isReverted",
    value: function isReverted() {
      return this.props.theme.direction === 'rtl';
    }
  }, {
    key: "render",
    value: function render() {
      var _commonClasses,
          _classNames,
          _this3 = this;

      var currentState = this.state.currentState;
      var _this$props6 = this.props,
          classNameProp = _this$props6.className,
          classes = _this$props6.classes,
          Component = _this$props6.component,
          thumbIcon = _this$props6.thumb,
          disabled = _this$props6.disabled,
          max = _this$props6.max,
          min = _this$props6.min,
          onChange = _this$props6.onChange,
          onDragEnd = _this$props6.onDragEnd,
          onDragStart = _this$props6.onDragStart,
          step = _this$props6.step,
          theme = _this$props6.theme,
          value = _this$props6.value,
          valueReducer = _this$props6.valueReducer,
          vertical = _this$props6.vertical,
          other = (0, _objectWithoutProperties2.default)(_this$props6, ["className", "classes", "component", "thumb", "disabled", "max", "min", "onChange", "onDragEnd", "onDragStart", "step", "theme", "value", "valueReducer", "vertical"]);
      var percent = (0, _clamp.default)((value - min) * 100 / (max - min));
      var commonClasses = (_commonClasses = {}, (0, _defineProperty2.default)(_commonClasses, classes.disabled, disabled), (0, _defineProperty2.default)(_commonClasses, classes.jumped, !disabled && currentState === 'jumped'), (0, _defineProperty2.default)(_commonClasses, classes.focused, !disabled && currentState === 'focused'), (0, _defineProperty2.default)(_commonClasses, classes.activated, !disabled && currentState === 'activated'), (0, _defineProperty2.default)(_commonClasses, classes.vertical, vertical), (0, _defineProperty2.default)(_commonClasses, classes.rtl, theme.direction === 'rtl'), _commonClasses);
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.vertical, vertical), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);
      var containerClasses = (0, _classnames.default)(classes.container, (0, _defineProperty2.default)({}, classes.vertical, vertical));
      var trackBeforeClasses = (0, _classnames.default)(classes.track, classes.trackBefore, commonClasses);
      var trackAfterClasses = (0, _classnames.default)(classes.track, classes.trackAfter, commonClasses);
      var thumbTransformFunction = vertical ? 'translateY' : 'translateX';
      var thumbDirectionInverted = vertical || theme.direction === 'rtl';
      var inlineTrackBeforeStyles = this.calculateTrackPartStyles(percent);
      var inlineTrackAfterStyles = this.calculateTrackPartStyles(100 - percent);
      var inlineThumbStyles = {
        transform: "".concat(thumbTransformFunction, "(").concat(thumbDirectionInverted ? 100 - percent : percent, "%)")
      };
      /** Start Thumb Icon Logic Here */

      var ThumbIcon = thumbIcon ? _react.default.cloneElement(thumbIcon, (0, _extends2.default)({}, thumbIcon.props, {
        className: (0, _classnames.default)(thumbIcon.props.className, classes.thumbIcon)
      })) : null;
      /** End Thumb Icon Logic Here */

      var thumbWrapperClasses = (0, _classnames.default)(classes.thumbWrapper, commonClasses);
      var thumbClasses = (0, _classnames.default)(classes.thumb, (0, _defineProperty2.default)({}, classes.thumbIconWrapper, thumbIcon), commonClasses);
      return _react.default.createElement(Component, (0, _extends2.default)({
        role: "slider",
        className: className,
        "aria-disabled": disabled,
        "aria-valuenow": value,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-orientation": vertical ? 'vertical' : 'horizontal',
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        onTouchStartCapture: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        ref: function ref(_ref2) {
          _this3.containerRef = _reactDom.default.findDOMNode(_ref2);
        }
      }, other), _react.default.createElement("div", {
        className: containerClasses
      }, _react.default.createElement("div", {
        className: trackBeforeClasses,
        style: inlineTrackBeforeStyles
      }), _react.default.createElement("div", {
        className: thumbWrapperClasses,
        style: inlineThumbStyles
      }, _react.default.createElement(_ButtonBase.default, {
        className: thumbClasses,
        disabled: disabled,
        disableRipple: true,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onTouchStartCapture: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onFocusVisible: this.handleFocus
      }, ThumbIcon)), _react.default.createElement("div", {
        className: trackAfterClasses,
        style: inlineTrackAfterStyles
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.disabled) {
        return {
          currentState: 'disabled'
        };
      }

      if (!nextProps.disabled && prevState.currentState === 'disabled') {
        return {
          currentState: 'normal'
        };
      }

      return null;
    }
  }]);
  return Slider;
}(_react.default.Component);

process.env.NODE_ENV !== "production" ? Slider.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the slider will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   */
  max: _propTypes.default.number,

  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   */
  min: _propTypes.default.number,

  /**
   * Callback function that is fired when the slider's value changed.
   */
  onChange: _propTypes.default.func,

  /**
   * Callback function that is fired when the slide has stopped moving.
   */
  onDragEnd: _propTypes.default.func,

  /**
   * Callback function that is fired when the slider has begun to move.
   */
  onDragStart: _propTypes.default.func,

  /**
   * The granularity the slider can step through values.
   */
  step: _propTypes.default.number,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The component used for the slider icon.
   * This is optional, if provided should be a react element.
   */
  thumb: _propTypes.default.element,

  /**
   * The value of the slider.
   */
  value: _propTypes.default.number.isRequired,

  /**
   * the reducer used to process the value emitted from the slider. If `null` or
   * the same value is returned no change is emitted.
   * @param {number} rawValue - value in [min, max]
   * @param {SliderProps} props - current props of the Slider
   * @param {Event} event - the event the change was triggered from
   */
  valueReducer: _propTypes.default.func,

  /**
   * If `true`, the slider will be vertical.
   */
  vertical: _propTypes.default.bool
} : void 0;
Slider.defaultProps = {
  min: 0,
  max: 100,
  component: 'div',
  valueReducer: defaultValueReducer
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiSlider',
  withTheme: true
})(Slider);

exports.default = _default;
