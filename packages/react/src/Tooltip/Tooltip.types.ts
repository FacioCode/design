import { TooltipProps as MaterialTooltipProps } from "@material-ui/core";
import { Omit } from "@material-ui/types";

export type TooltipProps = Omit<MaterialTooltipProps, "arrow" | "css">;
