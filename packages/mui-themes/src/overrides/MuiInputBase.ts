/* eslint-disable sort-keys */
import { customProperties, sizeTokens } from "@faciocode/styles";

const { placeholder } = customProperties.inputBaseStyles;

export const MuiInputBase = {
  root: {
    ...customProperties.inputBaseStyles.root,
    ...customProperties.inputBaseStyles.medium,
    "&$error": customProperties.inputBaseStyles.error,
    "&$focused": customProperties.inputBaseStyles.focused,
  },
  input: {
    ...customProperties.inputBaseStyles.input,
    ...customProperties.inputBaseStyles.inputMedium,
    "&:-ms-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    "&::-ms-input-placeholder": placeholder,
    "&::-webkit-input-placeholder": placeholder,
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: sizeTokens.baseNone,
    },
    "&[type=number]": {
      MozAppearance: "textfield",
    },
  },
};

export default MuiInputBase;
