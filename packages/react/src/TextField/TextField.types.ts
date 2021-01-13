import type { TextFieldProps as MaterialTextFieldProps } from "@material-ui/core/TextField";

type TextFieldVariant = "filled" | "underline";
export type MaterialTextFieldVariant = MaterialTextFieldProps["variant"];
export type VariantMapping = Record<TextFieldVariant, MaterialTextFieldVariant>;

type OmittedProps = "hiddenLabel" | "size" | "variant";
export interface TextFieldProps extends Omit<MaterialTextFieldProps, OmittedProps> {

  /**
   * @default "filled"
   * @optional
   * @type "filled" | "underline"
   */
  variant: TextFieldVariant;
}
