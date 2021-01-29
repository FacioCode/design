import * as React from "react";
import { ContainerProps } from "./Container.types";
import { Container as MaterialContainer } from "@material-ui/core";

type Render = (props: ContainerProps, ref: ContainerProps["ref"]) => JSX.Element

const render : Render = (props, ref) => {
  const { children, ...otherProps } = props;


  return <MaterialContainer {...otherProps} ref={ref}>{children}</MaterialContainer>;
};

export const Container = React.forwardRef<unknown, ContainerProps>(render);
Container.displayName = "Container";

export default Container;
