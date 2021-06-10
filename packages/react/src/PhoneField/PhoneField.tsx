import * as React from "react";
import { PhoneFieldProps } from "@components/PhoneField/PhoneField.types";
import { TextField } from "@components/TextField";

type Render = (props: PhoneFieldProps, ref: PhoneFieldProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const defaultInputProps = {
    maxLength: 16,
    minLength: 11,
    pattern: "\\(?\\d{2}\\)?(\\s|-)*9(-|\\s)*\\d{4}(-|\\s)*\\d{4}",
  };

  const {
    allowRecording = false,
    autoComplete = "tel-national",
    inputProps,
    ...otherProps
  } = props;

  return (
    <TextField
      InputProps={{
        inputMode: "numeric",
      }}
      allowRecording={allowRecording}
      autoComplete={autoComplete}
      inputProps={{
        ...defaultInputProps,
        ...inputProps,
      }}
      ref={ref}
      type={"tel"}
      {...otherProps}
    />
  );
};

export const PhoneField = React.forwardRef<unknown, PhoneFieldProps>(render);
PhoneField.displayName = "PhoneField";

export default PhoneField;
