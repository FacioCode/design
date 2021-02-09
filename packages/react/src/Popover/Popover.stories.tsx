import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { OutlinedButton } from "../Button";
import { Paper } from "../Paper";
import { Popover } from "./Popover";
import { PopoverProps } from "./Popover.types";

export default {
  component: Popover,
  title: "Components/Popover",
} as Meta;

const Template : Story<PopoverProps> = (props: PopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <OutlinedButton
        aria-describedby={props.id}
        onClick={handleClick}
      >
        Open Popover
      </OutlinedButton>
      <Popover
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        {props.children}
      </Popover>
    </>
  );
};

export const Playground : Story<PopoverProps> = Template.bind({});
Playground.args = {
  anchorOrigin: {
    horizontal: "left",
    vertical: "bottom",
  },
  children: <Paper>Popover content</Paper>,
  id: "popover-playground",
};
