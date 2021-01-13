import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { ContainedButton } from "./ContainedButton";
import type { ContainedButtonProps } from "./ContainedButton.types";

export default {
  component: ContainedButton,
  title: "Components/Buttons/Contained Button",
} as Meta;

const Template : Story<ContainedButtonProps> = (props: ContainedButtonProps) => (
  <ContainedButton {...props} />
);

export const Playground : Story<ContainedButtonProps> = Template.bind({});
Playground.args = {
  children: "Contained button",
};

export const BrandMedium : Story<ContainedButtonProps> = Template.bind({});
BrandMedium.args = {
  ...Playground.args,
  color: "brand",
  size: "medium",
};

export const DisabledBrandMedium : Story<ContainedButtonProps> = Template.bind({});
DisabledBrandMedium.args = {
  ...BrandMedium.args,
  disabled: true,
};

export const DefaultMedium: Story<ContainedButtonProps> = Template.bind({});
DefaultMedium.args = {
  ...Playground.args,
  size: "medium",
};

export const BrandMediumFullWidth : Story<ContainedButtonProps> = Template.bind({});
BrandMediumFullWidth.args = {
  ...BrandMedium.args,
  fullWidth: true,
};

export const ContainedDefaultSmall : Story<ContainedButtonProps> = Template.bind({});
ContainedDefaultSmall.args = {
  ...Playground.args,
  color: "default",
  size: "small",
};

export const BrandSmall : Story<ContainedButtonProps> = Template.bind({});
BrandSmall.args = {
  ...Playground.args,
  color: "brand",
  size: "small",
};

export const WarningSmall : Story<ContainedButtonProps> = Template.bind({});
WarningSmall.args = {
  ...Playground.args,
  color: "warning",
  size: "small",
};

export const DangerSmall : Story<ContainedButtonProps> = Template.bind({});
DangerSmall.args = {
  ...Playground.args,
  color: "danger",
  size: "small",
};
