import { IconButtonProps as MaterialIconButtonProps } from "@material-ui/core";

type OmittedProps =
  "centerRipple" |
  "disableRipple" |
  "disableFocusRipple" |
  "disableTouchRipple" |
  "focusRipple" |
  "TouchRippleProps";
export type IconButtonProps = Omit<MaterialIconButtonProps, OmittedProps>;
