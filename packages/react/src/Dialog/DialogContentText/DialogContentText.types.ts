import type {
  DialogContentTextProps as MaterialDialogContentTextProps,
} from "@material-ui/core/DialogContentText";
import { Omit } from "@material-ui/types";

export type DialogContentTextProps = Omit<MaterialDialogContentTextProps, "color" | "css">;
