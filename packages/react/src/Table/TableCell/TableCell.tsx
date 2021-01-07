import * as React from "react";
import { TableCell as MaterialTableCell } from "@material-ui/core";
import type { TableCellProps } from "./TableCell.types";

type Render = (props: TableCellProps, ref: TableCellProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialTableCell {...props} ref={ref} />
);

export const TableCell = React.forwardRef<unknown, TableCellProps>(render);
TableCell.displayName = "TableCell";

export default TableCell;
