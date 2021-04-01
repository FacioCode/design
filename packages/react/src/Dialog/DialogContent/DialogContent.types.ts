import type {
  DialogContentProps as MaterialDialogContentProps,
} from "@material-ui/core/DialogContent";
import { Omit } from "@material-ui/types";

export type DialogContentProps = Omit<MaterialDialogContentProps, "css" | "dividers">;
