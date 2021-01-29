import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { OutlinedButton } from "./OutlinedButton";
import type { OutlinedButtonProps } from "./OutlinedButton.types";

export default {
  component: OutlinedButton,
  title: "Components/Buttons/Outlined Button",
} as Meta;

const Template : Story<OutlinedButtonProps> = (props: OutlinedButtonProps) => (
  <OutlinedButton {...props} />
);

export const Playground : Story<OutlinedButtonProps> = Template.bind({});
Playground.args = {
  children: "Outlined button",
};

export const MediumFullWidth : Story<OutlinedButtonProps> = Template.bind({});
MediumFullWidth.args = {
  ...Playground.args,
  fullWidth: true,
  size: "medium",
};

export const Small : Story<OutlinedButtonProps> = Template.bind({});
Small.args = {
  ...Playground.args,
  size: "small",
};

export const SmallDisabled : Story<OutlinedButtonProps> = Template.bind({});
SmallDisabled.args = {
  ...Small.args,
  disabled: true,
};
