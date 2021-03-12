/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const fs = require("fs");
const { template } = require("lodash");
const getAllPropertiesByAttributeType = require("../../../utils/getAllPropertiesByAttributeType");

const flutterComponentStylesFormatter = (dictionary, options) => {
  const { allProperties } = dictionary;
  const { packageName } = options.metadata;

  const templateFile = fs.readFileSync("./src/templates/flutter_ds/component_styles");
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
