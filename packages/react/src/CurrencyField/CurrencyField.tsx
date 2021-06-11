import * as PropTypes from "prop-types";
import * as React from "react";
import { CurrencyFieldProps } from "@components/CurrencyField/CurrencyField.types";
import { EndAdornment } from "@components/CurrencyField/EndAdornment";
import { StartAdornment } from "@components/CurrencyField/StartAdornment";
import { TextField } from "@components/TextField";
import { useErrorProp } from "@components/CurrencyField/hooks/useErrorProp";
import { useKeyDownCallback } from "@components/CurrencyField/hooks/useKeyDownCallback";
import { usePatternProp } from "@components/CurrencyField/hooks/usePatternProp";
import { useScrollCallback } from "@components/CurrencyField/hooks/useScrollCallback";
import { useStepProp } from "@components/CurrencyField/hooks/useStepProp";

export const CurrencyField = React.forwardRef<unknown, CurrencyFieldProps>(
  (props, ref: CurrencyFieldProps["ref"]) => {
    const defaultMinProp = 0;

    const {
      InputProps,
      allowRecording,
      endAdornment = ",00",
      id,
      inputMode = "decimal",
      inputProps,
      label,
      max,
      min = defaultMinProp,
      onKeyDown,
      onScroll,
      required,
      size,
      startAdornment = "R$",
      ...otherProps
    } = props;

    const error = useErrorProp(props);
    const pattern = usePatternProp(props);
    const step = useStepProp(props);

    return (
      <TextField
        {...otherProps}
        InputProps={{
          ...InputProps,
          endAdornment: inputMode === "numeric" && <EndAdornment>{endAdornment}</EndAdornment>,
          inputProps: { ...inputProps, inputMode, max, min, pattern, step },
          startAdornment: <StartAdornment>{startAdornment}</StartAdornment>,
        }}
        allowRecording={allowRecording}
        error={error}
        id={id}
        label={label}
        onKeyDown={onKeyDown || useKeyDownCallback(props)}
        onScroll={onScroll || useScrollCallback(props)}
        ref={ref}
        required={required}
        rows={1}
        rowsMax={1}
        size={size}
        type={"number"}
      />
    );
  });

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  CurrencyField.displayName = "CurrencyField";
}

CurrencyField.propTypes = {
  InputProps: PropTypes.object,
  allowRecording: PropTypes.bool,
  endAdornment: PropTypes.node,
  id: PropTypes.string,
  inputMode: PropTypes.oneOf(["decimal", "numeric"]),
  inputProps: PropTypes.object,
  label: PropTypes.node,
  max: PropTypes.number,
  min: PropTypes.number,
  onKeyDown: PropTypes.func,
  onScroll: PropTypes.func,
  required: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium"]),
  startAdornment: PropTypes.node,
};

export default CurrencyField;
