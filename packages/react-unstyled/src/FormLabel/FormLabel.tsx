import * as React from "react";
import type { Props } from "./FormLabel.types";
import clsx from "clsx";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    classes,
    className,
    component: Component = "label",
    ...otherProps
  } = props;

  return <Component className={clsx(classes.root, className)} ref={ref} {...otherProps} />;
};

export const FormLabel = React.forwardRef<HTMLLabelElement | HTMLElement, Props>(render);
FormLabel.displayName = "FormLabel";
