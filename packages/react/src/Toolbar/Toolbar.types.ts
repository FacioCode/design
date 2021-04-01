import { Omit } from "@material-ui/types";
import { ToolbarProps as MaterialToolbarProps } from "@material-ui/core/Toolbar";

export type ToolbarProps = Omit<MaterialToolbarProps, "css">;
