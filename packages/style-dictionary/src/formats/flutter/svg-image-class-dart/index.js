const fs = require("fs");
const { template: lodashTemplate } = require("lodash");

const svgImageClassFormatter = ({ properties }, options) => {
  // eslint-disable-next-line no-sync
  const templateFile = fs.readFileSync("./src/templates/flutter_ds/svg_image_class", "utf8");
  const templateContent = templateFile.toString();
  const compiled = lodashTemplate(templateContent);
  const { asset } = properties;

  return compiled({
    asset,
    metadata: options.metadata,
  });
};

module.exports = {
  formatter: svgImageClassFormatter,
  name: "flutter/svg_image_class.dart",
};
