/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Map Icon
 *
 * @example
 * ```jsx
 * <MapIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const MapIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 3c3.866 0 7 3.16 7 7.059 0 3.898-3.998 8.966-7 11.941l-.441-.446C8.649 18.561 5 13.767 5 10.06 5 6.16 8.134 3 12 3zm0 1c-3.312 0-6 2.71-6 6.059 0 2.746 2.454 6.753 5.82 10.324l.18.189.184-.192c3.28-3.475 5.676-7.34 5.81-10.082l.006-.24C18 6.712 15.312 4 12 4zm0 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  MapIcon.displayName = "MapIcon";
}
