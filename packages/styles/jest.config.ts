import { baseConfig } from "../../jest.config";
import pkg from "./package.json";

const config = {
  ...baseConfig,
  displayName: pkg.displayName,
};

export default config;
