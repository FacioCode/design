import { PaperProps as MaterialPaperProps } from "@material-ui/core/Paper";

export type PaperProps = Omit<MaterialPaperProps, "css" | "elevation">;
