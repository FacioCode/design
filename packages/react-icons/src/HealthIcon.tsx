/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Health Icon
 *
 * @example
 * ```jsx
 * <HealthIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const HealthIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="m9 2-.117.007A1 1 0 0 0 8 3v4.999L3 8a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 3 16l5-.002V21a1 1 0 0 0 1 1h6l.117-.007A1 1 0 0 0 16 21v-5.002L21 16a1 1 0 0 0 1-1V9l-.007-.117A1 1 0 0 0 21 8l-5-.001V3a1 1 0 0 0-1-1H9zm6 1v5.999L21 9v6l-6-.001V21H9v-6.001L3 15V9l6-.001V3h6z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  HealthIcon.displayName = "HealthIcon";
}
