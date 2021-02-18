import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { ContainedButton } from "../Button";
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
      <ContainedButton onClick={handleClickOpen}>Open dialog</ContainedButton>
      <Dialog {...props} onClose={handleClose} open={open}>
        {props.children}
        <DialogActions>
          <ContainedButton color={"brand"} onClick={handleClose}>Approve</ContainedButton>
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
