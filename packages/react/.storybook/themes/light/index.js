import { create } from "@storybook/theming/create";
import { colorTokens, componentTokens } from "@faciocode/styles";

const themeOptions = {
  base: "light",

  colorPrimary: "#3fe1b6",
  colorSecondary: colorTokens.baseSecondaryMain,

  // UI
  appBg: colorTokens.backgroundDefault,
  appContentBg: colorTokens.backgroundPaper,
  appBorderColor: colorTokens.borderDivider,
  /**
   * @todo use token
   */
  appBorderRadius: 8,

  // Typography
  fontBase: componentTokens.baselineBodyFontFamily,

  // Text colors
  textColor: colorTokens.fontPrimary,
  textInverseColor: colorTokens.fontInverse,

  // Toolbar default and active color
  barBg: componentTokens.appBarColorDefaultBackgroundColor,

  // Form colors
  inputBg: componentTokens.filledInputRootBackgroundColor,
  inputTextColor: componentTokens.inputBaseRootColor,
  /**
   * @todo use token
   */
  inputBorderRadius: 8,

  brandTitle: "Facio Storybook",
};

export const lightTheme = create(themeOptions);

export default lightTheme;
