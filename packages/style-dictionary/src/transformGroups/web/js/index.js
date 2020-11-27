const webBaseTransformGroup = require("..");

const webJSTransformGroup = {
  name: "web/js",
  transforms: [
    ...webBaseTransformGroup.transforms,
    "name/ti/camel",
  ],
};

module.exports = webJSTransformGroup;
