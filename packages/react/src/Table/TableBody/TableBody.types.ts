import type { TableBodyProps as MaterialTableBodyProps } from "@material-ui/core/TableBody";
import { Omit } from "@material-ui/types";

export type TableBodyProps = Omit<MaterialTableBodyProps, "css">;
