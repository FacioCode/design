import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { TooltipProps } from "./Tooltip.types";
import { IconButton } from "../IconButton";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import CloseIcon from "../icons/CloseIcon";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
} as Meta;

const Template : Story<TooltipProps> = (props: TooltipProps) => (
  <Tooltip {...props} title={props.title}>
    {props.children}
  </Tooltip>
);

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
