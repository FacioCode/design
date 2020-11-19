/* eslint-disable @typescript-eslint/no-var-requires */
const {
  bugs, description, displayName: packageName, homepage, repository, version,
} = require("../../../package.json");

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
  transformGroup: "flutter-separate",
};

module.exports = flutter;
