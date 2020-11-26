import type { ElementType, HTMLAttributes, ReactNode, Ref } from "react";

export interface UnstyledComponent<C extends string, E> {

  /**
   * The content of the component
   *
   * @optional
   * @type node
   */
  children?: ReactNode

  /**
   * Override or extend the styled applied to the component.
   *
   * @optional
   * @see ClassKey
   * @type object
   */
  classes?: Record<C, HTMLAttributes<E>["className"]>

  /**
   * @optional
   * @type string
   */
  className?: HTMLAttributes<E>["className"]

  /**
   * The component used for the root node.
   *
   * Either a `string` to use a HTML element or a component.
   * ⚠️ Needs to be able to hold a ref.
   *
   * @optional
   * @type element
   */
  component?: ElementType

  /**
   * @optional
   * @type ref
   */
  ref?: Ref<E>

}
