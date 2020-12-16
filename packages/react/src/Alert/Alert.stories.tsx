import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Alert } from "./Alert";
import type { AlertProps } from "./Alert.types";
import { Typography } from "../Typography";

export default {
  component: Alert,
  title: "Components/Alert",
} as Meta;

const Template : Story<AlertProps> = (props: AlertProps) => <Alert {...props} />;

export const Playground : Story<AlertProps> = Template.bind({});
Playground.args = {
  children: "Alert content",
};

export const Info : Story<AlertProps> = Template.bind({});
Info.args = {
  children: [
    <Typography key={"title"} variant={"subtitle1"}>Your registration is under review</Typography>,
    <Typography key={"body"} variant={"bodyText2"}>
      Soon, you will have access to the services available for your credit profile.
    </Typography>,
  ],
  color: "info",
};
