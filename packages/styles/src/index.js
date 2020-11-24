/* eslint-disable no-console,@typescript-eslint/no-var-requires */
const libraryClassFormatter = require("./formats/flutter/library-class-dart");
const packageDartFormatter = require("./formats/flutter/package-dart");
const pubspecYamlFormatter = require("./formats/flutter/pubspec-yaml");
const textThemeFormatter = require("./formats/flutter/text-theme");
const flutter = require("./platforms/flutter");
const web = require("./platforms/web");
const StyleDictionary = require("style-dictionary");
const componentStylesFormatter = require("./formats/flutter/component-styles-dart");
const fontSizeToRem = require("./transforms/size/fontSizeToRem");
const lineHeightToEm = require("./transforms/size/lineHeightToEm");
const componentFlutterAlignment = require("./transforms/component/flutter/alignment");
const componentFlutterFontWeight = require("./transforms/component/flutter/fontWeight");
const sizeFlutterToDouble = require("./transforms/size/flutter/toDouble");

const themes = ["light"];
const platforms = ["flutter", "web"];

const config = ({ platform, theme }) => ({
  platforms: { flutter, web },
  source: [
    `src/tokens/themes/${theme}/**/*.json`,
    "src/tokens/globals/**/*.json",
    `src/tokens/platforms/${platform}/**/*.json`,
  ],
});

themes.map((theme) => {
  platforms.map((platform) => {
    console.log(`\nProcessing: [${platform}] [${theme}]`);

    const styleDictionary = StyleDictionary.extend(config({ platform, theme }));

    styleDictionary.registerFormat({
      formatter: pubspecYamlFormatter,
      name: "flutter/pubspec.yaml",
    });

    styleDictionary.registerFormat({
      formatter: packageDartFormatter,
      name: "flutter/package.dart",
    });

    styleDictionary.registerFormat({
      formatter: libraryClassFormatter,
      name: "flutter/library_class.dart",
    });

    styleDictionary.registerFormat({
      formatter: textThemeFormatter,
      name: "flutter/text_theme.dart",
    });

    styleDictionary.registerFormat({
      formatter: componentStylesFormatter,
      name: "flutter/component_styles.dart",
    });

    styleDictionary.registerTransform(componentFlutterAlignment);
    styleDictionary.registerTransform(componentFlutterFontWeight);
    styleDictionary.registerTransform(fontSizeToRem);
    styleDictionary.registerTransform(lineHeightToEm);
    styleDictionary.registerTransform(sizeFlutterToDouble);

    styleDictionary.buildPlatform(platform);
    console.log("\nEnd processing");

    return platform;
  });

  return theme;
});
