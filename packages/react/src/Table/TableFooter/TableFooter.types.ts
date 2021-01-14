import type { TableFooterProps as MaterialTableFooterProps } from "@material-ui/core/TableFooter";

export type TableFooterProps = Omit<MaterialTableFooterProps, "css">;
