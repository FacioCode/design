import * as React from "react";
import type { AlertProps } from "./Alert.types";
import { Alert as MaterialAlert } from "@material-ui/lab";
import clsx from "clsx";
import useStyles from "./Alert.styles";

export type { AlertProps } from "./Alert.types";

export const Alert = React.forwardRef<unknown, AlertProps>(
  (props: AlertProps, ref: AlertProps["ref"]) => {
    const { className, color, elevation, gutters, ...otherProps } = props;

    const { gutters: guttersClassName } = useStyles();

    const classNames = clsx({
      [guttersClassName]: gutters === true,
      // eslint-disable-next-line sort-keys
      className,
    });

    const elevationValue = 4;

    return <MaterialAlert
      className={classNames}
      color={color}
      elevation={elevation && elevationValue}
      ref={ref}
      severity={color}
      {...otherProps}
    />;
  });

Alert.displayName = "Alert";

export default Alert;
