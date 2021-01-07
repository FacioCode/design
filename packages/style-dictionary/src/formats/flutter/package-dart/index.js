/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const Handlebars = require("handlebars");
const fs = require("fs");
const templateFile = fs.readFileSync("./src/templates/flutter/package");
const template = Handlebars.compile(templateFile.toString());

const packageDartFormatter = (dictionary, { metadata }) => template({
  ...metadata,
});

module.exports = {
  formatter: packageDartFormatter,
  name: "flutter/package.dart",
};
