const isTypographyMargin = ({ attributes }) => {
  const { category, subitem, type } = attributes;

  const allowedSubItems = [
    "margin",
    "marginBottom",
    "marginTop",
  ];

  return category === "component" || type === "typography" || allowedSubItems.includes(subitem);
};

module.exports = isTypographyMargin;
