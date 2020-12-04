import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { ButtonBase } from "./ButtonBase";
import type { Props } from "./ButtonBase.types";

export default {
  component: ButtonBase,
  title: "Components/ButtonBase",
} as Meta;

const Template : Story<Props> = (props: Props) => <ButtonBase {...props} />;

export const Playground : Story<Props> = Template.bind({});
