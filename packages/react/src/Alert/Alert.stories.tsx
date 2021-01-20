import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Alert } from "./Alert";
import type { AlertProps } from "./Alert.types";
import { Typography } from "../Typography";
import { AlertTitle } from "./AlertTitle";

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

export const Info : Story<AlertProps> = Template.bind({});
Info.args = {
  children: [
    <AlertTitle key={"title"}>Cadastro em revisão</AlertTitle>,
    <Typography key={"body"} variant={"bodyText2"}>
      Em breve você terá acesso aos serviços disponíveis para o seu perfil
    </Typography>,
  ],
  color: "info",
};

export const Warning : Story<AlertProps> = Template.bind({});
Warning.args = {
  children: [
    <AlertTitle key={"title"}>Depósito indisponível</AlertTitle>,
    <Typography key={"body"} variant={"bodyText2"}>
      O seu limite para desconto em folha já foi utilizado neste mês.
      Por isso não é possível agendar um depósito para a Poupe Facio.
    </Typography>,
  ],
  color: "warning",
};
