import * as React from "react";
import { Toolbar as MaterialToolbar } from "@material-ui/core";
import { ToolbarProps } from "./Toolbar.types";

type Render = (props: ToolbarProps, ref: ToolbarProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialToolbar {...props} ref={ref} />
);

export const Toolbar = React.forwardRef<unknown, ToolbarProps>(render);
export default Toolbar;
