import type { ContainerProps as MaterialContainerProps } from "@material-ui/core/Container";

type ContainerColor = "transparent" | "grey";

export interface ContainerProps extends Omit<MaterialContainerProps, "css"> {

  /**
   * @default "transparent"
   * @optional
   * @type "transparent" | "grey"
   */
  color?: ContainerColor;

  /**
   * The component used for the root node. Either a `string` to use a DOM element or a component.
   *
   * @optional
   * @type element
   */
  component?: React.ElementType;

}
