import { colorTokens, customProperties } from "@faciocode/styles";
import type { ThemeOptions } from "@material-ui/core";
import { overrides } from "./overrides";
import { typography } from "./typography";

export const themeOptions : ThemeOptions = {
  overrides: {
    ...overrides,
    MuiAlert: {
      root: customProperties.alertStyles.root,
      standardInfo: customProperties.alertStyles.standardInfo,
    },
  },
  palette: {
    background: {
      default: colorTokens.backgroundDefault,
      paper: colorTokens.backgroundPaper,
    },
    common: {
      black: colorTokens.baseBlack,
      white: colorTokens.baseWhite,
    },
    error: {
      contrastText: colorTokens.fontInverse,
      main: colorTokens.baseErrorMain,
    },
    grey: {
      50: colorTokens.baseGrey05,
      // eslint-disable-next-line sort-keys
      100: colorTokens.baseGrey10,
      200: colorTokens.baseGrey20,
      300: colorTokens.baseGrey30,
      400: colorTokens.baseGrey40,
      500: colorTokens.baseGrey50,
      600: colorTokens.baseGrey60,
      700: colorTokens.baseGrey70,
      800: colorTokens.baseGrey80,
      900: colorTokens.baseGrey90,
    },
    info: {
      contrastText: colorTokens.fontPrimary,
      main: colorTokens.baseInfoMain,
    },
    primary: {
      dark: colorTokens.basePrimaryDark,
      main: colorTokens.basePrimaryMain,
    },
    secondary: {
      dark: colorTokens.baseSecondaryDark,
      main: colorTokens.baseSecondaryMain,
    },
    success: {
      main: colorTokens.baseSuccessMain,
    },
    type: "light",
    warning: {
      main: colorTokens.baseWarningMain,
    },
  },
  props: {
    MuiAlert: {
      severity: "info",
    },
    MuiButton: {
      disableElevation: true,
      disableRipple: true,
      size: "small",
    },
    MuiCard: {
      elevation: 0,
    },
    MuiInput: {
      disableUnderline: true,
    },
    MuiPaper: {
      elevation: 0,
      square: true,
    },
  },
  typography,
} as ThemeOptions;

export default themeOptions;
