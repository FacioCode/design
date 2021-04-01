import { FormLabelProps as MaterialFormLabelProps } from "@material-ui/core";
import { Omit } from "@material-ui/types";

export type FormLabelProps = Omit<MaterialFormLabelProps, "css">;
