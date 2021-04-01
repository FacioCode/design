import type { TableFooterProps as MaterialTableFooterProps } from "@material-ui/core/TableFooter";
import { Omit } from "@material-ui/types";

export type TableFooterProps = Omit<MaterialTableFooterProps, "css">;
