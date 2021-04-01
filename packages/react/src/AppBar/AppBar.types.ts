import { AppBarProps as MaterialAppBarProps } from "@material-ui/core/AppBar";
import { Omit } from "@material-ui/types";

export type AppBarProps = Omit<MaterialAppBarProps, "color" | "css" | "elevation">;
