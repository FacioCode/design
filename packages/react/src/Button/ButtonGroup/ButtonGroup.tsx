import * as React from "react";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { ButtonGroup as MaterialButtonGroup } from "@material-ui/core";

type Render = (props: ButtonGroupProps, ref: ButtonGroupProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const { size = "small", ...otherProps } = props;

  return (<MaterialButtonGroup {...otherProps} ref={ref} size={size} />);
};

export const ButtonGroup = React.forwardRef<unknown, ButtonGroupProps>(render);
ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
