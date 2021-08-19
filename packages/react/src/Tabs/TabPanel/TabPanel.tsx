import * as React from "react";
import type { TabPanelProps } from "./TabPanel.types";

type Render = (props: TabPanelProps, ref: TabPanelProps["ref"]) => JSX.Element;

const defaultTabIndex = 0;

const render : Render = (props, ref) => {
  const {
    "aria-labelledby": ariaLabelledBy,
    children,
    component: Component = "div",
    hidden,
    id,
    tabIndex = defaultTabIndex,
    ...otherProps
  } = props;

  return (
    <Component
      {...otherProps}
      id={id}
      aria-labelledby={ariaLabelledBy}
      hidden={hidden}
      role={"tabpanel"}
      ref={ref}
      tabindex={tabIndex}
    >
      {children}
    </Component>
  );
};

export const TabPanel = React.forwardRef<HTMLDivElement | HTMLElement, TabPanelProps>(render);
TabPanel.displayName = "TabPanel";
