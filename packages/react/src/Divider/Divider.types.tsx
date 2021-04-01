import type { DividerProps as MaterialDividerProps } from "@material-ui/core/Divider";
import { Omit } from "@material-ui/types";

export type DividerProps = Omit<MaterialDividerProps, "css">;
