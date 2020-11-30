/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  coverageAnalysis: "off",
  jest: {},
  reporters: ["progress", "clear-text", "html"],
  testRunner: "jest",
};
