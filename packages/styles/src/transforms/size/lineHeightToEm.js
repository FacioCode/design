const isLineHeight = require("../../matchers/isLineHeight");
const isTypographyMargin = require("../../matchers/isTypographyMargin");

const lineHeightToEm = {
  matcher: (prop) => isLineHeight(prop) || isTypographyMargin(prop),
  name: "size/lineHeightToEm",
  transformer: ({ value }) => `${value}em`,
  type: "value",
};

module.exports = lineHeightToEm;
