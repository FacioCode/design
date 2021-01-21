import * as React from "react";
import { ColorMapping, LinkProps, MaterialLinkColor } from "./Link.types";
import { Link as MaterialLink } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./Link.styles";

type Render = (props: LinkProps, ref: LinkProps["ref"]) => JSX.Element;
const render : Render = (props, ref) => {
  const { className, color = "default", ...otherProps } = props;

  const colorMapping : ColorMapping = {
    default: "inherit",
    inherit: "inherit",
    initial: "initial",
  };
  let mappedColor : MaterialLinkColor = "inherit";

  if (typeof colorMapping[color] !== "undefined") {
    mappedColor = colorMapping[color];
  }

  const { colorDefault } = useStyles();

  const classNames = clsx({
    [colorDefault]: color === "default",
    // eslint-disable-next-line sort-keys
    className,
  });

  return (
    <MaterialLink {...otherProps} className={classNames} color={mappedColor} ref={ref} />
  );
};

export const Link = React.forwardRef<unknown, LinkProps>(render);
Link.displayName = "Link";

export default Link;
