/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Keyboard Arrow Right Icon
 *
 * @example
 * ```jsx
 * <KeyboardArrowRightIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const KeyboardArrowRightIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M9.354 5.646a.5.5 0 0 0-.765.638l.057.07L14.293 12l-5.647 5.646a.5.5 0 0 0-.057.638l.057.07a.5.5 0 0 0 .638.057l.07-.057 6-6a.5.5 0 0 0 .057-.638l-.057-.07-6-6z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  KeyboardArrowRightIcon.displayName = "KeyboardArrowRightIcon";
}
