import * as React from "react";
import { InputBase, InputBaseProps } from "./InputBase";
import { Meta, Story } from "@storybook/react";

export default {
  component: InputBase,
  title: "Components/Input Base",
} as Meta;

const Template : Story<InputBaseProps> = (args: InputBaseProps) => (
  <InputBase {...args} />
);

export const Playground : Story<InputBaseProps> = Template.bind({});
