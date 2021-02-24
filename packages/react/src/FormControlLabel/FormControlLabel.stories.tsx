import * as React from "react";
import { FormControlLabel, FormControlLabelProps } from "@components/FormControlLabel";
import type { Meta, Story } from "@storybook/react";
import { Switch } from "@components/Switch";

export default {
  component: FormControlLabel,
  title: "Utilities/Form Control Label",
} as Meta;

const Template : Story<FormControlLabelProps> = (props: FormControlLabelProps) => (
  <FormControlLabel {...props} control={props.control} label={props.label} />
);

export const WithSwitch : Story<FormControlLabelProps> = Template.bind({});
WithSwitch.args = {
  control: <Switch />,
  label: "Switch label",
};
