/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./demo/main.js","chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/App.vue":
/*!**********************!*\
  !*** ./demo/App.vue ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1bd2bee3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1bd2bee3& */ \"./demo/App.vue?vue&type=template&id=1bd2bee3&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./demo/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./demo/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1bd2bee3___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1bd2bee3___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"demo/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./demo/App.vue?");

/***/ }),

/***/ "./demo/App.vue?vue&type=script&lang=js&":
/*!***********************************************!*\
  !*** ./demo/App.vue?vue&type=script&lang=js& ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./demo/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./demo/App.vue?");

/***/ }),

/***/ "./demo/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************!*\
  !*** ./demo/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./demo/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./demo/App.vue?");

/***/ }),

/***/ "./demo/App.vue?vue&type=template&id=1bd2bee3&":
/*!*****************************************************!*\
  !*** ./demo/App.vue?vue&type=template&id=1bd2bee3& ***!
  \*****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_eaeb9bde_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1bd2bee3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"eaeb9bde-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1bd2bee3& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"eaeb9bde-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./demo/App.vue?vue&type=template&id=1bd2bee3&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_eaeb9bde_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1bd2bee3___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_eaeb9bde_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1bd2bee3___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./demo/App.vue?");

/***/ }),

/***/ "./demo/assets/logo.png":
/*!******************************!*\
  !*** ./demo/assets/logo.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.82b9c7a5.png\";\n\n//# sourceURL=webpack:///./demo/assets/logo.png?");

/***/ }),

/***/ "./demo/main.js":
/*!**********************!*\
  !*** ./demo/main.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./demo/App.vue\");\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src */ \"./src/index.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_src__WEBPACK_IMPORTED_MODULE_2__[\"VueCsvImportPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n}).$mount(\"#app\");\n\n//# sourceURL=webpack:///./demo/main.js?");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./demo/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"app\",\n  data: function data() {\n    return {\n      csv: null\n    };\n  }\n});\n\n//# sourceURL=webpack:///./demo/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VueCsvImport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueCsvImport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"./node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mime-types */ \"./node_modules/mime-types/index.js\");\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    value: Array,\n    url: {\n      type: String\n    },\n    mapFields: {\n      required: true\n    },\n    callback: {\n      type: Function,\n      default: function _default() {\n        return {};\n      }\n    },\n    catch: {\n      type: Function,\n      default: function _default() {\n        return {};\n      }\n    },\n    finally: {\n      type: Function,\n      default: function _default() {\n        return {};\n      }\n    },\n    parseConfig: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    headers: {\n      default: null\n    },\n    loadBtnText: {\n      type: String,\n      default: \"Next\"\n    },\n    submitBtnText: {\n      type: String,\n      default: \"Submit\"\n    },\n    autoMatchFields: {\n      type: Boolean,\n      default: false\n    },\n    autoMatchIgnoreCase: {\n      type: Boolean,\n      default: false\n    },\n    tableClass: {\n      type: String,\n      default: \"table\"\n    },\n    checkboxClass: {\n      type: String,\n      default: \"form-check-input\"\n    },\n    buttonClass: {\n      type: String,\n      default: \"btn btn-primary\"\n    },\n    inputClass: {\n      type: String,\n      default: \"form-control-file\"\n    },\n    validation: {\n      type: Boolean,\n      default: true\n    },\n    fileMimeTypes: {\n      type: Array,\n      default: function _default() {\n        return [\"text/csv\", \"text/x-csv\", \"application/vnd.ms-excel\", \"text/plain\"];\n      }\n    },\n    tableSelectClass: {\n      type: String,\n      default: 'form-control'\n    },\n    canIgnore: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data: function data() {\n    return {\n      form: {\n        csv: null\n      },\n      fieldsToMap: [],\n      map: {},\n      hasHeaders: true,\n      csv: null,\n      sample: null,\n      isValidFileMimeType: false,\n      fileSelected: false\n    };\n  },\n  created: function created() {\n    this.hasHeaders = this.headers;\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"isArray\"])(this.mapFields)) {\n      this.fieldsToMap = Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"map\"])(this.mapFields, function (item) {\n        return {\n          key: item,\n          label: item\n        };\n      });\n    } else {\n      this.fieldsToMap = Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"map\"])(this.mapFields, function (label, key) {\n        return {\n          key: key,\n          label: label\n        };\n      });\n    }\n  },\n  methods: {\n    submit: function submit() {\n      var _this = this;\n\n      this.form.csv = this.buildMappedCsv();\n      this.$emit('input', this.form.csv);\n\n      if (this.url) {\n        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(this.url, this.form).then(function (response) {\n          _this.callback(response);\n        }).catch(function (response) {\n          _this.catch(response);\n        }).finally(function (response) {\n          _this.finally(response);\n        });\n      } else {\n        _this.callback(this.form.csv);\n      }\n    },\n    buildMappedCsv: function buildMappedCsv() {\n      var _this = this;\n\n      var csv = this.hasHeaders ? Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"drop\"])(this.csv) : this.csv;\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"map\"])(csv, function (row) {\n        var newRow = {};\n        Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"forEach\"])(_this.map, function (column, field) {\n          Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"set\"])(newRow, field, Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"get\"])(row, column));\n        });\n        return newRow;\n      });\n    },\n    validFileMimeType: function validFileMimeType() {\n      var file = this.$refs.csv.files[0];\n      var mimeType = file.type === \"\" ? mime_types__WEBPACK_IMPORTED_MODULE_11___default.a.lookup(file.name) : file.type;\n\n      if (file) {\n        this.fileSelected = true;\n        this.isValidFileMimeType = this.validation ? this.validateMimeType(mimeType) : true;\n      } else {\n        this.isValidFileMimeType = !this.validation;\n        this.fileSelected = false;\n      }\n    },\n    validateMimeType: function validateMimeType(type) {\n      return this.fileMimeTypes.indexOf(type) > -1;\n    },\n    load: function load() {\n      var _this = this;\n\n      this.readFile(function (output) {\n        _this.sample = Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"get\"])(papaparse__WEBPACK_IMPORTED_MODULE_10___default.a.parse(output, {\n          preview: 2,\n          skipEmptyLines: true\n        }), \"data\");\n        _this.csv = Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"get\"])(papaparse__WEBPACK_IMPORTED_MODULE_10___default.a.parse(output, {\n          skipEmptyLines: true\n        }), \"data\");\n      });\n    },\n    readFile: function readFile(callback) {\n      var file = this.$refs.csv.files[0];\n\n      if (file) {\n        var reader = new FileReader();\n        reader.readAsText(file, \"UTF-8\");\n\n        reader.onload = function (evt) {\n          callback(evt.target.result);\n        };\n\n        reader.onerror = function () {};\n      }\n    },\n    toggleHasHeaders: function toggleHasHeaders() {\n      this.hasHeaders = !this.hasHeaders;\n    },\n    makeId: function makeId(id) {\n      return \"\".concat(id).concat(this._uid);\n    }\n  },\n  watch: {\n    map: {\n      deep: true,\n      handler: function handler(newVal) {\n        if (!this.url) {\n          var hasAllKeys = Array.isArray(this.mapFields) ? Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"every\"])(this.mapFields, function (item) {\n            return newVal.hasOwnProperty(item);\n          }) : Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"every\"])(this.mapFields, function (item, key) {\n            return newVal.hasOwnProperty(key);\n          });\n\n          if (hasAllKeys) {\n            this.submit();\n          }\n        }\n      }\n    },\n    sample: function sample(newVal, oldVal) {\n      var _this2 = this;\n\n      if (this.autoMatchFields) {\n        if (newVal !== null) {\n          this.fieldsToMap.forEach(function (field) {\n            newVal[0].forEach(function (columnName, index) {\n              if (_this2.autoMatchIgnoreCase === true) {\n                if (field.label.toLowerCase().trim() === columnName.toLowerCase().trim()) {\n                  _this2.$set(_this2.map, field.key, index);\n                }\n              } else {\n                if (field.label.trim() === columnName.trim()) {\n                  _this2.$set(_this2.map, field.key, index);\n                }\n              }\n            });\n          });\n        }\n      }\n    }\n  },\n  computed: {\n    firstRow: function firstRow() {\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_8__[\"get\"])(this, \"sample.0\");\n    },\n    showErrorMessage: function showErrorMessage() {\n      return this.fileSelected && !this.isValidFileMimeType;\n    },\n    disabledNextButton: function disabledNextButton() {\n      return !this.isValidFileMimeType;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/VueCsvImport.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"eaeb9bde-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./demo/App.vue?vue&type=template&id=1bd2bee3&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"eaeb9bde-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/App.vue?vue&type=template&id=1bd2bee3& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app\" } }, [\n    _c(\"img\", {\n      attrs: { alt: \"Vue logo\", src: __webpack_require__(/*! ./assets/logo.png */ \"./demo/assets/logo.png\") }\n    }),\n    _c(\"div\", { staticClass: \"container\" }, [\n      _vm._m(0),\n      _c(\"section\", { staticClass: \"py-5\" }, [\n        _vm._m(1),\n        _c(\"div\", { staticClass: \"row mt-5\" }, [\n          _c(\n            \"div\",\n            { staticClass: \"col-8 offset-2\" },\n            [\n              _c(\"h4\", { staticClass: \"mb-4\" }, [_vm._v(\"Result:\")]),\n              _c(\"vue-csv-import\", {\n                attrs: { \"map-fields\": [\"name\", \"age\"] },\n                model: {\n                  value: _vm.csv,\n                  callback: function($$v) {\n                    _vm.csv = $$v\n                  },\n                  expression: \"csv\"\n                }\n              }),\n              _c(\"div\", { staticClass: \"mt-2\" }, [\n                _vm._v(\" \" + _vm._s(_vm.csv) + \" \")\n              ])\n            ],\n            1\n          )\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row mt-5 text-center\" }, [\n      _c(\"div\", { staticClass: \"col-6 offset-3\" }, [\n        _c(\"a\", { attrs: { href: \"./csv-sample.csv\", target: \"_blank\" } }, [\n          _vm._v(\"Example CSV\")\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row mt-5\" }, [\n      _c(\"div\", { staticClass: \"col-8 offset-2\" }, [\n        _c(\"h4\", [_vm._v(\"Source:\")]),\n        _c(\"pre\", [\n          _c(\"code\", [\n            _vm._v(\n              \"<vue-csv-import v-model=\\\"csv\\\" :map-fields=\\\"['name', 'age']\\\"></vue-csv-import>\"\n            )\n          ])\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./demo/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22eaeb9bde-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"eaeb9bde-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VueCsvImport.vue?vue&type=template&id=129567d6&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"eaeb9bde-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueCsvImport.vue?vue&type=template&id=129567d6& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"vue-csv-uploader\" }, [\n    _c(\"div\", { staticClass: \"form\" }, [\n      _c(\"div\", { staticClass: \"vue-csv-uploader-part-one\" }, [\n        _vm.headers === null\n          ? _c(\n              \"div\",\n              { staticClass: \"form-check form-group csv-import-checkbox\" },\n              [\n                _vm._t(\n                  \"hasHeaders\",\n                  [\n                    _c(\"input\", {\n                      class: _vm.checkboxClass,\n                      attrs: { type: \"checkbox\", id: _vm.makeId(\"hasHeaders\") },\n                      domProps: { value: _vm.hasHeaders },\n                      on: { change: _vm.toggleHasHeaders }\n                    }),\n                    _c(\n                      \"label\",\n                      {\n                        staticClass: \"form-check-label\",\n                        attrs: { for: _vm.makeId(\"hasHeaders\") }\n                      },\n                      [_vm._v(\" File Has Headers \")]\n                    )\n                  ],\n                  { headers: _vm.hasHeaders, toggle: _vm.toggleHasHeaders }\n                )\n              ],\n              2\n            )\n          : _vm._e(),\n        _c(\n          \"div\",\n          { staticClass: \"form-group csv-import-file\" },\n          [\n            _c(\"input\", {\n              ref: \"csv\",\n              class: _vm.inputClass,\n              attrs: { type: \"file\", name: \"csv\" },\n              on: {\n                change: function($event) {\n                  $event.preventDefault()\n                  return _vm.validFileMimeType($event)\n                }\n              }\n            }),\n            _vm.showErrorMessage\n              ? _vm._t(\"error\", [\n                  _c(\"div\", { staticClass: \"invalid-feedback d-block\" }, [\n                    _vm._v(\" File type is invalid \")\n                  ])\n                ])\n              : _vm._e()\n          ],\n          2\n        ),\n        _c(\n          \"div\",\n          { staticClass: \"form-group\" },\n          [\n            _vm._t(\n              \"next\",\n              [\n                _c(\n                  \"button\",\n                  {\n                    class: _vm.buttonClass,\n                    attrs: { type: \"submit\", disabled: _vm.disabledNextButton },\n                    on: {\n                      click: function($event) {\n                        $event.preventDefault()\n                        return _vm.load($event)\n                      }\n                    }\n                  },\n                  [_vm._v(\" \" + _vm._s(_vm.loadBtnText) + \" \")]\n                )\n              ],\n              { load: _vm.load }\n            )\n          ],\n          2\n        )\n      ]),\n      _c(\"div\", { staticClass: \"vue-csv-uploader-part-two\" }, [\n        _vm.sample\n          ? _c(\"div\", { staticClass: \"vue-csv-mapping\" }, [\n              _c(\n                \"table\",\n                { class: _vm.tableClass },\n                [\n                  _vm._t(\"thead\", [_vm._m(0)]),\n                  _c(\n                    \"tbody\",\n                    _vm._l(_vm.fieldsToMap, function(field, key) {\n                      return _c(\"tr\", { key: key }, [\n                        _c(\"td\", [_vm._v(_vm._s(field.label))]),\n                        _c(\"td\", [\n                          _c(\n                            \"select\",\n                            {\n                              directives: [\n                                {\n                                  name: \"model\",\n                                  rawName: \"v-model\",\n                                  value: _vm.map[field.key],\n                                  expression: \"map[field.key]\"\n                                }\n                              ],\n                              class: _vm.tableSelectClass,\n                              attrs: { name: \"csv_uploader_map_\" + key },\n                              on: {\n                                change: function($event) {\n                                  var $$selectedVal = Array.prototype.filter\n                                    .call($event.target.options, function(o) {\n                                      return o.selected\n                                    })\n                                    .map(function(o) {\n                                      var val =\n                                        \"_value\" in o ? o._value : o.value\n                                      return val\n                                    })\n                                  _vm.$set(\n                                    _vm.map,\n                                    field.key,\n                                    $event.target.multiple\n                                      ? $$selectedVal\n                                      : $$selectedVal[0]\n                                  )\n                                }\n                              }\n                            },\n                            [\n                              _vm.canIgnore\n                                ? _c(\"option\", { domProps: { value: null } }, [\n                                    _vm._v(\"Ignore\")\n                                  ])\n                                : _vm._e(),\n                              _vm._l(_vm.firstRow, function(column, key) {\n                                return _c(\n                                  \"option\",\n                                  { key: key, domProps: { value: key } },\n                                  [_vm._v(_vm._s(column))]\n                                )\n                              })\n                            ],\n                            2\n                          )\n                        ])\n                      ])\n                    }),\n                    0\n                  )\n                ],\n                2\n              ),\n              _c(\n                \"div\",\n                { staticClass: \"form-group\" },\n                [\n                  _vm._t(\n                    \"submit\",\n                    [\n                      _c(\"input\", {\n                        class: _vm.buttonClass,\n                        attrs: { type: \"submit\" },\n                        domProps: { value: _vm.submitBtnText },\n                        on: {\n                          click: function($event) {\n                            $event.preventDefault()\n                            return _vm.submit($event)\n                          }\n                        }\n                      })\n                    ],\n                    { submit: _vm.submit }\n                  )\n                ],\n                2\n              )\n            ])\n          : _vm._e()\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [\n      _c(\"tr\", [_c(\"th\", [_vm._v(\"Field\")]), _c(\"th\", [_vm._v(\"CSV Column\")])])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/VueCsvImport.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22eaeb9bde-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./demo/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n#app {\\n    font-family: \\\"Avenir\\\", Helvetica, Arial, sans-serif;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n    text-align: center;\\n    color: #2c3e50;\\n    margin-top: 60px;\\n}\\n.container {\\n    text-align: left;\\n}\\npre code {\\n    background-color: #eee;\\n    border: 1px solid #999;\\n    display: block;\\n    padding: 20px;\\n}\\n#app .form {\\n    text-align: left;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./demo/App.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./demo/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./demo/App.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"737bf090\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./demo/App.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/VueCsvImport.vue":
/*!*****************************************!*\
  !*** ./src/components/VueCsvImport.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VueCsvImport_vue_vue_type_template_id_129567d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueCsvImport.vue?vue&type=template&id=129567d6& */ \"./src/components/VueCsvImport.vue?vue&type=template&id=129567d6&\");\n/* harmony import */ var _VueCsvImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueCsvImport.vue?vue&type=script&lang=js& */ \"./src/components/VueCsvImport.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _VueCsvImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VueCsvImport_vue_vue_type_template_id_129567d6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VueCsvImport_vue_vue_type_template_id_129567d6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/VueCsvImport.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/VueCsvImport.vue?");

/***/ }),

/***/ "./src/components/VueCsvImport.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/VueCsvImport.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCsvImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./VueCsvImport.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VueCsvImport.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCsvImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/VueCsvImport.vue?");

/***/ }),

/***/ "./src/components/VueCsvImport.vue?vue&type=template&id=129567d6&":
/*!************************************************************************!*\
  !*** ./src/components/VueCsvImport.vue?vue&type=template&id=129567d6& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_eaeb9bde_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCsvImport_vue_vue_type_template_id_129567d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"eaeb9bde-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./VueCsvImport.vue?vue&type=template&id=129567d6& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"eaeb9bde-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VueCsvImport.vue?vue&type=template&id=129567d6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_eaeb9bde_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCsvImport_vue_vue_type_template_id_129567d6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_eaeb9bde_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCsvImport_vue_vue_type_template_id_129567d6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/VueCsvImport.vue?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: VueCsvImport, VueCsvImportPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VueCsvImportPlugin\", function() { return VueCsvImportPlugin; });\n/* harmony import */ var _Users_johngile_code_vue_csv_import_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/typeof */ \"./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _components_VueCsvImport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/VueCsvImport */ \"./src/components/VueCsvImport.vue\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VueCsvImport\", function() { return _components_VueCsvImport__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\nvar VueCsvImportPlugin = {\n  install: function install(Vue) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    Vue.component(options.componentName || 'VueCsvImport', _components_VueCsvImport__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  }\n};\n\nif ((typeof window === \"undefined\" ? \"undefined\" : Object(_Users_johngile_code_vue_csv_import_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(window)) !== undefined && window.Vue && window.Vue === vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n  VueCsvImportPlugin.install(window.Vue);\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_components_VueCsvImport__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });