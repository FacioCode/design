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

export const LargeUnderline : Story<TextFieldProps> = Template.bind({});
LargeUnderline.args = {
  helperText: "Helper text for large with underline",
  id: "large-underline",
  label: "Large underline label",
  size: "large",
  variant: "underline",
};

export const LargeFilled : Story<TextFieldProps> = Template.bind({});
LargeFilled.args = {
  helperText: "Helper text for large input",
  id: "large-filled",
  label: "Large filled label",
  size: "large",
  variant: "filled",
};

export const DisabledLargeFilled : Story<TextFieldProps> = Template.bind({});
DisabledLargeFilled.args = {
  ...LargeFilled.args,
  disabled: true,
  id: "disabled-large-filled",
};

export const ErrorLargeFilled : Story<TextFieldProps> = Template.bind({});
ErrorLargeFilled.args = {
  ...LargeFilled.args,
  error: true,
  id: "error-large-filled",
};

export const FullWidthLargeFilled : Story<TextFieldProps> = Template.bind({});
FullWidthLargeFilled.args = {
  ...LargeFilled.args,
  fullWidth: true,
  id: "full-width-large-filled",
};

export const RequiredLargeFilled : Story<TextFieldProps> = Template.bind({});
RequiredLargeFilled.args = {
  ...LargeFilled.args,
  id: "required-large-filled",
  required: true,
};
