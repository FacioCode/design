import * as React from "react";
import { Element, Props } from "./InputBase.types";
import clsx from "clsx";
import { useStyles } from "./InputBase.styles";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    inputComponent: InputComponent = "input",
    inputProps = {},
    ...otherProps
  } = props;

  const classes = useStyles();

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

/**
 * ## Import
 *
 * ```
 * import { InputBase } from "@faciocode/react;
 * ```
 */
export const InputBase = React.forwardRef<Element, Props>(render);
InputBase.displayName = "InputBase";

export default InputBase;
