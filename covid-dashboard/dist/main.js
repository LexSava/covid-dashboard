/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/babel.js":
/*!*********************!*
  !*** ./js/babel.js ***!
  \*********************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack:///./js/babel.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*
  !*** ./js/main.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./babel */ \"./js/babel.js\");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _widget_zero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget.zero */ \"./js/widget.zero.js\");\n/* harmony import */ var _widget_zero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_widget_zero__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wdget_four__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wdget.four */ \"./js/wdget.four.js\");\n/* harmony import */ var _styles_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/css/style.css */ \"./styles/css/style.css\");\n/* harmony import */ var _styles_sass_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/sass/style.scss */ \"./styles/sass/style.scss\");\n/* harmony import */ var _styles_css_fonts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/css/fonts.css */ \"./styles/css/fonts.css\");\n\n\n\n\n\n // import '../styles/css/Chart.min.css';\n// import './Chart.min';\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/wdget.four.js":
/*!**************************!*
  !*** ./js/wdget.four.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"../node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar BTN_EXPAND_BLOCK = document.querySelector('.widget_4__btn');\nvar BLOCK_WIDGET_4 = document.querySelector('.widget_4');\nvar SELECT_COUNTRYS = document.querySelector('.dropdown-select');\nvar D = new Date('01/20/20');\nvar Till = new Date();\nvar ARRAY_OF_DATES = [];\nvar ctx = document.getElementById('myChart').getContext('2d');\n\nfunction pad(s) {\n  return \"00\".concat(s).slice(-2);\n}\n\nwhile (D.getTime() < Till.getTime()) {\n  ARRAY_OF_DATES.push(\"\".concat(D.getFullYear(), \"-\").concat(pad(D.getMonth() + 1), \"-\").concat(pad(D.getDate())));\n  D.setDate(D.getDate() + 1);\n}\n\nvar LineGraph;\nvar BarGraph;\n\nfunction BuildGraphWithData() {\n  return _BuildGraphWithData.apply(this, arguments);\n}\n\nfunction _BuildGraphWithData() {\n  _BuildGraphWithData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, results, arrCasesValue, arrDeathsValue, arrRecoveredValue;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=366');\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            results = _context.sent;\n            arrCasesValue = Object.values(results.cases);\n            arrDeathsValue = Object.values(results.deaths);\n            arrRecoveredValue = Object.values(results.recovered);\n            LineGraph = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(ctx, {\n              type: 'line',\n              data: {\n                labels: ARRAY_OF_DATES,\n                datasets: [{\n                  label: 'Cases',\n                  // Название\n                  backgroundColor: 'rgba(255, 206, 86, 0.2)',\n                  borderColor: 'rgba(255, 206, 86, 1)',\n                  pointBackgroundColor: 'rgba(255, 206, 86, 1)',\n                  pointBorderWidth: 1,\n                  pointRadius: 1,\n                  data: arrCasesValue\n                }, {\n                  label: 'Deaths',\n                  // Название\n                  backgroundColor: 'rgba(153, 102, 255, 0.2)',\n                  borderColor: 'rgba(153, 102, 255, 1)',\n                  pointBackgroundColor: 'rgba(153, 102, 255, 1)',\n                  pointBorderWidth: 1,\n                  pointRadius: 1,\n                  data: arrDeathsValue\n                }, {\n                  label: 'Recovered',\n                  // Название\n                  backgroundColor: 'rgba(54, 162, 235, 0.2)',\n                  borderColor: 'rgba(54, 162, 235, 1)',\n                  pointBackgroundColor: 'rgba(54, 162, 235, 1)',\n                  pointBorderWidth: 1,\n                  pointRadius: 1,\n                  data: arrRecoveredValue\n                }]\n              },\n              options: {\n                legend: {\n                  labels: {\n                    fontColor: 'white'\n                  }\n                },\n                scales: {\n                  xAxes: [{\n                    type: 'time',\n                    time: {\n                      displayFormats: {\n                        quarter: 'MMM YYYY'\n                      }\n                    }\n                  }],\n                  yAxes: [{\n                    ticks: {\n                      callback: function callback(value) {\n                        return \"\".concat(value / 1000000, \" M\");\n                      }\n                    }\n                  }]\n                }\n              }\n            });\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _BuildGraphWithData.apply(this, arguments);\n}\n\nfunction BuildGraphByCountry(_x) {\n  return _BuildGraphByCountry.apply(this, arguments);\n}\n\nfunction _BuildGraphByCountry() {\n  _BuildGraphByCountry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(countryNeme) {\n    var response, results, newArrDate, key;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch('https://disease.sh/v2/countries');\n\n          case 2:\n            response = _context2.sent;\n            _context2.next = 5;\n            return response.json();\n\n          case 5:\n            results = _context2.sent;\n            newArrDate = [];\n            console.log(results[1]);\n\n            for (key in results) {\n              if (results[key].country === countryNeme) {\n                newArrDate.push(results[key].cases);\n                newArrDate.push(results[key].deaths);\n                newArrDate.push(results[key].recovered);\n              }\n            }\n\n            BarGraph = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(ctx, {\n              type: 'bar',\n              data: {\n                labels: ['Cases', 'Deaths', 'Recovered'],\n                datasets: [{\n                  label: 'Contry',\n                  data: newArrDate,\n                  backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(54, 162, 235, 0.2)'],\n                  borderColor: ['rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)', 'rgba(54, 162, 235, 1)'],\n                  borderWidth: 1\n                }]\n              },\n              options: {\n                scales: {\n                  yAxes: [{\n                    ticks: {\n                      beginAtZero: true\n                    }\n                  }]\n                }\n              }\n            });\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _BuildGraphByCountry.apply(this, arguments);\n}\n\nBTN_EXPAND_BLOCK.addEventListener('click', function () {\n  BLOCK_WIDGET_4.classList.toggle('active');\n});\n\nfunction getNewOption(content) {\n  var NewOption = document.createElement('option');\n  NewOption.innerHTML = content;\n  NewOption.setAttribute('value', \"\".concat(content));\n  return NewOption;\n}\n\nfunction GetInformationThroughoutTheCountry() {\n  return _GetInformationThroughoutTheCountry.apply(this, arguments);\n}\n\nfunction _GetInformationThroughoutTheCountry() {\n  _GetInformationThroughoutTheCountry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var response, results, key;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return fetch('https://disease.sh/v2/countries');\n\n          case 2:\n            response = _context3.sent;\n            _context3.next = 5;\n            return response.json();\n\n          case 5:\n            results = _context3.sent;\n\n            for (key in results) {\n              SELECT_COUNTRYS.appendChild(getNewOption(\"\".concat(results[key].country)));\n            }\n\n          case 7:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _GetInformationThroughoutTheCountry.apply(this, arguments);\n}\n\nfunction test() {\n  console.log('HI');\n}\n\nGetInformationThroughoutTheCountry();\n\nSELECT_COUNTRYS.onchange = function () {\n  if (SELECT_COUNTRYS.value === 'All countries') {\n    BarGraph.destroy();\n    LineGraph.destroy();\n    BuildGraphWithData();\n  } else {\n    if (BarGraph !== undefined) {\n      BarGraph.destroy();\n    }\n\n    LineGraph.destroy();\n    BuildGraphByCountry(SELECT_COUNTRYS.value);\n  }\n};\n\nBuildGraphWithData();\n\n//# sourceURL=webpack:///./js/wdget.four.js?");

/***/ }),

/***/ "./js/widget.zero.js":
/*!***************************!*
  !*** ./js/widget.zero.js ***!
  \***************************/
/***/ (function() {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar widget_zero = document.querySelector('.widget_0');\nwidget_zero.classList.add('general__information');\n\nfunction getResponseAllCases() {\n  return _getResponseAllCases.apply(this, arguments);\n}\n\nfunction _getResponseAllCases() {\n  _getResponseAllCases = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, content, key;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=366');\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            content = _context.sent;\n\n            for (key in content) {\n              widget_zero.appendChild(getEl(\"- \".concat(key, \" - \").concat(content[key][Object.keys(content[key])[Object.keys(content[key]).length - 1]])));\n            }\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getResponseAllCases.apply(this, arguments);\n}\n\ngetResponseAllCases();\n\nfunction getEl(content) {\n  var newEl = document.createElement('div');\n  newEl.classList.add('general__information__heading');\n  newEl.innerHTML = content;\n  return newEl;\n}\n\n//# sourceURL=webpack:///./js/widget.zero.js?");

/***/ }),

/***/ "./styles/css/fonts.css":
/*!******************************!*
  !*** ./styles/css/fonts.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/css/fonts.css?");

/***/ }),

/***/ "./styles/css/style.css":
/*!******************************!*
  !*** ./styles/css/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/css/style.css?");

/***/ }),

/***/ "./styles/sass/style.scss":
/*!********************************!*
  !*** ./styles/sass/style.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/sass/style.scss?");

/***/ }),

/***/ "../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!****************************************************!*
  !*** ../node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./af\": \"../node_modules/moment/locale/af.js\",\n\t\"./af.js\": \"../node_modules/moment/locale/af.js\",\n\t\"./ar\": \"../node_modules/moment/locale/ar.js\",\n\t\"./ar-dz\": \"../node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-dz.js\": \"../node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-kw\": \"../node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-kw.js\": \"../node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-ly\": \"../node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ly.js\": \"../node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ma\": \"../node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-ma.js\": \"../node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-sa\": \"../node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-sa.js\": \"../node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-tn\": \"../node_modules/moment/locale/ar-tn.js\",\n\t\"./ar-tn.js\": \"../node_modules/moment/locale/ar-tn.js\",\n\t\"./ar.js\": \"../node_modules/moment/locale/ar.js\",\n\t\"./az\": \"../node_modules/moment/locale/az.js\",\n\t\"./az.js\": \"../node_modules/moment/locale/az.js\",\n\t\"./be\": \"../node_modules/moment/locale/be.js\",\n\t\"./be.js\": \"../node_modules/moment/locale/be.js\",\n\t\"./bg\": \"../node_modules/moment/locale/bg.js\",\n\t\"./bg.js\": \"../node_modules/moment/locale/bg.js\",\n\t\"./bm\": \"../node_modules/moment/locale/bm.js\",\n\t\"./bm.js\": \"../node_modules/moment/locale/bm.js\",\n\t\"./bn\": \"../node_modules/moment/locale/bn.js\",\n\t\"./bn-bd\": \"../node_modules/moment/locale/bn-bd.js\",\n\t\"./bn-bd.js\": \"../node_modules/moment/locale/bn-bd.js\",\n\t\"./bn.js\": \"../node_modules/moment/locale/bn.js\",\n\t\"./bo\": \"../node_modules/moment/locale/bo.js\",\n\t\"./bo.js\": \"../node_modules/moment/locale/bo.js\",\n\t\"./br\": \"../node_modules/moment/locale/br.js\",\n\t\"./br.js\": \"../node_modules/moment/locale/br.js\",\n\t\"./bs\": \"../node_modules/moment/locale/bs.js\",\n\t\"./bs.js\": \"../node_modules/moment/locale/bs.js\",\n\t\"./ca\": \"../node_modules/moment/locale/ca.js\",\n\t\"./ca.js\": \"../node_modules/moment/locale/ca.js\",\n\t\"./cs\": \"../node_modules/moment/locale/cs.js\",\n\t\"./cs.js\": \"../node_modules/moment/locale/cs.js\",\n\t\"./cv\": \"../node_modules/moment/locale/cv.js\",\n\t\"./cv.js\": \"../node_modules/moment/locale/cv.js\",\n\t\"./cy\": \"../node_modules/moment/locale/cy.js\",\n\t\"./cy.js\": \"../node_modules/moment/locale/cy.js\",\n\t\"./da\": \"../node_modules/moment/locale/da.js\",\n\t\"./da.js\": \"../node_modules/moment/locale/da.js\",\n\t\"./de\": \"../node_modules/moment/locale/de.js\",\n\t\"./de-at\": \"../node_modules/moment/locale/de-at.js\",\n\t\"./de-at.js\": \"../node_modules/moment/locale/de-at.js\",\n\t\"./de-ch\": \"../node_modules/moment/locale/de-ch.js\",\n\t\"./de-ch.js\": \"../node_modules/moment/locale/de-ch.js\",\n\t\"./de.js\": \"../node_modules/moment/locale/de.js\",\n\t\"./dv\": \"../node_modules/moment/locale/dv.js\",\n\t\"./dv.js\": \"../node_modules/moment/locale/dv.js\",\n\t\"./el\": \"../node_modules/moment/locale/el.js\",\n\t\"./el.js\": \"../node_modules/moment/locale/el.js\",\n\t\"./en-au\": \"../node_modules/moment/locale/en-au.js\",\n\t\"./en-au.js\": \"../node_modules/moment/locale/en-au.js\",\n\t\"./en-ca\": \"../node_modules/moment/locale/en-ca.js\",\n\t\"./en-ca.js\": \"../node_modules/moment/locale/en-ca.js\",\n\t\"./en-gb\": \"../node_modules/moment/locale/en-gb.js\",\n\t\"./en-gb.js\": \"../node_modules/moment/locale/en-gb.js\",\n\t\"./en-ie\": \"../node_modules/moment/locale/en-ie.js\",\n\t\"./en-ie.js\": \"../node_modules/moment/locale/en-ie.js\",\n\t\"./en-il\": \"../node_modules/moment/locale/en-il.js\",\n\t\"./en-il.js\": \"../node_modules/moment/locale/en-il.js\",\n\t\"./en-in\": \"../node_modules/moment/locale/en-in.js\",\n\t\"./en-in.js\": \"../node_modules/moment/locale/en-in.js\",\n\t\"./en-nz\": \"../node_modules/moment/locale/en-nz.js\",\n\t\"./en-nz.js\": \"../node_modules/moment/locale/en-nz.js\",\n\t\"./en-sg\": \"../node_modules/moment/locale/en-sg.js\",\n\t\"./en-sg.js\": \"../node_modules/moment/locale/en-sg.js\",\n\t\"./eo\": \"../node_modules/moment/locale/eo.js\",\n\t\"./eo.js\": \"../node_modules/moment/locale/eo.js\",\n\t\"./es\": \"../node_modules/moment/locale/es.js\",\n\t\"./es-do\": \"../node_modules/moment/locale/es-do.js\",\n\t\"./es-do.js\": \"../node_modules/moment/locale/es-do.js\",\n\t\"./es-mx\": \"../node_modules/moment/locale/es-mx.js\",\n\t\"./es-mx.js\": \"../node_modules/moment/locale/es-mx.js\",\n\t\"./es-us\": \"../node_modules/moment/locale/es-us.js\",\n\t\"./es-us.js\": \"../node_modules/moment/locale/es-us.js\",\n\t\"./es.js\": \"../node_modules/moment/locale/es.js\",\n\t\"./et\": \"../node_modules/moment/locale/et.js\",\n\t\"./et.js\": \"../node_modules/moment/locale/et.js\",\n\t\"./eu\": \"../node_modules/moment/locale/eu.js\",\n\t\"./eu.js\": \"../node_modules/moment/locale/eu.js\",\n\t\"./fa\": \"../node_modules/moment/locale/fa.js\",\n\t\"./fa.js\": \"../node_modules/moment/locale/fa.js\",\n\t\"./fi\": \"../node_modules/moment/locale/fi.js\",\n\t\"./fi.js\": \"../node_modules/moment/locale/fi.js\",\n\t\"./fil\": \"../node_modules/moment/locale/fil.js\",\n\t\"./fil.js\": \"../node_modules/moment/locale/fil.js\",\n\t\"./fo\": \"../node_modules/moment/locale/fo.js\",\n\t\"./fo.js\": \"../node_modules/moment/locale/fo.js\",\n\t\"./fr\": \"../node_modules/moment/locale/fr.js\",\n\t\"./fr-ca\": \"../node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ca.js\": \"../node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ch\": \"../node_modules/moment/locale/fr-ch.js\",\n\t\"./fr-ch.js\": \"../node_modules/moment/locale/fr-ch.js\",\n\t\"./fr.js\": \"../node_modules/moment/locale/fr.js\",\n\t\"./fy\": \"../node_modules/moment/locale/fy.js\",\n\t\"./fy.js\": \"../node_modules/moment/locale/fy.js\",\n\t\"./ga\": \"../node_modules/moment/locale/ga.js\",\n\t\"./ga.js\": \"../node_modules/moment/locale/ga.js\",\n\t\"./gd\": \"../node_modules/moment/locale/gd.js\",\n\t\"./gd.js\": \"../node_modules/moment/locale/gd.js\",\n\t\"./gl\": \"../node_modules/moment/locale/gl.js\",\n\t\"./gl.js\": \"../node_modules/moment/locale/gl.js\",\n\t\"./gom-deva\": \"../node_modules/moment/locale/gom-deva.js\",\n\t\"./gom-deva.js\": \"../node_modules/moment/locale/gom-deva.js\",\n\t\"./gom-latn\": \"../node_modules/moment/locale/gom-latn.js\",\n\t\"./gom-latn.js\": \"../node_modules/moment/locale/gom-latn.js\",\n\t\"./gu\": \"../node_modules/moment/locale/gu.js\",\n\t\"./gu.js\": \"../node_modules/moment/locale/gu.js\",\n\t\"./he\": \"../node_modules/moment/locale/he.js\",\n\t\"./he.js\": \"../node_modules/moment/locale/he.js\",\n\t\"./hi\": \"../node_modules/moment/locale/hi.js\",\n\t\"./hi.js\": \"../node_modules/moment/locale/hi.js\",\n\t\"./hr\": \"../node_modules/moment/locale/hr.js\",\n\t\"./hr.js\": \"../node_modules/moment/locale/hr.js\",\n\t\"./hu\": \"../node_modules/moment/locale/hu.js\",\n\t\"./hu.js\": \"../node_modules/moment/locale/hu.js\",\n\t\"./hy-am\": \"../node_modules/moment/locale/hy-am.js\",\n\t\"./hy-am.js\": \"../node_modules/moment/locale/hy-am.js\",\n\t\"./id\": \"../node_modules/moment/locale/id.js\",\n\t\"./id.js\": \"../node_modules/moment/locale/id.js\",\n\t\"./is\": \"../node_modules/moment/locale/is.js\",\n\t\"./is.js\": \"../node_modules/moment/locale/is.js\",\n\t\"./it\": \"../node_modules/moment/locale/it.js\",\n\t\"./it-ch\": \"../node_modules/moment/locale/it-ch.js\",\n\t\"./it-ch.js\": \"../node_modules/moment/locale/it-ch.js\",\n\t\"./it.js\": \"../node_modules/moment/locale/it.js\",\n\t\"./ja\": \"../node_modules/moment/locale/ja.js\",\n\t\"./ja.js\": \"../node_modules/moment/locale/ja.js\",\n\t\"./jv\": \"../node_modules/moment/locale/jv.js\",\n\t\"./jv.js\": \"../node_modules/moment/locale/jv.js\",\n\t\"./ka\": \"../node_modules/moment/locale/ka.js\",\n\t\"./ka.js\": \"../node_modules/moment/locale/ka.js\",\n\t\"./kk\": \"../node_modules/moment/locale/kk.js\",\n\t\"./kk.js\": \"../node_modules/moment/locale/kk.js\",\n\t\"./km\": \"../node_modules/moment/locale/km.js\",\n\t\"./km.js\": \"../node_modules/moment/locale/km.js\",\n\t\"./kn\": \"../node_modules/moment/locale/kn.js\",\n\t\"./kn.js\": \"../node_modules/moment/locale/kn.js\",\n\t\"./ko\": \"../node_modules/moment/locale/ko.js\",\n\t\"./ko.js\": \"../node_modules/moment/locale/ko.js\",\n\t\"./ku\": \"../node_modules/moment/locale/ku.js\",\n\t\"./ku.js\": \"../node_modules/moment/locale/ku.js\",\n\t\"./ky\": \"../node_modules/moment/locale/ky.js\",\n\t\"./ky.js\": \"../node_modules/moment/locale/ky.js\",\n\t\"./lb\": \"../node_modules/moment/locale/lb.js\",\n\t\"./lb.js\": \"../node_modules/moment/locale/lb.js\",\n\t\"./lo\": \"../node_modules/moment/locale/lo.js\",\n\t\"./lo.js\": \"../node_modules/moment/locale/lo.js\",\n\t\"./lt\": \"../node_modules/moment/locale/lt.js\",\n\t\"./lt.js\": \"../node_modules/moment/locale/lt.js\",\n\t\"./lv\": \"../node_modules/moment/locale/lv.js\",\n\t\"./lv.js\": \"../node_modules/moment/locale/lv.js\",\n\t\"./me\": \"../node_modules/moment/locale/me.js\",\n\t\"./me.js\": \"../node_modules/moment/locale/me.js\",\n\t\"./mi\": \"../node_modules/moment/locale/mi.js\",\n\t\"./mi.js\": \"../node_modules/moment/locale/mi.js\",\n\t\"./mk\": \"../node_modules/moment/locale/mk.js\",\n\t\"./mk.js\": \"../node_modules/moment/locale/mk.js\",\n\t\"./ml\": \"../node_modules/moment/locale/ml.js\",\n\t\"./ml.js\": \"../node_modules/moment/locale/ml.js\",\n\t\"./mn\": \"../node_modules/moment/locale/mn.js\",\n\t\"./mn.js\": \"../node_modules/moment/locale/mn.js\",\n\t\"./mr\": \"../node_modules/moment/locale/mr.js\",\n\t\"./mr.js\": \"../node_modules/moment/locale/mr.js\",\n\t\"./ms\": \"../node_modules/moment/locale/ms.js\",\n\t\"./ms-my\": \"../node_modules/moment/locale/ms-my.js\",\n\t\"./ms-my.js\": \"../node_modules/moment/locale/ms-my.js\",\n\t\"./ms.js\": \"../node_modules/moment/locale/ms.js\",\n\t\"./mt\": \"../node_modules/moment/locale/mt.js\",\n\t\"./mt.js\": \"../node_modules/moment/locale/mt.js\",\n\t\"./my\": \"../node_modules/moment/locale/my.js\",\n\t\"./my.js\": \"../node_modules/moment/locale/my.js\",\n\t\"./nb\": \"../node_modules/moment/locale/nb.js\",\n\t\"./nb.js\": \"../node_modules/moment/locale/nb.js\",\n\t\"./ne\": \"../node_modules/moment/locale/ne.js\",\n\t\"./ne.js\": \"../node_modules/moment/locale/ne.js\",\n\t\"./nl\": \"../node_modules/moment/locale/nl.js\",\n\t\"./nl-be\": \"../node_modules/moment/locale/nl-be.js\",\n\t\"./nl-be.js\": \"../node_modules/moment/locale/nl-be.js\",\n\t\"./nl.js\": \"../node_modules/moment/locale/nl.js\",\n\t\"./nn\": \"../node_modules/moment/locale/nn.js\",\n\t\"./nn.js\": \"../node_modules/moment/locale/nn.js\",\n\t\"./oc-lnc\": \"../node_modules/moment/locale/oc-lnc.js\",\n\t\"./oc-lnc.js\": \"../node_modules/moment/locale/oc-lnc.js\",\n\t\"./pa-in\": \"../node_modules/moment/locale/pa-in.js\",\n\t\"./pa-in.js\": \"../node_modules/moment/locale/pa-in.js\",\n\t\"./pl\": \"../node_modules/moment/locale/pl.js\",\n\t\"./pl.js\": \"../node_modules/moment/locale/pl.js\",\n\t\"./pt\": \"../node_modules/moment/locale/pt.js\",\n\t\"./pt-br\": \"../node_modules/moment/locale/pt-br.js\",\n\t\"./pt-br.js\": \"../node_modules/moment/locale/pt-br.js\",\n\t\"./pt.js\": \"../node_modules/moment/locale/pt.js\",\n\t\"./ro\": \"../node_modules/moment/locale/ro.js\",\n\t\"./ro.js\": \"../node_modules/moment/locale/ro.js\",\n\t\"./ru\": \"../node_modules/moment/locale/ru.js\",\n\t\"./ru.js\": \"../node_modules/moment/locale/ru.js\",\n\t\"./sd\": \"../node_modules/moment/locale/sd.js\",\n\t\"./sd.js\": \"../node_modules/moment/locale/sd.js\",\n\t\"./se\": \"../node_modules/moment/locale/se.js\",\n\t\"./se.js\": \"../node_modules/moment/locale/se.js\",\n\t\"./si\": \"../node_modules/moment/locale/si.js\",\n\t\"./si.js\": \"../node_modules/moment/locale/si.js\",\n\t\"./sk\": \"../node_modules/moment/locale/sk.js\",\n\t\"./sk.js\": \"../node_modules/moment/locale/sk.js\",\n\t\"./sl\": \"../node_modules/moment/locale/sl.js\",\n\t\"./sl.js\": \"../node_modules/moment/locale/sl.js\",\n\t\"./sq\": \"../node_modules/moment/locale/sq.js\",\n\t\"./sq.js\": \"../node_modules/moment/locale/sq.js\",\n\t\"./sr\": \"../node_modules/moment/locale/sr.js\",\n\t\"./sr-cyrl\": \"../node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr-cyrl.js\": \"../node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr.js\": \"../node_modules/moment/locale/sr.js\",\n\t\"./ss\": \"../node_modules/moment/locale/ss.js\",\n\t\"./ss.js\": \"../node_modules/moment/locale/ss.js\",\n\t\"./sv\": \"../node_modules/moment/locale/sv.js\",\n\t\"./sv.js\": \"../node_modules/moment/locale/sv.js\",\n\t\"./sw\": \"../node_modules/moment/locale/sw.js\",\n\t\"./sw.js\": \"../node_modules/moment/locale/sw.js\",\n\t\"./ta\": \"../node_modules/moment/locale/ta.js\",\n\t\"./ta.js\": \"../node_modules/moment/locale/ta.js\",\n\t\"./te\": \"../node_modules/moment/locale/te.js\",\n\t\"./te.js\": \"../node_modules/moment/locale/te.js\",\n\t\"./tet\": \"../node_modules/moment/locale/tet.js\",\n\t\"./tet.js\": \"../node_modules/moment/locale/tet.js\",\n\t\"./tg\": \"../node_modules/moment/locale/tg.js\",\n\t\"./tg.js\": \"../node_modules/moment/locale/tg.js\",\n\t\"./th\": \"../node_modules/moment/locale/th.js\",\n\t\"./th.js\": \"../node_modules/moment/locale/th.js\",\n\t\"./tk\": \"../node_modules/moment/locale/tk.js\",\n\t\"./tk.js\": \"../node_modules/moment/locale/tk.js\",\n\t\"./tl-ph\": \"../node_modules/moment/locale/tl-ph.js\",\n\t\"./tl-ph.js\": \"../node_modules/moment/locale/tl-ph.js\",\n\t\"./tlh\": \"../node_modules/moment/locale/tlh.js\",\n\t\"./tlh.js\": \"../node_modules/moment/locale/tlh.js\",\n\t\"./tr\": \"../node_modules/moment/locale/tr.js\",\n\t\"./tr.js\": \"../node_modules/moment/locale/tr.js\",\n\t\"./tzl\": \"../node_modules/moment/locale/tzl.js\",\n\t\"./tzl.js\": \"../node_modules/moment/locale/tzl.js\",\n\t\"./tzm\": \"../node_modules/moment/locale/tzm.js\",\n\t\"./tzm-latn\": \"../node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm-latn.js\": \"../node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm.js\": \"../node_modules/moment/locale/tzm.js\",\n\t\"./ug-cn\": \"../node_modules/moment/locale/ug-cn.js\",\n\t\"./ug-cn.js\": \"../node_modules/moment/locale/ug-cn.js\",\n\t\"./uk\": \"../node_modules/moment/locale/uk.js\",\n\t\"./uk.js\": \"../node_modules/moment/locale/uk.js\",\n\t\"./ur\": \"../node_modules/moment/locale/ur.js\",\n\t\"./ur.js\": \"../node_modules/moment/locale/ur.js\",\n\t\"./uz\": \"../node_modules/moment/locale/uz.js\",\n\t\"./uz-latn\": \"../node_modules/moment/locale/uz-latn.js\",\n\t\"./uz-latn.js\": \"../node_modules/moment/locale/uz-latn.js\",\n\t\"./uz.js\": \"../node_modules/moment/locale/uz.js\",\n\t\"./vi\": \"../node_modules/moment/locale/vi.js\",\n\t\"./vi.js\": \"../node_modules/moment/locale/vi.js\",\n\t\"./x-pseudo\": \"../node_modules/moment/locale/x-pseudo.js\",\n\t\"./x-pseudo.js\": \"../node_modules/moment/locale/x-pseudo.js\",\n\t\"./yo\": \"../node_modules/moment/locale/yo.js\",\n\t\"./yo.js\": \"../node_modules/moment/locale/yo.js\",\n\t\"./zh-cn\": \"../node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-cn.js\": \"../node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-hk\": \"../node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-hk.js\": \"../node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-mo\": \"../node_modules/moment/locale/zh-mo.js\",\n\t\"./zh-mo.js\": \"../node_modules/moment/locale/zh-mo.js\",\n\t\"./zh-tw\": \"../node_modules/moment/locale/zh-tw.js\",\n\t\"./zh-tw.js\": \"../node_modules/moment/locale/zh-tw.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"../node_modules/moment/locale sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///../node_modules/moment/locale/_sync_^\\.\\/.*$?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_chart_js_dist_Chart_js-node_mod-a6ec6c"],
/******/ 			["./js/main.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_chart_js_dist_Chart_js-node_mod-a6ec6c"]
/******/ 		];
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
/******/ 		var checkDeferredModules = function() {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = function() {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;