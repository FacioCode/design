import * as React from "react";
import { SvgIconProps, SvgIconRender } from "./SvgIcon.types";
import { SvgIcon } from "./SvgIcon";

const render : SvgIconRender = (props, ref) => (
  <SvgIcon {...props} ref={ref}>
    {/* eslint-disable-next-line max-len */}
    <path fillRule="evenodd" d="M14.128 4.087a.5.5 0 0 1 .693.13L17.764 8.5H18a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.434h.002l.003-.083A2 2 0 0 1 6 5.5h6.048zm-9.13 5.145L5 17.5a1 1 0 0 0 .883.993L6 18.5h12a1 1 0 0 0 .993-.883L19 17.5V16h-2.5a.5.5 0 0 1-.492-.41L16 15.5v-3a.5.5 0 0 1 .5-.5H19v-1.5a1 1 0 0 0-.883-.993L18 9.5H6a1.99 1.99 0 0 1-1.001-.268zM19 13h-2v2h2v-2zm-8.434-6.501L6 6.5a1 1 0 0 0-.993.883L5 7.5a1 1 0 0 0 .163.548l.419.22a2 2 0 0 0 .928.232l1.141-.001.068-.054 2.238-1.523.609-.423zm3.712-1.306l-3.725 2.533-.909.632h6.809l-2.175-3.165z"/>
  </SvgIcon>
);

export const WalletIcon = React.forwardRef<unknown, SvgIconProps>(render);
WalletIcon.displayName = "WalletIcon";

export default WalletIcon;
