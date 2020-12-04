import * as React from "react";
import { Element, Props } from "./Paper.types";
import clsx from "clsx";
import { useStyles } from "./Paper.styles";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    className,
    component: Component = "div",
    variant = "square",
    ...otherProps
  } = props;

  const classes = useStyles();

  return <Component
    className={clsx(classes.root, classes[variant], className)}
    ref={ref}
    {...otherProps}
  />;
};

export const Paper = React.forwardRef<Element, Props>(render);

Paper.displayName = "Paper";

export default Paper;
