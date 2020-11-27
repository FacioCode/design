const fontSizeToRem = require("./size/fontSizeToRem");
const lineHeightToEm = require("./size/lineHeightToEm");
const componentFlutterAlignment = require("./component/flutter/alignment");
const componentFlutterFontWeight = require("./component/flutter/fontWeight");
const sizeFlutterToDouble = require("./size/flutter/toDouble");
const sizeWebPx = require("./size/web/px");

const transforms = [
  componentFlutterAlignment,
  componentFlutterFontWeight,
  fontSizeToRem,
  lineHeightToEm,
  sizeFlutterToDouble,
  sizeWebPx,
];

const registerTransforms = (styleDictionary) => {
  transforms.forEach((transform) => {
    styleDictionary.registerTransform(transform);
  });
};

module.exports = {
  registerTransforms, transforms,
};
