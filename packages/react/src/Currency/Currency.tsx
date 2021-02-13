import * as React from "react";
import type { CurrencyProps } from "./Currency.types";
import clsx from "clsx";
import useStyles from "./Currency.styles";

type Render = (props: CurrencyProps, ref: CurrencyProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    children,
    className,
    component: Component = "data",
    code,
    locales,
    ...otherProps
  } = props;

  if (!children) {
    return null;
  }

  const value = Number(children);
  const formatter = Intl.NumberFormat(locales, { currency: code, style: "currency" });

  const { root } = useStyles();

  // eslint-disable-next-line sort-keys
  const classNames = clsx(root, className);

  return (
    <Component className={classNames} ref={ref} value={value} {...otherProps}>
      {formatter.format(value)}
    </Component>
  );
};

export const Currency = React.forwardRef(render);
Currency.displayName = "Currency";

export default Currency;
