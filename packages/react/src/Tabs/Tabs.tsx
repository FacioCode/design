import * as React from "react";
import { Tabs as MaterialTabs } from "@material-ui/core";
import { TabsProps } from "./Tabs.types";

type Render = (props: TabsProps, ref: TabsProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialTabs {...props} ref={ref} />
);

export const Tabs = React.forwardRef<unknown, TabsProps>(render);
Tabs.displayName = "Tabs";

export default Tabs;
