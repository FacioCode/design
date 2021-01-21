import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { IconButton } from "./IconButton";
import type { IconButtonProps } from "./IconButton.types";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

export default {
  component: IconButton,
  title: "Components/IconButton",
} as Meta;

const Template : Story<IconButtonProps> = (props: IconButtonProps) => (
  <IconButton {...props} />
);

export const Playground : Story<IconButtonProps> = Template.bind({});
Playground.args = {
  children: <WhatsAppIcon />,
};

export const Disabled : Story<IconButtonProps> = Template.bind({});
Disabled.args = {
  ...Playground.args,
  disabled: true,
};

export const Small : Story<IconButtonProps> = Template.bind({});
Small.args = {
  ...Playground.args,
  size: "small",
};

export const Medium : Story<IconButtonProps> = Template.bind({});
Medium.args = {
  ...Playground.args,
  size: "medium",
};
