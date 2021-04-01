import { CloseButtonProps } from "@components/Button";
import type { DialogProps as MaterialDialogProps } from "@material-ui/core/Dialog";
import { Omit } from "@material-ui/types";

export interface DialogProps extends Omit<MaterialDialogProps, "css"> {

  /**
   * @optional
   * @type object
   */
  CloseButtonProps?: CloseButtonProps;

}
