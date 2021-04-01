import * as React from "react";
import { TabsProps as MaterialTabsProps } from "@material-ui/core/Tabs";
import { Omit } from "@material-ui/types";

type OmittedProps = |
  "centerRipple" |
  "css" |
  "disableRipple" |
  "disableTouchRipple" |
  "focusRipple" |
  "focusVisibleClassName" |
  "TouchRippleProps"

export interface TabsProps extends Omit<MaterialTabsProps, OmittedProps> {

  /**
   * The component used for the root node. Either a `string` to use a DOM element or a component.
   *
   * @optional
   * @type element
   */
  component?: React.ElementType;

}
