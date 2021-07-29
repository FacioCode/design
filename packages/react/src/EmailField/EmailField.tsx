import * as React from "react";
import { EmailFieldProps } from "@components/EmailField/EmailField.types";
import { TextField } from "@components/TextField";

const defaultInputProps : EmailFieldProps["inputProps"] = {
  autoCapitalize: "off",
  autoComplete: "email",
  autoCorrect: "off",
  inputMode: "email",
  // eslint-disable-next-line max-len
  pattern: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
  spellCheck: true,
};

export const EmailField = React.forwardRef<unknown, EmailFieldProps>(
  (props: EmailFieldProps, ref: EmailFieldProps["ref"]) => {
    const {
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
        type={"email"}
        {...otherProps}
      />
    );
  },
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  EmailField.displayName = "EmailField";
}
