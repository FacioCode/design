import { ButtonOmittedProps, ButtonSize } from "../Button.types";
import type { ButtonGroupProps as MaterialButtonGroupProps } from "@material-ui/core/ButtonGroup";
import { Omit } from "@material-ui/types";

export interface ButtonGroupProps extends Omit<MaterialButtonGroupProps, ButtonOmittedProps> {

  /**
   * @default "small"
   * @optional
   * @type "small" | "medium"
   */
  size?: ButtonSize
}
