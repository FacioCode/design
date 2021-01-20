import * as React from "react";
import { AlertTitle as MaterialAlertTitle } from "@material-ui/lab";
import { AlertTitleProps } from "./AlertTitle.types";

type Render = (props: AlertTitleProps, ref: AlertTitleProps["ref"]) => JSX.Element;
const render : Render = (props, ref) => (
  <MaterialAlertTitle {...props} ref={ref} />
);

export const AlertTitle = React.forwardRef<unknown, AlertTitleProps>(render);
AlertTitle.displayName = "AlertTitle";

export default AlertTitle;
