import * as React from "react";
import type { CurrencyProps } from "./Currency.types";
import clsx from "clsx";
import useStyles from "./Currency.styles";

export const Currency = React.forwardRef(
  (props: CurrencyProps, ref: CurrencyProps["ref"]) => {
    const {
      className,
      component: Component = "data",
      code = "BRL",
      locales,
      value,
      ...otherProps
    } = props;

    const { root } = useStyles();

    if (!value) {
      return null;
    }

    const formattedValue = Number(value);
    const formatter = Intl.NumberFormat(locales, { currency: code, style: "currency" });

    // eslint-disable-next-line sort-keys
    const classNames = clsx(root, className);

    return (
      <Component className={classNames} ref={ref} value={formattedValue} {...otherProps}>
        {formatter.format(formattedValue)}
      </Component>
    );
  },
);
Currency.displayName = "Currency";

export default Currency;
