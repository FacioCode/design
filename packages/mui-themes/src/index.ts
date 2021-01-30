import { Theme, ThemeOptions, createMuiTheme } from "@material-ui/core";
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
    ...props,
  },
  shadows,
  typography,
} as ThemeOptions;

type CreateTheme = (options: ThemeOptions) => Theme;

const createTheme: CreateTheme = (options: ThemeOptions) => createMuiTheme({
  ...options,
});

export const theme = createTheme(themeOptions);
