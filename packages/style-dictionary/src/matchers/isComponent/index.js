const isComponent = (prop) => {
  if (typeof prop.attributes === "undefined") {
    throw new Error(`Can not get category from property with value ${prop.value}`);
  }

  const { attributes } = prop;

  const { category } = attributes;


  return category === "component";
};

module.exports = isComponent;
