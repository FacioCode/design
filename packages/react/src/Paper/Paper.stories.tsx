import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Paper } from "./Paper";
import type { PaperProps } from "./Paper.types";

export default {
  component: Paper,
  title: "Utilities/Paper",
} as Meta;

const Template : Story<PaperProps> = (props: PaperProps) => (
  <Paper {...props}>{props.children}</Paper>
);

export const Playground : Story<PaperProps> = Template.bind({});
Playground.args = {
  children: "Paper content",
};

export const Rounded : Story<PaperProps> = Template.bind({});
Rounded.args = {
  children: "Rounded paper content",
  square: false,
};

export const Elevation0 : Story<PaperProps> = Template.bind({});
Elevation0.args = {
  ...Playground.args,
  elevation: 0,
};
Elevation0.parameters = {
  docs: {
    description: {
      story: "Most elements that use `Paper` as a base do not apply elevation.",
    },
  },
};

export const Elevation2 : Story<PaperProps> = Template.bind({});
Elevation2.args = {
  ...Playground.args,
  elevation: 2,
};
Elevation2.parameters = {
  docs: {
    description: {
      story: "Components like `ContainedButton` in hover state applies elevation `2`.",
    },
  },
};

export const Elevation4 : Story<PaperProps> = Template.bind({});
Elevation4.args = {
  ...Playground.args,
  elevation: 4,
};
Elevation4.parameters = {
  docs: {
    description: {
      story: "Floating alerts, like `SnackbarContent`, receive elevation `4`.",
    },
  },
};

export const Elevation6 : Story<PaperProps> = Template.bind({});
Elevation6.args = {
  ...Playground.args,
  elevation: 6,
};
Elevation6.parameters = {
  docs: {
    description: {
      story: "Components like the `BottomSheet` receive an elevation `6`.",
    },
  },
};
