import { SnackbarProps as MaterialSnackbarProps } from "@material-ui/core/Snackbar";
import { AlertProps } from "../Alert";

export interface SnackbarProps extends MaterialSnackbarProps {

  /**
   * @optional
   * @type "error" | "info" | "success" | "warning" | undefined
   */
  color?: AlertProps["color"]
}
