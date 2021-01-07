import * as React from "react";
import { TableFooter as MaterialTableHead } from "@material-ui/core";
import type { TableFooterProps } from "./TableFooter.types";

type Render = (props: TableFooterProps, ref: TableFooterProps["ref"]) => JSX.Element;

const render : Render = (props: TableFooterProps, ref) => (
  <MaterialTableHead {...props} ref={ref} />
);

export const TableFooter = React.forwardRef<unknown, TableFooterProps>(render);
TableFooter.displayName = "TableFooter";

export default TableFooter;
