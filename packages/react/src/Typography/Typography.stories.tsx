import * as React from "react";
import { Meta, Story } from "@storybook/react";
import type { Props } from "./Typography.types";
import { Typography } from "./Typography";

export default {
  component: Typography,
  title: "Components/Typography",
} as Meta;

const Template : Story<Props> = (props: Props) => (
  <Typography {...props} />
);

export const Playground : Story<Props> = Template.bind({});

export const Headline1 : Story<Props> = Template.bind({});
Headline1.args = {
  children: "h1. Headline",
  variant: "headline1",
};
