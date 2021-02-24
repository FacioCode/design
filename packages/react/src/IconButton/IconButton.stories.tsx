import * as React from "react";
import { IconButton, IconButtonProps } from "@components/IconButton";
import { Meta, Story } from "@storybook/react";
import { WhatsAppIcon } from "@svg-icons/WhatsAppIcon";

export default {
  component: IconButton,
  title: "Components/Icon Button",
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
