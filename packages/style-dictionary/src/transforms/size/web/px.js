const isBaseSize = require("../../../matchers/isBaseSize");

const throwSizeError = (name, value, unitType) => {
  const message = `'${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`;

  throw new Error(message);
};

const px = {
  matcher: isBaseSize,
  name: "size/web/px",
  transformer: (prop) => {
    const unitType = "px";
    const value = parseFloat(prop.value);

    if (isNaN(value)) {
      throwSizeError(prop.name, prop.value, unitType);
    }

    return `${value}${unitType}`;
  },
  type: "value",
};

module.exports = px;
