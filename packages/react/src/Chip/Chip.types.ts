import type { ChipProps as MaterialChipProps } from "@material-ui/core/Chip";

type OmittedProps = "css" |
  "disableRipple" |
  "disableTouchRipple" |
  "focusRipple" |
  "size" |
  "variant";
export type ChipProps = Omit<MaterialChipProps, OmittedProps>;
