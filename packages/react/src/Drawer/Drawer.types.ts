import { DrawerProps as MaterialDrawerProps } from "@material-ui/core/Drawer";

export type DrawerProps = Omit<MaterialDrawerProps, "css">;
