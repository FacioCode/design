import type { ElementType } from "react";
import { TypographyProps as MaterialTypographyProps } from "@material-ui/core/Typography";

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

export type ComponentMapping = Record<TypographyVariant, ElementType>;
export type VariantMapping = Record<TypographyVariant, MaterialTypographyVariant>;

export type OmittedProps = "variant" | "variantMapping";
export interface TypographyProps extends Omit<MaterialTypographyProps, OmittedProps> {

  /**
   * @optional
   * @type element
   */
  component?: React.ElementType;

  /**
   * Applies the theme typography styles.
   *
   * @default "bodyText1"
   * @optional
   */
  variant?: TypographyVariant;
}
