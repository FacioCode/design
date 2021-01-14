import { AlertProps as MaterialAlertProps } from "@material-ui/lab/Alert";

export interface AlertProps extends Omit<MaterialAlertProps, "css" | "severity"> {

  /**
   * The main color for the alert. Unless provided, the value will be `"info"``
   *
   * @default "info"
   * @optional
   * @type "error" | "info" | "success" | "warning"
   */
  color?: MaterialAlertProps["color"];

  /**
   * If `true`, enables horizontal gutters.
   *
   * @default false
   * @optional
   * @type bool
   */
  gutters?: boolean;
}
