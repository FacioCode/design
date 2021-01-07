const isComponent = (prop) => {
  if (typeof prop.attributes === "undefined") {
    console.error(`Can not get category from property with value ${prop.value}`);
  }

  const { attributes } = prop;

  const { category } = attributes;


  return category === "component";
};

module.exports = isComponent;
