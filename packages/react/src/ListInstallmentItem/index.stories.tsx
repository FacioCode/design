import * as React from "react";
import { ListInstallmentItem, ListInstallmentItemProps } from ".";
import type { Meta, Story } from "@storybook/react";
import { Currency } from "@components/Currency";

export default {
  component: ListInstallmentItem,
  title: "Components/List Installment Item",
} as Meta;

const Template : Story<ListInstallmentItemProps> = (props: ListInstallmentItemProps) => (
  <ListInstallmentItem variant={props.variant} {...props} />
);

export const Playground : Story<ListInstallmentItemProps> = Template.bind({});
Playground.args = {
  billingDate: "2021-06-13",
  children: <Currency value={100} />,
  label: "Parcela 1",
};

export const Paid : Story<ListInstallmentItemProps> = Template.bind({});
Paid.args = {
  ...Playground.args,
  billingDate: "2021-06-13",
  label: "Parcela 2",
  variant: "paid",
};

export const Delayed : Story<ListInstallmentItemProps> = Template.bind({});
Delayed.args = {
  ...Playground.args,
  billingDate: "2021-07-13",
  label: "Parcela 3",
  variant: "delayed",
};

export const Pending : Story<ListInstallmentItemProps> = Template.bind({});
Pending.args = {
  ...Playground.args,
  billingDate: "2021-08-13",
  label: "Parcela 4",
  variant: "pending",
};

export const Zero : Story<ListInstallmentItemProps> = Template.bind({});
Zero.args = {
  ...Playground.args,
  billingDate: "2021-09-13",
  children: <Currency showZero={true} value={0} />,
  label: "Parcela 5",
  variant: "zero",
};

export const Loading : Story<ListInstallmentItemProps> = Template.bind({});
Loading.args = {
  ...Playground.args,
  loading: true,
};
