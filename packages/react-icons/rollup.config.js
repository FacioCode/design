import config from "../../config/rollup/rollup.config";
import pkg from "./package.json";

export default config({
  browser: pkg.browser,
  directories: pkg.directories,
  displayName: pkg.displayName,
  globals: {
    "@material-ui/core": "MuiCore",
    react: "React",
  },
  module: pkg.module,
  source: pkg.source,
});
