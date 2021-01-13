import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { TextField } from "./TextField";
import type { TextFieldProps } from "./TextField.types";

export default {
  component: TextField,
  title: "Components/Text Field",
} as Meta;

const Template : Story<TextFieldProps> = (props: TextFieldProps) => (
  <TextField {...props} />
);

export const Playground : Story<TextFieldProps> = Template.bind({});
Playground.args = {
  id: "playground",
  label: "Label",
};

export const Focused : Story<TextFieldProps> = Template.bind({});
Focused.args = {
  focused: true,
  id: "focused",
  label: "Focused",
};

export const WithValue : Story<TextFieldProps> = Template.bind({});
WithValue.args = {
  id: "with-value",
  label: "Label",
  value: "Value",
};

export const Placeholder : Story<TextFieldProps> = Template.bind({});
Placeholder.args = {
  id: "placeholder",
  label: "Label",
  placeholder: "Only numbers",
};

export const Email : Story<TextFieldProps> = Template.bind({});
Email.args = {
  id: "email",
  label: "E-mail address",
  type: "email",
};

export const Password : Story<TextFieldProps> = Template.bind({});
Password.args = {
  id: "password",
  label: "Password",
  type: "password",
};

export const Multiline : Story<TextFieldProps> = Template.bind({});
Multiline.args = {
  id: "multiline",
  label: "Notes",
  multiline: true,
  rows: 3,
};

export const Disabled : Story<TextFieldProps> = Template.bind({});
Disabled.args = {
  disabled: true,
  id: "disabled",
  label: "Disabled",
};

export const CurrencyWithoutCents : Story<TextFieldProps> = Template.bind({});
CurrencyWithoutCents.args = {
  InputProps: {
    endAdornment: ",00",
    startAdornment: "R$",
  },
  id: "currency",
  label: "Amount",
  type: "number",
};
