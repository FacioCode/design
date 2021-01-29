import { InputBaseProps as MaterialInputBaseProps } from "@material-ui/core/InputBase";

type InputBaseSize = "medium" | "large";

export interface InputBaseProps extends Omit<MaterialInputBaseProps, "css"> {

  /**
   * @default "medium"
   * @optional
   * @type "medium" | "large"
   */
  size?: InputBaseSize;
}
