import type { SwitchProps as MaterialSwitchProps } from "@material-ui/core";
import { Omit } from "@material-ui/types";

export type SwitchProps = Omit<MaterialSwitchProps, "color" | "css" | "disableRipple" | "size">;
