import type { Component } from "../Component";

type Color = "default" | "info";
export type CardClassKey = "root" | Color;
export type Element = HTMLDivElement;

export interface Props extends Component<Element> {

  /**
   * The main color for the card.
   * @default "default"
   * @optional
   * @type "default" | "info"
   */
  color?: Color
}
