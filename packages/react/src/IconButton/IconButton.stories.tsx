import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { IconButton } from "./IconButton";
import type { IconButtonProps } from "./IconButton.types";

export default {
  component: IconButton,
  title: "Components/IconButton",
} as Meta;

const Template : Story<IconButtonProps> = (props: IconButtonProps) => (
  <IconButton {...props} />
);

export const Playground : Story<IconButtonProps> = Template.bind({});
