import * as React from "react";

type Key = React.KeyboardEvent["key"];
type Keys = Array<Key>;
type KeysMap = Record<string, Keys>;

const allowedKeysMap : KeysMap = {
  arrows: ["ArrowLeft", "ArrowRight"],
  backspace: ["Backspace"],
  comma: [","],
  delete: ["Delete"],
  enter: ["Enter"],
  fullStop: ["."],
  hyphen: ["-"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  parens: ["(", ")"],
  space: [" "],
  tab: ["Tab"],
};

type KeyGroupName = keyof typeof allowedKeysMap;
type KeyGroups = Array<KeyGroupName>;

type HookArgs = {
  allowMetaKey?: boolean,
  allowedKeyGroups: KeyGroups,
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
};

export const useKeyDown = ({
  allowMetaKey,
  allowedKeyGroups,
  onKeyDown,
}: HookArgs) => React.useCallback(
  (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      return onKeyDown;
    }

    console.log(event.key);

    const allowedKeys : Keys = [];

    allowedKeyGroups.forEach((keyGroupName) => {
      allowedKeys.push(...allowedKeysMap[keyGroupName]);
    });

    if (allowedKeys.includes(event.key)) {
      return true;
    }

    if (allowMetaKey && event.metaKey) {
      return true;
    }

    return event.preventDefault();
  },
  [allowMetaKey, allowedKeyGroups, onKeyDown],
);
