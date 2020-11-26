import * as React from "react";
import { Card, CardProps } from "./Card";
import { Meta, Story } from "@storybook/react";
import { Typography } from "../Typography";

export default {
  component: Card,
  title: "Components/Card",
} as Meta;

const Template : Story<CardProps> = (args: CardProps) => (
  <Card {...args} />
);

export const Playground : Story<CardProps> = Template.bind({});

export const Info : Story<CardProps> = Template.bind({});
Info.args = {
  children: [
    <Typography key={"title"} variant={"subtitle1"}>Your registration is under review</Typography>,
    <Typography key={"body"} variant={"bodyText2"}>Soon, you will have access to the services available for your credit profile.</Typography>,
  ],
  color: "info",
};
