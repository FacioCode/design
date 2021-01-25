/* eslint-disable @typescript-eslint/no-var-requires,no-sync */
const fs = require("fs");
const { template: lodashTemplate } = require("lodash");

const packageDartFormatter = () => {
  const templateFile = fs.readFileSync("./src/templates/flutter/package");
  const templateContent = templateFile.toString();
  const compiled = lodashTemplate(templateContent);


  return compiled();
};

module.exports = {
  formatter: packageDartFormatter,
  name: "flutter/package.dart",
};
