import * as React from "react";
import { CurrencyFieldProps } from "@components/CurrencyField";

type ScrollCallback = (props: CurrencyFieldProps) => CurrencyFieldProps["onScroll"];

export const useScrollCallback : ScrollCallback = ({ onScroll }) => React.useCallback(
  (event) => {
    if (onScroll) {
      return onScroll;
    }

    return event.preventDefault();
  },
  [onScroll],
);
