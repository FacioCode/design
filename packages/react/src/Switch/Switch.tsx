import * as React from "react";
import { Switch as MaterialSwitch } from "@material-ui/core";
import { SwitchProps } from "./Switch.types";

type Render = (props: SwitchProps, ref: SwitchProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialSwitch {...props} ref={ref} />
);

export const Switch = React.forwardRef<unknown, SwitchProps>(render);
Switch.displayName = "Switch";

export default Switch;
