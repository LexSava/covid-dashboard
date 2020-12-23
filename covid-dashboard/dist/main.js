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
/*!*********************!*\
  !*** ./js/babel.js ***!
  \*********************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack:///./js/babel.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./babel */ \"./js/babel.js\");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _widget_zero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget.zero */ \"./js/widget.zero.js\");\n/* harmony import */ var _widget_zero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_widget_zero__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/css/style.css */ \"./styles/css/style.css\");\n/* harmony import */ var _styles_sass_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/sass/style.scss */ \"./styles/sass/style.scss\");\n/* harmony import */ var _styles_css_fonts_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/css/fonts.css */ \"./styles/css/fonts.css\");\n/* harmony import */ var _map_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-script */ \"./js/map-script.js\");\n/* harmony import */ var _styles_css_map_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/css/map-style.css */ \"./styles/css/map-style.css\");\n/* harmony import */ var _widget_four__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget.four */ \"./js/widget.four.js\");\n/* harmony import */ var _widget_two__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget.two */ \"./js/widget.two.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/map-script.js":
/*!**************************!*\
  !*** ./js/map-script.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_icon_icons8_filled_circle_60_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icon/icons8-filled-circle-60.png */ \"./assets/icon/icons8-filled-circle-60.png\");\n/* harmony import */ var _assets_icon_icons8_filled_green_circle_60_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icon/icons8-filled-green-circle-60.png */ \"./assets/icon/icons8-filled-green-circle-60.png\");\n/* harmony import */ var _assets_icon_icons8_cancel_50_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icon/icons8-cancel-50.png */ \"./assets/icon/icons8-cancel-50.png\");\n/* harmony import */ var _assets_icon_icons8_center_of_gravity_50_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icon/icons8-center-of-gravity-50.png */ \"./assets/icon/icons8-center-of-gravity-50.png\");\n/* harmony import */ var _assets_icon_icons8_zoom_in_50_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icon/icons8-zoom-in-50.png */ \"./assets/icon/icons8-zoom-in-50.png\");\n/* harmony import */ var _assets_icon_icons8_bookmark_100_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icon/icons8-bookmark-100.png */ \"./assets/icon/icons8-bookmark-100.png\");\n/* harmony import */ var _assets_icon_icons8_list_52_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icon/icons8-list-52.png */ \"./assets/icon/icons8-list-52.png\");\n/* harmony import */ var _assets_icon_icons8_categorize_50_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icon/icons8-categorize-50.png */ \"./assets/icon/icons8-categorize-50.png\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\nfunction create_element(type, options) {\n  var elem = document.createElement(type);\n  elem.className = options[0];\n  elem.id = options[1];\n  if (options[2] !== undefined) elem.setAttribute(options[2], options[3]);\n  elem.innerHTML = options[4];\n  options[5].append(elem);\n  return elem;\n}\n\nvar check = {\n  cumulative: true,\n  active: false\n};\ndocument.querySelector('.widget_3').innerHTML = '';\ncreate_element('div', ['wrapper-map-class', 'wrapper-map-id',,, '', document.querySelector('.widget_3')]);\ncreate_element('div', ['map-class', 'map-id',,, '', document.querySelector('.wrapper-map-class')]);\ncreate_element('div', ['feature-info-class', 'feature-info-id',,, '', document.querySelector('.map-class')]);\ncreate_element('div', ['info-class', 'info-id',,, '', document.querySelector('.feature-info-class')]);\ncreate_element('p', ['paragraph-class', 'paragraph1-id',,, '', document.querySelector('.info-class')]);\ncreate_element('span', ['span-name-class', 'span-name-country-id',,, 'Country: ', document.getElementById('paragraph1-id')]);\ncreate_element('span', ['span-value-class', 'span-value-country-id',,, '', document.getElementById('paragraph1-id')]);\ncreate_element('p', ['paragraph-class', 'paragraph2-id',,, '', document.querySelector('.info-class')]);\ncreate_element('span', ['span-name-class', 'span-name-cases-id',,, 'Cases: ', document.getElementById('paragraph2-id')]);\ncreate_element('span', ['span-value-class', 'span-value-cases-id',,, '', document.getElementById('paragraph2-id')]);\ncreate_element('p', ['paragraph-class', 'paragraph3-id',,, '', document.querySelector('.info-class')]);\ncreate_element('span', ['span-name-class', 'span-name-deaths-id',,, 'Deaths: ', document.getElementById('paragraph3-id')]);\ncreate_element('span', ['span-value-class', 'span-value-deaths-id',,, '', document.getElementById('paragraph3-id')]);\ncreate_element('p', ['paragraph-class', 'paragraph4-id',,, '', document.querySelector('.info-class')]);\ncreate_element('span', ['span-name-class', 'span-name-recovered-id',,, 'Recovered: ', document.getElementById('paragraph4-id')]);\ncreate_element('span', ['span-value-class', 'span-value-recovered-id',,, '', document.getElementById('paragraph4-id')]);\ncreate_element('p', ['paragraph-class', 'paragraph5-id',,, '', document.querySelector('.info-class')]);\ncreate_element('span', ['span-name-class', 'span-name-active-id',,, 'Active: ', document.getElementById('paragraph5-id')]);\ncreate_element('span', ['span-value-class', 'span-value-active-id',,, '', document.getElementById('paragraph5-id')]);\ncreate_element('div', ['close-class', 'close-id',,, \"<img class = \\\"close-image-class\\\" src=\".concat(_assets_icon_icons8_cancel_50_png__WEBPACK_IMPORTED_MODULE_2__.default, \">\"), document.querySelector('.map-class')]);\ncreate_element('div', ['center-class', 'center-id',,, \"<img class = \\\"center-image-class\\\" src=\".concat(_assets_icon_icons8_center_of_gravity_50_png__WEBPACK_IMPORTED_MODULE_3__.default, \">\"), document.querySelector('.map-class')]);\ncreate_element('div', ['zoomin-class', 'zoomin-id',,, \"<img class = \\\"zoomin-image-class\\\" src=\".concat(_assets_icon_icons8_zoom_in_50_png__WEBPACK_IMPORTED_MODULE_4__.default, \">\"), document.querySelector('.map-class')]);\ncreate_element('div', ['button-class active-class', 'cumulative-cases-id',,, '', document.querySelector('.map-class')]);\ncreate_element('div', ['button-text-class', 'cumulative-cases-text-id',,, 'Cumulative Cases', document.getElementById('cumulative-cases-id')]);\ncreate_element('div', ['button-class passive-class', 'active-cases-id',,, '', document.querySelector('.map-class')]);\ncreate_element('div', ['button-text-class', 'active-cases-text-id',,, 'Active Cases', document.getElementById('active-cases-id')]);\ncreate_element('div', ['options-class', 'options-id',,, '', document.querySelector('.map-class')]);\ncreate_element('div', ['zoom-reg-button-class', 'zoom-reg-button-id',,, \"<img class = \\\"zoom-reg-image-class\\\" src=\".concat(_assets_icon_icons8_bookmark_100_png__WEBPACK_IMPORTED_MODULE_5__.default, \">\"), document.querySelector('.options-class')]);\ncreate_element('div', ['legend-button-class', 'legend-button-id',,, \"<img class = \\\"legend-image-class\\\" src=\".concat(_assets_icon_icons8_list_52_png__WEBPACK_IMPORTED_MODULE_6__.default, \">\"), document.querySelector('.options-class')]);\ncreate_element('div', ['skins-button-class', 'skins-button-id',,, \"<img class = \\\"skins-image-class\\\" src=\".concat(_assets_icon_icons8_categorize_50_png__WEBPACK_IMPORTED_MODULE_7__.default, \">\"), document.querySelector('.options-class')]);\ncreate_element('div', ['legend-class', 'legend-id',,, '', document.querySelector('.map-class')]);\ncreate_element('div', ['close-legend-class', 'close-legend-id',,, \"<img class = \\\"close-image-legend-class\\\" src=\".concat(_assets_icon_icons8_cancel_50_png__WEBPACK_IMPORTED_MODULE_2__.default, \">\"), document.querySelector('.legend-class')]);\ncreate_element('div', ['legend-text-class', 'legend-text-id',,, '', document.querySelector('.legend-class')]);\ncreate_element('div', ['region-class', 'region-id',,, '', document.querySelector('.map-class')]);\ncreate_element('div', ['close-region-class', 'close-region-id',,, \"<img class = \\\"close-image-region-class\\\" src=\".concat(_assets_icon_icons8_cancel_50_png__WEBPACK_IMPORTED_MODULE_2__.default, \">\"), document.querySelector('.region-class')]);\ncreate_element('div', ['region-text-class', 'region-text-id',,, '', document.querySelector('.region-class')]);\n\nfunction create_legend() {\n  document.getElementById('legend-text-id').innerHTML = '';\n  var legend_icon;\n  if (check.cumulative) legend_icon = _assets_icon_icons8_filled_circle_60_png__WEBPACK_IMPORTED_MODULE_0__.default;else if (check.active) legend_icon = _assets_icon_icons8_filled_green_circle_60_png__WEBPACK_IMPORTED_MODULE_1__.default;\n  create_element('p', ['p-class', 'p-legend-1-id',,, \"<img src = \".concat(legend_icon, \" style = 'width: 25px; height: 25px;'> > 10,000,000\"), document.querySelector('.legend-text-class')]);\n  create_element('p', ['p-class', 'p-legend-2-id',,, \"<img src = \".concat(legend_icon, \" style = 'width: 20px; height: 20px; margin-right: 2.5px;'> 1,000,000 - 10,000,000\"), document.querySelector('.legend-text-class')]);\n  create_element('p', ['p-class', 'p-legend-3-id',,, \"<img src = \".concat(legend_icon, \" style = 'width: 15px; height: 15px; margin-right: 5px;'> 100,000 - 1,000,000\"), document.querySelector('.legend-text-class')]);\n  create_element('p', ['p-class', 'p-legend-4-id',,, \"<img src = \".concat(legend_icon, \" style = 'width: 10px; height: 10px; margin-right: 7.5px;'> 10,000 - 100,000\"), document.querySelector('.legend-text-class')]);\n  create_element('p', ['p-class', 'p-legend-5-id',,, \"<img src = \".concat(legend_icon, \" style = 'width: 5px; height: 5px; margin-right: 10px;'> < 10,000\"), document.querySelector('.legend-text-class')]);\n}\n\ncreate_legend();\ncreate_element('p', ['p-class p-region-class', 'p-region-1-id',,, 'Default world map', document.querySelector('.region-text-class')]);\ncreate_element('p', ['p-class p-region-class', 'p-region-2-id',,, 'China', document.querySelector('.region-text-class')]);\ncreate_element('p', ['p-class p-region-class', 'p-region-3-id',,, 'Australia', document.querySelector('.region-text-class')]);\ncreate_element('p', ['p-class p-region-class', 'p-region-4-id',,, 'North America', document.querySelector('.region-text-class')]);\ncreate_element('p', ['p-class p-region-class', 'p-region-5-id',,, 'Europe', document.querySelector('.region-text-class')]);\nvar osmap = L.map('map-id', {\n  scrollWheelZoom: true,\n  zoomControl: false\n}).setView([10, 0], 2);\nL.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {\n  attribution: '&copy; <a href=\"https://stadiamaps.com/\">Stadia Maps</a>, &copy; <a href=\"https://openmaptiles.org/\">OpenMapTiles</a> &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors'\n}).addTo(osmap);\nnew L.Control.Zoom({\n  position: 'bottomright'\n}).addTo(osmap);\n\nfunction getCountries() {\n  return _getCountries.apply(this, arguments);\n}\n\nfunction _getCountries() {\n  _getCountries = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, content, _loop, key;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('https://disease.sh/v2/countries');\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            content = _context.sent;\n\n            _loop = function _loop(key) {\n              var x = void 0;\n              var y = void 0;\n\n              if (content[key].cases > 10000000) {\n                x = 25;\n                y = 25;\n              } else if (content[key].cases > 1000000 && content[key].cases < 9999999) {\n                x = 20;\n                y = 20;\n              } else if (content[key].cases > 100000 && content[key].cases < 999999) {\n                x = 15;\n                y = 15;\n              } else if (content[key].cases > 10000 && content[key].cases < 99999) {\n                x = 10;\n                y = 10;\n              } else {\n                x = 5;\n                y = 5;\n              }\n\n              var icon_fill = void 0;\n              var tooltip_content = void 0;\n\n              if (check.cumulative) {\n                icon_fill = _assets_icon_icons8_filled_circle_60_png__WEBPACK_IMPORTED_MODULE_0__.default;\n                tooltip_content = \"Country: \".concat(content[key].country, \" <br> \\n        Cases: \").concat(content[key].cases.toLocaleString(), \" <br> Deaths: \").concat(content[key].deaths.toLocaleString());\n                document.getElementById('paragraph4-id').style.display = 'none';\n                document.getElementById('paragraph5-id').style.display = 'none';\n                document.querySelector('.feature-info-class').style.height = '155px';\n                document.querySelector('.info-class').style.height = '77px';\n                document.querySelector('.center-class').style.top = '134px';\n                document.querySelector('.zoomin-class').style.top = '134px';\n              } else if (check.active) {\n                icon_fill = _assets_icon_icons8_filled_green_circle_60_png__WEBPACK_IMPORTED_MODULE_1__.default;\n                tooltip_content = \"Country: \".concat(content[key].country, \" <br> \\n        Cases: \").concat(content[key].cases.toLocaleString(), \" <br> Deaths: \").concat(content[key].deaths.toLocaleString(), \" <br> \\n        Recovered: \").concat(content[key].recovered.toLocaleString(), \" <br> Active: \").concat(content[key].active.toLocaleString());\n                document.getElementById('paragraph4-id').style.display = 'block';\n                document.getElementById('paragraph5-id').style.display = 'block';\n                document.querySelector('.feature-info-class').style.height = '207px';\n                document.querySelector('.info-class').style.height = '129px';\n                document.querySelector('.center-class').style.top = '186px';\n                document.querySelector('.zoomin-class').style.top = '186px';\n              }\n\n              var myIcon = L.icon({\n                iconUrl: icon_fill,\n                iconSize: [x, y]\n              });\n              var tooltip = L.tooltip({\n                direction: 'top'\n              }).setContent(tooltip_content);\n              var mark = L.marker([content[key].countryInfo.lat, content[key].countryInfo.long], {\n                icon: myIcon\n              }).addTo(osmap).bindTooltip(tooltip);\n              mark.addEventListener('click', function () {\n                document.querySelector('.feature-info-class').style.display = 'flex';\n                document.querySelector('.close-class').style.display = 'flex';\n                document.querySelector('.center-class').style.display = 'flex';\n                document.querySelector('.zoomin-class').style.display = 'flex';\n                document.getElementById('span-value-country-id').innerHTML = content[key].country;\n                document.getElementById('span-value-cases-id').innerHTML = content[key].cases.toLocaleString();\n                document.getElementById('span-value-deaths-id').innerHTML = content[key].deaths.toLocaleString();\n                document.getElementById('span-value-recovered-id').innerHTML = content[key].recovered.toLocaleString();\n                document.getElementById('span-value-active-id').innerHTML = content[key].active.toLocaleString();\n                var lat = content[key].countryInfo.lat;\n                var lon = content[key].countryInfo.long;\n                document.getElementById('center-id').addEventListener('click', function () {\n                  osmap.setView([lat, lon]);\n                });\n                document.getElementById('zoomin-id').addEventListener('click', function () {\n                  osmap.setView([lat, lon], 6);\n                });\n              });\n            };\n\n            for (key in content) {\n              _loop(key);\n            }\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getCountries.apply(this, arguments);\n}\n\ndocument.getElementById('close-id').addEventListener('click', function () {\n  document.querySelector('.feature-info-class').style.display = 'none';\n  document.querySelector('.close-class').style.display = 'none';\n  document.querySelector('.center-class').style.display = 'none';\n  document.querySelector('.zoomin-class').style.display = 'none';\n});\ndocument.getElementById('active-cases-id').addEventListener('click', function () {\n  check.cumulative = false;\n  check.active = true;\n  document.getElementById('cumulative-cases-id').className = 'button-class passive-class';\n  document.getElementById('active-cases-id').className = 'button-class active-class';\n  getCountries();\n  create_legend();\n});\ndocument.getElementById('cumulative-cases-id').addEventListener('click', function () {\n  check.cumulative = true;\n  check.active = false;\n  document.getElementById('cumulative-cases-id').className = 'button-class active-class';\n  document.getElementById('active-cases-id').className = 'button-class passive-class';\n  getCountries();\n  create_legend();\n});\ngetCountries();\ndocument.getElementById('legend-button-id').addEventListener('click', function () {\n  document.getElementById('legend-id').style.display = 'flex';\n  document.getElementById('region-id').style.display = 'none';\n});\ndocument.querySelector('.close-image-legend-class').addEventListener('click', function () {\n  document.getElementById('legend-id').style.display = 'none';\n});\ndocument.getElementById('zoom-reg-button-id').addEventListener('click', function () {\n  document.getElementById('region-id').style.display = 'flex';\n  document.getElementById('legend-id').style.display = 'none';\n});\ndocument.querySelector('.close-image-region-class').addEventListener('click', function () {\n  document.getElementById('region-id').style.display = 'none';\n});\ndocument.getElementById('p-region-1-id').addEventListener('click', function () {\n  osmap.setView([10, 0], 2);\n});\ndocument.getElementById('p-region-2-id').addEventListener('click', function () {\n  osmap.setView([30, 100], 3);\n});\ndocument.getElementById('p-region-3-id').addEventListener('click', function () {\n  osmap.setView([-18, 135], 3);\n});\ndocument.getElementById('p-region-4-id').addEventListener('click', function () {\n  osmap.setView([50, -97], 3);\n});\ndocument.getElementById('p-region-5-id').addEventListener('click', function () {\n  osmap.setView([55, 10], 4);\n});\n\n//# sourceURL=webpack:///./js/map-script.js?");

/***/ }),

/***/ "./js/widget-table.js":
/*!****************************!*
  !*** ./js/widget-table.js ***!
  \****************************/
/***/ (function() {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// const diseasesElement = document.querySelector('.count_diseases');\n// const deathsElement = document.querySelector('.count_deaths');\n// const recoveredElement = document.querySelector('.count_recovered');\n// async function getCountries () {\n//   const response = await fetch(https://api.covid19api.com/summary);\n//   const content = await response.json();\n//   const diseases = content.Global.TotalConfirmed;\n//   const deaths = content.Global.TotalDeaths;\n//   const recovered = content.Global.TotalRecovered;\n//   console.log(diseases, deaths, recovered);\n//   diseasesElement.textContent = diseases;\n//   deathsElement.textContent = deaths;\n//   recoveredElement.textContent = recovered;\n// }\n// getCountries();\nvar categoryButtonPeriod = document.querySelector('.category-name_period');\nvar categoryButtonValue = document.querySelector('.category-name_value');\n\nvar Table = /*#__PURE__*/function () {\n  function Table(url) {\n    _classCallCheck(this, Table);\n\n    this.url = url;\n    this.period = 'all';\n    this.value = 'absolute';\n  }\n\n  _createClass(Table, [{\n    key: \"getRequest\",\n    value: function () {\n      var _getRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var response, content;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(this.url);\n\n              case 2:\n                response = _context.sent;\n                _context.next = 5;\n                return response.json();\n\n              case 5:\n                content = _context.sent;\n                this.content = content;\n                this.getData(content);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getRequest() {\n        return _getRequest.apply(this, arguments);\n      }\n\n      return getRequest;\n    }() // if (this.period === 'all') {\n    //   if (this.value === 'perOneHundredThousand') {\n    //     this.cases = content.casesPerOneMillion * 10;\n    //     this.deaths = content.deathsPerOneMillion * 10;\n    //     this.recovered = content.recoveredPerOneMillion * 10; \n    //   } else if (this.value === 'absolute') {\n    //     this.cases = content.cases;\n    //     this.deaths = content.deaths;\n    //     this.recovered = content.recovered; \n    //   }\n    // } else if (this.period === 'today') {\n    //   this.cases = content.todayCases;\n    //   this.deaths = content.todayDeaths;\n    //   this.recovered = content.todayRecovered;\n    // }\n\n  }, {\n    key: \"getData\",\n    value: function getData(content) {\n      switch (this.period) {\n        case 'all':\n          switch (this.value) {\n            case 'absolute':\n              this.cases = content.cases;\n              this.deaths = content.deaths;\n              this.recovered = content.recovered;\n              break;\n\n            case 'perOneHundredThousand':\n              this.cases = Math.round(content.casesPerOneMillion * 10);\n              this.deaths = Math.round(content.deathsPerOneMillion * 10);\n              this.recovered = Math.round(content.recoveredPerOneMillion * 10);\n              break;\n          }\n\n          break;\n\n        case 'today':\n          switch (this.value) {\n            case 'absolute':\n              this.cases = content.todayCases;\n              this.deaths = content.todayDeaths;\n              this.recovered = content.todayRecovered;\n              break;\n\n            case 'perOneHundredThousand':\n              this.cases = Math.round(content.todayCases);\n              this.deaths = Math.round(content.todayDeaths);\n              this.recovered = Math.round(content.todayRecovered);\n              break;\n          }\n\n          break;\n      }\n\n      this.updateTextElements();\n    }\n  }, {\n    key: \"updateTextElements\",\n    value: function updateTextElements() {\n      document.querySelector('.count_cases').textContent = this.cases;\n      document.querySelector('.count_deaths').textContent = this.deaths;\n      document.querySelector('.count_recovered').textContent = this.recovered;\n    }\n  }, {\n    key: \"changeCategoryPeriod\",\n    value: function changeCategoryPeriod() {\n      if (categoryButtonPeriod.textContent === 'All period') {\n        this.period = 'today';\n        categoryButtonPeriod.textContent = 'Last day';\n      } else {\n        this.period = 'all';\n        categoryButtonPeriod.textContent = 'All period';\n      }\n    }\n  }, {\n    key: \"changeCategoryValue\",\n    value: function changeCategoryValue() {\n      if (categoryButtonValue.textContent === 'Absolute') {\n        this.value = 'perOneHundredThousand';\n        categoryButtonValue.textContent = 'Per 100.000';\n      } else {\n        this.value = 'absolute';\n        categoryButtonValue.textContent = 'Absolute';\n      }\n    }\n  }]);\n\n  return Table;\n}();\n\nvar url = 'https://disease.sh/v3/covid-19/all';\nvar table = new Table(url);\ntable.getRequest();\ncategoryButtonPeriod.addEventListener('click', function () {\n  table.changeCategoryPeriod();\n  table.getRequest();\n  console.log('Period...');\n});\ncategoryButtonValue.addEventListener('click', function () {\n  table.changeCategoryValue();\n  table.getRequest();\n  console.log('Value...');\n});\n\n//# sourceURL=webpack:///./js/widget-table.js?");

/***/ }),

/***/ "./js/widget.four.js":
/*!***************************!*\
  !*** ./js/widget.four.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"../node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar BTN_EXPAND_BLOCK_4 = document.querySelector('.widget_4__btn');\nvar BLOCK_WIDGET_4 = document.querySelector('.widget_4');\nvar SELECT_COUNTRYS = document.querySelector('.dropdown-select');\nvar D = new Date('01/20/20');\nvar Till = new Date();\nvar ARRAY_OF_DATES = [];\nvar ctx = document.getElementById('myChart').getContext('2d');\n\nfunction pad(s) {\n  return \"00\".concat(s).slice(-2);\n}\n\nwhile (D.getTime() < Till.getTime()) {\n  ARRAY_OF_DATES.push(\"\".concat(D.getFullYear(), \"-\").concat(pad(D.getMonth() + 1), \"-\").concat(pad(D.getDate())));\n  D.setDate(D.getDate() + 1);\n}\n\nvar LineGraph;\nvar BarGraph;\n\nfunction BuildGraphWithData() {\n  return _BuildGraphWithData.apply(this, arguments);\n}\n\nfunction _BuildGraphWithData() {\n  _BuildGraphWithData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, results, arrCasesValue, arrDeathsValue, arrRecoveredValue;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=366');\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            results = _context.sent;\n            arrCasesValue = Object.values(results.cases);\n            arrDeathsValue = Object.values(results.deaths);\n            arrRecoveredValue = Object.values(results.recovered);\n            LineGraph = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(ctx, {\n              type: 'line',\n              data: {\n                labels: ARRAY_OF_DATES,\n                datasets: [{\n                  label: 'Cases',\n                  // Название\n                  backgroundColor: 'rgba(255, 206, 86, 0.2)',\n                  borderColor: 'rgba(255, 206, 86, 1)',\n                  pointBackgroundColor: 'rgba(255, 206, 86, 1)',\n                  pointBorderWidth: 1,\n                  pointRadius: 1,\n                  data: arrCasesValue\n                }, {\n                  label: 'Deaths',\n                  // Название\n                  backgroundColor: 'rgba(153, 102, 255, 0.2)',\n                  borderColor: 'rgba(153, 102, 255, 1)',\n                  pointBackgroundColor: 'rgba(153, 102, 255, 1)',\n                  pointBorderWidth: 1,\n                  pointRadius: 1,\n                  data: arrDeathsValue\n                }, {\n                  label: 'Recovered',\n                  // Название\n                  backgroundColor: 'rgba(54, 162, 235, 0.2)',\n                  borderColor: 'rgba(54, 162, 235, 1)',\n                  pointBackgroundColor: 'rgba(54, 162, 235, 1)',\n                  pointBorderWidth: 1,\n                  pointRadius: 1,\n                  data: arrRecoveredValue\n                }]\n              },\n              options: {\n                legend: {\n                  labels: {\n                    fontColor: 'white'\n                  }\n                },\n                scales: {\n                  xAxes: [{\n                    type: 'time',\n                    time: {\n                      displayFormats: {\n                        quarter: 'MMM YYYY'\n                      }\n                    }\n                  }],\n                  yAxes: [{\n                    ticks: {\n                      callback: function callback(value) {\n                        return \"\".concat(value / 1000000, \" M\");\n                      }\n                    }\n                  }]\n                }\n              }\n            });\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _BuildGraphWithData.apply(this, arguments);\n}\n\nfunction BuildGraphByCountry(_x) {\n  return _BuildGraphByCountry.apply(this, arguments);\n}\n\nfunction _BuildGraphByCountry() {\n  _BuildGraphByCountry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(countryNeme) {\n    var response, results, newArrDate, key;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch('https://disease.sh/v2/countries');\n\n          case 2:\n            response = _context2.sent;\n            _context2.next = 5;\n            return response.json();\n\n          case 5:\n            results = _context2.sent;\n            newArrDate = [];\n\n            for (key in results) {\n              if (results[key].country === countryNeme) {\n                newArrDate.push(results[key].cases);\n                newArrDate.push(results[key].deaths);\n                newArrDate.push(results[key].recovered);\n              }\n            }\n\n            BarGraph = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(ctx, {\n              type: 'bar',\n              data: {\n                labels: ['Cases', 'Deaths', 'Recovered'],\n                datasets: [{\n                  label: 'Contry',\n                  data: newArrDate,\n                  backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(54, 162, 235, 0.2)'],\n                  borderColor: ['rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)', 'rgba(54, 162, 235, 1)'],\n                  borderWidth: 1\n                }]\n              },\n              options: {\n                scales: {\n                  yAxes: [{\n                    ticks: {\n                      beginAtZero: true\n                    }\n                  }]\n                }\n              }\n            });\n\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _BuildGraphByCountry.apply(this, arguments);\n}\n\nfunction BuilGraphIndicatorsDay() {\n  return _BuilGraphIndicatorsDay.apply(this, arguments);\n}\n\nfunction _BuilGraphIndicatorsDay() {\n  _BuilGraphIndicatorsDay = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var response, results, newArrDate;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return fetch('https://api.covid19api.com/summary');\n\n          case 2:\n            response = _context3.sent;\n            _context3.next = 5;\n            return response.json();\n\n          case 5:\n            results = _context3.sent;\n            newArrDate = [];\n            console.log(results.Global.NewConfirmed);\n            newArrDate.push(results.Global.NewConfirmed);\n            newArrDate.push(results.Global.NewDeaths);\n            newArrDate.push(results.Global.NewRecovered);\n            BarGraph = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(ctx, {\n              type: 'bar',\n              data: {\n                labels: ['Cases', 'Deaths', 'Recovered'],\n                datasets: [{\n                  label: 'Contry',\n                  data: newArrDate,\n                  backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(54, 162, 235, 0.2)'],\n                  borderColor: ['rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)', 'rgba(54, 162, 235, 1)'],\n                  borderWidth: 1\n                }]\n              },\n              options: {\n                scales: {\n                  yAxes: [{\n                    ticks: {\n                      beginAtZero: true\n                    }\n                  }]\n                }\n              }\n            });\n\n          case 12:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _BuilGraphIndicatorsDay.apply(this, arguments);\n}\n\nBTN_EXPAND_BLOCK_4.addEventListener('click', function () {\n  BLOCK_WIDGET_4.classList.toggle('active');\n});\n\nfunction getNewOption(content) {\n  var NewOption = document.createElement('option');\n  NewOption.innerHTML = content;\n  NewOption.setAttribute('value', \"\".concat(content));\n  return NewOption;\n}\n\nfunction GetInformationThroughoutTheCountry() {\n  return _GetInformationThroughoutTheCountry.apply(this, arguments);\n}\n\nfunction _GetInformationThroughoutTheCountry() {\n  _GetInformationThroughoutTheCountry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n    var response, results, key;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return fetch('https://disease.sh/v2/countries');\n\n          case 2:\n            response = _context4.sent;\n            _context4.next = 5;\n            return response.json();\n\n          case 5:\n            results = _context4.sent;\n\n            for (key in results) {\n              SELECT_COUNTRYS.appendChild(getNewOption(\"\".concat(results[key].country)));\n            }\n\n          case 7:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _GetInformationThroughoutTheCountry.apply(this, arguments);\n}\n\nGetInformationThroughoutTheCountry();\n\nSELECT_COUNTRYS.onchange = function () {\n  if (SELECT_COUNTRYS.value === 'All countries') {\n    BarGraph.destroy();\n    LineGraph.destroy();\n    BuildGraphWithData();\n  } else if (SELECT_COUNTRYS.value === 'Last day') {\n    if (BarGraph !== undefined) {\n      BarGraph.destroy();\n    }\n\n    LineGraph.destroy();\n    BuilGraphIndicatorsDay();\n  } else {\n    if (BarGraph !== undefined) {\n      BarGraph.destroy();\n    }\n\n    LineGraph.destroy();\n    BuildGraphByCountry(SELECT_COUNTRYS.value);\n  }\n};\n\nBuildGraphWithData();\n\n//# sourceURL=webpack:///./js/widget.four.js?");

/***/ }),

/***/ "./js/widget.two.js":
/*!**************************!*\
  !*** ./js/widget.two.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": function() { return /* binding */ search; },\n/* harmony export */   \"selectedCountry\": function() { return /* binding */ selectedCountry; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar WIDGET_TWO = document.querySelector('.widget_2');\nvar COUNTRY_BLOCK = document.querySelector('.widget__two__block__countries');\nvar CASES_DATA = document.querySelector('.cases');\nvar DEATHS_DATA = document.querySelector('.deaths');\nvar RECOVERED_DATA = document.querySelector('.recovered');\nvar PROPOSED_COUNTRIES = document.querySelector('#countrys');\nvar BTN_EXPAND_BLOCK_2 = document.querySelector('.widget__two__btn');\nvar search = document.querySelector('#search');\nvar results;\nvar dataObtained;\nvar selectedCountry;\n\nfunction CreatesListCountries(flag, country, indicator) {\n  var newСountryСontainer = document.createElement('div');\n  newСountryСontainer.classList.add('widget__two__countries');\n  COUNTRY_BLOCK.appendChild(newСountryСontainer);\n  var newFlagImage = document.createElement('img');\n  newFlagImage.classList.add('widget__two__flag');\n  newFlagImage.src = flag;\n  var newNameCountry = document.createElement('span');\n  newNameCountry.classList.add('widget__two__name__countries');\n  newNameCountry.innerHTML = country;\n  var newIndicatorCountry = document.createElement('span');\n  newIndicatorCountry.classList.add('widget__two__indicator__countries');\n  newIndicatorCountry.innerHTML = \" - \".concat(indicator);\n  newСountryСontainer.appendChild(newFlagImage);\n  newСountryСontainer.appendChild(newNameCountry);\n  newСountryСontainer.appendChild(newIndicatorCountry);\n}\n\nfunction GetCountryData(_x) {\n  return _GetCountryData.apply(this, arguments);\n}\n\nfunction _GetCountryData() {\n  _GetCountryData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(val) {\n    var response;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch('https://disease.sh/v2/countries');\n\n          case 2:\n            response = _context2.sent;\n            _context2.next = 5;\n            return response.json();\n\n          case 5:\n            results = _context2.sent;\n\n            if (val === 2) {\n              sortingByDeaths();\n            } else if (val === 3) {\n              sortingByRecovered();\n            } else {\n              sortingByCases();\n            }\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _GetCountryData.apply(this, arguments);\n}\n\nfunction sortingByCases() {\n  while (COUNTRY_BLOCK.firstChild) {\n    COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);\n  }\n\n  results.sort(function (a, b) {\n    return b.cases - a.cases;\n  });\n\n  for (var key in results) {\n    CreatesListCountries(results[key].countryInfo.flag, results[key].country, results[key].cases);\n  }\n}\n\nfunction sortingByDeaths() {\n  while (COUNTRY_BLOCK.firstChild) {\n    COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);\n  }\n\n  results.sort(function (a, b) {\n    return b.deaths - a.deaths;\n  });\n\n  for (var key in results) {\n    CreatesListCountries(results[key].countryInfo.flag, results[key].country, results[key].deaths);\n  }\n}\n\nfunction sortingByRecovered() {\n  while (COUNTRY_BLOCK.firstChild) {\n    COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);\n  }\n\n  results.sort(function (a, b) {\n    return b.recovered - a.recovered;\n  });\n\n  for (var key in results) {\n    CreatesListCountries(results[key].countryInfo.flag, results[key].country, results[key].recovered);\n  }\n}\n\nCASES_DATA.addEventListener('click', function () {\n  return GetCountryData(1);\n});\nDEATHS_DATA.addEventListener('click', function () {\n  return GetCountryData(2);\n});\nRECOVERED_DATA.addEventListener('click', function () {\n  return GetCountryData(3);\n});\nGetCountryData(1);\n\nvar searchStates = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchText) {\n    var response, matches;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('https://disease.sh/v2/countries');\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            dataObtained = _context.sent;\n            matches = dataObtained.filter(function (state) {\n              var regex = new RegExp(\"^\".concat(searchText), 'gi');\n              return state.country.match(regex);\n            });\n\n            if (searchText.length === 0) {\n              GetCountryData(1);\n              matches = [];\n            }\n\n            outputHtml(matches);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function searchStates(_x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar outputHtml = function outputHtml(matches) {\n  while (COUNTRY_BLOCK.firstChild) {\n    COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);\n  }\n\n  while (PROPOSED_COUNTRIES.firstChild) {\n    PROPOSED_COUNTRIES.removeChild(PROPOSED_COUNTRIES.firstChild);\n  }\n\n  if (matches.length > 0) {\n    matches.map(function (match) {\n      var newСountryСontainer = document.createElement('div');\n      newСountryСontainer.classList.add('widget__two__countries');\n      COUNTRY_BLOCK.appendChild(newСountryСontainer);\n      var newOption = document.createElement('option');\n      newOption.innerHTML = \"\".concat(match.country);\n      var newFlagImage = document.createElement('img');\n      newFlagImage.classList.add('widget__two__flag');\n      newFlagImage.src = \"\".concat(match.countryInfo.flag);\n      var newNameCountry = document.createElement('span');\n      newNameCountry.classList.add('widget__two__name__countries');\n      newNameCountry.innerHTML = \"\".concat(match.country);\n      var newIndicatorCountry = document.createElement('span');\n      newIndicatorCountry.classList.add('widget__two__indicator__countries');\n      newIndicatorCountry.innerHTML = \" - \".concat(match.cases);\n      PROPOSED_COUNTRIES.appendChild(newOption);\n      newСountryСontainer.appendChild(newFlagImage);\n      newСountryСontainer.appendChild(newNameCountry);\n      newСountryСontainer.appendChild(newIndicatorCountry);\n    });\n  }\n};\n\nsearch.addEventListener('input', function () {\n  searchStates(search.value);\n});\nBTN_EXPAND_BLOCK_2.addEventListener('click', function () {\n  WIDGET_TWO.classList.toggle('active__widget__two');\n});\n\n//# sourceURL=webpack:///./js/widget.two.js?");

/***/ }),

/***/ "./js/widget.zero.js":
/*!***************************!*\
  !*** ./js/widget.zero.js ***!
  \***************************/
/***/ (function() {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar widget_zero = document.querySelector('.widget_0');\nwidget_zero.classList.add('general__information');\n\nfunction getResponseAllCases() {\n  return _getResponseAllCases.apply(this, arguments);\n}\n\nfunction _getResponseAllCases() {\n  _getResponseAllCases = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, content;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('https://disease.sh/v3/covid-19/all');\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            content = _context.sent;\n            widget_zero.appendChild(getEl(\"- Cases - \".concat(content.cases)));\n            widget_zero.appendChild(getEl(\"- Deaths - \".concat(content.deaths)));\n            widget_zero.appendChild(getEl(\"- Recovered - \".concat(content.recovered)));\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getResponseAllCases.apply(this, arguments);\n}\n\ngetResponseAllCases();\n\nfunction getEl(content) {\n  var newEl = document.createElement('div');\n  newEl.classList.add('general__information__heading');\n  newEl.innerHTML = content;\n  return newEl;\n}\n\n//# sourceURL=webpack:///./js/widget.zero.js?");

/***/ }),

/***/ "./assets/icon/icons8-bookmark-100.png":
/*!*********************************************!*\
  !*** ./assets/icon/icons8-bookmark-100.png ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"56e605c2877ae68201037224d0f8452c.png\");\n\n//# sourceURL=webpack:///./assets/icon/icons8-bookmark-100.png?");

/***/ }),

/***/ "./assets/icon/icons8-cancel-50.png":
/*!******************************************!*\
  !*** ./assets/icon/icons8-cancel-50.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3a927d234c7a54d72345308282f390c5.png\");\n\n//# sourceURL=webpack:///./assets/icon/icons8-cancel-50.png?");

/***/ }),

/***/ "./assets/icon/icons8-categorize-50.png":
/*!**********************************************!*\
  !*** ./assets/icon/icons8-categorize-50.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ee091ccf7db552237252a1b269e337a2.png\");\n\n//# sourceURL=webpack:///./assets/icon/icons8-categorize-50.png?");

/***/ }),

/***/ "./assets/icon/icons8-center-of-gravity-50.png":
/*!*****************************************************!*\
  !*** ./assets/icon/icons8-center-of-gravity-50.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6adfd5e65c3fd7f22a6d2c41491dc77f.png\");\n\n//# sourceURL=webpack:///./assets/icon/icons8-center-of-gravity-50.png?");

/***/ }),

/***/ "./assets/icon/icons8-filled-circle-60.png":
/*!*************************************************!*\
  !*** ./assets/icon/icons8-filled-circle-60.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dc42ba8e334f255dcc35d801b245d217.png\");\n\n//# sourceURL=webpack:///./assets/icon/icons8-filled-circle-60.png?");

/***/ }),

/***/ "./assets/icon/icons8-filled-green-circle-60.png":
/*!*******************************************************!*\
  !*** ./assets/icon/icons8-filled-green-circle-60.png ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"02987b9ff14ca82fad6e0a872a26c55b.png\");\n\n//# sourceURL=webpack:///./assets/icon/icons8-filled-green-circle-60.png?");

/***/ }),

/***/ "./assets/icon/icons8-list-52.png":
/*!****************************************!*\
  !*** ./assets/icon/icons8-list-52.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ffe02a0cb0703d73aafeb3773c7acce9.png\");\n\n//# sourceURL=webpack:///./assets/icon/icons8-list-52.png?");

/***/ }),

/***/ "./assets/icon/icons8-zoom-in-50.png":
/*!*******************************************!*\
  !*** ./assets/icon/icons8-zoom-in-50.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"33e894ff12e75088a7c3a9a512c43904.png\");\n\n//# sourceURL=webpack:///./assets/icon/icons8-zoom-in-50.png?");

/***/ }),

/***/ "./styles/css/fonts.css":
/*!******************************!*\
  !*** ./styles/css/fonts.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/css/fonts.css?");

/***/ }),

/***/ "./styles/css/map-style.css":
/*!**********************************!*\
  !*** ./styles/css/map-style.css ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/css/map-style.css?");

/***/ }),

/***/ "./styles/css/style.css":
/*!******************************!*\
  !*** ./styles/css/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/css/style.css?");

/***/ }),

/***/ "./styles/sass/style.scss":
/*!********************************!*\
  !*** ./styles/sass/style.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/sass/style.scss?");

/***/ }),

/***/ "../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!****************************************************!*\
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
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {}
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
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
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
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
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
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
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;