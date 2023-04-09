/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../Components/BColor.js":
/*!*******************************!*\
  !*** ../Components/BColor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BColor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BColor.scss */ "../Components/BColor.scss");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ "../Components/Title.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Color' (String)
 * @props value: value of color (String)
 * @props defaultColor: default color for reset color
 * @props onChange: (Function)
 * @props disableAlpha: Disable alpha of color (Boolean)
 * @return color (String)
 */






const BColor = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
    value,
    defaultColor,
    onChange,
    disableAlpha
  } = props;
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  const themeColors = wp.data.select('core/block-editor').getSettings().colors;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: ""
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer bColor",
    contentClassName: "bPlDropdownPopover bColorDropdownPopover",
    position: "top right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "bColorButtonContainer"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "bColorButton",
        isPrimary: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        style: {
          backgroundColor: value || 'transparent'
        }
      })), defaultColor && defaultColor != state && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "bPlResetVal",
        icon: "image-rotate",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'bplugins'),
        onClick: () => {
          onChange(defaultColor);
          setState(defaultColor);
        }
      }));
    },
    renderContent: _ref2 => {
      let {
        isOpen,
        onClose
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        color: value || '',
        disableAlpha: disableAlpha ? disableAlpha : false,
        onChangeComplete: c => {
          onChange(`rgba(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}, ${c.rgb.a})`);
          setState(c.hex);
        }
      }), themeColors.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "themeColors"
      }, themeColors.map(_ref3 => {
        let {
          color
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "bColorButtonContainer"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          className: "bColorButton",
          onClick: () => {
            onChange(color);
            setState(color);
            onClose;
          },
          "aria-expanded": isOpen,
          style: {
            backgroundColor: value ? color : 'transparent'
          }
        }));
      })));
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BColor);

/***/ }),

/***/ "../Components/Background.js":
/*!***********************************!*\
  !*** ../Components/Background.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ "../Components/Title.js");
/* harmony import */ var _BColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BColor */ "../Components/BColor.js");
/* harmony import */ var _BtnGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BtnGroup */ "../Components/BtnGroup.js");
/* harmony import */ var _MediaControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaControl */ "../Components/MediaControl.js");
/* harmony import */ var _Helper_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Helper/options */ "../Components/Helper/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Background' (String)
 * @props background (required): { type, color, gradient, image, position, attachment, repeat, size, overlayColor } (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { type, color, gradient, image, position, attachment, repeat, size, overlayColor } (Object)
 */



const Gradient = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGradientPicker || _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker;

// Variables





const bgTypes = [{
  label: 'Solid',
  value: 'solid'
}, {
  label: 'Gradient',
  value: 'gradient'
}, {
  label: 'Image',
  value: 'image'
}];
const attachments = [{
  label: 'Initial',
  value: 'initial'
}, {
  label: 'Scroll',
  value: 'scroll'
}, {
  label: 'Fixed',
  value: 'fixed'
}, {
  label: 'Local',
  value: 'local'
}];
const repeats = [{
  label: 'No Repeat',
  value: 'no-repeat'
}, {
  label: 'Repeat',
  value: 'repeat'
}, {
  label: 'Repeat X',
  value: 'repeat-x'
}, {
  label: 'Repeat Y',
  value: 'repeat-y'
}];
const sizes = [{
  label: 'Cover',
  value: 'cover'
}, {
  label: 'Auto',
  value: 'auto'
}, {
  label: 'Contain',
  value: 'contain'
}];
const Background = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'bplugins'),
    value = {},
    defaults = {},
    onChange,
    isSolid = true,
    isGradient = true,
    isImage = true
  } = props;
  const defaultVal = {
    type: 'solid',
    color: '#000000b3',
    gradient: 'linear-gradient(135deg, #4527a4, #8344c5)',
    image: {},
    position: 'center center',
    attachment: 'initial',
    repeat: 'no-repeat',
    size: 'cover',
    overlayColor: '#000000b3'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });

  // useEffect(() => {
  // 	const allStyles = ('gradient' === getValue('type') && isGradient) ? `background: ${getValue('gradient')};` :
  // 		('image' === getValue('type') && isImage) ?
  // 			`background: url(${getValue('image')?.url});
  // 			background-position: ${getValue('position')};
  // 			background-size: ${getValue('size')};
  // 			background-repeat: ${getValue('repeat')};
  // 			background-color: ${getValue('overlayColor')};
  // 			background-blend-mode: overlay;` :
  // 			`background: ${getValue('color')};`;

  // 	const initObj = { type: getValue('type'), color: getValue('color'), gradient: getValue('gradient'), image: getValue('image'), position: getValue('position'), attachment: getValue('attachment'), repeat: getValue('repeat'), size: getValue('size'), overlayColor: getValue('overlayColor') }

  // 	onChange({ ...background, ...initObj, styles: allStyles.replace(/\s+/g, ' ').trim() });
  // }, [getValue('type'), getValue('color'), getValue('gradient'), getValue('image'), getValue('position'), getValue('attachment'), getValue('repeat'), getValue('size'), getValue('overlayColor')]);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mb5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Type:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BtnGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: getValue('type'),
      onChange: val => setValue('type', val),
      options: false === isSolid ? bgTypes.filter(b => b.value !== 'solid') : false === isGradient ? bgTypes.filter(b => b.value !== 'gradient') : false === isImage ? bgTypes.filter(b => b.value !== 'image') : bgTypes
    })), 'solid' === getValue('type') && isSolid && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BColor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "mt20",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), 'gradient' === getValue('type') && isGradient && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Gradient, {
      className: "mt20",
      value: getValue('gradient'),
      onChange: val => setValue('gradient', val),
      gradients: _Helper_options__WEBPACK_IMPORTED_MODULE_7__.gradients
    }), 'image' === getValue('type') && isImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "mb5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MediaControl__WEBPACK_IMPORTED_MODULE_6__.InlineDetailMediaUpload, {
      types: ['image'],
      value: getValue('image'),
      onChange: val => setValue('image', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalAlignmentMatrixControl, {
      value: getValue('position'),
      onChange: val => setValue('position', val)
    }), value?.position && value?.position !== getDefault('position') && resetValue('position')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Attachment:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('attachment'),
      onChange: val => setValue('attachment', val),
      options: attachments
    }), value?.attachments && value?.attachments !== getDefault('attachments') && resetValue('attachments')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repeat:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('repeat'),
      onChange: val => setValue('repeat', val),
      options: repeats
    }), value?.repeat && value?.repeat !== getDefault('repeat') && resetValue('repeat')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('size'),
      onChange: val => setValue('size', val),
      options: sizes
    }), value?.size && value?.size !== getDefault('size') && resetValue('size')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BColor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "mt20",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overlay Color:', 'bplugins'),
      value: getValue('overlayColor'),
      onChange: val => setValue('overlayColor', val),
      defaultColor: getDefault('overlayColor')
    })))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);

/***/ }),

/***/ "../Components/BtnGroup.js":
/*!*********************************!*\
  !*** ../Components/BtnGroup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * @props className (optional): 'mt20' (String)
 * @props value (String)
 * @props onChange: (Function)
 * @return Value (String)
 */


const BtnGroup = props => {
  const {
    className,
    value,
    onChange,
    options,
    isIcon = false,
    isTextIcon = false,
    size
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: `bPlBtnGroup ${className || null}`
  }, Object.values(options).map(obj => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    key: obj.value,
    text: obj.label,
    position: "top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: isIcon ? obj?.icon : null,
    isPrimary: value === obj.value,
    "aria-pressed": value === obj.value,
    isSmall: size === 'small' ? true : false,
    isMedium: size === 'small' ? false : true,
    onClick: () => onChange(obj.value, obj.def && obj.def)
  }, isTextIcon ? obj.icon : isIcon ? '' : obj.label))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BtnGroup);

/***/ }),

/***/ "../Components/Helper/functions.js":
/*!*****************************************!*\
  !*** ../Components/Helper/functions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImageSizes": () => (/* binding */ getImageSizes),
/* harmony export */   "tabController": () => (/* binding */ tabController)
/* harmony export */ });
const getImageSizes = (image, imageSizes) => {
  if (!image) return [];
  let options = [];
  const sizes = image.media_details.sizes;
  for (const key in sizes) {
    const imageSize = imageSizes.find(s => s.slug === key);
    if (imageSize) {
      options.push({
        label: imageSize.name,
        value: sizes[key].source_url
      });
    }
  }
  return options;
};
const tabController = () => {
  setTimeout(() => {
    const panelBodies = document.querySelectorAll('.components-panel__body-title button');
    panelBodies.forEach(item => {
      item.addEventListener('click', clickEveryItem);
    });
    function clickEveryItem() {
      this.removeEventListener('click', clickEveryItem);
      panelBodies.forEach(item => {
        if (item.getAttribute('aria-expanded') === 'true' && !item.isEqualNode(this)) {
          item.click();
        }
      });
      setTimeout(() => {
        this.addEventListener('click', clickEveryItem);
      }, 500);
    }
  }, 500);
};

/***/ }),

/***/ "../Components/Helper/getCSS.js":
/*!**************************************!*\
  !*** ../Components/Helper/getCSS.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBackgroundCSS": () => (/* binding */ getBackgroundCSS),
/* harmony export */   "getBorderCSS": () => (/* binding */ getBorderCSS),
/* harmony export */   "getColorsCSS": () => (/* binding */ getColorsCSS),
/* harmony export */   "getIconCSS": () => (/* binding */ getIconCSS),
/* harmony export */   "getMultiShadowCSS": () => (/* binding */ getMultiShadowCSS),
/* harmony export */   "getSeparatorCSS": () => (/* binding */ getSeparatorCSS),
/* harmony export */   "getShadowCSS": () => (/* binding */ getShadowCSS),
/* harmony export */   "getSpaceCSS": () => (/* binding */ getSpaceCSS),
/* harmony export */   "getTypoCSS": () => (/* binding */ getTypoCSS)
/* harmony export */ });
const getBackgroundCSS = function (bg) {
  let isSolid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let isGradient = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let isImage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  const {
    type = 'solid',
    color = '#000000b3',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)',
    image = {},
    position = 'center center',
    attachment = 'initial',
    repeat = 'no-repeat',
    size = 'cover',
    overlayColor = '#000000b3'
  } = bg;
  const styles = 'gradient' === type && isGradient ? `background: ${gradient};` : 'image' === type && isImage ? `background: url(${image?.url});
				background-color: ${overlayColor};
				background-position: ${position};
				background-size: ${size};
				background-repeat: ${repeat};
				background-attachment: ${attachment};
				background-blend-mode: overlay;` : isSolid && `background: ${color};`;
  return styles;
}; // PHP version in Stepped Content

const getBorderCSS = border => {
  const {
    width = '0px',
    style = 'solid',
    color = '#0000',
    side = 'all',
    radius = '0px'
  } = border;
  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  };
  const noWidth = width === '0px' || !width;
  const borderCSS = `${width} ${style} ${color}`;
  const styles = `
		${noWidth ? '' : borderSideCheck('top') ? `border-top: ${borderCSS};` : ''}
		${noWidth ? '' : borderSideCheck('right') ? `border-right: ${borderCSS};` : ''}
		${noWidth ? '' : borderSideCheck('bottom') ? `border-bottom: ${borderCSS};` : ''}
		${noWidth ? '' : borderSideCheck('left') ? `border-left: ${borderCSS};` : ''}
		${!radius ? '' : `border-radius: ${radius};`}
	`;
  return styles;
};
const getColorsCSS = colors => {
  const {
    color = '#333',
    bgType = 'solid',
    bg = '#0000',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = colors;
  const styles = `
		${color ? `color: ${color};` : ''}
		${gradient || bg ? `background: ${'gradient' === bgType ? gradient : bg};` : ''}
	`;
  return styles;
};
const getIconCSS = function (icon) {
  let isSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let isColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const {
    fontSize = 16,
    colorType = 'solid',
    color = 'inherit',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = icon;
  const colorCSS = 'gradient' === colorType ? `color: transparent; background-image: ${gradient}; -webkit-background-clip: text; background-clip: text;` : `color: ${color};`;
  const styles = `
		${!fontSize || !isSize ? '' : `font-size: ${fontSize}px;`}
		${isColor ? colorCSS : ''}
	`;
  return styles;
};
const getMultiShadowCSS = function (value) {
  let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'box';
  let styles = '';
  value?.map((item, index) => {
    const {
      hOffset = '0px',
      vOffset = '0px',
      blur = '0px',
      spreed = '0px',
      color = '#7090b0',
      isInset = false
    } = item;
    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset || ''} ${vOffset || ''} ${blur || ''}`;
    const isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? `${offsetBlur} ${color || ''}${isComa}` : `${offsetBlur} ${spreed || ''} ${color || ''} ${inset}${isComa}`;
  });
  return styles || 'none';
};
const getSeparatorCSS = separator => {
  const {
    width = '50%',
    height = '2px',
    style = 'solid',
    color = '#bbb'
  } = separator;
  const styles = `
		width: ${width};
		${'0px' === height && '0em' === height && '0rem' === height ? '' : `border-top: ${height} ${style} ${color};`}
	`;
  return styles;
};
const getShadowCSS = shadow => {
  const {
    type = 'box',
    hOffset = '0px',
    vOffset = '0px',
    blur = '0px',
    spreed = '0px',
    color = '#7090b0',
    isInset = false
  } = shadow;
  const inset = isInset ? 'inset' : '';
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
  const styles = 'text' === type ? `${offsetBlur} ${color}` : `${offsetBlur} ${spreed} ${color} ${inset}`;
  return styles || 'none';
};
const getSpaceCSS = space => {
  const {
    side = 2,
    vertical = '0px',
    horizontal = '0px',
    top = '0px',
    right = '0px',
    bottom = '0px',
    left = '0px'
  } = space;
  const styles = 2 === side ? `${vertical} ${horizontal}` : `${top} ${right} ${bottom} ${left}`;
  return styles;
};
const getTypoCSS = function (typo) {
  let isFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const {
    fontFamily = 'Default',
    fontCategory = 'sans-serif',
    fontVariant = 400,
    fontWeight = 400,
    isUploadFont = true,
    fontSize = 15,
    fontStyle = 'normal',
    textTransform = 'none',
    textDecoration = 'auto',
    lineHeight = '135%',
    letterSpace = '0px'
  } = typo;
  const generateCss = (value, cssProperty) => !value ? '' : `${cssProperty}: ${value};`;
  const isEmptyFamily = !isFamily || !fontFamily || 'Default' === fontFamily;
  const styles = `
		${isEmptyFamily ? '' : `font-family: '${fontFamily}', ${fontCategory};`}
		${generateCss(fontWeight, 'font-weight')}
		${!fontSize ? '' : `font-size: ${fontSize}px;`}
		${generateCss(fontStyle, 'font-style')}
		${generateCss(textTransform, 'text-transform')}
		${generateCss(textDecoration, 'text-decoration')}
		${generateCss(lineHeight, 'line-height')}
		${generateCss(letterSpace, 'letter-spacing')}
	`;

  // Google font link
  const linkQuery = !fontVariant || 400 === fontVariant ? '' : '400i' === fontVariant ? ':ital@1' : fontVariant?.includes('00i') ? `: ital, wght@1, ${fontVariant?.replace('00i', '00')} ` : `: wght@${fontVariant} `;
  const link = isEmptyFamily ? '' : `https://fonts.googleapis.com/css2?family=${fontFamily?.split(' ').join('+')}${linkQuery.replace(/ /g, '')}&display=swap`;
  return {
    styles: styles.replace(/\s+/g, ' ').trim(),
    googleFontLink: !isUploadFont || isEmptyFamily ? '' : `@import url(${link});`
  };
};

/***/ }),

/***/ "../Components/Helper/options.js":
/*!***************************************!*\
  !*** ../Components/Helper/options.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bgTypes": () => (/* binding */ bgTypes),
/* harmony export */   "borderStyles": () => (/* binding */ borderStyles),
/* harmony export */   "emUnit": () => (/* binding */ emUnit),
/* harmony export */   "fontStyles": () => (/* binding */ fontStyles),
/* harmony export */   "gradients": () => (/* binding */ gradients),
/* harmony export */   "perUnit": () => (/* binding */ perUnit),
/* harmony export */   "pxUnit": () => (/* binding */ pxUnit),
/* harmony export */   "remUnit": () => (/* binding */ remUnit),
/* harmony export */   "sides": () => (/* binding */ sides),
/* harmony export */   "textDecorations": () => (/* binding */ textDecorations),
/* harmony export */   "textTransforms": () => (/* binding */ textTransforms),
/* harmony export */   "vhUnit": () => (/* binding */ vhUnit),
/* harmony export */   "vwUnit": () => (/* binding */ vwUnit)
/* harmony export */ });
const borderStyles = [{
  label: 'Solid',
  value: 'solid'
}, {
  label: 'Dashed',
  value: 'dashed'
}, {
  label: 'Dotted',
  value: 'dotted'
}, {
  label: 'Double',
  value: 'double'
}, {
  label: 'Groove',
  value: 'groove'
}, {
  label: 'Inset',
  value: 'inset'
}, {
  label: 'Outset',
  value: 'outset'
}, {
  label: 'Ridge',
  value: 'ridge'
}];
const fontStyles = [{
  label: 'Normal',
  value: 'normal'
}, {
  label: 'Italic',
  value: 'italic'
}, {
  label: 'Oblique',
  value: 'oblique'
}];
const textTransforms = [{
  label: 'None',
  value: 'none',
  icon: 'NO'
}, {
  label: 'Capitalize',
  value: 'capitalize',
  icon: 'Aa'
}, {
  label: 'Uppercase',
  value: 'uppercase',
  icon: 'AA'
}, {
  label: 'Lowercase',
  value: 'lowercase',
  icon: 'aa'
}];
const textDecorations = [{
  label: 'Default',
  value: 'auto'
}, {
  label: 'Underline',
  value: 'underline'
}, {
  label: 'Overline',
  value: 'overline'
}, {
  label: 'Line Through',
  value: 'line-through'
}, {
  label: 'None',
  value: 'none'
}];
const pxUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'px',
    label: 'px',
    default: def
  };
};
const perUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: '%',
    label: '%',
    default: def
  };
};
const emUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'em',
    label: 'em',
    default: def
  };
};
const remUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'rem',
    label: 'rem',
    default: def
  };
};
const vwUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'vw',
    label: 'vw',
    default: def
  };
};
const vhUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'vh',
    label: 'vh',
    default: def
  };
};
const sides = [{
  value: 'all',
  label: 'All Sides'
}, {
  value: 'top',
  label: 'Top'
}, {
  value: 'right',
  label: 'Right'
}, {
  value: 'bottom',
  label: 'Bottom'
}, {
  value: 'left',
  label: 'Left'
}, {
  value: 'topRight',
  label: 'Top Right'
}, {
  value: 'topBottom',
  label: 'Top Bottom'
}, {
  value: 'topLeft',
  label: 'Top Left'
}, {
  value: 'topRightBottom',
  label: 'Top Right Bottom'
}, {
  value: 'topRightLeft',
  label: 'Top Right Left'
}, {
  value: 'topBottomLeft',
  label: 'Top Bottom Left'
}, {
  value: 'rightBottom',
  label: 'Right Bottom'
}, {
  value: 'rightLeft',
  label: 'Right Left'
}, {
  value: 'rightBottomLeft',
  label: 'Right Bottom Left'
}, {
  value: 'bottomLeft',
  label: 'Bottom Left'
}];
const gradients = [{
  name: 'Daisy Bush to Fuchsia Blue',
  gradient: 'linear-gradient(135deg, #4527a4, #8344c5)',
  slug: 'daisy-bush-to-fuchsia-blue'
}, {
  name: 'Reddish Orange to Yellowish Orange',
  gradient: 'linear-gradient(135deg, #fe6601, #fbb040)',
  slug: 'reddish-orange-to-yellowish-orange'
}, {
  name: 'Tuft Bush to Carnation Pink',
  gradient: 'linear-gradient(135deg, #fed1c7, #fe8dc6)',
  slug: 'tuft-bush-to-carnation-pink'
}, {
  name: 'Golden Fizz to Yellow Orange',
  gradient: 'linear-gradient(135deg, #f9ed32, #fbb040)',
  slug: 'golden-fizz-to-yellow-orange'
}, {
  name: 'Light Electric Violet to Electric Violet',
  gradient: 'linear-gradient(135deg, #e100ff, #7f00ff)',
  slug: 'light-electric-violet-to-electric-violet'
}, {
  name: 'Hot Pink to Violet Red',
  gradient: 'linear-gradient(135deg, #ff7db8, #ee2a7b)',
  slug: 'hot-pink-to-violet-red'
}, {
  name: 'Spring Green to Azure Radiance',
  gradient: 'linear-gradient(135deg, #00ff8f, #00a1ff)',
  slug: 'spring-green-to-azure-radiance'
}];
const bgTypes = [{
  label: 'Solid',
  value: 'solid'
}, {
  label: 'Gradient',
  value: 'gradient'
}];

/***/ }),

/***/ "../Components/Helper/style.js":
/*!*************************************!*\
  !*** ../Components/Helper/style.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../Components/Helper/style.scss");


/***/ }),

/***/ "../Components/ImageControl.js":
/*!*************************************!*\
  !*** ../Components/ImageControl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeImageData": () => (/* binding */ ChangeImageData),
/* harmony export */   "ImageEditControl": () => (/* binding */ ImageEditControl),
/* harmony export */   "ImageHolderControl": () => (/* binding */ ImageHolderControl),
/* harmony export */   "ImagePlaceholder": () => (/* binding */ ImagePlaceholder)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ImageControl_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageControl.scss */ "../Components/ImageControl.scss");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Title */ "../Components/Title.js");
/* harmony import */ var _Helper_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Helper/functions */ "../Components/Helper/functions.js");










// Media Holder Control
const ImageHolderControl = props => {
  const {
    className,
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image:', 'bplugins'),
    value = {},
    onChange
  } = props;
  const onImageSelect = _ref => {
    let {
      id,
      url,
      alt,
      title
    } = _ref;
    return onChange({
      ...value,
      id,
      url,
      alt,
      title
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mb5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editImageHolder"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mediaControl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: ['image'],
    value: value?.id,
    onSelect: onImageSelect,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return !value.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "btnControl"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "upload",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload', 'bplugins'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "btnControl"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "controls-repeat",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "exit",
        onClick: () => onChange({}),
        className: "btnRed"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove', 'bplugins')));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: value?.url,
    alt: value?.alt || value?.title
  })));
};

// Image Data
const ChangeImageData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)((select, props) => {
  const {
    value
  } = props;
  return {
    image: value?.id ? select('core').getMedia(value?.id) : null,
    imageSizes: select('core/block-editor').getSettings().imageSizes
  };
})(props => {
  const {
    className,
    value = {},
    onChange,
    image,
    imageSizes
  } = props;
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, value?.url && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(value?.url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alt Text (Alternative Text):', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: value?.alt,
    onChange: val => setValue('alt', val)
  })), value?.id && 0 !== (0,_Helper_functions__WEBPACK_IMPORTED_MODULE_8__.getImageSizes)(image, imageSizes)?.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: value?.url,
    onChange: val => setValue('url', val),
    options: (0,_Helper_functions__WEBPACK_IMPORTED_MODULE_8__.getImageSizes)(image, imageSizes)
  })));
});

// Media Edit Control
const ImageEditControl = props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Image:', 'bplugins'),
    value = {},
    onChange
  } = props;
  const onImageSelect = _ref3 => {
    let {
      id,
      url,
      alt,
      title
    } = _ref3;
    return onChange({
      ...value,
      id,
      url,
      alt,
      title
    });
  };
  return value?.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, {
    className: "bPlToolbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: ['image'],
    value: value?.id,
    onSelect: onImageSelect,
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
        label: label,
        icon: "format-image",
        onClick: open
      });
    }
  })));
};

// Image Placeholder
const ImagePlaceholder = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withNotices)(props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' Image:', 'bplugins'),
    icon = 'format-image',
    value = {},
    onChange,
    noticeOperations,
    noticeUI
  } = props;
  const onImageSelect = _ref5 => {
    let {
      id,
      url,
      alt,
      title
    } = _ref5;
    return onChange({
      ...value,
      id,
      url,
      alt,
      title
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaPlaceholder, {
    labels: {
      title: label
    },
    icon: icon,
    allowedTypes: ['image'],
    accept: "image/*",
    onSelect: onImageSelect,
    onSelectURL: val => onChange({
      ...value,
      id: null,
      url: val,
      alt: '',
      title: ''
    }),
    onError: val => noticeOperations.createErrorNotice(val),
    notices: noticeUI
  });
});

/***/ }),

/***/ "../Components/MediaControl.js":
/*!*************************************!*\
  !*** ../Components/MediaControl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BplMediaPlaceholder": () => (/* binding */ BplMediaPlaceholder),
/* harmony export */   "InlineDetailMediaUpload": () => (/* binding */ InlineDetailMediaUpload),
/* harmony export */   "InlineMediaUpload": () => (/* binding */ InlineMediaUpload),
/* harmony export */   "MediaEditControl": () => (/* binding */ MediaEditControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MediaControl_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaControl.scss */ "../Components/MediaControl.scss");






const InlineMediaUpload = props => {
  const {
    className,
    value,
    types = ['image'],
    onChange,
    placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter URL', 'bplugins')
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: `${className} bplInlineMediaUpload`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: value,
    onChange: val => onChange(val),
    placeholder: placeholder
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: types,
    onSelect: val => onChange(val.url),
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "button button-primary",
        onClick: open,
        icon: 'upload'
      });
    }
  })));
};

// Inline Detail Media Upload
const InlineDetailMediaUpload = props => {
  const {
    className,
    value = {},
    types = ['image'],
    onChange,
    placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter URL', 'bplugins')
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: `${className} bplInlineMediaUpload`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: value?.url,
    onChange: url => onChange({
      id: null,
      url,
      alt: '',
      title: ''
    }),
    placeholder: placeholder
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: types,
    onSelect: _ref2 => {
      let {
        id,
        url,
        alt,
        title
      } = _ref2;
      return onChange({
        id,
        url,
        alt,
        title
      });
    },
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "button button-primary",
        onClick: open,
        icon: 'upload'
      });
    }
  })));
};

// Media Placeholder
const BplMediaPlaceholder = props => {
  const {
    onChange,
    icon = 'format-image',
    type = 'image',
    typeName = '',
    placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paste or type a video URL', 'bplugins')
  } = props;
  const [mediaSource, setMediaSource] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
    className: "bplMediaPlaceholder",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Upload ${typeName || type}`, 'bplugins'),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Upload a ${typeName || type} or paste/write ${typeName || type} url to get started.`, 'bplugins'),
    icon: icon
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: [type],
    onSelect: val => onChange(val),
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        isPrimary: true,
        onClick: open
      }, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload', 'bplugins'), " ");
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: "bplUrlInput"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Or', 'bplugins'), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "url",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('URL', 'bplugins'),
    placeholder: placeholder,
    onChange: src => setMediaSource(src.target.value),
    value: mediaSource
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Apply', 'bplugins'),
    type: "submit",
    onClick: e => {
      e.preventDefault();
      onChange({
        id: null,
        url: mediaSource,
        alt: '',
        title: ''
      });
      setMediaSource('');
    },
    isPrimary: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Apply', 'bplugins'))));
};

// Media Edit Control
const MediaEditControl = props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Image:', 'bplugins'),
    icon = 'format-image',
    types = ['image'],
    value = {},
    onChange
  } = props;
  const onFileSelect = _ref5 => {
    let {
      id,
      url,
      alt,
      title
    } = _ref5;
    return onChange({
      id,
      url,
      alt,
      title
    });
  };
  return value?.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
    className: "bPlToolbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: types,
    value: value?.id,
    onSelect: onFileSelect,
    render: _ref6 => {
      let {
        open
      } = _ref6;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
        label: label,
        icon: icon,
        onClick: open
      });
    }
  })));
};

/***/ }),

/***/ "../Components/Title.js":
/*!******************************!*\
  !*** ../Components/Title.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helper_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helper/style */ "../Components/Helper/style.js");


const Title = props => {
  const {
    className = 'mt20 mb5',
    children
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `bPlLabel ${className}`
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./src/Settings.js":
/*!*************************!*\
  !*** ./src/Settings.js ***!
  \*************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\src\\Settings.js: Identifier 'RangeControl' has already been declared. (18:4)\n\n\u001b[0m \u001b[90m 16 |\u001b[39m     \u001b[33mSelectControl\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m     \u001b[33mToggleControl\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 18 |\u001b[39m     \u001b[33mRangeControl\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 |\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m\"@wordpress/components\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[32m\"./editor.scss\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:3261:19)\n    at ScopeHandler.checkRedeclarationInScope (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:1557:19)\n    at ScopeHandler.declareName (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:1528:12)\n    at JSXParserMixin.declareNameFromIdentifier (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:7535:16)\n    at JSXParserMixin.checkIdentifier (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:7531:12)\n    at JSXParserMixin.checkLVal (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:7470:12)\n    at JSXParserMixin.finishImportSpecifier (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:14073:10)\n    at JSXParserMixin.parseImportSpecifier (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:14221:17)\n    at JSXParserMixin.parseNamedImportSpecifiers (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:14199:36)\n    at JSXParserMixin.parseImport (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:14043:39)\n    at JSXParserMixin.parseStatementContent (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:12651:27)\n    at JSXParserMixin.parseStatementLike (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:12544:17)\n    at JSXParserMixin.parseModuleItem (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:12521:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:13116:36)\n    at JSXParserMixin.parseBlockBody (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:13109:10)\n    at JSXParserMixin.parseProgram (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:12435:10)\n    at JSXParserMixin.parseTopLevel (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:12425:25)\n    at JSXParserMixin.parse (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:14245:10)\n    at parse (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\parser\\lib\\index.js:14286:38)\n    at parser (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\core\\lib\\parser\\index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\core\\lib\\transformation\\index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\core\\lib\\transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\gensync\\index.js:261:32)\n    at D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\gensync\\index.js:223:11)\n    at D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\gensync\\index.js:189:28\n    at D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\@babel\\core\\lib\\gensync-utils\\async.js:68:7\n    at D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\gensync\\index.js:113:33\n    at step (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\gensync\\index.js:287:14)\n    at D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (D:\\Ampps\\www\\wordpress\\wp-content\\plugins\\b-portfolio-block\\node_modules\\gensync\\index.js:223:11)");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


// import { registerBlockType } from '@wordpress/blocks';

const Modal = _ref => {
  let {
    project = {},
    currentIndex,
    updateProject,
    setModalOpen
  } = _ref;
  const {
    title,
    catrgory,
    skils,
    images,
    desc,
    clientRating,
    clientReview,
    projectURL
  } = project;
  const modalRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (modalRef.current) {
      var slides = jQuery(modalRef.current).find(".slider").children();
      var thumbs = jQuery(modalRef.current).find(".thumbs").children();
      var currentSlide = 0;

      // Show the first slide and thumbnail
      slides.eq(currentSlide).addClass("active");
      thumbs.eq(currentSlide).addClass("active");

      // Change slide on thumbnail click
      thumbs.click(function () {
        // Remove active class from current slide and thumbnail
        slides.eq(currentSlide).removeClass("active");
        thumbs.eq(currentSlide).removeClass("active");

        // Set current slide to clicked thumbnail index
        currentSlide = jQuery(this).index();

        // Add active class to new slide and thumbnail
        slides.eq(currentSlide).addClass("active");
        thumbs.eq(currentSlide).addClass("active");
      });
    }
  }, []);
  const renderClientRating = rating => {
    // for(let i = 0; i < 5; i++){
    // 	return 
    // }

    return [...Array(5)].map((item, index) => {
      // console.log(typeof rating, rating)
      if (index < parseInt(rating)) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: "star star-full",
          "aria-hidden": "true"
        });
      } else if (rating % 1 > 0) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: "star star-half",
          "aria-hidden": "true"
        });
      } else {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: "star star-empty",
          "aria-hidden": "true"
        });
      }
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: modalRef,
    id: "portfolio-modal",
    className: "modal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "close",
    onClick: () => setModalOpen(false)
  }, "\xD7")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h1",
    className: "heading",
    value: title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-img slider-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slider"
  }, images?.map((image, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "model-img2 slide active",
    src: image,
    alt: "Main"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "list-images thumbs"
  }, images.map((image, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: image,
    alt: "",
    className: "thumb active"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "red"
  }, "Project Details"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Project Name:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "heading",
    value: title,
    onChange: content => updateProject(currentIndex, "title", content),
    inlineToolbar: true,
    allowedFormats: ["core/bold", "core/italic"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Project Category:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: catrgory,
    onChange: content => updateProject(currentIndex, "catrgory", content),
    inlineToolbar: true,
    allowedFormats: ["core/bold", "core/italic"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Skill:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "skils",
    value: skils,
    onChange: content => updateProject(currentIndex, "skils", content),
    inlineToolbar: true,
    allowedFormats: ["core/bold", "core/italic"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Project URL:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "red",
    value: projectURL,
    onChange: content => updateProject(currentIndex, "projectURL", content),
    inlineToolbar: true,
    allowedFormats: ["core/bold", "core/italic"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Client Reviewz:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: clientReview,
    onChange: content => updateProject(currentIndex, "clientReview", content)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Client Rating:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "star-rating"
  }, "\xA0   ", clientRating, " \xA0", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "screen-reader-text"
  }, clientRating, " rating"), renderClientRating(clientRating))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Description :"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "desc",
    value: desc,
    onChange: content => updateProject(currentIndex, "desc", content),
    inlineToolbar: true,
    allowedFormats: ["core/bold", "core/italic"]
  })), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Helper/getCSS */ "../Components/Helper/getCSS.js");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/function */ "./src/utils/function.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Settings */ "./src/Settings.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Settings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Modal */ "./src/components/Modal.js");
/* harmony import */ var _Components_ImageControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Components/ImageControl */ "../Components/ImageControl.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_Background__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/Background */ "../Components/Background.js");













function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId,
    ...rest
  } = _ref;
  function truncateString(str, limit) {
    if (str.length > limit) {
      return str.slice(0, limit) + "...";
    } else {
      return str;
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    clientId && setAttributes({
      clientId: clientId
    });
  }, [clientId]);
  const {
    contentPadding,
    background,
    cardRadius,
    titleColor,
    descColor,
    projects,
    gridBackground,
    isImg,
    imgPos,
    btnLabel,
    btnPadding,
    btnColors,
    btnHover,
    btnRadius,
    columnGap,
    columns,
    rowGap,
    titleTypo,
    descTypo,
    btnTypo
  } = attributes;
  const [currentIndex, setCurrentIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [modalOpen, setModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  function updateProject(index, property, value) {
    const newProjects = [...projects];
    newProjects[index][property] = value;
    setAttributes({
      projects: newProjects
    });
  }

  // console.log(titleColor);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
		    	${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(titleTypo)?.googleFontLink}
                ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(descTypo)?.googleFontLink}
                ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(btnTypo)?.googleFontLink}

				.bppb-portfolio-items{
					padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(contentPadding)};
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(gridBackground)}
					border-radius: ${cardRadius}
					column-gap: ${columnGap};
					row-gap:${rowGap};
				}

				.bppb-portfolio-item .content h2{
					 	${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(titleColor)};
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(titleTypo)?.styles}	
				}

				.bppb-portfolio-item .content .desc{
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(descColor)};
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(descTypo)?.styles}
					}

				.bppb-portfolio-item .content .portfolio-view-details-btn {
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(btnColors)};
					border-radius: ${btnRadius};
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(btnTypo)?.styles};
					padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(btnPadding)}
				}

				.bppb-portfolio-item .content .portfolio-view-details-btn:hover {
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(btnHover)};
				}
					
           `), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_Settings__WEBPACK_IMPORTED_MODULE_6___default()), {
    modalOpen: modalOpen,
    attributes: attributes,
    setAttributes: setAttributes,
    updateProject: updateProject,
    currentIndex: currentIndex
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `bppb-portfolio-wrapper bppb-portfolio-items columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`
  }, projects.map((project, index) => {
    const {
      title,
      desc,
      img,
      background
    } = project;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `bppb-portfolio-item project-${index}`,
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
						       .project-${index}{
								   background-image: url(${img});
							   }

							`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "h2",
      value: title,
      onChange: content => updateProject(index, "title", content),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Enter Title", 'b-Project')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      id: "myTextarea",
      tagName: "div",
      className: "desc",
      value: truncateString(desc, 30),
      onChange: content => updateProject(index, "desc", content),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Enter description", 'b-Project')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "portfolio-view-details-btn",
      onClick: () => {
        setCurrentIndex(index);
        setModalOpen(true);
      }
    }, btnLabel, " ")));
  })), modalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    setAttributes: setAttributes,
    updateProject: updateProject,
    currentIndex: currentIndex,
    project: projects[currentIndex] || {},
    setModalOpen: setModalOpen
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), 'B Portfolio Block – hello from the saved content!');
}

/***/ }),

/***/ "./src/utils/function.js":
/*!*******************************!*\
  !*** ./src/utils/function.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBoxValue": () => (/* binding */ getBoxValue)
/* harmony export */ });
const getBoxValue = object => Object.values(object).join(" ");

/***/ }),

/***/ "../Components/BColor.scss":
/*!*********************************!*\
  !*** ../Components/BColor.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/Helper/style.scss":
/*!***************************************!*\
  !*** ../Components/Helper/style.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/ImageControl.scss":
/*!***************************************!*\
  !*** ../Components/ImageControl.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/MediaControl.scss":
/*!***************************************!*\
  !*** ../Components/MediaControl.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/b-portfolio-block","attributes":{"projects":{"type":"array","default":[{"background":{"color":"#ffff"},"img":"https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large","cardRadius":"2px","catrgory":"Android","skils":"Android","projectURL":"https:example.com","clientReview":"Some content will go here","clientRating":"4.5","title":"This is my title","desc":"This is my description","btnUrl":"https://www.google.com/","images":["https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large","https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]},{"background":{"color":"#ffff"},"img":"https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large","cardRadius":"2px","catrgory":"Android","skils":"Android","projectURL":"https:example.com","clientReview":"Some content will go here","clientRating":"5","image":"https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large","title":"This is my title","desc":"This is my description","btnUrl":"https://www.google.com/","images":["https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large","https://mobimg.b-cdn.net/v3/fetch/97/972d3a28a4f23240915d1c48776ce013.jpeg"]}]},"isImg":{"type":"boolean","default":true},"imgPos":{"type":"string","default":"first"},"background":{"type":"object","default":{"color":"#fff"}},"titleColor":{"type":"object","default":{"color":"#fff"}},"descColor":{"type":"object","default":{"color":"#fff"}},"columns":{"type":"object","default":{"desktop":3,"tablet":2,"mobile":1}},"columnGap":{"type":"string","default":"20px"},"gridBackground":{"type":"object","default":{"color":"rgba(250, 249, 249, 1)"}},"rowGap":{"type":"string","default":"30px"},"theme":{"type":"string","default":"themeOne"},"contentPadding":{"type":"object","default":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}},"border":{"type":"object","default":{"color":"#72aee6","style":"solid","width":"0px"}},"shadows":{"type":"array","default":[]},"titleTypo":{"type":"object","default":{"fontSize":"20px"}},"descTypo":{"type":"object","default":{"fontSize":"12px"}},"btnTypo":{"type":"object","default":{"fontSize":"15"}},"btnRadius":{"type":"string","default":"5px"},"btnLabel":{"type":"string","default":"Button"},"btnColors":{"type":"object","default":{"color":"#fff","bg":"#000"}},"btnHover":{"type":"object","default":{"color":"#000","bg":"#fff"}},"btnPadding":{"type":"object","default":{"top":"10px","right":"25px","bottom":"10px","left":"25px"}}},"example":{"attributes":{"preview":true,"columns":{"desktop":1,"tablet":1,"mobile":1}}},"version":"0.1.0","title":"B Portfolio Block","category":"widgets","icon":"smiley","description":"B Portfolio Block plugin helps users display their work in a visually appealing way with customizable layouts and filtering options.","supports":{"html":false},"textdomain":"b-portfolio-block","editorScript":["file:./index.js","jquery"],"editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkb_portfolio_block"] = globalThis["webpackChunkb_portfolio_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map