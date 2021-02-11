import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Alert } from "./Alert";
import type { AlertProps } from "./Alert.types";
import { AlertTitle } from "./AlertTitle";
import { Typography } from "../Typography";

export default {
  component: Alert,
  subcomponents: { AlertTitle },
  title: "Components/Alert",
} as Meta;

const Template : Story<AlertProps> = (props: AlertProps) => <Alert {...props} />;

export const Playground : Story<AlertProps> = Template.bind({});
Playground.args = {
  children: "Alert content",
};

export const FilledSuccess : Story<AlertProps> = Template.bind({});
FilledSuccess.args = {
  children: [
    <AlertTitle key={"title"}>Poupe Facio</AlertTitle>,
    "Uma maneira prática de economizar, disponível para você.",
  ],
  color: "success",
  icon: false,
  variant: "filled",
};

export const StandardInfo : Story<AlertProps> = Template.bind({});
StandardInfo.args = {
  children: [
    <AlertTitle key={"title"}>Cadastro em revisão</AlertTitle>,
    "Em breve você terá acesso aos serviços disponíveis para o seu perfil.",
  ],
  color: "info",
  variant: "standard",
};

export const StandardInfo2 : Story<AlertProps> = Template.bind({});
StandardInfo2.args = {
  children: [
    <AlertTitle key={"title"}>Envie os documentos</AlertTitle>,
    "Para liberar alguns serviços, precisamos validar sua identidade, endereço e holerite.",
  ],
};

export const StandardInfo3 : Story<AlertProps> = Template.bind({});
StandardInfo3.args = {
  children: [
    <AlertTitle key={"title"}>Depósito no Banco do Brasil</AlertTitle>,
    <Typography key={"bankBranchText"} variant={"bodyText2"}>
      Agência <data>1234</data>
    </Typography>,
    <Typography key={"bankAccountText"} variant={"bodyText2"}>
      Conta <data value={"123456"}>12345-6</data>
    </Typography>,
  ],
};

export const Warning1 : Story<AlertProps> = Template.bind({});
Warning1.args = {
  children: [
    <AlertTitle key={"title"}>Depósito indisponível</AlertTitle>,
    <Typography key={"body"} variant={"bodyText2"}>
      O seu limite para desconto em folha já foi utilizado neste mês.
      Por isso, não é possível agendar um depósito para a Poupe Facio.
    </Typography>,
  ],
  color: "warning",
  variant: "standard",
};

export const Warning2 : Story<AlertProps> = Template.bind({});
Warning2.args = {
  children: [
    <AlertTitle key={"title"}>Sem margem para desconto</AlertTitle>,
    "Você precisa ter margem para desconto no salário para poder solicitar um novo crédito consignado.",
  ],
  color: "warning",
  variant: "standard",
};
