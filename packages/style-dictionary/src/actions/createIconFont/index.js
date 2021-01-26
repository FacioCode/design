const fs = require("fs");
const webfont = require("webfont").default;

const formats = ["eot", "svg", "ttf", "woff", "woff2"];
const getFontPath = ({ buildPath, format }) => `${buildPath}assets/fonts/FacioIcons.${format}`;

const doCallback = (dictionary, { buildPath }) => {
  const webfontConfig = {
    files: "assets/icons/*.svg",
    fontName: "FacioIcons",
  };

  webfont(webfontConfig).then((result) => {
    formats.forEach((format) => {
      const path = getFontPath({ buildPath, format });

      fs.writeFile(path, result[format], () => {
        // eslint-disable-next-line no-console
        console.log(`✔︎  ${path} created`);
      });
    });

    return result;
  }).
    catch((error) => {
      throw error;
    });
};

const undoCallback = (dictionary, { buildPath }) => {
  formats.forEach((format) => {
    const path = getFontPath({ buildPath, format });

    fs.unlink(path, () => {
      // eslint-disable-next-line no-console
      console.log(`${path} removed`);
    });
  });
};

const createIconFontAction = {
  do: doCallback,
  name: "create_icon_font",
  undo: undoCallback,
};

module.exports = createIconFontAction;
