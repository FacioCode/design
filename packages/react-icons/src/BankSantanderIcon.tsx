/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Icon for Santander Bank
 *
 * @example
 * ```jsx
 * <BankSantanderIcon titleAccess={"Icon for Santander Bank"} />
 * ```
 */
export const BankSantanderIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs>
      <path id="a" d="M15.226 11.364c-.04-.578-.194-1.157-.505-1.658l-2.64-4.588A3.92 3.92 0 0 1 11.656 4l-.116.193a3.636 3.636 0 0 0 0 3.662l2.134 3.663a3.636 3.636 0 0 1 0 3.663l-.116.192a3.92 3.92 0 0 0-.427-1.118l-1.94-3.354-1.243-2.159a3.92 3.92 0 0 1-.427-1.118l-.116.193c-.66 1.118-.66 2.506 0 3.663l2.135 3.662a3.636 3.636 0 0 1 0 3.663l-.117.193a3.92 3.92 0 0 0-.427-1.118l-2.678-4.588a4.051 4.051 0 0 1-.504-2.005C4.979 12.019 3 13.6 3 15.412 3 17.957 6.804 20 11.5 20s8.5-2.043 8.5-4.588c.038-1.735-1.902-3.316-4.774-4.048z"/></defs><use fillRule="evenodd" xlinkHref="#a"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  BankSantanderIcon.displayName = "BankSantanderIcon";
}
