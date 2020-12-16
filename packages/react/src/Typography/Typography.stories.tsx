import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography } from "./Typography";
import type { TypographyProps } from "./Typography.types";

export default {
  component: Typography,
  title: "Components/Typography",
} as Meta;

const Template : Story<TypographyProps> = (props: TypographyProps) => (
  <Typography {...props} />
);

export const Playground : Story<TypographyProps> = Template.bind({});
Playground.args = {
  children: "Typography content",
};

export const Headline1 : Story<TypographyProps> = Template.bind({});
Headline1.args = {
  children: "Headline 1",
  variant: "headline1",
};

export const Headline2 : Story<TypographyProps> = Template.bind({});
Headline2.args = {
  children: "Headline 2",
  variant: "headline2",
};

export const Headline3 : Story<TypographyProps> = Template.bind({});
Headline3.args = {
  children: "Headline 3",
  variant: "headline3",
};

export const Headline4 : Story<TypographyProps> = Template.bind({});
Headline4.args = {
  children: "Headline 4",
  variant: "headline4",
};

export const Headline5 : Story<TypographyProps> = Template.bind({});
Headline5.args = {
  children: "Headline 5",
  variant: "headline5",
};

export const Subtitle1 : Story<TypographyProps> = Template.bind({});
Subtitle1.args = {
  children: "Subtitle1",
  variant: "subtitle1",
};

export const Subtitle2 : Story<TypographyProps> = Template.bind({});
Subtitle2.args = {
  children: "Subtitle2",
  variant: "subtitle2",
};

export const BodyText1 : Story<TypographyProps> = Template.bind({});
BodyText1.args = {
  children: "Body text 1",
  variant: "bodyText1",
};

export const BodyText2 : Story<TypographyProps> = Template.bind({});
BodyText2.args = {
  children: "Body text 2",
  variant: "bodyText2",
};

export const Button : Story<TypographyProps> = Template.bind({});
Button.args = {
  children: "Button",
  variant: "button",
};

export const Caption : Story<TypographyProps> = Template.bind({});
Caption.args = {
  children: "Caption",
  variant: "caption",
};
