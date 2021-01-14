import type {
  DialogContentProps as MaterialDialogContentProps,
} from "@material-ui/core/DialogContent";
export type DialogContentProps = Omit<MaterialDialogContentProps, "css" | "dividers">;
