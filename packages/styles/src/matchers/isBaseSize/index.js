const isComponent = ({ attributes }) => {
  const { category, type } = attributes;


  return category === "size" && type === "base";
};

module.exports = isComponent;
