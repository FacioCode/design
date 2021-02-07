import * as React from "react";
import { Paper as MaterialPaper } from "@material-ui/core";
import type { MaterialPaperVariant, PaperProps } from "./Paper.types";

type Render = (props: PaperProps, ref: PaperProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const { outlined = false, ...otherProps } = props;

  let variant : MaterialPaperVariant = "elevation";

  if (outlined === true) {
    variant = "outlined";
  }

  return (
    <MaterialPaper
      {...otherProps}
      ref={ref}
      variant={variant}
    />
  );
};

export const Paper = React.forwardRef<unknown, PaperProps>(render);
Paper.displayName = "Paper";

export default Paper;
