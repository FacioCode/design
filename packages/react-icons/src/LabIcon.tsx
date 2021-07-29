/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Lab Icon
 *
 * @example
 * ```jsx
 * <LabIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const LabIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M16.5 8a.5.5 0 0 1 .09.992L16.5 9H16v1.892a4 4 0 0 0 .57 2.058L19 17a3.303 3.303 0 0 1-2.831 5H7.831A3.301 3.301 0 0 1 5 17l2.43-4.05A4 4 0 0 0 8 10.892V9h-.5a.5.5 0 0 1-.09-.992L7.5 8h9zm-8.502 5.946-2.14 3.568a2.301 2.301 0 0 0 1.815 3.481l.158.005h8.338a2.303 2.303 0 0 0 2.054-3.342l-.08-.144-1.544-2.57-.03.002c-1.567 0-2.835-.13-4.471-.416l-2.584-.464-.285-.04-.31-.03-.257-.02a9.538 9.538 0 0 0-.664-.03zM10.5 17a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10.5 17zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM15 9H9v1.892a5.02 5.02 0 0 1-.45 2.075c.056.002.113.006.17.01.36.029.728.074 1.148.14l.599.1 1.264.235c1.631.3 2.852.455 4.265.487l-.283-.474a5 5 0 0 1-.706-2.302l-.007-.27V9zm-5-6a2 2 0 1 1 .001 3.999A2 2 0 0 1 10 3zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4.5-2a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.5 2zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  LabIcon.displayName = "LabIcon";
}
