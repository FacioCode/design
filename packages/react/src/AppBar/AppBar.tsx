import * as React from "react";
import { AppBar as MaterialAppBar } from "@material-ui/core";
import { AppBarProps } from "./AppBar.types";

type Render = (props: AppBarProps, ref: AppBarProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const { children, ...otherProps } = props;


  return (
    <MaterialAppBar {...otherProps} ref={ref}>
      {children}
    </MaterialAppBar>
  );
};

export const AppBar = React.forwardRef<unknown, AppBarProps>(render);
AppBar.displayName = "AppBar";

export default AppBar;
