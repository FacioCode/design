import type { ElementType, ReactNode, Ref } from "react";
import { UnstyledComponent } from "../UnstyledComponent";

type TypographyVariant = |
  "headline1" |
  "headline2" |
  "headline3" |
  "headline4" |
  "headline5" |
  "bodyText1" |
  "bodyText2" |
  "subtitle1" |
  "subtitle2" |
  "caption";

export type ClassKey = "root" | TypographyVariant;
export type Element = HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement | HTMLElement;

export interface Props extends UnstyledComponent<ClassKey, Element> {

  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  paragraph?: boolean;

  /**
   * @optional
   * @type ref
   */
  ref: Ref<Element>

  /**
   * Applies the theme typography styles.
   * @default "bodyText1"
   */
  variant?: TypographyVariant
}
