import * as React from "react";
import type { InputProps } from "./Input.types";
import { Input as MaterialInput } from "@material-ui/core";

type Render = (props: InputProps, ref: InputProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialInput {...props} ref={ref} />
);

export const Input = React.forwardRef<unknown, InputProps>(render);
Input.displayName = "Input";

export default Input;
