import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Link } from "./Link";
import { LinkProps } from "./Link.types";
import { Typography } from "../Typography";

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
  href: "#",
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  },
};

const TemplateForButtonComponent : Story<LinkProps> = (props: LinkProps) => (
  <Typography component={"p"} variant={"caption"}>
    Esqueceu sua senha? <Link {...props} />
  </Typography>
);

export const ButtonComponent : Story<LinkProps> = TemplateForButtonComponent.bind({});
ButtonComponent.args = {
  children: "Crie uma nova senha",
  component: "button",
};
