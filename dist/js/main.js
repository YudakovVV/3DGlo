/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('20 may 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\r\n    textSelector: '#form1-name',\r\n    phoneSelector: '#form1-phone',\r\n    emailSelector: '#form1-email',\r\n    placeholderSelector: null\r\n})\r\n;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\r\n    textSelector: '#form2-name',\r\n    phoneSelector: '#form2-phone',\r\n    emailSelector: '#form2-email',\r\n    placeholderSelector: '#form2-message'\r\n})\r\n;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\r\n    textSelector: '#form3-name',\r\n    phoneSelector: '#form3-phone',\r\n    emailSelector: '#form3-email',\r\n    placeholderSelector: null\r\n})\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n  const calcSquare = document.querySelector('.calc-square')\r\n  const calcCount = document.querySelector('.calc-count')\r\n  const calcDay = document.querySelector('.calc-day')\r\n  \r\ncalcSquare.addEventListener(\"input\", (e) => {\r\n  e.target.value = e.target.value.replace(/\\D+/, \"\"); \r\n});\r\ncalcCount.addEventListener(\"input\", (e) => {\r\n  e.target.value = e.target.value.replace(/\\D+/, \"\"); \r\n});\r\ncalcDay.addEventListener(\"input\", (e) => {\r\n  e.target.value = e.target.value.replace(/\\D+/, \"\"); \r\n});\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = ({\r\n    textSelector,\r\n    phoneSelector,\r\n    emailSelector,\r\n    placeholderSelector\r\n}) => {\r\n    const textInput = document.querySelector(textSelector)\r\n    const phoneInput = document.querySelector(phoneSelector)\r\n    const emailInput = document.querySelector(emailSelector)\r\n\r\n    const validText = function (e) {\r\n        this.value = e.target.value.replace(/\\d+/gi, '')\r\n    }\r\n\r\n    textInput.addEventListener('input', validText)\r\n    phoneInput.addEventListener('input', (e) => {\r\n        phoneInput.value = e.target.value.replace(/[^0-9-()+]/gi, '')\r\n    })\r\n    emailInput.addEventListener('input', (e) => {\r\n        emailInput.value = e.target.value.replace(/[^a-zA-Z.@~*!'_-]/gi, '')\r\n    })\r\n\r\n    if (typeof placeholderSelector === 'string') {\r\n        const placeholderInput = document.querySelector(placeholderSelector)\r\n        placeholderInput.addEventListener('input', validText)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu')\n    const menu = document.querySelector('menu')\n    const closeBtn = menu.querySelector('.close-btn')\n    const menuItems = menu.querySelectorAll('ul>li>a')\n    \n    const handleMenu = ()=>{\n    //     if(!menu.style.transform){\n    //         menu.style.transform = 'translateX(0)'\n    //     }\n    //     else {\n    //         menu.style.transform = ''\n    //     }\n        menu.classList.toggle('active-menu')        \n    }\n    \n    \n    menuBtn.addEventListener('click', handleMenu)\n    // closeBtn.addEventListener('click', handleMenu)\n\n    // // for(let i=0; i < menuItems.length; i++){\n    // //     menuItems[i].addEventListener('click', handleMenu)\n    // // }\n    // menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\n\n    menu.addEventListener('click',(e)=>{\n        \n        if(!e.target.classList.contains('active-menu') )\n        {\n          menu.classList.toggle('active-menu')=== false\n        }\n        menuItems.forEach(menuItem => menuItem.classList.toggle('ul>li>a'))        \n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () =>{\r\n  const modal = document.querySelector('.popup')\r\n  const buttons = document.querySelectorAll('.popup-btn')\r\n  //const closeBtn = modal.querySelector('.popup-close')  \r\n  const content = modal.querySelector('.popup-content')\r\n  \r\n  const animate = ({timing, draw, duration}) => {\r\n\r\n      let start = performance.now();\r\n\r\n      requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n\r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n\r\n      draw(progress); // отрисовать её\r\n\r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n\r\n    });\r\n  }\r\n  \r\n  buttons.forEach(btn =>{\r\n    btn.addEventListener('click',()=>{\r\n      modal.style.display = 'block' \r\n      if (window.screen.availWidth > 767) {\r\n            animate({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                    return timeFraction\r\n                },\r\n                draw(progress) {\r\n                    content.style.opacity = progress\r\n                }\r\n            })\r\n        }     \r\n    })\r\n  })\r\n\r\n  // closeBtn.addEventListener('click', ()=>{\r\n  //   modal.style.display = 'none'\r\n  // })\r\n  modal.addEventListener('click',(e)=>{\r\n    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){\r\n      modal.style.display = 'none'\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderDots = (countSliders, currentSlide) => {\r\n    const ul = document.querySelector('.portfolio-dots')\r\n\r\n    for (let i = 0; i < countSliders; i++) {\r\n        const li = document.createElement('li');\r\n        li.classList.add('dot')\r\n\r\n        if (currentSlide === i) {\r\n            li.classList.add('dot-active')\r\n        }\r\n        ul.append(li)\r\n    }\r\n}\r\nconst slider = () =>{\r\n  const sliderBlock = document.querySelector('.portfolio-content')\r\n  const slides = document.querySelectorAll('.portfolio-item')  \r\n  const timeInterval = 2000\r\n\r\n  let currentSlide = 0\r\n  let interval\r\n\r\n  renderDots(slides.length, currentSlide)\r\n    const dots = document.querySelectorAll('.dot')\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n  }\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass)\r\n  }\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides,currentSlide,'portfolio-item-active')\r\n    prevSlide(dots,currentSlide,'dot-active')\r\n    currentSlide++\r\n\r\n    if(currentSlide>=slides.length){\r\n      currentSlide = 0\r\n    }\r\n    nextSlide(slides,currentSlide,'portfolio-item-active')\r\n    nextSlide(dots,currentSlide,'dot-active')\r\n  }\r\n  const startSlide = (timer = 1500)=>{\r\n    interval = setInterval(autoSlide,timer)\r\n  }\r\n  const stopSlide = ()=>{\r\n    clearInterval(interval)\r\n  }\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n\r\n    if (!e.target.matches('.dot') &&\r\n            !e.target.matches('.portfolio-btn')){\r\n      return\r\n    }\r\n\r\n    prevSlide(slides,currentSlide,'portfolio-item-active')\r\n    prevSlide(dots,currentSlide,'dot-active')\r\n    \r\n     if (e.target.classList.contains('next')) {\r\n\r\n            currentSlide++\r\n\r\n        } else if (e.target.classList.contains('prev')) {\r\n            currentSlide--\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n\r\n    if(currentSlide>=slides.length){\r\n      currentSlide = 0\r\n    }\r\n\r\n    if(currentSlide < 0){\r\n      currentSlide = slides.length - 1\r\n    }\r\n\r\n    nextSlide(slides,currentSlide,'portfolio-item-active')\r\n    nextSlide(dots,currentSlide,'dot-active')\r\n  })\r\n  \r\n  sliderBlock.addEventListener('mouseenter', (e) => {\r\n      if(e.target.matches('.dot, .portfolio-btn')){\r\n      stopSlide()\r\n    }\r\n  }, true)\r\n\r\n  sliderBlock.addEventListener('mouseleave', (e) => {\r\n      if(e.target.matches('.dot, .portfolio-btn')){\r\n      startSlide(timeInterval)\r\n    }\r\n  }, true)\r\n\r\n\r\n  startSlide(timeInterval)\r\n  \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () =>{\r\n  const tabPanel = document.querySelector('.service-header')\r\n  const tabs = document.querySelectorAll('.service-header-tab')\r\n  const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n tabPanel.addEventListener('click',(e)=>{\r\n   \r\n   if(e.target.closest('.service-header-tab')){\r\n     const tabBtn = e.target.closest('.service-header-tab')\r\n     tabs.forEach((tab,index)=>{       \r\n       if(tab === tabBtn){\r\n         tab.classList.add('active')\r\n         tabContent[index].classList.remove('d-none')\r\n       }else{\r\n         tab.classList.remove('active')\r\n         tabContent[index].classList.add('d-none')\r\n       }\r\n     })\r\n   }\r\n })\r\n  \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n\n    const timerHours = document.getElementById('timer-hours')\n    const timerMinutes = document.getElementById('timer-minutes')\n    const timerSeconds = document.getElementById('timer-seconds')\n\n    const getTimerRemaining = () => {\n\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow) / 1000\n        let hours = Math.floor(timeRemaining / 60 / 60)\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        if (hours < 10) hours = \"0\" + hours;\n        if (minutes < 10) minutes = \"0\" + minutes;\n        if (seconds < 10) seconds = \"0\" + seconds;\n\n        return { timeRemaining, hours, minutes, seconds }\n    }\n\n    const updateClock = () => {\n        let getTime = getTimerRemaining()\n        timerHours.textContent = getTime.hours\n        timerMinutes.textContent = getTime.minutes\n        timerSeconds.textContent = getTime.seconds\n\n        if (getTime.timeRemaining <= 0) {\n            clearInterval()\n            timerHours.textContent = '00'\n            timerMinutes.textContent = '00'\n            timerSeconds.textContent = '00'\n\n            timerHours.style.color = 'red'\n            timerMinutes.style.color = 'red'\n            timerSeconds.style.color = 'red'\n        }\n    }\n    updateClock()\n    setInterval(updateClock, 1000)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;