import * as React from "react";
import { DrawerProps } from "@components/Drawer/Drawer.types";
import { Drawer as MaterialDrawer } from "@material-ui/core";

type Render = (props: DrawerProps, ref: DrawerProps["ref"]) => JSX.Element;

const render : Render = (props: DrawerProps, ref: DrawerProps["ref"]) => (
  <MaterialDrawer {...props} ref={ref} />
);

export const Drawer = React.forwardRef<unknown, DrawerProps>(render);
Drawer.displayName = "Drawer";

export default Drawer;
