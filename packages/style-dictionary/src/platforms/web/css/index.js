// eslint-disable-next-line @typescript-eslint/no-var-requires
const isComponent = require("../../../matchers/isComponent");

const webCssPlatform = {
  buildPath: "../styles/dist/",
  files: [
    {
      destination: "index.css",
      filter: (prop) => isComponent(prop),
      format: "css/variables",
    },
  ],
  transformGroup: "web/css",
};

module.exports = webCssPlatform;
