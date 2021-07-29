/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Lock Icon
 *
 * @example
 * ```jsx
 * <LockIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const LockIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M18 10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h12zm0 1H6a1 1 0 0 0-.993.883L5 12v8a1 1 0 0 0 .883.993L6 21h12a1 1 0 0 0 .993-.883L19 20v-8a1 1 0 0 0-.883-.993L18 11zm-6-9.5a5.5 5.5 0 0 1 5.496 5.279L17.5 7v2.99h-1V7a4.5 4.5 0 0 0-8.995-.212L7.5 7v2.99h-1V7A5.5 5.5 0 0 1 12 1.5zM12 13a2 2 0 0 1 .968 3.75A.96.96 0 0 1 13 17v1a1 1 0 0 1-2 0v-1c0-.086.01-.17.031-.25A2 2 0 0 1 12 13zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  LockIcon.displayName = "LockIcon";
}
