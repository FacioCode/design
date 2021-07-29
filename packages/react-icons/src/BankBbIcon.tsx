/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Icon for Banco do Brazil (Brazil's Bank)
 *
 * @example
 * ```jsx
 * <BankBbIcon titleAccess={"Icon for Banco do Brazil (Brazil's Bank)"} />
 * ```
 */
export const BankBbIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs>
      <path id="a" d="m3 18.5 1.875-1.25L6.75 18.5 3 21v-2.5zm18-13-1.876 1.25L17.25 5.5 21 3v2.501zm0 9.5-9 6-9-6 10.687-7.125 1.875 1.25-8.624 5.75 5.25 3.5 2.436-1.625-1.875-1.25 4.5-3.001 3.75 2.5zM3 9.001l9-5.999 9 6-10.687 7.124-1.875-1.25 8.624-5.75-5.25-3.5-2.437 1.625 1.875 1.25-4.5 3L3 9.002z"/></defs><use fillRule="evenodd" xlinkHref="#a"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  BankBbIcon.displayName = "BankBbIcon";
}
