import type { TextFieldProps as MaterialTextFieldProps } from "@material-ui/core/TextField";

export type MaterialTextFieldVariant = MaterialTextFieldProps["variant"];
type OmittedProps = "css" | "hiddenLabel" | "size" | "variant";
type TextFieldSize = "medium" | "large";
type TextFieldVariant = "filled" | "underline";

export interface TextFieldProps extends Omit<MaterialTextFieldProps, OmittedProps> {

  /**
   * Allow recording of element content and keystrokes by Hotjar and LogRocket.
   *
   * @optional
   * @since 10.4.0
   * @type boolean
   */
  allowRecording?: boolean;

  /**
   * @example "Amount to be anticipated"
   * @optional
   * @type string
   */
  "aria-label"?: MaterialTextFieldProps["aria-label"];

  /**
   * @example 1
   * @optional
   * @type string | number | undefined
   */
  rowsMax?: MaterialTextFieldProps["rowsMax"];

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
