import { InputBaseProps as MaterialInputBaseProps } from "@material-ui/core/InputBase";

export type InputBaseProps = Omit<MaterialInputBaseProps, "css">;
