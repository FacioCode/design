import * as React from "react";
import type { InputBaseProps } from "./InputBase.types";
import { InputBase as MaterialInputBase } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./InputBase.styles";

type Render = (props: InputBaseProps, ref: InputBaseProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const { className, size = "medium", ...otherProps } = props;

  const { inputLarge, inputMedium, large, medium } = useStyles();

  const classNames = clsx({
    [large]: size === "large",
    [medium]: size === "medium",
    // eslint-disable-next-line sort-keys
    className,
  });

  const inputClassNames = clsx({
    [inputLarge]: size === "large",
    [inputMedium]: size === "medium",
  });

  return (
    <MaterialInputBase
      {...otherProps}
      className={classNames}
      inputProps={{ className: inputClassNames }}
      ref={ref}
    />
  );
};

/**
 * ## Import
 *
 * ```
 * import { InputBase } from "@faciocode/react;
 * ```
 */
export const InputBase = React.forwardRef<unknown, InputBaseProps>(render);
export default InputBase;
