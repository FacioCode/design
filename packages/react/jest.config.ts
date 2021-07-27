import { baseConfig } from "../../jest.config";
import { compilerOptions } from "./tsconfig.json";
import { pathsToModuleNameMapper } from "ts-jest/utils";
import pkg from "./package.json";

const config = {
  ...baseConfig,
  displayName: pkg.displayName,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};

export default config;
