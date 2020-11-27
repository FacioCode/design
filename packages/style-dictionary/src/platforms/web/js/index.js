// eslint-disable-next-line @typescript-eslint/no-var-requires
const isComponent = require("../../../matchers/isComponent");

const webJsPlatform = {
  buildPath: "../styles/src/",
  files: [
    {
      destination: "index.ts",
      filter: (prop) => isComponent(prop),
      format: "javascript/es6",
      options: {
        showFileHeader: false,
      },
    },
  ],
  transformGroup: "web/js",
};

module.exports = webJsPlatform;
