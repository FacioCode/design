/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const fs = require("fs");
const lodash = require("lodash");
const templateFile = fs.readFileSync("./src/templates/flutter_ds/text_theme");
const textThemeFormatter = lodash.template(templateFile);

module.exports = {
  formatter: textThemeFormatter,
  name: "flutter/text_theme.dart",
};
