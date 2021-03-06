import * as React from "react";
import { BadgeProps } from "@components/Badge/Badge.types";
import { Badge as MaterialBadge } from "@material-ui/core";

type Render = (props: BadgeProps, ref: BadgeProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialBadge {...props} ref={ref} />
);

export const Badge = React.forwardRef<unknown, BadgeProps>(render);
Badge.displayName = "Badge";

export default Badge;
