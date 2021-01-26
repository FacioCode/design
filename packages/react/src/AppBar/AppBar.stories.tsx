import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { AppBar } from "./AppBar";
import { AppBarProps } from "./AppBar.types";

export default {
  component: AppBar,
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
