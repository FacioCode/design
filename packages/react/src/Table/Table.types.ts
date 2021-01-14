import type { TableProps as MaterialTableProps } from "@material-ui/core/Table";

export type TableProps = Omit<MaterialTableProps, "css">;
