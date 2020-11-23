import type { ElementType, Ref } from "react";

export type Props = {

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
  ref?: Ref<HTMLButtonElement>
}
