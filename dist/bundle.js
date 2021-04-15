
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (React, ReactDOM, d3) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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
  const mouthArc = d3.arc().innerRadius(mouthRadius).outerRadius(mouthRadius + mouthWidth).startAngle(Math.PI / 2).endAngle(Math.PI * 3 / 2);

  const BackgroundCircle = ({
    radius,
    strokeWidth
  }) => /*#__PURE__*/React__default['default'].createElement("circle", {
    r: radius,
    fill: "yellow",
    stroke: "black",
    "stroke-width": strokeWidth
  });

  const App = () => /*#__PURE__*/React__default['default'].createElement("svg", {
    width: width,
    height: height
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    transform: `translate(${centerX}, ${centerY})`
  }, /*#__PURE__*/React__default['default'].createElement(BackgroundCircle, {
    radius: centerY - strokeWidth / 2,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: -eyeOffsetX,
    cy: -eyeOffsetY,
    r: eyeRadius
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: eyeOffsetX,
    cy: -eyeOffsetY,
    r: eyeRadius
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: mouthArc()
  })));

  const rootElement = document.getElementById('root');
  ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(App, null), rootElement);

}(React, ReactDOM, d3));
//# sourceMappingURL=bundle.js.map
