import * as React from "react";
import { CurrencyFieldProps } from "@components/CurrencyField";

type ErrorPropHook = (props: CurrencyFieldProps) => CurrencyFieldProps["error"];

export const useErrorProp : ErrorPropHook = ({
  error, max, min, value,
}: CurrencyFieldProps) => React.useMemo(
  () => {
    if (max && (value > max)) {
      return true;
    }

    if (min && (value < min)) {
      return true;
    }

    return error;
  },
  [error, max, min, value],
);
