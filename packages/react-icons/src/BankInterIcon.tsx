/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Icon for Inter Bank
 *
 * @example
 * ```jsx
 * <BankInterIcon titleAccess={"Icon for Inter Bank"} />
 * ```
 */
export const BankInterIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M7.376 10.044c-.893 0-1.444.537-1.72 1.065l-.064-.892H4.268v5.609h1.388v-3.152c0-.93.485-1.5 1.218-1.5.732 0 1.004.493 1.004 1.348v3.304h1.388v-3.609c.002-1.252-.532-2.173-1.89-2.173zm13.68 1.065c.353-.702 1.072-1.065 1.613-1.065.096 0 .248.012.331.032v1.098h-.021c-.987 0-1.54.604-1.54 1.63v3.044h-1.771v-5.63h1.345l.043.89zm-4.802-1.065c1.828 0 2.734 1.357 2.638 3.325H14.9c.072 1.01.538 1.522 1.363 1.522.697 0 1.067-.342 1.226-.826h1.357C18.582 15.252 17.659 16 16.254 16c-1.734 0-2.78-1.164-2.78-2.912v-.143c0-1.726 1.069-2.901 2.78-2.901zm-4.702-1.696v1.87h1.452v.956h-1.452v2.913c0 .506.192.735.798.735.254 0 .504-.072.654-.126v1.174c-.254.086-.643.13-.961.13-1.275 0-1.88-.65-1.88-1.774V8.348h1.389zm-8.224 1.87v5.608H1.94v-4.653H1v-.956h2.328zm12.915.956c-.76 0-1.215.415-1.343 1.24l2.598-.023c-.075-.769-.483-1.217-1.255-1.217zM2.691 8c.37.013.666.298.68.654v.214a.692.692 0 0 1-.68.653h-.114a.692.692 0 0 1-.68-.653v-.214A.692.692 0 0 1 2.578 8z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  BankInterIcon.displayName = "BankInterIcon";
}
