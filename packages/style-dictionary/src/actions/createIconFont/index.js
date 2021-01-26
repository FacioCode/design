const fs = require("fs");
const webfont = require("webfont").default;

const formats = ["eot", "svg", "ttf", "woff", "woff2"];

const createIconFontAction = {
  do: (dictionary, options) => {
    const { buildPath } = options;

    const webfontConfig = {
      files: "assets/icons/*.svg",
      fontName: "FacioIcons",
    };

    webfont(webfontConfig).then((result) => {
      const getFontPath = ({ format }) => `${buildPath}assets/fonts/FacioIcons.${format}`;

      console.log("\nwebfont");

      formats.forEach((format) => {
        const path = getFontPath({ format });

        fs.writeFile(path, result[format], () => {
          // eslint-disable-next-line no-console
          console.log(`\x1b[32m✔\x1b[0m︎  ${path}`);
        });
      });

      return result;
    }).
      catch((error) => {
        throw error;
      });
  },
  name: "create_icon_font",
  undo: (dictionary, { buildPath }) => {
    const getFontPath = ({ format }) => `${buildPath}assets/fonts/FacioIcons.${format}`;

    formats.forEach((format) => {
      const path = getFontPath({ format });

      fs.unlink(path, () => {
        Function.prototype();
      });
    });
  },
};

module.exports = createIconFontAction;
