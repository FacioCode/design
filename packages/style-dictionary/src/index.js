const StyleDictionary = require("style-dictionary");
const { registerFormats } = require("./formats");
const { registerTransforms } = require("./transforms");

const webCssTransformGroup = require("./transformGroups/web/css");
const webJsTransformGroup = require("./transformGroups/web/js");
const createIconFontAction = require("./actions/createIconFont");
const { platformNames, platforms, getPlatformTokensFolder } = require("./platforms");

const themes = ["light"];

const config = ({ platform, theme }) => ({
  platforms,
  source: [
    "src/tokens/assets/**/*.json",
    `src/tokens/themes/${theme}/**/*.json`,
    "src/tokens/globals/**/*.json",
    `src/tokens/platforms/${getPlatformTokensFolder(platform)}/**/*.json`,
  ],
});

themes.map((theme) => {
  platformNames.map((platform) => {
    const styleDictionary = StyleDictionary.extend(config({ platform, theme }));

    registerFormats(styleDictionary);
    registerTransforms(styleDictionary);
    styleDictionary.registerTransformGroup(webCssTransformGroup);
    styleDictionary.registerTransformGroup(webJsTransformGroup);
    styleDictionary.registerAction(createIconFontAction);

    // eslint-disable-next-line no-console
    console.log(`\nProcessing: [${platform}] [${theme}]`);
    styleDictionary.buildPlatform(platform);
    // eslint-disable-next-line no-console
    console.log("\nEnd processing");

    return platform;
  });

  return theme;
});
