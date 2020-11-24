/**
 * @todo Remove React import from ButtonBase
 * @body Remove React import when TypeScript 4.1 is released
 */
import * as React from "react";
import type { Element, Props } from "./ButtonBase.types";

const render = (props: Props, ref: Props["ref"]) => {
  const {
    component: Component = "button",
    ...otherProps
  } = props;

  return <Component ref={ref} {...otherProps} />;
};

export const ButtonBase = React.forwardRef<Element, Props>(render);
ButtonBase.displayName = "ButtonBase";
