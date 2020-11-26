import type { UnstyledComponent } from "../UnstyledComponent";

type Color = "default" | "info";
export type ClassKey = "root" | Color;
export type Element = HTMLDivElement;

export interface Props extends UnstyledComponent<ClassKey, Element> {

  /**
   * The main color for the card.
   * @default "default"
   * @optional
   * @type "default" | "info"
   */
  color?: Color
}
