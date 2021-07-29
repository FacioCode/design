/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Close Icon
 *
 * @example
 * ```jsx
 * <CloseIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const CloseIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M17.303 6.697a.5.5 0 0 1 .058.638l-.058.069L12.707 12l4.596 4.596a.5.5 0 0 1-.638.765l-.069-.058L12 12.707l-4.596 4.596a.5.5 0 0 1-.765-.638l.058-.069L11.293 12 6.697 7.404a.5.5 0 0 1 .638-.765l.069.058L12 11.293l4.596-4.596a.5.5 0 0 1 .707 0z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  CloseIcon.displayName = "CloseIcon";
}
