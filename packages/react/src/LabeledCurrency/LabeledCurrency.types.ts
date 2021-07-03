import { CurrencyProps } from "@components/Currency";
import { TypographyProps } from "@components/Typography";

export interface LabeledCurrencyProps {

    /**
     * @optional
     * @type object | undefined
     */
    CurrencyTypographyProps?: TypographyProps | undefined;

    /**
     * @example "The total amount to be paid will be $100"
     * @optional
     * @type string
     */
    "aria-label"?: TypographyProps["aria-label"] | undefined;

    /**
     * @default "off"
     * @optional
     * @type "off" | "assertive" | "polite"
     */
    "aria-live"?: TypographyProps["aria-live"] | undefined;

    /**
     * @example "Total amount to be paid"
     * @optional
     * @type node
     */
    children?: TypographyProps["children"];

    /**
     * @optional
     * @type string | undefined
     */
    className?: TypographyProps["className"] | undefined;

    code?: CurrencyProps["code"];

    /**
     * @default true
     * @example true
     * @optional
     * @type boolean
     */
    gutterBottom?: TypographyProps["gutterBottom"];

    loading?: boolean;

    locales?: CurrencyProps["locales"];

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
     * @example `{ value: 100 }`
     * @optional
     */
    value?: CurrencyProps["value"] | undefined;

    /**
     * @default bodyText1
     * @example "bodyText1"
     * @optional
     */
    variant?: TypographyProps["variant"];
}
