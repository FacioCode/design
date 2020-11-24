const isComponent = ({ attributes }) => {
  const { category } = attributes;


  return category === "component";
};

module.exports = isComponent;
