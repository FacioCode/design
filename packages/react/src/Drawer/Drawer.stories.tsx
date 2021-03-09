import * as React from "react";
import { Drawer, DrawerProps } from "@components/Drawer";
import type { Meta, Story } from "@storybook/react";
import { Container } from "@components/Container";
import { sizeTokens } from "@faciocode/styles";
import { OutlinedButton } from "@components/Button";

export default {
  component: Drawer,
  title: "Components/Drawer",
} as Meta;

const Template : Story<DrawerProps> = (props: DrawerProps) => {
  const [open, setOpen] = React.useState<DrawerProps["open"]>(props.open);

  type Event = React.KeyboardEvent | React.MouseEvent;

  const handleToggle = (openProp: DrawerProps["open"]) => (event: Event) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(openProp);
  };

  return (
    <React.Fragment>
      <OutlinedButton onClick={handleToggle(true)}>Toggle drawer</OutlinedButton>
      <Drawer
        {...props}
        onClick={handleToggle(false)}
        onKeyDown={handleToggle(false)}
        open={open}
      />
    </React.Fragment>
  );
};

export const Playground : Story<DrawerProps> = Template.bind({});
Playground.args = {
  anchor: "right",
  children: (
    <Container maxWidth={"xs"} style={{ minWidth: sizeTokens.baseThirtyOneFold }}>
      Right drawer content
    </Container>
  ),
  open: false,
};
