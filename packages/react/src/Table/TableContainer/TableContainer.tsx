import * as React from "react";
import { TableContainer as MaterialTableContainer } from "@material-ui/core";
import { TableContainerProps } from "./TableContainer.types";

type Render = (props: TableContainerProps, ref: TableContainerProps["ref"]) => JSX.Element;

const render : Render = (props: TableContainerProps, ref) => (
  <MaterialTableContainer {...props} ref={ref} />
);

export const TableContainer = React.forwardRef<unknown, TableContainerProps>(render);
TableContainer.displayName = "TableContainer";

export default TableContainer;
