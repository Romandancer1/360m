/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chooseCity = __webpack_require__(1);
var liQuotes = __webpack_require__(3);
var hoverCityLink = __webpack_require__(4);

var cityList = $('#city-list');
var pageContent = $('.content');
var cityMap = $('.intro__map');

if (cityList.length > 0) {
  cityList.on('click', chooseCity);
};

if (pageContent.length > 0) {
  pageContent.liQuotes();
};

if (cityMap.length > 0) {
  cityMap.on('mouseover', hoverCityLink);
};

if (cityMap.length > 0) {
  cityMap.on('mouseout', hoverCityLink);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getCity = __webpack_require__(2);

module.exports = function setCityLink(event) {
    var city = getCity(event);
    $("#button__city").text(city.text);
    $("#city__name").text(city.text);
    $("#city__link").attr('href', city.link);
    $(this).attr("data-dismiss", "modal");
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getCity(event) {
  event.preventDefault();
  var target = $(event.target);
  var result = null;

  if (target.get(0).nodeName === 'A') {
    result = {
      link: target.attr('href'),
      text: target.html()
    };
  }
  return result;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = jQuery.fn.liQuotes = function (options) {
	return this.each(function () {
		htmlreplace($(this));
		function htmlreplace(element) {
			if (!element) element = document.body;
			var nodes = $(element).contents().each(function () {
				if (this.nodeType == Node.TEXT_NODE) {
					var result = $(this).text().replace(/\x27/g, '\x22').replace(/(\w)\x22(\w)/g, '$1\x27$2').replace(/(^)\x22(\s)/g, '$1&raquo;$2').replace(/(^|\s|\()"/g, "$1&laquo;").replace(/"(\;|\!|\?|\:|\.|\,|$|\)|\s)/g, "&raquo;$1");
					$(this).after(result).remove();
				} else {
					htmlreplace(this);
				};
			});
		};
	});
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function hoverCityLink(event) {
  event.preventDefault();
  var target = $(event.target);
  var cityList = $('.city-choose__table');

  if (target.get(0).nodeName === 'A') {
    var pointHref = target.data('city');
    cityList.find($('[data-city="' + pointHref + '"]')).toggleClass("city-choose--focused");
  }
};

/***/ })
/******/ ]);