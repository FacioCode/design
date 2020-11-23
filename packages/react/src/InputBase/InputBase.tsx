import * as React from "react";
import { InputBaseProps, InputBase as UnstyledInputBase } from "@faciocode/react-unstyled";
import classes from "./InputBase.module.css";

export { InputBaseProps } from "@faciocode/react-unstyled";

const render = (props: InputBaseProps, ref: InputBaseProps["ref"]) => (
  <UnstyledInputBase {...props} classes={classes} ref={ref} />
);

/**
 * ## Import
 *
 * ```
 * import { InputBase } from "@faciocode/react;
 * ```
 */
export const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(render);

InputBase.displayName = "InputBase";

export default InputBase;
