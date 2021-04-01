import { AlertTitleProps as MaterialAlertTitleProps } from "@material-ui/lab/AlertTitle";
import { Omit } from "@material-ui/types";

export type AlertTitleProps = Omit<MaterialAlertTitleProps, "css" | "gutterBottoms">
