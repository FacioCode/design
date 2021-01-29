import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Container } from "./Container";
import { ContainerProps } from "./Container.types";

export default {
  component: Container,
  title: "Components/Container",
} as Meta;

const Template : Story<ContainerProps> = (props: ContainerProps) => (
  <Container {...props}>{props.children}</Container>
);

export const Playground : Story<ContainerProps> = Template.bind({});
Playground.args = {};
