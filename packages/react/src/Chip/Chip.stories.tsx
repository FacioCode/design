import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Chip } from "./Chip";
import type { ChipProps } from "./Chip.types";

export default {
  component: Chip,
  title: "Components/Chip",
} as Meta;

const Template : Story<ChipProps> = (props: ChipProps) => <Chip {...props} />;

export const Playground : Story<ChipProps> = Template.bind({});
Playground.args = {
  label: "Chip label text",
};
