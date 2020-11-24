const isFontSize = ({ attributes }) => {
  const { category, subitem, type } = attributes;


  return category === "size" && type === "font" && subitem === "fontSize";
};

module.exports = isFontSize;
