import { ToolbarProps as MaterialToolbarProps } from "@material-ui/core/Toolbar";
import { Omit } from "@material-ui/types";

export type ToolbarProps = Omit<MaterialToolbarProps, "css">;
