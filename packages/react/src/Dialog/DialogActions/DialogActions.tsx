import * as React from "react";
import type { DialogActionsProps } from "@material-ui/core/DialogActions";
import { DialogActions as MaterialDialogActions } from "@material-ui/core";

type Render = (props: DialogActionsProps, ref: DialogActionsProps["ref"]) => JSX.Element;

const render : Render = (props: DialogActionsProps, ref) => (
  <MaterialDialogActions {...props} ref={ref} />
);

export const DialogActions = React.forwardRef<unknown, DialogActionsProps>(render);
DialogActions.displayName = "DialogTitle";

export default DialogActions;
