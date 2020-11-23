/**
 * @todo Remove React import from InputBase
 * @body Remove React import when TypeScript 4.1 is released
 */
import * as React from "react";
import { Props } from "./Props";
import clsx from "clsx";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    classes,
    inputComponent: InputComponent = "input",
    inputProps = {},
    ...otherProps
  } = props;

  return (
    <InputComponent
      className={clsx(classes.input, inputProps.className)}
      ref={ref}
      {...otherProps}
    />
  );
};

export const InputBase = React.forwardRef<HTMLInputElement, Props>(render);
InputBase.displayName = "InputBase";
