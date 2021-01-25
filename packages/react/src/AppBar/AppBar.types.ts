import { AppBarProps as MaterialAppBarProps } from "@material-ui/core/AppBar";

export type AppBarProps = Omit<MaterialAppBarProps, "color" | "css" | "elevation">;
