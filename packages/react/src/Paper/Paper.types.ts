import { Component } from "../Component";

type Variant = "rounded" | "square";
export type ClassKey = "root" | Variant;
export type Element = HTMLDivElement | HTMLElement;

export interface Props extends Component<Element> {

  /**
   * The variant to use.
   *
   * If `rounded`, rounded corners are enabled.
   *
   * @default "square"
   * @type "rounded" | "square"
   */
  variant?: Variant
}
