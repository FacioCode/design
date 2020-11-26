import { browser, directories, displayName, module, source } from "./package.json";
import config from "../../config/rollup/rollup.config";

export default config({
  browser,
  directories,
  displayName,
  globals: {
    "@faciocode/react-unstyled": "FacioReactUnstyled",
    "@faciocode/styles/dist/index.css": "FacioStyles",
    "@material-ui/styles": "MaterialUiStyles",
    lodash: "_",
    react: "React",
  },
  module,
  source,
});
