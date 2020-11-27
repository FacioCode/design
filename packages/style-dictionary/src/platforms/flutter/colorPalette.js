const colorPalette = ({ packageName }) => ({
  className: "ColorPalette",
  destination: "lib/color_palette.dart",
  filter: {
    attributes: {
      category: "color",
    },
  },
  format: "flutter/library_class.dart",
  packageName,
});

module.exports = colorPalette;
