import { IconButtonProps } from "../IconButton";
import type { DialogProps as MaterialDialogProps } from "@material-ui/core/Dialog";

export interface DialogProps extends Omit<MaterialDialogProps, "css"> {

  /**
   * @optional
   * @type object
   */
  CloseButtonProps?: IconButtonProps;

}
