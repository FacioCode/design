import { TypographyProps } from "@components/Typography";

export interface LabeledItemProps {

  /**
   * @optional
   */
  LabelTypographyProps?: TypographyProps;

  /**
   * @default true
   * @optional
   */
  "aria-atomic"?: TypographyProps["aria-atomic"];

  /**
   * @default false
   * @optional
   */
  "aria-hidden"?: TypographyProps["aria-hidden"];

  /**
   * @example "The total amount to be paid will be $100"
   * @optional
   * @type string
   */
  "aria-label"?: TypographyProps["aria-label"];

  /**
   * @default "off"
   * @optional
   * @type "off" | "assertive" | "polite"
   */
  "aria-live"?: TypographyProps["aria-live"] | undefined;

  children?: TypographyProps["children"];

  /**
   * @optional
   * @type string | undefined
   */
  className?: TypographyProps["className"];

  color?: TypographyProps["color"];

  component?: TypographyProps["component"];

  /**
   * @default true
   * @example true
   * @optional
   * @type boolean
   */
  gutterBottom?: TypographyProps["gutterBottom"];

  /**
   * @example "Total amount to be paid"
   * @optional
   * @type node
   */
  label: TypographyProps["children"];

  loading?: boolean;

  /**
   * @default "horizontal"
   * @optional
   * @type "horizontal" | "vertical"
   */
  orientation?: "horizontal" | "vertical";

  /**
   * @default true
   * @example true
   * @optional
   * @type boolean
   */
  paragraph?: TypographyProps["paragraph"];

  /**
   * @optional
   */
  ref?: TypographyProps["ref"];

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
