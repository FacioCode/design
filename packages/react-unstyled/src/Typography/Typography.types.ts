import type { ElementType, HTMLAttributes, ReactNode, Ref } from "react";

export type Element = HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement | HTMLElement;
type Attributes = HTMLAttributes<Element>

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

type ClassKey = "root" | TypographyVariant;

export interface Props {

  /**
   * The content of the component.
   *
   * @optional
   */
  children?: ReactNode;

  /**
   * @optional
   * @type object
   */
  classes?: Record<ClassKey, Attributes["className"]>

  /**
   * @optional
   * @type string
   */
  className?: Attributes["className"]

  /**
   * The component used for typography.
   *
   * Either a HTML element name to use or a component.
   *
   * @optional
   * @type element
   */
  component?: ElementType

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
