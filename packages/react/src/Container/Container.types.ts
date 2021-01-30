import type { ContainerProps as MaterialContainerProps } from "@material-ui/core/Container";

export interface ContainerProps extends Omit<MaterialContainerProps, "css"> {

  /**
   * The component used for the root node. Either a `string` to use a DOM element or a component.
   *
   * @optional
   * @type element
   */
  component?: React.ElementType;

}
