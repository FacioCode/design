import * as React from "react";
import type { MaterialTextFieldVariant, TextFieldProps } from "./TextField.types";
import { TextField as MaterialTextField } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./TextField.styles";

type Render = (props: TextFieldProps, ref: TextFieldProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    className,
    InputProps,
    size = "medium",
    variant = "filled",
    ...otherProps
  } = props;

  let mappedVariant : MaterialTextFieldVariant = "filled";

  if (variant === "underline") {
    mappedVariant = "standard";
  }

  const { labelLarge, large, inputLarge } = useStyles();

  const additionalInputProps = {
    className: clsx({ [large]: size === "large" }),
    disableUnderline: variant === "filled",
  };

  const finalInputProps = {
    ...InputProps,
    ...additionalInputProps,
  };

  return (
    <MaterialTextField
      {...otherProps}
      className={className}
      InputLabelProps={{ className: clsx({ [labelLarge]: size === "large" }) }}
      InputProps={finalInputProps}
      inputProps={{ className: clsx({ [inputLarge]: size === "large" }) }}
      ref={ref}
      variant={mappedVariant}
    />
  );
};

export const TextField = React.forwardRef<unknown, TextFieldProps>(render);
TextField.displayName = "TextField";

export default TextField;
