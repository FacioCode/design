import type { OverrideProps } from "@material-ui/core/OverridableComponent";

type CurrencyClassKey = "root";
type CurrencyValue = number | string | null;

// eslint-disable-next-line @typescript-eslint/ban-types
export interface CurrencyTypeMap<P = {}, D extends React.ElementType = "data"> {
  classKey: CurrencyClassKey;
  defaultComponent: D;
  props: P & {

    /**
     * Currency amount.
     *
     * @deprecated `children` property is deprecated since 10.3.0 and will be removed at 11.x.
     * Please use `value` property instead.
     *
     * @alias value
     * @example <CurrencyValue code={"BRL"} value={100} />
     * @required
     * @type number
     */
    children?: CurrencyValue

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
  > = OverrideProps<CurrencyTypeMap<P, D>, D>;

