const fs = require("fs");
const { template: lodashTemplate } = require("lodash");

const svgIconClassFormatter = ({ properties }, options) => {
  // eslint-disable-next-line no-sync
  const templateFile = fs.readFileSync("./src/templates/flutter/svg_icon_class", "utf8");
  const templateContent = templateFile.toString();
  const compiled = lodashTemplate(templateContent);
  const { asset } = properties;

  return compiled({
    asset,
    metadata: options.metadata,
  });
};

module.exports = {
  formatter: svgIconClassFormatter,
  name: "flutter/svg_icon_class.dart",
};
