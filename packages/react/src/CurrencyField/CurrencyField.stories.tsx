import * as React from "react";
import { CurrencyField, CurrencyFieldProps } from "@components/CurrencyField";
import type { Meta, Story } from "@storybook/react";

export default {
  component: CurrencyField,
  title: "Components/Currency Field",
} as Meta;

const Template : Story<CurrencyFieldProps> = (props: CurrencyFieldProps) => (
  <CurrencyField {...props} />
);

export const Playground : Story<CurrencyFieldProps> = Template.bind({});
Playground.args = {
  id: "currency",
  label: "Valor",
};

export const DecimalInputMode : Story<CurrencyFieldProps> = Template.bind({});
DecimalInputMode.args = {
  ...Playground.args,
  id: "decimal-input-mode",
  inputMode: "decimal",
};

export const NumericInputMode : Story<CurrencyFieldProps> = Template.bind({});
NumericInputMode.args = {
  ...Playground.args,
  id: "numeric-input-mode",
  inputMode: "numeric",
};

export const FullWidth : Story<CurrencyFieldProps> = Template.bind({});
FullWidth.args = {
  ...Playground.args,
  fullWidth: true,
};

export const LimitExample : Story<CurrencyFieldProps> = Template.bind({});
LimitExample.args = {
  ...Playground.args,
  allowRecording: true,
  id: "detail",
  inputMode: "decimal",
  label: "Margem consignável correta",
  max: 500,
  min: 0,
  name: "limit-example",
  required: true,
  size: "medium",
  step: 1,
};

export const LargeLimitExample : Story<CurrencyFieldProps> = Template.bind({});
LargeLimitExample.args = {
  ...LimitExample.args,
  id: "large-limit-example",
  size: "large",
};

