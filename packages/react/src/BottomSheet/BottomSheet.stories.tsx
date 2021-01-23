import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";
import { BottomSheetProps } from "./BottomSheet.types";
import { ContainedButton } from "../Button";
import { Currency } from "../Currency";
import { Typography } from "../Typography";
import { sizeTokens } from "@faciocode/styles";

export default {
  component: BottomSheet,
  title: "Components/Bottom Sheet",
} as Meta;

const Template : Story<BottomSheetProps> = (props: BottomSheetProps) => {
  const [open, setOpen] = React.useState<BottomSheetProps["open"]>(props.open);

  const handleToggleBottomSheet = () => {
    setOpen((prevOpen) => Boolean(!prevOpen));
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <ContainedButton onClick={handleToggleBottomSheet}>Toggle Bottom Sheet</ContainedButton>
      <BottomSheet {...props} open={Boolean(open)}>
        {props.children}
        <ContainedButton color={"brand"} onClick={handleClose}>Contratar</ContainedButton>
      </BottomSheet>
    </>
  );
};

export const Playground : Story<BottomSheetProps> = Template.bind({});
Playground.args = {
  children: <Typography style={{ flexGrow: 1 }} variant={"bodyText2"}>
    Total a pagar: <Currency code={"BRL"}>9980.14</Currency>
  </Typography>,
};
