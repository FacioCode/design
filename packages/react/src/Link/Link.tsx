import * as React from "react";
import { LinkProps } from "./Link.types";
import { Link as MaterialLink } from "@material-ui/core";

type Render = (props: LinkProps, ref: LinkProps["ref"]) => JSX.Element;
const render : Render = (props, ref) => <MaterialLink {...props} ref={ref} />;

export const Link = React.forwardRef<unknown, LinkProps>(render);
Link.displayName = "Link";

export default Link;
