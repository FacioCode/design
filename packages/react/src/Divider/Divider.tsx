import * as React from "react";
import type { DividerProps } from "./Divider.types";
import { Divider as MaterialDivider } from "@material-ui/core";

type Render = (props: DividerProps, ref: DividerProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialDivider {...props} ref={ref} />
);

export const Divider = React.forwardRef<unknown, DividerProps>(render);
Divider.displayName = "Divider";

export default Divider;
