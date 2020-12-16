import * as React from "react";
import type { InputBaseProps } from "./InputBase.types";
import { InputBase as MaterialInputBase } from "@material-ui/core";

type Render = (props: InputBaseProps, ref: InputBaseProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialInputBase {...props} ref={ref} />
);

/**
 * ## Import
 *
 * ```
 * import { InputBase } from "@faciocode/react;
 * ```
 */
export const InputBase = React.forwardRef<unknown, InputBaseProps>(render);
export default InputBase;
