/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * App Icon
 *
 * @example
 * ```jsx
 * <AppIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const AppIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M16 3H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm0 1v16H8V4h8zm-4 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  AppIcon.displayName = "AppIcon";
}
