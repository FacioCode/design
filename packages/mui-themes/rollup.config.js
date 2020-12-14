import { browser, directories, displayName, module, source } from "./package.json";
import config from "../../config/rollup/rollup.config";

export default config({
  browser,
  directories,
  displayName,
  globals: {
    "@material-ui/core": "MuiCore",
  },
  module,
  source,
});
