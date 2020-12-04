import * as React from "react";
import type { Element, Props } from "./ButtonBase.types";
import clsx from "clsx";
import { useStyles } from "./ButtonBase.styles";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    className,
    component: Component = "button",
    ...otherProps
  } = props;

  const classes = useStyles();

  return <Component
    className={clsx(classes.root, className)}
    ref={ref}
    {...otherProps}
  />;
};

export const ButtonBase = React.forwardRef<Element, Props>(render);
ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
