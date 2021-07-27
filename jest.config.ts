import type { Config } from "@jest/types";

const modulePathIgnorePatterns = [
  "/.stryker-tmp/",
  "/coverage/",
  "/dist/",
  "/src.old/",
];

const ignorePatterns = [
  ...modulePathIgnorePatterns,
  "/node_modules/",
];

export const baseConfig : Config.InitialOptions = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ignorePatterns,
  errorOnDeprecated: true,
  testPathIgnorePatterns: ignorePatterns,
  transformIgnorePatterns: ignorePatterns,
  verbose: true,
  watchPathIgnorePatterns: ignorePatterns,
};

const config = {
  ...baseConfig,
  projects: ["<rootDir>/packages/*"],
};

export default config;
