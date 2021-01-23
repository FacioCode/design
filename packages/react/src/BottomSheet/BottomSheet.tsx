import * as React from "react";
import { BottomSheetProps } from "./BottomSheet.types";
import { Paper } from "../Paper";
import { Slide } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./BottomSheet.styles";

type Render = (props: BottomSheetProps, ref: BottomSheetProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    children,
    className,
    open = true,
    TransitionProps,
    ...otherProps
  } = props;
  const { root } = useStyles();

  const classNames = clsx(root, className);

  return (
    <Slide
      {...TransitionProps}
      direction={"up"}
      in={Boolean(open)}
    >
      <Paper
        {...otherProps}
        className={classNames}
        elevation={6}
        ref={ref}>
        {children}
      </Paper>
    </Slide>
  );
};

export const BottomSheet = React.forwardRef<unknown, BottomSheetProps>(render);
BottomSheet.displayName = "BottomSheet";

export default BottomSheet;
