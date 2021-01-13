import base from "./config/jest/jest.config";
import { displayName } from "./package.json";

export default {
  ...base,
  displayName,
  projects: [
    "<rootDir>",
    "<rootDir>/packages/react",
    "<rootDir>/packages/react-storybook",
  ],
};
