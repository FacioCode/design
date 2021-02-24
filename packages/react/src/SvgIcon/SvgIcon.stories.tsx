import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { ApproveIcon } from "@components/SvgIcon/ApproveIcon";
import { CloseIcon } from "@svg-icons/CloseIcon";
import { ForbiddenIcon } from "@svg-icons/ForbiddenIcon";
import { ReceivedIcon } from "@svg-icons/ReceivedIcon";
import { SvgIcon } from "./SvgIcon";
import { SvgIconProps } from "./SvgIcon.types";
import { WalletIcon } from "@svg-icons/WalletIcon";
import { WhatsAppIcon } from "@svg-icons/WhatsAppIcon";

export default {
  component: SvgIcon,
  title: "Components/SVG Icon",
} as Meta;

export const Approve : Story<SvgIconProps> = (props: SvgIconProps) => <ApproveIcon {...props} />;
Approve.args = { titleAccess: "Aprovar" };

export const Close : Story<SvgIconProps> = (props: SvgIconProps) => <CloseIcon {...props} />;
Close.args = { titleAccess: "Fechar" };

export const Forbidden: Story<SvgIconProps> = (props: SvgIconProps) => <ForbiddenIcon {...props} />;
Forbidden.args = { titleAccess: "Reprovar" };

export const Received : Story<SvgIconProps> = (props: SvgIconProps) => <ReceivedIcon {...props} />;
Received.args = { titleAccess: "Crédito consignado" };

export const Wallet : Story<SvgIconProps> = (props: SvgIconProps) => <WalletIcon {...props} />;
Wallet.args = { titleAccess: "Adiantamento de salário" };

export const WhatsApp : Story<SvgIconProps> = (props: SvgIconProps) => <WhatsAppIcon {...props} />;
WhatsApp.args = { titleAccess: "WhatsApp" };
WhatsApp.storyName = "WhatsApp";
