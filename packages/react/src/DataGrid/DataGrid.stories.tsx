/* eslint-disable sort-keys */
import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { DataGrid } from "./DataGrid";
import { DataGridProps, ValueGetterParams } from "./DataGrid.types";
import { Time } from "../Time";

export default {
  component: DataGrid,
  title: "Components/Data Grid",
} as Meta;

const Template : Story<DataGridProps> = (props: DataGridProps) => (
  <div style={{ display: "flex", minHeight: "25vw" }}>
    <div style={{ flexGrow: 1 }}>
      <DataGrid
        {...props}
        columnBuffer={props.columnBuffer}
        columnTypes={props.columnTypes}
        columns={props.columns}
        density={props.density}
        headerHeight={props.headerHeight}
        localeText={props.localeText}
        rows={props.rows}
        rowHeight={props.rowHeight}
        scrollbarSize={props.scrollbarSize}
        sortingOrder={props.sortingOrder}
      />
    </div>
  </div>
);

const getDate = (params: ValueGetterParams) => (
  <Time>{params.getValue("date").toString() || ""}</Time>
);

const columns = [
  {
    field: "date",
    headerName: "Solicitado em",
    renderCell: getDate,
    width: 130,
  },
  {
    field: "employerLegalName",
    headerName: "Razão social",
  },
];

const rows = [
  {
    id: "pending-11641-20201201181006",
    date: "2020-12-07T15:20:47.000Z",
    employerLegalName: "Acme",
  },
];

export const Playground : Story<DataGridProps> = Template.bind({});
Playground.args = {
  columns,
  pageSize: 1,
  rows,
};
