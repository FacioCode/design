const flutter = require("./flutter");
const webCssPlatform = require("./web/css");
const webJsPlatform = require("./web/js");

const platforms = {
  flutter,
  webCssPlatform,
  webJsPlatform,
};

const platformNames = Object.keys(platforms);

const getPlatformTokensFolder = (platformName) => {
  const map = {
    flutter: "flutter",
    webCssPlatform: "web",
    webJsPlatform: "web",
  };


  return map[platformName];
};

module.exports = {
  getPlatformTokensFolder,
  platformNames,
  platforms,
};
