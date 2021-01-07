import { ButtonProps as MaterialButtonProps } from "@material-ui/core/Button";

type ButtonColor = "default" | "brand" | "warning" | "danger";
type ButtonSize = "small" | "medium";
type ButtonVariant = "contained" | "link" | "outlined"

type OmittedProps =
  | "centerRipple"
  | "color"
  | "disableElevation"
  | "disableFocusRipple"
  | "disableRipple"
  | "disableTouchRipple"
  | "size"
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
   * @default "small"
   * @optional
   */
  size?: ButtonSize

  /**
   * @default "outlined"
   * @optional
   */
  variant?: ButtonVariant
}
