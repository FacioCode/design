import * as React from "react";
import { Paper as MaterialPaper } from "@material-ui/core";
import type { PaperProps } from "./Paper.types";

type Render = (props: PaperProps, ref: PaperProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialPaper {...props} ref={ref} />
);

export const Paper = React.forwardRef<unknown, PaperProps>(render);
Paper.displayName = "Paper";

export default Paper;
