/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Thunderbolt Icon
 *
 * @example
 * ```jsx
 * <ThunderboltIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const ThunderboltIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M16.226 2a1 1 0 0 1 .845 1.535L13.89 8.563h4.541a1 1 0 0 1 .677 1.737L7.66 20.805a1 1 0 0 1-1.518-1.276l3.967-6.198H6.652a1 1 0 0 1-.886-1.463l4.884-9.332A1 1 0 0 1 11.536 2h4.69zM6.652 12.331h5.286l-4.953 7.737L18.431 9.563h-6.357L16.226 3h-4.69l-4.884 9.331z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  ThunderboltIcon.displayName = "ThunderboltIcon";
}
