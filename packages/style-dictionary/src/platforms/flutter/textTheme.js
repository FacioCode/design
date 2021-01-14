const textTheme = ({ destination, packageName }) => ({
  className: "TextStyles",
  destination,
  filter: {
    attributes: {
      category: "component",
      type: "typography",
    },
  },
  format: "flutter/text_theme.dart",
  packageName,
});

module.exports = textTheme;
