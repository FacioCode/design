const { kebabCase } = require("lodash");

/**
 *
 * @param {string} classKey Class key name (e.g. root)
 * @param {string} component Component name (e.g. AppBar, Button)
 * @param {string} property Property name (e.g. fontSize)
 * @returns {string} CSS Custom Property name
 */
const getCssVarName = ({ classKey, component, property }) => (
  `--component-${kebabCase(component)}-${kebabCase(classKey)}-${kebabCase(property)}`
);

module.exports = getCssVarName;
