import * as React from "react";
import { SvgIcon as MaterialSvgIcon } from "@material-ui/core";
import { SvgIconProps } from "./SvgIcon.types";

type Render = (props: SvgIconProps, ref: SvgIconProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialSvgIcon {...props} ref={ref} />
);

export const SvgIcon = React.forwardRef<unknown, SvgIconProps>(render);
SvgIcon.displayName = "SvgIcon";

export default SvgIcon;
