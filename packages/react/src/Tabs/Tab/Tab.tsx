import * as React from "react";

import { Tab as MaterialTab } from "@material-ui/core";
import type { TabProps } from "./Tab.types";

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  (props: TabProps, ref) => (
    <MaterialTab
      ref={ref}
      textColor={"inherit"}
      {...props}
    />
  ));

Tab.displayName = "Tab";
