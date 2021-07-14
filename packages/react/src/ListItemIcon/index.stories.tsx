import * as React from "react";
import { ListItemIcon, ListItemIconProps } from ".";
import type { Meta, Story } from "@storybook/react";

import { ApproveIcon } from "@components/SvgIcon";
import { WarningIcon } from "@svg-icons/WarningIcon";

export default {
  component: ListItemIcon,
  title: "Components/List Item Icon",
} as Meta;

const Template : Story<ListItemIconProps> = (props: ListItemIconProps) => (
  <ListItemIcon {...props} />
);

export const Playground : Story<ListItemIconProps> = Template.bind({});
Playground.args = {
  children: <ApproveIcon />,
};

export const ErrorColor : Story<ListItemIconProps> = Template.bind({});
ErrorColor.args = {
  ...Playground.args,
  children: <WarningIcon />,
  color: "error",
};
