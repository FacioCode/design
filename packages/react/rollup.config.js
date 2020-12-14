import { browser, directories, displayName, module, source } from "./package.json";
import config from "../../config/rollup/rollup.config";

export default config({
  browser,
  directories,
  displayName,
  globals: {
    "@faciocode/styles/dist/index.css": "FacioStyles",
    "@material-ui/core": "MuiCore",
    "@material-ui/core/styles": "MuiCoreStyles",
    lodash: "_",
    react: "React",
  },
  module,
  source,
});
