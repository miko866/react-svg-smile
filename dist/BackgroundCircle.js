
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import React from 'react';

const BackgroundCircle = ({
  radius,
  strokeWidth
}) => /*#__PURE__*/React.createElement("circle", {
  r: radius,
  fill: "yellow",
  stroke: "black",
  "stroke-width": strokeWidth
});

export { BackgroundCircle };
//# sourceMappingURL=BackgroundCircle.js.map
