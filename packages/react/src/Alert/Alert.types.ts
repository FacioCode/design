import { AlertProps as MaterialAlertProps } from "@material-ui/lab/Alert";

type AlertVariant = "filled" | "standard";
type OmittedProps = "css" | "elevation" | "severity" | "variant";

export interface AlertProps extends Omit<MaterialAlertProps, OmittedProps> {

  /**
   * The main color for the alert. Unless provided, the value will be `"info"``
   *
   * @default "info"
   * @optional
   * @type "error" | "info" | "success" | "warning"
   */
  color?: MaterialAlertProps["color"];

  /**
   * Add elevation.
   *
   * Useful if `Alert` will be used inside `Snackbar`.
   *
   * @default false
   * @optional
   * @type boolean
   */
  elevation?: boolean

  /**
   * If `true`, enables horizontal gutters.
   *
   * @default false
   * @optional
   * @type bool
   */
  gutters?: boolean;

  /**
   * The `Alert` variant to use.
   *
   * @default "standard"
   * @optional
   * @type "filled" | "standard"
   */
  variant?: AlertVariant
}
