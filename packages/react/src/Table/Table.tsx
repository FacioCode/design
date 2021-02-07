import * as React from "react";
import { Table as MaterialTable } from "@material-ui/core";
import { TableContext } from "./TableContext";
import type { TableProps } from "./Table.types";
import { useMediaQuery } from "../hooks/useMediaQuery";

type Render = (props: TableProps, ref: TableProps["ref"]) => JSX.Element;

const render : Render = (props: TableProps, ref) => {
  const {
    disableStripedRows = false,
    size: sizeProp,
    ...otherProps
  } = props;

  const isMobile = useMediaQuery("(max-width:900px)");

  let size = sizeProp;

  if (isMobile) {
    size = "small";
  }

  const table = React.useMemo(() => ({ disableStripedRows }), [disableStripedRows]);

  return <TableContext.Provider value={table}>
    <MaterialTable
      {...otherProps}
      size={size}
      ref={ref}
    />
  </TableContext.Provider>;
};

export const Table = React.forwardRef<unknown, TableProps>(render);
Table.displayName = "Table";

export default Table;
