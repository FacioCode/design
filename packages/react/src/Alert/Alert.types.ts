import { AlertProps as MaterialAlertProps } from "@material-ui/lab/Alert";

export interface AlertProps extends Omit<MaterialAlertProps, "severity"> {

  /**
   * The main color for the alert. Unless provided, the value will be `"info"``
   *
   * @default "info"
   * @optional
   */
  color?: MaterialAlertProps["color"]
}
