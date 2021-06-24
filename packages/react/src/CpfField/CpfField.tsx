import * as PropTypes from "prop-types";
import * as React from "react";
import { CpfFieldProps } from "@components/CpfField/CpfField.types";
import { PhoneFieldProps } from "@components/PhoneField";
import { TextField } from "@components/TextField";
import { useKeyDown } from "@hooks/useKeyDown";

const allowedKeyGroups = [
  "arrows",
  "backspace",
  "delete",
  "enter",
  "fullStop",
  "hyphen",
  "numbers",
  "space",
  "tab",
];

export const CpfField = React.forwardRef<unknown, CpfFieldProps>(
  (props, ref: PhoneFieldProps["ref"]) => {
    const defaultInputProps : CpfFieldProps["inputProps"] = {
      inputMode: "numeric",
      minLength: 11,
      pattern: "\\d{3}(\\s|.|-)*\\d{3}(\\s|.|-)*\\d{3}(\\s|.|-)*\\d{2}",
    };

    const {
      allowRecording = false,
      autoComplete = "off",
      inputProps,
      ...otherProps
    } = props;

    const handleKeyDown = useKeyDown({
      allowMetaKey: true,
      allowedKeyGroups,
    });

    return (
      <TextField
        allowRecording={allowRecording}
        autoComplete={autoComplete}
        inputProps={{
          ...defaultInputProps,
          ...inputProps,
        }}
        onKeyDown={handleKeyDown}
        ref={ref}
        type={"text"}
        {...otherProps}
      />
    );
  },
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  CpfField.displayName = "CpfField";
}

CpfField.propTypes = {
  allowRecording: PropTypes.bool,
  autoComplete: PropTypes.string,
  inputProps: PropTypes.object,
};

export default CpfField;
