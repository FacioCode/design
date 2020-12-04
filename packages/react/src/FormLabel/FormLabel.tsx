import * as React from "react";
import type { Element, Props } from "./FormLabel.types";
import clsx from "clsx";
import { useStyles } from "./FormLabel.styles";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    className,
    component: Component = "label",
    ...otherProps
  } = props;

  const classes = useStyles();

  return <Component
    className={clsx(classes.root, className)}
    ref={ref}
    {...otherProps}
  />;
};

/**
 * ## Import
 *
 * ```
 * import { FormLabel } from "@faciocode/react";
 * ```
 */
export const FormLabel = React.forwardRef<Element, Props>(render);
FormLabel.displayName = "FormLabel";

export default FormLabel;
