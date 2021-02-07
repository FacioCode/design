import * as React from "react";

export const TableContext = React.createContext({
  disableStripedRows: false,
});

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  TableContext.displayName = "TableContext";
}

export default TableContext;
