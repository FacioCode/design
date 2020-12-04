import * as React from "react";
import { Element, Props } from "./Card.types";
import { Paper } from "../Paper";
import clsx from "clsx";
import { useStyles } from "./Card.styles";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    className,
    color = "default",
    component: Component = "div",
    ...otherProps
  } = props;

  const classes = useStyles();

  return <Paper
    className={clsx(classes.root, classes[color], className)}
    component={Component}
    ref={ref}
    variant={"rounded"}
    {...otherProps} />;
};

export const Card = React.forwardRef<Element, Props>(render);
Card.displayName = "Card";

export default Card;
