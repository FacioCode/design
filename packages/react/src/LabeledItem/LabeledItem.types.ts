import { TypographyProps } from "@components/Typography";

type OmittedProps = "aria-atomic" | "aria-hidden" | "component";

export interface LabeledItemProps extends Omit<TypographyProps, OmittedProps> {

  LabelTypographyProps?: TypographyProps;

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

  /**
   * @optional
   * @type string | undefined
   */
  className?: TypographyProps["className"];

  color?: TypographyProps["color"];

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
