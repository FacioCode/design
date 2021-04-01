import * as React from "react";
import { LinkProps as MaterialLinkProps } from "@material-ui/core/Link";
import { Omit } from "@material-ui/types";

export type LinkColor = "default" | "inherit";
export type MaterialLinkColor = MaterialLinkProps["color"];
type OmittedProps = "color" | "css" | "underline" | "variantMapping"
export type ColorMapping = Record<LinkColor, MaterialLinkColor>;

export interface LinkProps extends Omit<MaterialLinkProps, OmittedProps> {

  /**
   * @default "default"
   * @optional
   * @type "default" | "inherit"
   */
  color?: LinkColor

  /**
   * @default "a"
   * @optional
   * @type element
   */
  component?: React.ElementType
}
