/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const fs = require("fs");
const lodash = require("lodash");
const templateFile = fs.readFileSync("./src/templates/flutter/library_class.dart");
const template = lodash.template(templateFile);

const libraryClassFormatter = template;

module.exports = libraryClassFormatter;
