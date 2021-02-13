import type { OverrideProps } from "@material-ui/core/OverridableComponent";

// eslint-disable-next-line @typescript-eslint/ban-types
export interface CurrencyTypeMap<P = {}, D extends React.ElementType = "data"> {
  classKey: "Currency";
  defaultComponent: D;
  props: P & {

    /**
     * Currency amount is required.
     *
     * @example 100
     * @required
     * @type number
     */
    // eslint-disable-next-line no-magic-numbers
    children?: 0 | number | string;

    /**
     * The component used for the root node. Either a `string` to use a DOM element or a component.
     *
     * @default "data"
     * @optional
     * @type element
     */
    component?: "data" | React.ElementType;

    /**
     * Currency code is required for currency style.
     *
     * @example "BRL"
     * @required
     * @type string
     */
    code: "BRL" | string;

    /**
     * Defaults to current browser locale(s).
     *
     * @example "pt-BR"
     * @optional
     * @type string | string[]
     */
    locales?: "pt-BR" | string | string[];
  };
}

export type CurrencyProps<
  D extends React.ElementType = CurrencyTypeMap["defaultComponent"],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = Omit<OverrideProps<CurrencyTypeMap<P, D>, D>, "css">;
