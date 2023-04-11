/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Components/Helper/getCSS.js":
/*!**************************************!*\
  !*** ../Components/Helper/getCSS.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/components/ModalFrontend.js":
/*!*****************************************!*\
  !*** ./src/components/ModalFrontend.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Components/Helper/getCSS */ "../Components/Helper/getCSS.js");


// import { registerBlockType } from '@wordpress/blocks';




const ModalFrontend = _ref => {
  let {
    attributes,
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
  const {
    clientId,
    modalContentTypo,
    modalLableTypo,
    modalContentColor,
    modalLabelColor,
    modalTitleTypo,
    modalTitleColor,
    modalHeadingTypo,
    modalHeadingColor
  } = attributes;

  // console.log(modalTitleColor);

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (modalRef.current) {
      var slides = jQuery(modalRef.current).find(".slider").children();
      var thumbs = jQuery(modalRef.current).find(".thumbs").children(':not(.modal-img-upload)');
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
  }, [images]);
  const renderClientRating = rating => {
    return [...Array(5)].map((item, index) => {
      console.log(typeof rating, rating);
      if (index < parseInt(rating)) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          class: "dashicons dashicons-star-filled star"
        });
      } else if (index < rating && rating % 1 > 0) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: "dashicons dashicons-star-half star",
          "aria-hidden": "true"
        });
      } else {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: "dashicons dashicons-star-empty star",
          "aria-hidden": "true"
        });
      }
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    modalRef.current?.addEventListener('click', function (e) {
      if (e.target.classList.contains('modal')) {
        setModalOpen(false);
      }
    });
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
			    .modal-${clientId} .modalTitleTypo{
						${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_3__.getTypoCSS)(modalTitleTypo)?.styles};
						color:${modalTitleColor}
				}

				.modal-${clientId} .modalHeadingTypo{
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_3__.getTypoCSS)(modalHeadingTypo)?.styles};
				color:${modalHeadingColor}
				} 		


				.modal-${clientId} .modalContentTypo {
						${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_3__.getTypoCSS)(modalContentTypo)?.styles};
						color:${modalContentColor}
				}
				.modal-${clientId} .modalLableTypo {
						${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_3__.getTypoCSS)(modalLableTypo)?.styles};
						color: ${modalLabelColor}
				}

           `), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: modalRef,
    id: "portfolio-modal",
    className: `modal-${clientId} modal`
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
    className: "heading modalTitleTypo",
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
    className: `model-img2 slide  ${index == 0 ? " active" : " "}`,
    src: image,
    alt: "Main"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "list-images thumbs"
  }, images.map((image, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: image,
      alt: "",
      className: `thumb ${index == 0 ? "active" : " "}`
    });
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: val => {
      const newImages = [...images];
      newImages.push(val.url);
      updateProject(currentIndex, 'images', newImages);
    },
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button button-primary modal-img-upload",
        onClick: open,
        icon: 'plus'
      });
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "red modalHeadingTypo"
  }, "Project Details"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "modalLableTypo"
  }, "Project Name:"), title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "title",
    className: "heading modalContentTypo",
    id: "myTextarea",
    dangerouslySetInnerHTML: {
      __html: title
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "modalLableTypo"
  }, "Project Category:"), catrgory && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "catrgory",
    className: "modalContentTypo",
    id: "myTextarea",
    dangerouslySetInnerHTML: {
      __html: catrgory
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "modalLableTypo"
  }, "Skill:"), skils && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "skils",
    className: "skils modalContentTypo",
    id: "myTextarea",
    dangerouslySetInnerHTML: {
      __html: skils
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "modalLableTypo"
  }, "Project URL:"), projectURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "projectURL",
    className: "heading modalContentTypo",
    id: "myTextarea",
    dangerouslySetInnerHTML: {
      __html: projectURL
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "modalLableTypo"
  }, "Client Reviewz:"), clientReview && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "clientReview",
    className: "modalContentTypo",
    id: "myTextarea",
    dangerouslySetInnerHTML: {
      __html: clientReview
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "side-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "modalLableTypo"
  }, "Client Rating:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "star-rating"
  }, "\xA0", clientRating, "\xA0", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "screen-reader-text"
  }, clientRating, "rating")), renderClientRating(clientRating)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "modalLableTypo"
  }, "Description :"), title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "desc",
    className: "modalContentTypo desc",
    id: "myTextarea",
    dangerouslySetInnerHTML: {
      __html: desc
    }
  })), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalFrontend);

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectRenderer": () => (/* binding */ ProjectRenderer)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_truncateString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/truncateString */ "./src/utils/truncateString.js");
/* harmony import */ var _Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Helper/getCSS */ "../Components/Helper/getCSS.js");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/function */ "./src/utils/function.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_ModalFrontend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ModalFrontend */ "./src/components/ModalFrontend.js");











window.addEventListener('DOMContentLoaded', () => {
  const allPortfolios = document.querySelectorAll('.bppb-projects-items');
  allPortfolios.forEach(itemEl => {
    const attributes = JSON.parse(itemEl.dataset.attributes);
    react_dom__WEBPACK_IMPORTED_MODULE_1___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectRenderer, {
      attributes: attributes
    }), itemEl);
  });
});
const ProjectRenderer = _ref => {
  let {
    attributes,
    setAttributes,
    clientId,
    ...rest
  } = _ref;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
		    	${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_4__.getTypoCSS)(titleTypo)?.googleFontLink}
                ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_4__.getTypoCSS)(descTypo)?.googleFontLink}
                ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_4__.getTypoCSS)(btnTypo)?.googleFontLink}

				.bppb-portfolio-items{
					padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_5__.getBoxValue)(contentPadding)};
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_4__.getBackgroundCSS)(gridBackground)};
					border-radius: ${cardRadius};
					column-gap: ${columnGap};
					row-gap:${rowGap};
				}

				.bppb-portfolio-item .content h2{
					 color:${titleColor};
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_4__.getTypoCSS)(titleTypo)?.styles}	
				}

				.bppb-portfolio-item .content .desc{
					color: ${descColor};
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_4__.getTypoCSS)(descTypo)?.styles}
					}

				.bppb-portfolio-item .content .portfolio-view-details-btn {
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_4__.getColorsCSS)(btnColors)};
					border-radius: ${btnRadius};
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_4__.getTypoCSS)(btnTypo)?.styles};
					padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_5__.getBoxValue)(btnPadding)}
				}

				.bppb-portfolio-item .content .portfolio-view-details-btn:hover {
					${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_4__.getColorsCSS)(btnHover)};
				}
					
           `), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
    }, title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      dangerouslySetInnerHTML: {
        __html: title
      }
    }), desc && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "desc",
      id: "myTextarea",
      dangerouslySetInnerHTML: {
        __html: (0,_utils_truncateString__WEBPACK_IMPORTED_MODULE_3__["default"])(desc, 20)
      }
    }), btnLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "portfolio-view-details-btn",
      onClick: () => {
        setCurrentIndex(index);
        setModalOpen(true);
      }
    }, btnLabel, " ")));
  })), modalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ModalFrontend__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    currentIndex: currentIndex,
    project: projects[currentIndex] || {},
    setModalOpen: setModalOpen
  }));
};

/***/ }),

/***/ "./src/utils/function.js":
/*!*******************************!*\
  !*** ./src/utils/function.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBoxValue": () => (/* binding */ getBoxValue)
/* harmony export */ });
const getBoxValue = object => Object.values(object).join(" ");

/***/ }),

/***/ "./src/utils/truncateString.js":
/*!*************************************!*\
  !*** ./src/utils/truncateString.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function truncateString(str, limit) {
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  } else {
    return str;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (truncateString);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ 			"script": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/script.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=script.js.map