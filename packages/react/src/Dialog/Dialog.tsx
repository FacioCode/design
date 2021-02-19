import * as React from "react";
import { CloseIcon } from "../icons/CloseIcon";
import type { DialogProps } from "./Dialog.types";
import { IconButton } from "../IconButton";
import { Dialog as MaterialDialog } from "@material-ui/core";
import useMediaQuery from "../hooks/useMediaQuery";
import { useStyles } from "./Dialog.styles";

type Render = (props: DialogProps, ref: DialogProps["ref"]) => JSX.Element;

const render : Render = (props: DialogProps, ref) => {
  const {
    CloseButtonProps = {},
    children,
    fullScreen: fullScreenProp,
    onClose,
    open,
    ...otherProps
  } = props;

  const fullScreenMatcher = useMediaQuery("(max-width: 600px)");

  let fullScreen = fullScreenProp;

  if (fullScreenMatcher) {
    fullScreen = true;
  }

  const { closeButton } = useStyles();

  return (
    <MaterialDialog
      fullScreen={fullScreen}
      onClose={onClose}
      open={open}
      ref={ref}
      {...otherProps}>
      {children}
      {onClose && <IconButton {...CloseButtonProps} className={closeButton}>
        <CloseIcon />
      </IconButton>}
    </MaterialDialog>);
};

export const Dialog = React.forwardRef<unknown, DialogProps>(render);
Dialog.displayName = "Dialog";

export default Dialog;
