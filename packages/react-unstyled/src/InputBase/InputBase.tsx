/**
 * @todo Remove React import from InputBase
 * @body Remove React import when TypeScript 4.1 is released
 */
import * as React from "react";
import { Element, Props } from "./InputBase.types";
import clsx from "clsx";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    classes,
    inputComponent: InputComponent = "input",
    inputProps = {},
    ...otherProps
  } = props;

  return (
    <div className={classes.root}>
      <InputComponent
        className={clsx(classes.input, inputProps.className)}
        ref={ref}
        {...otherProps}
      />
    </div>
  );
};

export const InputBase = React.forwardRef<Element, Props>(render);
InputBase.displayName = "InputBase";
