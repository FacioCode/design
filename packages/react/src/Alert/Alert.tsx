import * as React from "react";
import { AlertProps } from "./Alert.types";
import { Alert as MaterialAlert } from "@material-ui/lab";

type Render = (props: AlertProps, ref: AlertProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const { color, ...otherProps } = props;

  return <MaterialAlert
    color={color}
    ref={ref}
    severity={color}
    {...otherProps}
  />;
};

export const Alert = React.forwardRef<unknown, AlertProps>(render);
Alert.displayName = "Alert";

export default Alert;
