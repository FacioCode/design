const fs = require("fs");
const { template: lodashTemplate } = require("lodash");

const svgPictureClassFormatter = ({ properties }, options) => {
  // eslint-disable-next-line no-sync
  const templateFile = fs.readFileSync("./src/templates/flutter/svg_picture_class", "utf8");
  const templateContent = templateFile.toString();
  const compiled = lodashTemplate(templateContent);
  const { asset } = properties;

  return compiled({
    asset,
    metadata: options.metadata,
  });
};

module.exports = {
  formatter: svgPictureClassFormatter,
  name: "flutter/svg_picture_class.dart",
};
