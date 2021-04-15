
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';
import { BackgroundCircle } from './BackgroundCircle.js';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;
const mouthWidth = 20;
const mouthRadius = 140;
const mouthArc = arc().innerRadius(mouthRadius).outerRadius(mouthRadius + mouthWidth).startAngle(Math.PI / 2).endAngle(Math.PI * 3 / 2);

const App = () => /*#__PURE__*/React.createElement("svg", {
  width: width,
  height: height
}, /*#__PURE__*/React.createElement("g", {
  transform: `translate(${centerX}, ${centerY})`
}, /*#__PURE__*/React.createElement(BackgroundCircle, {
  radius: centerY - strokeWidth / 2,
  strokeWidth: strokeWidth
}), /*#__PURE__*/React.createElement("circle", {
  cx: -eyeOffsetX,
  cy: -eyeOffsetY,
  r: eyeRadius
}), /*#__PURE__*/React.createElement("circle", {
  cx: eyeOffsetX,
  cy: -eyeOffsetY,
  r: eyeRadius
}), /*#__PURE__*/React.createElement("path", {
  d: mouthArc()
})));

const rootElement = document.getElementById('root');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), rootElement);
//# sourceMappingURL=index.js.map
