import type { ElementType } from "react";
import { TypographyProps as MaterialTypographyProps } from "@material-ui/core/Typography";
import { Omit } from "@material-ui/types";

export type MaterialTypographyColor = MaterialTypographyProps["color"];
export type MaterialTypographyVariant = MaterialTypographyProps["variant"];

type TypographyVariant = |
  "bodyText1" |
  "bodyText2" |
  "button" |
  "caption" |
  "headline1" |
  "headline2" |
  "headline3" |
  "headline4" |
  "headline5" |
  "inherit" |
  "srOnly" |
  "subtitle1" |
  "subtitle2";

type TypographyColor = |
  "error" |
  "inherit" |
  "textPrimary" |
  "initial" |
  "inverse";

export type ComponentMapping = Record<TypographyVariant, ElementType>;
export type ColorMapping = Record<TypographyColor, MaterialTypographyColor>;
export type VariantMapping = Record<TypographyVariant, MaterialTypographyVariant>;

export type OmittedProps = "color" | "css" | "variant" | "variantMapping";
export interface TypographyProps extends Omit<MaterialTypographyProps, OmittedProps> {

  /**
   * @default "textPrimary"
   * @optional
   * @type "error" | "inherit" | "textPrimary" | "initial" | "inverse"
   */
  color?: TypographyColor;

  /**
   * @optional
   * @type element
   */
  component?: React.ElementType;

  /**
   * @default false
   * @optional
   * @type boolean
   */
  flexGrow?: boolean;

  /**
   * @default false
   * @optional
   * @type boolean
   */
  loading?: boolean;

  /**
   * Applies the theme typography styles.
   *
   * @default "bodyText1"
   * @optional
   */
  variant?: TypographyVariant;
}
