/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Ocultar saldo
 *
 * @example
 * ```jsx
 * <EyeClosedIcon titleAccess={"Ocultar saldo"} />
 * ```
 */
export const EyeClosedIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M21.854 2.146a.5.5 0 0 1 .057.638l-.057.07-4.336 4.335C19.088 8.302 20.599 9.905 22 12c-4.414 6.448-9.78 8.238-14.664 5.37l-3.482 3.484a.5.5 0 0 1-.765-.638l.057-.07 3.332-3.331C4.908 15.703 3.4 14.098 2 12c4.375-6.46 9.756-8.249 14.66-5.367l4.486-4.487a.5.5 0 0 1 .708 0zm-5.052 5.757L15.16 9.547a4 4 0 0 1-5.613 5.613l-1.48 1.481c4.164 2.298 8.63.836 12.526-4.39l.188-.258-.182-.252c-1.21-1.658-2.485-2.938-3.797-3.838zM3.404 11.745l-.189.259.184.255c1.21 1.662 2.484 2.942 3.794 3.842l1.647-1.648a4 4 0 0 1 5.613-5.613l1.477-1.477C11.747 5.05 7.27 6.51 3.404 11.745zm11.041-1.483-4.183 4.183a3 3 0 0 0 4.184-4.184zM12 9a3 3 0 0 0-2.445 4.738l4.183-4.183A2.986 2.986 0 0 0 12 9z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  EyeClosedIcon.displayName = "EyeClosedIcon";
}
