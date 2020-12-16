/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const fs = require("fs");
// eslint-disable-next-line id-length
const { template } = require("lodash");
const getAllPropertiesByAttributeType = require("../../../utils/getAllPropertiesByAttributeType");
const templateFile = fs.readFileSync("./src/templates/flutter/component_styles.dart");
const flutterComponentStylesFormatter = (dictionary, options) => {
  const { allProperties } = dictionary;
  const { packageName } = options.metadata;

  const props = getAllPropertiesByAttributeType(allProperties);
  const templateContent = templateFile.toString();

  /**
   * @type {TemplateExecutor}
   */
  const compiled = template(templateContent);


  return compiled({ packageName, props });
};

module.exports = {
  formatter: flutterComponentStylesFormatter,
  name: "flutter/component_styles.dart",
};
