import * as React from "react";
import { TabProps as MaterialTabProps } from "@material-ui/core/Tab";

type OmittedProps = |
  "css" |
  "disabledFocusRipple" |
  "disableRipple";

export interface TabProps extends Omit<MaterialTabProps, OmittedProps> {

  /**
   * The component used for the root node. Either a `string` to use a DOM element or a component.
   *
   * @optional
   * @type element
   */
  component?: React.ElementType;

}
