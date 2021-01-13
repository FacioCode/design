import * as React from "react";
import type { MaterialTextFieldVariant, TextFieldProps } from "./TextField.types";
import { TextField as MaterialTextField } from "@material-ui/core";

type Render = (props: TextFieldProps, ref: TextFieldProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const { InputProps, variant = "filled", ...otherProps } = props;

  let mappedVariant : MaterialTextFieldVariant = "filled";

  if (variant === "underline") {
    mappedVariant = "standard";
  }

  return <MaterialTextField
    {...otherProps}
    InputProps={{ ...InputProps, disableUnderline: variant === "filled" }}
    ref={ref}
    variant={mappedVariant}
  />;
};

export const TextField = React.forwardRef<unknown, TextFieldProps>(render);
TextField.displayName = "TextField";

export default TextField;
