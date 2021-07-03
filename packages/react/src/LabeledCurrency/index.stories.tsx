import * as React from "react";
import LabeledCurrency, { LabeledCurrencyProps } from "@components/LabeledCurrency";
import type { Meta, Story } from "@storybook/react";
import { BottomSheet } from "@components/BottomSheet";
import { sizeTokens } from "@faciocode/styles";

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
  <LabeledCurrency {...props}>{props.children}</LabeledCurrency>
);

const TemplateWithBottomSheet : Story<LabeledCurrencyProps> = (props: LabeledCurrencyProps) => (
  <div style={{ minHeight: sizeTokens.baseFivefold }}>
    <BottomSheet>
      <Template {...props} />
    </BottomSheet>
  </div>
);

export const Playground : Story<LabeledCurrencyProps> = Template.bind({});
Playground.args = {
  "aria-label": "O total a pagar será de R$ 100",
  children: "Total a pagar",
  value: 100,
};

export const Loading : Story<LabeledCurrencyProps> = Template.bind({});
Loading.args = {
  ...Playground.args,
  loading: true,
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
  CurrencyTypographyProps: {
    variant: "headline2",
  },
  orientation: "vertical",
};

export const WithBottomSheet : Story<LabeledCurrencyProps> = TemplateWithBottomSheet.bind({});
WithBottomSheet.args = {
  ...Playground.args,
};
