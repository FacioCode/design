import type { ChipProps as MaterialChipProps } from "@material-ui/core/Chip";
import { Omit } from "@material-ui/types";

type OmittedProps = |
  "color" |
  "css" |
  "disableRipple" |
  "disableTouchRipple" |
  "focusRipple" |
  "size";
export type ChipProps = Omit<MaterialChipProps, OmittedProps>;
