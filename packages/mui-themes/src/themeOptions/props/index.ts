import { ComponentsProps } from "@material-ui/core/styles/props";

const MuiButtonBase = {
  disableRipple: true,
  disableTouchRipple: true,
  focusRipple: false,
};

export const props : ComponentsProps = {
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
  MuiChip: {
    ...MuiButtonBase,
    variant: "outlined",
  },
  MuiDialogContent: {
    dividers: false,
  },
  MuiIconButton: MuiButtonBase,
  MuiInput: {
    disableUnderline: true,
  },
  MuiPaper: {
    elevation: 0,
    square: true,
  },
};

export default props;
