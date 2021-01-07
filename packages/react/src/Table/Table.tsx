import * as React from "react";
import { Table as MaterialTable } from "@material-ui/core";
import type { TableProps } from "./Table.types";

type Render = (props: TableProps, ref: TableProps["ref"]) => JSX.Element;

const render : Render = (props: TableProps, ref) => (
  <MaterialTable {...props} ref={ref} />
);

export const Table = React.forwardRef<unknown, TableProps>(render);
Table.displayName = "Table";

export default Table;
