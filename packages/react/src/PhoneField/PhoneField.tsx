import * as PropTypes from "prop-types";
import * as React from "react";
import { PhoneFieldProps } from "@components/PhoneField/PhoneField.types";
import { TextField } from "@components/TextField";
import { useKeyDown } from "@hooks/useKeyDown";

const allowedKeyGroups = [
  "arrows",
  "backspace",
  "delete",
  "enter",
  "hyphen",
  "numbers",
  "parens",
  "space",
  "tab",
];

export const PhoneField = React.forwardRef<unknown, PhoneFieldProps>(
  (props, ref: PhoneFieldProps["ref"]) => {
    const defaultInputProps : PhoneFieldProps["inputProps"] = {
      inputMode: "numeric",
      minLength: 11,
      pattern: "\\(?\\s*\\d{2}\\s*\\)?(\\s|-)*9(-|\\s)*\\d{4}(-|\\s)*\\d{4}",
    };

    const {
      allowRecording = false,
      autoComplete = "tel-national",
      inputProps,
      onBlur,
      ...otherProps
    } = props;

    const handleBlur = React.useCallback<PhoneFieldProps["onBlur"]>(
      (event) => {
        if (typeof onBlur === "function") {
          onBlur(event);
        }
      },
      [onBlur],
    );

    const handleKeyDown = useKeyDown({
      allowMetaKey: true,
      allowedKeyGroups,
    });

    return (
      <TextField
        allowRecording={allowRecording}
        autoComplete={autoComplete}
        onBlur={handleBlur}
        inputProps={{
          ...defaultInputProps,
          ...inputProps,
        }}
        onKeyDown={handleKeyDown}
        ref={ref}
        type={"tel"}
        {...otherProps}
      />
    );
  });

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  PhoneField.displayName = "PhoneField";
}

PhoneField.propTypes = {
  allowRecording: PropTypes.bool,
  autoComplete: PropTypes.string,
  inputProps: PropTypes.object,
  onBlur: PropTypes.func,
};
