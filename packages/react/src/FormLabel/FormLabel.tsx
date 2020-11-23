import * as React from "react";
import { FormLabelProps, FormLabel as UnstyledFormLabel } from "@faciocode/react-unstyled";
import classes from "./FormLabel.module.css";

export { FormLabelProps } from "@faciocode/react-unstyled";

const render = (props: FormLabelProps, ref: FormLabelProps["ref"]) => (
  <UnstyledFormLabel {...props} classes={classes} ref={ref} />
);

/**
 * ## Import
 *
 * ```
 * import { FormLabel } from "@faciocode/react";
 * ```
 */
export const FormLabel = React.forwardRef<HTMLLabelElement | HTMLElement, FormLabelProps>(render);

FormLabel.displayName = "FormLabel";

export default FormLabel;
