import * as React from "react";
import { AppBar as MaterialAppBar, Toolbar } from "@material-ui/core";
import { AppBarProps } from "./AppBar.types";

type Render = (props: AppBarProps, ref: AppBarProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const { children, ...otherProps } = props;


  return (
    <MaterialAppBar {...otherProps} color={"transparent"} elevation={0} ref={ref}>
      <Toolbar>
        {children}
      </Toolbar>
    </MaterialAppBar>
  );
};

export const AppBar = React.forwardRef<unknown, AppBarProps>(render);
AppBar.displayName = "AppBar";

export default AppBar;
