const ignorePatterns = [
  "/.stryker-tmp/",
  "/node_modules/",
];

export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  verbose: true,
};
