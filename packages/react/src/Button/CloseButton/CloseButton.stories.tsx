import * as React from "react";
import { CloseButton, CloseButtonProps } from "@components/Button";
import type { Meta } from "@storybook/react";

export default {
  component: CloseButton,
  title: "Components/Buttons/Close Button",
} as Meta;

const Template = (props: CloseButtonProps) => (
  <CloseButton onClick={props.onClick} title={props.title} />
);

export const Playground = Template.bind({});
Playground.args = {
  title: "Fechar",
};
