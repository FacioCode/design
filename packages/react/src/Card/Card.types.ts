import { CardProps as MaterialCardProps } from "@material-ui/core";

export type CardProps = Omit<MaterialCardProps, "elevation" | "raised">;
