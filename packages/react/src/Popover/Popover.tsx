import * as React from "react";
import { Popover as MaterialPopover } from "@material-ui/core";
import { PopoverProps } from "./Popover.types";

type Render = (props: PopoverProps, ref: PopoverProps["ref"]) => JSX.Element;
const render : Render = (props, ref) => {
  const { open, ...otherProps } = props;

  return (
    <MaterialPopover
      {...otherProps}
      open={open}
      ref={ref}
    />
  );
};

export const Popover = React.forwardRef<unknown, PopoverProps>(render);
Popover.displayName = "Popover";

export default Popover;
