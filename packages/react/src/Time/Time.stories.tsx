import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Time } from "./Time";
import { TimeProps } from "./Time.types";

export default {
  component: Time,
  title: "Components/Time",
} as Meta;

const Template : Story<TimeProps> = (props: TimeProps) => (
  <Time {...props}>{props.children}</Time>
);

export const Playground : Story<TimeProps> = Template.bind({});
Playground.args = {
  children: "2021-01-26T11:58:08-03:00",
};

export const ShortDate : Story<TimeProps> = Template.bind({});
ShortDate.args = {
  ...Playground.args,
  dateStyle: "short",
};

export const LongDate : Story<TimeProps> = Template.bind({});
LongDate.args = {
  ...Playground.args,
  dateStyle: "long",
};
