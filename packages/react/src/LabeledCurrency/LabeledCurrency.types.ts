import { CurrencyProps } from "@components/Currency";
import { TypographyProps } from "@components/Typography";

export interface LabeledCurrencyProps extends CurrencyProps {

  /**
   * @example "O total a pagar será de R$ 100,00"
   * @required
   * @type string
   */
  "aria-label": CurrencyProps["aria-label"];

  /**
   * @required
   */
  children: CurrencyProps["children"];

  /**
   * @ignore
   */
  component: CurrencyProps["component"];

  /**
   * @default inherit
   * @example inherit
   * @optional
   */
  currencyVariant?: TypographyProps["variant"];

  /**
   * @default true
   * @example true
   * @optional
   * @type boolean
   */
  gutterBottom?: TypographyProps["gutterBottom"];

  /**
   * @example "Total a pagar"
   * @required
   * @type node
   */
  label: TypographyProps["children"];

  /**
   * @default horizontal
   * @optional
   * @type "horizontal" | "vertical"
   */
  orientation?: "horizontal" | "vertical"

  /**
   * @default true
   * @example true
   * @optional
   * @type boolean
   */
  paragraph?: TypographyProps["paragraph"];

  /**
   * @example "alert"
   * @optional
   * @type "alert" | string
   */
  role?: TypographyProps["role"];

  /**
   * @default bodyText1
   * @example "bodyText1"
   * @optional
   */
  variant?: TypographyProps["variant"];

}
