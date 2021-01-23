import * as React from "react";
import { Alert } from "../Alert";
import { Snackbar as MaterialSnackbar } from "@material-ui/core";
import { SnackbarProps } from "./Snackbar.types";

type Render = (props: SnackbarProps, ref: SnackbarProps["ref"]) => JSX.Element;
const render : Render = (props, ref) => {
  const { children, color, ...otherProps } = props;

  let snackbarChildren = children;

  if (typeof color === "string") {
    snackbarChildren = <Alert color={color} elevation={true}>{children}</Alert>;
  }

  return <MaterialSnackbar {...otherProps} ref={ref}>{snackbarChildren}</MaterialSnackbar>;
};

export const Snackbar = React.forwardRef<unknown, SnackbarProps>(render);
Snackbar.displayName = "Snackbar";

export default Snackbar;
