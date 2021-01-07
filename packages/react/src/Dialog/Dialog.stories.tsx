import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Button } from "../Button";
import { Dialog } from "./Dialog";
import { DialogActions } from "./DialogActions";
import { DialogContent } from "./DialogContent";
import { DialogContentText } from "./DialogContentText";
import type { DialogProps } from "./Dialog.types";
import { DialogTitle } from "./DialogTitle";

export default {
  component: Dialog,
  subcomponents: { DialogActions, DialogContent, DialogContentText, DialogTitle },
  title: "Components/Dialog",
} as Meta;

const Template : Story<DialogProps> = (props : DialogProps) => {
  const [open, setOpen] = React.useState<DialogProps["open"]>(props.open);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleClickOpen}>Open dialog</Button>
      <Dialog {...props} open={open}>
        {props.children}
        <DialogActions>
          <Button onClick={handleClose}>Not now</Button>
          <Button color={"brand"} onClick={handleClose} variant={"contained"}>Approve</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const Playground : Story<DialogProps> = Template.bind({});
Playground.args = {
  children: [
    <DialogTitle key={"title"}>Approve payroll loans</DialogTitle>,
    <DialogContent key={"content"}>
      <DialogContentText>Are you sure you want to approve operations?</DialogContentText>
    </DialogContent>,
  ],
  open: false,
};
