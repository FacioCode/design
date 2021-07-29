import * as React from "react";
import type { ListProps } from "./List.types";
import { List as MaterialList } from "@material-ui/core";

export type { ListProps } from "./List.types";

export const List = React.forwardRef<unknown, ListProps>(
  (props: ListProps, ref: ListProps["ref"]) => <MaterialList ref={ref} {...props} />,
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  List.displayName = "List";
}
