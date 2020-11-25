import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";

export default {
  component: Typography,
  title: "Components/Typography",
} as Meta;

const Template : Story<TypographyProps> = (args: TypographyProps) => (
  <Typography {...args} />
);

export const Playground : Story<TypographyProps> = Template.bind({});

export const Headline1 : Story<TypographyProps> = Template.bind({});
Headline1.args = {
  children: "h1. Headline",
  variant: "headline1",
};
