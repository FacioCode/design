import * as React from "react";
import { Tab as MaterialTab } from "@material-ui/core";
import { TabProps } from "./Tab.types";

type Render = (props: TabProps, ref: TabProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialTab {...props} ref={ref} />
);

export const Tab = React.forwardRef<unknown, TabProps>(render);
Tab.displayName = "Tab";

export default Tab;
