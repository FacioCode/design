import * as React from "react";
import { FormGroup, FormGroupProps } from "@components/FormGroup";
import type { Meta, Story } from "@storybook/react";

export default {
  component: FormGroup,
  title: "Utilities/Form Group",
} as Meta;

const Template : Story<FormGroupProps> = (props: FormGroupProps) => (
  <FormGroup {...props} />
);

export const Playground : Story<FormGroupProps> = Template.bind({});
