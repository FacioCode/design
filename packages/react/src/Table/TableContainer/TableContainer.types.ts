import type { TableContainerProps as MaterialProps } from "@material-ui/core/TableContainer";

export type TableContainerProps = Omit<MaterialProps, "css">;
