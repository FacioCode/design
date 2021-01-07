import * as React from "react";
import { TableBody as MaterialTableBody } from "@material-ui/core";
import { TableBodyProps } from "./TableBody.types";

type Render = (props: TableBodyProps, ref: TableBodyProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => <MaterialTableBody {...props} ref={ref} />;

export const TableBody = React.forwardRef<unknown, TableBodyProps>(render);
TableBody.displayName = "TableBody";

export default TableBody;
