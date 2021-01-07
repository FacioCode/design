import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Divider } from "./Divider";
import type { DividerProps } from "./Divider.types";

export default {
  component: Divider,
  title: `Components/${Divider.displayName}`,
} as Meta;

const Template : Story<DividerProps> = (props: DividerProps) => (
  <Divider {...props} />
);

export const Playground : Story<DividerProps> = Template.bind({});
Playground.args = {

};
