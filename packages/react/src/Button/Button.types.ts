import { ButtonProps as MaterialButtonProps } from "@material-ui/core/Button";

type ButtonSize = "small" | "medium";

export type ButtonOmittedProps =
  | "centerRipple"
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
     */
    size?: ButtonSize
}
