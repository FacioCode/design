import * as React from "react";
import { FormLabel, FormLabelProps } from "./FormLabel";
import { Meta, Story } from "@storybook/react";

export default {
  component: FormLabel,
  title: "Components/Form Label",
} as Meta;

const Template : Story<FormLabelProps> = (args: FormLabelProps) => (
  <FormLabel {...args} />
);

export const Playground : Story<FormLabelProps> = Template.bind({});
