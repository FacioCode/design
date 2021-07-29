/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Search Icon
 *
 * @example
 * ```jsx
 * <SearchIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const SearchIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M13.1 4a6.5 6.5 0 1 1-4.337 11.342l-.01.012-4.8 4.8a.5.5 0 0 1-.764-.638l.057-.07 4.8-4.8.029-.023A6.5 6.5 0 0 1 13.1 4zm0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  SearchIcon.displayName = "SearchIcon";
}
