import * as React from "react";
import LabeledCurrency, { LabeledCurrencyProps } from "@components/LabeledCurrency";
import type { Meta, Story } from "@storybook/react";

export default {
  argTypes: {
    "aria-label": {
      category: "Accessibility",
    },
  },
  component: LabeledCurrency,
  title: "Components/Labeled Currency",
} as Meta;

const Template : Story<LabeledCurrencyProps> = (props: LabeledCurrencyProps) => (
  <LabeledCurrency
    code={props.code}
    {...props}
  >
    {props.children}
  </LabeledCurrency>
);

export const Playground : Story<LabeledCurrencyProps> = Template.bind({});
Playground.args = {
  "aria-label": "O total a pagar será de R$ 100",
  children: 100,
  code: "BRL",
  label: "Total a pagar",
};

export const AssertiveAlertExample : Story<LabeledCurrencyProps> = Template.bind({});
AssertiveAlertExample.args = {
  ...Playground.args,
  "aria-live": "assertive",
  role: "alert",
};

export const VerticalExample : Story<LabeledCurrencyProps> = Template.bind({});
VerticalExample.args = {
  ...Playground.args,
  currencyVariant: "headline2",
  orientation: "vertical",
};
