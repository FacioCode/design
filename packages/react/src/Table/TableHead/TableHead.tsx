import * as React from "react";
import { TableHead as MaterialTableHead } from "@material-ui/core";
import type { TableHeadProps } from "./TableHead.types";

type Render = (props: TableHeadProps, ref: TableHeadProps["ref"]) => JSX.Element;

const render : Render = (props: TableHeadProps, ref) => (
  <MaterialTableHead {...props} ref={ref} />
);

export const TableHead = React.forwardRef<unknown, TableHeadProps>(render);
TableHead.displayName = "TableHead";

export default TableHead;
