const isBaseSize = require("../../../matchers/isBaseSize");
const isBreakpointSize = require("../../../matchers/isBreakpointSize");

const throwSizeError = (name, value, unitType) => {
  const message = `'${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`;

  throw new Error(message);
};

const sizeBasePx = {
  matcher: (prop) => isBaseSize(prop) || isBreakpointSize(prop),
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

module.exports = sizeBasePx;
