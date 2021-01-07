import type { CheckboxProps as MaterialCheckboxProps } from "@material-ui/core/Checkbox";

type OmittedProps = |
  "centerRipple" |
  "color" |
  "disableFocusRipple" |
  "disableTouchRipple" |
  "focusRipple" |
  "TouchRippleProps"
;

export type CheckboxProps = Omit<MaterialCheckboxProps, OmittedProps>;
