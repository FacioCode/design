import * as React from "react";
import type { MaterialTextFieldVariant, TextFieldProps, VariantMapping } from "./TextField.types";
import { TextField as MaterialTextField } from "@material-ui/core";

const variantMapping : VariantMapping = {
  filled: "filled",
  underline: "standard",
};

type Render = (props: TextFieldProps, ref: TextFieldProps["ref"]) => JSX.Element;
const render : Render = (props, ref) => {
  const { InputProps, variant = "filled", ...otherProps } = props;

  const mappedVariant : MaterialTextFieldVariant = variantMapping[variant];

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <MaterialTextField
      {...otherProps}
      InputProps={{ ...InputProps, disableUnderline: variant === "filled" }}
      ref={ref}
      variant={mappedVariant}
    />
  );
};

export const TextField = React.forwardRef(render);
TextField.displayName = "TextField";

export default TextField;
