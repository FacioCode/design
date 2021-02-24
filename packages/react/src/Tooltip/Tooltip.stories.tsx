import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Tooltip, TooltipProps } from "@components/Tooltip";
import { ApproveIcon } from "@svg-icons/ApproveIcon";
import { CloseIcon } from "@svg-icons/CloseIcon";
import { IconButton } from "@components/IconButton";
import { WhatsAppIcon } from "@svg-icons/WhatsAppIcon";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
} as Meta;

const Template : Story<TooltipProps> = (props: TooltipProps) => (
  <Tooltip {...props} title={props.title}>
    {props.children}
  </Tooltip>
);

export const ApproveIconButton = Template.bind({});
ApproveIconButton.args = {
  children: <IconButton aria-label={"Aprovar"}><ApproveIcon /></IconButton>,
  title: "Aprovar",
};

export const CloseIconButton = Template.bind({});
CloseIconButton.args = {
  children: <IconButton aria-label={"Fechar"}><CloseIcon /></IconButton>,
  title: "Fechar",
};

export const WhatsAppIconButton = Template.bind({});
WhatsAppIconButton.args = {
  children: <IconButton aria-label={"WhatsApp"}><WhatsAppIcon /></IconButton>,
  title: "WhatsApp",
};
