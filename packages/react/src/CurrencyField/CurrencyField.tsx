import * as React from "react";
import { CurrencyFieldProps } from "@components/CurrencyField/CurrencyField.types";
import { EndAdornment } from "@components/CurrencyField/EndAdornment";
import { StartAdornment } from "@components/CurrencyField/StartAdornment";
import { TextField } from "@components/TextField";
import { useKeyDownCallback } from "@components/CurrencyField/hooks/useKeyDownCallback";
import { usePatternProp } from "@components/CurrencyField/hooks/usePatternProp";
import { useScrollCallback } from "@components/CurrencyField/hooks/useScrollCallback";
import { useStepProp } from "@components/CurrencyField/hooks/useStepProp";
import { useErrorProp } from "@components/CurrencyField/hooks/useErrorProp";

type Render = (props: CurrencyFieldProps, ref: CurrencyFieldProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
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
    onKeyDown = useKeyDownCallback(props),
    onScroll = useScrollCallback(props),
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
      onKeyDown={onKeyDown}
      onScroll={onScroll}
      ref={ref}
      required={required}
      rows={1}
      rowsMax={1}
      size={size}
      type={"number"}
    />
  );
};

export const CurrencyField = React.forwardRef<unknown, CurrencyFieldProps>(render);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  CurrencyField.displayName = "CurrencyField";
}

export default CurrencyField;
