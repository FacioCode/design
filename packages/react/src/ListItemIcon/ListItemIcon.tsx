import * as React from "react";

import type { ListItemIconProps } from "./ListItemIcon.types";
import { ListItemIcon as MaterialListItemIcon } from "@material-ui/core";

import clsx from "clsx";
import { useStyles } from "./ListItemIcon.styles";

export type { ListItemIconProps } from "./ListItemIcon.types";

export const ListItemIcon = React.forwardRef<unknown, ListItemIconProps>(
  (props: ListItemIconProps, ref: ListItemIconProps["ref"]) => {
    const {
      className,
      color,
      ...otherProps
    } = props;

    const { colorError } = useStyles();

    const classNames = clsx({
      [colorError]: color === "error",
      // eslint-disable-next-line sort-keys
      className,
    });

    return (
      <MaterialListItemIcon
        {...otherProps}
        className={classNames}
        ref={ref}
      />
    );
  },
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  ListItemIcon.displayName = "ListItemIcon";
}
