/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Contract Icon
 *
 * @example
 * ```jsx
 * <ContractIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const ContractIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M18 2a1 1 0 0 1 .993.883L19 3v18a1 1 0 0 1-.883.993L18 22h-7.996a1 1 0 0 1-.608-.206l-.099-.086-4.004-4a1 1 0 0 1-.284-.576L5 17.001V3a1 1 0 0 1 .883-.993L6 2h12zm0 1H6v13h4.4a.5.5 0 0 1 .4.2.497.497 0 0 1 .192.31l.008.09-.001 4.4H18V3zm-8 14H6l3.999 3.996L10 17zm5.5-6a.5.5 0 0 1 .09.992L15.5 12h-7a.5.5 0 0 1-.09-.992L8.5 11h7zm0-3a.5.5 0 0 1 .09.992L15.5 9h-7a.5.5 0 0 1-.09-.992L8.5 8h7zm0-3a.5.5 0 0 1 .09.992L15.5 6h-7a.5.5 0 0 1-.09-.992L8.5 5h7z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  ContractIcon.displayName = "ContractIcon";
}
