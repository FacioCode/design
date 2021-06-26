import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { PasswordField, PasswordFieldProps } from "@components/PasswordField";
import { ContainedButton } from "@components/Button";

export default {
  component: PasswordField,
  title: "Components/Fields/Password Field",
} as Meta;

const Template : Story<PasswordFieldProps> = (props: PasswordFieldProps) => (
  <form onSubmit={(event) => event.preventDefault()}>
    <div><PasswordField {...props} /></div>
    <ContainedButton type={"submit"}>Enviar</ContainedButton>
  </form>
);

export const Playground : Story<PasswordFieldProps> = Template.bind({});
Playground.args = {
  id: "password-field",
  label: "Password",
  name: "password",
};

export const Required : Story<PasswordFieldProps> = Template.bind({});
Required.args = {
  ...Playground.args,
  id: "required-password-field",
  required: true,
};
