import * as React from "react";
import { FormGroupProps } from "./FormGroup.types";
import { FormGroup as MaterialFormGroup } from "@material-ui/core";

type Render = (props: FormGroupProps, ref: FormGroupProps["ref"]) => JSX.Element;

export const render : Render = (props, ref) => (
  <MaterialFormGroup {...props} ref={ref} />
);

export const FormGroup = React.forwardRef<unknown, FormGroupProps>(render);
FormGroup.displayName = "FormGroup";

export default FormGroup;
