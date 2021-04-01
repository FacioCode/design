import type {
  DialogActionsProps as MaterialDialogActionsProps,
} from "@material-ui/core/DialogActions";
import { Omit } from "@material-ui/types";

export type DialogActionsProps = Omit<MaterialDialogActionsProps, "css">;
