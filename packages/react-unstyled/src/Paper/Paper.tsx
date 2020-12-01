import * as React from "react";
import { Element, Props } from "./Paper.types";
import clsx from "clsx";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    classes,
    className,
    component: Component = "div",
    variant = "square",
    ...otherProps
  } = props;


  return <Component
    className={clsx(classes.root, classes[variant], className)}
    ref={ref}
    {...otherProps}
  />;
};

export const Paper = React.forwardRef<Element, Props>(render);

Paper.displayName = "Paper";
