import type { DialogTitleProps as MaterialDialogTitleProps } from "@material-ui/core/DialogTitle";

type OmittedProps = "css" | "disableTypography";

export type DialogTitleProps = Omit<MaterialDialogTitleProps, OmittedProps>;
