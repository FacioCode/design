import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Paper } from "./Paper";
import type { Props } from "./Paper.types";

export default {
  component: Paper,
  title: "Components/Paper",
} as Meta;

const Template : Story<Props> = (props: Props) => <Paper {...props} />;

export const Playground : Story<Props> = Template.bind({});
