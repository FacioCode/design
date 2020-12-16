import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "./Button";
import type { ButtonProps } from "./Button.types";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template : Story<ButtonProps> = (props: ButtonProps) => (
  <Button {...props} />
);

export const Playground : Story<ButtonProps> = Template.bind({});
Playground.args = {
  children: "Button text",
};

export const ContainedBrandMedium : Story<ButtonProps> = Template.bind({});
ContainedBrandMedium.args = {
  ...Playground.args,
  color: "brand",
  size: "medium",
  variant: "contained",
};

export const ContainedDefaultMedium: Story<ButtonProps> = Template.bind({});
ContainedDefaultMedium.args = {
  ...Playground.args,
  size: "medium",
  variant: "contained",
};

export const ContainedBrandMediumFullWidth : Story<ButtonProps> = Template.bind({});
ContainedBrandMediumFullWidth.args = {
  ...ContainedBrandMedium.args,
  fullWidth: true,
};

export const OutlinedBrandMediumFullWidth : Story<ButtonProps> = Template.bind({});
OutlinedBrandMediumFullWidth.args = {
  ...Playground.args,
  color: "brand",
  fullWidth: true,
  size: "medium",
  variant: "outlined",
};

export const ContainedDefaultSmall : Story<ButtonProps> = Template.bind({});
ContainedDefaultSmall.args = {
  ...Playground.args,
  color: "default",
  size: "small",
  variant: "contained",
};

export const OutlinedDefaultSmall : Story<ButtonProps> = Template.bind({});
OutlinedDefaultSmall.args = {
  ...Playground.args,
  color: "default",
  size: "small",
  variant: "outlined",
};

export const LinkDefaultSmall : Story<ButtonProps> = Template.bind({});
LinkDefaultSmall.args = {
  ...Playground.args,
  color: "default",
  size: "small",
  variant: "link",
};

export const ContainedBrandSmall : Story<ButtonProps> = Template.bind({});
ContainedBrandSmall.args = {
  ...Playground.args,
  color: "brand",
  size: "small",
  variant: "contained",
};

export const ContainedWarningSmall : Story<ButtonProps> = Template.bind({});
ContainedWarningSmall.args = {
  ...Playground.args,
  color: "warning",
  size: "small",
  variant: "contained",
};

export const ContainedDangerSmall : Story<ButtonProps> = Template.bind({});
ContainedDangerSmall.args = {
  ...Playground.args,
  color: "danger",
  size: "small",
  variant: "contained",
};

export const ContainedSuccessSmall : Story<ButtonProps> = Template.bind({});
ContainedSuccessSmall.args = {
  ...Playground.args,
  color: "success",
  size: "small",
  variant: "contained",
};
