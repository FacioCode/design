/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const fs = require("fs");
const _ = require("lodash");
const templateFile = fs.readFileSync("./src/templates/flutter/component_styles.dart");
const componentStylesFormatter = (properties, options) => {
  const props = _.
    chain(properties).
    groupBy("attributes.type").
    map((value, key) => ({ key, value })).
    value();

  const compiled = _.template(templateFile.toString());

  return compiled({
    props,
  });
};

module.exports = componentStylesFormatter;
