require('source-map-support/register');
module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _freesewing_plugin_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @freesewing/plugin-theme */ "@freesewing/plugin-theme");
/* harmony import */ var _freesewing_plugin_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_freesewing_plugin_theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _freesewing_aaron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @freesewing/aaron */ "@freesewing/aaron");
/* harmony import */ var _freesewing_aaron__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_freesewing_aaron__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _freesewing_brian__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @freesewing/brian */ "@freesewing/brian");
/* harmony import */ var _freesewing_brian__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_freesewing_brian__WEBPACK_IMPORTED_MODULE_5__);


 // Create your own theme to style the SVG or use ours

 // Import your patterns here


 // ... and so on
// Helper object

const patterns = {
  aaron: (_freesewing_aaron__WEBPACK_IMPORTED_MODULE_4___default()),
  brian: (_freesewing_brian__WEBPACK_IMPORTED_MODULE_5___default()) // ... and so on

}; // Instantiate Express with JSON body support

const app = express__WEBPACK_IMPORTED_MODULE_0___default()().use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json({
  limit: '2mb'
})); // Dynamic pattern route

app.post('/:pattern', (req, res) => res.send(new patterns[req.params.pattern](req.body).use(_freesewing_plugin_theme__WEBPACK_IMPORTED_MODULE_3___default.a).draft().render()).end()); // Catch-all route

app.get('/', async (req, res) => res.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, 'landing', 'index.html'))); // Start app

const port = process.env.PORT || 3000;
app.listen(port, err => console.log(`Listening on port ${port}`));
/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/joost/git/freesewing/saas-backend/src/index.js */"./src/index.js");


/***/ }),

/***/ "@freesewing/aaron":
/*!************************************!*\
  !*** external "@freesewing/aaron" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@freesewing/aaron");

/***/ }),

/***/ "@freesewing/brian":
/*!************************************!*\
  !*** external "@freesewing/brian" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@freesewing/brian");

/***/ }),

/***/ "@freesewing/plugin-theme":
/*!*******************************************!*\
  !*** external "@freesewing/plugin-theme" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@freesewing/plugin-theme");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=main.map