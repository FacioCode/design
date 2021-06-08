import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { TextField } from "./TextField";
import type { TextFieldProps } from "./TextField.types";

export default {
  component: TextField,
  title: "Field Components/Text Field",
} as Meta;

const Template : Story<TextFieldProps> = (props: TextFieldProps) => (
  <TextField {...props} />
);

export const Playground : Story<TextFieldProps> = Template.bind({});
Playground.args = {
  helperText: "Helper text",
  id: "playground",
  label: "Label",
};

export const Large : Story<TextFieldProps> = Template.bind({});
Large.args = {
  helperText: "Helper text for large input",
  id: "large-playground",
  label: "Large label",
  size: "large",
};
Large.parameters = {
  docs: {
    description: {
      story: "Large inputs are useful when we are asking for one information per time, one field per screen.",
    },
  },
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

export const DisabledLarge : Story<TextFieldProps> = Template.bind({});
DisabledLarge.args = {
  ...Large.args,
  disabled: true,
  id: "disabled-large",
};

export const Error : Story<TextFieldProps> = Template.bind({});
Error.args = {
  ...Playground.args,
  error: true,
  id: "error",
};

export const ErrorLarge : Story<TextFieldProps> = Template.bind({});
ErrorLarge.args = {
  ...Large.args,
  error: true,
  id: "error-large",
};

export const FullWidthLarge : Story<TextFieldProps> = Template.bind({});
FullWidthLarge.args = {
  ...Large.args,
  fullWidth: true,
  id: "full-width-large",
};

export const RequiredLarge : Story<TextFieldProps> = Template.bind({});
RequiredLarge.args = {
  ...Large.args,
  id: "required-large",
  required: true,
};

export const LargeUnderline : Story<TextFieldProps> = Template.bind({});
LargeUnderline.args = {
  ...Large.args,
  helperText: "Helper text for large with underline",
  id: "large-underline",
  label: "Large underline label",
  variant: "underline",
};
