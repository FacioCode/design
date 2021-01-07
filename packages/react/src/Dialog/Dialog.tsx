import * as React from "react";
import type { DialogProps } from "./Dialog.types";
import { Dialog as MaterialDialog } from "@material-ui/core";

type Render = (props: DialogProps, ref: DialogProps["ref"]) => JSX.Element;

const render : Render = (props: DialogProps, ref) => {
  const { open, ...otherProps } = props;


  return (
    <MaterialDialog
      open={open}
      ref={ref}
      {...otherProps}
    />);
};

export const Dialog = React.forwardRef<unknown, DialogProps>(render);
Dialog.displayName = "Dialog";

export default Dialog;
