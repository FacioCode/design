// eslint-disable-next-line @typescript-eslint/no-var-requires
const { displayName: packageName } = require("../../package.json");

const fonts = {
  className: "Fonts",
  destination: "lib/fonts.dart",
  filter: {
    attributes: {
      category: "font",
    },
  },
  format: "flutter/library_class.dart",
  packageName,
};

module.exports = fonts;
