import * as React from "react";
import { SvgIcon } from "./SvgIcon";
import { SvgIconProps } from "./SvgIcon.types";

type Render = (props: SvgIconProps, ref: SvgIconProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <SvgIcon {...props} ref={ref}>
    {/* eslint-disable-next-line max-len */}
    <path fillRule="evenodd" d="M17.303 6.697a.5.5 0 0 1 .058.638l-.058.069L12.707 12l4.596 4.596a.5.5 0 0 1-.638.765l-.069-.058L12 12.707l-4.596 4.596a.5.5 0 0 1-.765-.638l.058-.069L11.293 12 6.697 7.404a.5.5 0 0 1 .638-.765l.069.058L12 11.293l4.596-4.596a.5.5 0 0 1 .707 0z"/>
  </SvgIcon>
);

export const CloseIcon = React.forwardRef<unknown, SvgIconProps>(render);
CloseIcon.displayName = "CloseIcon";

export default CloseIcon;
