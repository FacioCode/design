/* eslint-disable @typescript-eslint/no-var-requires */
const libraryClassFormatter = require("./formats/flutter/library-class-dart");
const packageDartFormatter = require("./formats/flutter/package-dart");
const pubspecYamlFormatter = require("./formats/flutter/pubspec-yaml");
const flutter = require("./platforms/flutter");
const web = require("./platforms/web");

const opts = {
  platforms: { flutter, web },
  source: ["src/properties/**/*.json"],
};

const StyleDictionary = require("style-dictionary").extend(opts);

StyleDictionary.registerFormat({
  formatter: pubspecYamlFormatter,
  name: "flutter/pubspec.yaml",
});

StyleDictionary.registerFormat({
  formatter: packageDartFormatter,
  name: "flutter/package.dart",
});

StyleDictionary.registerFormat({
  formatter: libraryClassFormatter,
  name: "flutter/library_class.dart",
});

StyleDictionary.buildAllPlatforms();
