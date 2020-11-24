// eslint-disable-next-line @typescript-eslint/no-var-requires
const isLineHeight = require("../../matchers/isLineHeight");

const lineHeightToEm = {
  matcher: isLineHeight,
  name: "size/lineHeightToEm",
  transformer: ({ value }) => `${value}em`,
  type: "value",
};

module.exports = lineHeightToEm;
