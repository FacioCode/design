import * as React from "react";
import type { CheckboxProps } from "./Checkbox.types";
import { Checkbox as MaterialCheckbox } from "@material-ui/core";

type Render = (props: CheckboxProps, ref: CheckboxProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialCheckbox {...props} ref={ref} />
);

export const Checkbox = React.forwardRef<unknown, CheckboxProps>(render);
Checkbox.displayName = "Checkbox";

export default Checkbox;
