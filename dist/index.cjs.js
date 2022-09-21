'use strict';



function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

___$insertStyle(".marqueeContainer {\n  animation: scroll calc(var(--duration-factor) * var(--duration)) linear infinite;\n  position: relative;\n  white-space: nowrap;\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(calc(var(--marquee-width) * -1px));\n  }\n}\n\n.marquee {\n  display: inline-block;\n  width: max-content;\n}");

___$insertStyle(":root {\n  --duration-factor: 1;\n  --ease-in: cubic-bezier(0.51, 0, 0.9, 0.43);\n  --ease-back-in: cubic-bezier(0.38, -0.37, 0.83, 0.23);\n  --ease-out: cubic-bezier(0.35, 0.91, 0.3, 0.99);\n  --ease-back-out: cubic-bezier(0.21, 0.12, 0.35, 1.43);\n  --ease-in-out: cubic-bezier(0.75, 0, 0.21, 0.99);\n  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);\n  --in-view-delay: 0s;\n  --in-view-stagger-delay: 0s;\n  --in-view-stagger-amount: 0.2s;\n}\n\n:root {\n  --color-black: #000000;\n  --color-grey-100: #cccccc;\n  --color-grey-200: #888888;\n  --color-grey-300: #555555;\n  --color-grey-400: #222222;\n  --color-white: #ffffff;\n}\n\n.is-reduced-motion {\n  --duration-factor: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\nul,\nol,\nmenu {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  border-style: none;\n  height: auto;\n  max-width: 100%;\n}\n\nbutton,\ninput,\nselect {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\n\nbutton {\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: 0;\n  color: inherit;\n  cursor: pointer;\n  display: inline-block;\n  font: inherit;\n  padding: 0;\n}\n\nfigure {\n  margin: 0;\n}\n\n:root {\n  --total-width: 1392px;\n  --number-of-columns: 12;\n  --gutter-width: 16px;\n  --row-width: calc(var(--total-width) + var(--gutter-width) * 2);\n  --base-space: 8px;\n}\n\n@media screen and (min-width: 640px) {\n  :root {\n    --gutter-width: 24px;\n  }\n}\n:root {\n  --font-body: \"Open Sans\", sans-serif;\n  --font-heading: \"Poppins\", sans-serif;\n  --font-weight-regular: 400;\n  --font-weight-bold: 700;\n  font-size: 100%;\n  text-size-adjust: none;\n}\n\nbody {\n  color: var(--color-black);\n  font-family: var(--font-body);\n  font-size: 1rem;\n  font-weight: var(--font-weight-regular);\n}\n\nb,\nstrong {\n  font-weight: var(--font-weight-bold);\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\np,\nli {\n  line-height: 1.4;\n}\n\n@media screen and (min-width: 1024px) {\n  body {\n    font-size: 1.125rem;\n  }\n}\n.focus-reverse:focus {\n  box-shadow: 0 0 0 2px var(--color-black), 0 0 0 4px var(--color-white);\n}\n\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.medium-up,\n.medium-only,\n.large-up,\n.xlarge-up,\n.xxlarge-up {\n  display: none;\n}\n\n@media screen and (min-width: 640px) {\n  .small-only {\n    display: none;\n  }\n  .medium-up {\n    display: block;\n  }\n}\n@media screen and (min-width: 640px) and (max-width: 1023px) {\n  .medium-only {\n    display: block;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .large-up {\n    display: block;\n  }\n}\n@media screen and (min-width: 1144px) {\n  .xlarge-up {\n    display: block;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .xxlarge-up {\n    display: block;\n  }\n}\n.bg-black {\n  background-color: var(--color-black);\n}\n\n.color-black {\n  color: var(--color-black);\n}\n\n.bg-grey-100 {\n  background-color: var(--color-grey-100);\n}\n\n.color-grey-100 {\n  color: var(--color-grey-100);\n}\n\n.bg-grey-200 {\n  background-color: var(--color-grey-200);\n}\n\n.color-grey-200 {\n  color: var(--color-grey-200);\n}\n\n.bg-grey-300 {\n  background-color: var(--color-grey-300);\n}\n\n.color-grey-300 {\n  color: var(--color-grey-300);\n}\n\n.bg-grey-400 {\n  background-color: var(--color-grey-400);\n}\n\n.color-grey-400 {\n  color: var(--color-grey-400);\n}\n\n.bg-white {\n  background-color: var(--color-white);\n}\n\n.color-white {\n  color: var(--color-white);\n}\n\n.image-group {\n  --parent-width: 0;\n  --parent-height: 0;\n  --parent-max: 100%;\n  margin: 0 auto;\n  max-width: var(--parent-max);\n  pointer-events: none;\n  position: relative;\n  width: 100%;\n}\n.image-group::before {\n  content: \"\";\n  display: block;\n  padding-bottom: calc(var(--parent-height) / var(--parent-width) * 100%);\n}\n\n.image-group__item {\n  --left: 0;\n  --top: 0;\n  --width: 0;\n  --top: --top;\n  --left: --left;\n  --width: --width;\n  left: percent-ratio-css-vars(--left, --parent-width);\n  top: percent-ratio-css-vars(--top, --parent-height);\n  width: percent-ratio-css-vars(--width, --parent-width);\n  position: absolute;\n}\n.image-group__item img {\n  width: 100%;\n}\n\n.in-view__anim {\n  opacity: var(--start-alpha, 0);\n  transform: translate(var(--start-x, 0), var(--start-y, 0)) scale(var(--start-scale, 1)) rotate(var(--start-rotate, 0deg));\n  transition-delay: 0s;\n  transition-duration: var(--duration-hide, 0.4s);\n  transition-property: transform, opacity;\n  transition-timing-function: var(--easing-fn-hide, ease);\n}\n.in-view .in-view__anim {\n  opacity: var(--end-alpha, 1);\n  transform: translate(var(--end-x, 0), var(--end-y, 0)) scale(var(--end-scale, 1)) rotate(var(--end-rotate, 0deg));\n  transition-delay: var(--in-view-delay);\n  transition-duration: var(--duration-show, 0.4s);\n  transition-timing-function: var(--easing-fn-show);\n}\n\n.in-view__anim--left {\n  --start-x: 50%;\n  --start-y: 0;\n  --start-scale: 1;\n}\n\n.in-view__anim--right {\n  --start-x: -50%;\n  --start-y: 0;\n  --start-scale: 1;\n}\n\n.in-view__anim--up {\n  --start-x: 0;\n  --start-y: 50%;\n  --start-scale: 1;\n}\n\n.in-view__anim--up-min {\n  --start-x: 0;\n  --start-y: 30px;\n  --start-scale: 1;\n}\n\n.in-view__anim--down {\n  --start-x: 0;\n  --start-y: -50%;\n  --start-scale: 1;\n}\n\n.in-view__anim--pop {\n  --start-x: 0;\n  --start-y: 0;\n  --start-scale: 0.5;\n  --easing-fn-show: var(--ease-back-out);\n  --easing-fn-hide: var(--ease-back-in);\n}\n\n.in-view .in-view__anim--delay-1 {\n  --in-view-delay: calc(0.1 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-2 {\n  --in-view-delay: calc(0.2 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-3 {\n  --in-view-delay: calc(0.3 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-4 {\n  --in-view-delay: calc(0.4 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-5 {\n  --in-view-delay: calc(0.5 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-6 {\n  --in-view-delay: calc(0.6 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-7 {\n  --in-view-delay: calc(0.7 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-8 {\n  --in-view-delay: calc(0.8 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-9 {\n  --in-view-delay: calc(0.9 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-10 {\n  --in-view-delay: calc(1 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-11 {\n  --in-view-delay: calc(1.1 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-12 {\n  --in-view-delay: calc(1.2 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-13 {\n  --in-view-delay: calc(1.3 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-14 {\n  --in-view-delay: calc(1.4 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-15 {\n  --in-view-delay: calc(1.5 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-16 {\n  --in-view-delay: calc(1.6 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-17 {\n  --in-view-delay: calc(1.7 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-18 {\n  --in-view-delay: calc(1.8 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-19 {\n  --in-view-delay: calc(1.9 * 1s * var(--duration-factor));\n}\n\n.in-view .in-view__anim--delay-20 {\n  --in-view-delay: calc(2 * 1s * var(--duration-factor));\n}\n\n.in-view__stagger {\n  --in-view-stagger-delay: var(--in-view-delay);\n}\n.in-view__stagger > * {\n  opacity: var(--start-alpha, 0);\n  transform: translate(var(--start-x, 0), var(--start-y, 0)) scale(var(--start-scale, 1)) rotate(var(--start-rotate, 0deg));\n  transition-delay: 0s;\n  transition-duration: var(--duration-hide, 0.4s);\n  transition-property: transform, opacity;\n  transition-timing-function: var(--easing-fn-hide, ease);\n}\n.in-view .in-view__stagger > * {\n  opacity: var(--end-alpha, 1);\n  transform: translate(var(--end-x, 0), var(--end-y, 0)) scale(var(--end-scale, 1)) rotate(var(--end-rotate, 0deg));\n  transition-delay: var(--in-view-delay);\n  transition-duration: var(--duration-show, 0.4s);\n  transition-timing-function: var(--easing-fn-show);\n}\n.in-view .in-view__stagger > *:nth-child(1) {\n  --in-view-delay: calc((0 * var(--in-view-stagger-amount) + var(--in-view-stagger-delay)) * var(--duration-factor));\n}\n.in-view .in-view__stagger > *:nth-child(2) {\n  --in-view-delay: calc((1 * var(--in-view-stagger-amount) + var(--in-view-stagger-delay)) * var(--duration-factor));\n}\n.in-view .in-view__stagger > *:nth-child(3) {\n  --in-view-delay: calc((2 * var(--in-view-stagger-amount) + var(--in-view-stagger-delay)) * var(--duration-factor));\n}\n.in-view .in-view__stagger > *:nth-child(4) {\n  --in-view-delay: calc((3 * var(--in-view-stagger-amount) + var(--in-view-stagger-delay)) * var(--duration-factor));\n}\n.in-view .in-view__stagger > *:nth-child(5) {\n  --in-view-delay: calc((4 * var(--in-view-stagger-amount) + var(--in-view-stagger-delay)) * var(--duration-factor));\n}\n.in-view .in-view__stagger > *:nth-child(6) {\n  --in-view-delay: calc((5 * var(--in-view-stagger-amount) + var(--in-view-stagger-delay)) * var(--duration-factor));\n}\n.in-view .in-view__stagger > *:nth-child(7) {\n  --in-view-delay: calc((6 * var(--in-view-stagger-amount) + var(--in-view-stagger-delay)) * var(--duration-factor));\n}\n.in-view .in-view__stagger > *:nth-child(8) {\n  --in-view-delay: calc((7 * var(--in-view-stagger-amount) + var(--in-view-stagger-delay)) * var(--duration-factor));\n}\n.in-view .in-view__stagger > *:nth-child(9) {\n  --in-view-delay: calc((8 * var(--in-view-stagger-amount) + var(--in-view-stagger-delay)) * var(--duration-factor));\n}\n.in-view .in-view__stagger > *:nth-child(10) {\n  --in-view-delay: calc((9 * var(--in-view-stagger-amount) + var(--in-view-stagger-delay)) * var(--duration-factor));\n}\n\n.in-view__stagger--up-min {\n  --start-x: 0;\n  --start-y: 30px;\n  --start-scale: 1;\n}\n\n.in-view__stagger--pop {\n  --start-x: 0;\n  --start-y: 0;\n  --start-scale: 0.5;\n  --easing-fn-show: var(--ease-back-out);\n  --easing-fn-hide: var(--ease-back-in);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .in-view__anim,\n.in-view__stagger > * {\n    opacity: 1;\n    transform: none;\n    transition: none;\n  }\n}\n.is-reduced-motion .in-view__anim,\n.is-reduced-motion .in-view__stagger > * {\n  opacity: 1;\n  transform: none;\n  transition: none;\n}\n\nbody::after {\n  background: #fff;\n  bottom: 0;\n  content: \"S\";\n  display: none;\n  font-size: 1.6rem;\n  padding: 10px;\n  position: fixed;\n  right: 0;\n  z-index: 1;\n}\n\nbody[data-env=development]::after {\n  display: block;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex--center {\n  place-content: center;\n}\n\n.flex--wrap {\n  flex-wrap: wrap;\n}\n\n.wrapper,\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: var(--row-width);\n  width: 100%;\n}\n\n.wrapper {\n  padding-left: var(--gutter-width);\n  padding-right: var(--gutter-width);\n}\n\n.row,\n.column {\n  padding-left: calc(var(--gutter-width) / 2);\n  padding-right: calc(var(--gutter-width) / 2);\n}\n\n.column--deep {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.content-spacing {\n  --vertical-space: calc(var(--base-space, 8px) * 2);\n}\n.content-spacing > * + * {\n  margin-top: var(--vertical-space);\n}\n\n.content-spacing--less {\n  --vertical-space: var(--base-space, 8px);\n}\n\n.content-spacing--more {\n  --vertical-space: calc(var(--base-space, 8px) * 3);\n}\n\n.block {\n  display: block;\n}\n\n.fit {\n  width: 100%;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.relative {\n  position: relative;\n}\n\n@media screen and (min-width: 640px) {\n  body::after {\n    content: \"M\";\n  }\n  .row {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .row .row {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .column {\n    flex: 1 1 auto;\n  }\n  .row {\n    display: flex;\n  }\n  .row--nowrap {\n    flex-wrap: nowrap;\n  }\n  .row--vertical-center {\n    align-items: center;\n  }\n  .row--vertical-baseline {\n    align-items: baseline;\n  }\n  .row--horizontal-uncenter {\n    justify-content: flex-start;\n  }\n  .column--1 {\n    flex-basis: calc(100 / var(--number-of-columns) * 1 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--2 {\n    flex-basis: calc(100 / var(--number-of-columns) * 2 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--3 {\n    flex-basis: calc(100 / var(--number-of-columns) * 3 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--4 {\n    flex-basis: calc(100 / var(--number-of-columns) * 4 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--5 {\n    flex-basis: calc(100 / var(--number-of-columns) * 5 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--6 {\n    flex-basis: calc(100 / var(--number-of-columns) * 6 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--7 {\n    flex-basis: calc(100 / var(--number-of-columns) * 7 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--8 {\n    flex-basis: calc(100 / var(--number-of-columns) * 8 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--9 {\n    flex-basis: calc(100 / var(--number-of-columns) * 9 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--10 {\n    flex-basis: calc(100 / var(--number-of-columns) * 10 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--11 {\n    flex-basis: calc(100 / var(--number-of-columns) * 11 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column--12 {\n    flex-basis: calc(100 / var(--number-of-columns) * 12 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .content-spacing--small-only > * + * {\n    margin-top: 0;\n  }\n}\n@media screen and (min-width: 1024px) {\n  body::after {\n    content: \"L\";\n  }\n  .row-large {\n    display: flex;\n  }\n  .row-large--nowrap {\n    flex-wrap: nowrap;\n  }\n  .row-large--vertical-center {\n    align-items: center;\n  }\n  .row-large--vertical-baseline {\n    align-items: baseline;\n  }\n  .row-large--horizontal-uncenter {\n    justify-content: flex-start;\n  }\n  .column-large--1 {\n    flex-basis: calc(100 / var(--number-of-columns) * 1 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--2 {\n    flex-basis: calc(100 / var(--number-of-columns) * 2 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--3 {\n    flex-basis: calc(100 / var(--number-of-columns) * 3 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--4 {\n    flex-basis: calc(100 / var(--number-of-columns) * 4 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--5 {\n    flex-basis: calc(100 / var(--number-of-columns) * 5 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--6 {\n    flex-basis: calc(100 / var(--number-of-columns) * 6 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--7 {\n    flex-basis: calc(100 / var(--number-of-columns) * 7 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--8 {\n    flex-basis: calc(100 / var(--number-of-columns) * 8 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--9 {\n    flex-basis: calc(100 / var(--number-of-columns) * 9 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--10 {\n    flex-basis: calc(100 / var(--number-of-columns) * 10 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--11 {\n    flex-basis: calc(100 / var(--number-of-columns) * 11 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-large--12 {\n    flex-basis: calc(100 / var(--number-of-columns) * 12 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n}\n@media screen and (min-width: 1144px) {\n  body::after {\n    content: \"XL\";\n  }\n  .row-xlarge {\n    display: flex;\n  }\n  .row-xlarge--nowrap {\n    flex-wrap: nowrap;\n  }\n  .row-xlarge--vertical-center {\n    align-items: center;\n  }\n  .row-xlarge--vertical-baseline {\n    align-items: baseline;\n  }\n  .row-xlarge--horizontal-uncenter {\n    justify-content: flex-start;\n  }\n  .column-xlarge--1 {\n    flex-basis: calc(100 / var(--number-of-columns) * 1 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--2 {\n    flex-basis: calc(100 / var(--number-of-columns) * 2 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--3 {\n    flex-basis: calc(100 / var(--number-of-columns) * 3 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--4 {\n    flex-basis: calc(100 / var(--number-of-columns) * 4 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--5 {\n    flex-basis: calc(100 / var(--number-of-columns) * 5 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--6 {\n    flex-basis: calc(100 / var(--number-of-columns) * 6 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--7 {\n    flex-basis: calc(100 / var(--number-of-columns) * 7 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--8 {\n    flex-basis: calc(100 / var(--number-of-columns) * 8 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--9 {\n    flex-basis: calc(100 / var(--number-of-columns) * 9 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--10 {\n    flex-basis: calc(100 / var(--number-of-columns) * 10 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--11 {\n    flex-basis: calc(100 / var(--number-of-columns) * 11 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xlarge--12 {\n    flex-basis: calc(100 / var(--number-of-columns) * 12 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n}\n@media screen and (min-width: 1440px) {\n  body::after {\n    content: \"XXL\";\n  }\n  .row-xxlarge {\n    display: flex;\n  }\n  .row-xxlarge--nowrap {\n    flex-wrap: nowrap;\n  }\n  .row-xxlarge--vertical-center {\n    align-items: center;\n  }\n  .row-xxlarge--vertical-baseline {\n    align-items: baseline;\n  }\n  .row-xxlarge--horizontal-uncenter {\n    justify-content: flex-start;\n  }\n  .column-xxlarge--1 {\n    flex-basis: calc(100 / var(--number-of-columns) * 1 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--2 {\n    flex-basis: calc(100 / var(--number-of-columns) * 2 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--3 {\n    flex-basis: calc(100 / var(--number-of-columns) * 3 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--4 {\n    flex-basis: calc(100 / var(--number-of-columns) * 4 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--5 {\n    flex-basis: calc(100 / var(--number-of-columns) * 5 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--6 {\n    flex-basis: calc(100 / var(--number-of-columns) * 6 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--7 {\n    flex-basis: calc(100 / var(--number-of-columns) * 7 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--8 {\n    flex-basis: calc(100 / var(--number-of-columns) * 8 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--9 {\n    flex-basis: calc(100 / var(--number-of-columns) * 9 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--10 {\n    flex-basis: calc(100 / var(--number-of-columns) * 10 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--11 {\n    flex-basis: calc(100 / var(--number-of-columns) * 11 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  .column-xxlarge--12 {\n    flex-basis: calc(100 / var(--number-of-columns) * 12 * 1%);\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n}\nh1,\n.title-1,\nh2,\n.title-2,\nh3,\n.title-3,\nh4,\n.title-4 {\n  font-family: var(--font-heading);\n  font-weight: var(--font-weight-bold);\n  line-height: 1.2;\n}\n\nh1,\n.title-1 {\n  font-size: 1.875rem;\n}\n\nh2,\n.title-2 {\n  font-size: 1.5rem;\n}\n\nh3,\n.title-3 {\n  font-size: 1.25rem;\n}\n\nh4,\n.title-4 {\n  font-size: 1rem;\n}\n\n.txt-body-larger {\n  font-size: 1.125rem;\n}\n\n.txt-body-smaller {\n  font-size: 0.75rem;\n}\n\n.txt-body-legal {\n  font-size: 0.625rem;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n}\n\n.txt-center {\n  text-align: center;\n}\n\n.txt-nowrap {\n  white-space: nowrap;\n}\n\n.txt-weight-normal {\n  font-weight: var(--font-weight-regular);\n}\n\n.txt-weight-bold {\n  font-weight: var(--font-weight-bold);\n}\n\n@media screen and (min-width: 1024px) {\n  h1,\n.title-1 {\n    font-size: 3.375rem;\n  }\n  h2,\n.title-2 {\n    font-size: 2.375rem;\n  }\n  h3,\n.title-3 {\n    font-size: 1.875rem;\n  }\n  h4,\n.title-4 {\n    font-size: 1.5rem;\n  }\n  .txt-body-larger {\n    font-size: 1.375rem;\n  }\n  .txt-body-smaller {\n    font-size: 1rem;\n    line-height: 1.3;\n  }\n}\n*:focus {\n  box-shadow: 0 0 0 2px var(--color-white), 0 0 0 4px var(--color-black);\n  outline: none;\n}\n*:focus:not(:focus-visible) {\n  box-shadow: none;\n}\n\nmain {\n  position: relative;\n}");

var Marquee = function Marquee(_ref) {
  var speed = _ref.speed,
      children = _ref.children;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      marqueeWidth = _useState2[0],
      setMarqueeWidth = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      duration = _useState4[0],
      setDuration = _useState4[1];

  var _useState5 = React.useState(1),
      _useState6 = _slicedToArray(_useState5, 2),
      neededAmount = _useState6[0],
      setNeededAmount = _useState6[1];

  var container = React.useRef();
  var marquee = React.useRef();
  var resizeTimer = React.useRef();

  var getNumber = function getNumber() {
    var containerWidth = container.current.clientWidth;
    var marqueeWidth = marquee.current.clientWidth; // Divide the container width, by the marquee width and round it up
    // to give us the ammount of items needed to fill the container.

    var neededAmount = Math.ceil(containerWidth / marqueeWidth) * 2 - 1; // check if needed ammount if less that one, if it is set to be just 1.

    if (neededAmount < 1) {
      neededAmount = 1;
    } // Set the needed ammount to state.


    setNeededAmount(neededAmount); // Set marquee width in state so we can use it for the`--marquee-width`
    // inline style.

    setMarqueeWidth(marqueeWidth); // Set duration speed, which is used below in the --duration inline style.

    if (marqueeWidth < containerWidth) {
      setDuration(containerWidth / speed);
    } else {
      setDuration(marqueeWidth / speed);
    }
  };

  var getMarquees = function getMarquees() {
    // For each marquee needed to fill the extra space, we pushed the blow markup
    // to an empty array and run the getMarquees function below to render them.
    var marquees = [];

    for (var index = 0; index < neededAmount; index++) {
      marquees.push( /*#__PURE__*/React__default["default"].createElement("div", {
        className: 'marquee',
        key: index
      }, children));
    }

    return marquees;
  };

  var handleResize = function handleResize() {
    if (resizeTimer.current) clearTimeout(resizeTimer.current);
    resizeTimer.current = setTimeout(function () {
      getNumber();
    }, 200);
  };

  React.useEffect(function () {
    handleResize();
    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, [getNumber]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: container,
    className: 'marqueeContainer',
    style: {
      "--marquee-width": marqueeWidth,
      "--duration": duration + "s"
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: marquee,
    className: 'marquee'
  }, children), getMarquees());
};

module.exports = Marquee;
