import * as React from "react";
import { SvgIcon } from "./SvgIcon";
import { SvgIconProps } from "./SvgIcon.types";

type Render = (props: SvgIconProps, ref: SvgIconProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <SvgIcon {...props} ref={ref}>
    {/* eslint-disable-next-line max-len */}
    <path fillRule="evenodd" d="M16.72 13.782c.805-1.365 1.276-2.743 1.277-4.089l-.013-.675-.017-.547a13.071 13.071 0 0 0-.133-1.5C17.37 3.831 15.648 2.012 12.002 2c-2.673-.004-4.368 1.023-5.234 2.88-.6 1.288-.731 2.511-.731 4.813.002 1.537.607 3.066 1.617 4.552.426.627.801 1.088 1.293 1.632-.157 1.001-1.663 2.08-3.253 2.16l-.184.004c-1.595 0-2.76 1.154-3.485 3.332a.476.476 0 0 0 .903.301c.61-1.83 1.469-2.68 2.582-2.68 2.22 0 4.403-1.602 4.403-3.287a.476.476 0 0 0-.125-.321A13.673 13.673 0 0 1 8.44 13.71c-.912-1.343-1.45-2.703-1.452-4.018l.004-.65c.026-1.75.172-2.759.639-3.76.705-1.513 2.058-2.333 4.367-2.33 3.13.011 4.493 1.449 4.893 4.158l.042.315c.056.459.08.908.098 1.602l.013.674c0 1.143-.42 2.366-1.145 3.598-.486.825-.99 1.48-1.535 2.092a.476.476 0 0 0-.12.316c0 1.68 2.152 3.286 4.325 3.286 1.074 0 1.907.848 2.5 2.678a.476.476 0 1 0 .907-.294c-.68-2.096-1.757-3.246-3.229-3.331l-.178-.005c-1.55 0-3.081-1.043-3.336-2.048l-.024-.12a13.734 13.734 0 0 0 1.51-2.09z"/>
  </SvgIcon>
);

export const ApproveIcon = React.forwardRef<unknown, SvgIconProps>(render);
ApproveIcon.displayName = "ApproveIcon";

export default ApproveIcon;
