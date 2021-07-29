import * as React from "react";
import type { ListSubheaderProps } from "./ListSubheader.types";
import { ListSubheader as MaterialListSubheader } from "@material-ui/core";

export type { ListSubheaderProps } from "./ListSubheader.types";

export const ListSubheader = React.forwardRef<unknown, ListSubheaderProps>(
  (props: ListSubheaderProps, ref: ListSubheaderProps["ref"]) => (
    <MaterialListSubheader {...props} ref={ref} />
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  ListSubheader.displayName = "ListSubheader";
}
