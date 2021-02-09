import { PopoverProps as MaterialPopoverProps } from "@material-ui/core/Popover";

export type PopoverProps = Omit<MaterialPopoverProps, "css">;
