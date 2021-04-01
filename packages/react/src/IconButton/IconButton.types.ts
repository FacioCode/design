import { IconButtonProps as MaterialIconButtonProps } from "@material-ui/core";
import { Omit } from "@material-ui/types";

type OmittedProps =
  "centerRipple" |
  "css" |
  "disableRipple" |
  "disableFocusRipple" |
  "disableTouchRipple" |
  "focusRipple" |
  "focusVisibleClassName" |
  "TouchRippleProps";
export type IconButtonProps = Omit<MaterialIconButtonProps, OmittedProps>;
