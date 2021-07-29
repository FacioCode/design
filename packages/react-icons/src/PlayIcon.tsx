/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Play Icon
 *
 * @example
 * ```jsx
 * <PlayIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const PlayIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="53" height="53">
      <path d="M26.5 0C41.136 0 53 11.864 53 26.5S41.136 53 26.5 53 0 41.136 0 26.5 11.864 0 26.5 0z"/><path d="m40.23 27.25-11.25-6.495-11.25-6.495v25.981l11.25-6.495z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  PlayIcon.displayName = "PlayIcon";
}
