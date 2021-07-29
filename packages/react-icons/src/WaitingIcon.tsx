/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Waiting Icon
 *
 * @example
 * ```jsx
 * <WaitingIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const WaitingIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 1.344a.5.5 0 0 1 .5.5v5.192a.5.5 0 0 1-.15.356L10.008 14.7a.5.5 0 1 1-.702-.713l2.195-2.16V6.844a.5.5 0 0 1 .5-.5z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  WaitingIcon.displayName = "WaitingIcon";
}
