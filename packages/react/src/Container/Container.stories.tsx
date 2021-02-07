import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Container } from "./Container";
import { ContainerProps } from "./Container.types";

export default {
  component: Container,
  title: "Utilities/Container",
} as Meta;

const Template : Story<ContainerProps> = (props: ContainerProps) => (
  <Container {...props}>{props.children}</Container>
);

export const Playground : Story<ContainerProps> = Template.bind({});
Playground.args = {
  children: "Container content",
};

export const TransparentColor : Story<ContainerProps> = Template.bind({});
TransparentColor.args = {
  ...Playground.args,
  color: "transparent",
};

export const GreyColor : Story<ContainerProps> = Template.bind({});
GreyColor.args = {
  ...Playground.args,
  color: "grey",
};
