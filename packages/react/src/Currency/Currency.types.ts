import { Omit } from "@material-ui/types";
import type { OverrideProps } from "@material-ui/core/OverridableComponent";

type CurrencyClassKey = "root";
type CurrencyValue = number | string | null;

// eslint-disable-next-line @typescript-eslint/ban-types
export interface CurrencyTypeMap<P = {}, D extends React.ElementType = "data"> {
  classKey: CurrencyClassKey;
  defaultComponent: D;
  props: P & {

    /**
     * Currency code for currency style. Will be BRL (Brazilian Real) by default.
     *
     * @default "BRL"
     * @example "BRL"
     * @optional
     * @type string
     */
    code?: "BRL" | string;

    /**
     * The component used for the root node. Either a `string` to use a DOM element or a component.
     *
     * @default "data"
     * @optional
     * @type element
     */
    component?: "data" | React.ElementType;

    /**
     * Defaults to current browser locale(s).
     *
     * @example "pt-BR"
     * @optional
     * @type string | string[]
     */
    locales?: "pt-BR" | string | string[];

    /**
     * Controls whether the Currency is hidden when `value` is zero.
     *
     * @default false
     * @type bool
     */
    showZero?: boolean;

    /**
     * Currency amount.
     *
     * @example 100
     * @required
     * @since 10.3.0
     * @type number
     */
    value?: CurrencyValue
  }
}

export type CurrencyProps<
  D extends React.ElementType = CurrencyTypeMap["defaultComponent"],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
  > = Omit<OverrideProps<CurrencyTypeMap<P, D>, D>, "children" | "css">;

