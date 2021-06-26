import * as React from "react";
import { PasswordFieldProps } from "./PasswordField.types";
import { TextField } from "@components/TextField";

const defaultInputProps : PasswordFieldProps["inputProps"] = {
  autoCapitalize: "off",
  autoComplete: "current-password",
  autoCorrect: "off",
  "data-prop": "password",
  inputMode: "text",
  spellCheck: false,
};

export const PasswordField = React.forwardRef<unknown, PasswordFieldProps>(
  (props: PasswordFieldProps, ref: PasswordFieldProps["ref"]) => {
    const {
      allowRecording = false,
      disabled,
      fullWidth,
      inputProps,
      label,
      name,
      onChange,
      placeholder,
      required,
      ...otherProps
    } = props;

    return (
      <TextField
        allowRecording={allowRecording}
        disabled={disabled}
        fullWidth={fullWidth}
        inputProps={{
          ...defaultInputProps,
          ...inputProps,
        }}
        label={label}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        required={required}
        rowsMax={1}
        type={"password"}
        {...otherProps}
      />
    );
  },
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  PasswordField.displayName = "PasswordField";
}
