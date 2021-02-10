import * as React from "react";
import type { DialogProps } from "./Dialog.types";
import { Dialog as MaterialDialog } from "@material-ui/core";
import useMediaQuery from "../hooks/useMediaQuery";

type Render = (props: DialogProps, ref: DialogProps["ref"]) => JSX.Element;

const render : Render = (props: DialogProps, ref) => {
  const { fullScreen: fullScreenProp, open, ...otherProps } = props;

  const fullScreenMatcher = useMediaQuery("(max-width: 600px)");

  let fullScreen = fullScreenProp;

  if (fullScreenMatcher) {
    fullScreen = true;
  }

  return (
    <MaterialDialog
      fullScreen={fullScreen}
      open={open}
      ref={ref}
      {...otherProps}
    />);
};

export const Dialog = React.forwardRef<unknown, DialogProps>(render);
Dialog.displayName = "Dialog";

export default Dialog;
