import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "./Button";
import type { Props } from "./Button.types";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template : Story<Props> = (args: Props) => <Button {...args} />;

export const Playground : Story<Props> = Template.bind({});

export const TextLink : Story<Props> = Template.bind({});
TextLink.args = {
  children: "Log out",
};
