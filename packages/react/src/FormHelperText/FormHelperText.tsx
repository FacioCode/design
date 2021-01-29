import * as React from "react";
import { FormHelperTextProps } from "./FormHelperText.types";
import { FormHelperText as MaterialFormHelperText } from "@material-ui/core";

type Render = (props: FormHelperTextProps, ref: FormHelperTextProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialFormHelperText {...props} ref={ref} />
);

export const FormHelperText = React.forwardRef<unknown, FormHelperTextProps>(render);
export default FormHelperText;
