(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.Settings = exports.List = exports.ListItem = exports.ListItemIterator = void 0;
var list_item_iterator_1 = __webpack_require__(/*! ./list-item-iterator */ "./list-item-iterator.ts");
__createBinding(exports, list_item_iterator_1, "ListItemIterator");
var list_item_1 = __webpack_require__(/*! ./list-item */ "./list-item.ts");
__createBinding(exports, list_item_1, "ListItem");
var list_1 = __webpack_require__(/*! ./list */ "./list.ts");
__createBinding(exports, list_1, "List");
var settings_1 = __webpack_require__(/*! ./settings */ "./settings.ts");
__createBinding(exports, settings_1, "Settings");


/***/ }),

/***/ "./list-item-iterator.ts":
/*!*******************************!*\
  !*** ./list-item-iterator.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.ListItemIterator = void 0;
var ListItemIterator = /** @class */ (function () {
    function ListItemIterator(items) {
        this.index = 0;
        this.array = [];
        this.array = Array.from(items);
    }
    ListItemIterator.prototype.next = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return {
            done: this.index >= this.array.length,
            value: this.array[this.index++]
        };
    };
    return ListItemIterator;
}());
exports.ListItemIterator = ListItemIterator;


/***/ }),

/***/ "./list-item.ts":
/*!**********************!*\
  !*** ./list-item.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.ListItem = void 0;
var ListItem = /** @class */ (function () {
    function ListItem() {
        this.indexVal = 0;
        this.shortVal = '';
        this.longVal = '';
    }
    ListItem.prototype.index = function () {
        return this.indexVal;
    };
    ListItem.prototype.setIndex = function (index) {
        this.indexVal = index;
    };
    ListItem.prototype.short = function () {
        return this.shortVal;
    };
    ListItem.prototype.setShort = function (value) {
        this.shortVal = value;
    };
    ListItem.prototype.long = function () {
        return this.longVal;
    };
    return ListItem;
}());
exports.ListItem = ListItem;


/***/ }),

/***/ "./list.ts":
/*!*****************!*\
  !*** ./list.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.List = void 0;
var list_item_iterator_1 = __webpack_require__(/*! ./list-item-iterator */ "./list-item-iterator.ts");
var List = /** @class */ (function () {
    function List(listItems) {
        if (listItems == undefined) {
            listItems = [];
        }
        if (!Array.isArray(listItems)) {
            listItems = Array.from(listItems);
        }
        this.listItems = Array.from(listItems);
    }
    List.prototype.items = function () {
        return this.listItems;
    };
    List.prototype.add = function (i) {
        this.listItems.push(i);
    };
    List.prototype.remove = function (index) {
        this.listItems.splice(index, 1);
        return this;
    };
    List.prototype.length = function () {
        return this.listItems.length;
    };
    List.prototype.moveItems = function (i1, i2, alg) {
        return this;
    };
    List.prototype.update = function (index, value) {
        this.listItems[index].setShort(value);
    };
    List.prototype[Symbol.iterator] = function () {
        return new list_item_iterator_1.ListItemIterator(this.items());
    };
    return List;
}());
exports.List = List;


/***/ }),

/***/ "./settings.ts":
/*!*********************!*\
  !*** ./settings.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


// import { RunContext } from '@maikr/enums/run-context';
exports.__esModule = true;
exports.Settings = void 0;
var Settings = /** @class */ (function () {
    function Settings(settings) {
        this.settings = {};
        this.settings = settings || {};
        this.settings['run-context'] = "local"; // RunContext.LOCAL;
    }
    return Settings;
}());
exports.Settings = Settings;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map