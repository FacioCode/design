/* eslint-disable @typescript-eslint/no-var-requires */
const libraryClassFormatter = require("./formats/flutter/library-class-dart");
const packageDartFormatter = require("./formats/flutter/package-dart");
const pubspecYamlFormatter = require("./formats/flutter/pubspec-yaml");
const flutter = require("./platforms/flutter");
const web = require("./platforms/web");
const StyleDictionary = require("style-dictionary");

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
    console.log("\n==============================================");
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

    styleDictionary.buildPlatform(platform);
    console.log("\nEnd processing");

    return platform;
  });

  return theme;
});
