import { InputLabelProps as MaterialInputLabelProps } from "@material-ui/core/InputLabel";
import { Omit } from "@material-ui/types";

export type InputLabelProps = Omit<MaterialInputLabelProps, "css">
