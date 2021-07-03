import {
  Theme,
  ThemeOptions,
  unstable_createMuiStrictModeTheme as createMuiStrictModeTheme,
  createMuiTheme,
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

type CreateTheme = (options: ThemeOptions) => Theme;

const createTheme: CreateTheme = (options: ThemeOptions) => createMuiTheme({
  ...options,
});

const createStrictTheme = (options: ThemeOptions) => createMuiStrictModeTheme({
  ...options,
});

export const strictTheme = createStrictTheme(themeOptions);
export const theme = createTheme(themeOptions);
