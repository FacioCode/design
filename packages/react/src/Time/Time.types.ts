import type { OverrideProps } from "@material-ui/core/OverridableComponent";

// eslint-disable-next-line @typescript-eslint/ban-types
export interface TimeTypeMap<P = {}, D extends React.ElementType = "time"> {
  classKey: "FacioTime";
  defaultComponent: D;
  props: P & {

    /**
     * Time is required.
     *
     * @optional
     * @type number | string
     */
    children?: number | string | null;

    /**
     * The component used for the root node. Either a `string` to use a DOM element or a component.
     *
     * @default "time"
     * @optional
     * @type element
     */
    component?: "time" | React.ElementType;

    /**
     * @optional
     * @type "full" | "long" | "medium" | "short"
     */
    dateStyle?: "full" | "long" | "medium" | "short";

    /**
     * Defaults to current browser locale(s).
     *
     * @example "pt-BR"
     * @optional
     * @type string | string[]
     */
    locales?: "pt-BR" | string | string[];

    /**
     * @optional
     * @type "full" | "long" | "medium" | "short"
     */
    timeStyle?: "full" | "long" | "medium" | "short";

  };
}

export type TimeProps<
  D extends React.ElementType = TimeTypeMap["defaultComponent"],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = Omit<OverrideProps<TimeTypeMap<P, D>, D>, "css">;
