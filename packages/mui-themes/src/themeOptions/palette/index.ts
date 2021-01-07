import type { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { colorTokens } from "@faciocode/styles";

export const palette : PaletteOptions = {
  background: {
    default: colorTokens.backgroundDefault,
    paper: colorTokens.backgroundPaper,
  },
  common: {
    black: colorTokens.baseBlack,
    white: colorTokens.baseWhite,
  },
  divider: colorTokens.borderDivider,
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
    dark: colorTokens.basePrimaryDark,
    main: colorTokens.basePrimaryMain,
  },
  type: "light",
  warning: {
    main: colorTokens.baseWarningMain,
  },
};

export default palette;
