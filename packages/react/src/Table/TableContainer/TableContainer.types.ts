import * as React from "react";
import type { TableContainerProps as MaterialProps } from "@material-ui/core/TableContainer";

export interface TableContainerProps extends Omit<MaterialProps, "css"> {

  /**
   * @default "div"
   * @optional
   * @type element
   */
  component?: React.ElementType
}
