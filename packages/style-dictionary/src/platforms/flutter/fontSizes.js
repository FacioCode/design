// eslint-disable-next-line @typescript-eslint/no-var-requires
const { displayName: packageName } = require("../../package.json");

const fontSizes = {
  className: "FontSizes",
  destination: "lib/font_sizes.dart",
  filter: {
    attributes: {
      category: "size",
      type: "font",
    },
  },
  format: "flutter/library_class.dart",
  packageName,
};

module.exports = fontSizes;
