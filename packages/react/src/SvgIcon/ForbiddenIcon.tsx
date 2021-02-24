import * as React from "react";
import { SvgIcon } from "./SvgIcon";
import { SvgIconProps } from "./SvgIcon.types";

type Render = (props: SvgIconProps, ref: SvgIconProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <SvgIcon {...props} ref={ref}>
    {/* eslint-disable-next-line max-len */}
    <path fillRule="evenodd" d="M12 2.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19zm6.354 3.854l-12 12 .07.061A8.5 8.5 0 0 0 18.415 6.423l-.062-.07zM12 3.5a8.5 8.5 0 0 0-6.415 14.077l.061.07 12-12-.07-.062A8.467 8.467 0 0 0 12 3.5z"/>
  </SvgIcon>
);

export const ForbiddenIcon = React.forwardRef<unknown, SvgIconProps>(render);
ForbiddenIcon.displayName = "ForbiddenIcon";

export default ForbiddenIcon;
