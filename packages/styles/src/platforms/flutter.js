/* eslint-disable @typescript-eslint/no-var-requires */
const {
  author, bugs, description, displayName: packageName, homepage, repository, version,
} = require("../../package.json");

const flutter = {
  buildPath: "flutter/",
  files: [
    {
      className: "ColorPalette",
      destination: "lib/src/color_palette.dart",
      filter: {
        attributes: {
          category: "color",
        },
      },
      format: "flutter/library_class.dart",
      packageName,
    }, {
      className: "Fonts",
      destination: "lib/src/fonts.dart",
      filter: {
        attributes: {
          category: "font",
        },
      },
      format: "flutter/library_class.dart",
      packageName,
    }, {
      className: "FontSizes",
      destination: "lib/src/font_sizes.dart",
      filter: {
        attributes: {
          category: "size",
          type: "font",
        },
      },
      format: "flutter/library_class.dart",
      packageName,
    }, {
      destination: "pubspec.yaml",
      format: "flutter/pubspec.yaml",
    },
    {
      destination: "lib/facio_styles.dart",
      format: "flutter/package.dart",
    },
  ],
  metadata: {
    author: author.name,
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
