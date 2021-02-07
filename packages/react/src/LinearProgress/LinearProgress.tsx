import * as React from "react";
import { LinearProgressProps } from "./LinearProgress.types";
import { LinearProgress as MaterialLinearProgress } from "@material-ui/core";

type Render = (props: LinearProgressProps, ref: LinearProgressProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialLinearProgress {...props} ref={ref} />
);

export const LinearProgress = React.forwardRef<unknown, LinearProgressProps>(render);
LinearProgress.displayName = "LinearProgress";

export default LinearProgress;
