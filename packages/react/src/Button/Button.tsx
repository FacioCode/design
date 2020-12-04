import * as React from "react";
import { Element, Props } from "./Button.types";
import { ButtonBase } from "../ButtonBase";
import clsx from "clsx";
import { useStyles } from "./Button.styles";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    children,
    className,
    component: Component = "button",
    ...otherProps
  } = props;

  const classes = useStyles();

  return <ButtonBase
    className={clsx(classes.root, className)}
    component={Component}
    ref={ref}
    {...otherProps}>
    <span className={clsx(classes.label)}>
      {children}
    </span>
  </ButtonBase>;
};

export const Button = React.forwardRef<Element, Props>(render);
Button.displayName = "Button";

export default Button;
