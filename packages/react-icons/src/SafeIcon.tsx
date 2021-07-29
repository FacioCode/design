/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Safe Icon
 *
 * @example
 * ```jsx
 * <SafeIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const SafeIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M20 2.5a.5.5 0 0 1 .492.41L20.5 3v16a.5.5 0 0 1-.41.492L20 19.5h-1.5V21a.5.5 0 0 1-.41.492L18 21.5h-2a.5.5 0 0 1-.5-.5v-1.5h-7V21a.5.5 0 0 1-.41.492L8 21.5H6a.5.5 0 0 1-.5-.5v-1.5H4a.5.5 0 0 1-.492-.41L3.5 19v-1.982a.5.5 0 0 1 .992-.09l.008.09V18.5h15v-15h-15v1.497a.5.5 0 0 1-.41.492L4 5.497a.5.5 0 0 1-.492-.41l-.008-.09V3a.5.5 0 0 1 .41-.492L4 2.5h16zm-12.5 17h-1v1h1v-1zm10 0h-1v1h1v-1zM4 7.512a.5.5 0 0 1 .492.41l.008.09v5.991a.5.5 0 0 1-.992.09l-.008-.09v-5.99a.5.5 0 0 1 .5-.5zM17 5.5H7a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5zm-.5 1v9h-9v-9h9zM5.5 6a.5.5 0 0 1 .09.992L5.5 7h-3a.5.5 0 0 1-.09-.992L2.5 6h3zm0 9a.5.5 0 0 1 .09.992L5.5 16h-3a.5.5 0 0 1-.09-.992L2.5 15h3zM13 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  SafeIcon.displayName = "SafeIcon";
}
