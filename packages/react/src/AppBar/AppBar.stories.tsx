import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { AppBar } from "./AppBar";
import { AppBarProps } from "./AppBar.types";
import { Toolbar } from "../Toolbar";

export default {
  component: AppBar,
  subcomponents: { Toolbar },
  title: "Components/App Bar",
} as Meta;

const Template : Story<AppBarProps> = (props: AppBarProps) => (
  <AppBar {...props} />
);

export const Playground : Story<AppBarProps> = Template.bind({});
Playground.args = {
  children: "Facio",
  position: "sticky",
};

export const WithToolbar : Story<AppBarProps> = Template.bind({});
WithToolbar.args = {
  children: <Toolbar>Facio</Toolbar>,
  position: "sticky",
};
