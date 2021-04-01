import { InputProps } from "@components/Input";
import { Omit } from "@material-ui/types";
import { TextFieldProps } from "@components/TextField";

export interface CurrencyFieldProps extends Omit<TextFieldProps, "css" | "rowsMax"> {

  /**
   * @optional
   * @type boolean
   */
  allowRecording?: TextFieldProps["allowRecording"];

  /**
   * @example "Amount to be anticipated"
   * @optional
   * @type string
   */
  "aria-label"?: TextFieldProps["aria-label"];

  /**
   * @default ,00
   * @example ",00"
   * @example ".00"
   * @optional
   * @type node
   */
  endAdornment?: InputProps["endAdornment"];

  /**
   * @default false
   * @example false
   * @example true
   * @type boolean
   */
  error?: TextFieldProps["error"];

  /**
   * @example "detail"
   * @optional
   * @type string
   */
  id?: TextFieldProps["id"];

  /**
   * @example "Margem consignável correta"
   * @optional
   * @type node
   */
  label?: TextFieldProps["label"];

  /**
   * @default decimal
   * @example "decimal"
   * @example "numeric"
   * @type "decimal" | "numeric"
   */
  inputMode?: "decimal" | "numeric";

  /**
   * Currency max limit. Useful for paycheck deductible limits.
   *
   * @optional
   * @type number
   */
  max?: TextFieldProps["inputProps"]["max"];

  /**
   * Currency min limit.
   *
   * @default 0
   * @example 0
   * @optional
   * @type number
   */
  min?: TextFieldProps["inputProps"]["min"];

  /**
   * @example "detail"
   * @optional
   * @type string
   */
  name?: TextFieldProps["inputProps"]["name"];

  /**
   * @optional
   */
  onChange?: TextFieldProps["onChange"];

  /**
   * @default false
   * @example false
   * @example true
   * @optional
   * @type boolean
   */
  required?: TextFieldProps["required"];

  /**
   * @default medium
   * @example large
   * @example medium
   * @optional
   * @type "medium" | "large"
   */
  size?: TextFieldProps["size"];

  /**
   * @default R$
   * @example R$
   * @optional
   * @type node
   */
  startAdornment?: InputProps["startAdornment"];

  /**
   * Currency step. By default, it is 0.01 for decimal input
   *
   * @example 0.01
   * @example 1
   * @example 10
   * @optional
   * @type number
   */
  // eslint-disable-next-line no-magic-numbers
  step?: 0.01 | 1 | 10 | TextFieldProps["inputProps"]["step"];

  /**
   * @default text
   * @example "number"
   * @example "text"
   * @optional
   * @type "text" | "number"
   */
  type?: "text" | "number";

  /**
   * @optional
   * @type string | number
   */
  value?: TextFieldProps["value"];

}
