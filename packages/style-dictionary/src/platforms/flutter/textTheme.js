const textTheme = ({ packageName }) => ({
  className: "TextStyles",
  destination: "lib/text_theme.dart",
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
