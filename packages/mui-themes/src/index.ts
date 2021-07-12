import {
  Theme,
  ThemeOptions,
  unstable_createMuiStrictModeTheme as createMuiStrictModeTheme,
  createTheme,
} from "@material-ui/core";
import { MuiAlert } from "./overrides/MuiAlert";
import { customProperties } from "@faciocode/styles";
import { overrides } from "./overrides";
import { palette } from "./palette";
import { props } from "./props";
import { shadows } from "./shadows";
import { typography } from "./typography";

const themeOptions : ThemeOptions = {
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
    MuiAlertTitle: {
      gutterBottom: false,
    },
    ...props,
  },
  shadows,
  typography,
} as ThemeOptions;

export const strictTheme : Theme = createMuiStrictModeTheme(themeOptions);
export const theme : Theme = createTheme(themeOptions);
