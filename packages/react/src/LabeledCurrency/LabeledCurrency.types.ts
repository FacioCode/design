import { CurrencyProps } from "@components/Currency";
import type { OverrideProps } from "@material-ui/core/OverridableComponent";
import { TypographyProps } from "@components/Typography";

export type LabeledCurrencyClassKey =
  | "root"
  | "orientationHorizontal"
  | "orientationVertical";

export type LabeledCurrencyBaseProps = React.HTMLAttributes<HTMLParagraphElement>
  & Omit<CurrencyProps, "css">;

// eslint-disable-next-line @typescript-eslint/ban-types
export interface LabeledCurrencyTypeMap<P = {}, D extends React.ElementType = "p"> {
  props: P & LabeledCurrencyBaseProps & {
    CurrencyTypographyProps: TypographyProps;

    /**
     * @example "The total amount to be paid will be $100"
     * @required
     * @type string
     */
    "aria-label": CurrencyProps["aria-label"];

    /**
     * @optional
     * @type "off" | "assertive" | "polite"
     */
    "aria-live"?: TypographyProps["aria-live"];

    /**
     * @example "Total amount to be paid"
     * @required
     * @type node
     */
    children: TypographyProps["children"];

    /**
     * @example BRL
     * @required
     */
    code: CurrencyProps["code"];

    /**
     * @ignore
     */
    component: CurrencyProps["component"];

    /**
     * @default true
     * @example true
     * @optional
     * @type boolean
     */
    gutterBottom?: TypographyProps["gutterBottom"];

    /**
     * Defaults to current browser locale(s).
     *
     * @example "pt-BR"
     * @optional
     * @type string | string[]
     */
    locales?: CurrencyProps["locales"];

    /**
     * @default horizontal
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
     * @example "alert"
     * @optional
     * @type "alert" | string
     */
    role?: TypographyProps["role"];

    /**
     * @required
     */
    value?: CurrencyProps["value"];

    /**
     * @default bodyText1
     * @example "bodyText1"
     * @optional
     */
    variant?: TypographyProps["variant"];

  };
  defaultComponent: D;
  classKey: LabeledCurrencyClassKey;
}

export type LabeledCurrencyProps<
  D extends React.ElementType = LabeledCurrencyTypeMap["defaultComponent"],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = Omit<OverrideProps<LabeledCurrencyTypeMap<P, D>, D>, "css">;
