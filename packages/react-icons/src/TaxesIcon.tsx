/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Taxes Icon
 *
 * @example
 * ```jsx
 * <TaxesIcon titleAccess={"Human-readable title here"} />
 * ```
 */
export const TaxesIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M18 2a1 1 0 0 1 .993.883L19 3v18a1 1 0 0 1-.883.993L18 22h-7.996a1 1 0 0 1-.608-.206l-.099-.086-4.004-4a1 1 0 0 1-.284-.576L5 17.001V3a1 1 0 0 1 .883-.993L6 2h12zm0 1H6v13h4.4a.5.5 0 0 1 .4.2.497.497 0 0 1 .192.31l.008.09-.001 4.4H18V3zm-8 14H6l3.999 3.996L10 17zm4.5-7.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.854-4.854a.5.5 0 0 1 .057.638l-.057.07-6 6a.5.5 0 0 1-.765-.638l.057-.07 6-6a.5.5 0 0 1 .708 0zM9.5 4.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  TaxesIcon.displayName = "TaxesIcon";
}
