import * as React from "react";
import { ContainerProps } from "./Container.types";
import { Container as MaterialContainer } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./Container.styles";

type Render = (props: ContainerProps, ref: ContainerProps["ref"]) => JSX.Element

const render : Render = (props, ref) => {
  const { children, className, color, ...otherProps } = props;

  const { colorGrey } = useStyles();

  const classNames = clsx({
    [colorGrey]: color === "grey",
    // eslint-disable-next-line sort-keys
    className,
  });

  return <MaterialContainer
    {...otherProps}
    className={classNames}
    ref={ref}>
    {children}
  </MaterialContainer>;
};

export const Container = React.forwardRef<unknown, ContainerProps>(render);
Container.displayName = "Container";

export default Container;
