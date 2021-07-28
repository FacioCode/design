import * as React from "react";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { AppIcon } from "@svg-icons/AppIcon";
import { ApproveIcon } from "@components/SvgIcon/ApproveIcon";
import { CloseIcon } from "@svg-icons/CloseIcon";
import { ForbiddenIcon } from "@svg-icons/ForbiddenIcon";
import { ReceivedIcon } from "@svg-icons/ReceivedIcon";
import { SvgIcon } from "./SvgIcon";
import { SvgIconProps } from "./SvgIcon.types";
import { WalletIcon } from "@svg-icons/WalletIcon";
import { WarningIcon } from "@svg-icons/WarningIcon";
import { WhatsAppIcon } from "@svg-icons/WhatsAppIcon";

export default {
  component: SvgIcon,
  title: "Components/SVG Icon",
} as ComponentMeta<typeof SvgIcon>;

export const App : ComponentStory<typeof AppIcon> = (args: SvgIconProps) => (
  <AppIcon {...args} />
);
App.args = { titleAccess: "Aplicativo" };

export const Approve : ComponentStory<typeof ApproveIcon> = (args) => (
  <ApproveIcon {...args} />
);
Approve.args = { titleAccess: "Aprovar" };

export const Close : ComponentStory<typeof CloseIcon> = (args) => (
  <CloseIcon {...args} />
);
Close.args = { titleAccess: "Fechar" };

export const Forbidden: ComponentStory<typeof ForbiddenIcon> = (args) => (
  <ForbiddenIcon {...args} />
);
Forbidden.args = { titleAccess: "Reprovar" };

export const Received : ComponentStory<typeof ReceivedIcon> = (args) => (
  <ReceivedIcon {...args} />
);
Received.args = { titleAccess: "Crédito consignado" };

export const Wallet : ComponentStory<typeof WalletIcon> = (args) => (
  <WalletIcon {...args} />
);
Wallet.args = { titleAccess: "Adiantamento de salário" };

export const Warning : ComponentStory<typeof WarningIcon> = (args) => (
  <WarningIcon {...args} />
);
Warning.args = { titleAccess: "Aviso" };

export const WhatsApp : ComponentStory<typeof WhatsAppIcon> = (args) => (
  <WhatsAppIcon {...args} />
);
WhatsApp.args = { titleAccess: "WhatsApp" };
WhatsApp.storyName = "WhatsApp";
