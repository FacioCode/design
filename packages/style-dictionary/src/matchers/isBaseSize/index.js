const isComponent = ({ attributes }) => {
  const { category, subitem, type } = attributes;

  if (category === "size" && type === "base") {
    return true;
  }

  return subitem === "letterSpacing";
};

module.exports = isComponent;
