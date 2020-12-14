import { colorTokens, customProperties } from "@faciocode/styles";
import { ThemeOptions } from "@material-ui/core";
import { typography } from "./typography";

export const themeOptions : ThemeOptions = {
  overrides: {
    MuiAlert: {
      root: customProperties.alertStyles.root,
      standardInfo: customProperties.alertStyles.standardInfo,
    },
    MuiButton: {
      contained: customProperties.buttonStyles.contained,
      label: customProperties.buttonStyles.label,
      outlined: customProperties.buttonStyles.outlined,
      outlinedSizeSmall: customProperties.buttonStyles.outlinedSizeSmall,
      root: {
        ...customProperties.buttonStyles.root,
        ...customProperties.buttonStyles.sizeMedium,
      },
      sizeSmall: customProperties.buttonStyles.sizeSmall,
    },
    MuiButtonBase: {
      root: customProperties.buttonBaseStyles.root,
    },
    MuiCard: {
      root: customProperties.cardStyles.root,
    },
    MuiCardContent: {
      root: customProperties.cardContentStyles.root,
    },
    MuiPaper: {
      root: {
        ...customProperties.paperStyles.root,
        ...customProperties.paperStyles.square,
      },
      rounded: customProperties.paperStyles.rounded,
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
    MuiPaper: {
      elevation: 0,
      square: true,
    },
  },
  typography,
} as ThemeOptions;

export default themeOptions;
