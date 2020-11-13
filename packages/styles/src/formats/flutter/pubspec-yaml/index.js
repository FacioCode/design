/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const Handlebars = require("handlebars");
const fs = require("fs");
const template = Handlebars.compile(fs.readFileSync("./src/templates/pubspec.yaml").toString());

const pubspecYamlFormatter = (dictionary, { pubspec }) => template({
  pubspec,
});

module.exports = {
  pubspecYamlFormatter,
};
