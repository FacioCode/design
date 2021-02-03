import { ToolbarProps as MaterialToolbarProps } from "@material-ui/core/Toolbar";

export type ToolbarProps = Omit<MaterialToolbarProps, "css">;
