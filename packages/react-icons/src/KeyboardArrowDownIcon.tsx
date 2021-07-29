/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Keyboard Arrow Down Icon
 *
 * @example
 * ```jsx
 * <KeyboardArrowDownIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const KeyboardArrowDownIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M5.646 8.854a.5.5 0 0 1 .638-.765l.07.057L12 13.793l5.646-5.647a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07-6 6a.5.5 0 0 1-.638.057l-.07-.057-6-6z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  KeyboardArrowDownIcon.displayName = "KeyboardArrowDownIcon";
}
