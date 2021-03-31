import * as React from "react";
import type { MaterialTextFieldVariant, TextFieldProps } from "./TextField.types";
import { TextField as MaterialTextField } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./TextField.styles";

type Render = (props: TextFieldProps, ref: TextFieldProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    InputProps,
    allowRecording,
    className,
    inputProps,
    size = "medium",
    variant = "filled",
    ...otherProps
  } = props;

  const { labelLarge, large, inputLarge } = useStyles();

  const variantProp = React.useMemo<MaterialTextFieldVariant>(
    () => {
      let mappedVariant : MaterialTextFieldVariant = "filled";

      if (variant === "underline") {
        mappedVariant = "standard";
      }

      return mappedVariant;
    },
    [variant],
  );

  const additionalInputAttributes = React.useMemo<TextFieldProps["inputProps"]>(
    () => {
      const attributes : TextFieldProps["inputProps"] = {
        className: clsx({
          "data-hj-allow": allowRecording,
          [inputLarge]: size === "large",
        }),
      };

      if (allowRecording) {
        attributes["data-hj-allow"] = true;
        attributes["data-public"] = true;
      } else {
        attributes["data-private"] = true;
      }

      return attributes;
    },
    [allowRecording, clsx, inputLarge, size],
  );

  const additionalInputProps = React.useMemo(
    () => ({
      className: clsx({
        [large]: size === "large",
      }),
      disableUnderline: variant === "filled",
    }),
    [clsx, large, size, variant],
  );

  const finalInputAttributes = React.useMemo(
    () => ({
      ...inputProps,
      ...additionalInputAttributes,
    }),
    [additionalInputAttributes, inputProps],
  );

  const finalInputProps = React.useMemo(
    () => ({
      ...InputProps,
      ...additionalInputProps,
    }),
    [additionalInputProps, InputProps]);

  return (
    <MaterialTextField
      {...otherProps}
      className={className}
      InputLabelProps={{ className: clsx({ [labelLarge]: size === "large" }) }}
      InputProps={finalInputProps}
      inputProps={finalInputAttributes}
      ref={ref}
      variant={variantProp}
    />
  );
};

export const TextField = React.forwardRef<unknown, TextFieldProps>(render);
TextField.displayName = "TextField";

export default TextField;
