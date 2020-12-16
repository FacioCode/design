import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { InputBase } from "./InputBase";
import { InputBaseProps } from "./InputBase.types";

export default {
  component: InputBase,
  title: "Utilities/Input Base",
} as Meta;

const Template : Story<InputBaseProps> = (props: InputBaseProps) => (
  <InputBase {...props} />
);

export const Playground : Story<InputBaseProps> = Template.bind({});
Playground.args = {
  value: "Input value",
};
