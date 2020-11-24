// eslint-disable-next-line @typescript-eslint/no-var-requires
const isFontSize = require("../../matchers/isFontSize");

const fontSizeToRem = {
  matcher: isFontSize,
  name: "size/fontSizeToRem",
  transformer: ({ value }) => `${value}rem`,
  type: "value",
};

module.exports = fontSizeToRem;
