import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { CloseIcon } from "../icons/CloseIcon";
import { SvgIcon } from "./SvgIcon";
import { SvgIconProps } from "./SvgIcon.types";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

export default {
  component: SvgIcon,
  title: "Components/SVG Icon",
} as Meta;

export const Close : Story<SvgIconProps> = (props: SvgIconProps) => <CloseIcon {...props} />;
Close.args = { titleAccess: "close" };

export const WhatsApp : Story<SvgIconProps> = (props: SvgIconProps) => <WhatsAppIcon {...props} />;
WhatsApp.args = { titleAccess: "WhatsApp" };
