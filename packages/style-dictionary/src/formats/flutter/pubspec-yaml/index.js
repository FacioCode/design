/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const fs = require("fs");
const { template: lodashTemplate } = require("lodash");

const pubspecYamlFormatter = (dictionary, { metadata }) => {
  const templateFile = fs.readFileSync("./src/templates/flutter/pubspec_yaml");
  const templateContent = templateFile.toString();
  const compiled = lodashTemplate(templateContent);
  const { font } = dictionary.properties.asset;

  return compiled({
    font,
    metadata,
  });
};

module.exports = {
  formatter: pubspecYamlFormatter,
  name: "flutter/pubspec.yaml",
};
