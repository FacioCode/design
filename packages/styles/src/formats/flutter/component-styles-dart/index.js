/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const fs = require("fs");
// eslint-disable-next-line id-length
const _ = require("lodash");
const templateFile = fs.readFileSync("./src/templates/flutter/component_styles.dart");
const componentStylesFormatter = (dictionary, options) => {
  const { allProperties } = dictionary;
  const { packageName } = options.metadata;

  const props = _.chain(allProperties).groupBy("attributes.type").
    map((value, key) => ({ key, value })).
    value();

  /**
   * @type {TemplateExecutor}
   */
  const compiled = _.template(templateFile.toString());

  return compiled({ packageName, props });
};

module.exports = componentStylesFormatter;
