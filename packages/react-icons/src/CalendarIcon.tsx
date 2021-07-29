/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Calendar Icon
 *
 * @example
 * ```jsx
 * <CalendarIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const CalendarIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M11 12.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5zm-.5 1h-4v3h4v-3zm10-9v15h-17v-15H4a.5.5 0 0 0 0-1H3a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h18a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5h-1a.5.5 0 1 0 0 1h.5zm-15.004-2v3a.5.5 0 0 0 1 0v-3a.5.5 0 1 0-1 0zm12 0v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-1 0zM8 4.5h8a.5.5 0 1 0 0-1H8a.5.5 0 0 0 0 1z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  CalendarIcon.displayName = "CalendarIcon";
}
