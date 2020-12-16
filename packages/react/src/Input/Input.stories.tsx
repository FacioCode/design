import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Input } from "./Input";
import type { InputProps } from "./Input.types";

export default {
  component: Input,
  title: "Utilities/Input",
} as Meta;

const Template : Story<InputProps> = (props: InputProps) => <Input {...props} />;

export const Playground : Story<InputProps> = Template.bind({});
Playground.args = {
  value: "Input value",
};

export const Underline : Story<InputProps> = Template.bind({});
Underline.args = {
  ...Playground.args,
  disableUnderline: false,
};
