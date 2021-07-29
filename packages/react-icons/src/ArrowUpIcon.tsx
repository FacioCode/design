/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Arrow Up Icon
 *
 * @example
 * ```jsx
 * <ArrowUpIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const ArrowUpIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="m4.777 11.527.058-.07 6.623-6.622a.5.5 0 0 1 .638-.058l.069.058 6.623 6.623a.5.5 0 0 1-.638.765l-.07-.058-5.77-5.77.001 12.416a.5.5 0 0 1-.992.09l-.008-.09V6.395l-5.769 5.77a.5.5 0 0 1-.638.058l-.069-.058a.5.5 0 0 1-.058-.638z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  ArrowUpIcon.displayName = "ArrowUpIcon";
}
