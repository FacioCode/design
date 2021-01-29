import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { OutlinedButton } from "..";

export default {
  component: ButtonGroup,
  subcomponents: { OutlinedButton },
  title: "Components/Button Group",
} as Meta;

const Template : Story<ButtonGroupProps> = (props: ButtonGroupProps) => (
  <ButtonGroup {...props} />
);

export const Playground : Story<ButtonGroupProps> = Template.bind({});
Playground.args = {
  children: [
    <OutlinedButton key={"approve"}>Aprovar</OutlinedButton>,
    <OutlinedButton key={"reject"}>Reprovar</OutlinedButton>,
  ],
};
