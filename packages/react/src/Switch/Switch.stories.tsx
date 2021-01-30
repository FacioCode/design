import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import Switch from "./Switch";
import { SwitchProps } from "./Switch.types";

export default {
  component: Switch,
  title: "Components/Switch",
} as Meta;

const Template : Story<SwitchProps> = (props: SwitchProps) => (
  <Switch {...props} />
);

export const Playground : Story<SwitchProps> = Template.bind({});
Playground.args = {
  inputProps: { "aria-label": "Playground switch" },
  name: "playground",
};

export const Checked : Story<SwitchProps> = Template.bind({});
Checked.args = {
  defaultChecked: true,
  inputProps: { "aria-label": "Checked switch" },
  name: "checked",
};

export const Unchecked : Story<SwitchProps> = Template.bind({});
Unchecked.args = {
  defaultChecked: false,
  inputProps: { "aria-label": "Unchecked switch" },
  name: "unchecked",
};

export const Disabled : Story<SwitchProps> = Template.bind({});
Disabled.args = {
  disabled: true,
  inputProps: { "aria-label": "Disabled switch" },
  name: "disabled",
};

export const DisabledChecked : Story<SwitchProps> = Template.bind({});
DisabledChecked.args = {
  defaultChecked: true,
  disabled: true,
  inputProps: { "aria-label": "Disabled checked switch" },
  name: "disabledChecked",
};

