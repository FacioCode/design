/* eslint-disable sort-keys */
import type { CSSProperties } from "@material-ui/styles";
import { customProperties } from "@faciocode/styles";

export const MuiFormLabel = {
  root: {
    ...customProperties.formLabelStyles.root,
    "&$focused": customProperties.formLabelStyles.focused,
    "&$disabled": customProperties.formLabelStyles.disabled,
  } as CSSProperties,
};

export const MuiInputLabel = {
  root: {
    "&$focused": customProperties.formLabelStyles.focused,
  },
  filled: {
    ...customProperties.filledInputStyles.label,
    transform: "translate(0, 0) scale(1)",
    "&$shrink": {
      transform: "translate(0, 0) scale(1)",
    },
  } as CSSProperties,
};
