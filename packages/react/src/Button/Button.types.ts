import { ButtonProps as MaterialButtonProps } from "@material-ui/core/Button";

type ButtonColor = "default" | "brand" | "warning" | "danger" | "success";
type ButtonVariant = "contained" | "link" | "outlined"

type OmittedProps =
  | "centerRipple"
  | "color"
  | "disableElevation"
  | "disableFocusRipple"
  | "disableRipple"
  | "disableTouchRipple"
  | "focusRipple"
  | "TouchRippleProps"
  | "variant"
;

export type ColorMapping = Record<ButtonColor, MaterialButtonProps["color"]>
export type VariantMapping = Record<ButtonVariant, MaterialButtonProps["variant"]>

export interface ButtonProps extends Omit<MaterialButtonProps, OmittedProps> {

  /**
   * @default "default"
   * @optional
   */
  color?: ButtonColor

  /**
   * @default "outlined"
   * @optional
   */
  variant?: ButtonVariant
}
