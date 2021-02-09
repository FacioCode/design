/* eslint-disable @typescript-eslint/no-var-requires */
const {
  bugs,
  description,
  homepage,
  name: packageName,
  repository,
  version,
} = require("../../../../flutter/package.json");

const colorPalette = require("./colorPalette");
const sizes = require("./sizes");
const textTheme = require("./textTheme");

const generatedFilesPath = "lib/src/generated";

const flutter = {
  actions: ["copy_assets", "create_icon_font"],
  buildPath: "../flutter/",
  files: [
    {
      destination: "pubspec.yaml",
      format: "flutter/pubspec.yaml",
    },
    {
      destination: "lib/styles.dart",
      format: "flutter/package.dart",
    },
    {
      destination: `${generatedFilesPath}/component_styles.dart`,
      filter: ({ attributes }) => {
        const { category, type } = attributes;

        return category === "component" && type !== "typography";
      },
      format: "flutter/component_styles.dart",
      packageName,
    },
    {
      destination: `${generatedFilesPath}/svg_images.dart`,
      filter: ({ attributes }) => attributes.category === "asset" && attributes.type === "image",
      format: "flutter/svg_image_class.dart",
      options: {
        className: "FacioSvgImages",
      },
      packageName,
    },
    {
      destination: `${generatedFilesPath}/svg_icons.dart`,
      filter: ({ attributes }) => attributes.category === "asset" && attributes.type === "icon",
      format: "flutter/svg_icon_class.dart",
      options: {
        className: "FacioSvgIcons",
      },
      packageName,
    },

    /**
     * @todo Generate color swatches too
     * @see https://stackoverflow.com/a/50214259
     */
    colorPalette({
      destination: `${generatedFilesPath}/color_palette.dart`,
      packageName,
    }),
    sizes({
      destination: `${generatedFilesPath}/sizes.dart`,
      packageName,
    }),
    textTheme({
      destination: `${generatedFilesPath}/text_theme.dart`,
      packageName,
    }),
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
