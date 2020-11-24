import { ElementType, HTMLAttributes, Ref } from "react";

type Attributes = HTMLAttributes<HTMLInputElement>

type ClassKey =
  | "input" | string;

export type Element = HTMLInputElement;

export interface Props {

  /**
   * Override or extend the styled applied to the component.
   *
   * @optional
   * @see ClassKey
   * @type object
   */
  classes?: Record<ClassKey, Attributes["className"]>

  /**
   * The component used for the `input` element.
   *
   * Either a HTML element name to use or a component.
   *
   * @default "input"
   * @optional
   * @type element
   */
  inputComponent?: ElementType

  /**
   * Attributes applied to the `input` element
   *
   * @optional
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes
   * @type object
   */
  inputProps?: Attributes

  /**
   * @optional
   * @type ref
   */
  ref?: Ref<Element>
}
