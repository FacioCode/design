import * as React from "react";
import { FormControlLabelProps } from "./FormControlLabel.types";
import { FormControlLabel as MaterialFormControlLabel } from "@material-ui/core";

type Render = (props: FormControlLabelProps, ref: FormControlLabelProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const { control, label, ...otherProps } = props;

  return (
    <MaterialFormControlLabel
      {...otherProps}
      control={control}
      label={label}
      ref={ref}
    />
  );
};

export const FormControlLabel = React.forwardRef<unknown, FormControlLabelProps>(render);
FormControlLabel.displayName = "FormControlLabel";

export default FormControlLabel;
