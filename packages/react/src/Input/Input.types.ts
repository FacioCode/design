import { InputProps as MaterialInputProps } from "@material-ui/core/Input";

export type InputProps = Omit<MaterialInputProps, "css">;
