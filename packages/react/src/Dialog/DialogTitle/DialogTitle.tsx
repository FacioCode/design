import * as React from "react";
import type { DialogTitleProps } from "@material-ui/core/DialogTitle";
import { DialogTitle as MaterialDialogTitle } from "@material-ui/core";
import { Typography } from "../../Typography";

type Render = (props: DialogTitleProps, ref: DialogTitleProps["ref"]) => JSX.Element;

const render : Render = (props: DialogTitleProps, ref) => {
  const { children, ...otherProps } = props;

  return (
    <MaterialDialogTitle {...otherProps} disableTypography={true} ref={ref}>
      <Typography component={"h2"} variant={"headline3"}>
        {children}
      </Typography>
    </MaterialDialogTitle>
  );
};

export const DialogTitle = React.forwardRef<unknown, DialogTitleProps>(render);
DialogTitle.displayName = "DialogTitle";

export default DialogTitle;
