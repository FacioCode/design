import * as React from "react";
import type { IconButtonProps } from "./IconButton.types";
import { IconButton as MaterialIconButton } from "@material-ui/core";

type Render = (props: IconButtonProps, ref: IconButtonProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialIconButton {...props} ref={ref} />
);

export const IconButton = React.forwardRef<unknown, IconButtonProps>(render);
IconButton.displayName = "IconButton";

export default IconButton;
