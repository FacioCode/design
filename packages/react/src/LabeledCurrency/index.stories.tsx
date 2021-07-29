import * as React from "react";
import { LabeledCurrency, LabeledCurrencyProps } from "@components/LabeledCurrency";
import type { Meta, Story } from "@storybook/react";

export default {
  component: LabeledCurrency,
  title: "Components/Labeled Currency",
} as Meta;

const Template : Story<LabeledCurrencyProps> = (props: LabeledCurrencyProps) => (
  <LabeledCurrency label={props.label} {...props} />
);

export const Playground : Story<LabeledCurrencyProps> = Template.bind({});
Playground.args = {
  CurrencyProps: { value: 100 },
  "aria-label": "O total a pagar será de R$ 100",
  label: "Total a pagar",
};
Playground.storyName = "Labeled Currency";

export const VerticalExample : Story<LabeledCurrencyProps> = Template.bind({});
VerticalExample.args = {
  ...Playground.args,
  LabelTypographyProps: { variant: "bodyText1" },
  orientation: "vertical",
  variant: "headline2",
};
