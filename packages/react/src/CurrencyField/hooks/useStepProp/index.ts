import * as React from "react";
import { CurrencyFieldProps } from "@components/CurrencyField";

export const useStepProp = ({ inputMode, step: stepProp }: CurrencyFieldProps) => {
  const step = React.useMemo(() => {
    const defaultDecimalStepProp = 0.01;
    const defaultNumericStepProp = 1;

    if (stepProp) {
      return stepProp;
    }
    if (inputMode === "numeric") {
      return defaultNumericStepProp;
    }

    return defaultDecimalStepProp;
  },
  [inputMode, stepProp]);

  return step;
};
