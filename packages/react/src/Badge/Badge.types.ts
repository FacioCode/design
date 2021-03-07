import { BadgeProps as MaterialBadgeProps } from "@material-ui/core/Badge";

export type BadgeProps = Omit<MaterialBadgeProps, "clickable" | "css">;
