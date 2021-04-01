import { BadgeProps as MaterialBadgeProps } from "@material-ui/core/Badge";
import { Omit } from "@material-ui/types";

export type BadgeProps = Omit<MaterialBadgeProps, "clickable" | "css">;
