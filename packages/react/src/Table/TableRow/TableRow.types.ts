import type { TableRowProps as MaterialTableRowProps } from "@material-ui/core/TableRow";
import { Omit } from "@material-ui/types";

export type TableRowProps = Omit<MaterialTableRowProps, "css">;
