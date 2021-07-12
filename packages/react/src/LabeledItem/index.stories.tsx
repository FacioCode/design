import * as React from "react";
import { LabeledItem, LabeledItemProps } from "@components/LabeledItem/LabeledItem";
import type { Meta, Story } from "@storybook/react";
import { BottomSheet } from "@components/BottomSheet";
import { sizeTokens } from "@faciocode/styles";

export default {
  argTypes: {
    "aria-label": {
      category: "Accessibility",
    },
  },
  component: LabeledItem,
  title: "Components/Labeled Item",
} as Meta;

const Template : Story<LabeledItemProps> = (props: LabeledItemProps) => (
  <LabeledItem {...props}>{props.children}</LabeledItem>
);

const TemplateWithBottomSheet : Story<LabeledItemProps> = (props: LabeledItemProps) => (
  <div style={{ minHeight: sizeTokens.baseNinefold }}>
    <BottomSheet>
      <Template {...props} />
    </BottomSheet>
  </div>
);

export const Playground : Story<LabeledItemProps> = Template.bind({});
Playground.args = {
  "aria-label": "Accessible text for label and content",
  children: "Children content",
  label: "Label content",
};
Playground.storyName = "Labeled Item";

export const Loading : Story<LabeledItemProps> = Template.bind({});
Loading.args = {
  ...Playground.args,
  loading: true,
};

export const AssertiveAlertExample : Story<LabeledItemProps> = Template.bind({});
AssertiveAlertExample.args = {
  ...Playground.args,
  "aria-live": "assertive",
  role: "alert",
};

export const VerticalExample : Story<LabeledItemProps> = Template.bind({});
VerticalExample.args = {
  ...Playground.args,
  orientation: "vertical",
};

export const VerticalWithLabelTypography : Story<LabeledItemProps> = Template.bind({});
VerticalWithLabelTypography.args = {
  ...VerticalExample.args,
  LabelTypographyProps: { variant: "bodyText1" },
  variant: "headline2",
};

export const Error : Story<LabeledItemProps> = Template.bind({});
Error.args = {
  ...Playground.args,
  color: "error",
};


export const WithBottomSheet : Story<LabeledItemProps> = TemplateWithBottomSheet.bind({});
WithBottomSheet.args = Playground.args;
