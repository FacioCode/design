const webBaseTransformGroup = require("..");

const webCssTransformGroup = {
  name: "web/css",
  transforms: [
    ...webBaseTransformGroup.transforms,
    "name/cti/kebab",
  ],
};

module.exports = webCssTransformGroup;
