import * as React from "react";
import { TableRow as MaterialTableRow } from "@material-ui/core";
import type { TableRowProps } from "./TableRow.types";

type Render = (props: TableRowProps, ref: TableRowProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialTableRow {...props} ref={ref} />
);

export const TableRow = React.forwardRef<unknown, TableRowProps>(render);
TableRow.displayName = "TableRow";

export default TableRow;
