import * as React from "react";
import { ContainedButton, LinkButton } from "../Button";
import type { Meta, Story } from "@storybook/react";
import { Snackbar } from "./Snackbar";
import { SnackbarProps } from "./Snackbar.types";
import { Alert, AlertTitle } from "../Alert";

export default {
  component: Snackbar,
  title: "Components/Snackbar",
} as Meta;

const Template : Story<SnackbarProps> = (props: SnackbarProps) => {
  const [open, setOpen] = React.useState<SnackbarProps["open"]>(props.open);

  const handleToggleSnackbar = () => setOpen((prevOpen) => !prevOpen);
  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason !== "clickaway") {
      setOpen(false);
    }
  };
  const action = <LinkButton color={"inherit"} onClick={handleClose}>{props.action}</LinkButton>;

  return (
    <>
      <ContainedButton onClick={handleToggleSnackbar}>Open/close snackbar</ContainedButton>
      <Snackbar
        {...props}
        action={action}
        onClose={handleClose}
        open={open}
      />
    </>
  );
};

export const Playground : Story<SnackbarProps> = Template.bind({});
Playground.args = {
  action: "Fechar",
  message: "Mensagem da Snackbar",
};

export const WithWarningColor : Story<SnackbarProps> = Template.bind({});
WithWarningColor.args = {
  children: <>
    <AlertTitle>Ops! Não conseguimos abrir o seu&nbsp;WhatsApp</AlertTitle>
    Por favor, adicione o nosso contato no WhatsApp <br />ou envie uma mensagem por&nbsp;e-mail.
  </>,
  color: "warning",
};

export const WithErrorColor : Story<SnackbarProps> = Template.bind({});
WithErrorColor.args = {
  children: <>
    <AlertTitle>Ops! Parece que você está sem conexão à Internet</AlertTitle>
    Por favor, verifique sua conexão e tente novamente.
  </>,
  color: "error",
};
