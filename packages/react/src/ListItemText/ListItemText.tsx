import * as React from "react";
import type { ListItemTextProps } from "./ListItemText.types";
import { ListItemText as MaterialListItemText } from "@material-ui/core";

export type { ListItemTextProps } from "./ListItemText.types";

export const ListItemText = React.forwardRef<unknown, ListItemTextProps>(
  (props: ListItemTextProps, ref: ListItemTextProps["ref"]) => (
    <MaterialListItemText {...props} ref={ref} />
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  ListItemText.displayName = "ListItemText";
}
