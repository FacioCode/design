import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { InputLabel } from "./InputLabel";
import { InputLabelProps } from "./InputLabel.types";

export default {
  component: InputLabel,
  title: "Utilities/Input Label",
} as Meta;

const Template : Story<InputLabelProps> = (props: InputLabelProps) => (
  <InputLabel {...props} />
);

export const Playground : Story<InputLabelProps> = Template.bind({});
Playground.args = {
  children: "Nome social",
};
