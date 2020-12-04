import { HTMLAttributes } from "react";
import { Component } from "../Component";

export type ClassKey = "input" | "root";
export type Element = HTMLInputElement

export interface Props extends Component<Element> {

  /**
   * The component used for the `input` element.
   *
   * Either a HTML element name to use or a component.
   *
   * @default "input"
   * @optional
   * @type element
   */
  inputComponent?: Component<Element>["component"]

  /**
   * Attributes applied to the `input` element
   *
   * @optional
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes
   * @type object
   */
  inputProps?: HTMLAttributes<Element>

}
