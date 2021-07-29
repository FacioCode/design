/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Forbidden Icon
 *
 * @example
 * ```jsx
 * <ForbiddenIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const ForbiddenIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M12 2.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19zm6.354 3.854-12 12 .07.061A8.5 8.5 0 0 0 18.415 6.423l-.062-.07zM12 3.5a8.5 8.5 0 0 0-6.415 14.077l.061.07 12-12-.07-.062A8.467 8.467 0 0 0 12 3.5z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  ForbiddenIcon.displayName = "ForbiddenIcon";
}
