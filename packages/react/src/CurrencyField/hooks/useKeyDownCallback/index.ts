import * as React from "react";
import { CurrencyFieldProps } from "@components/CurrencyField";

type KeyDownCallback = (props: CurrencyFieldProps) => React.KeyboardEventHandler<HTMLInputElement>;

export const useKeyDownCallback : KeyDownCallback = ({ inputMode, onKeyDown }) => React.useCallback(
  (event) => {
    if (onKeyDown) {
      return onKeyDown;
    }

    const allowedKeys = [
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
      "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Enter", "Tab",
    ];

    if (typeof inputMode === "undefined" || inputMode === "decimal") {
      allowedKeys.push(".", ",");
    }

    if (allowedKeys.includes(event.key) || event.metaKey) {
      return true;
    }

    return event.preventDefault();
  },
  [inputMode, onKeyDown],
);