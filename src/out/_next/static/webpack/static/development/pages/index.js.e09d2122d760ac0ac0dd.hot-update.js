webpackHotUpdate("static/development/pages/index.js",{

/***/ "./styled/AvatarContainer/index.js":
/*!*****************************************!*\
  !*** ./styled/AvatarContainer/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "../node_modules/@emotion/styled/dist/styled.browser.esm.js");

var _jsxFileName = "/Users/deadcell/Desktop/secretnodesorg-full/src/styled/AvatarContainer/index.js";


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\tmargin-left: 20px;\n\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\tdisplay: flex;\n\t\twidth: 400px;\n\t\tpadding: 20px;\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\twidth: 96px;\n\t\theight: 96px;\n\t\tborder-radius: 50%;\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 // TODO: make dynamic by passing sm, md or lg property
// based on screen size or how you want it displayed

var AvatarContainer = function AvatarContainer(props) {
  // if no src, return
  if (!props.src) return;
  var Avatar = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])('img')(_templateObject()); // if no name and no role, just return the avatar

  if (!props.name && !props.role) return Avatar;
  var src = props.src,
      name = props.name,
      role = props.role;
  var Container = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject2());
  var TextWrapper = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject3());
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Avatar, {
    src: src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, role)));
};

/* harmony default export */ __webpack_exports__["default"] = (AvatarContainer);

/***/ })

})
//# sourceMappingURL=index.js.e09d2122d760ac0ac0dd.hot-update.js.map