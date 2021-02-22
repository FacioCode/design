import { TooltipProps as MaterialTooltipProps } from "@material-ui/core";

export type TooltipProps = Omit<MaterialTooltipProps, "arrow" | "css">;
