import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { FormLabel } from "./FormLabel";
import type { FormLabelProps } from "./FormLabel.types";

export default {
  component: FormLabel,
  title: "Components/Form Label",
} as Meta;

const Template : Story<FormLabelProps> = (props: FormLabelProps) => (
  <FormLabel {...props} />
);

/**
 * The font size of the label for the web is different from Flutter.
 */
export const Playground : Story<FormLabelProps> = Template.bind({});
Playground.args = {
  children: "Nome social",
};

export const Disabled : Story<FormLabelProps> = Template.bind({});
Disabled.args = {
  ...Playground.args,
  disabled: true,
};

export const Error : Story<FormLabelProps> = Template.bind({});
Error.args = {
  ...Playground.args,
  error: true,
};

export const Focused : Story<FormLabelProps> = Template.bind({});
Focused.args = {
  ...Playground.args,
  focused: true,
};
