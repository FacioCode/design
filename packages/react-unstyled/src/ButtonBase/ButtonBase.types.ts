import type { ElementType, HTMLAttributes, Ref } from "react";

export type Element = HTMLButtonElement | HTMLElement
type Attributes = HTMLAttributes<Element>

type ClassKey = |
  "root";

export type Props = {

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
   * The component used for the root node. Either a `string` to use a HTML element or a component.
   * ⚠️ Needs to be able to hold a ref.
   *
   * @default "component"
   * @optional
   * @type element
   */
  component?: ElementType

  /**
   * @optional
   * @type ref
   */
  ref?: Ref<Element>
}
