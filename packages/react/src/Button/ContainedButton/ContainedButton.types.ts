import { ButtonProps } from "../Button.types";
import { ButtonProps as MaterialButtonProps } from "@material-ui/core/Button";

type ButtonColor = "default" | "brand" | "warning" | "danger";

export type ColorMapping = Record<ButtonColor, MaterialButtonProps["color"]>

export interface ContainedButtonProps extends ButtonProps {

  /**
   * @default "default"
   * @optional
   */
  color?: ButtonColor

}
