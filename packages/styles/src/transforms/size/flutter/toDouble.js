const isBaseSize = require("../../../matchers/isBaseSize");

const sizeFlutterToDouble = {
  matcher: isBaseSize,
  name: "size/flutter/toDouble",
  transformer(prop) {
    const fractionDigits = 2;


    return (parseFloat(prop.value)).toFixed(fractionDigits);
  },
  type: "value",
};

module.exports = sizeFlutterToDouble;
