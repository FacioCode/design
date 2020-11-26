import * as React from "react";
import {
  FormLabelElement,
  FormLabelProps as Props,
  FormLabel as UnstyledFormLabel,
} from "@faciocode/react-unstyled";
import { useStyles } from "./FormLabel.styles";

export type FormLabelProps = Omit<Props, "className" | "classes">;

const render = (props: FormLabelProps, ref: FormLabelProps["ref"]) => (
  <UnstyledFormLabel {...props} classes={useStyles()} ref={ref} />
);

/**
 * ## Import
 *
 * ```
 * import { FormLabel } from "@faciocode/react";
 * ```
 */
export const FormLabel = React.forwardRef<FormLabelElement, FormLabelProps>(render);

FormLabel.displayName = "FormLabel";

export default FormLabel;
