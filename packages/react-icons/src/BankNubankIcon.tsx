/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Icon for Nubank
 *
 * @example
 * ```jsx
 * <BankNubankIcon titleAccess={"Icon for Nubank"} />
 * ```
 */
export const BankNubankIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M11.546 7.984C11.546 5.515 8.76 4 6.764 4c-1.328 0-2.152.643-2.152 1.679v.707H4.01C3.052 6.386 2 7.437 2 8.394v7.558c0 .372.304.675.678.675h1.846a.68.68 0 0 0 .678-.674l.001-.044v-.044c-.002-.786-.001-6.61 0-8.89h1.571c.866 0 1.57.7 1.57 1.561v7.416c0 .372.305.675.679.675h1.847a.677.677 0 0 0 .679-.675c0-3.318-.002-5.43-.003-6.73V7.984zM6.774 6.386H5.202v-.712c0-.98 1.093-1.086 1.562-1.086 1.75 0 4.19 1.292 4.19 3.396l.001 1.238c.001 1.301.003 3.412.002 6.73a.086.086 0 0 1-.087.087H9.023a.087.087 0 0 1-.088-.087V8.536c0-1.185-.97-2.15-2.16-2.15zm8.203-.013c.374 0 .679.302.679.674v7.417c0 .861.704 1.562 1.57 1.562h1.572V7.24h-.009l.009-.114-.001-.035.001-.045a.68.68 0 0 1 .678-.673h1.846c.374 0 .678.302.678.674v7.559c0 .957-1.052 2.008-2.01 2.008h-.601v.707c0 1.036-.825 1.679-2.153 1.679-1.997 0-4.782-1.515-4.782-3.983v-2.088l-.001-.212-.001-1.77v-3.9c0-.372.304-.674.678-.674zm0 .588H13.13a.087.087 0 0 0-.088.086v3.84l.001.282.001 1.687v.922l.001 1.239c0 2.103 2.441 3.395 4.19 3.395.47 0 1.562-.106 1.562-1.086v-.712h-1.571a2.158 2.158 0 0 1-2.161-2.15V7.047a.088.088 0 0 0-.088-.086zm-10.366.013v8.979c0 .048-.04.086-.087.086H2.678a.087.087 0 0 1-.087-.087V8.394c0-.637.783-1.42 1.42-1.42h.6zm16.71-.013h-1.845a.088.088 0 0 0-.088.086l.001.866v8.113h.6c.637 0 1.42-.783 1.42-1.42V7.047a.087.087 0 0 0-.087-.086z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  BankNubankIcon.displayName = "BankNubankIcon";
}
