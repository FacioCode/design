import type { TableBodyProps as MaterialTableBodyProps } from "@material-ui/core/TableBody";

export type TableBodyProps = Omit<MaterialTableBodyProps, "css">;
