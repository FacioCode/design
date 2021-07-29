/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Arrow Right Icon
 *
 * @example
 * ```jsx
 * <ArrowRightIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const ArrowRightIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="m12.284 4.966.07.058 6.622 6.622a.5.5 0 0 1 .058.638l-.058.07-6.622 6.622a.5.5 0 0 1-.765-.637l.057-.07 5.77-5.77L5 12.5a.5.5 0 0 1-.09-.992L5 11.5h12.416l-5.77-5.77a.5.5 0 0 1-.057-.637l.057-.07a.5.5 0 0 1 .638-.057z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  ArrowRightIcon.displayName = "ArrowRightIcon";
}
