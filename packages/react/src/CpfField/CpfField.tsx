/* eslint-disable no-magic-numbers */
import * as PropTypes from "prop-types";
import * as React from "react";
import { TextField, TextFieldProps } from "@components/TextField";
import { CpfFieldProps } from "@components/CpfField/CpfField.types";
import { PhoneFieldProps } from "@components/PhoneField";
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

const validValueLength = 11;

// eslint-disable-next-line max-statements
const isValid = (rawValue: string) => {
  const value = rawValue.replace(/[^\d]+/gu, "");

  if (value === "" || value.length !== validValueLength) {
    return false;
  }

  const originalSumValue = 0;
  let sum = originalSumValue;
  // eslint-disable-next-line init-declarations
  let remainder: number;

  const firstDigitIndex = 0;
  const nextDigitIncrement = 1;
  const penultimateDigitIndex = 9;
  const lastDigitIndex = 10;
  const radix = 10;

  // eslint-disable-next-line id-length
  for (let i = firstDigitIndex; i < penultimateDigitIndex; i += nextDigitIncrement) {
    sum += parseInt(value.charAt(i), radix) * (10 - i);
  }

  remainder = 11 - (sum % 11);
  if ([10, 11].includes(remainder)) {
    remainder = originalSumValue;
  }
  if (remainder !== parseInt(value.charAt(penultimateDigitIndex), radix)) {
    return false;
  }

  sum = originalSumValue;

  // eslint-disable-next-line id-length
  for (let i = firstDigitIndex; i < lastDigitIndex; i += nextDigitIncrement) {
    sum += parseInt(value.charAt(i), radix) * (11 - i);
  }

  remainder = 11 - (sum % 11);
  if ([10, 11].includes(remainder)) {
    remainder = originalSumValue;
  }

  return remainder === parseInt(value.charAt(lastDigitIndex), radix);
};

const defaultInputProps : CpfFieldProps["inputProps"] = {
  inputMode: "numeric",
  minLength: validValueLength,
  pattern: "\\d{3}(\\s|.|-)*\\d{3}(\\s|.|-)*\\d{3}(\\s|.|-)*\\d{2}",
};

export const CpfField = React.forwardRef<unknown, CpfFieldProps>(
  (props, ref: PhoneFieldProps["ref"]) => {
    const {
      allowRecording = false,
      autoComplete = "off",
      inputProps,
      onChange,
      ...otherProps
    } = props;

    const handleKeyDown = useKeyDown({
      allowMetaKey: true,
      allowedKeyGroups,
    });

    const handleChange : TextFieldProps["onChange"] = (event) => {
      const { target } = event;
      const { value } = target;

      if (isValid(value)) {
        target.setCustomValidity("");
      }
      if (!isValid(value)) {
        target.setCustomValidity("Por favor, confira se o seu CPF foi digitado corretamente.");
      }
      if (typeof onChange === "function") {
        onChange(event);
      }
    };

    return (
      <TextField
        allowRecording={allowRecording}
        autoComplete={autoComplete}
        inputProps={{
          ...defaultInputProps,
          ...inputProps,
        }}
        onChange={handleChange}
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
  onChange: PropTypes.func,
};

