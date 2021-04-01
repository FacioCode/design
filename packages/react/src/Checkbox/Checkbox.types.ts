import type { CheckboxProps as MaterialCheckboxProps } from "@material-ui/core/Checkbox";
import { Omit } from "@material-ui/types";

type OmittedProps = |
  "centerRipple" |
  "color" |
  "css" |
  "disableFocusRipple" |
  "disableTouchRipple" |
  "focusRipple" |
  "TouchRippleProps"
;

export type CheckboxProps = Omit<MaterialCheckboxProps, OmittedProps>;
