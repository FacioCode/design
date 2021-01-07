import * as React from "react";
import type { DialogTitleProps } from "@material-ui/core/DialogTitle";
import { DialogTitle as MaterialDialogTitle } from "@material-ui/core";

type Render = (props: DialogTitleProps, ref: DialogTitleProps["ref"]) => JSX.Element;

const render : Render = (props: DialogTitleProps, ref) => (
  <MaterialDialogTitle {...props} ref={ref} />
);

export const DialogTitle = React.forwardRef<unknown, DialogTitleProps>(render);
DialogTitle.displayName = "DialogTitle";

export default DialogTitle;
