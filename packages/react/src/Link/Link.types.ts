import { LinkProps as MaterialLinkProps } from "@material-ui/core/Link";

type LinkColor = "default" | "initial" | "inherit";
export type MaterialLinkColor = MaterialLinkProps["color"];
type OmittedProps = "color" | "css" | "underline" | "variantMapping"
export type ColorMapping = Record<LinkColor, MaterialLinkColor>;

export interface LinkProps extends Omit<MaterialLinkProps, OmittedProps> {

  /**
   * @default "default"
   * @optional
   * @type "default" | "initial" | "inherit"
   */
  color?: LinkColor
}
