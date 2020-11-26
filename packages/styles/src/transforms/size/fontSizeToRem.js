const isFontSize = require("../../matchers/isFontSize");

const fontSizeToRem = {
  matcher: isFontSize,
  name: "size/fontSizeToRem",
  transformer: ({ value }) => `${value}rem`,
  type: "value",
};

module.exports = fontSizeToRem;
