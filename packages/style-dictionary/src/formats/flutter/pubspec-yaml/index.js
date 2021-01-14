/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const Handlebars = require("handlebars");
const fs = require("fs");
const templateFile = fs.readFileSync("./src/templates/flutter/pubspec_yaml");
const template = Handlebars.compile(templateFile.toString());

const pubspecYamlFormatter = (dictionary, { metadata }) => template({
  ...metadata,
});

module.exports = {
  formatter: pubspecYamlFormatter,
  name: "flutter/pubspec.yaml",
};
