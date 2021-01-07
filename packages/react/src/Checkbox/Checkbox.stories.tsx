import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import type { CheckboxProps } from "./Checkbox.types";

export default {
  component: Checkbox,
  title: "Components/Checkbox",
} as Meta;

const Template : Story<CheckboxProps> = (props: CheckboxProps) => (
  <Checkbox {...props} />
);

export const Playground : Story<CheckboxProps> = Template.bind({});
Playground.args = {};
