import type { TableCellProps as MaterialTableCellProps } from "@material-ui/core/TableCell";
import { Omit } from "@material-ui/types";

export type TableCellProps = Omit<MaterialTableCellProps, "css">;
