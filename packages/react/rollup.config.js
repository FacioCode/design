import { unpkg as browser, directories, displayName, module, source } from "./package.json";
import config from "../../config/rollup/rollup.config";

export default config({
  browser,
  directories,
  displayName,
  globals: {
    "@faciocode/styles": "FacioStyles",
    "@material-ui/core": "MuiCore",
    "@material-ui/core/styles": "MuiCoreStyles",
    "@material-ui/lab": "MuiLab",
    lodash: "_",
    "prop-types": "PropTypes",
    react: "React",
  },
  module,
  source,
});
