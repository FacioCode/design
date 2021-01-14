const colorPalette = ({ destination, packageName }) => ({
  className: "ColorPalette",
  destination,
  filter: {
    attributes: {
      category: "color",
    },
  },
  format: "flutter/library_class.dart",
  packageName,
});

module.exports = colorPalette;
