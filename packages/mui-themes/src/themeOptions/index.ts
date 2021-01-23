import { MuiAlert } from "./overrides/MuiAlert";
import type { ThemeOptions } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";
import { overrides } from "./overrides";
import { palette } from "./palette";
import { props } from "./props";
import { shadows } from "./shadows";
import { typography } from "./typography";

export const themeOptions : ThemeOptions = {
  overrides: {
    ...overrides,
    MuiAlert,
    MuiAlertTitle: customProperties.alertTitleStyles,
  },
  palette,
  props: {
    MuiAlert: {
      severity: "info",
    },
    ...props,
  },
  shadows,
  typography,
} as ThemeOptions;

export default themeOptions;
