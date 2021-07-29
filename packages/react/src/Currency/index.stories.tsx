import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Currency } from "./Currency";
import type { CurrencyProps } from "./Currency.types";

export default {
  component: Currency,
  title: "Components/Currency",
} as Meta;

const Template : Story<CurrencyProps> = (props: CurrencyProps) => (
  <Currency {...props} />
);

export const Playground : Story<CurrencyProps> = Template.bind({});
Playground.args = {
  code: "BRL",
  value: 100,
};

export const ShowZero : Story<CurrencyProps> = Template.bind({});
ShowZero.args = {
  ...Playground.args,
  showZero: true,
  value: 0,
};
