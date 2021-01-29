import * as React from "react";
import { InputLabelProps } from "./InputLabel.types";
import { InputLabel as MaterialInputLabel } from "@material-ui/core";

type Render = (props: InputLabelProps, ref: InputLabelProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialInputLabel {...props} ref={ref} />
);

/**
 * InputLabel is a label within the `TextField`, working with a `FilledInput` (or `Input`).
 */
export const InputLabel = React.forwardRef<unknown, InputLabelProps>(render);
InputLabel.displayName = "InputLabel";

export default InputLabel;
