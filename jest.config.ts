import { displayName } from "./package.json";

const ignorePatterns = [
  "/.stryker-tmp/",
  "/node_modules/",
];

export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ignorePatterns,
  displayName,
  projects: [
    "<rootDir>",
    "<rootDir>/packages/react",
    "<rootDir>/packages/react-storybook",
  ],
  testPathIgnorePatterns: ignorePatterns,
};
