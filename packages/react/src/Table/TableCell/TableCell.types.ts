import type { TableCellProps as MaterialTableCellProps } from "@material-ui/core/TableCell";

export type TableCellProps = Omit<MaterialTableCellProps, "css">;
