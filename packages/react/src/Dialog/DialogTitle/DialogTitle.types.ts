import type { DialogTitleProps as MaterialDialogTitleProps } from "@material-ui/core/DialogTitle";
import { Omit } from "@material-ui/types";

type OmittedProps = "css" | "disableTypography";

export type DialogTitleProps = Omit<MaterialDialogTitleProps, OmittedProps>;
