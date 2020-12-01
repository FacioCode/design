import * as React from "react";
import { Paper, PaperProps } from "./Paper";
import { Meta, Story } from "@storybook/react";

export default {
  component: Paper,
  title: "Components/Paper",
} as Meta;

const Template : Story<PaperProps> = (args: PaperProps) => <Paper {...args} />;

export const Playground : Story<PaperProps> = Template.bind({});
