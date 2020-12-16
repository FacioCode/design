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

export const Playground : Story<FormLabelProps> = Template.bind({});
Playground.args = {
  children: "Form label text",
};
