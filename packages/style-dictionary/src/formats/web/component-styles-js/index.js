const { readFileSync } = require("fs");
const { template } = require("lodash");
const getAllPropertiesByAttributeType = require("../../../utils/getAllPropertiesByAttributeType");
const getAllPropertiesByItem = require("../../../utils/getAllPropertiesByItem");
const getCssVarName = require("../../../utils/getCssVarName");

const templateFile = readFileSync("./src/templates/web/component_styles.js");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const componentStylesFormatter = (dictionary, options) => {
  const { allProperties } = dictionary;
  const props = getAllPropertiesByAttributeType(allProperties);
  const templateContent = templateFile.toString();

  /**
   * @type {TemplateExecutor}
   */
  const compiled = template(templateContent);


  return compiled({ getAllPropertiesByItem, getCssVarName, options, props });
};

module.exports = {
  formatter: componentStylesFormatter,
  name: "web/component_styles.js",
};
