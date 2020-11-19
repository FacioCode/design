/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const fs = require("fs");
const lodash = require("lodash");
const templateFile = fs.readFileSync("./src/templates/flutter/text_theme.dart");
const template = lodash.template(templateFile);

const textThemeFormatter = template;

module.exports = textThemeFormatter;
