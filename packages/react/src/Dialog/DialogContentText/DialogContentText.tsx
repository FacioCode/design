import * as React from "react";
import type { DialogContentTextProps } from "./DialogContentText.types";
import { DialogContentText as MaterialDialogContentText } from "@material-ui/core";

type Render = (props: DialogContentTextProps, ref: DialogContentTextProps["ref"]) => JSX.Element;

const render : Render = (props: DialogContentTextProps, ref: DialogContentTextProps["ref"]) => (
  <MaterialDialogContentText {...props} color={"textPrimary"} ref={ref} />
);

export const DialogContentText = React.forwardRef<unknown, DialogContentTextProps>(render);
DialogContentText.displayName = "DialogContent";

export default DialogContentText;
