import type { ThemeOptions } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";
import { overrides } from "./overrides";
import { palette } from "./palette";
import { props } from "./props";
import { typography } from "./typography";

export const themeOptions : ThemeOptions = {
  overrides: {
    ...overrides,
    MuiAlert: {
      icon: customProperties.alertStyles.icon,
      message: customProperties.alertStyles.message,
      root: customProperties.alertStyles.root,
      standardInfo: customProperties.alertStyles.standardInfo,
      standardWarning: customProperties.alertStyles.standardWarning,
    },
    MuiAlertTitle: customProperties.alertTitleStyles,
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
