import * as React from "react";
import type { ChipProps } from "./Chip.types";
import { Chip as MaterialChip } from "@material-ui/core";

type Render = (props: ChipProps, ref: ChipProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => <MaterialChip {...props} ref={ref} />;

export const Chip = React.forwardRef<unknown, ChipProps>(render);
Chip.displayName = "Chip";

export default Chip;
