import { AlertProps } from "../Alert";
import { SnackbarProps as MaterialSnackbarProps } from "@material-ui/core/Snackbar";
import { Omit } from "@material-ui/types";

export interface SnackbarProps extends Omit<MaterialSnackbarProps, "css"> {

  /**
   * @optional
   */
  action?: MaterialSnackbarProps["action"];

  /**
   * `Snackbar` components don't accept text as child elements.
   *
   * Text in JSX has the type 'string',
   * but the expected type of 'children' is 'ReactElement<any, any> | undefined'.
   *
   * @optional
   * @type ReactElement<any, any> | undefined
   */
  children?: MaterialSnackbarProps["children"];

  /**
   * @optional
   * @type "error" | "info" | "success" | "warning" | undefined
   */
  color?: AlertProps["color"]

  /**
   * @optional
   */
  message?: MaterialSnackbarProps["message"];

}
