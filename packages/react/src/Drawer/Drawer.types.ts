import { DrawerProps as MaterialDrawerProps } from "@material-ui/core/Drawer";
import { Omit } from "@material-ui/types";

export type DrawerProps = Omit<MaterialDrawerProps, "css">;
