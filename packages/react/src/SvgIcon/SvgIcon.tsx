import * as React from "react";
import { SvgIconProps, SvgIconRender } from "./SvgIcon.types";
import { SvgIcon as MaterialSvgIcon } from "@material-ui/core";

const render : SvgIconRender = (props: SvgIconProps, ref) => (
  <MaterialSvgIcon
    {...props}
    ref={ref}
    version={"1.1"}
    xmlns={"http://www.w3.org/2000/svg"}
  />
);

export const SvgIcon = React.forwardRef<unknown, SvgIconProps>(render);
SvgIcon.displayName = "SvgIcon";

export default SvgIcon;
