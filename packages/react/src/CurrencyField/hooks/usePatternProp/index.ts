import * as React from "react";
import { CurrencyFieldProps } from "@components/CurrencyField";

type PatternPropHook = (props: CurrencyFieldProps) => string;

export const usePatternProp : PatternPropHook = ({ inputMode }) => React.useMemo<string>(
  () => {
    if (inputMode === "decimal") {
      return "\\d+((.|,)\\d{1,2})?";
    }

    return "\\d+";
  },
  [inputMode],
);
