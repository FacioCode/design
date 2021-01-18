import * as React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { OutlinedButtonProps } from "./OutlinedButton.types";

type Render = (props: OutlinedButtonProps, ref: OutlinedButtonProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => <MaterialButton
  ref={ref}
  variant={"outlined"}
  {...props}
/>;

export const OutlinedButton = React.forwardRef<unknown, OutlinedButtonProps>(render);
OutlinedButton.displayName = "OutlinedButton";

export default OutlinedButton;
