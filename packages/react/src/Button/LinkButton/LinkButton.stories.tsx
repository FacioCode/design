import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { LinkButton } from "./LinkButton";
import { LinkButtonProps } from "./LinkButton.types";

export default {
  component: LinkButton,
  title: "Components/Buttons/Link Button",
} as Meta;

const Template : Story<LinkButtonProps> = (props: LinkButtonProps) => (
  <LinkButton {...props} />
);

export const Playground : Story<LinkButtonProps> = Template.bind({});
Playground.args = {
  children: "Link button",
};

export const Small : Story<LinkButtonProps> = Template.bind({});
Small.args = {
  ...Playground.args,
  size: "small",
};

export const SmallDisabled : Story<LinkButtonProps> = Template.bind({});
SmallDisabled.args = {
  ...Small.args,
  disabled: true,
};

export const Medium : Story<LinkButtonProps> = Template.bind({});
Medium.args = {
  ...Playground.args,
  size: "medium",
};

export const MediumFullWidth : Story<LinkButtonProps> = Template.bind({});
MediumFullWidth.args = {
  ...Playground.args,
  fullWidth: true,
  size: "medium",
};
