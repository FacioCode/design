import * as React from "react";
import { AlertProps } from "./Alert.types";
import { Alert as MaterialAlert } from "@material-ui/lab";
import clsx from "clsx";
import useStyles from "./Alert.styles";

type Render = (props: AlertProps, ref: AlertProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const { className, color, gutters, ...otherProps } = props;

  const { gutters: guttersClassName } = useStyles();

  const classNames = clsx({
    [guttersClassName]: gutters === true,
    // eslint-disable-next-line sort-keys
    className,
  });

  return <MaterialAlert
    className={classNames}
    color={color}
    ref={ref}
    severity={color}
    {...otherProps}
  />;
};

export const Alert = React.forwardRef<unknown, AlertProps>(render);
Alert.displayName = "Alert";

export default Alert;
