/**
 * @todo Remove React import from FormLabel
 * @body Remove React import when TypeScript 4.1 is released
 */
import * as React from "react";
import type { Props } from "./Props";
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
