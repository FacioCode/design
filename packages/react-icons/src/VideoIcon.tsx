/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Video Icon
 *
 * @example
 * ```jsx
 * <VideoIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const VideoIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M20 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 1v12H4V6h16zm-4.553 5.106-6-3A1 1 0 0 0 8 9v6a1 1 0 0 0 1.447.894l6-3a1 1 0 0 0 0-1.788zM15 12l-6 3V9l6 3z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  VideoIcon.displayName = "VideoIcon";
}
