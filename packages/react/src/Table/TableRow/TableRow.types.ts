import type { TableRowProps as MaterialTableRowProps } from "@material-ui/core/TableRow";

export type TableRowProps = Omit<MaterialTableRowProps, "css">;
