import * as React from "react";
import { Badge, BadgeProps } from "@components/Badge";
import type { Story } from "@storybook/react";

export default {
  components: Badge,
  title: "Components/Badge",
};

const Template : Story<BadgeProps> = (props: BadgeProps) => (
  <Badge {...props} />
);

export const Playground : Story<BadgeProps> = Template.bind({});
Playground.args = {
  badgeContent: 9,
  children: "Operações pendentes",
  color: "primary",
};
