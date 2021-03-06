import type { ChipProps as MaterialChipProps } from "@material-ui/core/Chip";

type OmittedProps = |
  "color" |
  "css" |
  "disableRipple" |
  "disableTouchRipple" |
  "focusRipple" |
  "size";
export type ChipProps = Omit<MaterialChipProps, OmittedProps>;
