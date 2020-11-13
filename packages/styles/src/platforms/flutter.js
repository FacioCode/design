// eslint-disable-next-line @typescript-eslint/no-var-requires
const { author, bugs, description, displayName, homepage, repository, version } = require("../../package.json");

const flutter = {
  buildPath: "flutter/",
  files: [
    {
      className: "ColorPalette",
      destination: "lib/src/ColorPalette.dart",
      filter: {
        attributes: {
          category: "color",
        },
      },
      format: "flutter/class.dart",
    }, {
      className: "Fonts",
      destination: "lib/src/Fonts.dart",
      filter: {
        attributes: {
          category: "font",
        },
      },
      format: "flutter/class.dart",
    }, {
      className: "FontSizes",
      destination: "lib/src/FontSizes.dart",
      filter: {
        attributes: {
          category: "size",
          type: "font",
        },
      },
      format: "flutter/class.dart",
    }, {
      destination: "pubspec.yaml",
      format: "flutter/pubspec.yaml",
    },
  ],
  pubspec: {
    author: author.name,
    description,
    displayName,
    documentation: homepage,
    homepage,
    issueTracker: bugs.url,
    repository: repository.url,
    version,
  },
  transformGroup: "flutter-separate",
};

module.exports = flutter;
