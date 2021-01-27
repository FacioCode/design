import type { TextFieldProps as MaterialTextFieldProps } from "@material-ui/core/TextField";

export type MaterialTextFieldVariant = MaterialTextFieldProps["variant"];
type OmittedProps = "css" | "hiddenLabel" | "size" | "variant";
type TextFieldSize = "medium" | "large";
type TextFieldVariant = "filled" | "underline";

export interface TextFieldProps extends Omit<MaterialTextFieldProps, OmittedProps> {

  /**
   * @default "medium"
   * @optional
   * @type "medium" | "large"
   */
  size?: TextFieldSize;

  /**
   * @default "filled"
   * @optional
   * @type "filled" | "underline"
   */
  variant?: TextFieldVariant;
}
