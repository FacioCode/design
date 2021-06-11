import * as React from "react";
import { CurrencyFieldProps } from "@components/CurrencyField";
import { useKeyDown } from "@hooks/useKeyDown";

type KeyDownCallback = (props: CurrencyFieldProps) => React.KeyboardEventHandler<HTMLInputElement>;

export const useKeyDownCallback : KeyDownCallback = ({ inputMode, onKeyDown }) => {
  const allowedKeyGroups = [
    "numbers",
    "arrows",
    "backspace",
    "delete",
    "enter",
    "tab",
  ];

  if (typeof inputMode === "undefined" || inputMode === "decimal") {
    allowedKeyGroups.push("comma", "fullStop");
  }

  return useKeyDown({
    allowMetaKey: true,
    allowedKeyGroups,
    onKeyDown,
  });
};
