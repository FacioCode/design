import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { FormLabel } from "./FormLabel";
import type { Props } from "./FormLabel.types";

export default {
  component: FormLabel,
  title: "Components/Form Label",
} as Meta;

const Template : Story<Props> = (props: Props) => (
  <FormLabel {...props} />
);

export const Playground : Story<Props> = Template.bind({});
