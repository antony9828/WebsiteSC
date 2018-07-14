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

// Copyright (c) 2018 cloudcrate solutions UG (haftungsbeschraenkt)
var registerFunction = Blazor.registerFunction;
var storageAssembly = 'Cloudcrate.AspNetCore.Blazor.Browser';
var storageNamespace = storageAssembly + ".Storage";
var storages = {
    LocalStorage: localStorage,
    SessionStorage: sessionStorage
};
var _loop_1 = function () {
    var storage = storages[storageTypeName];
    var storageFullTypeName = storageNamespace + "." + storageTypeName;
    registerFunction(storageFullTypeName + ".Clear", function () {
        clear(storage);
    });
    registerFunction(storageFullTypeName + ".GetItem", function (key) {
        return getItem(storage, key);
    });
    registerFunction(storageFullTypeName + ".Key", function (index) {
        return key(storage, index);
    });
    registerFunction(storageFullTypeName + ".Length", function () {
        return getLength(storage);
    });
    registerFunction(storageFullTypeName + ".RemoveItem", function (key) {
        removeItem(storage, key);
    });
    registerFunction(storageFullTypeName + ".SetItem", function (key, data) {
        setItem(storage, key, data);
    });
    registerFunction(storageFullTypeName + ".GetItemString", function (key) {
        return getItemString(storage, key);
    });
    registerFunction(storageFullTypeName + ".SetItemString", function (key, data) {
        setItemString(storage, key, data);
    });
    registerFunction(storageFullTypeName + ".GetItemNumber", function (index) {
        return getItemNumber(storage, index);
    });
    registerFunction(storageFullTypeName + ".SetItemNumber", function (index, data) {
        setItemNumber(storage, index, data);
    });
};
for (var storageTypeName in storages) {
    _loop_1();
}
function clear(storage) {
    storage.clear();
}
function getItem(storage, key) {
    return storage.getItem(key);
}
function key(storage, index) {
    return storage.key(index);
}
function getLength(storage) {
    return storage.length;
}
function removeItem(storage, key) {
    storage.removeItem(key);
}
function setItem(storage, key, data) {
    storage.setItem(key, data);
}
function getItemString(storage, key) {
    return storage[key];
}
function setItemString(storage, key, data) {
    storage[key] = data;
}
function getItemNumber(storage, index) {
    return storage[index];
}
function setItemNumber(storage, index, data) {
    storage[index] = data;
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmM5MmNmMTQ3ZWY4NDJiNjIwNWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3REEsbUVBQW1FO0FBR25FLElBQUksZ0JBQWdCLEdBQTJELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztBQUV2RyxJQUFNLGVBQWUsR0FBRyxzQ0FBc0MsQ0FBQztBQUMvRCxJQUFNLGdCQUFnQixHQUFNLGVBQWUsYUFBVSxDQUFDO0FBRXRELElBQU0sUUFBUSxHQUErQjtJQUN6QyxZQUFZLEVBQUUsWUFBWTtJQUMxQixjQUFjLEVBQUUsY0FBYztDQUNqQyxDQUFDOztJQUdFLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxQyxJQUFNLG1CQUFtQixHQUFNLGdCQUFnQixTQUFJLGVBQWlCLENBQUM7SUFFckUsZ0JBQWdCLENBQUksbUJBQW1CLFdBQVEsRUFBRTtRQUM3QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxnQkFBZ0IsQ0FBSSxtQkFBbUIsYUFBVSxFQUFFLFVBQUMsR0FBVztRQUMzRCxNQUFNLENBQUMsT0FBTyxD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RUFBRSxJQUFZO0lBQ2hFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDMUIsQ0FBQyIsImZpbGUiOiJzdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmM5MmNmMTQ3ZWY4NDJiNjIwNWMiLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTggY2xvdWRjcmF0ZSBzb2x1dGlvbnMgVUcgKGhhZnR1bmdzYmVzY2hyYWVua3QpXHJcblxyXG5kZWNsYXJlIHZhciBCbGF6b3I6IGFueTtcclxudmFyIHJlZ2lzdGVyRnVuY3Rpb246IChpZGVudGlmaWVyOiBzdHJpbmcsIGltcGxlbWVudGF0aW9uOiBGdW5jdGlvbikgPT4gdm9pZCA9IEJsYXpvci5yZWdpc3RlckZ1bmN0aW9uO1xyXG5cclxuY29uc3Qgc3RvcmFnZUFzc2VtYmx5ID0gJ0Nsb3VkY3JhdGUuQXNwTmV0Q29yZS5CbGF6b3IuQnJvd3Nlcic7XHJcbmNvbnN0IHN0b3JhZ2VOYW1lc3BhY2UgPSBgJHtzdG9yYWdlQXNzZW1ibHl9LlN0b3JhZ2VgO1xyXG5cclxuY29uc3Qgc3RvcmFnZXM6IHsgW2tleTogc3RyaW5nXTogU3RvcmFnZSB9ID0ge1xyXG4gICAgTG9jYWxTdG9yYWdlOiBsb2NhbFN0b3JhZ2UsXHJcbiAgICBTZXNzaW9uU3RvcmFnZTogc2Vzc2lvblN0b3JhZ2VcclxufTtcclxuXHJcbmZvciAodmFyIHN0b3JhZ2VUeXBlTmFtZSBpbiBzdG9yYWdlcykge1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IHN0b3JhZ2VzW3N0b3JhZ2VUeXBlTmFtZV07XHJcbiAgICBjb25zdCBzdG9yYWdlRnVsbFR5cGVOYW1lID0gYCR7c3RvcmFnZU5hbWVzcGFjZX0uJHtzdG9yYWdlVHlwZU5hbWV9YDtcclxuXHJcbiAgICByZWdpc3RlckZ1bmN0aW9uKGAke3N0b3JhZ2VGdWxsVHlwZU5hbWV9LkNsZWFyYCwgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyKHN0b3JhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVnaXN0ZXJGdW5jdGlvbihgJHtzdG9yYWdlRnVsbFR5cGVOYW1lfS5HZXRJdGVtYCwgKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGdldEl0ZW0oc3RvcmFnZSwga2V5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlZ2lzdGVyRnVuY3Rpb24oYCR7c3RvcmFnZUZ1bGxUeXBlTmFtZX0uS2V5YCwgKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4ga2V5KHN0b3JhZ2UsIGluZGV4KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlZ2lzdGVyRnVuY3Rpb24oYCR7c3RvcmFnZUZ1bGxUeXBlTmFtZX0uTGVuZ3RoYCwgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnZXRMZW5ndGgoc3RvcmFnZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWdpc3RlckZ1bmN0aW9uKGAke3N0b3JhZ2VGdWxsVHlwZU5hbWV9LlJlbW92ZUl0ZW1gLCAoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZW1vdmVJdGVtKHN0b3JhZ2UsIGtleSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWdpc3RlckZ1bmN0aW9uKGAke3N0b3JhZ2VGdWxsVHlwZU5hbWV9LlNldEl0ZW1gLCAoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldEl0ZW0oc3RvcmFnZSwga2V5LCBkYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlZ2lzdGVyRnVuY3Rpb24oYCR7c3RvcmFnZUZ1bGxUeXBlTmFtZX0uR2V0SXRlbVN0cmluZ2AsIChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBnZXRJdGVtU3RyaW5nKHN0b3JhZ2UsIGtleSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWdpc3RlckZ1bmN0aW9uKGAke3N0b3JhZ2VGdWxsVHlwZU5hbWV9LlNldEl0ZW1TdHJpbmdgLCAoa2V5OiBzdHJpbmcsIGRhdGE6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHNldEl0ZW1TdHJpbmcoc3RvcmFnZSwga2V5LCBkYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlZ2lzdGVyRnVuY3Rpb24oYCR7c3RvcmFnZUZ1bGxUeXBlTmFtZX0uR2V0SXRlbU51bWJlcmAsIChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGdldEl0ZW1OdW1iZXIoc3RvcmFnZSwgaW5kZXgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVnaXN0ZXJGdW5jdGlvbihgJHtzdG9yYWdlRnVsbFR5cGVOYW1lfS5TZXRJdGVtTnVtYmVyYCwgKGluZGV4OiBudW1iZXIsIGRhdGE6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHNldEl0ZW1OdW1iZXIoc3RvcmFnZSwgaW5kZXgsIGRhdGEpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKHN0b3JhZ2U6IFN0b3JhZ2UpIHtcclxuICAgIHN0b3JhZ2UuY2xlYXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbShzdG9yYWdlOiBTdG9yYWdlLCBrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrZXkoc3RvcmFnZTogU3RvcmFnZSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHN0b3JhZ2Uua2V5KGluZGV4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGVuZ3RoKHN0b3JhZ2U6IFN0b3JhZ2UpIHtcclxuICAgIHJldHVybiBzdG9yYWdlLmxlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSXRlbShzdG9yYWdlOiBTdG9yYWdlLCBrZXk6IHN0cmluZykge1xyXG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEl0ZW0oc3RvcmFnZTogU3RvcmFnZSwga2V5OiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgc3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbVN0cmluZyhzdG9yYWdlOiBTdG9yYWdlLCBrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0b3JhZ2Vba2V5XTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0SXRlbVN0cmluZyhzdG9yYWdlOiBTdG9yYWdlLCBrZXk6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICBzdG9yYWdlW2tleV0gPSBkYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJdGVtTnVtYmVyKHN0b3JhZ2U6IFN0b3JhZ2UsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBzdG9yYWdlW2luZGV4XVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRJdGVtTnVtYmVyKHN0b3JhZ2U6IFN0b3JhZ2UsIGluZGV4OiBudW1iZXIsIGRhdGE6IHN0cmluZykge1xyXG4gICAgc3RvcmFnZVtpbmRleF0gPSBkYXRhO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yYWdlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==