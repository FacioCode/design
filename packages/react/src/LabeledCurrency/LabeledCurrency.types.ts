import { CurrencyProps } from "@components/Currency";
import { LabeledItemProps } from "@components/LabeledItem";

export interface LabeledCurrencyProps extends Partial<LabeledItemProps> {
  CurrencyProps?: CurrencyProps
}
