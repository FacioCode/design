const isBaseSize = require("../../../matchers/isBaseSize");
const isFontSize = require("../../../matchers/isFontSize");
const isLetterSpacing = require("../../../matchers/isLetterSpacing");

const sizeFlutterToDouble = {
  matcher: (prop) => isBaseSize(prop) || isFontSize(prop) || isLetterSpacing(prop),
  name: "size/flutter/toDouble",
  // eslint-disable-next-line no-magic-numbers
  transformer: ({ value }) => (parseFloat(value)).toFixed(2),
  type: "value",
};

module.exports = sizeFlutterToDouble;
