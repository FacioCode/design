import * as React from "react";
import {
  FilledInput,
  FormControl, FormHelperText,
  TextField as MaterialTextField,
} from "@material-ui/core";
import type { MaterialTextFieldVariant, TextFieldProps } from "./TextField.types";
import { FormLabel } from "../FormLabel";
import { Input } from "../Input";

type Render = (props: TextFieldProps, ref: TextFieldProps["ref"]) => JSX.Element;

const variantComponent : Record<TextFieldProps["variant"], React.ElementType> = {
  filled: FilledInput,
  underline: Input,
};

const render : Render = (props, ref) => {
  const {
    FormHelperTextProps,
    InputLabelProps,
    InputProps,
    defaultValue,
    helperText,
    id,
    label,
    onBlur,
    onChange,
    onFocus,
    required,
    size = "medium",
    variant = "filled",
    ...otherProps
  } = props;

  let mappedVariant : MaterialTextFieldVariant = "filled";

  if (variant === "underline") {
    mappedVariant = "standard";
  }

  const additionalInputProps = { disableUnderline: variant === "filled" };
  const finalInputProps = { ...InputProps, ...additionalInputProps };

  if (size === "large") {
    const InputComponent = variantComponent[variant];

    let helperTextId = null;
    let inputLabelId = null;

    if (label && id) {
      inputLabelId = `${id}-label`;
    }

    if (helperText && id) {
      helperTextId = `${id}-helper-text`;
    }

    const InputElement: JSX.Element = (
      <InputComponent
        aria-describedby={helperTextId}
        defaultValue={defaultValue}
        id={id}
        inputProps={{
          "aria-labelledby": inputLabelId,
        }}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        required={required}
        {...otherProps}
        {...finalInputProps}
      />
    );

    return (
      <FormControl required={required} variant={mappedVariant} {...otherProps}>
        {label && (
          <FormLabel htmlFor={id} id={inputLabelId} {...InputLabelProps}>
            {label}
          </FormLabel>
        )}
        {InputElement}
        {helperText && (
          <FormHelperText id={helperTextId} {...FormHelperTextProps}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  }

  return (
    <MaterialTextField
      {...otherProps}
      FormHelperTextProps={FormHelperTextProps}
      InputLabelProps={InputLabelProps}
      InputProps={finalInputProps}
      defaultValue={defaultValue}
      helperText={helperText}
      id={id}
      label={label}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      ref={ref}
      required={required}
      variant={mappedVariant}
    />
  );
};

export const TextField = React.forwardRef<unknown, TextFieldProps>(render);
TextField.displayName = "TextField";

export default TextField;
