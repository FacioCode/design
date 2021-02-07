import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardProps } from "./Card.types";

export default {
  component: Card,
  subcomponents: { CardContent },
  title: "Components/Card",
} as Meta;

const Template : Story<CardProps> = ({ children, ...otherProps }: CardProps) => (
  <Card {...otherProps}>
    <CardContent>{children}</CardContent>
  </Card>
);

export const Playground : Story<CardProps> = Template.bind({});
Playground.args = {
  children: "Card children",
};

export const Outlined : Story<CardProps> = Template.bind({});
Outlined.args = {
  ...Playground.args,
  outlined: true,
};
