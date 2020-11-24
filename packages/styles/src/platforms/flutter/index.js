/* eslint-disable @typescript-eslint/no-var-requires */
const {
  bugs, description, displayName: packageName, homepage, repository,
} = require("../../../package.json");
const { version } = require("../../../../flutter-styles/package.json");

const colorPalette = require("./colorPalette");
const sizes = require("./sizes");
const textTheme = require("./textTheme");

const flutter = {
  buildPath: "../flutter-styles/",
  files: [
    {
      destination: "pubspec.yaml",
      format: "flutter/pubspec.yaml",
    },
    {
      destination: "lib/facio_styles.dart",
      format: "flutter/package.dart",
    },
    {
      destination: "lib/component_styles.dart",
      filter: {
        attributes: {
          category: "component",
        },
      },
      format: "flutter/component_styles.dart",
      packageName,
    },
    colorPalette({ packageName }),
    sizes({ packageName }),
    textTheme({ packageName }),
  ],
  metadata: {
    description,
    documentation: homepage,
    homepage,
    issueTracker: bugs.url,
    packageName,
    repository: repository.url,
    version,
  },
  transforms: [
    "attribute/cti",
    "name/ti/camel",
    "color/hex8flutter",
    "size/flutter/toDouble",
    "content/flutter/literal",
    "asset/flutter/literal",
    "font/flutter/literal",
    "component/flutter/alignment",
    "component/flutter/fontWeight",
  ],
};

module.exports = flutter;
