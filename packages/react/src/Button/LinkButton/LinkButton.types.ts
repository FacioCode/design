import { ButtonProps } from "../Button.types";
import { LinkColor } from "../../Link";

export interface LinkButtonProps extends ButtonProps {

  /**
   * You can set `Link` color to `inherit` if you need to use it inside a Snackbar.
   *
   * @default "default"
   * @optional
   * @type "default" | "inherit"
   */
  color?: LinkColor
}
