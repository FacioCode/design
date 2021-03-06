import { ComponentsProps } from "@material-ui/core/styles/props";
import { Slide } from "@material-ui/core";

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
    variant: "elevation",
  },
  MuiCheckbox: {
    ...MuiButtonBase,
    color: "default",
  },

  /**
   * MuiChip does not need the MuiButtonBase override
   */
  MuiChip: {
    clickable: true,
    color: "default",
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
    variant: "elevation",
  },
  MuiSnackbar: {
    ContentProps: MuiSnackbarContent,
    TransitionComponent: Slide,
  },
  MuiSnackbarContent,
  MuiSwitch: {
    color: "primary",
    disableRipple: true,
    size: "medium",
  },
  MuiTable: {
    stickyHeader: true,
  },
  MuiTabs: {},
  MuiTextField: {
    InputLabelProps: MuiInputLabel,
    InputProps: MuiInput,
    variant: "filled",
  },
  MuiTooltip: {
    arrow: true,
  },
};

export default props;
