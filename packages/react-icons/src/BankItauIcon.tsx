/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Icon for Itaú Bank
 *
 * @example
 * ```jsx
 * <BankItauIcon titleAccess={"Icon for Itaú Bank"} />
 * ```
 */
export const BankItauIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="m6.616 3.504 10.802.006a3.1 3.1 0 0 1 3.086 3.099v10.802a3.106 3.106 0 0 1-3.099 3.093l-10.808-.007a3.11 3.11 0 0 1-3.093-3.099l.013-10.802a3.098 3.098 0 0 1 3.099-3.092zm9.405 9.322h-1.2l-.007 2.953c0 1.143.654 1.65 1.556 1.65.629.007 1.118-.266 1.39-.749h.013v.63h1.156v-4.484h-1.2v2.59c0 .795-.534 1.023-.927 1.023-.375 0-.788-.14-.781-.832v-2.781zm-3.957-.12c-.933 0-1.905.196-2.05 1.568h1.161c.038-.26.146-.623.743-.623.311 0 .794.026.794.521 0 .254-.235.33-.425.356l-1.08.159c-.768.108-1.34.558-1.34 1.435 0 .927.711 1.308 1.39 1.308.826 0 1.214-.375 1.48-.648.026.248.045.311.115.527l1.035-.006v-.28a59.168 59.168 0 0 0-.006-.571v-2.439c0-1.11-1.169-1.308-1.817-1.308zm-3.302-1.449h-1.2v1.563H6.94v.844h.616v2.724c0 .578.184.972 1.225.972h.159c.19 0 .38-.013.565-.019v-.896c-.082.007-.171.02-.248.02-.489 0-.501-.102-.501-.369l.006-2.432h.75v-.845h-.75v-1.562zm-2.375-.006H5.092l-.007 6.052h1.296l.006-6.052zm6.325 3.874v.578c0 .546-.546.882-1.08.882-.228 0-.558-.133-.558-.54 0-.489.368-.603.819-.679.495-.07.698-.146.82-.241zm5.398-3.868h-1.232l-.508.966h.864l.876-.966z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  BankItauIcon.displayName = "BankItauIcon";
}
