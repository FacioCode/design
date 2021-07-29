/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Id Icon
 *
 * @example
 * ```jsx
 * <IdIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const IdIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M17 2H7a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 1v18H7V3h10zm-3 10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm0 1h-4v5h4v-5zM12 4a2 2 0 0 1 1.093 3.675A3.5 3.5 0 0 1 15.5 11a.5.5 0 1 1-1 0 2.5 2.5 0 1 0-5 0 .5.5 0 1 1-1 0 3.502 3.502 0 0 1 2.407-3.326A2 2 0 0 1 12 4zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  IdIcon.displayName = "IdIcon";
}
