const isComponentTextAlign = ({ attributes }) => {
  const { category, subitem } = attributes;


  return category === "component" && subitem === "textAlign";
};

module.exports = isComponentTextAlign;
