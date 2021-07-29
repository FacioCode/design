/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Exibir saldo
 *
 * @example
 * ```jsx
 * <EyeOpenIcon titleAccess={"Exibir saldo"} />
 * ```
 */
export const EyeOpenIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M2 12c6.05-8.934 14.025-8.934 20 0-6.11 8.926-14.046 8.926-20 0zm18.6-.26c-5.297-7.255-11.835-7.255-17.196.005l-.189.259.184.255c5.277 7.249 11.784 7.248 17.194-.009l.188-.257-.182-.252zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  EyeOpenIcon.displayName = "EyeOpenIcon";
}
