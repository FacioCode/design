const shadowCss = require("../../transforms/shadow/css");
const sizeBasePx = require("../../transforms/size/web/px");
const fontSizeToRem = require("../../transforms/size/fontSizeToRem");
const lineHeightToEm = require("../../transforms/size/lineHeightToEm");

const webBaseTransformGroup = {
  name: "webBase",
  transforms: [
    "attribute/cti",
    "color/css",
    fontSizeToRem.name,
    lineHeightToEm.name,
    sizeBasePx.name,
    shadowCss.name,
  ],
};

module.exports = webBaseTransformGroup;
