/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Keyboard Arrow Left Icon
 *
 * @example
 * ```jsx
 * <KeyboardArrowLeftIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const KeyboardArrowLeftIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M14.646 5.646a.5.5 0 0 1 .765.638l-.057.07L9.707 12l5.647 5.646a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057-6-6a.5.5 0 0 1-.057-.638l.057-.07 6-6z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  KeyboardArrowLeftIcon.displayName = "KeyboardArrowLeftIcon";
}
