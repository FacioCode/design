import * as React from "react";
import { InputBaseProps, InputBase as UnstyledInputBase } from "@faciocode/react-unstyled";
import { useStyles } from "./InputBase.styles";

export { InputBaseProps } from "@faciocode/react-unstyled";

const render = (props: InputBaseProps, ref: InputBaseProps["ref"]) => (
  <UnstyledInputBase {...props} classes={useStyles()} ref={ref} />
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
