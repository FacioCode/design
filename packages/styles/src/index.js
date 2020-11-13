/* eslint-disable @typescript-eslint/no-var-requires */
const { pubspecYamlFormatter } = require("./formats/flutter/pubspec-yaml");
const flutter = require("./platforms/flutter");
const web = require("./platforms/web");

const opts = {
  platforms: { flutter, web },
  source: ["properties/**/*.json"],
};

const StyleDictionary = require("style-dictionary").extend(opts);

StyleDictionary.registerFormat({
  formatter: pubspecYamlFormatter,
  name: "flutter/pubspec.yaml",
});

StyleDictionary.buildAllPlatforms();
