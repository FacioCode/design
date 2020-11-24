const isBaseSize = require("../../../matchers/isBaseSize");
const isFontSize = require("../../../matchers/isFontSize");
const isLetterSpacing = require("../../../matchers/isLetterSpacing");

const sizeFlutterToDouble = {
  matcher: (prop) => isBaseSize(prop) || isFontSize(prop) || isLetterSpacing(prop),
  name: "size/flutter/toDouble",
  transformer(prop) {
    const fractionDigits = 2;


    return (parseFloat(prop.value)).toFixed(fractionDigits);
  },
  type: "value",
};

module.exports = sizeFlutterToDouble;
