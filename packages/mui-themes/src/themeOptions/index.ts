import { customProperties } from "@faciocode/styles";
import type { ThemeOptions } from "@material-ui/core";
import { overrides } from "./overrides";
import { palette } from "./palette";
import { props } from "./props";
import { typography } from "./typography";

export const themeOptions : ThemeOptions = {
  overrides: {
    ...overrides,
    MuiAlert: {
      root: customProperties.alertStyles.root,
      standardInfo: customProperties.alertStyles.standardInfo,
    },
  },
  palette,
  props: {
    MuiAlert: {
      severity: "info",
    },
    ...props,
  },
  typography,
} as ThemeOptions;

export default themeOptions;
