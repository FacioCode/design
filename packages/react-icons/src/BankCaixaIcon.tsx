/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Icon for Caixa Bank
 *
 * @example
 * ```jsx
 * <BankCaixaIcon titleAccess={"Icon for Caixa Bank"} />
 * ```
 */
export const BankCaixaIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M15.944 11.75 22 4.093h-6.973L12.74 6.987 11.021 4H4.514l4.458 7.75h6.972zm-6.972 8.917 2.23-2.856 1.69 2.809h6.747l-4.623-7.689h-.001l.012-.014H8.055L2 20.667h6.972z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  BankCaixaIcon.displayName = "BankCaixaIcon";
}
