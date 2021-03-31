import * as React from "react";
import type { CurrencyProps } from "./Currency.types";
import clsx from "clsx";
import useStyles from "./Currency.styles";

type Render = (props: CurrencyProps, ref: CurrencyProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    className,
    children,
    component: Component = "data",
    code = "BRL",
    locales,
    value,
    ...otherProps
  } = props;

  if (!value) {
    return null;
  }

  const formattedValue = Number(value) || Number(children);
  const formatter = Intl.NumberFormat(locales, { currency: code, style: "currency" });

  const { root } = useStyles();

  // eslint-disable-next-line sort-keys
  const classNames = clsx(root, className);

  return (
    <Component className={classNames} ref={ref} value={formattedValue} {...otherProps}>
      {formatter.format(formattedValue)}
    </Component>
  );
};

export const Currency = React.forwardRef(render);
Currency.displayName = "Currency";

export default Currency;
