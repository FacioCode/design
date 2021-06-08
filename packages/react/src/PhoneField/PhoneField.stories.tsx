import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { PhoneField } from "./PhoneField";
import type { PhoneFieldProps } from "@components/PhoneField/PhoneField.types";
import { ContainedButton } from "@components/Button";

export default {
  component: PhoneField,
  title: "Field Components/Phone Field",
} as Meta;

const Template : Story<PhoneFieldProps> = (props: PhoneFieldProps) => (
  <form onSubmit={(event) => event.preventDefault()}>
    <div><PhoneField {...props} /></div>
    <ContainedButton type={"submit"}>Enviar</ContainedButton>
  </form>
);

export const Playground : Story<PhoneFieldProps> = Template.bind({});
Playground.args = {
  id: "phone-field",
  label: "Número de telefone",
  name: "phone",
};

export const Required : Story<PhoneFieldProps> = Template.bind({});
Required.args = {
  ...Playground.args,
  id: "required-phone-field",
  required: true,
};
