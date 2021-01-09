import * as React from "react";
import type { ColorMapping, ContainedButtonProps } from "./ContainedButton.types";
import { Button as MaterialButton } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./ContainedButton.styles";

type Render = (props: ContainedButtonProps, ref: ContainedButtonProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    className,
    color = "default",
    ...otherProps
  } = props;

  const colorMapping : ColorMapping = {
    brand: "primary",
    danger: "default",
    default: "default",
    warning: "default",
  };

  const { containedDanger, containedWarning } = useStyles();

  const classNames = clsx({
    [containedDanger]: color === "danger",
    [containedWarning]: color === "warning",
    // eslint-disable-next-line sort-keys
    className,
  });

  return <MaterialButton
    className={classNames}
    color={colorMapping[color]}
    ref={ref}
    variant={"contained"}
    {...otherProps}
  />;
};

export const ContainedButton = React.forwardRef<unknown, ContainedButtonProps>(render);
ContainedButton.displayName = "ContainedButton";

export default ContainedButton;
