import { IconButtonProps as MaterialIconButtonProps } from "@material-ui/core";

type OmittedProps =
  "centerRipple" |
  "css" |
  "disableRipple" |
  "disableFocusRipple" |
  "disableTouchRipple" |
  "focusRipple" |
  "TouchRippleProps";
export type IconButtonProps = Omit<MaterialIconButtonProps, OmittedProps>;
