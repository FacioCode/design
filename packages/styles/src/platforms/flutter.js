/* eslint-disable @typescript-eslint/no-var-requires */
const {
  bugs, description, displayName: packageName, homepage, repository, version,
} = require("../../package.json");

const colorPalette = {
  className: "ColorPalette",
  destination: "lib/color_palette.dart",
  filter: {
    attributes: {
      category: "color",
    },
  },
  format: "flutter/library_class.dart",
  packageName,
};

const fonts = {
  className: "Fonts",
  destination: "lib/fonts.dart",
  filter: {
    attributes: {
      category: "font",
    },
  },
  format: "flutter/library_class.dart",
  packageName,
};

const sizes = {
  className: "Sizes",
  destination: "lib/sizes.dart",
  filter: {
    attributes: {
      category: "size",
    },
  },
  format: "flutter/library_class.dart",
  packageName,
};

const fontSizes = {
  className: "FontSizes",
  destination: "lib/font_sizes.dart",
  filter: {
    attributes: {
      category: "size",
      type: "font",
    },
  },
  format: "flutter/library_class.dart",
  packageName,
};

const textTheme = {
  className: "TextStyles",
  destination: "lib/text_theme.dart",
  filter: {
    attributes: {
      category: "component",
      type: "typography",
    },
  },
  format: "flutter/text_theme.dart",
  packageName,
};

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
    colorPalette,
    fonts,
    fontSizes,
    sizes,
    textTheme,
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
