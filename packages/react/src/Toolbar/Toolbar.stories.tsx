import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Toolbar } from "./Toolbar";
import { ToolbarProps } from "./Toolbar.types";

export default {
  component: Toolbar,
  title: "Utilities/Toolbar",
} as Meta;

const Template : Story<ToolbarProps> = (props: ToolbarProps) => (
  <Toolbar {...props} />
);

export const Playground : Story<ToolbarProps> = Template.bind({});
Playground.args = {};
