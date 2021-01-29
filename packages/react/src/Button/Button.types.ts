import { ButtonProps as MaterialButtonProps } from "@material-ui/core/Button";

export type ButtonSize = "small" | "medium";

export type ButtonOmittedProps =
  | "centerRipple"
  | "classes"
  | "color"
  | "css"
  | "disableElevation"
  | "disableFocusRipple"
  | "disableRipple"
  | "disableTouchRipple"
  | "focusRipple"
  | "focusVisibleClassName"
  | "size"
  | "TouchRippleProps"
  | "variant";

export interface ButtonProps extends Omit<MaterialButtonProps, ButtonOmittedProps> {

    /**
     * @default "small"
     * @optional
     * @type "small" | "medium"
     */
    size?: ButtonSize
}
