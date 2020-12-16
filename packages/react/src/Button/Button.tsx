import * as React from "react";
import { ButtonProps, ColorMapping, VariantMapping } from "./Button.types";
import { Button as MaterialButton } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./Button.styles";

type Render = (props: ButtonProps, ref: ButtonProps["ref"]) => JSX.Element;

const render: Render = (props, ref) => {
  const {
    className,
    color = "default",
    variant = "outlined",
    ...otherProps
  } = props;

  const colorMapping : ColorMapping = {
    brand: "primary",
    danger: "default",
    default: "default",
    success: "default",
    warning: "default",
  };

  const variantMapping : VariantMapping = {
    contained: "contained",
    link: "text",
    outlined: "outlined",
  };

  const { containedDanger, containedSuccess, containedWarning } = useStyles();

  const classNames = clsx({
    [containedDanger]: color === "danger" && variant === "contained",
    [containedSuccess]: color === "success" && variant === "contained",
    [containedWarning]: color === "warning" && variant === "contained",
    // eslint-disable-next-line sort-keys
    className,
  });

  return <MaterialButton
    className={classNames}
    color={colorMapping[color]}
    ref={ref}
    variant={variantMapping[variant]}
    {...otherProps}
  />;
};

export const Button = React.forwardRef<unknown, ButtonProps>(render);
Button.displayName = "Button";

export default Button;
