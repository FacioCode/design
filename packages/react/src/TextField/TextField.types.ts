import type { TextFieldProps as MaterialTextFieldProps } from "@material-ui/core/TextField";

export type MaterialTextFieldVariant = MaterialTextFieldProps["variant"];
type OmittedProps = "hiddenLabel" | "size" | "variant";
type TextFieldVariant = "filled" | "underline";

export interface TextFieldProps extends Omit<MaterialTextFieldProps, OmittedProps> {

  /**
   * @default "filled"
   * @optional
   * @type "filled" | "underline"
   */
  variant?: TextFieldVariant;
}
