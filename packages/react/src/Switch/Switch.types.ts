import type { SwitchProps as MaterialSwitchProps } from "@material-ui/core";

export type SwitchProps = Omit<MaterialSwitchProps, "color" | "css" | "disableRipple" | "size">;
