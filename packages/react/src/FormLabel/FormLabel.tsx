import * as React from "react";
import type { FormLabelProps } from "./FormLabel.types";
import { FormLabel as MaterialFormLabel } from "@material-ui/core";

type Render = (props: FormLabelProps, ref: FormLabelProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialFormLabel {...props} ref={ref} />
);

/**
 * ## Import
 *
 * ```
 * import { FormLabel } from "@faciocode/react";
 * ```
 */
export const FormLabel = React.forwardRef<unknown, FormLabelProps>(render);
FormLabel.displayName = "FormLabel";

export default FormLabel;
