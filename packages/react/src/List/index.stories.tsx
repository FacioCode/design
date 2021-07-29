import * as React from "react";
import { List, ListProps } from ".";
import { Meta, Story } from "@storybook/react";

import { Currency } from "@components/Currency";
import { ListInstallmentItem } from "@components/ListInstallmentItem";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@components/ListItemText";
import { ListSubheader } from "@components/ListSubheader";

export default {
  component: List,
  subcomponents: { ListItem, ListItemText },
  title: "Components/List",
} as Meta;

const Template : Story<ListProps> = (props: ListProps) => (
  <List {...props} />
);

export const Playground : Story<ListProps> = Template.bind({});
Playground.args = {};
Playground.storyName = "List";

export const WithListInstallmentItem : Story<ListProps> = Template.bind({});
WithListInstallmentItem.args = {
  ...Playground.args,
  children: [
    <ListSubheader key={"subheader-0"}>Parcelas pagas (1)</ListSubheader>,
    <ListInstallmentItem
      billingDate={"2021-06-13"}
      key={"installment-1"}
      label={"Parcela 1"}
      variant={"paid"}>
      <Currency value={100} />
    </ListInstallmentItem>,
    <ListSubheader key={"subheader-1"}>Parcelas pendentes (2)</ListSubheader>,
    <ListInstallmentItem
      billingDate={"2021-07-13"}
      key={"installment-2"}
      label={"Parcela 2"}
      variant={"delayed"}>
      <Currency showZero={true} value={100} />
    </ListInstallmentItem>,
    <ListInstallmentItem
      billingDate={"2021-08-13"}
      key={"installment-3"}
      label={"Parcela 3"}
      variant={"pending"}
    >
      <Currency value={100} />
    </ListInstallmentItem>,
    <ListInstallmentItem
      billingDate={"2021-09-13"}
      key={"installment-4"}
      label={"Parcela 4"}
      variant={"zero"}
    >
      <Currency showZero={true} value={0} />
    </ListInstallmentItem>,
  ],
};
