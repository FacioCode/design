import * as React from "react";
import type { DialogContentProps } from "./DialogContent.types";
import { DialogContent as MaterialDialogContent } from "@material-ui/core";

type Render = (props: DialogContentProps, ref: DialogContentProps["ref"]) => JSX.Element;

const render : Render = (props: DialogContentProps, ref: DialogContentProps["ref"]) => (
  <MaterialDialogContent {...props} ref={ref} />
);

export const DialogContent = React.forwardRef<unknown, DialogContentProps>(render);
DialogContent.displayName = "DialogContent";

export default DialogContent;
