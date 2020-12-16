// eslint-disable-next-line @typescript-eslint/no-var-requires
const isComponent = require("../../../matchers/isComponent");

const webJsPlatform = {
  buildPath: "../styles/src/",
  files: [
    {
      destination: "customProperties.ts",
      filter: (prop) => isComponent(prop),
      format: "web/component_styles.js",
      options: {
        className: "componentStyles",
        showFileHeader: false,
      },
    },
    {
      destination: "componentTokens.ts",
      filter: (prop) => isComponent(prop),
      format: "javascript/es6",
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: "colorTokens.ts",
      filter: ({ attributes }) => attributes.category === "color",
      format: "javascript/es6",
      options: {
        showFileHeader: false,
      },
    },
  ],
  transformGroup: "web/js",
};

module.exports = webJsPlatform;
