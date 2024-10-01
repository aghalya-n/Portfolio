/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _about_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.html */ \"./about.html\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss?26bd\");\n/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/about.css */ \"./css/about.css?ca44\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js?9e1e\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_4__);\n/*\n * This is the main entry point for Webpack, the compiler & dependency loader.\n * All files that are necessary for your web page and need to be 'watched' for changes should be included here!\n */\n// HTML Files\n\n // Stylesheets\n\n\n // Scripts\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("/* Your JS here. */\nconsole.log('Hello World!'); // smooth scroll + animation for scrolling\n\ndocument.querySelectorAll('a[href^=\"#\"]').forEach(function (anchor) {\n  anchor.addEventListener('click', function (e) {\n    e.preventDefault();\n    var targetId = this.getAttribute('href').substring(1); // rem '#' character\n\n    var targetSection = document.getElementById(targetId);\n    var navbarHeight = document.getElementById(\"navbar\").offsetHeight; // get height of navbar\n\n    if (targetSection) {\n      // animate scroll\n      var step = function step(timestamp) {\n        if (!start) start = timestamp;\n        var progress = timestamp - start;\n        window.scrollTo(0, easeInOut(progress, startY, diff, duration)); // easeInOut function to animate scroll\n\n        if (progress < duration) {\n          requestAnimationFrame(step);\n        }\n      };\n\n      var easeInOut = function easeInOut(time, start, change, duration) {\n        time /= duration / 2;\n\n        if (time < 1) {\n          return change / 2 * time * time + start;\n        }\n\n        time--;\n        return -change / 2 * (time * (time - 2) - 1) + start;\n      };\n\n      var targetOffset = targetSection.getBoundingClientRect().top + window.scrollY;\n      var duration = 600;\n      var startY = window.pageYOffset; // curr scroll position\n\n      var diff = targetOffset - startY - navbarHeight; // account for navbar height\n\n      var start = null;\n      window.scrollTo({\n        top: targetOffset - navbarHeight,\n        // top: targetOffset,\n        behavior: 'smooth'\n      });\n      requestAnimationFrame(step);\n    }\n  });\n}); // shrink navbar on scroll\n\nwindow.onscroll = function () {\n  scrollFunction();\n};\n\nfunction scrollFunction() {\n  var navbar = document.getElementById(\"navbar\");\n\n  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {\n    navbar.style.padding = \"1.5% .5%\"; // responsive padding\n\n    navbar.style.fontSize = \".8em\"; // responsive font size\n  } else {\n    navbar.style.padding = \"2% .5%\";\n    navbar.style.fontSize = \"1em\";\n  }\n} // detect section and highlight corresponding link in navbar\n// update active link based on section visibility\n\n\nfunction setActiveLink() {\n  var sections = document.querySelectorAll('section');\n  var navLinks = document.querySelectorAll('.nav-sects a');\n  sections.forEach(function (section, index) {\n    var sectionId = section.getAttribute('id');\n    var options = {\n      rootMargin: '0px',\n      threshold: 0.5\n    };\n    var observer = new IntersectionObserver(function (entries) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          // remove active class from links\n          navLinks.forEach(function (link) {\n            link.classList.remove('active');\n          }); // add active class to corresponding link if it exists\n\n          var activeLink = document.querySelector(\".nav-sects a[href=\\\"#\".concat(sectionId, \"\\\"]\"));\n\n          if (activeLink) {\n            activeLink.classList.add('active');\n          }\n        }\n      });\n    }, options);\n    observer.observe(section);\n  });\n}\n\nwindow.addEventListener('load', setActiveLink);\nwindow.addEventListener('scroll', setActiveLink); // carousel\n\nvar slideIndex = 0;\nshowSlides(slideIndex); // next/prev controls\n\nfunction plusSlides(n) {\n  showSlides(slideIndex += n);\n} // thumbnail image controls\n\n\nfunction currentSlide(n) {\n  showSlides(slideIndex = n - 1);\n}\n\nfunction showSlides(n) {\n  var i = 0;\n  var slides = document.getElementsByClassName(\"carousel-item\");\n\n  if (n >= slides.length) {\n    slideIndex = 0;\n  }\n\n  if (n < 0) {\n    slideIndex = slides.length - 1;\n  }\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = \"none\";\n  }\n\n  slides[slideIndex].style.display = \"block\";\n} // modal images\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // open specific modal\n  function openModal(modalId) {\n    document.getElementById(modalId).style.display = \"block\";\n  } // close specific modal\n\n\n  function closeModal(modalId) {\n    document.getElementById(modalId).style.display = \"none\";\n  } // click event listeners -- images to open its respective modal\n\n\n  document.getElementById(\"img1\").addEventListener(\"click\", function () {\n    openModal(\"modal1\");\n  }); // click event listeners -- close buttons to close their respective modals\n\n  document.getElementById(\"close1\").addEventListener(\"click\", function () {\n    closeModal(\"modal1\");\n  }); // click event listeners -- images to open its respective modal\n\n  document.getElementById(\"img2\").addEventListener(\"click\", function () {\n    openModal(\"modal2\");\n  }); // click event listeners -- close buttons to close their respective modals\n\n  document.getElementById(\"close2\").addEventListener(\"click\", function () {\n    closeModal(\"modal2\");\n  }); // click event listeners -- images to open its respective modal\n\n  document.getElementById(\"img3\").addEventListener(\"click\", function () {\n    openModal(\"modal3\");\n  }); // click event listeners -- close buttons to close their respective modals\n\n  document.getElementById(\"close3\").addEventListener(\"click\", function () {\n    closeModal(\"modal3\");\n  });\n}); //Get the button\n\nvar mybutton = document.getElementById(\"backToTop\"); // When the user scrolls down 20px from the top of the document, show the button\n\nwindow.onscroll = function () {\n  scroll();\n};\n\nfunction scroll() {\n  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\n    mybutton.style.display = \"block\";\n  } else {\n    mybutton.style.display = \"none\";\n  }\n} // When the user clicks on the button, scroll to the top of the document\n\n\nmybutton.onclick = function () {\n  //   document.body.scrollTop = 0;\n  document.documentElement.scrollTo({\n    top: 0,\n    behavior: 'smooth'\n  }); //   document.documentElement.scrollTop = 0;\n};\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.PNG */ \"./assets/background.PNG\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Your SCSS here. */\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #240530;\n  color: #e8f0f7;\n  overflow-y: auto;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n\nh1 {\n  font-weight: 900;\n}\n\nh3 {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 800;\n  font-style: italic;\n}\n\n.p-italics {\n  font-weight: 700;\n  font-style: italic;\n}\n\n.hero {\n  font-family: \"Playfair Display\", serif;\n  letter-spacing: 0.15em;\n  color: #f3f4f8;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  background-position: center;\n  font-size: 2em;\n}\n\nheader {\n  background-color: #080628;\n  color: #e8f0f7;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n#navbar {\n  display: flex;\n  padding: 1em;\n  transition: 0.4s;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 100%;\n}\n\n.nav-sects {\n  display: flex;\n  gap: 2%;\n  list-style: none;\n  align-items: center;\n}\n\n.nav-sects a {\n  text-decoration: none;\n  color: #e8f0f7;\n  font-size: 1em;\n  padding-right: 0.4em;\n  font-weight: 600;\n}\n\n.nav-sects li {\n  padding: 1%;\n  margin: 0;\n  white-space: nowrap;\n}\n\n.title {\n  transition: 0.4s;\n  font-size: 1.5em;\n  font-weight: 700;\n  letter-spacing: 0.25em;\n  padding: 0.5em;\n}\n\n.nav-sects a.active {\n  color: #080628;\n  background-color: #e8f0f7;\n  border-radius: 4px;\n  padding: 4px;\n}\n\n#navbar a:hover {\n  color: #e8f0f7;\n  background-color: rgba(231, 233, 243, 0.5);\n  border-radius: 4px;\n  padding: 4px;\n}\n\n#img-background {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  padding: 200px 30px;\n  opacity: 0.65;\n  background-attachment: fixed;\n}\n\n@media screen and (max-width: 768px) {\n  .nav-sects {\n    flex-direction: column;\n    align-items: flex-end;\n  }\n\n  .nav-sects a {\n    margin-right: 10px;\n    font-size: 0.8em;\n  }\n\n  .nav-sects a:last-child {\n    margin-right: 0;\n  }\n\n  .title {\n    font-size: 1.5em;\n  }\n\n  .modal {\n    width: 50%;\n    max-height: 55%;\n    padding: 10px;\n  }\n}\n.carousel {\n  position: relative;\n  width: 400px;\n  height: auto;\n  margin: 0 auto;\n  overflow: hidden;\n  text-align: center;\n  padding-bottom: 4.5%;\n  padding-top: 1.5%;\n}\n\n.carousel-slides {\n  display: flex;\n  position: relative;\n  transition: transform 0.5s ease-in-out;\n}\n\n.carousel-item {\n  flex: 0 0 100%;\n  position: relative;\n}\n\n.carousel-item img {\n  height: auto;\n  max-width: 100%;\n  border-radius: 4px;\n}\n\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -22px;\n  color: #e8f0f7;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n}\n\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev:hover, .next:hover {\n  background-color: rgba(231, 221, 204, 0.4);\n}\n\n.fade {\n  animation-name: fade;\n  animation-duration: 1.8s;\n}\n\n@keyframes fade {\n  from {\n    opacity: 0.45;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.learn-more {\n  background-color: #a590b0;\n  padding-top: 2.5%;\n  text-align: center;\n  padding-bottom: 4%;\n}\n\n.learn-more p {\n  letter-spacing: 2px;\n}\n\n.multi-col-modal {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  max-width: fit-content;\n}\n\n.col {\n  flex: 0 0 33.3%;\n  padding: 10px;\n  text-align: center;\n  position: relative;\n  box-sizing: border-box;\n  max-width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  overflow: auto;\n  left: 50%;\n  top: 50%;\n  padding-top: 50px;\n  width: 70%;\n  height: 70%;\n  justify-content: center;\n  align-items: center;\n  background-color: #e8f0f7;\n  transform: translate(-50%, -50%);\n}\n\n.modal-content {\n  margin: auto;\n  display: block;\n  max-width: 80%;\n  max-height: 80%;\n  position: relative;\n}\n\n.modal-caption {\n  color: #080628;\n  padding: 10px;\n  text-align: center;\n}\n\n.caption {\n  text-align: center;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #080628;\n  color: #e8f0f7;\n  padding: 8px;\n  border-radius: 3px;\n  letter-spacing: 2px;\n  font-weight: 600;\n}\n\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  font-size: 30px;\n  cursor: pointer;\n  color: #080628;\n}\n\n.image {\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.video-sect {\n  background-color: #937e9e;\n  text-align: center;\n  padding: 20px;\n  padding-top: 2%;\n  padding-bottom: 5%;\n}\n\nvideo {\n  border: 5px solid #080628;\n  max-width: 100%;\n}\n\nfooter {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  padding: 20px;\n  background-color: #080628;\n  color: #e8f0f7;\n  text-align: center;\n  padding-bottom: 5%;\n}\n\n.social-icons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10em;\n}\n\n.icon {\n  text-align: center;\n}\n\n.icon i {\n  font-size: 2em;\n  padding: 3%;\n  color: #e8f0f7;\n}\n\n.icon p {\n  margin: 0;\n  letter-spacing: 1px;\n}\n\n.fa-instagram::before {\n  content: \"\\\\f16d\";\n}\n\n.fa-linkedIn::before {\n  content: \"\\\\f08c\";\n}\n\n.fa-git::before {\n  content: \"\\\\f09b\";\n}\n\n#backToTop {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Fixed/sticky position */\n  bottom: 20px;\n  /* Place the button at the bottom of the page */\n  right: 30px;\n  /* Place the button 30px from the right */\n  z-index: 99;\n  /* Make sure it does not overlap */\n  font-size: 18px;\n  /* Increase font size */\n  border: 2.6px solid #080628;\n  /* Remove borders */\n  background-color: #ece9f4;\n  color: #080628;\n  /* Text color */\n  cursor: pointer;\n  /* Add a mouse pointer on hover */\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n\n#backToTop:hover {\n  background-color: #b098c5;\n  /* Add a hover effect */\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./css/about.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/about.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.PNG */ \"./assets/background.PNG\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Your SCSS here. */\n/* \\$light-color:rgb(232, 240, 247); // var for beige color\n\\$dark-color:rgb(8, 6, 40); // var for dark brown color */\n\n\n\nhtml { \n    margin: 0;\n    padding: 0;  \n}\n\nbody {\n    font-family: 'Montserrat', sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #240530;\n    color: rgb(232, 240, 247);\n    overflow-y: auto;\n    max-width: 100%;\n    overflow-x: hidden;\n    /* // width: 100vw;\n    // height: 100vh; */\n}\n\nh1 {\n    \n    font-weight: 900;\n    /* // letter-spacing: .1em; */\n}\n\nh3 {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 800;\n    font-style: italic;\n}\n.p-italics {\n    font-weight: 700;\n    font-style: italic;\n}\n\n\n.hero {\n    font-family: 'Playfair Display', serif;\n    letter-spacing: .15em;\n    color: rgb(243, 244, 248);\n    justify-content: center;\n    display: flex;\n    align-items: center;\n    background-position: center;\n    font-size: 2em;\n\n}\n\nheader {\n    background-color: rgb(8, 6, 40);\n    color: rgb(232, 240, 247);\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n#navbar {\n    display: flex;\n    padding: 1em;\n    transition: .4s;\n    justify-content: space-around;\n    align-items: center;\n    max-width: 100%;\n    \n}\n\n.nav-sects {\n    \n    display: flex;\n    gap: 2%;\n    list-style: none;\n    align-items: center;\n    \n}\n\n.nav-sects a {\n    \n    text-decoration: none;\n    color: rgb(232, 240, 247);\n    font-size: 1em;\n    padding-right: .4em;\n    font-weight: 600;\n    \n}\n\n.nav-sects li {\n    padding: 1%;\n    margin: 0;\n    white-space: nowrap;\n   \n}\n\n.title {\n    transition: .4s;\n    font-size: 1.5em;\n    font-weight: 700;\n    letter-spacing: 0.25em;\n    padding: .5em;\n    \n}\n\n.nav-sects a.active {\n    color: rgb(8, 6, 40);\n    background-color: rgb(232, 240, 247);\n    border-radius: 4px;\n    padding: 4px;\n}\n\n#navbar a:hover {\n    color: rgb(232, 240, 247);\n    background-color: rgba(231, 233, 243, 0.5);\n    border-radius: 4px;\n    padding: 4px;\n}\n\n#img-background {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover; \n    padding: 200px 30px;\n    opacity: 0.65;\n    background-attachment: fixed;\n}\n\n@media screen and (max-width: 768px) {\n\n    .nav-sects {\n        flex-direction: column;\n        align-items: flex-end;\n    }\n    .nav-sects a {\n        margin-right: 10px;\n        font-size: .8em;\n    }\n    .nav-sects a:last-child {\n        margin-right: 0;\n    }\n\n    .title {\n        font-size: 1.5em;\n    }\n\n    .modal {\n        width: 50%;\n        max-height: 55%;\n        padding: 10px;\n    }\n\n}\n\n.carousel {\n    position: relative;\n    width: 400px;\n    height: auto;\n    margin: 0 auto;\n    overflow: hidden;\n    text-align: center;\n    padding-bottom: 4.5%;\n    padding-top: 1.5%;\n}\n\n.carousel-slides {\n    display: flex;\n    position: relative;\n    transition: transform 0.5s ease-in-out;\n}\n\n.carousel-item {\n    flex: 0 0 100%;\n    position: relative;\n}\n\n.carousel-item img {\n    height: auto;\n    max-width: 100%;\n    border-radius: 4px;\n}\n\n.prev, .next {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    padding: 16px;\n    margin-top: -22px;\n    color: rgb(232, 240, 247);\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n}\n  \n.next {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n  \n.prev:hover, .next:hover {\n    background-color: rgba(231,221,204,0.4);\n}\n\n.fade {\n    animation-name: fade;\n    animation-duration: 1.8s;\n}\n\n@keyframes fade {\n    from {opacity: .45} \n    to {opacity: 1}\n}\n\n.learn-more {\n    background-color: rgb(165, 144, 176);\n    padding-top: 2.5%;\n    text-align: center;\n    padding-bottom: 4%;\n \n}\n\n.learn-more p {\n    letter-spacing: 2px;\n}\n\n.multi-col-modal {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    max-width: fit-content;\n}\n\n.col {\n    flex: 0 0 33.3%;\n    padding: 10px;\n    text-align: center;\n    position: relative;\n    box-sizing: border-box;\n    max-width: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    overflow: auto;\n    left: 50%;\n    top: 50%;\n    padding-top: 50px;\n    width: 70%;\n    height: 70%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(232, 240, 247);\n    transform: translate(-50%, -50%);\n}\n\n.modal-content {\n    margin: auto;\n    display: block;\n    max-width: 80%;\n    max-height: 80%;\n    position: relative;\n}\n\n.modal-caption {\n    color: rgb(8, 6, 40);\n    padding: 10px;\n    text-align: center;\n}\n\n.caption {\n    text-align: center;\n    width: 100%;\n    box-sizing: border-box;\n    background-color: rgb(8, 6, 40);\n    color: rgb(232, 240, 247);\n    padding: 8px;\n    border-radius: 3px;\n    letter-spacing: 2px;\n    font-weight: 600;\n}\n\n.close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    font-size: 30px;\n    cursor: pointer;\n    color: rgb(8, 6, 40);\n}\n\n.image {\n    width: 100%;\n    height: auto;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.video-sect {\n    background-color: rgb(147, 126, 158);\n    text-align: center;\n    padding: 20px;\n    padding-top: 2%;\n    padding-bottom: 5%;\n}\n\nvideo {\n    border: 5px solid rgb(8, 6, 40);\n    max-width: 100%;\n}\n\nfooter {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 600;\n    padding: 20px;\n    background-color: rgb(8, 6, 40);\n    color: rgb(232, 240, 247);\n    text-align: center;\n    padding-bottom: 5%;\n}\n\n.social-icons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10em;\n}\n\n.icon {\n    text-align: center;\n}\n\n.icon i {\n    font-size: 2em;\n    padding: 3%;\n    color: rgb(232, 240, 247);\n}\n\n.icon p {\n    margin: 0;\n    letter-spacing: 1px;\n}\n\n.fa-instagram::before {\n    content: \"\\\\f16d\";\n}\n\n.fa-linkedIn::before {\n    content: \"\\\\f08c\";\n}\n\n.fa-git::before {\n    content: \"\\\\f09b\";\n}\n\n#backToTop {\n    display: none; /* Hidden by default */\n    position: fixed; /* Fixed/sticky position */\n    bottom: 20px; /* Place the button at the bottom of the page */\n    right: 30px; /* Place the button 30px from the right */\n    z-index: 99; /* Make sure it does not overlap */\n    font-size: 18px; /* Increase font size */\n    border: 2.6px solid rgb(8, 6, 40); /* Remove borders */\n    background-color: rgb(232, 240, 247);\n    color: rgb(8, 6, 40); /* Text color */\n    cursor: pointer; /* Add a mouse pointer on hover */\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n}\n\n#backToTop:hover {\n    background-color: rgba(231, 233, 243, 0.5); /* Add a hover effect */\n}   `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/about.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./about.html":
/*!********************!*\
  !*** ./about.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/about.css */ \"./css/about.css?b4e5\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ \"./js/main.js?db67\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bunka.png */ \"./assets/bunka.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/deba.png */ \"./assets/deba.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/santoku.png */ \"./assets/santoku.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/petty.png */ \"./assets/petty.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/nakiri.png */ \"./assets/nakiri.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/gyuto.png */ \"./assets/gyuto.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/kiritsuke.png */ \"./assets/kiritsuke.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/yanagira.png */ \"./assets/yanagira.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/garasuki.png */ \"./assets/garasuki.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar code = \"<!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n        <head>\\n            <meta charset=\\\"utf-8\\\" />\\n            <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\n            <title>About Me</title>\\n            <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\n            \\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css\\\">\\n            </link>\\n            <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n            <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n            <link href=\\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap\\\" rel=\\\"stylesheet\\\">\\n            <script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"></script>\\n        </head>\\n        <body>\\n            <header>\\n                <nav id=\\\"navbar\\\">\\n                    <div class=\\\"title\\\">AGHALYA NARAYANAN</div>\\n                    <ul class=\\\"nav-sects\\\">\\n                        <li><a href=\\\"index.html\\\">HOME</a></li>\\n                        <li><a href=\\\"updatedResume.pdf\\\" target=\\\"_blank\\\">RESUME</a></li>\\n                        <li><a href=\\\"index.html\\\">WORK EXPERIENCE</a></li>\\n                        <li><a href=\\\"index.html\\\">PERSONAL PROJECTS</a></li>\\n                        <li><a href=\\\"about.html\\\">ABOUT</a></li>\\n                    </ul>\\n                </nav>\\n            </header>\\n    \\n            <section id=\\\"img-background\\\">\\n                <h1 class=\\\"hero\\\">Hi, I'm Aghalya!<br>\\n                    UI/UX DESIGNER</h1>\\n            </section>\\n    \\n            <section id=\\\"s1\\\" class=\\\"carousel\\\">\\n                <h1>W O R K &nbsp;&nbsp; E X P E R I E N C E</h1>\\n                <div class=\\\"carousel-slides\\\">\\n                    <div class=\\\"carousel-item fade\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"image 1\\\" data-modal=\\\"modal1\\\">\\n                    </div>\\n                    <div class=\\\"carousel-item fade\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"image 2\\\" data-modal=\\\"modal2\\\">\\n                    </div>\\n                    <div class=\\\"carousel-item fade\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"image 3\\\" data-modal=\\\"modal3\\\">\\n                    </div>\\n                    <div class=\\\"carousel-item fade\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"image 4\\\" data-modal=\\\"modal4\\\">\\n                    </div>\\n                    <div class=\\\"carousel-item fade\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"image 5\\\" data-modal=\\\"modal5\\\">\\n                    </div>\\n                    <div class=\\\"carousel-item fade\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"image 6\\\" data-modal=\\\"modal6\\\">\\n                    </div>\\n    \\n                    <a class=\\\"prev\\\" onclick=\\\"plusSlides(-1)\\\">&#10094;</a>\\n                    <a class=\\\"next\\\" onclick=\\\"plusSlides(1)\\\">&#10095;</a>\\n                </div>\\n            </section>\\n            \\n            <section id=\\\"s2\\\" class=\\\"learn-more\\\">\\n                <h1>P E R S O N A L &nbsp;&nbsp; E N D E A V O R S</h1>\\n                <p class=\\\"p-italics\\\">CLICK TO LEARN MORE</p>\\n                <div class=\\\"multi-col-modal\\\">\\n                    <div class=\\\"col\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"image 1\\\" class=\\\"image\\\" id=\\\"img1\\\">\\n                        \\n                        <div class=\\\"modal\\\" id=\\\"modal1\\\">\\n                            <span class=\\\"close\\\" id=\\\"close1\\\">&times;</span>\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"image 1\\\" class=\\\"modal-content\\\">\\n                            <div class=\\\"modal-caption\\\">\\n                                <h3>K I R I T S U K E</h3>\\n                                <p>MULTIPURPOSE THIN SLICING</p>\\n                            </div>\\n                            \\n                        </div>\\n                        <div class=\\\"caption\\\">KIRITSUKE</div>\\n                        \\n                    </div>\\n                    <div class=\\\"col\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"image 2\\\" class=\\\"image\\\" id=\\\"img2\\\">\\n                        <div class=\\\"modal\\\" id=\\\"modal2\\\">\\n                            <span class=\\\"close\\\" id=\\\"close2\\\">&times;</span>\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"image 2\\\" class=\\\"modal-content\\\">\\n                            <div class=\\\"modal-caption\\\">\\n                                <h3>Y A N A G I R A</h3>\\n                                <p>SUSHI & LARGE MEATS</p>\\n                            </div>\\n                        </div>\\n                        <div class=\\\"caption\\\">YANAGIRA</div>\\n                    </div>\\n                    <div class=\\\"col\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"image 3\\\" class=\\\"image\\\" id=\\\"img3\\\">\\n                        <div class=\\\"modal\\\" id=\\\"modal3\\\">\\n                            <span class=\\\"close\\\" id=\\\"close3\\\">&times;</span>\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"image 3\\\" class=\\\"modal-content\\\">\\n                            <div class=\\\"modal-caption\\\">\\n                                <h3>G A R A S U K I</h3>\\n                                <p>DEBONING</p>\\n                            </div>\\n                        </div>\\n                        <div class=\\\"caption\\\">GARASUKI</div>\\n                    </div>\\n                </div>\\n                <br>\\n                <br>\\n                <h3>W H E R E &nbsp;&nbsp; T O &nbsp;&nbsp; B U Y</h3>\\n                <p>AMAZON | KNIFEWEAR | CHEF'S KNIVES TO GO | JAPANESE KNIFE IMPORTS | WATANABE</p>\\n            </section>\\n    \\n            <footer id=\\\"footer\\\">\\n                <h1>G E T &nbsp;&nbsp; I N &nbsp;&nbsp; T O U C H</h1>\\n                <div class=\\\"social-icons\\\">\\n                    <div class=\\\"icon\\\">\\n                        <a href=\\\"mailto:itsaghalya@gmail.com\\\" target=\\\"_blank\\\">\\n                            <i class=\\\"fas fa-envelope\\\"></i>\\n                        </a>\\n                        <!-- <p>itsaghalya@gmail.com</p> -->\\n                    </div>\\n                    <div class=\\\"icon\\\">\\n                        <a href=\\\"tel:+14088382479\\\" target=\\\"_blank\\\">\\n                            <i class=\\\"fas fa-phone-alt\\\"></i>\\n                        </a>\\n                        <!-- <p>+1 (408) 838-2479</p> -->\\n                    </div>\\n                    <div class=\\\"icon\\\">\\n                        <a href=\\\"https://www.linkedin.com/in/aghalya-narayanan-771b68165/\\\" target=\\\"_blank\\\">\\n                            <i class=\\\"fab fa-linkedin\\\"></i>\\n                        </a>\\n                        <!-- <p>AGHALYA NARAYANAN</p> -->\\n                    </div>\\n                    <div class=\\\"icon\\\">\\n                        <a href=\\\"https://www.github.com/aghalya-n\\\" target=\\\"_blank\\\">\\n                            <i class=\\\"fab fa-github\\\"></i>\\n                        </a>\\n                        <!-- <p>AGHALYA-N</p> -->\\n                    </div>\\n                </div>\\n            </footer>\\n            <button id=\\\"backToTop\\\">\\n                <i class=\\\"fas fa-arrow-up\\\"></i>\\n            </button>\\n        </body>\\n    </html>\\n    \\n    \";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./about.html?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss?94ff\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ \"./js/main.js?db67\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bunka.png */ \"./assets/bunka.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/deba.png */ \"./assets/deba.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/santoku.png */ \"./assets/santoku.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/petty.png */ \"./assets/petty.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/nakiri.png */ \"./assets/nakiri.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/gyuto.png */ \"./assets/gyuto.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/kiritsuke.png */ \"./assets/kiritsuke.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/yanagira.png */ \"./assets/yanagira.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/garasuki.png */ \"./assets/garasuki.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"utf-8\\\" />\\n        <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\n        <title>Aghalya Narayanan</title>\\n        <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n        <link rel=\\\"stylesheet\\\" href=\\n        \\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css\\\">\\n        </link>\\n        <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n        <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n        <link href=\\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap\\\" rel=\\\"stylesheet\\\">\\n        <script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"></script>\\n    </head>\\n    <body>\\n        <header>\\n            <nav id=\\\"navbar\\\">\\n                <div class=\\\"title\\\">AGHALYA NARAYANAN</div>\\n                <ul class=\\\"nav-sects\\\">\\n                    <!-- <li><a href=\\\"#img-background\\\">BACK TO TOP</a></li> -->\\n                    <li><a href=\\\"#s1\\\">WORK EXPERIENCE</a></li>\\n                    <li><a href=\\\"#s2\\\">PERSONAL PROJECTS</a></li>\\n                    <li><a href=\\\"about.html\\\">ABOUT ME</a></li>\\n                    <li><a href=\\\"https://drive.google.com/file/d/13uAcn0U--4Vu8hcdHlTeNSIRBScwwFlq/view?usp=share_link\\\" target=\\\"_blank\\\">RESUME</a></li>\\n                    <li><a href=\\\"#footer\\\">CONTACT</a></li>\\n                </ul>\\n            </nav>\\n        </header>\\n\\n        <section id=\\\"img-background\\\">\\n            <h1 class=\\\"hero\\\">Hi, I'm Aghalya!<br>\\n                UI/UX DESIGNER</h1>\\n        </section>\\n\\n        <section id=\\\"s1\\\" class=\\\"carousel\\\">\\n            <h1>W O R K &nbsp;&nbsp; E X P E R I E N C E</h1>\\n            <div class=\\\"carousel-slides\\\">\\n                <div class=\\\"carousel-item fade\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"image 1\\\" data-modal=\\\"modal1\\\">\\n                </div>\\n                <div class=\\\"carousel-item fade\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"image 2\\\" data-modal=\\\"modal2\\\">\\n                </div>\\n                <div class=\\\"carousel-item fade\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"image 3\\\" data-modal=\\\"modal3\\\">\\n                </div>\\n                <div class=\\\"carousel-item fade\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"image 4\\\" data-modal=\\\"modal4\\\">\\n                </div>\\n                <div class=\\\"carousel-item fade\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"image 5\\\" data-modal=\\\"modal5\\\">\\n                </div>\\n                <div class=\\\"carousel-item fade\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"image 6\\\" data-modal=\\\"modal6\\\">\\n                </div>\\n\\n                <a class=\\\"prev\\\" onclick=\\\"plusSlides(-1)\\\">&#10094;</a>\\n                <a class=\\\"next\\\" onclick=\\\"plusSlides(1)\\\">&#10095;</a>\\n            </div>\\n        </section>\\n        \\n        <section id=\\\"s2\\\" class=\\\"learn-more\\\">\\n            <h1>P E R S O N A L &nbsp;&nbsp; E N D E A V O R S</h1>\\n            <p class=\\\"p-italics\\\">CLICK TO LEARN MORE</p>\\n            <div class=\\\"multi-col-modal\\\">\\n                <div class=\\\"col\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"image 1\\\" class=\\\"image\\\" id=\\\"img1\\\">\\n                    \\n                    <div class=\\\"modal\\\" id=\\\"modal1\\\">\\n                        <span class=\\\"close\\\" id=\\\"close1\\\">&times;</span>\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"image 1\\\" class=\\\"modal-content\\\">\\n                        <div class=\\\"modal-caption\\\">\\n                            <h3>K I R I T S U K E</h3>\\n                            <p>MULTIPURPOSE THIN SLICING</p>\\n                        </div>\\n                        \\n                    </div>\\n                    <div class=\\\"caption\\\">KIRITSUKE</div>\\n                    \\n                </div>\\n                <div class=\\\"col\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"image 2\\\" class=\\\"image\\\" id=\\\"img2\\\">\\n                    <div class=\\\"modal\\\" id=\\\"modal2\\\">\\n                        <span class=\\\"close\\\" id=\\\"close2\\\">&times;</span>\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"image 2\\\" class=\\\"modal-content\\\">\\n                        <div class=\\\"modal-caption\\\">\\n                            <h3>Y A N A G I R A</h3>\\n                            <p>SUSHI & LARGE MEATS</p>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"caption\\\">YANAGIRA</div>\\n                </div>\\n                <div class=\\\"col\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"image 3\\\" class=\\\"image\\\" id=\\\"img3\\\">\\n                    <div class=\\\"modal\\\" id=\\\"modal3\\\">\\n                        <span class=\\\"close\\\" id=\\\"close3\\\">&times;</span>\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"image 3\\\" class=\\\"modal-content\\\">\\n                        <div class=\\\"modal-caption\\\">\\n                            <h3>G A R A S U K I</h3>\\n                            <p>DEBONING</p>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"caption\\\">GARASUKI</div>\\n                </div>\\n            </div>\\n            <br>\\n            <br>\\n            <h3>W H E R E &nbsp;&nbsp; T O &nbsp;&nbsp; B U Y</h3>\\n            <p>AMAZON | KNIFEWEAR | CHEF'S KNIVES TO GO | JAPANESE KNIFE IMPORTS | WATANABE</p>\\n        </section>\\n\\n        <footer id=\\\"footer\\\">\\n            <h1>G E T &nbsp;&nbsp; I N &nbsp;&nbsp; T O U C H</h1>\\n            <div class=\\\"social-icons\\\">\\n                <div class=\\\"icon\\\">\\n                    <a href=\\\"mailto:itsaghalya@gmail.com\\\" target=\\\"_blank\\\">\\n                        <i class=\\\"fas fa-envelope\\\"></i>\\n                    </a>\\n                    <!-- <p>itsaghalya@gmail.com</p> -->\\n                </div>\\n                <div class=\\\"icon\\\">\\n                    <a href=\\\"tel:+14088382479\\\" target=\\\"_blank\\\">\\n                        <i class=\\\"fas fa-phone-alt\\\"></i>\\n                    </a>\\n                    <!-- <p>+1 (408) 838-2479</p> -->\\n                </div>\\n                <div class=\\\"icon\\\">\\n                    <a href=\\\"https://www.linkedin.com/in/aghalya-narayanan-771b68165/\\\" target=\\\"_blank\\\">\\n                        <i class=\\\"fab fa-linkedin\\\"></i>\\n                    </a>\\n                    <!-- <p>AGHALYA NARAYANAN</p> -->\\n                </div>\\n                <div class=\\\"icon\\\">\\n                    <a href=\\\"https://www.github.com/aghalya-n\\\" target=\\\"_blank\\\">\\n                        <i class=\\\"fab fa-github\\\"></i>\\n                    </a>\\n                    <!-- <p>AGHALYA-N</p> -->\\n                </div>\\n            </div>\\n        </footer>\\n        <button id=\\\"backToTop\\\">\\n            <i class=\\\"fas fa-arrow-up\\\"></i>\\n        </button>\\n    </body>\\n</html>\\n\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./css/main.scss?26bd":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "./css/about.css?ca44":
/*!***********************!*\
  !*** ./css/about.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ \"../node_modules/css-loader/dist/cjs.js!./css/about.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./css/about.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"83a7622903d8f7ebd065.js\";\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./css/main.scss?94ff":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"35a61c93d2bcbfae9cc4.scss\";\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "./css/about.css?b4e5":
/*!***********************!*\
  !*** ./css/about.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9d740f1f3ec2f694c986.css\";\n\n//# sourceURL=webpack:///./css/about.css?");

/***/ }),

/***/ "./assets/background.PNG":
/*!*******************************!*\
  !*** ./assets/background.PNG ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e58d0229681efc91a2dc.PNG\";\n\n//# sourceURL=webpack:///./assets/background.PNG?");

/***/ }),

/***/ "./assets/bunka.png":
/*!**************************!*\
  !*** ./assets/bunka.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"57af2135ee1760a335a9.png\";\n\n//# sourceURL=webpack:///./assets/bunka.png?");

/***/ }),

/***/ "./assets/deba.png":
/*!*************************!*\
  !*** ./assets/deba.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e0358672cc74f0f1d3a6.png\";\n\n//# sourceURL=webpack:///./assets/deba.png?");

/***/ }),

/***/ "./assets/garasuki.png":
/*!*****************************!*\
  !*** ./assets/garasuki.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e030339a32dd7ca2ca46.png\";\n\n//# sourceURL=webpack:///./assets/garasuki.png?");

/***/ }),

/***/ "./assets/gyuto.png":
/*!**************************!*\
  !*** ./assets/gyuto.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"533dc4936a521c48343b.png\";\n\n//# sourceURL=webpack:///./assets/gyuto.png?");

/***/ }),

/***/ "./assets/kiritsuke.png":
/*!******************************!*\
  !*** ./assets/kiritsuke.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e14ee4f71df4db416b92.png\";\n\n//# sourceURL=webpack:///./assets/kiritsuke.png?");

/***/ }),

/***/ "./assets/nakiri.png":
/*!***************************!*\
  !*** ./assets/nakiri.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f7add7976e32c9cf05ff.png\";\n\n//# sourceURL=webpack:///./assets/nakiri.png?");

/***/ }),

/***/ "./assets/petty.png":
/*!**************************!*\
  !*** ./assets/petty.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8708044abdd16d9f1199.png\";\n\n//# sourceURL=webpack:///./assets/petty.png?");

/***/ }),

/***/ "./assets/santoku.png":
/*!****************************!*\
  !*** ./assets/santoku.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2b834e078b73bc799e35.png\";\n\n//# sourceURL=webpack:///./assets/santoku.png?");

/***/ }),

/***/ "./assets/yanagira.png":
/*!*****************************!*\
  !*** ./assets/yanagira.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c45d5045206664d829ce.png\";\n\n//# sourceURL=webpack:///./assets/yanagira.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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