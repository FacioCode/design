import * as React from "react";
import { Currency } from "@components/Currency";
import type { LabeledCurrencyProps } from "./LabeledCurrency.types";
import { LabeledItem } from "@components/LabeledItem";

export type { LabeledCurrencyProps } from "./LabeledCurrency.types";

/**
 * @since 10.2.0
 */
export const LabeledCurrency = React.forwardRef<unknown, LabeledCurrencyProps>(
  (props: LabeledCurrencyProps, ref: LabeledCurrencyProps["ref"]) => {
    const {
      CurrencyProps,
      label,
      ...otherProps
    } = props;

    return <LabeledItem
      label={label}
      ref={ref}
      {...otherProps}>
      <Currency {...CurrencyProps} />
    </LabeledItem>;
  },
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  LabeledCurrency.displayName = "LabeledCurrency";
}
