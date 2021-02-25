import { SvgIconProps as MaterialSvgIconProps } from "@material-ui/core";

export type SvgIconProps = Omit<MaterialSvgIconProps, "css">;
export type SvgIconRender = (props: SvgIconProps, ref: SvgIconProps["ref"]) => JSX.Element;
