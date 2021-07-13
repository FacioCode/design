import * as React from "react";
import type { ListItemIconProps } from "./ListItemIcon.types";
import { ListItemIcon as MaterialListItemIcon } from "@material-ui/core";

export type { ListItemIconProps } from "./ListItemIcon.types";

export const ListItemIcon = React.forwardRef<unknown, ListItemIconProps>(
  (props: ListItemIconProps, ref: ListItemIconProps["ref"]) => (
    <MaterialListItemIcon {...props} ref={ref} />
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  ListItemIcon.displayName = "ListItemIcon";
}
