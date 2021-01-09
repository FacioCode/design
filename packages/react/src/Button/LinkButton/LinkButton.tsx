import * as React from "react";
import type { LinkButtonProps } from "./LinkButton.types";
import { Button as MaterialButton } from "@material-ui/core";

type Render = (props: LinkButtonProps, ref: LinkButtonProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => <MaterialButton
  ref={ref}
  variant={"text"}
  {...props}
/>;

export const LinkButton = React.forwardRef<unknown, LinkButtonProps>(render);
LinkButton.displayName = "LinkButton";

export default LinkButton;
