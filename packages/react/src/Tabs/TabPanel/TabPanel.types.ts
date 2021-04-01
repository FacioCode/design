import * as React from "react";
import { Omit } from "@material-ui/types";
import type { OverrideProps } from "@material-ui/core/OverridableComponent";

// eslint-disable-next-line @typescript-eslint/ban-types
export interface TabPanelTypeMap<P = {}, D extends React.ElementType = "div"> {
  classKey: "TabPanel",
  defaultComponent: D,
  props: P & {

    /**
     * @required
     * @type string
     */
    "aria-labelledby": string;

    /**
     * The content of the component.
     *
     * @required
     */
    children: React.ReactNode;

    /**
     * The component used for the root node. Either a `string` to use a DOM element or a component.
     *
     * @optional
     * @type element
     */
    component?: "div" | React.ElementType;

    /**
     * @example `<TabPanel hidden={true} />`
     * @required
     * @type number
     */
    hidden: boolean;

    /**
     * @required
     * @type string
     */
    id: string;

  };
}

export type TabPanelProps<
  D extends React.ElementType = TabPanelTypeMap["defaultComponent"],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = Omit<OverrideProps<TabPanelTypeMap<P, D>, D>, "css" | "role">;
