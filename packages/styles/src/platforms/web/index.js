// eslint-disable-next-line @typescript-eslint/no-var-requires
const isComponent = require("../../matchers/isComponent");

const web = {
  buildPath: "dist/",
  files: [
    {
      destination: "index.css",
      filter: (prop) => isComponent(prop),
      format: "css/variables",
    },
  ],
  transforms: [
    "attribute/cti",
    "name/cti/kebab",
    "color/css",
    "size/web/px",
    "size/fontSizeToRem",
    "size/lineHeightToEm",
  ],
};

module.exports = web;
