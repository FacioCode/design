import * as React from "react";

import { ListSubheader, ListSubheaderProps } from ".";
import type { Meta, Story } from "@storybook/react";
import { List } from "@components/List";

export default {
  component: ListSubheader,
  title: "Components/List Subheader",
} as Meta;

const Template : Story<ListSubheaderProps> = (props: ListSubheaderProps) => (
  <List>
    <ListSubheader {...props} />
  </List>
);

export const Playground : Story<ListSubheaderProps> = Template.bind({});
Playground.args = {
  children: "Parcelas",
};

export const DisableGutters : Story<ListSubheaderProps> = Template.bind({});
DisableGutters.args = {
  ...Playground.args,
  disableGutters: true,
};
