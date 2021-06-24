import * as React from "react";
import { CpfField, CpfFieldProps } from "@components/CpfField";
import type { Meta, Story } from "@storybook/react";
import { ContainedButton } from "@components/Button";
import { PhoneFieldProps } from "@components/PhoneField";

export default {
  component: CpfField,
  title: "Components/Fields/CPF Field",
} as Meta;

const Template : Story<CpfFieldProps> = (props: CpfFieldProps) => (
  <form onSubmit={(event) => event.preventDefault()}>
    <div><CpfField {...props} /></div>
    <ContainedButton type={"submit"}>Enviar</ContainedButton>
  </form>
);

export const Playground : Story<CpfFieldProps> = Template.bind({});
Playground.args = {
  id: "cpf-field",
  label: "CPF",
  name: "cpf",
};

export const Required : Story<PhoneFieldProps> = Template.bind({});
Required.args = {
  ...Playground.args,
  id: "required-cpf-field",
  required: true,
};
