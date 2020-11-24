const isFontWeight = require("../../../matchers/isFontWeight");

const componentFlutterFontWeight = {
  matcher: isFontWeight,
  name: "component/flutter/fontWeight",
  transformer: ({ value }) => {
    /**
     * @see https://stackoverflow.com/questions/10003683/extract-a-number-from-a-string-javascript
     */
    const cleanedValue = value.match(/\d/gu).join("");


    return `FontWeight.w${cleanedValue}`;
  },
  type: "value",
};

module.exports = componentFlutterFontWeight;
