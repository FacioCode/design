import type { TableHeadProps as MaterialTableHeadProps } from "@material-ui/core/TableHead";
import { Omit } from "@material-ui/types";

export type TableHeadProps = Omit<MaterialTableHeadProps, "css">;
