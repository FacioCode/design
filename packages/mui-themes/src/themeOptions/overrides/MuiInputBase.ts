/* eslint-disable sort-keys */
import { customProperties } from "@faciocode/styles";

const { placeholder } = customProperties.inputBaseStyles;

export const MuiInputBase = {
  root: {
    ...customProperties.inputBaseStyles.root,
    ...customProperties.inputBaseStyles.medium,
  },
  input: {
    ...customProperties.inputBaseStyles.input,
    ...customProperties.inputBaseStyles.inputMedium,
    "&:-ms-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    "&::-ms-input-placeholder": placeholder,
    "&::-webkit-input-placeholder": placeholder,
  },
};

export default MuiInputBase;
