import { ComponentsProps } from "@material-ui/core/styles/props";

const MuiButtonBase = {
  disableRipple: true,
  disableTouchRipple: true,
  focusRipple: false,
};

const MuiInput = {
  disableUnderline: true,
};

const MuiInputLabel = {
  shrink: true,
};

const MuiSnackbarContent = {
  elevation: 4,
};

export const props : ComponentsProps = {
  MuiAppBar: {
    color: "default",
    elevation: 0,
  },
  MuiButton: {
    ...MuiButtonBase,
    disableElevation: true,
    size: "small",
  },
  MuiButtonBase,
  MuiCard: {
    elevation: 0,
  },
  MuiCheckbox: {
    ...MuiButtonBase,
    color: "default",
  },

  /**
   * MuiChip does not need the MuiButtonBasse override
   */
  MuiChip: {
    variant: "outlined",
  },
  MuiDialogContent: {
    dividers: false,
  },
  MuiIconButton: {
    ...MuiButtonBase,
    size: "small",
  },
  MuiInput,
  MuiInputLabel,
  MuiLink: {
    underline: "hover",
  },
  MuiPaper: {
    elevation: 0,
    square: true,
  },
  MuiSnackbar: {
    ContentProps: MuiSnackbarContent,
  },
  MuiSnackbarContent,
  MuiTextField: {
    InputLabelProps: MuiInputLabel,
    InputProps: MuiInput,
    variant: "filled",
  },
};

export default props;
