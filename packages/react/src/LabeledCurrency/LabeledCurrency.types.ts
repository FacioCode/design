import { CurrencyProps } from "@components/Currency";
import { LabeledItemProps } from "@components/LabeledItem";

export interface LabeledCurrencyProps extends LabeledItemProps {

  /**
   * @required
   */
  CurrencyProps: CurrencyProps
}
