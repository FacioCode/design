import * as React from "react";
import type { CurrencyProps } from "./Currency.types";

type Render = (props: CurrencyProps, ref: CurrencyProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => {
  const {
    children,
    component: Component = "data",
    code,
    locales,
    ...otherProps
  } = props;
  const value = Number(children);
  const formatter = Intl.NumberFormat(locales, { currency: code, style: "currency" });

  return (
    <Component ref={ref} value={value} {...otherProps}>
      {formatter.format(value)}
    </Component>
  );
};

export const Currency = React.forwardRef(render);

Currency.displayName = "Currency";

export default Currency;
