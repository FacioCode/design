import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { SkeletonProps } from "./Skeleton.types";

export default {
  component: Skeleton,
  title: "Components/Skeleton",
} as Meta;

const Template : Story<SkeletonProps> = (props: SkeletonProps) => (
  <Skeleton {...props} />
);

export const Playground : Story<SkeletonProps> = Template.bind({});
Playground.args = {};
