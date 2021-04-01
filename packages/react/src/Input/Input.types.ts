import { InputProps as MaterialInputProps } from "@material-ui/core/Input";
import { Omit } from "@material-ui/types";

export type InputProps = Omit<MaterialInputProps, "css">;
