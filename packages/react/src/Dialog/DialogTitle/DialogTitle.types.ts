import type { DialogTitleProps as MaterialDialogTitleProps } from "@material-ui/core/DialogTitle";

type OmittedProps = "css" | "disableTypography";

export interface DialogTitleProps extends Omit<MaterialDialogTitleProps, OmittedProps> {

  /**
   * @ignore
   */
  css?: never;

}
