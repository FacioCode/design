import type { TableProps as MaterialTableProps } from "@material-ui/core/Table";
import { Omit } from "@material-ui/types";

export interface TableProps extends Omit<MaterialTableProps, "css"> {

  /**
   * @default false
   * @ignore
   * @optional
   */
  disableStripedRows?: never;

  /**
   * @default true
   * @optional
   * @type bool
   */
  stickyHeader?: boolean;

}
