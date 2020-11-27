const isFontWeight = ({ attributes }) => {
  const { category, subitem, type } = attributes;

  if (category === "component" && subitem === "fontWeight") {
    return true;
  }

  return category === "font" && type === "weight";
};

module.exports = isFontWeight;
