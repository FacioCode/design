import {
  DataGridProps as MaterialDataGridProps,
  ValueGetterParams as MaterialValueGetterParams,
} from "@material-ui/data-grid";

export type DataGridProps = Omit<MaterialDataGridProps, "css">;
export type ValueGetterParams = MaterialValueGetterParams;
