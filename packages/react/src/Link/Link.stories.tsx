import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Link } from "./Link";
import { LinkProps } from "./Link.types";

export default {
  component: Link,
  title: "Components/Link",
} as Meta;

const Template : Story<LinkProps> = (props: LinkProps) => (
  <Link {...props} />
);

export const Playground : Story<LinkProps> = Template.bind({});
Playground.args = {
  children: "Link text",
};
