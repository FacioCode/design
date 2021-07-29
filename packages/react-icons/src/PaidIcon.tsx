/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Useful for approve icon button or paid status
 *
 * @example
 * ```jsx
 * <PaidIcon titleAccess={"Useful for approve icon button or paid status"} />
 * ```
 */
export const PaidIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M5.349 12.027a.5.5 0 0 0-.698.716l4.737 4.615a.5.5 0 0 0 .698 0l10.263-10a.5.5 0 0 0-.698-.716l-9.914 9.66-4.388-4.275z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  PaidIcon.displayName = "PaidIcon";
}
