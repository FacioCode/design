import * as React from "react";
import { Tooltip as MaterialTooltip } from "@material-ui/core";
import { TooltipProps } from "./Tooltip.types";

type Render = (props: TooltipProps, ref: TooltipProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    title,
    ...otherProps
  } = props;

  return (
    <MaterialTooltip
      {...otherProps}
      title={title}
    />
  );
};

export const Tooltip = React.forwardRef<unknown, TooltipProps>(render);
Tooltip.displayName = "Tooltip";

export default Tooltip;
