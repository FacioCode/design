/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Icon for Votorantim Bank
 *
 * @example
 * ```jsx
 * <BankVotorantimIcon titleAccess={"Icon for Votorantim Bank"} />
 * ```
 */
export const BankVotorantimIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M17.815 19.994a.475.475 0 0 1-.061.005l.019-.002-.006.001h-.014l-.02.001-.03.001h-2.319a1.64 1.64 0 0 1-.59-.11 1.388 1.388 0 0 1-.51-.339 1.152 1.152 0 0 1-.227-.356l-1.436-3.65a4.8 4.8 0 0 1-1.181.458l-.007.002a6.754 6.754 0 0 1-1.62.186H3.484v-3.676l-.001-.002-2.324-1.077-.16-.074V8.674h2.485V4h6.021c1.894 0 3.234.559 3.97 1.494.439.557.663 1.248.663 2.033 0 .647-.248 1.16-.559 1.548a3.35 3.35 0 0 1-.528.523c.665.448 1.243 1.028 1.517 1.73l1.266 3.49.359.988 2.73-7.132c.1-.285.299-.528.56-.706l.135-.083c.273-.152.6-.238.944-.238H23L18.327 19.64a.47.47 0 0 1-.073.125.654.654 0 0 1-.439.227zm-8.43-8.632H7.057v2.14h2.408c.98 0 1.306-.564 1.306-1.078 0-.365-.166-.746-.612-.937a2.522 2.522 0 0 0-.774-.125zM9.28 6.688H7.057v1.986h2.232c.973-.003 1.278-.515 1.278-.993 0-.48-.306-.993-1.286-.993z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  BankVotorantimIcon.displayName = "BankVotorantimIcon";
}
