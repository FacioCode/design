import * as React from "react";
import { Element, Props } from "./Card.types";
import { Paper } from "../Paper";
import clsx from "clsx";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    classes,
    color = "default",
    className,
    component: Component = "div",
    ...otherProps
  } = props;


  return <Paper
    className={clsx(classes.root, classes[color], className)}
    component={Component}
    ref={ref}
    variant={"rounded"}
    {...otherProps} />;
};

export const Card = React.forwardRef<Element, Props>(render);
