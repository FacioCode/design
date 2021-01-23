/* eslint-disable sort-keys */

import { CSSProperties } from "@material-ui/styles";
import { customProperties } from "@faciocode/styles";

export const MuiButton = {
  colorInherit: {
    "&:active": {
      color: "inherit",
    },
  },
  contained: {
    ...customProperties.containedButtonStyles.root,
    ...customProperties.containedButtonStyles.default,
    "&:hover": {
      ...customProperties.containedButtonStyles.defaultHover,
      ...customProperties.containedButtonStyles.hover,
    },
    "&$focusVisible": customProperties.containedButtonStyles.focusVisible,
    "&:active": customProperties.containedButtonStyles.defaultPressed,
  },
  containedPrimary: {
    ...customProperties.containedButtonStyles.brand,
    "&:hover": customProperties.containedButtonStyles.brandHover,
    "&:active": customProperties.containedButtonStyles.brandPressed,
    "&$disabled": {
      ...customProperties.containedButtonStyles.brandDisabled,
      "&:hover": customProperties.containedButtonStyles.brandDisabled,
    },
  },
  containedSizeSmall: customProperties.buttonStyles.sizeSmall,
  disableElevation: {
    "&$focusVisible": {
      boxShadow: null as CSSProperties,
    },
    "&:hover": {
      boxShadow: null as CSSProperties,
    },
  },
  fullWidth: customProperties.buttonStyles.fullWidth,
  label: customProperties.buttonStyles.label as CSSProperties,
  outlined: {
    ...customProperties.outlinedButtonStyles.root,
    ...customProperties.outlinedButtonStyles.default,
    "&:hover": customProperties.outlinedButtonStyles.hover,
    "&$focusVisible": customProperties.outlinedButtonStyles.focusVisible,
    "&:active": customProperties.outlinedButtonStyles.pressed,
  },
  outlinedPrimary: {
    ...customProperties.outlinedButtonStyles.default,
    "&:hover": customProperties.outlinedButtonStyles.hover,
  },
  outlinedSecondary: {
    ...customProperties.outlinedButtonStyles.default,
    "&:hover": customProperties.outlinedButtonStyles.hover,
  },
  outlinedSizeSmall: customProperties.buttonStyles.sizeSmall,
  root: {
    ...customProperties.buttonStyles.root,
    ...customProperties.buttonStyles.sizeMedium,
    "&$disabled": {
      cursor: "not-allowed",
      pointerEvents: "auto",
    },
  },
  sizeSmall: customProperties.buttonStyles.sizeSmall,
  text: {
    ...customProperties.linkButtonStyles.default,
    "&:hover": {
      ...customProperties.linkButtonStyles.hover,
      textDecoration: "underline",
    },
    "&$focusVisible": customProperties.linkButtonStyles.focusVisible,
    "&:active": {
      ...customProperties.linkButtonStyles.pressed,
      textDecoration: "none",
    },
    "&$disabled": {
      ...customProperties.linkButtonStyles.disabled,
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  textPrimary: customProperties.linkButtonStyles.default,
  textSizeSmall: customProperties.buttonStyles.sizeSmall,
};

export default MuiButton;
