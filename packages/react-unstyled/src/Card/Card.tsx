import * as React from "react";
import { Element, Props } from "./Card.types";
import clsx from "clsx";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    classes,
    color = "default",
    className,
    component: Component = "div",
    ...otherProps
  } = props;


  return <Component
    className={clsx(classes.root, classes[color], className)}
    ref={ref}
    {...otherProps} />;
};

export const Card = React.forwardRef<Element, Props>(render);
