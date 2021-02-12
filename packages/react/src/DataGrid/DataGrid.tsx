import * as React from "react";
import { DataGridProps } from "./DataGrid.types";
import { DataGrid as MaterialDataGrid } from "@material-ui/data-grid";

export const DataGrid : React.FunctionComponent<DataGridProps> = (props: DataGridProps) => {
  const {
    columnBuffer,
    columnTypes,
    columns,
    density,
    headerHeight,
    localeText,
    rowHeight,
    rows,
    scrollbarSize,
    sortingOrder,
    ...otherProps
  } = props;

  return (
    <MaterialDataGrid
      {...otherProps}
      columnBuffer={columnBuffer}
      columnTypes={columnTypes}
      columns={columns}
      density={density}
      headerHeight={headerHeight}
      localeText={localeText}
      rows={rows}
      rowHeight={rowHeight}
      scrollbarSize={scrollbarSize}
      sortingOrder={sortingOrder}
    />
  );
};

export default DataGrid;
