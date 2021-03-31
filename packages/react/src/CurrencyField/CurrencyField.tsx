import * as React from "react";
import { CurrencyFieldProps } from "@components/CurrencyField/CurrencyField.types";
import { TextField } from "@components/TextField";
import { Typography } from "@components/Typography";
import { useStyles } from "@components/CurrencyField/CurrencyField.styles";

type Render = (props: CurrencyFieldProps, ref: CurrencyFieldProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const defaultMinProp = 0;

  const {
    InputProps,
    allowRecording,
    endAdornment: endAdornmentProp = ",00",
    id,
    inputMode = "decimal",
    inputProps,
    label,
    max,
    min = defaultMinProp,
    onChange,
    required,
    size,
    startAdornment: startAdornmentProp = "R$",
    step: stepProp,
    type = "text",
    value,
    ...otherProps
  } = props;

  const { startAdornment: startAdornmentClassName } = useStyles();

  const startAdornment = React.useMemo(() => (
    <Typography
      className={startAdornmentClassName}
      component={"span"}
      gutterBottom={false}
      variant={"inherit"}
    >
      {startAdornmentProp}
    </Typography>
  ),
  [size, startAdornmentClassName, startAdornmentProp],
  );

  const endAdornment = React.useMemo(() => {
    if (inputMode === "decimal") {
      return null;
    }

    return (
      <Typography
        component={"span"}
        gutterBottom={false}
        variant={"inherit"}
      >
        {endAdornmentProp}
      </Typography>
    );
  },
  [endAdornmentProp, inputMode]);

  const step = React.useMemo(() => {
    const defaultDecimalStepProp = 0.01;
    const defaultNumericStepProp = 1;

    if (stepProp) {
      return stepProp;
    }
    if (inputMode === "numeric") {
      return defaultNumericStepProp;
    }

    return defaultDecimalStepProp;
  },
  [inputMode, stepProp]);

  return (
    <TextField
      InputProps={{
        ...InputProps,
        endAdornment,
        inputProps: {
          ...inputProps,
          inputMode,
          max,
          min,
          step,
        },
        startAdornment,
      }}
      id={id}
      allowRecording={allowRecording}
      label={label}
      maxRows={1}
      onChange={onChange}
      ref={ref}
      required={required}
      size={size}
      type={type}
      value={value}
      {...otherProps}
    />
  );
};

export const CurrencyField = React.forwardRef<unknown, CurrencyFieldProps>(render);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  CurrencyField.displayName = "CurrencyField";
}

export default CurrencyField;
