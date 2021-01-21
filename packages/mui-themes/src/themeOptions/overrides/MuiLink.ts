/* eslint-disable sort-keys */
import { customProperties } from "@faciocode/styles";

export const MuiLink = {
  root: {
    "&:hover": {
      ...customProperties.linkButtonStyles.hover,
      textDecoration: "underline",
    },
    "&:focus-visible": customProperties.linkButtonStyles.focusVisible,
    "&:active": {
      textDecoration: "none",
    },
    "&:disabled": customProperties.linkButtonStyles.disabled,
  },
  underlineHover: {
    "&:active": {
      textDecoration: "none",
    },
  },
  button: {
    fontSize: "inherit",
    verticalAlign: "baseline",
    "&:focus-visible": customProperties.linkButtonStyles.focusVisible,
  },
};

export default MuiLink;
