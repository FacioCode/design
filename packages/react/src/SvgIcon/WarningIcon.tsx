import * as React from "react";
import { SvgIconProps, SvgIconRender } from "./SvgIcon.types";
import { SvgIcon } from "./SvgIcon";

const render : SvgIconRender = (props, ref) => (
  <SvgIcon {...props} ref={ref}>
    {/* eslint-disable-next-line max-len */}
    <path />
  </SvgIcon>
);

export const WarningIcon = React.forwardRef<unknown, SvgIconProps>(render);
WarningIcon.displayName = "WarningIcon";

export default WarningIcon;
