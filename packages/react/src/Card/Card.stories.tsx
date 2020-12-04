import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Card } from "./Card";
import type { Props } from "./Card.types";
import { Typography } from "../Typography";

export default {
  component: Card,
  title: "Components/Card",
} as Meta;

const Template : Story<Props> = (props: Props) => (
  <Card {...props} />
);

export const Playground : Story<Props> = Template.bind({});

export const Info : Story<Props> = Template.bind({});
Info.args = {
  children: [
    <Typography key={"title"} variant={"subtitle1"}>Your registration is under review</Typography>,
    <Typography key={"body"} variant={"bodyText2"}>
      Soon, you will have access to the services available for your credit profile.
    </Typography>,
  ],
  color: "info",
};
