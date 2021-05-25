import type { Config } from "@jest/types";

const modulePathIgnorePatterns = [
  "/.stryker-tmp/",
  "/coverage/",
  "/dist/",
];

const ignorePatterns = [
  ...modulePathIgnorePatterns,
  "/node_modules/",
];

const config: Config.InitialOptions = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ignorePatterns,
  errorOnDeprecated: true,
  modulePathIgnorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  transformIgnorePatterns: ignorePatterns,
  verbose: true,
  watchPathIgnorePatterns: ignorePatterns,
};

export default config;
