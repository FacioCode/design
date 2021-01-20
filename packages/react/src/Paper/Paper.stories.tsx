import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Paper } from "./Paper";
import type { PaperProps } from "./Paper.types";

export default {
  component: Paper,
  title: "Components/Paper",
} as Meta;

const Template : Story<PaperProps> = (props: PaperProps) => <Paper {...props} />;

export const Playground : Story<PaperProps> = Template.bind({});
Playground.args = {
  children: "Paper content",
};

export const Rounded : Story<PaperProps> = Template.bind({});
Rounded.args = {
  children: "Rounded paper content",
  square: false,
};
