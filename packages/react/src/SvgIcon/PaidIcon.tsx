import * as React from "react";
import { SvgIconProps, SvgIconRender } from "@svg-icons/SvgIcon.types";
import SvgIcon from "@svg-icons/SvgIcon";

const render : SvgIconRender = (props, ref) => (
  <SvgIcon {...props} ref={ref}>
    {/* eslint-disable-next-line max-len */}
    <path fillRule="evenodd" d="M5.349 12.027a.5.5 0 0 0-.698.716l4.737 4.615a.5.5 0 0 0 .698 0l10.263-10a.5.5 0 0 0-.698-.716l-9.914 9.66-4.388-4.275z"/>
  </SvgIcon>
);

export const PaidIcon = React.forwardRef<unknown, SvgIconProps>(render);
PaidIcon.displayName = "PaidIcon";

export default PaidIcon;
