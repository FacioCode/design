import * as React from "react";
import { EmailField, EmailFieldProps } from "@components/EmailField";
import type { Meta, Story } from "@storybook/react";
import { ContainedButton } from "@components/Button";

export default {
  component: EmailField,
  title: "Components/Fields/Email Field",
} as Meta;

const Template : Story<EmailFieldProps> = (props: EmailFieldProps) => (
  <form onSubmit={(event) => event.preventDefault()}>
    <div><EmailField {...props} /></div>
    <ContainedButton type={"submit"}>Enviar</ContainedButton>
  </form>
);

export const Playground : Story<EmailFieldProps> = Template.bind({});
Playground.args = {
  id: "email-field",
  label: "E-mail",
  name: "email",
};

export const Required : Story<EmailFieldProps> = Template.bind({});
Required.args = {
  ...Playground.args,
  id: "required-email-field",
  required: true,
};
