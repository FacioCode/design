import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import type { ButtonProps } from "./Button.types";
import { ContainedButton } from "./ContainedButton";
import { LinkButton } from "./LinkButton";
import { OutlinedButton } from "./OutlinedButton";

export default {
  subcomponents: { ContainedButton, LinkButton, OutlinedButton },
  title: "Components/Buttons",
} as Meta;

export const Playground : Story<ButtonProps> = (props: ButtonProps) => (
  <>
    <ContainedButton {...props} />
    <OutlinedButton {...props} />
    <LinkButton {...props} />
  </>
);
Playground.args = {
  children: "Button label",
};

export const TwoFullWidthMediumButtons : Story<ButtonProps> = (props: ButtonProps) => (
  <>
    <ContainedButton {...props}>Sign in</ContainedButton>
    <br />
    <LinkButton {...props}>Need help?</LinkButton>
  </>
);
TwoFullWidthMediumButtons.args = {
  ...Playground.args,
  fullWidth: true,
  size: "medium",
};
